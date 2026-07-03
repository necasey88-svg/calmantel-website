"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { FireplaceProduct } from "@/lib/fireplaces-data";

export default function BrandFilterGrid({ products }: { products: FireplaceProduct[] }) {
  const brands = ["All", ...Array.from(new Set(products.map((p) => p.brand ?? "Other")))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? products : products.filter((p) => (p.brand ?? "Other") === active);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product, i) => (
          <div
            key={i}
            className="border border-stone-200 rounded-xl overflow-hidden hover:border-amber-700 hover:shadow-md transition-all group flex flex-col"
          >
            <div className="relative h-52 bg-stone-100 overflow-hidden">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-6xl">🔥</div>
              )}
              {product.brand && (
                <span className="absolute top-3 left-3 bg-white/90 text-stone-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-stone-200">
                  {product.brand}
                </span>
              )}
            </div>

            <div className="p-7 flex flex-col flex-1">
              <h2
                className="text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {product.name}
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">{product.description}</p>

              {product.specs && (
                <ul className="mb-4 space-y-1">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-stone-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-700 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              )}

              {product.note && <p className="text-xs text-amber-700 italic mb-4">{product.note}</p>}

              <div className="mt-auto pt-4 flex items-center gap-3">
                <Link
                  href="/estimate"
                  className="bg-amber-700 hover:bg-amber-800 text-white text-sm px-5 py-2.5 rounded font-semibold transition-colors"
                >
                  Request Estimate
                </Link>
                {product.url && (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline text-sm font-semibold"
                  >
                    View details →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
