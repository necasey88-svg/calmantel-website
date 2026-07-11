import Link from "next/link";
import ConsultationCTA from "@/components/ConsultationCTA";
import PricingCTA from "@/components/PricingCTA";

export const metadata = {
  title: "Isokern Fireplaces | California Mantel & Fireplace",
  description:
    "Isokern modular volcanic pumice fireplace systems — wood burning and gas burning. The strongest, most efficient masonry fireplaces available. We sell and install Isokern across California and Nevada.",
  alternates: { canonical: "/fireplaces/isokern" },
};

const woodBurning = [
  {
    name: "Isokern Standard — Wood Burning",
    tagline: "Modular Pumice · All Fuel · Sizes 36 · 42 · 46",
    description:
      "The first Isokern modular fireplace introduced in the United States. Modular volcanic pumice construction lets you build a fireplace as unique as your home — faster than traditional masonry, with superior heat retention. Outdoor installations can be finished with brick, stone, stucco, or tile.",
    sizes: ["36\"", "42\"", "46\""],
    features: [
      "Volcanic pumice blocks — lighter and stronger than concrete",
      "Modular system installs faster than stick-built masonry",
      "Superior heat retention and insulation",
      "UL-listed — meets all building codes",
      "Indoor or outdoor installation",
      "Finish with brick, stone, stucco, or tile",
    ],
    url: "https://earthcore.com/fireplaces/",
  },
  {
    name: "Isokern Rumford — Wood Burning",
    tagline: "Tall Firebox · Angled Sides · Maximum Radiant Heat",
    description:
      "The Isokern Rumford replicates the classic Rumford fireplace design — tall, shallow firebox with angled covings — proven for over 200 years to deliver maximum radiant heat into the room. Combined with volcanic pumice construction, it's the most efficient wood-burning fireplace you can build.",
    sizes: ["36\"", "40\"", "48\""],
    features: [
      "Classic Rumford proportions — tall, shallow firebox",
      "Angled covings direct maximum radiant heat into the room",
      "Volcanic pumice for superior insulation",
      "UL-listed system",
      "Ideal for living rooms and great rooms",
    ],
    url: "https://earthcore.com/fireplaces/",
  },
  {
    name: "Isokern Magnum — Wood Burning",
    tagline: "Large Format · Estate & Commercial · Bold Presence",
    description:
      "The Isokern Magnum is built for large-scale residential and commercial installations where a dramatic, oversized firebox commands the space. Same volcanic pumice construction as the Standard, scaled up for grand entryways, great halls, and commercial lobbies.",
    sizes: ["48\"", "54\"", "60\""],
    features: [
      "Oversized firebox for dramatic visual impact",
      "Volcanic pumice construction throughout",
      "UL-listed system",
      "Ideal for estate homes, hotels, and commercial spaces",
      "Custom facing options available",
    ],
    url: "https://earthcore.com/fireplaces/",
  },
];

const gasBurning = [
  {
    name: "Isokern Standard — Gas Burning",
    tagline: "Natural Gas · Liquid Propane · Sizes 36 · 42 · 46",
    description:
      "The same trusted Standard Series pumice firebox system, configured for natural gas or liquid propane. Enjoy the look and feel of a real masonry fireplace with the convenience of gas — one switch and a beautiful fire, with no wood hauling or ash cleanup.",
    sizes: ["36\"", "42\"", "46\""],
    features: [
      "Natural gas or liquid propane fuel",
      "Volcanic pumice construction for superior heat retention",
      "Modular installation — faster than traditional masonry",
      "UL-listed system",
      "Indoor or outdoor installation",
      "Finish with any veneer: brick, stone, stucco, or tile",
    ],
    url: "https://earthcore.com/fireplaces/",
  },
  {
    name: "Isokern Magnum — Gas Burning",
    tagline: "Large Format · Gas · Estate & Commercial",
    description:
      "The Magnum's large-format firebox in a gas-burning configuration. Ideal for grand spaces where you want the mass and presence of real masonry with the reliability and convenience of gas.",
    sizes: ["48\"", "54\"", "60\""],
    features: [
      "Natural gas or liquid propane fuel",
      "Oversized firebox for dramatic visual impact",
      "Volcanic pumice construction throughout",
      "UL-listed system",
      "Ideal for estate homes, hotels, and commercial spaces",
    ],
    url: "https://earthcore.com/fireplaces/",
  },
  {
    name: "Isokern EPSeries — Linear Gas",
    tagline: "Linear · Modern · Gas Burning",
    description:
      "The EPSeries brings Isokern's proven pumice system into a contemporary linear format. A sleek, wide-format gas fireplace with a modern black insert — perfect for transitional and contemporary homes that want real masonry behind a clean, linear flame.",
    sizes: ["Linear formats available"],
    features: [
      "Linear gas fireplace format",
      "Natural gas or liquid propane",
      "Volcanic pumice surround construction",
      "Modern black glass-front insert",
      "UL-listed system",
    ],
    url: "https://earthcore.com/fireplaces/",
  },
];

const whyIsokern = [
  {
    title: "Volcanic Pumice",
    body: "Isokern is made from Icelandic volcanic pumice — naturally lightweight, extremely strong, and a superior thermal insulator compared to concrete block or common brick.",
  },
  {
    title: "Modular System",
    body: "Each Isokern system is pre-engineered and modular, so installation is faster and more consistent than traditional stick-built masonry — without sacrificing any quality.",
  },
  {
    title: "UL Listed",
    body: "Every Isokern system is UL-listed and meets all building codes. Your inspector will have no surprises.",
  },
  {
    title: "Proven for 50+ Years",
    body: "Isokern has been manufactured in Europe since the 1950s and installed in homes worldwide. Proven, warrantied, and built to last a lifetime.",
  },
];

function ProductCard({ p }: { p: typeof woodBurning[0] }) {
  return (
    <div className="border border-stone-200 rounded-sm overflow-hidden hover:border-[color:var(--accent)] hover:shadow-sm transition-all flex flex-col">
      <div className="h-52 bg-stone-100 flex items-center justify-center">
        <svg className="w-16 h-16 text-[color:var(--ink)]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[color:var(--accent)] text-xs uppercase tracking-[0.28em] mb-1">{p.tagline}</p>
        <h3 className="text-xl font-medium text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
          {p.name}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed mb-4">{p.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {p.sizes.map((s) => (
            <span key={s} className="bg-stone-100 text-stone-600 text-xs px-3 py-1 rounded-sm border border-stone-200">
              {s}
            </span>
          ))}
        </div>

        <ul className="space-y-1.5 mb-5">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-stone-500">
              <span className="w-4 h-4 rounded-sm bg-[#EFE7DA] flex-shrink-0 flex items-center justify-center mt-0.5">
                <svg className="w-2.5 h-2.5 text-[color:var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-3">
          <Link href="/estimate" className="bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white text-sm px-5 py-2.5 rounded font-medium transition-colors">
            Request Project Estimate
          </Link>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[color:var(--accent)] hover:underline text-sm font-medium">
            View details →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function IsokernPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[color:var(--ink)]/55 mb-4">
            <Link href="/fireplaces" className="hover:text-[color:var(--accent)] transition-colors">Fireplaces</Link>
            <span className="mx-2">›</span>
            <span className="text-[color:var(--ink)]/80">Isokern</span>
          </nav>
          <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-sm font-medium mb-3">
            Volcanic Pumice · Modular Masonry · All Fuel
          </p>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.04] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Isokern Fireplaces
          </h1>
          <p className="text-[color:var(--ink)]/60 max-w-2xl leading-relaxed">
            Isokern is the world&apos;s leading modular masonry fireplace system — built from Icelandic volcanic pumice for superior strength, insulation, and longevity. Available in wood burning and gas burning configurations. If you want a real masonry fireplace that installs faster and performs better, Isokern is the answer.
          </p>
        </div>
      </section>

      {/* Why Isokern */}
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyIsokern.map((item) => (
              <div key={item.title}>
                <p className="font-medium text-stone-900 mb-2 text-sm uppercase tracking-wide">{item.title}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Burning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs font-medium mb-2">Fuel Type</p>
        <h2 className="text-3xl font-medium text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
          Wood Burning Fireplaces
        </h2>
        <p className="text-stone-500 mt-2 max-w-2xl text-sm leading-relaxed">
          The original Isokern experience — real wood, real fire, real masonry. Available in three series to match any firebox size and room scale.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {woodBurning.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <hr className="border-stone-100" />
      </div>

      {/* Gas Burning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs font-medium mb-2">Fuel Type</p>
        <h2 className="text-3xl font-medium text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
          Gas Burning Fireplaces
        </h2>
        <p className="text-stone-500 mt-2 max-w-2xl text-sm leading-relaxed">
          All the beauty of real masonry with the convenience of gas. Natural gas or liquid propane, in Standard, Magnum, and modern linear EPSeries configurations.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {gasBurning.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-stone-50 border-t border-stone-100 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-medium text-stone-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Building New or Replacing an Old Firebox?
          </h2>
          <p className="text-stone-500 leading-relaxed mb-8 max-w-xl mx-auto">
            Our team can walk you through which Isokern system fits your space, budget, and fuel preference. We handle everything from permits to the finished facing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/estimate" className="inline-block bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white px-8 py-3.5 rounded font-medium transition-colors">
              Request a Project Estimate
            </Link>
            <Link href="/booking" className="inline-block border border-[color:var(--accent)] text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white px-8 py-3.5 rounded font-medium transition-colors">
              Book a Showroom Visit
            </Link>
          </div>
        </div>
      </section>

      <PricingCTA />
      <ConsultationCTA />
    </>
  );
}
