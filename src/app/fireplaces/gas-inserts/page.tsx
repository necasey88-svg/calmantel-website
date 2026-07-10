import Link from "next/link";
import { gasInserts } from "@/lib/gas-inserts-data";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import PricingCTA from "@/components/PricingCTA";

export const metadata = {
  title: "Gas Fireplace Inserts | California Mantel & Fireplace",
  description:
    "Convert your wood-burning fireplace to efficient gas with a Heat & Glo, Mendota, or Napoleon gas insert. We sell and install across California and Nevada.",
  alternates: { canonical: "/fireplaces/gas-inserts" },
};

export default function GasInsertsPage() {
  return (
    <>
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[color:var(--ink)]/55 mb-4">
            <Link href="/fireplaces" className="hover:text-[color:var(--accent)] transition-colors">
              Fireplaces
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[color:var(--ink)]/80">Gas Inserts</span>
          </nav>
          <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-sm font-medium mb-3">
            Efficient · Clean · Beautiful
          </p>
          <h1
            className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.04] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Gas Fireplace Inserts
          </h1>
          <p className="text-[color:var(--ink)]/60 max-w-2xl leading-relaxed">
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
                <div className="w-9 h-9 rounded-sm bg-[color:var(--accent)] text-white text-sm font-medium flex items-center justify-center">
                  {item.step}
                </div>
                <p className="font-medium text-stone-800 text-sm">{item.title}</p>
                <p className="text-stone-500 text-xs leading-relaxed max-w-xs">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education video */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className="text-xl font-medium text-stone-900 mb-2 text-center"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          How Gas Inserts Work
        </h2>
        <p className="text-stone-500 text-sm text-center mb-6">
          A quick overview of what a gas insert is and how it converts your wood-burning fireplace.
        </p>
        <div className="rounded-sm overflow-hidden shadow-lg bg-stone-900">
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
          className="text-2xl font-medium text-stone-900 mb-10"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Choose Your Insert
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {gasInserts.map((insert) => (
            <Link
              key={insert.slug}
              href={`/fireplaces/gas-inserts/${insert.slug}`}
              className="group border border-stone-200 rounded-sm overflow-hidden hover:border-[color:var(--accent)] hover:shadow-lg transition-all"
            >
              {/* Product image */}
              <div className="relative h-52 bg-stone-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={insert.image}
                  alt={insert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-white/90 text-stone-700 text-xs font-medium px-2.5 py-1 rounded-sm border border-stone-200">
                  {insert.brand}
                </span>
              </div>

              <div className="p-6">
                <h3
                  className="text-lg font-medium text-stone-900 mb-1 group-hover:text-[color:var(--accent)] transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {insert.name}
                </h3>
                <p className="text-xs text-[color:var(--accent)] font-medium mb-3">{insert.tagline}</p>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {insert.description}
                </p>

                {/* Size chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {insert.variants.map((v) => (
                    <span
                      key={v.name}
                      className="bg-stone-100 text-stone-600 text-xs px-2.5 py-1 rounded-sm"
                    >
                      {v.viewingWidth}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[color:var(--ink)]/55">
                    Starting at <span className="text-stone-700 font-medium">{insert.startingPrice}</span>
                  </span>
                  <span className="text-[color:var(--accent)] text-sm font-medium group-hover:underline">
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
                className="text-2xl md:text-3xl font-medium text-stone-900 mb-4"
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
                className="flex items-center gap-4 bg-white border border-stone-200 rounded-sm p-5 hover:border-[color:var(--accent)] hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-[#EFE7DA] rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[color:var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-stone-900 group-hover:text-[color:var(--accent)] transition-colors">Book a Showroom Consultation</p>
                  <p className="text-sm text-stone-500">See inserts in person at our Anaheim, Dublin, or Sacramento showroom</p>
                </div>
              </Link>
              <Link
                href="/estimate"
                className="flex items-center gap-4 bg-white border border-stone-200 rounded-sm p-5 hover:border-[color:var(--accent)] hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-[#EFE7DA] rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[color:var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-stone-900 group-hover:text-[color:var(--accent)] transition-colors">Request a Project Estimate</p>
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
