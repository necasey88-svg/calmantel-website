import Link from "next/link";
import Image from "next/image";
import PricingCTA from "@/components/PricingCTA";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Masonry Services | California Mantel & Fireplace",
  description:
    "Expert masonry services for fireplaces, mantels, and architectural projects. Natural stone veneer, tile, brick, and precast installations across California.",
};

const services = [
  {
    title: "Natural & Manufactured Stone Veneer",
    description:
      "Transform your fireplace surround, accent wall, or exterior with the timeless beauty of stone. We install both natural stone and manufactured stone veneer from leading suppliers, delivering authentic texture and lasting durability.",
  },
  {
    title: "Tile Masonry",
    description:
      "From classic porcelain to artisan handmade tile, our masonry team installs a full range of tile materials around fireplaces, hearths, and architectural features. Precision setting and grouting for a flawless, long-lasting finish.",
  },
  {
    title: "Full Brick & Thin Brick Veneer",
    description:
      "Classic brick adds warmth, character, and structural integrity to any fireplace project. We install both full brick and thin brick veneer for a traditional look without the full weight of solid masonry construction.",
  },
  {
    title: "Architectural Precast",
    description:
      "Our precast concrete masonry installations complement our full mantel collection. From hearths and surrounds to custom architectural elements, we deliver code-compliant installations with precision craftsmanship.",
  },
  {
    title: "Residential & Commercial Masonry",
    description:
      "We serve homeowners, interior designers, architects, and general contractors on projects of all scales — from single-room fireplace renovations to large-scale commercial and multi-unit residential installations.",
  },
];

const benefits = [
  {
    title: "Structural Strength",
    description: "Masonry installations built to last decades, meeting all California building codes.",
  },
  {
    title: "Heat Retention",
    description: "Stone and brick naturally absorb and radiate heat for greater fireplace efficiency.",
  },
  {
    title: "Timeless Design",
    description: "Natural materials that age beautifully and complement any interior or exterior style.",
  },
  {
    title: "Precision Craftsmanship",
    description: "Experienced masonry teams with deep knowledge of fireplace and hearth installation.",
  },
  {
    title: "Fully Customizable",
    description: "Choose from hundreds of materials, colors, and patterns to match your exact vision.",
  },
];

const suppliers = [
  { name: "Coronado Stone Products", logo: "/brands/coronado-stone.png" },
  { name: "Cultured Stone", logo: "/brands/cultured-stone.webp" },
  { name: "Creative Mines", logo: "/brands/creative-mines.png" },
  { name: "MSI", logo: "/brands/msi.jpg" },
  { name: "Eldorado Stone", logo: "/brands/eldorado-stone.jpg" },
  { name: "Robinson Brick", logo: "/brands/robinson-brick.png" },
  { name: "Arizona Tile", logo: "/brands/arizona-tile.png" },
  { name: "Glen-Gery", logo: "/brands/glen-gery.jpg" },
  { name: "H.C. Muddox", logo: "/brands/hc-muddox.webp" },
];

const showrooms = [
  { city: "Sacramento", address: "4141 N Freeway Blvd, Sacramento, CA 95834", phone: "(916) 665-0627", tel: "9166650627", hours: "Mon–Sat: 8:30 AM – 5:00 PM" },
  { city: "Anaheim", address: "1430 S Anaheim Blvd, Anaheim, CA 92805", phone: "(714) 908-7388", tel: "7149087388", hours: "Mon–Sat: 9:00 AM – 5:00 PM" },
  { city: "Dublin", address: "6681 Sierra Ln Ste D, Dublin, CA 94568", phone: "(925) 436-1731", tel: "9254361731", hours: "Mon–Fri: 8:30 AM – 5:00 PM · Sat by appt" },
];

export default function MasonryPage() {
  return (
    <>
      {/* Hero */}
      <EditorialPageHero
        eyebrow="Masonry / Stone / Tile"
        title="Architectural masonry for fireplace rooms."
        description="Stone, brick, tile, and precast installations for fireplace surrounds, hearths, feature walls, and architectural projects, available through our Southern California team."
      />

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2
          className="text-3xl font-medium text-stone-900 mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Our Masonry Services
        </h2>
        <p className="text-stone-500 mb-12 max-w-2xl">
          From stone veneer to full brick installations, we handle the complete range of masonry work
          for fireplace surrounds, hearths, feature walls, and architectural elements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="border border-[color:var(--sand-deep)] p-7 transition-shadow">
              <div className="w-10 h-10 bg-[color:var(--sand-deep)] flex items-center justify-center mb-4">
                <div className="w-5 h-5 bg-[color:var(--ink)]" />
              </div>
              <h3
                className="text-lg font-medium text-stone-900 mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F9F7F3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-medium text-stone-900 mb-12 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Choose California Mantel for Masonry
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="w-12 h-12 bg-[color:var(--ink)] mx-auto mb-4 flex items-center justify-center">
                  <div className="w-5 h-5 bg-white" />
                </div>
                <h3 className="font-medium text-stone-900 mb-2 text-sm">{b.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suppliers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2
          className="text-3xl font-medium text-stone-900 mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Our Supplier Partners
        </h2>
        <p className="text-stone-500 mb-10 max-w-2xl">
          We work with the industry's leading material suppliers to give you access to the widest
          selection of stone, brick, and tile for your project.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
          {suppliers.map((s) => (
            <div
              key={s.name}
              className="bg-white border border-[color:var(--sand-deep)] p-4 flex items-center justify-center h-20 hover:border-[color:var(--accent)] transition-all"
            >
              <Image
                src={s.logo}
                alt={s.name}
                width={120}
                height={60}
                className="object-contain max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </section>

      <PricingCTA />

      {/* Showrooms CTA */}
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-medium mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Visit a Showroom to Get Started
          </h2>
          <p className="text-[color:var(--ink)]/60 mb-12 max-w-2xl">
            Bring your project plans or photos to any of our three California showrooms. Our team
            will help you select materials, provide a project guidance, and schedule your installation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showrooms.map((s) => (
              <div key={s.city} className="bg-stone-800 p-7">
                <h3 className="text-[color:var(--accent)] font-medium text-lg mb-2">{s.city}</h3>
                <p className="text-[color:var(--ink)]/60 text-sm mb-1">{s.address}</p>
                <p className="text-[color:var(--ink)]/55 text-xs mb-4">{s.hours}</p>
                <a
                  href={`tel:${s.tel}`}
                  className="text-white font-medium hover:text-[color:var(--accent)] transition-colors"
                >
                  {s.phone}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/estimate"
              className="inline-block bg-[color:var(--ink)] hover:bg-black text-white px-8 py-3.5 font-medium transition-colors"
            >
              Request Project Guidance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
