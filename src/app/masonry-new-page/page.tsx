import Link from "next/link";
import Image from "next/image";
import PricingCTA from "@/components/PricingCTA";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Masonry Services | California Mantel & Fireplace",
  description:
    "Expert masonry services exclusively in Southern California. Natural stone veneer, tile, brick, and precast installations coordinated through our Anaheim showroom.",
  alternates: { canonical: "/masonry-new-page" },
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
  { name: "Coronado Stone Products", logo: "/brands/coronado-stone.png", url: "https://www.coronado.com/" },
  { name: "Cultured Stone", logo: "/brands/cultured-stone.webp", url: "https://www.culturedstone.com/" },
  { name: "Creative Mines", logo: "/brands/creative-mines.png", url: "https://creativemines.us/" },
  { name: "MSI", logo: "/brands/msi.jpg", url: "https://www.msisurfaces.com/" },
  { name: "Eldorado Stone", logo: "/brands/eldorado-stone.jpg", url: "https://www.eldoradostone.com/" },
  { name: "Robinson Brick", logo: "/brands/robinson-brick.png", url: "https://www.robinsonbrick.com/" },
  { name: "Arizona Tile", logo: "/brands/arizona-tile.png", url: "https://www.arizonatile.com/" },
  { name: "Glen-Gery", logo: "/brands/glen-gery.jpg", url: "https://www.glengery.com/" },
  { name: "H.C. Muddox", logo: "/brands/hc-muddox.webp", url: "https://www.hcmuddox.com/" },
];

const featuredProjects = [
  {
    title: "Exterior Precast & Stone",
    description: "Architectural exterior work for residential and commercial facades.",
    image: "/masonry-gallery/180d8e52-9754-4a75-ab98-1d21b76879a7.webp",
  },
  {
    title: "Commercial Masonry",
    description: "Durable brick, stone, and architectural details for high-traffic properties.",
    image: "/masonry-gallery/0062bbaa-eae6-4f2f-8c22-38fa09bb3022.webp",
  },
  {
    title: "Brick Installation",
    description: "Field-built brickwork, veneer, and project coordination from an experienced crew.",
    image: "/masonry-gallery/1d921cf6-0a69-4f6a-9248-4c398b0c20ae.webp",
  },
];

export default function MasonryPage() {
  return (
    <>
      {/* Hero */}
      <EditorialPageHero
        eyebrow="Masonry / Precast / Brick"
        title="Plan your masonry project with confidence"
        description="Stone, brick, tile, and precast installations exclusively in Southern California, coordinated through our Anaheim showroom for fireplaces, exterior facades, architectural details, commercial properties, and custom residential projects."
      />

      <section className="border-b border-[color:var(--sand-deep)] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-sm uppercase tracking-[0.18em] text-[color:var(--ink)]/60">
            Masonry services are available exclusively in Southern California through our Anaheim showroom.{" "}
            Visit{" "}
            <a
              href="https://cmfmasonry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--accent)] hover:text-[color:var(--ink)] underline underline-offset-2 transition-colors"
            >
              CMF Masonry
            </a>{" "}
            for our full masonry portfolio and service area.
          </p>
        </div>
      </section>

      {/* Featured work */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-3">
              Recent Masonry Work
            </p>
            <h2
              className="text-3xl md:text-4xl font-medium text-[color:var(--ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Built for interiors, exteriors, and commercial scale.
            </h2>
          </div>
          <Link
            href="/masonry-gallery"
            className="text-sm uppercase tracking-[0.18em] text-[color:var(--accent)] hover:text-[color:var(--ink)] transition-colors"
          >
            View Gallery
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="group border border-[color:var(--sand-deep)] bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-lg font-medium text-[color:var(--ink)] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--ink)]/60">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2
          className="text-3xl font-medium text-stone-900 mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Our Masonry Services
        </h2>
        <p className="text-stone-500 mb-12 max-w-2xl">
          From stone veneer to full brick installations, our Southern California masonry team handles
          fireplace surrounds, hearths, feature walls, exterior facades, and architectural elements.
          For our complete residential and commercial masonry portfolio, visit{" "}
          <a
            href="https://cmfmasonry.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--accent)] hover:text-[color:var(--ink)] underline underline-offset-2 transition-colors"
          >
            CMF Masonry
          </a>
          .
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
          We work with the industry&apos;s leading material suppliers to give you access to the widest
          selection of stone, brick, and tile for your project.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
          {suppliers.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${s.name}`}
              className="bg-white border border-[color:var(--sand-deep)] p-4 flex items-center justify-center h-20 hover:border-[color:var(--accent)] transition-all"
            >
              <Image
                src={s.logo}
                alt={s.name}
                width={120}
                height={60}
                className="object-contain max-h-12 w-auto"
              />
            </a>
          ))}
        </div>
      </section>

      <PricingCTA
        title="Plan your masonry project with confidence."
        description="Share the project details you have now and our team will help shape the right stone, brick, or tile selection, installation path, and starting range."
      />

      {/* Anaheim CTA */}
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-medium mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Plan masonry through our Anaheim showroom
          </h2>
          <p className="text-[color:var(--ink)]/60 mb-12 max-w-2xl">
            Masonry services are offered exclusively in Southern California and are coordinated through
            our Anaheim showroom. Bring your project plans or photos and our team will help you select
            materials, discuss scope, provide project guidance, and coordinate next steps.
          </p>
          <div className="bg-white border border-[color:var(--sand-deep)] p-7 max-w-xl">
            <h3 className="text-[color:var(--ink)] font-medium text-lg mb-2">Anaheim</h3>
            <p className="text-[color:var(--ink)]/65 text-sm mb-1">1430 S Anaheim Blvd, Anaheim, CA 92805</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("1430 S Anaheim Blvd, Anaheim, CA 92805")}`} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-[color:var(--accent)] hover:underline mb-1">Get Directions →</a>
            <p className="text-[color:var(--ink)]/55 text-xs mb-4">Mon-Sat: 9:00 AM - 5:00 PM</p>
            <a
              href="tel:7149087388"
              className="text-[color:var(--accent)] font-medium hover:text-[color:var(--ink)] transition-colors"
            >
              (714) 908-7388
            </a>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/estimate"
              className="inline-block bg-[color:var(--ink)] hover:bg-black text-white px-8 py-3.5 font-medium transition-colors"
            >
              Request Project Guidance
            </Link>
            <Link
              href="/showrooms/anaheim"
              className="inline-block border border-[color:var(--ink)]/20 text-[color:var(--ink)] hover:border-[color:var(--ink)] px-8 py-3.5 font-medium transition-colors"
            >
              View Anaheim Showroom
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
