"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { trackEvent, trackLeadConversion } from "@/lib/analytics";
import { getFirstTouch } from "@/lib/attribution";

// Same Web3Forms destination as Contact/Estimate so chat leads land in the
// same inbox the team already checks.
const ACCESS_KEY = "77eca617-9eb9-4352-8b5a-c89bf8870232";

const GREETING =
  "Hi! I can help with mantel and fireplace questions, showroom info, or getting you a project estimate. What can I help with?";

type Message = { role: "user" | "assistant"; content: string };
type LeadInput = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  project_type?: string;
  notes?: string;
};
type HandoffInput = { reason?: string; name?: string; phone?: string; email?: string; notes?: string };

async function submitLead(kind: "chatbot" | "chatbot_handoff", fields: Record<string, string>) {
  const firstTouch = getFirstTouch();
  const formData = new FormData();
  formData.set("access_key", ACCESS_KEY);
  formData.set("subject", kind === "chatbot_handoff" ? "Chat handoff request — calmantel.com" : "New Chat Lead — calmantel.com");
  formData.set("from_name", "California Mantel & Fireplace Website Chat");
  Object.entries(fields).forEach(([key, value]) => value && formData.set(key, value));
  Object.entries(firstTouch).forEach(([key, value]) => value && formData.set(key, value));

  try {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });
    trackLeadConversion({ lead_type: kind });
  } catch {
    // Lead delivery failure shouldn't break the chat UI — the visitor still
    // sees their conversation; nothing more to do without a retry queue.
  }
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: GREETING }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [handoffNotice, setHandoffNotice] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function handleOpen() {
    setOpen(true);
    if (messages.length === 1) trackEvent("chat_widget_opened");
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim().slice(0, 2000);
    if (!text || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok) {
        setUnavailable(true);
        return;
      }

      const data: { reply: string; lead: LeadInput | null; handoff: HandoffInput | null } = await res.json();

      // Claude sometimes calls a tool without any accompanying text block,
      // which would otherwise leave the widget silent right after the
      // visitor shares their info — always show something.
      const fallbackReply = data.handoff?.reason
        ? ""
        : data.lead?.name
          ? "Thanks — I've got your info and someone from our team will follow up shortly."
          : "Sorry, could you rephrase that?";
      const replyText = data.reply || fallbackReply;
      if (replyText) {
        setMessages((prev) => [...prev, { role: "assistant", content: replyText }]);
      }

      if (data.lead?.name) {
        await submitLead("chatbot", data.lead as Record<string, string>);
      }

      if (data.handoff?.reason) {
        await submitLead("chatbot_handoff", data.handoff as Record<string, string>);
        setHandoffNotice(true);
      }
    } catch {
      setUnavailable(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open ? (
        <div className="w-[min(92vw,380px)] h-[min(70vh,540px)] bg-[#F9F7F3] border border-[color:var(--sand-deep)] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-[color:var(--ink)] text-white">
            <span className="text-sm font-medium" style={{ fontFamily: "var(--font-playfair)" }}>
              California Mantel &amp; Fireplace
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/70 hover:text-white text-lg leading-none"
            >
              ×
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm leading-relaxed max-w-[85%] px-3 py-2 rounded-xl ${
                  m.role === "user"
                    ? "ml-auto bg-[color:var(--accent)] text-white"
                    : "bg-white border border-[color:var(--sand-deep)] text-[color:var(--ink)]"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="text-sm text-stone-400 px-3 py-2">…</div>
            )}
            {handoffNotice && (
              <div className="text-sm bg-[color:var(--sand)] border border-[color:var(--sand-deep)] rounded-xl px-3 py-2 text-[color:var(--ink)]">
                Thanks — a member of our team will reach out shortly.
              </div>
            )}
            {unavailable && (
              <div className="text-sm bg-red-50 border border-red-200 rounded-xl px-3 py-3 text-[color:var(--ink)] space-y-2">
                <p>Chat is temporarily unavailable. You can still reach us directly:</p>
                <div className="flex flex-col gap-1">
                  <Link href="/showrooms" className="text-[color:var(--accent-dark)] underline">
                    Call a showroom
                  </Link>
                  <Link href="/instant-estimate" className="text-[color:var(--accent-dark)] underline">
                    Get a project estimate
                  </Link>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-[color:var(--sand-deep)] p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              maxLength={2000}
              disabled={loading || unavailable}
              className="flex-1 border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || unavailable || !input.trim()}
              className="bg-[color:var(--ink)] hover:bg-[color:var(--accent)] disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={handleOpen}
          aria-label="Open chat"
          className="bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white rounded-full shadow-xl px-5 py-3 text-sm font-medium transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.17 0-2.29-.196-3.31-.554L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Chat with us
        </button>
      )}
    </div>
  );
}
