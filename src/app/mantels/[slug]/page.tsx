import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getMantelCategory, mantelCategories } from "@/lib/mantels-data";
import { mantelProducts, typeLabel, styleLabel } from "@/lib/mantel-products-data";
import PricingCTA from "@/components/PricingCTA";
import ConsultationCTA from "@/components/ConsultationCTA";
import MantelSearch from "@/components/MantelSearch";

// Traditional sub-style facets — shown as a cross-link nav on the traditional pages.
const traditionalFacets = [
  { slug: "traditional", label: "All Traditional" },
  { slug: "traditional-classical", label: "Classical" },
  { slug: "traditional-french", label: "French" },
  { slug: "traditional-ornate", label: "Ornate" },
];

// The eight wood beam mantels that live under the Beams navigation.
const beamSlugs = [
  "payneham",
  "yalumba",
  "norwood",
  "noarlunga",
  "hollywood-park",
  "hackney",
  "essendon",
  "collingwood",
];

// Which mantel-products-data products belong on each category page
function getProductsForCategory(slug: string) {
  switch (slug) {
    case "contemporary":
      return mantelProducts.filter((p) => p.style === "contemporary" && p.type !== "overmantel");
    case "traditional":
      return mantelProducts.filter((p) => p.style === "traditional" && p.type !== "overmantel" && p.type !== "wood" && p.type !== "beam");
    case "traditional-classical":
      return mantelProducts.filter((p) => p.style === "traditional" && p.type === "precast" && p.subStyle === "classical");
    case "traditional-french":
      return mantelProducts.filter((p) => p.style === "traditional" && p.type === "precast" && p.subStyle === "french");
    case "traditional-ornate":
      return mantelProducts.filter((p) => p.style === "traditional" && p.type === "precast" && p.subStyle === "ornate");
    case "overmantels":
      return mantelProducts.filter((p) => p.type === "overmantel");
    case "wood-surrounds":
      return mantelProducts.filter((p) => p.type === "wood" || (p.type === "beam" && !beamSlugs.includes(p.slug)) || p.slug === "hobart-1" || p.slug === "kendall-1");
    case "beams":
      return beamSlugs
        .map((s) => mantelProducts.find((p) => p.slug === s))
        .filter((p): p is (typeof mantelProducts)[number] => Boolean(p));
    default:
      return [];
  }
}

export function generateStaticParams() {
  return mantelCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getMantelCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} | California Mantel`,
    description: category.description,
  };
}

export default async function MantelSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getMantelCategory(slug);
  if (!category) notFound();

  const linkedProducts = getProductsForCategory(slug);
  // For categories without individual product pages, fall back to the category-level product list
  const useLinkedProducts = linkedProducts.length > 0;

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/mantels" className="hover:text-amber-400 transition-colors">
              Mantels
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

      {/* Search all mantels */}
      <MantelSearch />

      {/* Traditional sub-style facets */}
      {traditionalFacets.some((f) => f.slug === slug) && (
        <section className="border-b border-stone-200 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-2">
            {traditionalFacets.map((f) => (
              <Link
                key={f.slug}
                href={`/mantels/${f.slug}`}
                aria-current={f.slug === slug ? "page" : undefined}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  f.slug === slug
                    ? "bg-amber-700 text-white border-amber-700"
                    : "bg-white text-stone-600 border-stone-200 hover:border-amber-700 hover:text-amber-700"
                }`}
              >
                {f.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {useLinkedProducts ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkedProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/mantels/p/${product.slug}`}
                className="group border border-stone-200 rounded-xl overflow-hidden hover:border-amber-700 hover:shadow-md transition-all"
              >
                <div className="relative h-72 bg-stone-100 overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-6xl">🪨</div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded">
                      {typeLabel[product.type]}
                    </span>
                    <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded">
                      {styleLabel[product.style]}
                    </span>
                  </div>
                  <h2
                    className="text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {product.name}
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <p className="text-amber-700 text-sm font-semibold mt-4 group-hover:underline">
                    View details →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.products.map((product, i) => (
              <div
                key={i}
                className="border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-52 bg-stone-100 flex items-center justify-center text-6xl">🪨</div>
                <div className="p-7">
                  <h2
                    className="text-xl font-bold text-stone-900 mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {product.name}
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">{product.description}</p>

                  {product.finishes && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                        Available Finishes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.finishes.map((f) => (
                          <span
                            key={f}
                            className="bg-amber-50 text-amber-800 text-xs px-3 py-1 rounded-full border border-amber-200"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.sizes && (
                    <p className="text-xs text-stone-400 mb-3">
                      <span className="font-semibold">Sizes:</span> {product.sizes}
                    </p>
                  )}

                  {product.note && (
                    <p className="text-xs text-amber-700 italic">{product.note}</p>
                  )}

                  <div className="mt-5">
                    <Link
                      href="/estimate"
                      className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-sm px-5 py-2.5 rounded font-semibold transition-colors"
                    >
                      Request Estimate
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Related categories */}
      <section className="bg-stone-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-stone-900 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Browse Other Mantel Styles
          </h2>
          <div className="flex flex-wrap gap-3">
            {mantelCategories
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/mantels/${c.slug}`}
                  className="border border-stone-300 rounded-full px-5 py-2 text-sm text-stone-600 hover:border-amber-700 hover:text-amber-700 transition-colors"
                >
                  {c.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
      <PricingCTA />
    </>
  );
}
