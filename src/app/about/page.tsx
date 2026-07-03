import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | California Mantel & Fireplace",
  description:
    "Aussie-American family-owned since 1987, California Mantel & Fireplace manufactures custom mantels and installs fireplaces with full project oversight from consultation to inspection.",
  alternates: { canonical: "/about" },
};

const showrooms = [
  {
    city: "Sacramento",
    address: "4141 N Freeway Blvd, Sacramento, CA 95834",
    hours: "Mon–Sat: 8:30 AM – 5:00 PM",
    phone: "(916) 665-0627",
    tel: "9166650627",
  },
  {
    city: "Anaheim",
    address: "1430 S Anaheim Blvd, Anaheim, CA 92805",
    hours: "Mon–Sat: 9:00 AM – 5:00 PM",
    phone: "(714) 908-7388",
    tel: "7149087388",
  },
  {
    city: "Dublin",
    address: "6681 Sierra Ln Ste D, Dublin, CA 94568",
    hours: "Mon–Fri: 8:30 AM – 5:00 PM · Sat by appointment",
    phone: "(925) 436-1731",
    tel: "9254361731",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Since 1987
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About Us
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            California Mantel &amp; Fireplace — an Aussie-American family business
            built on craftsmanship, warmth, and community.
          </p>
        </div>
      </section>

      {/* Company photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/7]">
          <Image
            src="/about/company-photo.png"
            alt="California Mantel & Fireplace team"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-3xl font-bold text-stone-900 mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Our Story
        </h2>
        <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-5">
          <p>
            California Mantel &amp; Fireplace is an Aussie-American family-owned and
            operated business established in 1987. What started as a passion for
            beautiful craftsmanship has grown into one of California&apos;s most trusted
            names in fireplace mantels and installation.
          </p>
          <p>
            We specialize in manufacturing high-quality wood and precast concrete
            fireplace mantels, installing gas and electric fireplaces, and delivering
            award-winning customer service — to individual homeowners and major
            developers nationwide alike.
          </p>
          <p>
            Every home deserves warmth, and not just from the fire. We believe the
            entire fireplace experience — the mantel, the surround, the insert — should
            be a source of pride and comfort for you and your family for decades to come.
          </p>
          <p>
            We also believe in giving back to our community. We are proud monthly
            supporters of <strong>Rescue Ranch</strong>, a dog rescue organization. Our
            recurring donations help provide medical care, food, and shelter for rescued
            dogs in need — because every family member deserves a safe, warm home.
          </p>
        </div>
      </section>

      {/* Meet the family */}
      <section className="bg-amber-50 border-y border-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-700 uppercase tracking-widest text-xs font-semibold mb-3 text-center">
            Family Owned &amp; Operated
          </p>
          <h2
            className="text-3xl font-bold text-stone-900 mb-12 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Meet the Family
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Founders */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-[3/4] mb-5">
                <Image
                  src="/about/owners-parents.jpg"
                  alt="Stephen and Carla Casey, founders of California Mantel & Fireplace"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3
                className="text-xl font-bold text-stone-900 mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Stephen &amp; Carla Casey
              </h3>
              <p className="text-amber-700 text-sm font-semibold mb-3">Founders</p>
              <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                Stephen and Carla founded California Mantel &amp; Fireplace in 1987 with a
                commitment to quality craftsmanship and personal service that still defines
                everything we do today.
              </p>
            </div>

            {/* Daughters */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3] mb-5">
                <Image
                  src="/about/daughters.jpg"
                  alt="Cory, Melanie, and Natalie Casey"
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className="text-xl font-bold text-stone-900 mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Cory, Melanie &amp; Natalie Casey
              </h3>
              <p className="text-amber-700 text-sm font-semibold mb-3">Second Generation</p>
              <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                The three Casey daughters grew up in the business and now carry it forward —
                bringing fresh energy and the same family values their parents built the
                company on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showrooms */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-stone-900 mb-10 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Visit Our Showrooms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showrooms.map((s) => (
              <div key={s.city} className="bg-white rounded-xl p-8 shadow-sm">
                <h3
                  className="text-xl font-bold text-stone-900 mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.city}
                </h3>
                <p className="text-stone-500 text-sm mb-2">{s.address}</p>
                <p className="text-stone-500 text-sm mb-3">{s.hours}</p>
                <a
                  href={`tel:${s.tel}`}
                  className="text-amber-700 font-semibold hover:text-amber-800 transition-colors"
                >
                  {s.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center">
        <h2
          className="text-2xl font-bold text-stone-900 mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ready to get started?
        </h2>
        <p className="text-stone-500 mb-6">
          Request a free estimate or stop by one of our showrooms.
        </p>
        <Link
          href="/estimate"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3.5 rounded font-semibold transition-colors"
        >
          Request a Free Estimate
        </Link>
      </section>
    </>
  );
}
