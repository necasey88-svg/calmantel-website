import Image from "next/image";
import Link from "next/link";
import PricingCTA from "@/components/PricingCTA";

export const metadata = {
  title: "Mantel Colors & Finishes | California Mantel & Fireplace",
  description:
    "Explore our full range of precast mantel colors and finishes — Smooth, Old World, Stone World, and Travertine — available across our entire mantel collection.",
};

const CDN = "https://images.squarespace-cdn.com/content/v1/6898bc1516ea8a1fd077995f/";

type Finish = {
  name: string;
  type: "Smooth" | "Old World" | "Stone World" | "Travertine";
  img: string;
};

const finishes: Finish[] = [
  // Smooth
  { name: "Aspen",         type: "Smooth",     img: "c4369818-49e5-4269-9088-dddfe2be26f3/Aspen0.jpg" },
  { name: "Grecian",       type: "Smooth",     img: "4ad7ea22-cb18-4684-948b-9c0e0572ff1e/Grecian0.jpg" },
  { name: "Indian Summer", type: "Smooth",     img: "f2f22265-c636-493c-8ce2-a38154717776/IndianSummer0.jpg" },
  { name: "Kingsbury",     type: "Smooth",     img: "1655710b-f82b-42e5-aa25-0cb48fe03c57/Kingsbury0.jpg" },
  { name: "Le Marais",     type: "Smooth",     img: "7d7cbdaa-573f-4eb0-b982-94a59a6ee29e/LaMarais0.jpg" },
  { name: "London Fog",    type: "Smooth",     img: "22b9c835-6a07-4764-881c-dbe6167b8de2/LondonFog0.jpg" },
  { name: "Macambo",       type: "Smooth",     img: "88097dd6-caa5-487f-aa95-7bdeea0d277a/Macambo0.jpg" },
  { name: "Milano",        type: "Smooth",     img: "7daf139e-1bd5-4461-a72e-1bf205c4a59d/Milano+SM.jpeg" },

  // Old World
  { name: "Aspen",         type: "Old World",  img: "cf3363dd-4a8c-4c8e-9fae-0e460b72f7e5/AspenOW0.jpg" },
  { name: "Grecian",       type: "Old World",  img: "6b469dc9-ba4b-47e6-9651-1a8802233bc2/GrecianOW0.jpg" },
  { name: "Indian Summer", type: "Old World",  img: "fa5ae432-91be-447a-95ad-134b98a093c4/IndianSummerOW0.jpg" },
  { name: "Kingsbury",     type: "Old World",  img: "57e98384-da3b-40ec-920f-0b558364b9c1/KingsburyOW0.jpg" },
  { name: "Le Marais",     type: "Old World",  img: "19fdd24e-fc8f-43e5-b615-e7b2f3e5fa89/LeMaraisOW0.jpg" },
  { name: "London Fog",    type: "Old World",  img: "b3d83417-cbf7-4884-88d2-6a0ac0c46fb3/LondonFogOW0.jpg" },
  { name: "Macambo",       type: "Old World",  img: "b1c156d7-a760-471a-be99-b87b1c179972/MacamboOW0.jpg" },
  { name: "Milano",        type: "Old World",  img: "1040ada5-f4db-4c1c-8cbe-31733de9364a/Old+World+Milano.jpg" },

  // Stone World
  { name: "Aspen",         type: "Stone World", img: "61e55eb8-accb-4d1a-81db-5c2fefc0fcc0/AspenSW0-6000-TransparentWhite-1.jpg" },
  { name: "Atlantic",      type: "Stone World", img: "bd7c2615-1b1f-4036-9028-5e30562986ea/AtlanticSW0.jpg" },
  { name: "Grecian",       type: "Stone World", img: "6b134123-a0d6-4ad0-8d2b-e45ccd49faa8/GrecianSW0.jpg" },
  { name: "Indian Summer", type: "Stone World", img: "b5668893-cfb1-4f2f-8ee3-637a16e63de7/IndianSummerSW0.jpg" },
  { name: "Kingsbury",     type: "Stone World", img: "9095939f-4b88-490d-85e4-20a913656ce0/KingsburySW0.jpg" },
  { name: "Le Marais",     type: "Stone World", img: "a7b3d0b1-160a-43ef-b8db-04a3da9784ac/LeMaraisSW0.jpg" },
  { name: "Limestone",     type: "Stone World", img: "55ec6ad0-eddd-4782-b2b8-4287dc7cb4f6/LimestoneSW0.jpg" },
  { name: "London Fog",    type: "Stone World", img: "05f9fe3b-631b-4a5f-b556-03cf7bb34538/LondonFogSW0.jpg" },

  // Travertine
  { name: "Atlantic",      type: "Travertine",  img: "6e56de36-2efa-4a95-a9da-ef118135b236/AtlanticRT0.jpg" },
  { name: "Grecian",       type: "Travertine",  img: "ef8ffdd4-fe8a-494b-ba9e-a5623f8c1153/GrecianRT0.jpg" },
  { name: "Indian Summer", type: "Travertine",  img: "0ac6bd41-7e1f-4d21-9feb-9061471c673b/IndianSummerRT0.jpg" },
  { name: "Kingsbury",     type: "Travertine",  img: "7dc6775c-3580-4b7d-b858-29dbce465502/KingsburyRT0.jpg" },
  { name: "Le Marais",     type: "Travertine",  img: "f343eb31-51f3-4cd2-8dd7-8549022e9f85/LeMaraisRT0-6000-TransparentWhite-1.jpg" },
  { name: "Limestone",     type: "Travertine",  img: "ada4c766-a28c-49ee-a62a-37b63e5cadc6/LimestoneRT0.jpg" },
  { name: "London Fog",    type: "Travertine",  img: "0ed64e68-618c-4708-9a3c-a1501c33ab9c/LondonFogRT0.jpg" },
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
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Mantel Collection
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Colors &amp; Finishes
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
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
                  className="text-2xl md:text-3xl font-bold text-stone-900 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {type}
                </h2>
                <p className="text-stone-500 max-w-xl">{finishDescriptions[type]}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {group.map((finish) => (
                  <div key={`${finish.type}-${finish.name}`} className="group">
                    <div className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 group-hover:shadow-md transition-shadow">
                      <Image
                        src={`${CDN}${finish.img}`}
                        alt={`${finish.name} — ${finish.type} finish`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    <p className="mt-2 text-sm font-semibold text-stone-800">{finish.name}</p>
                    <p className="text-xs text-stone-400">{finish.type}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Browse mantels CTA */}
        <div className="bg-stone-50 rounded-2xl p-10 text-center">
          <h2
            className="text-2xl font-bold text-stone-900 mb-3"
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
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Contemporary Mantels
            </Link>
            <Link
              href="/mantels/traditional"
              className="inline-block border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
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
