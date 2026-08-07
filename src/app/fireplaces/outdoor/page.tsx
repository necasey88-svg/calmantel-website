import Link from "next/link";
import { getFireplaceCategory } from "@/lib/fireplaces-data";
import BrandFilterGrid from "@/components/BrandFilterGrid";
import PricingCTA from "@/components/PricingCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, business } from "@/lib/business-data";

export const metadata = {
  title: "Outdoor Fireplace Installation in California | California Mantel",
  description:
    "Custom outdoor fireplaces designed & installed across Orange County, the Bay Area & Sacramento. Gas & wood options, permitting handled. Request a free estimate.",
  alternates: { canonical: "/fireplaces/outdoor" },
};

const installSteps = [
  {
    title: "Consultation",
    body: "Visit a showroom or send photos and rough measurements of your space. We talk fuel type, style, and budget.",
  },
  {
    title: "Design & estimate",
    body: "We recommend a fireplace and materials that fit your yard and your home's exterior, then give you a clear, itemized estimate.",
  },
  {
    title: "Permitting & gas-line coordination",
    body: "Outdoor gas work and structural builds usually require permits — we coordinate them so the job is done to code.",
  },
  {
    title: "Build & installation",
    body: "Our licensed installers set the firebox, build the surround, and finish the materials.",
  },
  {
    title: "Walkthrough",
    body: "We show you how everything operates and confirm you're happy before we call it done.",
  },
];

const serviceAreas = [
  { region: "Orange County", note: "from our Anaheim showroom", href: "/showrooms/anaheim" },
  { region: "Bay Area", note: "from our Dublin showroom", href: "/showrooms/dublin" },
  { region: "Sacramento region", note: "from our Sacramento showroom", href: "/showrooms/sacramento" },
];

const faqs = [
  {
    q: "Do you install outdoor fireplaces, or just sell them?",
    a: "Both. We're a full-service outdoor fireplace installer — we design, supply, and professionally install across Orange County, the Bay Area, and the Sacramento region, and we handle gas-line and permitting coordination as part of the project.",
  },
  {
    q: "Should I choose gas or wood-burning for an outdoor fireplace?",
    a: "Gas is the most convenient — instant on, no smoke, easier to permit — and it's what most homeowners choose. Wood-burning gives you a real flame and that classic crackle, but it needs proper clearances and venting and may face more local restrictions. We'll walk you through what works for your yard.",
  },
  {
    q: "How long does an outdoor fireplace installation take?",
    a: "Most installations wrap up within a few days once materials arrive. Custom masonry and larger built-in designs take longer — we'll give you a realistic timeline with your estimate.",
  },
  {
    q: "Do I need a permit for an outdoor fireplace?",
    a: "Usually, yes — especially for gas lines and any structural work. We coordinate the required permits and build to code so you don't have to navigate it alone.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Outdoor fireplace design and installation",
  provider: { "@type": "Organization", name: business.name, url: SITE_URL },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Orange County, California" },
    { "@type": "AdministrativeArea", name: "San Francisco Bay Area, California" },
    { "@type": "AdministrativeArea", name: "Sacramento, California" },
  ],
  url: `${SITE_URL}/fireplaces/outdoor`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Fireplaces", item: `${SITE_URL}/fireplaces` },
    { "@type": "ListItem", position: 3, name: "Outdoor Fireplaces", item: `${SITE_URL}/fireplaces/outdoor` },
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

export default function OutdoorFireplacesPage() {
  const category = getFireplaceCategory("outdoor");
  if (!category) return <div />;

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[color:var(--ink)]/55 mb-4">
            <Link href="/fireplaces" className="hover:text-[color:var(--accent)] transition-colors">
              Fireplaces
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[color:var(--ink)]/80">{category.title}</span>
          </nav>
          <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-sm font-medium mb-3">
            {category.tagline}
          </p>
          <h1
            className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.04] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {category.title}
          </h1>
          <p className="text-[color:var(--ink)]/60 max-w-2xl leading-relaxed">{category.description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BrandFilterGrid products={category.products} />
      </section>

      {/* Installer intent: process, service areas, FAQ */}
      <section className="bg-[#F9F7F3] border-y border-[color:var(--sand-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <div>
            <h2
              className="text-3xl md:text-4xl font-medium tracking-tight mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Outdoor fireplaces, designed and installed
            </h2>
            <p className="text-[color:var(--ink)]/60 max-w-2xl leading-relaxed">
              An outdoor fireplace turns a patio or backyard into a room you actually use after
              sunset. We handle it from first sketch to final walkthrough — including the gas-line
              and permitting work most homeowners don&apos;t want to manage themselves.
            </p>
          </div>

          <div>
            <h3
              className="text-2xl font-medium mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our installation process
            </h3>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {installSteps.map((step, i) => (
                <li key={step.title} className="border-t border-[color:var(--sand-deep)] pt-5">
                  <span className="text-[color:var(--accent)] text-sm font-medium tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-lg font-medium mt-2 mb-1.5">{step.title}</h4>
                  <p className="text-[color:var(--ink)]/60 text-sm leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3
              className="text-2xl font-medium mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Service areas
            </h3>
            <p className="text-[color:var(--ink)]/60 max-w-2xl leading-relaxed mb-6">
              We design and install outdoor fireplaces throughout our three California regions:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {serviceAreas.map((a) => (
                <li key={a.region}>
                  <Link
                    href={a.href}
                    className="block border border-[color:var(--sand-deep)] rounded-sm p-5 hover:border-[color:var(--accent)] transition-colors"
                  >
                    <p className="font-medium text-[color:var(--ink)]">{a.region}</p>
                    <p className="text-[color:var(--ink)]/55 text-sm mt-1">{a.note} →</p>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[color:var(--ink)]/55 text-sm mt-4">
              Near one of these areas and don&apos;t see your city?{" "}
              <Link href="/contact" className="text-[color:var(--accent)] hover:underline">
                Get in touch
              </Link>{" "}
              — we likely cover you.
            </p>
          </div>

          <div>
            <h3
              className="text-2xl font-medium mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Frequently asked questions
            </h3>
            <div className="divide-y divide-[color:var(--sand-deep)] border-t border-[color:var(--sand-deep)] max-w-3xl">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h4 className="text-base font-medium mb-2">{f.q}</h4>
                  <p className="text-[color:var(--ink)]/60 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InstantEstimateCTA />
      <PricingCTA />
    </>
  );
}
