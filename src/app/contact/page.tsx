import Link from "next/link";

export const metadata = {
  title: "Contact Us | California Mantel & Fireplace",
  description:
    "Get in touch with California Mantel & Fireplace. Call or visit our Anaheim, Dublin, or Sacramento showrooms for custom mantels, fireplace installation, and free estimates.",
  alternates: { canonical: "/contact" },
};

const showrooms = [
  {
    city: "Anaheim",
    address: "1430 S Anaheim Blvd, Anaheim, CA 92805",
    hours: "Mon–Sat: 9:00 AM – 5:00 PM",
    phone: "(714) 908-7388",
    tel: "7149087388",
    href: "/showrooms/anaheim",
  },
  {
    city: "Dublin",
    address: "6681 Sierra Ln Ste D, Dublin, CA 94568",
    hours: "Mon–Fri: 8:30 AM – 5:00 PM · Sat by appt",
    phone: "(925) 436-1731",
    tel: "9254361731",
    href: "/showrooms/dublin",
  },
  {
    city: "Sacramento",
    address: "4141 N Freeway Blvd, Sacramento, CA 95834",
    hours: "Mon–Sat: 8:30 AM – 5:00 PM",
    phone: "(916) 665-0627",
    tel: "9166650627",
    href: "/showrooms/sacramento",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact Us
          </h1>
          <p className="text-stone-300 max-w-xl leading-relaxed">
            Reach out to any of our three California showrooms, or submit an
            estimate request online and we&apos;ll get back to you within 1–2 business days.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {showrooms.map((s) => (
            <div key={s.city} className="border border-stone-200 rounded-xl p-7">
              <h2
                className="text-xl font-bold text-stone-900 mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.city}
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Address</p>
                  <p className="text-stone-600">{s.address}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-stone-600">{s.hours}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Phone</p>
                  <a href={`tel:${s.tel}`} className="text-amber-700 font-semibold hover:text-amber-800 transition-colors">
                    {s.phone}
                  </a>
                </div>
              </div>
              <Link
                href={s.href}
                className="inline-block mt-5 text-sm text-stone-500 hover:text-amber-700 transition-colors"
              >
                Showroom details →
              </Link>
            </div>
          ))}
        </div>

        {/* Online estimate CTA */}
        <div className="bg-stone-50 rounded-2xl p-10 text-center">
          <h2
            className="text-2xl font-bold text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Prefer to start online?
          </h2>
          <p className="text-stone-500 mb-6 max-w-md mx-auto">
            Fill out our estimate request form and a member of our team will follow up within 1–2 business days.
          </p>
          <Link
            href="/estimate"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3.5 rounded font-semibold transition-colors"
          >
            Request a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
