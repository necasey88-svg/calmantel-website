"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Outcome = {
  heading: string;
  tone: "good" | "caution";
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

const outcomes: Record<string, Outcome> = {
  masonry: {
    heading: "You’re a gas insert candidate.",
    tone: "good",
    body: "A wood-burning masonry fireplace is the classic gas-insert conversion. The insert slides into your existing firebox and vents through the chimney.",
    ctaLabel: "Explore Gas Inserts",
    ctaHref: "/fireplaces/gas-inserts",
  },
  prefab: {
    heading: "Likely a gas insert — compatibility check needed.",
    tone: "good",
    body: "Metal prefab fireboxes can often take a gas insert, but the model has to be verified against your unit dimensions and listing. Bring a photo and the model tag if you can find it.",
    ctaLabel: "Explore Gas Inserts",
    ctaHref: "/fireplaces/gas-inserts",
  },
  oldgas: {
    heading: "Could go either way — let’s look at it with you.",
    tone: "caution",
    body: "Replacing an old gas unit can mean a new insert or a full fireplace replacement, depending on what’s there today. Photos of the unit and room are the fastest way to a real answer.",
    ctaLabel: "Request a Project Estimate",
    ctaHref: "/estimate?product=Gas%20Fireplace%20-%20Replacing%20Existing%20Gas%20Unit",
  },
  none: {
    heading: "You need a new-construction gas fireplace system.",
    tone: "good",
    body: "With no existing firebox, an insert isn’t the right product. We plan a complete gas fireplace system with framing, venting, heat management, and finishes designed for the room.",
    ctaLabel: "Request a Project Estimate",
    ctaHref: "/estimate?product=New%20Construction%20Gas%20Fireplace",
  },
};

const systemBrands = [
  { name: "Heat & Glo", href: "/fireplaces/heat-and-glo", blurb: "Premium gas fireplaces" },
  { name: "Mendota", href: "/fireplaces/mendota", blurb: "High-performance fire views" },
  { name: "Napoleon", href: "/fireplaces/napoleon", blurb: "Gas and luxury linear units" },
  { name: "Ortal", href: "/fireplaces/ortal", blurb: "Frameless architectural" },
];

export default function GasFireplaceQualifier() {
  const [hasFireplace, setHasFireplace] = useState<null | boolean>(null);
  const [outcomeKey, setOutcomeKey] = useState<string | null>(null);

  const outcome = outcomeKey ? outcomes[outcomeKey] : null;

  function reset() {
    setHasFireplace(null);
    setOutcomeKey(null);
  }

  const answerBtn =
    "border border-[color:var(--ink)]/20 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] px-6 py-3.5 text-sm text-left transition-colors bg-white/70";

  return (
    <section className="bg-[#F9F7F3] border-y border-[color:var(--sand-deep)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
              Gas Insert or New Construction?
            </p>
            <h2
              className="text-3xl md:text-4xl font-medium text-[color:var(--ink)] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The right fireplace starts with what’s already in the wall.
            </h2>
            <p className="text-[color:var(--ink)]/60 leading-relaxed mb-8">
              A <strong className="font-medium text-[color:var(--ink)]">gas insert</strong> converts an
              existing fireplace. A <strong className="font-medium text-[color:var(--ink)]">new-construction
              fireplace system</strong> is built where no fireplace exists, with its own framing, venting,
              heat management, and finish plan.
            </p>

            {!outcome && hasFireplace === null && (
              <div>
                <p className="text-sm font-medium text-[color:var(--ink)] mb-4">
                  Do you currently have a wood-burning or gas fireplace in the home today?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button className={answerBtn} onClick={() => setHasFireplace(true)}>
                    <span className="font-medium">Yes</span> — there’s an existing fireplace
                  </button>
                  <button className={answerBtn} onClick={() => setOutcomeKey("none")}>
                    <span className="font-medium">No</span> — we’re adding one where none exists
                  </button>
                </div>
              </div>
            )}

            {!outcome && hasFireplace === true && (
              <div>
                <p className="text-sm font-medium text-[color:var(--ink)] mb-4">
                  What’s there today?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button className={answerBtn} onClick={() => setOutcomeKey("masonry")}>
                    <span className="font-medium">Wood-burning, brick/masonry</span>
                    <span className="block text-xs text-[color:var(--ink)]/50 mt-1">Built into the wall</span>
                  </button>
                  <button className={answerBtn} onClick={() => setOutcomeKey("prefab")}>
                    <span className="font-medium">Wood-burning, metal prefab</span>
                    <span className="block text-xs text-[color:var(--ink)]/50 mt-1">Metal firebox or panels inside</span>
                  </button>
                  <button className={answerBtn} onClick={() => setOutcomeKey("oldgas")}>
                    <span className="font-medium">Already gas</span>
                    <span className="block text-xs text-[color:var(--ink)]/50 mt-1">Older gas unit or log set</span>
                  </button>
                </div>
                <button onClick={reset} className="mt-4 text-xs text-[color:var(--ink)]/50 hover:text-[color:var(--accent)] transition-colors">
                  Back
                </button>
              </div>
            )}

            {outcome && (
              <div className="bg-white border border-[color:var(--sand-deep)] p-7">
                <p className={`text-xs uppercase tracking-[0.2em] mb-3 ${outcome.tone === "good" ? "text-[color:var(--accent)]" : "text-amber-700"}`}>
                  {outcome.tone === "good" ? "Recommended Path" : "Needs a Closer Look"}
                </p>
                <h3
                  className="text-2xl font-medium text-[color:var(--ink)] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {outcome.heading}
                </h3>
                <p className="text-sm text-[color:var(--ink)]/60 leading-relaxed mb-6">{outcome.body}</p>
                {outcomeKey === "none" && (
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink)]/40 mb-3">
                      Systems we commonly plan around
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {systemBrands.map((b) => (
                        <Link
                          key={b.name}
                          href={b.href}
                          className="border border-[color:var(--sand-deep)] hover:border-[color:var(--accent)] p-4 transition-colors group"
                        >
                          <p className="text-sm font-medium text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors">
                            {b.name}
                          </p>
                          <p className="text-[11px] text-[color:var(--ink)]/50 mt-1">{b.blurb}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link
                    href={outcome.ctaHref}
                    className="inline-block bg-[color:var(--ink)] text-white hover:bg-[color:var(--accent)] px-7 py-3 text-xs uppercase tracking-[0.16em] text-center transition-colors"
                  >
                    {outcome.ctaLabel}
                  </Link>
                  <button onClick={reset} className="text-xs text-[color:var(--ink)]/50 hover:text-[color:var(--accent)] transition-colors text-left">
                    Start over
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Ballarat / Mendota FV48 — muted art image bleeding off the top-right edge */}
          <div className="relative hidden lg:block self-start -mt-16 -mr-4 sm:-mr-6 lg:-mr-8">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/fireplaces/ballarat-fv48.webp"
                alt="Ballarat mantel in Smooth Kingsbury with Mendota FV48 fireplace"
                fill
                sizes="(min-width: 1024px) 620px, 0px"
                className="object-cover object-[65%_40%] scale-125 opacity-70"
              />
              {/* fade into the ivory section background toward the page edges */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#F9F7F3] via-transparent to-[#F9F7F3]/60 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#F9F7F3]/70 via-transparent to-[#F9F7F3] pointer-events-none" />
            </div>
            <p className="absolute bottom-6 left-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--ink)]/45">
              Ballarat Mantel in Smooth Kingsbury · Mendota FV48 Fireplace
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
