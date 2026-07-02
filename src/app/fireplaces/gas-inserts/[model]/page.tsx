import { notFound } from "next/navigation";
import Link from "next/link";
import { gasInserts, getGasInsert } from "@/lib/gas-inserts-data";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import ConsultationCTA from "@/components/ConsultationCTA";

export function generateStaticParams() {
  return gasInserts.map((g) => ({ model: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const insert = getGasInsert(model);
  if (!insert) return {};
  return {
    title: `${insert.name} | California Mantel & Fireplace`,
    description: insert.description,
  };
}

export default async function GasInsertModelPage({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const insert = getGasInsert(model);
  if (!insert) notFound();

  const otherModels = gasInserts.filter((g) => g.slug !== insert.slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/fireplaces" className="hover:text-amber-400 transition-colors">Fireplaces</Link>
            <span className="mx-2">›</span>
            <Link href="/fireplaces/gas-inserts" className="hover:text-amber-400 transition-colors">Gas Inserts</Link>
            <span className="mx-2">›</span>
            <span className="text-stone-200">{insert.name}</span>
          </nav>
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            {insert.brand}
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {insert.name}
          </h1>
          <p className="text-amber-300 text-lg mb-4">{insert.tagline}</p>
          <p className="text-stone-300 max-w-2xl leading-relaxed">{insert.description}</p>
        </div>
      </section>

      {/* Product image + key features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden bg-stone-100 aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={insert.image}
              alt={insert.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Features */}
          <div>
            <h2
              className="text-2xl font-bold text-stone-900 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Key Features
            </h2>
            <ul className="space-y-4 mb-8">
              {insert.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-stone-600 text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/estimate"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold tracking-wide uppercase px-8 py-3.5 rounded-full transition-colors text-center"
              >
                Request a Free Estimate
              </Link>
              <Link
                href="/instant-estimate"
                className="inline-block border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white text-sm font-semibold tracking-wide uppercase px-8 py-3.5 rounded-full transition-colors text-center"
              >
                Instant Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Available sizes / variants */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-stone-900 mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Available Models &amp; Sizes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insert.variants.map((v) => (
              <div key={v.name} className="bg-white border border-stone-200 rounded-xl p-6">
                <h3
                  className="text-lg font-bold text-stone-900 mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {v.name}
                </h3>
                <dl className="space-y-3">
                  <div className="flex justify-between text-sm border-b border-stone-100 pb-2">
                    <dt className="text-stone-400 font-medium">Viewing Width</dt>
                    <dd className="text-stone-800 font-semibold">{v.viewingWidth}</dd>
                  </div>
                  <div className="flex justify-between text-sm border-b border-stone-100 pb-2">
                    <dt className="text-stone-400 font-medium">Heat Output</dt>
                    <dd className="text-stone-800 font-semibold">{v.btu} BTU</dd>
                  </div>
                  {v.efficiency && (
                    <div className="flex justify-between text-sm border-b border-stone-100 pb-2">
                      <dt className="text-stone-400 font-medium">Efficiency</dt>
                      <dd className="text-stone-800 font-semibold">{v.efficiency}</dd>
                    </div>
                  )}
                  {v.fireboxOpening && (
                    <div className="flex justify-between text-sm">
                      <dt className="text-stone-400 font-medium">Min. Firebox Opening</dt>
                      <dd className="text-stone-800 font-semibold text-right">{v.fireboxOpening}</dd>
                    </div>
                  )}
                </dl>
                <Link
                  href="/estimate"
                  className="mt-5 block text-center border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
                >
                  Get Estimate for {v.name}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-stone-400 text-center">
            Starting at <strong className="text-stone-600">{insert.startingPrice}</strong> (product only).
            Installation, surround, and liner quoted separately.{" "}
            <Link href="/estimate" className="text-amber-700 hover:underline">Request a full project estimate →</Link>
          </p>
        </div>
      </section>

      {/* Options / customization */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-2xl font-bold text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Customize Your Insert
        </h2>
        <p className="text-stone-500 mb-8 max-w-xl">
          Every {insert.name} can be configured with a wide range of interiors, fronts, controls,
          and surround options to match your home perfectly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insert.options.map((group) => (
            <div key={group.label} className="border border-stone-200 rounded-xl p-5">
              <h3 className="text-sm font-bold text-stone-800 uppercase tracking-wider mb-3">
                {group.label}
              </h3>
              <ul className="space-y-1.5">
                {group.choices.map((choice) => (
                  <li key={choice} className="flex items-center gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    {choice}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-stone-400">
          Not sure which options are right for you?{" "}
          <Link href="/booking" className="text-amber-700 hover:underline">Book a showroom consultation</Link>{" "}
          and we&apos;ll walk you through every choice in person.
        </p>
      </section>

      {/* Other models */}
      <section className="bg-stone-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-stone-900 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Browse Other Gas Inserts
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherModels.map((g) => (
              <Link
                key={g.slug}
                href={`/fireplaces/gas-inserts/${g.slug}`}
                className="border border-stone-300 rounded-full px-5 py-2 text-sm text-stone-600 hover:border-amber-700 hover:text-amber-700 transition-colors"
              >
                {g.brand} {g.name.replace(" Gas Fireplace Insert", "").replace(" Gas Insert", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
