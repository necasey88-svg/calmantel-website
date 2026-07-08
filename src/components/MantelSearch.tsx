"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { mantelProducts, typeLabel, styleLabel } from "@/lib/mantel-products-data";
import { findFittingMantels } from "@/lib/mantel-fit";

const inches = (n: number) => `${Math.round(n * 10) / 10}"`;

export default function MantelSearch() {
  const [query, setQuery] = useState("");

  const q = query.trim();
  // If the query contains a number, treat it as a firebox opening width (inches).
  const dimMatch = q.match(/(\d+(?:\.\d+)?)/);
  const fireboxWidth = dimMatch ? parseFloat(dimMatch[1]) : null;
  const isDimensionSearch = fireboxWidth != null && fireboxWidth > 0;

  const textResults = useMemo(() => {
    const s = q.toLowerCase();
    if (!s) return [];
    return mantelProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(s) ||
        typeLabel[p.type].toLowerCase().includes(s) ||
        styleLabel[p.style].toLowerCase().includes(s),
    );
  }, [q]);

  const fitResults = useMemo(
    () => (isDimensionSearch ? findFittingMantels({ fireboxWidth: fireboxWidth! }) : []),
    [isDimensionSearch, fireboxWidth],
  );

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={'Search by name or style — or enter your firebox width, e.g. 36"'}
          className="w-full pl-12 pr-4 py-3.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 shadow-sm"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
          >
            ✕
          </button>
        )}
      </div>

      {q && (
        <div className="mt-3 border border-stone-200 rounded-xl overflow-hidden shadow-md bg-white">
          {isDimensionSearch ? (
            <>
              <p className="px-5 pt-4 pb-2 text-xs uppercase tracking-widest text-stone-400">
                Mantels that fit a {inches(fireboxWidth!)} firebox opening
              </p>
              {fitResults.length === 0 ? (
                <div className="px-5 py-4 text-sm text-stone-500">
                  No standard size fits a {inches(fireboxWidth!)} opening. We build custom sizes —{" "}
                  <Link href="/mantels" className="text-amber-700 font-semibold hover:underline">
                    use the full Fit Finder
                  </Link>{" "}
                  or contact a showroom.
                </div>
              ) : (
                <ul>
                  {fitResults.slice(0, 8).map(({ product, fittingSizes }) => (
                    <li key={product.slug}>
                      <Link
                        href={`/mantels/p/${product.slug}`}
                        onClick={() => setQuery("")}
                        className="flex items-center justify-between px-5 py-3.5 hover:bg-amber-50 transition-colors border-b border-stone-100 last:border-0"
                      >
                        <div>
                          <p className="font-semibold text-stone-900 text-sm">{product.name}</p>
                          <p className="text-xs text-stone-400 mt-0.5">
                            {typeLabel[product.type]} · opening {inches(fittingSizes[0].openingWidth)} · overall {inches(fittingSizes[0].overallWidth)}
                          </p>
                        </div>
                        <span className="text-amber-700 text-xs font-semibold">View →</span>
                      </Link>
                    </li>
                  ))}
                  <li className="px-5 py-3 bg-stone-50 text-center">
                    <Link href="/mantels" className="text-amber-700 text-xs font-semibold hover:underline">
                      Refine by height, wall width &amp; material in the full Fit Finder →
                    </Link>
                  </li>
                </ul>
              )}
            </>
          ) : textResults.length === 0 ? (
            <p className="px-5 py-4 text-sm text-stone-400">
              No mantels found for &ldquo;{query}&rdquo;
            </p>
          ) : (
            <ul>
              {textResults.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/mantels/p/${p.slug}`}
                    onClick={() => setQuery("")}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-amber-50 transition-colors border-b border-stone-100 last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">{p.name}</p>
                      <p className="text-xs text-stone-400 mt-0.5">
                        {typeLabel[p.type]} · {styleLabel[p.style]}
                      </p>
                    </div>
                    <span className="text-amber-700 text-xs font-semibold">View →</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
