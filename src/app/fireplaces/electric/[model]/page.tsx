import { notFound } from "next/navigation";
import Link from "next/link";
import { electricFireplaces, getElectricFireplace } from "@/lib/electric-fireplaces-data";
import ConsultationCTA from "@/components/ConsultationCTA";
import ProductGallery from "@/components/ProductGallery";

export function generateStaticParams() {
  return electricFireplaces.map((e) => ({ model: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const ef = getElectricFireplace(model);
  if (!ef) return {};
  return {
    title: `${ef.name} | California Mantel`,
    description: ef.description,
  };
}

export default async function ElectricFireplaceModelPage({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const ef = getElectricFireplace(model);
  if (!ef) notFound();

  const otherModels = electricFireplaces.filter((e) => e.slug !== ef.slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/fireplaces" className="hover:text-amber-400 transition-colors">Fireplaces</Link>
            <span className="mx-2">›</span>
            <Link href="/fireplaces/electric" className="hover:text-amber-400 transition-colors">Electric Fireplaces</Link>
            <span className="mx-2">›</span>
            <span className="text-stone-200">{ef.name.replace("Modern Flames ", "")}</span>
          </nav>
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Modern Flames
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {ef.name.replace("Modern Flames ", "")}
          </h1>
          <p className="text-amber-300 text-lg mb-4">{ef.tagline}</p>
          <p className="text-stone-300 max-w-2xl leading-relaxed">{ef.description}</p>
        </div>
      </section>

      {/* Gallery + features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ProductGallery
            images={ef.gallery ?? [ef.image]}
            alt={ef.name}
          />

          <div>
            <h2
              className="text-2xl font-bold text-stone-900 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Key Features
            </h2>
            <ul className="space-y-4 mb-8">
              {ef.features.map((f) => (
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
                href="/booking"
                className="inline-block border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white text-sm font-semibold tracking-wide uppercase px-8 py-3.5 rounded-full transition-colors text-center"
              >
                See It in Our Showroom
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Available sizes */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-stone-900 mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Available Sizes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ef.variants.map((v) => (
              <div key={v.name} className="bg-white border border-stone-200 rounded-xl p-5">
                <h3 className="text-lg font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {v.width}
                </h3>
                <dl className="space-y-2">
                  <div className="flex justify-between text-sm border-b border-stone-100 pb-2">
                    <dt className="text-stone-400 font-medium">Width</dt>
                    <dd className="text-stone-800 font-semibold">{v.width}</dd>
                  </div>
                  {v.btu && (
                    <div className="flex justify-between text-sm border-b border-stone-100 pb-2">
                      <dt className="text-stone-400 font-medium">Heat Output</dt>
                      <dd className="text-stone-800 font-semibold">{v.btu} BTU</dd>
                    </div>
                  )}
                  {v.price && (
                    <div className="flex justify-between text-sm">
                      <dt className="text-stone-400 font-medium">Price</dt>
                      <dd className="text-stone-800 font-semibold">{v.price}</dd>
                    </div>
                  )}
                </dl>
                <Link
                  href="/estimate"
                  className="mt-4 block text-center border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
                >
                  Get Estimate
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-stone-400 text-center">
            Starting at <strong className="text-stone-600">{ef.startingPrice}</strong>.{" "}
            <Link href="/estimate" className="text-amber-700 hover:underline">Request a full project estimate →</Link>
          </p>
        </div>
      </section>

      {/* Flame & install options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-2xl font-bold text-stone-900 mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Customization Options
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ef.flameStyles && (
            <div className="border border-stone-200 rounded-xl p-5">
              <h3 className="text-sm font-bold text-stone-800 uppercase tracking-wider mb-3">Flame Styles</h3>
              <ul className="space-y-1.5">
                {ef.flameStyles.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />{s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {ef.flameColors && (
            <div className="border border-stone-200 rounded-xl p-5">
              <h3 className="text-sm font-bold text-stone-800 uppercase tracking-wider mb-3">Flame Colors</h3>
              <ul className="space-y-1.5">
                {ef.flameColors.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />{c}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {ef.installOptions && (
            <div className="border border-stone-200 rounded-xl p-5">
              <h3 className="text-sm font-bold text-stone-800 uppercase tracking-wider mb-3">Installation</h3>
              <ul className="space-y-1.5">
                {ef.installOptions.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />{o}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Browse other models */}
      <section className="bg-stone-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-stone-900 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Browse Other Electric Fireplaces
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherModels.map((e) => (
              <Link
                key={e.slug}
                href={`/fireplaces/electric/${e.slug}`}
                className="border border-stone-300 rounded-full px-5 py-2 text-sm text-stone-600 hover:border-amber-700 hover:text-amber-700 transition-colors"
              >
                {e.name.replace("Modern Flames ", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
