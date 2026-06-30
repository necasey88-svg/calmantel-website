"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { mantelProducts, typeLabel, styleLabel } from "@/lib/mantel-products-data";

export default function MantelSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return mantelProducts.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      typeLabel[p.type].toLowerCase().includes(q) ||
      styleLabel[p.style].toLowerCase().includes(q)
    );
  }, [query]);

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
          placeholder="Search mantel names, styles, or materials…"
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

      {query && (
        <div className="mt-3 border border-stone-200 rounded-xl overflow-hidden shadow-md bg-white">
          {results.length === 0 ? (
            <p className="px-5 py-4 text-sm text-stone-400">
              No mantels found for &ldquo;{query}&rdquo;
            </p>
          ) : (
            <ul>
              {results.map((p) => (
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
