import Link from "next/link";
import Image from "next/image";
import MantelSearch from "@/components/MantelSearch";
import ConsultationCTA from "@/components/ConsultationCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import InstallationsCarousel from "@/components/InstallationsCarousel";
import BestSellersShowcase from "@/components/BestSellersShowcase";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/business-data";

export const metadata = {
  title: "California Mantel & Fireplace | Custom Mantels & Fireplaces",
  description:
    "Aussie-American family-owned since 1987. We manufacture wood & precast concrete fireplace mantels and install gas, electric & outdoor fireplaces. Showrooms in Anaheim, Dublin & Sacramento.",
  alternates: { canonical: "/" },
};

const categories = [
  {
    title: "Contemporary Mantels",
    description: "Clean lines and modern profiles to complement today's interiors.",
    href: "/mantels/contemporary",
    image: "/mantels/bolte-fv46.png",
  },
  {
    title: "Traditional Mantels",
    description: "Classic carved designs with timeless elegance and warmth.",
    href: "/mantels/traditional",
    image: "/hero-fireplace.png",
  },
  {
    title: "Gas Fireplaces",
    description: "Efficient, beautiful gas fireplaces from the top brands in the industry.",
    href: "/fireplaces",
    image: "/brands/ortal/room-mountain-cabin.jpg",
  },
  {
    title: "Electric Fireplaces",
    description: "Modern electric fireplaces — no venting required.",
    href: "/fireplaces/electric",
    image: "/brands/modern-flames/redstone.png",
  },
  {
    title: "Outdoor Fireplaces",
    description: "Extend your living space outdoors with a stunning fireplace.",
    href: "/fireplaces/outdoor",
    image: "/brands/ortal/outdoor.png",
  },
  {
    title: "Wood Surrounds",
    description: "Handcrafted wood mantel surrounds in a variety of styles.",
    href: "/mantels/wood-surrounds",
    image: "/brands/mendota/firein-room.png",
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

const showrooms = [
  { city: "Anaheim", phone: "(714) 908-7388", tel: "7149087388" },
  { city: "Dublin", phone: "(925) 436-1731", tel: "9254361731" },
  { city: "Sacramento", phone: "(916) 665-0627", tel: "9166650627" },
];

const stats = [
  { number: "35+", label: "Years in Business" },
  { number: "3", label: "California Showrooms" },
  { number: "30+", label: "Fireplace Brands" },
  { number: "1000s", label: "Projects Completed" },
];

// Google Business Profile ratings per showroom (kept in sync with our GBP listings).
const reviews = [
  { city: "Sacramento", rating: 4.7, count: 152 },
  { city: "Anaheim", rating: 4.3, count: 55 },
  { city: "Dublin", rating: 4.7, count: 19 },
];
const totalReviews = reviews.reduce((n, r) => n + r.count, 0);
const avgRating =
  reviews.reduce((n, r) => n + r.rating * r.count, 0) / totalReviews;

function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating);
  return (
    <span className="inline-flex" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < filled ? "text-[color:var(--accent)]" : "text-stone-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.958a1 1 0 00-.363-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
        </svg>
      ))}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      {/* Hero — architectural, editorial */}
      <section className="relative text-white overflow-hidden min-h-[92vh] flex items-end">
        <Image
          src="/hero-bolte-fv41.png"
          alt="Bolte FV41 gas fireplace with a custom precast mantel as the focal point of a light-filled living room"
          fill
          className="object-cover object-center"
          priority
        />
        {/* scrim biased to bottom-left where the text sits, keeping the upper-right airy */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/30 to-transparent" />
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pb-20 md:pb-28">
          <p className="uppercase tracking-[0.28em] text-white/75 text-xs md:text-sm mb-6">
            Manufactured in California · Since 1987
          </p>
          <h1
            className="text-4xl md:text-6xl font-medium max-w-4xl leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            California&apos;s Premier Mantel &amp; Fireplace Manufacturer
          </h1>
          <p className="mt-6 text-white/85 uppercase tracking-[0.18em] text-sm md:text-base">
            Custom Mantels &nbsp;·&nbsp; Fireplaces &nbsp;·&nbsp; Masonry &nbsp;·&nbsp; Installation
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/mantels"
              className="bg-white text-[color:var(--ink)] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors"
            >
              Explore the Collection
            </Link>
            <Link
              href="/booking"
              className="border border-white/70 text-white hover:bg-white hover:text-[color:var(--ink)] px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities + trust bar — communicates the full breadth at a glance */}
      <section className="bg-[color:var(--sand)] border-b border-[color:var(--sand-deep)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-[color:var(--ink)]/75 text-sm">
            {[
              "Our Own Manufacturing",
              "Hundreds of Styles",
              "Custom Builds",
              "Professional Installation",
              "3 California Showrooms",
            ].map((label, i) => (
              <span key={label} className="flex items-center gap-x-6">
                {i > 0 && <span className="text-[color:var(--accent)]/50" aria-hidden="true">·</span>}
                <span className="tracking-wide">{label}</span>
              </span>
            ))}
            <span className="flex items-center gap-2 pl-2">
              <Stars rating={avgRating} />
              <span className="tracking-wide">
                <span className="font-semibold text-[color:var(--ink)]">{avgRating.toFixed(1)}</span>
                {" · "}{totalReviews}+ Google reviews
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What We Offer
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            From handcrafted mantels to the latest in gas and electric fireplace
            technology — we have everything you need.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] block"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              {/* text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-xl font-bold text-white mb-1 leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {cat.title}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {cat.description}
                </p>
                <span className="inline-block mt-2 text-amber-400 text-sm font-semibold group-hover:underline">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Real projects — scrolling before/after installations */}
      <InstallationsCarousel />

      {/* Find a mantel — search / help tool */}
      <section className="bg-stone-50 border-y border-stone-100 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold mb-3">
            Searching for a mantel?
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let Us Help
          </h2>
          <p className="text-stone-500 leading-relaxed mb-2">
            Search our full collection by name, style, or material — or tell us your
            fireplace dimensions and we&apos;ll find the mantels that fit.
          </p>
        </div>
        <MantelSearch />
      </section>

      {/* Best-sellers — premium collection showcase */}
      <BestSellersShowcase />

      {/* Real Google reviews */}
      <Testimonials />

      {/* How to Buy a Fireplace */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold mb-3">
              The Process
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Buying a Fireplace Is Easier Than You Think
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Most people only buy a fireplace once. We&apos;ve helped thousands of California
              homeowners through every step — here&apos;s exactly what to expect when you work with us.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                step: "01",
                title: "Book a Showroom Visit",
                description:
                  "Come in and see our full collection in person. Touch the mantels, see the flames, and talk with a certified hearth expert who will listen to your vision, room dimensions, and budget — no pressure, no sales pitch.",
                icon: "🏠",
              },
              {
                step: "02",
                title: "Design Your Hearth System",
                description:
                  "Choose your fireplace appliance (gas, electric, or wood) and your mantel surround together. We handle the compatibility — making sure your firebox opening, clearances, and mantel style all work perfectly as a system.",
                icon: "✏️",
              },
              {
                step: "03",
                title: "We Build & Install",
                description:
                  "Our in-house team manufactures your custom mantel at our Sacramento facility. Our certified installers then handle the complete installation — gas line, electrical, surround, and hearth — start to finish.",
                icon: "🔧",
              },
              {
                step: "04",
                title: "Enjoy Your Fireplace",
                description:
                  "We walk you through operating your new system, answer every question, and make sure everything is perfect before we leave. Most customers tell us it was the easiest home improvement project they've ever done.",
                icon: "🔥",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="text-6xl font-bold text-stone-100 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.step}
                </div>
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3
                  className="text-lg font-bold text-stone-900 mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          {/* What to know before you buy */}
          <div className="bg-stone-50 rounded-2xl p-10">
            <h3
              className="text-2xl font-bold text-stone-900 mb-8 text-center"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What to Know Before You Buy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  q: "Gas, electric, or wood — which is right for me?",
                  a: "Gas fireplaces are the most popular — realistic flames, simple operation, and they work during power outages. Electric fireplaces require no venting and are great for apartments or rooms without a gas line. Wood-burning is the most traditional, but note that California requires all wood-burning fireplaces to be EPA-rated.",
                },
                {
                  q: "How do I know which fireplace fits my space?",
                  a: "Firebox size, clearances, venting requirements, and your existing opening all factor in. That's exactly what our showroom consultations are for — bring your room dimensions and we'll match you with the right unit and surround combination.",
                },
                {
                  q: "How long does installation take?",
                  a: "Gas insert installation is typically same-day. Custom mantel manufacturing adds 1–3 weeks lead time. We'll give you an exact timeline during your showroom consultation.",
                },
              ].map((item) => (
                <div key={item.q}>
                  <p className="font-bold text-stone-900 mb-2 text-sm">{item.q}</p>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/booking"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3.5 rounded font-semibold transition-colors inline-block mr-4"
              >
                Book a Showroom Visit
              </Link>
              <Link
                href="/estimate"
                className="border border-stone-300 text-stone-700 hover:border-amber-700 hover:text-amber-700 px-8 py-3.5 rounded font-semibold transition-colors inline-block"
              >
                Request an Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-y border-stone-100 bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-2xl font-bold text-stone-900 mb-10"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Brands We Carry
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-center hover:border-amber-700 hover:shadow-sm transition-all h-20"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-12 w-auto"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InstantEstimateCTA />

      <ConsultationCTA />

      {/* About strip */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold mb-3">
              Our Story
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900 mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Aussie-American. Family-Owned. Since 1987.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-5">
              We started with a passion for craftsmanship and a commitment to
              bringing warmth into every home. Today we manufacture wood and
              precast concrete fireplace mantels, install gas and electric
              fireplaces, and deliver award-winning customer service to homeowners
              and developers across California and Nevada — including the Reno and Lake Tahoe area.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              We also believe in giving back — we are monthly supporters of
              Rescue Ranch, providing ongoing donations for the care of rescued dogs.
            </p>
            <Link
              href="/about"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-7 py-3 rounded font-semibold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl py-8 px-4 shadow-sm">
                <p
                  className="text-4xl font-bold text-amber-700 mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.number}
                </p>
                <p className="text-stone-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showrooms CTA */}
      <section className="bg-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Visit a Showroom
          </h2>
          <p className="text-amber-100 mb-10 max-w-xl mx-auto">
            See our full range of mantels and fireplaces in person. Our experts
            are ready to help you find the perfect fit for your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-10">
            {showrooms.map((s) => (
              <div key={s.city} className="text-center">
                <p className="font-bold text-lg mb-1">{s.city}</p>
                <a
                  href={`tel:${s.tel}`}
                  className="text-amber-100 hover:text-white underline transition-colors"
                >
                  {s.phone}
                </a>
              </div>
            ))}
          </div>
          <Link
            href="/estimate"
            className="inline-block bg-white text-amber-700 hover:bg-amber-50 px-8 py-3.5 rounded font-bold transition-colors"
          >
            Request a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
