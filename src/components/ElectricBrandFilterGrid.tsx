"use client";
import { useState } from "react";
import Link from "next/link";
import type { ElectricFireplace } from "@/lib/electric-fireplaces-data";

export default function ElectricBrandFilterGrid({ fireplaces }: { fireplaces: ElectricFireplace[] }) {
  const brands = ["All", ...Array.from(new Set(fireplaces.map((f) => f.brand)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? fireplaces : fireplaces.filter((f) => f.brand === active);

  return (
    <>
      {/* Brand filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setActive(brand)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
              active === brand
                ? "bg-amber-700 text-white border-amber-700"
                : "bg-white text-stone-600 border-stone-300 hover:border-amber-700 hover:text-amber-700"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((ef) => (
          <Link
            key={ef.slug}
            href={`/fireplaces/electric/${ef.slug}`}
            className="group border border-stone-200 rounded-2xl overflow-hidden hover:border-amber-700 hover:shadow-lg transition-all"
          >
            <div className="relative h-52 bg-stone-100 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ef.image}
                alt={ef.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-white/90 text-stone-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-stone-200">
                {ef.brand}
              </span>
            </div>

            <div className="p-6">
              <h3
                className="text-lg font-bold text-stone-900 mb-1 group-hover:text-amber-700 transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {ef.name.replace("Modern Flames ", "")}
              </h3>
              <p className="text-xs text-amber-700 font-semibold mb-3">{ef.tagline}</p>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">
                {ef.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {ef.variants.slice(0, 5).map((v) => (
                  <span key={v.name} className="bg-stone-100 text-stone-600 text-xs px-2.5 py-1 rounded-full">
                    {v.width}
                  </span>
                ))}
                {ef.variants.length > 5 && (
                  <span className="bg-stone-100 text-stone-400 text-xs px-2.5 py-1 rounded-full">
                    +{ef.variants.length - 5} more
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-stone-700 font-semibold text-xs">{ef.startingPrice}</span>
                <span className="text-amber-700 text-sm font-semibold group-hover:underline">
                  View details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
