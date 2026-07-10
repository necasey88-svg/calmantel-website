import Image from "next/image";
import Link from "next/link";
import PricingCTA from "@/components/PricingCTA";

export const metadata = {
  title: "Mantel Colors & Finishes | California Mantel & Fireplace",
  description:
    "Explore our full range of precast mantel colors and finishes — Smooth, Old World, Stone World, and Travertine — available across our entire mantel collection.",
  alternates: { canonical: "/mantels/colors-finishes" },
};

const CDN = "/finishes/";

type Finish = {
  name: string;
  type: "Smooth" | "Old World" | "Stone World" | "Travertine";
  img: string;
};

const finishes: Finish[] = [
  // Smooth
  { name: "Aspen",         type: "Smooth",     img: "Aspen0.jpg" },
  { name: "Grecian",       type: "Smooth",     img: "Grecian0.jpg" },
  { name: "Indian Summer", type: "Smooth",     img: "IndianSummer0.jpg" },
  { name: "Kingsbury",     type: "Smooth",     img: "Kingsbury0.jpg" },
  { name: "Le Marais",     type: "Smooth",     img: "LaMarais0.jpg" },
  { name: "London Fog",    type: "Smooth",     img: "LondonFog0.jpg" },
  { name: "Macambo",       type: "Smooth",     img: "Macambo0.jpg" },
  { name: "Milano",        type: "Smooth",     img: "Milano+SM.jpeg" },

  // Old World
  { name: "Aspen",         type: "Old World",  img: "AspenOW0.jpg" },
  { name: "Grecian",       type: "Old World",  img: "GrecianOW0.jpg" },
  { name: "Indian Summer", type: "Old World",  img: "IndianSummerOW0.jpg" },
  { name: "Kingsbury",     type: "Old World",  img: "KingsburyOW0.jpg" },
  { name: "Le Marais",     type: "Old World",  img: "LeMaraisOW0.jpg" },
  { name: "London Fog",    type: "Old World",  img: "LondonFogOW0.jpg" },
  { name: "Macambo",       type: "Old World",  img: "MacamboOW0.jpg" },
  { name: "Milano",        type: "Old World",  img: "Old+World+Milano.jpg" },

  // Stone World
  { name: "Aspen",         type: "Stone World", img: "AspenSW0-6000-TransparentWhite-1.jpg" },
  { name: "Atlantic",      type: "Stone World", img: "AtlanticSW0.jpg" },
  { name: "Grecian",       type: "Stone World", img: "GrecianSW0.jpg" },
  { name: "Indian Summer", type: "Stone World", img: "IndianSummerSW0.jpg" },
  { name: "Kingsbury",     type: "Stone World", img: "KingsburySW0.jpg" },
  { name: "Le Marais",     type: "Stone World", img: "LeMaraisSW0.jpg" },
  { name: "Limestone",     type: "Stone World", img: "LimestoneSW0.jpg" },
  { name: "London Fog",    type: "Stone World", img: "LondonFogSW0.jpg" },

  // Travertine
  { name: "Atlantic",      type: "Travertine",  img: "AtlanticRT0.jpg" },
  { name: "Grecian",       type: "Travertine",  img: "GrecianRT0.jpg" },
  { name: "Indian Summer", type: "Travertine",  img: "IndianSummerRT0.jpg" },
  { name: "Kingsbury",     type: "Travertine",  img: "KingsburyRT0.jpg" },
  { name: "Le Marais",     type: "Travertine",  img: "LeMaraisRT0-6000-TransparentWhite-1.jpg" },
  { name: "Limestone",     type: "Travertine",  img: "LimestoneRT0.jpg" },
  { name: "London Fog",    type: "Travertine",  img: "LondonFogRT0.jpg" },
];

const finishTypes = ["Smooth", "Old World", "Stone World", "Travertine"] as const;

const finishDescriptions: Record<string, string> = {
  "Smooth":     "A clean, refined surface with a contemporary feel. Ideal for modern and transitional interiors. Paint-ready.",
  "Old World":  "Richly textured with subtle variation that mimics hand-carved stone. Perfect for traditional and European-inspired spaces.",
  "Stone World": "A deeply textured finish that replicates the look of natural quarried stone. Adds warmth and character to any room.",
  "Travertine": "Inspired by classic Italian travertine limestone — warm beige tones with natural pitting and movement.",
};

export default function ColorsFinishesPage() {
  return (
    <>
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-sm font-medium mb-3">
            Mantel Collection
          </p>
          <h1
            className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.04] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Colors &amp; Finishes
          </h1>
          <p className="text-[color:var(--ink)]/60 max-w-2xl leading-relaxed">
            Every mantel in our precast concrete collection is available in multiple finishes.
            Choose the texture and color that best matches your home&apos;s style — from crisp
            smooth whites to richly textured stone looks.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {finishTypes.map((type) => {
          const group = finishes.filter((f) => f.type === type);
          return (
            <section key={type}>
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-3xl font-medium text-stone-900 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {type}
                </h2>
                <p className="text-stone-500 max-w-xl">{finishDescriptions[type]}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {group.map((finish) => (
                  <div key={`${finish.type}-${finish.name}`} className="group">
                    <div className="relative aspect-square rounded-sm overflow-hidden border border-stone-200 group-hover:shadow-sm transition-shadow">
                      <Image
                        src={`${CDN}${finish.img}`}
                        alt={`${finish.name} — ${finish.type} finish`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-stone-800">{finish.name}</p>
                    <p className="text-xs text-[color:var(--ink)]/55">{finish.type}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Browse mantels CTA */}
        <div className="bg-stone-50 rounded-sm p-10 text-center">
          <h2
            className="text-2xl font-medium text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Choose Your Mantel?
          </h2>
          <p className="text-stone-500 mb-6 max-w-md mx-auto">
            Browse our full collection and see these finishes applied to specific mantel styles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mantels/contemporary"
              className="inline-block bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white px-8 py-3.5 rounded-sm font-medium transition-colors"
            >
              Contemporary Mantels
            </Link>
            <Link
              href="/mantels/traditional"
              className="inline-block border border-[color:var(--accent)] text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white px-8 py-3.5 rounded-sm font-medium transition-colors"
            >
              Traditional Mantels
            </Link>
          </div>
        </div>
      </div>

      <PricingCTA />
    </>
  );
}
