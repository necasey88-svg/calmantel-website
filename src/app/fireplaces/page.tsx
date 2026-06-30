import Link from "next/link";
import Image from "next/image";
import PricingCTA from "@/components/PricingCTA";

const types = [
  {
    title: "Gas Inserts",
    description:
      "Convert your wood-burning fireplace to a high-efficiency gas insert. Easy to use, beautiful to look at.",
    href: "/fireplaces/gas-inserts",
  },
  {
    title: "Electric Fireplaces",
    description:
      "No venting, no gas line — modern electric fireplaces are the most flexible option for any room.",
    href: "/fireplaces/electric",
  },
  {
    title: "Outdoor Fireplaces",
    description:
      "Bring the warmth outdoors. We offer gas and wood-burning outdoor fireplace options.",
    href: "/fireplaces/outdoor",
  },
  {
    title: "Masonry",
    description:
      "Traditional masonry fireplaces built to last a lifetime with superior heat retention.",
    href: "/fireplaces/masonry",
  },
  {
    title: "Overstock Sale",
    description:
      "Find deeply discounted fireplaces and inserts from our overstock inventory.",
    href: "/fireplaces/overstock",
  },
];

const brands = [
  { name: "Heat & Glo", logo: "/brands/heat-and-glo.jpg", href: "/fireplaces/heat-and-glo" },
  { name: "Heatilator", logo: "/brands/heatilator.jpg", href: "/fireplaces/heatilator" },
  { name: "Napoleon", logo: "/brands/napoleon.png", href: "/fireplaces/napoleon" },
  { name: "Mendota", logo: "/brands/mendota.png", href: "/fireplaces/mendota" },
  { name: "Modern Flames", logo: "/brands/modern-flames.jpg", href: "/fireplaces/modern-flames" },
  { name: "Ortal", logo: "/brands/ortal.jpg", href: "/fireplaces/ortal" },
  { name: "Flare", logo: "/brands/flare.png", href: "/fireplaces/flare" },
  { name: "Stellar", logo: "/brands/stellar.jpg", href: "/fireplaces/stellar" },
  { name: "SimpliFire", logo: "/brands/simplifire.jpg", href: "/fireplaces" },
  { name: "Dimplex", logo: "/brands/dimplex.png", href: "/fireplaces" },
  { name: "Net Zero Fire", logo: "/brands/netzero.png", href: "/fireplaces" },
  { name: "Isokern", logo: "/brands/isokern.png", href: "/fireplaces" },
  { name: "HPC Fire", logo: "/brands/hpc-fire.png", href: "/fireplaces" },
  { name: "Forno Bravo", logo: "/brands/fornobravo.png", href: "/fireplaces" },
  { name: "Outdoor Great Room", logo: "/brands/outdoor-great-room.webp", href: "/fireplaces" },
];

export default function FireplacesPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Gas · Electric · Outdoor
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Fireplaces
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            We carry the top fireplace brands and can install gas, electric, and outdoor
            fireplaces. Whether you&apos;re converting an existing wood-burning fireplace
            or starting fresh, we have the right solution.
          </p>
        </div>
      </section>

      {/* Types */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-2xl font-bold text-stone-900 mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          By Type
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {types.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group border border-stone-200 rounded-xl p-7 hover:border-amber-700 hover:shadow-md transition-all"
            >
              <h3
                className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {t.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">{t.description}</p>
              <span className="inline-block mt-4 text-amber-700 text-sm font-semibold group-hover:underline">
                Explore {t.title} →
              </span>
            </Link>
          ))}
        </div>

        {/* Brands */}
        <h2
          className="text-2xl font-bold text-stone-900 mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Shop by Brand
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((b) => (
            <Link
              key={b.name}
              href={b.href}
              className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-center hover:border-amber-700 hover:shadow-sm transition-all h-20"
            >
              <Image
                src={b.logo}
                alt={b.name}
                width={120}
                height={60}
                className="object-contain max-h-12 w-auto"
              />
            </Link>
          ))}
        </div>
      </section>

      <PricingCTA />
    </>
  );
}
