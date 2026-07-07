import Link from "next/link";
import Image from "next/image";
import MantelSearch from "@/components/MantelSearch";
import ConsultationCTA from "@/components/ConsultationCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
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
    description: "Efficient, beautiful gas inserts from the top brands in the industry.",
    href: "/fireplaces/gas-inserts",
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[90vh] flex items-center">
        <Image
          src="/hero-fireplace.png"
          alt="Padthaway FV46 gas fireplace with white mantel surround"
          fill
          className="object-cover object-center"
          priority
        />
        {/* gradient: transparent right side → dark left side so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 w-full">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Family-owned since 1987
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Enhance Your Fireplace Now
          </h1>
          <p className="text-stone-200 text-lg max-w-xl mb-10 leading-relaxed">
            California Mantel &amp; Fireplace manufactures premium mantels and installs
            gas &amp; electric fireplaces across California and Nevada. Three showrooms — Anaheim,
            Dublin &amp; Sacramento — serving homeowners from Southern California to Reno &amp; Lake Tahoe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/estimate"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Request Estimate
            </Link>
            <Link
              href="/projects"
              className="border border-white text-white hover:bg-white hover:text-stone-900 px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              View Projects
            </Link>
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
        <div className="text-center">
          <Link
            href="/mantels"
            className="inline-block bg-amber-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-amber-800 transition-colors"
          >
            Find your fit →
          </Link>
        </div>
      </section>

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
