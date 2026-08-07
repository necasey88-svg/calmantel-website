import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import EditorialPageHero from "@/components/EditorialPageHero";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import { SITE_URL, business, getShowroom } from "@/lib/business-data";

export const metadata = {
  title: "Fireplace Mantels & Surrounds in Orange County | California Mantel",
  description:
    "Orange County's source for fireplace mantels & surrounds. Visit our Anaheim showroom or request a free estimate. Precast & wood mantels, custom sizing, expert install.",
  alternates: { canonical: "/orange-county" },
};

const anaheim = getShowroom("anaheim")!;

const cities = [
  "Anaheim", "Irvine", "Santa Ana", "Huntington Beach", "Orange",
  "Fullerton", "Newport Beach", "Yorba Linda", "Tustin", "Garden Grove",
  "Brea", "Placentia",
];

const faqs = [
  {
    q: "Do you serve all of Orange County?",
    a: "Yes. Our Anaheim showroom serves homeowners throughout Orange County — including Irvine, Santa Ana, Huntington Beach, Fullerton, Newport Beach, Yorba Linda, and Tustin. If you're nearby and don't see your city listed, just ask.",
  },
  {
    q: "Can I see mantels and surrounds in person?",
    a: "Absolutely — that's what our Anaheim showroom is for. You can compare finishes, scale, and styles side by side, with live-burning fireplace displays, before you decide.",
  },
  {
    q: "Do you install, or only supply the mantel?",
    a: "We do both. Our own licensed installers handle the fireplace, mantel, surround, and hearth, so the finished result is measured, fitted, and level — not left to a general contractor.",
  },
  {
    q: "Can you build a custom size for my fireplace?",
    a: "Yes. Many Orange County homes have non-standard openings, so custom sizing is routine for us. Share your dimensions and we'll quote a mantel and surround built to fit.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/showrooms/anaheim#business`,
  name: `${business.name} — Anaheim`,
  image: business.logo,
  url: `${SITE_URL}/orange-county`,
  telephone: `+1${anaheim.tel}`,
  priceRange: "$$",
  parentOrganization: { "@type": "Organization", name: business.name, url: SITE_URL },
  address: {
    "@type": "PostalAddress",
    streetAddress: anaheim.streetAddress,
    addressLocality: anaheim.addressLocality,
    addressRegion: anaheim.addressRegion,
    postalCode: anaheim.postalCode,
    addressCountry: "US",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Orange County, California" },
  openingHoursSpecification: anaheim.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Orange County", item: `${SITE_URL}/orange-county` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function OrangeCountyPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <EditorialPageHero
        eyebrow="Serving Orange County"
        title="Fireplace mantels & surrounds in Orange County."
        description="Designed, supplied, and installed from our Anaheim showroom — from clean contemporary lines to hand-finished precast and wood. Family-owned since 1987."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2
              className="text-2xl font-medium text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mantels &amp; surrounds for Orange County homes
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                A mantel sets the tone for the whole room. We carry a full range of fireplace
                mantels and surrounds for Orange County homeowners — from{" "}
                <Link href="/mantels/contemporary" className="text-[color:var(--accent)] hover:underline">
                  clean contemporary designs
                </Link>{" "}
                to classic precast concrete and hand-finished wood. Choose a ready-made piece
                sized to a standard opening, or have one built to your exact dimensions and finish.
              </p>
              <p>
                Not sure what fits your fireplace? Bring photos and measurements to the{" "}
                <Link href="/showrooms/anaheim" className="text-[color:var(--accent)] hover:underline">
                  Anaheim showroom
                </Link>
                , or{" "}
                <Link href="/estimate" className="text-[color:var(--accent)] hover:underline">
                  request a free estimate
                </Link>{" "}
                and we&apos;ll help you narrow it down.
              </p>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Precast concrete mantels & surrounds",
                "Solid wood mantels & beams",
                "Contemporary & traditional styles",
                "Custom sizing for non-standard openings",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2 text-stone-600 text-sm">
                  <span className="text-[color:var(--accent)] mt-0.5 flex-shrink-0 font-medium">✓</span>
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/mantels"
                className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent)] hover:text-[color:var(--accent-dark)] transition-colors"
              >
                Browse all mantels →
              </Link>
            </div>
          </div>

          <div>
            <h2
              className="text-2xl font-medium text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Why Orange County homeowners choose California Mantel
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                We design, manufacture, and install in-house — one accountable team from the first
                sketch to a level, finished install, not a hand-off between vendors. As an
                Aussie-American family-owned business since 1987, we&apos;ve helped Orange County
                homeowners, builders, and designers make the fireplace the centerpiece of the room.
              </p>
              <p>
                Custom is our standard. If a stock size or finish doesn&apos;t fit your space,
                we&apos;ll make one that does.
              </p>
            </div>
          </div>

          <div>
            <h2
              className="text-2xl font-medium text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cities we serve
            </h2>
            <div className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <span key={c} className="bg-stone-100 text-stone-600 text-sm px-3 py-1 rounded-sm">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2
              className="text-2xl font-medium text-stone-900 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Frequently asked questions
            </h2>
            <div className="divide-y divide-stone-200 border-t border-stone-200">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="text-base font-medium text-stone-900 mb-2">{f.q}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="border border-stone-200 rounded-sm p-6">
            <h3
              className="text-lg font-medium text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Anaheim Showroom
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Address</p>
                <p className="text-stone-700">{anaheim.streetAddress}</p>
                <p className="text-stone-700">
                  {anaheim.addressLocality}, {anaheim.addressRegion} {anaheim.postalCode}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${anaheim.streetAddress}, ${anaheim.addressLocality}, ${anaheim.addressRegion} ${anaheim.postalCode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1.5 text-[color:var(--accent)] hover:underline"
                >
                  Get Directions →
                </a>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Hours</p>
                <p className="text-stone-700">Mon–Sat: 9:00 AM – 5:00 PM</p>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Phone</p>
                <a
                  href={`tel:${anaheim.tel}`}
                  className="text-[color:var(--accent)] font-medium hover:text-[color:var(--ink)]"
                >
                  {anaheim.phone}
                </a>
              </div>
              <Link
                href="/showrooms/anaheim"
                className="block text-sm text-stone-700 hover:text-[color:var(--accent)] transition-colors"
              >
                → Full showroom details
              </Link>
            </div>
          </div>

          <div className="bg-[color:var(--accent)] text-white rounded-sm p-6">
            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              Free Project Estimate
            </h3>
            <p className="text-amber-100 text-sm mb-4">
              Tell us about your fireplace and we&apos;ll provide an estimate — in the showroom or online.
            </p>
            <Link
              href="/estimate"
              className="block text-center bg-white text-[color:var(--accent)] hover:bg-amber-50 px-5 py-2.5 rounded font-medium text-sm transition-colors"
            >
              Request Free Estimate
            </Link>
          </div>

          <div className="border border-stone-200 rounded-sm p-6">
            <h3 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-3">
              Explore
            </h3>
            <div className="space-y-2">
              <Link href="/mantels" className="block text-sm text-stone-700 hover:text-[color:var(--accent)] transition-colors">
                → Fireplace mantels
              </Link>
              <Link href="/fireplaces/outdoor" className="block text-sm text-stone-700 hover:text-[color:var(--accent)] transition-colors">
                → Outdoor fireplaces
              </Link>
              <Link href="/contact" className="block text-sm text-stone-700 hover:text-[color:var(--accent)] transition-colors">
                → Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InstantEstimateCTA />
    </>
  );
}
