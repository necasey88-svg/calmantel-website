"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { bestSellerSlugs } from "@/lib/mantel-fit";
import { getMantelProduct, typeLabel, styleLabel } from "@/lib/mantel-products-data";
import { mantelDimensions } from "@/lib/mantel-dimensions";

type Filter = "all" | "contemporary" | "traditional";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "contemporary", label: "Contemporary" },
  { id: "traditional", label: "Traditional" },
];

function widthRange(slug: string): string | null {
  const d = mantelDimensions[slug];
  if (!d?.overallWidths?.length) return null;
  const min = Math.round(Math.min(...d.overallWidths));
  const max = Math.round(Math.max(...d.overallWidths));
  return min === max ? `${min}" wide` : `${min}–${max}" wide`;
}

const products = bestSellerSlugs
  .map((slug) => getMantelProduct(slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export default function BestSellersShowcase() {
  const [active, setActive] = useState<Filter>("all");

  const visible =
    active === "all" ? products : products.filter((p) => p.style === active);

  return (
    <section className="bg-[#F9F7F3] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Editorial header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
            The Collection
          </p>
          <h2
            className="text-4xl md:text-5xl font-medium text-[color:var(--ink)] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Find the Perfect Mantel
          </h2>
          <p className="text-stone-500 leading-relaxed">
            Browse handcrafted mantel collections designed for every architectural style —
            precast concrete and solid wood, manufactured in California since 1987.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-6 py-2 rounded-full text-sm tracking-wide transition-colors ${
                active === f.id
                  ? "bg-[color:var(--ink)] text-white"
                  : "text-[color:var(--ink)]/70 hover:text-[color:var(--ink)] border border-[color:var(--ink)]/15 hover:border-[color:var(--ink)]/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid — 3 across on desktop, large imagery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {visible.map((p) => {
            const range = widthRange(p.slug);
            return (
              <Link key={p.slug} href={`/mantels/p/${p.slug}`} className="group block">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--sand-deep)]">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-5xl">🪨</div>
                  )}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[color:var(--ink)] text-[10px] uppercase tracking-[0.18em] px-3 py-1">
                    Best Seller
                  </span>
                </div>

                {/* Meta */}
                <div className="pt-6 px-1">
                  <h3
                    className="text-2xl font-medium text-[color:var(--ink)] tracking-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-stone-500 tracking-wide">
                    {styleLabel[p.style]} · {typeLabel[p.type]}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-stone-400">
                    {range ? `${range} · ` : ""}Made in California
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-stone-500 tracking-wide">Pricing on request</span>
                    <span className="text-sm font-medium text-[color:var(--accent)] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/mantels"
            className="inline-block border border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white px-9 py-3.5 text-sm uppercase tracking-[0.16em] transition-colors"
          >
            Browse the Full Collection →
          </Link>
        </div>
      </div>
    </section>
  );
}
