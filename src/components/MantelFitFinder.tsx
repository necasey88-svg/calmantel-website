"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { findFittingMantels, type FitCriteria } from "@/lib/mantel-fit";

// Fractions → readable inches (e.g. 37.125 → 37⅛")
function fmt(n: number): string {
  const whole = Math.floor(n);
  const frac = n - whole;
  const eighths = Math.round(frac * 8);
  const map: Record<number, string> = { 0: "", 1: "⅛", 2: "¼", 3: "⅜", 4: "½", 5: "⅝", 6: "¾", 7: "⅞", 8: "" };
  const carry = eighths === 8 ? 1 : 0;
  return `${whole + carry}${carry ? "" : map[eighths]}"`;
}

export default function MantelFitFinder() {
  const [firebox, setFirebox] = useState<number | "">("");
  const [fireboxHeight, setFireboxHeight] = useState<number | "">("");
  const [wallLimited, setWallLimited] = useState(false);
  const [wallWidth, setWallWidth] = useState<number | "">("");
  const [material, setMaterial] = useState<"any" | "precast" | "wood">("any");
  const [searched, setSearched] = useState(false);

  const results = useMemo(() => {
    if (firebox === "" || firebox <= 0) return [];
    const criteria: FitCriteria = {
      fireboxWidth: Number(firebox),
      fireboxHeight: fireboxHeight !== "" && fireboxHeight > 0 ? Number(fireboxHeight) : undefined,
      maxWallWidth: wallLimited && wallWidth !== "" ? Number(wallWidth) : undefined,
      material,
    };
    return findFittingMantels(criteria);
  }, [firebox, fireboxHeight, wallLimited, wallWidth, material]);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
        Find a Mantel That Fits
      </h2>
      <p className="text-stone-500 text-sm mb-6">
        Enter your firebox opening and (optionally) how much wall space you have. We&apos;ll show every
        mantel that fits — you can always size up and cover the extra reveal with fillers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
        {/* Firebox width */}
        <div>
          <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
            Firebox opening width
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              inputMode="decimal"
              value={firebox}
              onChange={(e) => { setFirebox(e.target.value === "" ? "" : Number(e.target.value)); setSearched(true); }}
              placeholder="any size, e.g. 44"
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-stone-800 focus:border-amber-700 focus:outline-none"
            />
            <span className="text-stone-400 text-sm">in</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 items-center">
            <span className="text-[11px] text-stone-400">Common:</span>
            {[36, 42, 48, 50].map((v) => (
              <button
                key={v}
                onClick={() => { setFirebox(v); setSearched(true); }}
                className="text-xs border border-stone-300 rounded-full px-3 py-1 text-stone-600 hover:border-amber-700 hover:text-amber-700 transition-colors"
              >
                {v}&quot;
              </button>
            ))}
          </div>
          <p className="text-[11px] text-stone-400 mt-1.5">
            Measure the <strong>inside width</strong> of your firebox opening. Any size works — just type it in.
          </p>

          <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5 mt-4">
            Firebox opening height <span className="text-stone-400 normal-case font-normal">(optional)</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              inputMode="decimal"
              value={fireboxHeight}
              onChange={(e) => setFireboxHeight(e.target.value === "" ? "" : Number(e.target.value))}
              placeholder="e.g. 30"
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-stone-800 focus:border-amber-700 focus:outline-none"
            />
            <span className="text-stone-400 text-sm">in</span>
          </div>
          <p className="text-[11px] text-stone-400 mt-1.5">
            Add height to rule out mantels whose opening is too short for a tall firebox.
          </p>
        </div>

        {/* Wall space */}
        <div>
          <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
            Available wall space
          </label>
          <select
            value={wallLimited ? "limited" : "none"}
            onChange={(e) => setWallLimited(e.target.value === "limited")}
            className="w-full border border-stone-300 rounded-lg px-3 py-2 text-stone-800 focus:border-amber-700 focus:outline-none"
          >
            <option value="none">No restriction</option>
            <option value="limited">I have a limit…</option>
          </select>
          {wallLimited && (
            <div className="flex items-center gap-2 mt-2">
              <input
                type="number"
                inputMode="decimal"
                value={wallWidth}
                onChange={(e) => setWallWidth(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="max width"
                className="w-full border border-stone-300 rounded-lg px-3 py-2 text-stone-800 focus:border-amber-700 focus:outline-none"
              />
              <span className="text-stone-400 text-sm">in</span>
            </div>
          )}
        </div>

        {/* Material */}
        <div>
          <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
            Material
          </label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value as "any" | "precast" | "wood")}
            className="w-full border border-stone-300 rounded-lg px-3 py-2 text-stone-800 focus:border-amber-700 focus:outline-none"
          >
            <option value="any">Any material</option>
            <option value="precast">Precast concrete</option>
            <option value="wood">Wood</option>
          </select>
        </div>
      </div>

      {/* Results */}
      {firebox !== "" && (
        <div>
          <p className="text-sm text-stone-500 mb-4">
            {results.length === 0
              ? "No mantels with published dimensions fit those measurements yet."
              : `${results.length} mantel${results.length === 1 ? "" : "s"} fit your ${fmt(Number(firebox))}${fireboxHeight !== "" && fireboxHeight > 0 ? ` × ${fmt(Number(fireboxHeight))}` : ""} firebox${wallLimited && wallWidth !== "" ? ` within ${fmt(Number(wallWidth))} of wall space` : ""}.`}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {results.map(({ product, fittingSizes, clearance }) => {
              const snug = fittingSizes[0];
              return (
                <Link
                  key={product.slug}
                  href={`/mantels/p/${product.slug}`}
                  className="group border border-stone-200 bg-white rounded-xl overflow-hidden hover:border-amber-700 hover:shadow-md transition-all"
                >
                  <div className="relative h-40 bg-stone-100">
                    {product.image ? (
                      <Image src={product.image} alt={product.name} fill className="object-contain p-3" sizes="(max-width:640px) 100vw, 33vw" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-4xl">🪨</div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                      {product.name}
                    </p>
                    <p className="text-xs text-stone-400 mb-2 capitalize">{product.type === "precast" ? "Precast Concrete" : product.type}</p>
                    <ul className="text-xs text-stone-600 space-y-0.5">
                      {fittingSizes.map((s, i) => (
                        <li key={i}>
                          Opening {fmt(s.openingWidth)} · overall {fmt(s.overallWidth)}
                          {s.revealPerSide > 0.5 && (
                            <span className="text-amber-700"> · {fmt(s.revealPerSide)} filler/side</span>
                          )}
                        </li>
                      ))}
                    </ul>
                    {clearance === "verify" && (
                      <p className="text-[11px] text-amber-700 mt-2">⚠ Wood clearance verified at consult</p>
                    )}
                    {snug.revealPerSide <= 0.5 && (
                      <p className="text-[11px] text-green-700 mt-2">✓ Snug fit — minimal filler</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {firebox === "" && searched && (
        <p className="text-sm text-stone-400">Enter your firebox opening width to see matching mantels.</p>
      )}
    </div>
  );
}
