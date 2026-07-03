import Link from "next/link";
import { electricFireplaces } from "@/lib/electric-fireplaces-data";
import ElectricBrandFilterGrid from "@/components/ElectricBrandFilterGrid";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata = {
  title: "Electric Fireplaces | California Mantel & Fireplace",
  description:
    "Modern Flames electric fireplaces — Orion Traditional, Orion Slim, Redstone, Landscape Pro, and Spectrum Slimline. No gas, no venting, stunning flame technology. We sell and install across California and Nevada.",
};

const whyElectric = [
  {
    icon: (
      <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "No Gas Line Required",
    body: "Plugs into a standard 120V or 240V outlet. Install anywhere — no permits, no gas plumber.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Any Room in the House",
    body: "Bedroom, office, condo, or commercial space — electric fireplaces go where gas can't.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Flame Without Heat",
    body: "Run the flame display year-round — with or without the heater. Perfect for warm California climates.",
  },
];

export default function ElectricFireplacesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/fireplaces" className="hover:text-amber-400 transition-colors">Fireplaces</Link>
            <span className="mx-2">›</span>
            <span className="text-stone-200">Electric Fireplaces</span>
          </nav>
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            No Venting · Flexible · Modern
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Electric Fireplaces
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            Modern Flames produces the most realistic electric fireplaces on the market — powered
            by patented Heliovision® flame technology. No gas line, no venting, no combustion.
            Just stunning fire, anywhere you want it.
          </p>
        </div>
      </section>

      {/* Why electric strip */}
      <section className="bg-amber-50 border-b border-amber-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {whyElectric.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="font-semibold text-stone-800 text-sm">{item.title}</p>
                <p className="text-stone-500 text-xs leading-relaxed max-w-xs">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ElectricBrandFilterGrid fireplaces={electricFireplaces} />
      </section>

      {/* Brand callout */}
      <section className="bg-stone-50 py-14 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-700 uppercase tracking-widest text-xs font-semibold mb-3">Authorized Dealer</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-stone-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            We Are an Authorized Modern Flames Dealer
          </h2>
          <p className="text-stone-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            California Mantel &amp; Fireplace sells and installs the full Modern Flames lineup across
            California and Nevada. Visit our showroom to see the Heliovision® flame in person —
            no photo or video does it justice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimate"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Request a Free Estimate
            </Link>
            <Link
              href="/booking"
              className="inline-block border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Visit a Showroom
            </Link>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
