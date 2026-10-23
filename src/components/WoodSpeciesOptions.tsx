import Image from "next/image";
import { woodSpeciesOptions } from "@/lib/mantel-products-data";

// Reusable "Wood Species" options section for solid-wood mantel & beam product
// pages. Swatches are real cropped photos of unfinished face grain — see
// public/mantels/wood-species/. Species list lives in mantel-products-data.ts
// so new options appear everywhere this component is used without further edits.
export default function WoodSpeciesOptions() {
  return (
    <section className="border-t border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs font-medium mb-3">
          Material Options
        </p>
        <h2
          className="text-3xl md:text-4xl font-medium text-[color:var(--ink)] tracking-tight mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Wood Species
        </h2>
        <p className="text-[color:var(--ink)]/60 leading-relaxed max-w-2xl mb-8">
          This mantel is available in a choice of solid wood species, shown here unfinished.
          Stain or paint it on site to match your room, or leave it natural.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-2xl">
          {woodSpeciesOptions.map((wood) => (
            <div key={wood.slug} className="group">
              <div className="relative aspect-square rounded-sm overflow-hidden border border-stone-200 group-hover:border-[color:var(--accent)] transition-colors">
                <Image
                  src={wood.image}
                  alt={`${wood.name} wood species — unfinished face grain swatch`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 160px"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-stone-800">{wood.name}</p>
              <p className="text-xs text-[color:var(--ink)]/55">Unfinished</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
