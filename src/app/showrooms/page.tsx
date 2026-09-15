import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  organizationSchema,
  showrooms as showroomData,
  hoursSummary,
  closedDaysNote,
  formatAddress,
} from "@/lib/business-data";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Anaheim, Dublin & Sacramento Showrooms | California Mantel",
  description:
    "Visit a California Mantel & Fireplace showroom in Anaheim, Dublin, or Sacramento. Live-burning fireplace displays, custom mantel galleries, and expert hearth advice since 1987.",
  alternates: { canonical: "/showrooms" },
};

// Editorial copy that isn't part of the canonical NAP/hours data set.
const showroomCopy: Record<
  string,
  { subtitle: string; tagline: string; serviceArea: string; note?: string }
> = {
  anaheim: {
    subtitle: "Southern California",
    tagline: "Orange County's most complete hearth destination",
    serviceArea:
      "Anaheim, Orange, Irvine, Fullerton, Yorba Linda, Garden Grove, Tustin, Santa Ana, Brea, Placentia, and surrounding Orange County communities",
    note: "Masonry services exclusively available at this location",
  },
  dublin: {
    subtitle: "Bay Area",
    tagline: "Serving the Tri-Valley and East Bay",
    serviceArea:
      "Dublin, Pleasanton, San Ramon, Livermore, Danville, Walnut Creek, Fremont, Castro Valley, Hayward, and surrounding Tri-Valley and East Bay communities",
  },
  sacramento: {
    subtitle: "Northern California — Corporate HQ",
    tagline: "Northern California's most complete fireplace destination",
    serviceArea:
      "Sacramento, Roseville, Elk Grove, Folsom, Rancho Cordova, Citrus Heights, Lincoln, Auburn, Davis, and surrounding Northern California communities",
    note: "Largest team of hearth consultants — corporate headquarters",
  },
};

const showrooms = showroomData.map((s) => ({
  ...s,
  ...showroomCopy[s.slug],
  address: formatAddress(s),
  hoursLines: hoursSummary(s),
  closedNote: closedDaysNote(s),
  href: `/showrooms/${s.slug}`,
}));

const amenities = [
  "Live-burning fireplace displays (gas & electric)",
  "Custom mantel gallery with precast concrete and wood options",
  "Expert consultation from certified hearth professionals",
  "Project estimates",
  "Licensed, factory-trained installation professionals",
  "In-house mantel manufacturing",
];

export default function ShowroomsPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <EditorialPageHero
        eyebrow="California Showrooms"
        title="See the scale, finish, and flame in person."
        description="Visit Anaheim, Dublin, or Sacramento for live-burning displays, mantel galleries, material guidance, and hearth consultants who can help shape the full project."
      />

      {/* What to expect */}
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-lg font-medium text-stone-900 mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What you&apos;ll find at every showroom
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {amenities.map((a) => (
              <div key={a} className="flex items-start gap-2 text-sm text-stone-600">
                <span className="text-[color:var(--accent)] mt-0.5 flex-shrink-0">✓</span>
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
            className="border border-[color:var(--sand-deep)] overflow-hidden transition-shadow"
          >
            {/* Header */}
            <div className="bg-stone-900 text-white px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-[color:var(--accent)] text-xs uppercase tracking-widest font-medium mb-1">
                  {s.subtitle}
                </p>
                <h2
                  className="text-2xl font-medium"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.city}
                </h2>
                <p className="text-stone-400 text-sm mt-1 italic">&ldquo;{s.tagline}&rdquo;</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/booking?showroom=${s.slug}`}
                  className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-dark)] text-white px-5 py-2.5 font-medium text-sm transition-colors"
                >
                  Book This Showroom
                </Link>
                <a
                  href={`tel:${s.tel}`}
                  className="border border-white text-white hover:bg-white hover:text-stone-900 px-5 py-2.5 font-medium text-sm transition-colors"
                >
                  {s.phone}
                </a>
                <Link
                  href={s.href}
                  className="text-white/70 hover:text-white px-2 py-2.5 font-medium text-sm transition-colors"
                >
                  Details →
                </Link>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Address</h3>
                <p className="text-stone-700 text-sm leading-relaxed">{s.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-[color:var(--accent)] hover:underline"
                >
                  Get Directions →
                </a>
              </div>
              <div>
                <h3 className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Hours</h3>
                {s.hoursLines.map((h) => (
                  <p key={h} className="text-stone-700 text-sm font-medium">{h}</p>
                ))}
                {s.closedNote && (
                  <p className="text-stone-400 text-xs mt-1">{s.closedNote}</p>
                )}
                {s.note && (
                  <p className="text-[color:var(--accent)] text-xs mt-2 italic">{s.note}</p>
                )}
              </div>
              <div>
                <h3 className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Service Area</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{s.serviceArea}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[color:var(--ink)] text-white py-14 text-center">
        <h2
          className="text-2xl font-medium mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Can&apos;t make it in?
        </h2>
        <p className="text-amber-100 mb-6">
          Request a project guidance online and one of our experts will be in touch.
        </p>
        <Link
          href="/estimate"
          className="inline-block bg-white text-[color:var(--accent)] hover:bg-[#F9F7F3] px-8 py-3.5 font-medium transition-colors"
        >
          Request Project Guidance
        </Link>
      </section>
    </>
  );
}
