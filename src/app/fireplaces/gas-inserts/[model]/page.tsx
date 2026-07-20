import { notFound } from "next/navigation";
import Link from "next/link";
import { gasInserts, getGasInsert } from "@/lib/gas-inserts-data";
import ConsultationCTA from "@/components/ConsultationCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import ProductGallery from "@/components/ProductGallery";
import PopularOptionsScroll from "@/components/PopularOptionsScroll";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/business-data";

import EditorialPageHero from "@/components/EditorialPageHero";
export function generateStaticParams() {
  return gasInserts.map((g) => ({ model: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const insert = getGasInsert(model);
  if (!insert) return {};
  return {
    title: `${insert.name} | California Mantel`,
    description: insert.description,
    alternates: { canonical: `/fireplaces/gas-inserts/${insert.slug}` },
  };
}

export default async function GasInsertModelPage({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const insert = getGasInsert(model);
  if (!insert) notFound();

  const otherModels = gasInserts.filter((g) => g.slug !== insert.slug);

  const pageUrl = `${SITE_URL}/fireplaces/gas-inserts/${insert.slug}`;
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: insert.name,
        description: insert.description,
        primaryImageOfPage: insert.image.startsWith("http") ? insert.image : `${SITE_URL}${insert.image}`,
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Fireplaces", item: `${SITE_URL}/fireplaces` },
          { "@type": "ListItem", position: 3, name: "Gas Inserts", item: `${SITE_URL}/fireplaces/gas-inserts` },
          { "@type": "ListItem", position: 4, name: insert.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={pageSchema} />
      <EditorialPageHero
        eyebrow={insert.brand}
        title={insert.name}
        description={insert.description}
      />

      {/* Product image + key features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Gallery */}
          <ProductGallery
            images={insert.gallery ?? [insert.image]}
            alt={insert.name}
          />

          {/* Features */}
          <div>
            <h2
              className="text-2xl font-medium text-stone-900 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Key Features
            </h2>
            <ul className="space-y-4 mb-8">
              {insert.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-sm bg-[#EFE7DA] flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-[color:var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-stone-600 text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/estimate?product=${encodeURIComponent(insert.name)}`}
                className="inline-block bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white text-sm tracking-[0.16em] uppercase px-8 py-3.5 rounded-sm transition-colors text-center"
              >
                Request a Project Estimate
              </Link>
              <Link
                href="/instant-estimate"
                className="inline-block border border-[color:var(--accent)] text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white text-sm tracking-[0.16em] uppercase px-8 py-3.5 rounded-sm transition-colors text-center"
              >
                Instant Pricing Guide
              </Link>
            </div>

            {insert.brandConfigUrl && (
              <a
                href={insert.brandConfigUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-sm text-stone-500 hover:text-[color:var(--accent)] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Design your insert on the Mendota website →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Available sizes / variants */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-medium text-stone-900 mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Available Models &amp; Sizes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insert.variants.map((v) => (
              <div key={v.name} className="bg-white border border-stone-200 rounded-sm p-6">
                <h3
                  className="text-lg font-medium text-stone-900 mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {v.name}
                </h3>
                <dl className="space-y-3">
                  <div className="flex justify-between text-sm border-b border-stone-100 pb-2">
                    <dt className="text-stone-400 font-medium">Viewing Width</dt>
                    <dd className="text-stone-800 font-medium">{v.viewingWidth}</dd>
                  </div>
                  <div className="flex justify-between text-sm border-b border-stone-100 pb-2">
                    <dt className="text-stone-400 font-medium">Heat Output</dt>
                    <dd className="text-stone-800 font-medium">{v.btu} BTU</dd>
                  </div>
                  {v.efficiency && (
                    <div className="flex justify-between text-sm border-b border-stone-100 pb-2">
                      <dt className="text-stone-400 font-medium">Efficiency</dt>
                      <dd className="text-stone-800 font-medium">{v.efficiency}</dd>
                    </div>
                  )}
                  {v.fireboxOpening && (
                    <div className="flex justify-between text-sm">
                      <dt className="text-stone-400 font-medium">Min. Firebox Opening</dt>
                      <dd className="text-stone-800 font-medium text-right">{v.fireboxOpening}</dd>
                    </div>
                  )}
                </dl>
                <Link
                  href={`/estimate?product=${encodeURIComponent(insert.name + " — " + v.name)}`}
                  className="mt-5 block text-center border border-[color:var(--accent)] text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
                >
                  Request Project Estimate for {v.name}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-stone-400 text-center">
            Starting at <strong className="text-stone-600">{insert.startingPrice}</strong> (product only).
            Installation, surround, and liner quoted separately.{" "}
            <Link href={`/estimate?product=${encodeURIComponent(insert.name)}`} className="text-[color:var(--accent)] hover:underline">Request a full project estimate →</Link>
          </p>
        </div>
      </section>

      {/* Options / customization */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-2xl font-medium text-stone-900 mb-2"
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
            <div key={group.label} className="border border-stone-200 rounded-sm p-5">
              <h3 className="text-sm font-medium text-stone-800 uppercase tracking-wider mb-3">
                {group.label}
              </h3>
              <ul className="space-y-1.5">
                {group.choices.map((choice) => (
                  <li key={choice} className="flex items-center gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-sm bg-amber-600 flex-shrink-0" />
                    {choice}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-stone-400">
          Not sure which options are right for you?{" "}
          <Link href="/booking" className="text-[color:var(--accent)] hover:underline">Book a showroom consultation</Link>{" "}
          and we&apos;ll walk you through every choice in person.
        </p>
      </section>

      {/* Popular options showcase */}
      {(insert.optionsShowcase || (insert.popularOptions && insert.popularOptions.length > 0)) && (
        <section className="bg-[#F9F7F3] border-y border-[color:var(--sand-deep)] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2
                  className="text-2xl font-medium text-stone-900 mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Popular Configurations
                </h2>
                <p className="text-stone-500 text-sm">
                  A few of our customers&apos; favorite front, finish, and media combinations.
                </p>
              </div>
              {insert.brandConfigUrl && (
                <a
                  href={insert.brandConfigUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)] hover:underline flex-shrink-0"
                >
                  Build your own →
                </a>
              )}
            </div>

            {insert.optionsShowcase ? (
              <a
                href={insert.brandConfigUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-sm overflow-hidden border border-stone-200 shadow-sm hover:shadow-sm transition-shadow"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={insert.optionsShowcase}
                  alt={`${insert.name} popular configuration options`}
                  className="w-full object-cover"
                />
              </a>
            ) : insert.popularOptions && (
              <PopularOptionsScroll
                options={insert.popularOptions}
                brandConfigUrl={insert.brandConfigUrl}
                fallbackImage={insert.image}
              />
            )}

            {insert.brandConfigUrl && insert.optionsShowcase && (
              <div className="mt-6 text-center">
                <a
                  href={insert.brandConfigUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white text-sm font-medium px-7 py-3 rounded-sm transition-colors"
                >
                  Design Your Own on Mendota&apos;s Website
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Other models */}
      <section className="bg-stone-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-medium text-stone-900 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Browse Other Gas Inserts
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherModels.map((g) => (
              <Link
                key={g.slug}
                href={`/fireplaces/gas-inserts/${g.slug}`}
                className="border border-stone-300 rounded-sm px-5 py-2 text-sm text-stone-600 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
              >
                {g.brand} {g.name.replace(" Gas Fireplace Insert", "").replace(" Gas Insert", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InstantEstimateCTA />
      <ConsultationCTA />
    </>
  );
}
