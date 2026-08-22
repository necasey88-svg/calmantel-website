"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const BA = "/projects/audited-before-after/";

// A curated set of strong before/after transformations for the homepage scroller.
// Sourced from the same audited project data as /projects — exact project names,
// no work-order numbers, no generic category labels.
const installs: { title: string; before: string; after: string }[] = [
  { title: "Heat & Glo Supreme 35 with Woomera Old World", before: `${BA}13-28929-heat-and-glo-supreme-35-with-woomera-old-world-before.webp`, after: `${BA}13-28929-heat-and-glo-supreme-35-with-woomera-old-world-after.webp` },
  { title: "Barossa Old World Bianco", before: `${BA}08-29038-barossa-old-world-bianco-before.webp`, after: `${BA}08-29038-barossa-old-world-bianco-after.webp` },
  { title: "SimpliFire 36 inch and Mornington Smooth Kingsbury", before: `${BA}22-27965-simplifire-36-and-mornington-smooth-kingsbury-before.webp`, after: `${BA}22-27965-simplifire-36-and-mornington-smooth-kingsbury-after.webp` },
  { title: "Heat & Glo 6KX-TG with St. Tropez Smooth Kingsbury", before: `${BA}24-27964-heat-and-glo-6kx-tg-with-st-tropez-smooth-kingsbury-before.webp`, after: `${BA}24-27964-heat-and-glo-6kx-tg-with-st-tropez-smooth-kingsbury-after.webp` },
  { title: "Pitcairn Travertine Kingsbury", before: `${BA}09-28-171-pitcairn-travertine-kingsbury-before.webp`, after: `${BA}09-28-171-pitcairn-travertine-kingsbury-after.webp` },
  { title: "Heat & Glo Supreme 30 and Bolte Smooth Bianco", before: `${BA}15-27650-heat-and-glo-supreme-30-and-bolte-smooth-bianco-before.webp`, after: `${BA}15-27650-heat-and-glo-supreme-30-and-bolte-smooth-bianco-after.webp` },
  { title: "Superior DRT3540 Gas Fireplace + Clare Smooth Seaside Mantel", before: "/projects/service/superior-drt3540-before.jpg", after: "/projects/service/superior-drt3540-after.jpg" },
  { title: "Reclaimed Beam and Masonry", before: `${BA}18-2-8788-reclaimed-beam-and-masonry-before.webp`, after: `${BA}18-2-8788-reclaimed-beam-and-masonry-after.webp` },
  { title: "Bondi Smooth Le Marais", before: `${BA}21-27445-bondi-smooth-le-marais-before.webp`, after: `${BA}21-27445-bondi-smooth-le-marais-after.webp` },
  { title: "Heat & Glo 6KX-TG with Cannon Balls and Bolte Smooth London Fog", before: `${BA}29-26678-heat-and-glo-6kx-tg-with-cannon-balls-and-bolte-smooth-london--before.webp`, after: `${BA}29-26678-heat-and-glo-6kx-tg-with-cannon-balls-and-bolte-smooth-london--after.webp` },
  { title: "Modern Flames Redstone 3626", before: `${BA}14-29014-modern-flames-redstone-3626-before.webp`, after: `${BA}14-29014-modern-flames-redstone-3626-after.webp` },
  { title: "Sydney Mantel Cap Paint Grade", before: `${BA}26-28390-sydney-mantel-cap-paint-grade-before.webp`, after: `${BA}26-28390-sydney-mantel-cap-paint-grade-after.webp` },
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
