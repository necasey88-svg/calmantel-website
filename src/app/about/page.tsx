import Link from "next/link";

const showrooms = [
  {
    city: "Sacramento",
    address: "4141 N Freeway Blvd, Sacramento, CA 95843",
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
    address: "6681 Sierra Lane Suite D, Dublin, CA 94568",
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

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
