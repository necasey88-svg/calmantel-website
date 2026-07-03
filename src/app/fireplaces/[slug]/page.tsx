import { notFound } from "next/navigation";
import Link from "next/link";
import { getFireplaceCategory, fireplaceCategories } from "@/lib/fireplaces-data";
import PricingCTA from "@/components/PricingCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";

export function generateStaticParams() {
  return fireplaceCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getFireplaceCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} | California Mantel`,
    description: category.description,
  };
}

const typeSlugss = ["gas-inserts", "electric", "outdoor", "masonry", "overstock"];

export default async function FireplaceSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getFireplaceCategory(slug);
  if (!category) notFound();

  const isType = typeSlugss.includes(slug);

  const relatedCategories = fireplaceCategories.filter(
    (c) => c.slug !== slug && typeSlugss.includes(c.slug) === isType
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/fireplaces" className="hover:text-amber-400 transition-colors">
              Fireplaces
            </Link>
            <span className="mx-2">›</span>
            <span className="text-stone-200">{category.title}</span>
          </nav>
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            {category.tagline}
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {category.title}
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">{category.description}</p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {category.products.map((product, i) => (
            <div
              key={i}
              className="border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Placeholder image */}
              <div className="h-52 bg-stone-100 flex items-center justify-center text-6xl">
                🔥
              </div>
              <div className="p-7">
                <h2
                  className="text-xl font-bold text-stone-900 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {product.name}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {product.specs && (
                  <ul className="mb-4 space-y-1">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs text-stone-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-700 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                )}

                {product.note && (
                  <p className="text-xs text-amber-700 italic mb-4">{product.note}</p>
                )}

                <Link
                  href="/estimate"
                  className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-sm px-5 py-2.5 rounded font-semibold transition-colors"
                >
                  Request Estimate
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      {relatedCategories.length > 0 && (
        <section className="bg-stone-50 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-xl font-bold text-stone-900 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {isType ? "Browse Other Fireplace Types" : "Browse Other Brands"}
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/fireplaces/${c.slug}`}
                  className="border border-stone-300 rounded-full px-5 py-2 text-sm text-stone-600 hover:border-amber-700 hover:text-amber-700 transition-colors"
                >
                  {c.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <InstantEstimateCTA />
      <PricingCTA />
    </>
  );
}
