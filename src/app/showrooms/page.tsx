import Link from "next/link";

const showrooms = [
  {
    city: "Anaheim",
    subtitle: "Southern California",
    tagline: "Orange County's most complete hearth destination",
    address: "1430 S Anaheim Blvd, Anaheim, CA 92805",
    phone: "(714) 908-7388",
    tel: "7149087388",
    hours: [
      "Mon–Sat: 9:00 AM – 5:00 PM",
    ],
    serviceArea: "Anaheim, Orange, Irvine, Fullerton, Yorba Linda, Garden Grove, Tustin, Santa Ana, Brea, Placentia, and surrounding Orange County communities",
    href: "/showrooms/anaheim",
    note: "Masonry services exclusively available at this location",
  },
  {
    city: "Dublin",
    subtitle: "Bay Area",
    tagline: "Serving the Tri-Valley and East Bay",
    address: "6681-D Sierra Lane, Dublin, CA 94568",
    phone: "(925) 436-1731",
    tel: "9254361731",
    hours: [
      "Mon–Fri: 10:00 AM – 5:00 PM",
      "Sat: By appointment only",
    ],
    serviceArea: "Dublin, Pleasanton, San Ramon, Livermore, Danville, Walnut Creek, Fremont, Castro Valley, Hayward, and surrounding Tri-Valley and East Bay communities",
    href: "/showrooms/dublin",
    note: "Saturday visits require advance scheduling",
  },
  {
    city: "Sacramento",
    subtitle: "Northern California — Corporate HQ",
    tagline: "Northern California's most complete fireplace destination",
    address: "4141 N Freeway Blvd, Sacramento, CA 95834",
    phone: "(916) 665-0627",
    tel: "9166650627",
    hours: [
      "Mon–Fri: 9:00 AM – 5:00 PM",
      "Sat: 10:00 AM – 3:00 PM",
    ],
    serviceArea: "Sacramento, Roseville, Elk Grove, Folsom, Rancho Cordova, Citrus Heights, Lincoln, Auburn, Davis, and surrounding Northern California communities",
    href: "/showrooms/sacramento",
    note: "Largest team of hearth consultants — corporate headquarters",
  },
];

const amenities = [
  "Live-burning fireplace displays (gas & electric)",
  "Custom mantel gallery with precast concrete and wood options",
  "Expert consultation from certified hearth professionals",
  "Free project estimates",
  "Licensed, factory-trained installation professionals",
  "In-house mantel manufacturing",
];

export default function ShowroomsPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            California Locations
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Showrooms
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            Three designer showrooms across California featuring live-burning displays,
            custom mantel galleries, certified hearth experts, and licensed installation services.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-amber-50 border-b border-amber-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-lg font-bold text-stone-900 mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What you&apos;ll find at every showroom
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {amenities.map((a) => (
              <div key={a} className="flex items-start gap-2 text-sm text-stone-600">
                <span className="text-amber-700 mt-0.5 flex-shrink-0">✓</span>
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        {showrooms.map((s) => (
          <div
            key={s.city}
            className="border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Header */}
            <div className="bg-stone-900 text-white px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-1">
                  {s.subtitle}
                </p>
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.city}
                </h2>
                <p className="text-stone-400 text-sm mt-1 italic">&ldquo;{s.tagline}&rdquo;</p>
              </div>
              <div className="flex gap-3">
                <a
                  href={`tel:${s.tel}`}
                  className="bg-amber-700 hover:bg-amber-800 text-white px-5 py-2.5 rounded font-semibold text-sm transition-colors"
                >
                  {s.phone}
                </a>
                <Link
                  href={s.href}
                  className="border border-white text-white hover:bg-white hover:text-stone-900 px-5 py-2.5 rounded font-semibold text-sm transition-colors"
                >
                  Details
                </Link>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Address</h3>
                <p className="text-stone-700 text-sm leading-relaxed">{s.address}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Hours</h3>
                {s.hours.map((h) => (
                  <p key={h} className="text-stone-700 text-sm">{h}</p>
                ))}
                {s.note && (
                  <p className="text-amber-700 text-xs mt-2 italic">{s.note}</p>
                )}
              </div>
              <div>
                <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Service Area</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{s.serviceArea}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-amber-700 text-white py-14 text-center">
        <h2
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Can&apos;t make it in?
        </h2>
        <p className="text-amber-100 mb-6">
          Request a free estimate online and one of our experts will be in touch.
        </p>
        <Link
          href="/estimate"
          className="inline-block bg-white text-amber-700 hover:bg-amber-50 px-8 py-3.5 rounded font-bold transition-colors"
        >
          Request a Free Estimate
        </Link>
      </section>
    </>
  );
}
