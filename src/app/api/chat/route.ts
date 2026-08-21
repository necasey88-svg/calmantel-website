import { NextRequest, NextResponse } from "next/server";
import { buildSiteKnowledge } from "@/lib/chat-knowledge";

export const runtime = "nodejs";

const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_MESSAGES = 20;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 30;

// In-memory per-instance limiter — a soft abuse guard, not a hard security
// boundary. Serverless instances are ephemeral and don't share this Map, so
// a determined abuser spread across cold starts isn't fully stopped; this is
// intentionally lightweight rather than adding a Redis/KV dependency for a
// low-traffic small-business widget.
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = requestCounts.get(ip);
  if (!entry || now > entry.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

const SYSTEM_PROMPT = `You are the website chat assistant for California Mantel & Fireplace (calmantel.com), a family-owned fireplace mantel manufacturer and installer serving California and Nevada.

Scope: only answer questions about CMF's products, services, showrooms, and scheduling, using the reference info below. Do not discuss unrelated topics. Keep replies short and conversational (2-4 sentences), not open-ended chit-chat.

Do not fabricate: exact prices (direct to an estimate instead), real-time stock/inventory, specific appointment time-slot availability, or safety/repair instructions beyond what's in the reference info — for anything you're not confident about, say so plainly and offer to connect them with a specialist.

Showroom displays: if a visitor asks what's on display, in person, or "can I see X" at a showroom, use the SHOWROOM DISPLAY UNITS list — it's the only accurate source for what's physically on the floor. Don't assume something is on display just because it's in the general catalog above it.

Mantel sizing: mantels come in the fixed sizes listed per product (commonly 42"/48"/54"/60") — never claim a mantel can be custom-built to an arbitrary width; that's not something you know to be true. Whenever a visitor gives ANY dimension for a mantel, simply point them to the "Find Your Mantel" search tool at /mantels — its search bar takes a size in inches and returns mantels that fit. Don't ask clarifying questions about it first, just direct them there.

Lead capture: once you have a visitor's name and at least one of phone/email, plus what they're interested in, call capture_lead. Don't interrogate — ask for one or two missing details at a time as the conversation flows naturally.

Human handoff: call request_human_handoff immediately (with whatever contact info you have so far, even if incomplete) when the visitor explicitly asks for a person, seems frustrated, or asks something outside what you can confidently answer. Don't stall trying to resolve everything yourself first.

REFERENCE INFO:
${buildSiteKnowledge()}`;

const TOOLS = [
  {
    name: "capture_lead",
    description:
      "Record a qualified lead once name plus phone or email is known, so the sales team can follow up.",
    input_schema: {
      type: "object" as const,
      properties: {
        name: { type: "string" },
        phone: { type: "string" },
        email: { type: "string" },
        city: { type: "string" },
        project_type: { type: "string" },
        notes: { type: "string" },
      },
      required: ["name"],
    },
  },
  {
    name: "request_human_handoff",
    description:
      "Escalate to a human team member — visitor asked for a person, seems frustrated, or the question is outside what you can confidently answer.",
    input_schema: {
      type: "object" as const,
      properties: {
        reason: { type: "string" },
        name: { type: "string" },
        phone: { type: "string" },
        email: { type: "string" },
        notes: { type: "string" },
      },
      required: ["reason"],
    },
  },
];

type ChatMessage = { role: "user" | "assistant"; content: string };

function sanitizeHistory(messages: unknown): ChatMessage[] {
  if (!Array.isArray(messages)) return [];
  return messages
    .filter(
      (m): m is ChatMessage =>
        typeof m === "object" &&
        m !== null &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string"
    )
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "chat_unavailable" }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const messages = sanitizeHistory(body?.messages);
  if (messages.length === 0) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  let anthropicRes: Response;
  try {
    anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        tools: TOOLS,
        messages,
      }),
    });
  } catch {
    return NextResponse.json({ error: "chat_unavailable" }, { status: 503 });
  }

  if (!anthropicRes.ok) {
    return NextResponse.json({ error: "chat_unavailable" }, { status: 503 });
  }

  const data = await anthropicRes.json();
  const content: Array<
    | { type: "text"; text: string }
    | { type: "tool_use"; name: string; input: Record<string, string> }
  > = data.content ?? [];

  const text = content.find((b) => b.type === "text")?.text ?? "";
  const leadCall = content.find((b) => b.type === "tool_use" && b.name === "capture_lead");
  const handoffCall = content.find(
    (b) => b.type === "tool_use" && b.name === "request_human_handoff"
  );

  return NextResponse.json({
    reply: text,
    lead: leadCall && leadCall.type === "tool_use" ? leadCall.input : null,
    handoff: handoffCall && handoffCall.type === "tool_use" ? handoffCall.input : null,
  });
}
