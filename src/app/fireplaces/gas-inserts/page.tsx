import Link from "next/link";
import Image from "next/image";
import { gasInserts } from "@/lib/gas-inserts-data";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import PricingCTA from "@/components/PricingCTA";

export const metadata = {
  title: "Gas Fireplace Inserts | California Mantel & Fireplace",
  description:
    "Convert your wood-burning fireplace to efficient gas with a Heat & Glo, Mendota, or Napoleon gas insert. We sell and install across California and Nevada.",
  alternates: { canonical: "/fireplaces/gas-inserts" },
};

const insertTransformations = [
  {
    title: "Existing masonry fireplace, renewed",
    before: "/projects/before-after/supreme-30-brick-before.jpg",
    after: "/projects/before-after/supreme-30-brick-after.jpg",
    note: "A dated wood-burning opening becomes a sealed gas insert with a finished traditional surround.",
  },
  {
    title: "Clean insert with a tailored surround",
    before: "/projects/before-after/supreme-35-woomera-before.jpg",
    after: "/projects/before-after/supreme-35-woomera-after.jpg",
    note: "The insert, face, hearth, and mantel proportions are planned together so the room reads as one composition.",
  },
];

const planningDetails = [
  "Firebox dimensions and chimney path",
  "Insert face, surround, and finish color",
  "Remote, wall switch, or app control",
  "Mantel, hearth, and stone coordination",
];

export default function GasInsertsPage() {
  return (
    <>
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <nav className="text-sm text-[color:var(--ink)]/55 mb-8">
            <Link href="/fireplaces" className="hover:text-[color:var(--accent)] transition-colors">
              Fireplaces
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[color:var(--ink)]/80">Gas Inserts</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-sm font-medium mb-3">
                Efficient / Clean / Beautiful
              </p>
              <h1
                className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.04] mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Gas Fireplace Inserts
              </h1>
              <p className="text-[color:var(--ink)]/60 max-w-2xl leading-relaxed mb-8">
                Convert an existing wood-burning fireplace into a sealed, high-efficiency
                gas fire with the face, surround, mantel, and hearth planned as a complete room feature.
              </p>
              <div className="grid grid-cols-2 gap-4 border-y border-[color:var(--sand-deep)] py-6">
                {[
                  ["Existing opening", "No full rebuild required"],
                  ["Finished focal point", "Insert and surround selected together"],
                ].map(([label, body]) => (
                  <div key={label}>
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--accent)] mb-2">
                      {label}
                    </p>
                    <p className="text-sm text-[color:var(--ink)]/60 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <Image
                  src="/projects/before-after/supreme-30-brick-before.jpg"
                  alt="Before gas insert conversion"
                  fill
                  priority
                  sizes="(min-width: 1024px) 320px, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 bg-[color:var(--ink)]/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white">
                  Before
                </span>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mt-8">
                <Image
                  src="/projects/before-after/supreme-30-brick-after.jpg"
                  alt="After gas insert conversion"
                  fill
                  priority
                  sizes="(min-width: 1024px) 320px, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 bg-[color:var(--accent)] px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white">
                  After
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F7F3] border-y border-[color:var(--sand-deep)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { step: "01", title: "Fits Your Existing Firebox", body: "Most inserts slide into your current masonry or zero-clearance firebox." },
              { step: "02", title: "Vents Through Your Chimney", body: "A stainless liner runs up your existing flue. Direct vent keeps combustion air sealed." },
              { step: "03", title: "One Button. Instant Fire.", body: "Modern ignition means reliable starts from a remote, wall switch, or app." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <p
                  className="text-4xl font-medium text-[color:var(--accent)] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.step}
                </p>
                <h3
                  className="text-lg font-medium text-[color:var(--ink)] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[color:var(--ink)]/55 leading-relaxed max-w-xs">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
            <div>
              <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs font-medium mb-3">
                Real Transformations
              </p>
              <h2
                className="text-3xl md:text-4xl font-medium tracking-tight text-[color:var(--ink)] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                The insert is only one part of the finished room.
              </h2>
              <p className="text-[color:var(--ink)]/60 leading-relaxed">
                A gas insert changes the daily use of the fireplace. The surround, hearth,
                mantel, and finish choices change how the entire wall feels.
              </p>
            </div>
            <div className="space-y-8">
              {insertTransformations.map((item) => (
                <div key={item.title} className="border border-[color:var(--sand-deep)]">
                  <div className="grid grid-cols-2">
                    {[
                      ["Before", item.before],
                      ["After", item.after],
                    ].map(([label, src]) => (
                      <div key={label} className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                        <Image
                          src={src}
                          alt={`${label} - ${item.title}`}
                          fill
                          sizes="(min-width: 1024px) 420px, 50vw"
                          className="object-cover"
                        />
                        <span
                          className={`absolute left-4 top-4 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white ${
                            label === "After" ? "bg-[color:var(--accent)]" : "bg-[color:var(--ink)]/85"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl font-medium text-[color:var(--ink)] mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-[color:var(--ink)]/60 leading-relaxed">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            poster="/projects/before-after/supreme-35-woomera-after.jpg"
            className="w-full"
          >
            <source src="/videos/hng-inserts-education.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="bg-[#F9F7F3] border-y border-[color:var(--sand-deep)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-10 items-center">
            <div className="relative aspect-[5/4] overflow-hidden bg-stone-100">
              <Image
                src="/projects/before-after/supreme-30-bolte-bianco-after.jpg"
                alt="Gas insert with a tailored mantel surround"
                fill
                sizes="(min-width: 768px) 520px, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs font-medium mb-3">
                Planned Details
              </p>
              <h2
                className="text-3xl md:text-4xl font-medium text-[color:var(--ink)] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                We help the technical parts disappear into the design.
              </h2>
              <p className="text-[color:var(--ink)]/60 leading-relaxed mb-7">
                The right insert has to fit, vent correctly, and look intentional once the trim and finish
                materials are installed.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {planningDetails.map((detail) => (
                  <div key={detail} className="border border-[color:var(--sand-deep)] bg-white px-4 py-3 text-sm text-[color:var(--ink)]/70">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="relative h-52 bg-stone-100 overflow-hidden">
                <Image
                  src={insert.image}
                  alt={insert.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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

                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-[color:var(--ink)]/55">
                    Starting at <span className="text-stone-700 font-medium">{insert.startingPrice}</span>
                  </span>
                  <span className="text-[color:var(--accent)] text-sm font-medium group-hover:underline">
                    View details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-2xl md:text-3xl font-medium text-stone-900 mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Not sure which size fits your fireplace?
              </h2>
              <p className="text-stone-500 leading-relaxed mb-4">
                Every wood-burning fireplace is different. Our team measures your existing firebox
                opening and recommends the right insert size and model during your consultation.
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
                  <p className="text-sm text-stone-500">Tell us about your fireplace and we will get back to you within one business day</p>
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
