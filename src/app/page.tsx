import Link from "next/link";
import Image from "next/image";
import MantelSearch from "@/components/MantelSearch";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import InstallationsCarousel from "@/components/InstallationsCarousel";
import BestSellersShowcase from "@/components/BestSellersShowcase";
import Testimonials from "@/components/Testimonials";
import WhyCMF from "@/components/WhyCMF";
import ServingCalifornia from "@/components/ServingCalifornia";
import ClosingStatement from "@/components/ClosingStatement";
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

      {/* Why CMF — credibility band */}
      <WhyCMF />

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

      {/* The Collection — premium best-sellers showcase */}
      <BestSellersShowcase />

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

      {/* The Process — editorial timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
              The Process
            </p>
            <h2
              className="text-4xl md:text-5xl font-medium text-[color:var(--ink)] tracking-tight md:whitespace-nowrap"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              From First Visit to Finished Room
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {[
              { step: "01", title: "Visit Our Showroom", description: "See hundreds of mantels and fireplaces in person while our design team helps you plan the perfect combination." },
              { step: "02", title: "Design Your Fireplace", description: "Choose your appliance and mantel together — every dimension and clearance planned to work as one system." },
              { step: "03", title: "Built in California", description: "Your custom mantel is handcrafted at our Sacramento facility, then installed by our own certified team." },
              { step: "04", title: "Enjoy for Decades", description: "We make sure everything is perfect before we leave — a centerpiece built to last." },
            ].map((s) => (
              <div key={s.step}>
                <p className="text-6xl font-medium text-[color:var(--accent)]/35 leading-none mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.step}
                </p>
                <div className="w-8 h-px bg-[color:var(--accent)] mb-5" />
                <h3 className="text-xl font-medium text-[color:var(--ink)] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens next + primary CTA */}
      <section className="bg-white pb-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
            Ready When You Are
          </p>
          <h2
            className="text-4xl md:text-5xl font-medium text-[color:var(--ink)] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Happens Next
          </h2>
          <p className="text-stone-500 leading-relaxed mb-10">
            Most consultations take about 45 minutes. We&apos;ll answer your questions, show you
            products in person, and provide pricing — with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/booking"
              className="bg-[color:var(--ink)] text-white hover:bg-black px-9 py-4 rounded-full font-medium tracking-wide transition-colors"
            >
              Schedule Your Design Consultation
            </Link>
            <Link
              href="/mantels"
              className="text-[color:var(--ink)] hover:text-[color:var(--accent)] font-medium tracking-wide transition-colors"
            >
              Browse Mantels →
            </Link>
          </div>
        </div>
      </section>

      {/* Emotional lifestyle break */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* TODO: swap for a dedicated lifestyle image (family/holiday moment) */}
        <Image
          src="/hero-bolte-fv41.png"
          alt="A fireplace at the heart of a family living room"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-3xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl font-medium leading-[1.12] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Designed Around the Moments That Matter
          </h2>
          <p className="text-white/85 leading-relaxed max-w-2xl mx-auto">
            Every fireplace we build is crafted to become the centerpiece of your home — from
            quiet mornings to holiday gatherings. From consultation to installation, our goal is
            to create a space you&apos;ll love for decades.
          </p>
        </div>
      </section>

      {/* FAQ — cards */}
      <section className="bg-[#F9F7F3] py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
              Good to Know
            </p>
            <h2
              className="text-4xl md:text-5xl font-medium text-[color:var(--ink)] tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { q: "Gas, electric, or wood?", a: "Gas is the most popular — realistic flames, simple operation, and it works during outages. Electric needs no venting. Wood-burning is the most traditional, though California requires EPA-rated units." },
              { q: "How long does installation take?", a: "Gas insert installation is typically same-day. Custom mantel manufacturing adds about 1–3 weeks of lead time — we'll give you an exact timeline at your consultation." },
              { q: "How do I know what fits my space?", a: "Firebox size, clearances, venting, and your existing opening all factor in. Bring your room dimensions and we'll match you with the right unit and surround." },
              { q: "Do you offer custom sizes?", a: "Yes — we manufacture our precast mantels in California, so we can build to custom widths and finishes to suit your fireplace and room." },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl border border-stone-200/70 p-7">
                <p className="font-medium text-[color:var(--ink)] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  {item.q}
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real projects — scrolling before/after installations */}
      <InstallationsCarousel />

      {/* Real Google reviews */}
      <Testimonials />

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

      {/* About strip */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div>
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
        </div>
      </section>

      {/* Serving California — regions + showrooms */}
      <ServingCalifornia />

      {/* Closing brand statement */}
      <ClosingStatement />
    </>
  );
}
