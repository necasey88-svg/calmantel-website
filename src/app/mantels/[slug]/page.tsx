import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getMantelCategory, mantelCategories } from "@/lib/mantels-data";
import { mantelProducts, typeLabel, styleLabel } from "@/lib/mantel-products-data";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import ConsultationCTA from "@/components/ConsultationCTA";
import MantelSearch from "@/components/MantelSearch";

import EditorialPageHero from "@/components/EditorialPageHero";
// Traditional sub-style facets — shown as a cross-link nav on the traditional pages.
const traditionalFacets = [
  { slug: "traditional", label: "All Traditional" },
  { slug: "traditional-classical", label: "Classical" },
  { slug: "traditional-french", label: "French" },
  { slug: "traditional-ornate", label: "Ornate" },
];

const thoroughbredBeamSlugs = ["longacres", "santa-anita", "del-mar", "hollywood-park"];

// The beam mantels that live under the Beams navigation (precast first, then wood).
const beamSlugs = [
  // The Thoroughbred Collection
  ...thoroughbredBeamSlugs,
  // Precast beams (listed first on the page)
  "payneham",
  "yalumba",
  "noarlunga",
  "hackney",
  "darlinghurst",
  "camberwell",
  // Wood beams
  "norwood",
  "essendon",
  "collingwood",
  "architectural",
  "geelong",
  "gippsland",
];

const categoryMerchandisingOrder: Record<string, string[]> = {
  contemporary: [
    "ashford",
    "bolte",
    "sausalito",
    "sienna",
    "turin",
    "fluted-filler",
    "brighton",
    "clarendon",
    "casden",
    "yarra",
    "wayville",
    "reynella",
    "onkaparinga",
    "rockhampton",
    "mingary",
    "nullarbor",
    "broken-hill",
    "woomera",
    "urrbrae",
    "koonunga",
    "willunga",
    "boomerang",
    "whyalla",
  ],
  traditional: [
    "tonso",
    "versailles",
    "chateau",
    "st-tropez",
    "cannes",
    "cassis",
    "venice",
    "dominique",
    "castellina",
    "victorian",
    "regency",
    "classique",
    "cambridge",
    "bondi",
    "heritage",
    "lancelot",
    "ballarat",
    "kensington",
  ],
};

function sortProductsForCategory<T extends { slug: string; name: string }>(
  products: T[],
  orderKey: keyof typeof categoryMerchandisingOrder,
) {
  const order = new Map(categoryMerchandisingOrder[orderKey].map((productSlug, index) => [productSlug, index]));

  return [...products].sort((a, b) => {
    const aRank = order.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bRank = order.get(b.slug) ?? Number.MAX_SAFE_INTEGER;

    if (aRank !== bRank) return aRank - bRank;
    return a.name.localeCompare(b.name);
  });
}

// Which mantel-products-data products belong on each category page
function getProductsForCategory(slug: string) {
  switch (slug) {
    case "contemporary":
      return sortProductsForCategory(
        mantelProducts.filter((p) => p.style === "contemporary" && p.type !== "overmantel"),
        "contemporary",
      );
    case "traditional":
      return sortProductsForCategory(
        mantelProducts.filter((p) => p.style === "traditional" && p.type !== "overmantel" && p.type !== "wood" && p.type !== "beam"),
        "traditional",
      );
    case "traditional-classical":
      return sortProductsForCategory(
        mantelProducts.filter((p) => p.style === "traditional" && p.type === "precast" && p.subStyle === "classical"),
        "traditional",
      );
    case "traditional-french":
      return sortProductsForCategory(
        mantelProducts.filter((p) => p.style === "traditional" && p.type === "precast" && p.subStyle === "french"),
        "traditional",
      );
    case "traditional-ornate":
      return sortProductsForCategory(
        mantelProducts.filter((p) => p.style === "traditional" && p.type === "precast" && p.subStyle === "ornate"),
        "traditional",
      );
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

// Chip text for the product-type badge. Beams get their material spelled out —
// several precast beams look like wood, so "Fireplace Beam" alone is ambiguous.
function productTypeChip(product: (typeof mantelProducts)[number]) {
  if (product.type === "beam" && product.beamMaterial) {
    return product.beamMaterial === "precast" ? "Precast Beam" : "Wood Beam";
  }
  return typeLabel[product.type];
}

function ProductCard({ product }: { product: (typeof mantelProducts)[number] }) {
  return (
    <Link
      href={`/mantels/p/${product.slug}`}
      className="group border border-stone-200 rounded-sm overflow-hidden hover:border-[color:var(--accent)] hover:shadow-sm transition-all"
    >
      <div className="relative h-72 bg-stone-100 overflow-hidden">
        {product.cardImage || product.image ? (
          <Image
            src={product.cardImage ?? product.image!}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-6xl">🪨</div>
        )}
      </div>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded">
            {productTypeChip(product)}
          </span>
          <span className="text-xs bg-[#F9F7F3] text-[color:var(--accent)] px-2 py-0.5 rounded">
            {styleLabel[product.style]}
          </span>
        </div>
        <h2
          className="text-lg font-medium text-stone-900 mb-2 group-hover:text-[color:var(--accent)] transition-colors"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {product.name}
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
          {product.description}
        </p>
        <p className="text-[color:var(--accent)] text-sm font-medium mt-4 group-hover:underline">
          View details →
        </p>
      </div>
    </Link>
  );
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
    alternates: { canonical: `/mantels/${category.slug}` },
  };
}

export default async function MantelSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getMantelCategory(slug);
  if (!category) notFound();

  const linkedProducts = getProductsForCategory(slug);
  const thoroughbredProducts =
    slug === "beams"
      ? thoroughbredBeamSlugs
          .map((productSlug) => linkedProducts.find((p) => p.slug === productSlug))
          .filter((p): p is (typeof mantelProducts)[number] => Boolean(p))
      : [];
  const remainingBeamProducts =
    slug === "beams"
      ? linkedProducts.filter((p) => !thoroughbredBeamSlugs.includes(p.slug))
      : linkedProducts;
  // For categories without individual product pages, fall back to the category-level product list
  const useLinkedProducts = linkedProducts.length > 0;

  return (
    <>
      <EditorialPageHero
        eyebrow={category.tagline}
        title={category.title}
        description={category.description}
      />

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
                className={`text-sm px-4 py-1.5 rounded-sm border transition-colors ${
                  f.slug === slug
                    ? "bg-[color:var(--accent)] text-white border-[color:var(--accent)]"
                    : "bg-white text-stone-600 border-stone-200 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
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
          slug === "beams" ? (
            /* Beams are grouped by material — several precast beams look like
               wood, so the split + chips keep the distinction unmistakable. */
            <div className="space-y-16">
              {thoroughbredProducts.length > 0 && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] overflow-hidden border border-[#3A3028] bg-[#17130F] text-white">
                    <div className="relative min-h-[340px] lg:min-h-[430px] bg-black">
                      <Image
                        src="/mantels/thoroughbred-legacy-horse.webp"
                        alt="Thoroughbred horse in a historic barn"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                      <p className="uppercase tracking-[0.28em] text-[#C6A879] text-xs mb-4">
                        Featured Precast Beams
                      </p>
                      <h2
                        className="text-3xl md:text-4xl font-medium leading-tight mb-4"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        The Thoroughbred Collection
                      </h2>
                      <p
                        className="text-xl md:text-2xl mb-5"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Every champion leaves a legacy.
                      </p>
                      <p className="text-white/72 leading-relaxed max-w-2xl">
                        Cast from reclaimed beams salvaged from Longacres, Santa Anita,
                        Del Mar, and Hollywood Park, this collection captures the texture
                        of century-old racing barns in non-combustible precast concrete.
                        It is more than a mantel - it is American racing history,
                        reimagined for today&apos;s home.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {thoroughbredProducts.map((product) => (
                      <ProductCard key={product.slug} product={product} />
                    ))}
                  </div>
                </div>
              )}

              {[
                {
                  label: "Additional Precast Beams",
                  blurb:
                    "Precast concrete beams with hand-molded grain and smooth textures — rustic warmth with zero combustibility and every finish in our color range.",
                  items: remainingBeamProducts.filter((p) => p.beamMaterial === "precast"),
                },
                {
                  label: "Wood Beams",
                  blurb: "Solid wood beams with natural grain, character, and warmth.",
                  items: remainingBeamProducts.filter((p) => p.beamMaterial === "wood"),
                },
              ]
                .filter((group) => group.items.length > 0)
                .map((group) => (
                  <div key={group.label}>
                    <h2
                      className="text-3xl font-medium text-stone-900 mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {group.label}
                    </h2>
                    <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-2xl">
                      {group.blurb}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.items.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {linkedProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.products.map((product, i) => (
              <div
                key={i}
                className="border border-stone-200 rounded-sm overflow-hidden hover:shadow-sm transition-shadow"
              >
                <div className="relative h-52 bg-stone-100 flex items-center justify-center text-6xl">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    "🪨"
                  )}
                </div>
                <div className="p-7">
                  <h2
                    className="text-xl font-medium text-stone-900 mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {product.name}
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">{product.description}</p>

                  {product.finishes && (
                    <div className="mb-3">
                      <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">
                        Available Finishes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.finishes.map((f) => (
                          <span
                            key={f}
                            className="bg-[#F9F7F3] text-[color:var(--accent)] text-xs px-3 py-1 rounded-sm border border-[#D9CBB8]"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.sizes && (
                    <p className="text-xs text-stone-400 mb-3">
                      <span className="font-medium">Sizes:</span> {product.sizes}
                    </p>
                  )}

                  {product.note && (
                    <p className="text-xs text-[color:var(--accent)] italic">{product.note}</p>
                  )}

                  <div className="mt-5">
                    <Link
                      href="/estimate"
                      className="inline-block bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white text-sm px-5 py-2.5 rounded font-medium transition-colors"
                    >
                      Request Project Estimate
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
            className="text-xl font-medium text-stone-900 mb-6"
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
                  className="border border-stone-300 rounded-sm px-5 py-2 text-sm text-stone-600 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
                >
                  {c.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
      <InstantEstimateCTA />
    </>
  );
}
