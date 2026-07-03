import Link from "next/link";
import { gasInserts } from "@/lib/gas-inserts-data";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import PricingCTA from "@/components/PricingCTA";

export const metadata = {
  title: "Gas Fireplace Inserts | California Mantel & Fireplace",
  description:
    "Convert your wood-burning fireplace to efficient gas with a Heat & Glo, Mendota, or Napoleon gas insert. We sell and install across California and Nevada.",
};

export default function GasInsertsPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/fireplaces" className="hover:text-amber-400 transition-colors">
              Fireplaces
            </Link>
            <span className="mx-2">›</span>
            <span className="text-stone-200">Gas Inserts</span>
          </nav>
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Efficient · Clean · Beautiful
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Gas Fireplace Inserts
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            Gas inserts fit directly into your existing wood-burning firebox, converting it
            into a high-efficiency, low-maintenance heating source. No more hauling wood,
            cleaning ash, or fighting drafts — just one button and a beautiful fire.
          </p>
        </div>
      </section>

      {/* How it works strip */}
      <section className="bg-amber-50 border-b border-amber-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { step: "1", title: "Fits Your Existing Firebox", body: "No major construction — inserts slide into your current masonry or zero-clearance firebox." },
              { step: "2", title: "Vents Through Your Chimney", body: "A stainless liner runs up your existing flue. Direct vent keeps combustion air sealed." },
              { step: "3", title: "One Button. Instant Fire.", body: "IntelliFire® ignition means reliable starts every time — from a remote, wall switch, or app." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-amber-700 text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <p className="font-semibold text-stone-800 text-sm">{item.title}</p>
                <p className="text-stone-500 text-xs leading-relaxed max-w-xs">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education video */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className="text-xl font-bold text-stone-900 mb-2 text-center"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          How Gas Inserts Work
        </h2>
        <p className="text-stone-500 text-sm text-center mb-6">
          A quick overview of what a gas insert is and how it converts your wood-burning fireplace.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg bg-stone-900">
          <video
            controls
            preload="metadata"
            poster=""
            className="w-full"
          >
            <source src="/videos/hng-inserts-education.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Model grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-2xl font-bold text-stone-900 mb-10"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Choose Your Insert
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {gasInserts.map((insert) => (
            <Link
              key={insert.slug}
              href={`/fireplaces/gas-inserts/${insert.slug}`}
              className="group border border-stone-200 rounded-2xl overflow-hidden hover:border-amber-700 hover:shadow-lg transition-all"
            >
              {/* Product image */}
              <div className="relative h-52 bg-stone-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={insert.image}
                  alt={insert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-white/90 text-stone-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-stone-200">
                  {insert.brand}
                </span>
              </div>

              <div className="p-6">
                <h3
                  className="text-lg font-bold text-stone-900 mb-1 group-hover:text-amber-700 transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {insert.name}
                </h3>
                <p className="text-xs text-amber-700 font-semibold mb-3">{insert.tagline}</p>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {insert.description}
                </p>

                {/* Size chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {insert.variants.map((v) => (
                    <span
                      key={v.name}
                      className="bg-stone-100 text-stone-600 text-xs px-2.5 py-1 rounded-full"
                    >
                      {v.viewingWidth}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400">
                    Starting at <span className="text-stone-700 font-semibold">{insert.startingPrice}</span>
                  </span>
                  <span className="text-amber-700 text-sm font-semibold group-hover:underline">
                    View details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why gas insert CTA */}
      <section className="bg-stone-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-stone-900 mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Not Sure Which Size Fits Your Fireplace?
              </h2>
              <p className="text-stone-500 leading-relaxed mb-4">
                Every wood-burning fireplace is different. Our team measures your existing firebox
                opening and recommends the right insert size and model during your free in-home
                or showroom consultation.
              </p>
              <p className="text-stone-500 leading-relaxed">
                We sell and install gas inserts throughout California and Nevada, including
                Reno and Lake Tahoe.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/booking"
                className="flex items-center gap-4 bg-white border border-stone-200 rounded-xl p-5 hover:border-amber-700 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">Book a Showroom Consultation</p>
                  <p className="text-sm text-stone-500">See inserts in person at our Anaheim, Dublin, or Sacramento showroom</p>
                </div>
              </Link>
              <Link
                href="/estimate"
                className="flex items-center gap-4 bg-white border border-stone-200 rounded-xl p-5 hover:border-amber-700 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">Request a Free Estimate</p>
                  <p className="text-sm text-stone-500">Tell us about your fireplace and we&apos;ll get back to you within 1–2 business days</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InstantEstimateCTA />
      <PricingCTA />
    </>
  );
}
