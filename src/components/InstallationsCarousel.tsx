"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const BA = "/projects/before-after/";

// A curated set of strong before/after transformations for the homepage scroller.
const installs: { title: string; before: string; after: string }[] = [
  { title: "Gas Insert + Traditional Mantel", before: `${BA}supreme-35-woomera-before.jpg`, after: `${BA}supreme-35-woomera-after.jpg` },
  { title: "Precast Mantel Surround", before: `${BA}barossa-old-world-bianco-before.jpg`, after: `${BA}barossa-old-world-bianco-after.jpg` },
  { title: "Electric + Traditional Mantel", before: `${BA}simplifire-36-mornington-before.jpg`, after: `${BA}simplifire-36-mornington-after.jpg` },
  { title: "Direct Vent Gas + Traditional Mantel", before: `${BA}st-tropez-6kx-before.jpg`, after: `${BA}st-tropez-6kx-after.jpg` },
  { title: "Traditional Mantel — Travertine Finish", before: `${BA}pitcairn-travertine-before.jpg`, after: `${BA}pitcairn-travertine-after.jpg` },
  { title: "Gas Insert + Contemporary Mantel", before: `${BA}supreme-30-bolte-bianco-before.jpg`, after: `${BA}supreme-30-bolte-bianco-after.jpg` },
  { title: "Superior DRT3540 + Clare Mantel", before: "/projects/service/superior-drt3540-before.jpg", after: "/projects/service/superior-drt3540-after.jpg" },
  { title: "Reclaimed Beam + Masonry", before: `${BA}beam-masonry-before.jpg`, after: `${BA}beam-masonry-after.jpg` },
  { title: "Contemporary Mantel Surround", before: `${BA}bondi-le-marais-before.jpg`, after: `${BA}bondi-le-marais-after.jpg` },
  { title: "Direct Vent Gas + Contemporary Mantel", before: `${BA}bolte-london-fog-6kx-before.jpg`, after: `${BA}bolte-london-fog-6kx-after.jpg` },
  { title: "Electric Fireplace — Brick Conversion", before: `${BA}redstone-3626-before.jpg`, after: `${BA}redstone-3626-after.jpg` },
  { title: "Mantel Cap Installation", before: `${BA}sydney-mantel-cap-before.jpg`, after: `${BA}sydney-mantel-cap-after.jpg` },
];

export default function InstallationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-3">
          <div>
            <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
              Real Projects
            </p>
            <h2
              className="text-4xl md:text-5xl font-medium text-[color:var(--ink)] tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Real transformations, quietly executed.
            </h2>
          </div>
          {/* Arrow controls */}
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous projects"
              className="w-11 h-11 rounded-full border border-[color:var(--ink)]/20 text-[color:var(--ink)]/70 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next projects"
              className="w-11 h-11 rounded-full border border-[color:var(--ink)]/20 text-[color:var(--ink)]/70 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-[color:var(--ink)]/55 max-w-xl leading-relaxed mb-8">
          From dated brick to finished focal points — installed with precision by our
          own certified teams across California.
        </p>
      </div>

      {/* Scrolling track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-6 lg:px-8 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {installs.map((p) => (
          <div
            key={p.title}
            className="snap-start shrink-0 w-[300px] sm:w-[440px]"
          >
            <div className="overflow-hidden border border-[color:var(--sand-deep)] grid grid-cols-2">
              <div className="relative aspect-[4/3]">
                <Image src={p.before} alt={`${p.title} — Before`} fill className="object-cover" sizes="220px" />
                <span className="absolute top-2.5 left-2.5 bg-[color:var(--ink)]/80 text-white text-[10px] uppercase tracking-widest px-2 py-0.5">Before</span>
              </div>
              <div className="relative aspect-[4/3]">
                <Image src={p.after} alt={`${p.title} — After`} fill className="object-cover" sizes="220px" />
                <span className="absolute top-2.5 left-2.5 bg-[color:var(--accent)]/90 text-white text-[10px] uppercase tracking-widest px-2 py-0.5">After</span>
              </div>
            </div>
            <p className="mt-4 text-[color:var(--ink)] font-medium text-base px-1" style={{ fontFamily: "var(--font-playfair)" }}>
              {p.title}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Link
          href="/projects"
          className="inline-block border border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white px-8 py-3 text-sm uppercase tracking-[0.16em] transition-colors"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
