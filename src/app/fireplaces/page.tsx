import Link from "next/link";
import Image from "next/image";
import PricingCTA from "@/components/PricingCTA";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Gas, Electric & Outdoor Fireplaces | California Mantel",
  description:
    "Explore gas inserts, electric fireplaces, and outdoor fireplaces from 30+ top brands. Professional installation & service across California since 1987.",
  alternates: { canonical: "/fireplaces" },
};

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
  { name: "Isokern", logo: "/brands/isokern.png", href: "/fireplaces/isokern" },
  { name: "HPC Fire", logo: "/brands/hpc-fire.png", href: "/fireplaces" },
  { name: "Forno Bravo", logo: "/brands/fornobravo.png", href: "/fireplaces" },
  { name: "Outdoor Great Room", logo: "/brands/outdoor-great-room.webp", href: "/fireplaces" },
];

export default function FireplacesPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Gas / Electric / Outdoor"
        title="Fireplaces selected around the room."
        description="Browse gas inserts, electric fireplaces, outdoor fire features, and masonry solutions planned around the surround, clearances, installation path, and the way you want the space to feel."
      />

      {/* Types */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-2xl font-medium text-stone-900 mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          By Type
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {types.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group border border-[color:var(--sand-deep)] p-7 hover:border-[color:var(--accent)] transition-all"
            >
              <h3
                className="text-xl font-medium text-stone-900 mb-3 group-hover:text-[color:var(--accent)] transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {t.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">{t.description}</p>
              <span className="inline-block mt-4 text-[color:var(--accent)] text-sm font-medium group-hover:underline">
                Explore {t.title} →
              </span>
            </Link>
          ))}
        </div>

        {/* Brands */}
        <h2
          className="text-2xl font-medium text-stone-900 mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Shop by Brand
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((b) => (
            <Link
              key={b.name}
              href={b.href}
              className="bg-white border border-[color:var(--sand-deep)] p-4 flex items-center justify-center hover:border-[color:var(--accent)] transition-all h-20"
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
