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

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {category.products.map((product, i) => (
            <div
              key={i}
              className="border border-stone-200 rounded-sm overflow-hidden hover:shadow-sm transition-shadow"
            >
              {/* Placeholder image */}
              <div className="h-52 bg-stone-100 flex items-center justify-center text-6xl">
                🔥
              </div>
              <div className="p-7">
                <h2
                  className="text-xl font-medium text-stone-900 mb-2"
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
                        <span className="w-1.5 h-1.5 rounded-sm bg-[color:var(--accent)] flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                )}

                {product.note && (
                  <p className="text-xs text-[color:var(--accent)] italic mb-4">{product.note}</p>
                )}

                <Link
                  href="/estimate"
                  className="inline-block bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white text-sm px-5 py-2.5 rounded font-medium transition-colors"
                >
                  Request Project Estimate
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
              className="text-xl font-medium text-stone-900 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {isType ? "Browse Other Fireplace Types" : "Browse Other Brands"}
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/fireplaces/${c.slug}`}
                  className="border border-stone-300 rounded-sm px-5 py-2 text-sm text-stone-600 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
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
