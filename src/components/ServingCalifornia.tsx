import Link from "next/link";
import { showrooms as showroomData, formatAddress } from "@/lib/business-data";

const regions = [
  "Sacramento",
  "Bay Area",
  "Lake Tahoe",
  "Central Valley",
  "Orange County",
  "San Diego",
  "Reno, NV",
];

const showrooms = showroomData.map((s) => ({
  city: s.city,
  slug: s.slug,
  address: formatAddress(s),
  phone: s.phone,
  tel: s.tel,
}));

export default function ServingCalifornia() {
  return (
    <section className="bg-[#F9F7F3] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
            Serving California
          </p>
          <h2
            className="text-4xl md:text-5xl font-medium text-[color:var(--ink)] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            From Southern California to Lake Tahoe
          </h2>
          <p className="text-stone-500 leading-relaxed">
            Three showrooms and dedicated installation teams serving homeowners, designers,
            and builders across the state.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {regions.map((r) => (
              <span
                key={r}
                className="text-sm text-[color:var(--ink)]/70 border border-[color:var(--ink)]/15 px-4 py-1.5"
              >
                {r}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {showrooms.map((s) => (
            <div
              key={s.city}
              className="bg-white border border-[color:var(--sand-deep)] p-8 text-center"
            >
              <h3
                className="text-2xl font-medium text-[color:var(--ink)] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.city}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">{s.address}</p>
              <a
                href={`tel:${s.tel}`}
                className="block text-[color:var(--ink)] font-medium hover:text-[color:var(--accent)] transition-colors mb-4"
              >
                {s.phone}
              </a>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `California Mantel & Fireplace, ${s.address}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-[color:var(--accent)] font-medium hover:underline"
              >
                Get Directions →
              </Link>
              <Link
                href={`/booking?showroom=${s.slug}`}
                className="block mt-2 text-sm text-[color:var(--ink)] font-medium hover:text-[color:var(--accent)] transition-colors"
              >
                Book This Showroom →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
