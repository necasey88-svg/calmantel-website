import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ZoomableImage from "@/components/ZoomableImage";
import ProductGallery from "@/components/ProductGallery";
import EditorialPageHero from "@/components/EditorialPageHero";
import {
  getMantelProduct,
  mantelProducts,
  typeLabel,
  styleLabel,
} from "@/lib/mantel-products-data";
import PricingCTA from "@/components/PricingCTA";
import ConsultationCTA from "@/components/ConsultationCTA";
import JsonLd from "@/components/JsonLd";
import { business, SITE_URL } from "@/lib/business-data";

// Beams get their material spelled out — several precast beams look like wood.
function productMaterialLabel(product: NonNullable<ReturnType<typeof getMantelProduct>>) {
  if (product.type === 'beam' && product.beamMaterial) {
    return product.beamMaterial === 'precast' ? 'Precast Beam' : 'Wood Beam';
  }
  return typeLabel[product.type];
}

// Each card links out to a vendor collection we install from (opens in new tab).
const wallFinishIdeas = [
  {
    title: "Stone Veneer",
    description: "Add texture and depth around the mantel with natural or manufactured stone.",
    image: "/masonry-gallery/180d8e52-9754-4a75-ab98-1d21b76879a7.webp",
    vendorUrl: "https://www.msisurfaces.com/products/natural-stone-collections/",
    vendorLabel: "Browse MSI Natural Stone",
  },
  {
    title: "Brick Detail",
    description: "Use full brick or thin brick veneer for a warmer, more traditional fireplace wall.",
    image: "/masonry-gallery/1d921cf6-0a69-4f6a-9248-4c398b0c20ae.webp",
    vendorUrl: "https://www.glengery.com/brick-products",
    vendorLabel: "Browse Glen-Gery Brick",
  },
  {
    title: "Tile Accent Wall",
    description: "Pair the mantel with tile for a refined surround, hearth, or full-height feature.",
    image: "/masonry-gallery/2eb435ce-15b2-41b1-8fa0-bc96450253a7.webp",
    vendorUrl: "https://www.msisurfaces.com/porcelain-ceramic-category/",
    vendorLabel: "Browse MSI Tile",
  },
];

export function generateStaticParams() {
  return mantelProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getMantelProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} Mantel | California Mantel`,
    description: product.description.slice(0, 160),
    alternates: { canonical: `/mantels/p/${product.slug}` },
  };
}

export default async function MantelProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getMantelProduct(slug);
  if (!product) notFound();

  const related = mantelProducts
    .filter((p) => p.slug !== slug && p.style === product.style)
    .slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} Mantel`,
    description: product.description,
    ...(product.image ? { image: `${SITE_URL}${product.image}` } : {}),
    category: `${styleLabel[product.style]} ${productMaterialLabel(product)}`,
    brand: { "@type": "Brand", name: business.name },
    manufacturer: { "@type": "Organization", name: business.name },
    url: `${SITE_URL}/mantels/p/${product.slug}`,
  };

  return (
    <>
      <JsonLd data={productSchema} />
      {/* Breadcrumb + hero */}
      <EditorialPageHero
        eyebrow={`${styleLabel[product.style]} / ${productMaterialLabel(product)}`}
        title={product.name}
        description={product.description}
      />

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product image */}
          {product.images && product.images.length > 1 ? (
            <ProductGallery images={product.images} alt={product.name} />
          ) : product.image ? (
            <ZoomableImage src={product.image} alt={product.name} />
          ) : (
            <div className="relative bg-stone-100 rounded-sm overflow-hidden h-80 flex items-center justify-center text-7xl">🪨</div>
          )}

          {/* Details */}
          <div>
            <h2
              className="text-2xl font-medium text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              About the {product.name}
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-stone-50 rounded-lg p-4">
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Material</p>
                <p className="text-stone-700 font-medium text-sm">{productMaterialLabel(product)}</p>
              </div>
              <div className="bg-stone-50 rounded-lg p-4">
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Style</p>
                <p className="text-stone-700 font-medium text-sm">{styleLabel[product.style]}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/estimate?product=${encodeURIComponent(product.name + " Mantel")}`}
                className="bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white px-7 py-3 rounded font-medium text-center transition-colors"
              >
                Request Project Estimate
              </Link>
              <Link
                href="/booking"
                className="border border-stone-300 text-stone-700 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] px-7 py-3 rounded font-medium text-center transition-colors"
              >
                Book Appointment
              </Link>
            </div>

            {product.cadPdf && (
              <a
                href={product.cadPdf}
                download
                className="inline-flex items-center gap-2 mt-4 text-sm text-stone-500 hover:text-[color:var(--accent)] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CAD Drawing (PDF)
              </a>
            )}

            <p className="text-xs text-stone-400 mt-4">
              Installation fee not included in estimate. Contact your nearest showroom for full pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--sand-deep)] bg-[#F9F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
            <div>
              <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
                Complete the Fireplace Wall
              </p>
              <h2
                className="text-3xl md:text-4xl font-medium text-[color:var(--ink)] tracking-tight mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Consider the finish around the mantel, too.
              </h2>
              <p className="text-[color:var(--ink)]/60 leading-relaxed mb-7">
                Stone, brick, or tile can turn a mantel into a complete architectural feature wall.
                Masonry services are available exclusively in Southern California through our Anaheim showroom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/masonry-new-page"
                  className="inline-block bg-[color:var(--ink)] text-white hover:bg-black px-7 py-3.5 text-xs uppercase tracking-[0.16em] text-center transition-colors"
                >
                  Explore Masonry Options
                </Link>
                <Link
                  href="/showrooms/anaheim"
                  className="inline-block border border-[color:var(--ink)]/20 text-[color:var(--ink)] hover:border-[color:var(--ink)] px-7 py-3.5 text-xs uppercase tracking-[0.16em] text-center transition-colors"
                >
                  Plan Through Anaheim
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {wallFinishIdeas.map((idea) => (
                <a
                  key={idea.title}
                  href={idea.vendorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-[color:var(--sand-deep)] hover:border-[color:var(--accent)] transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <Image
                      src={idea.image}
                      alt={idea.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 22vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="text-lg font-medium text-[color:var(--ink)] mb-2 group-hover:text-[color:var(--accent)] transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {idea.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[color:var(--ink)]/55 mb-3">
                      {idea.description}
                    </p>
                    <span className="text-xs text-[color:var(--accent)] group-hover:underline">
                      {idea.vendorLabel} →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-stone-50 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-xl font-medium text-stone-900 mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/mantels/p/${p.slug}`}
                  className="group border border-stone-200 bg-white rounded-sm overflow-hidden hover:border-[color:var(--accent)] hover:shadow-sm transition-all"
                >
                  <div className="relative h-32 bg-stone-100 flex items-center justify-center text-4xl">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain p-3"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    ) : (
                      "🪨"
                    )}
                  </div>
                  <div className="p-4">
                    <p
                      className="font-medium text-stone-900 group-hover:text-[color:var(--accent)] transition-colors text-sm"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {p.name}
                    </p>
                    <p className="text-xs text-stone-400 mt-1">{typeLabel[p.type]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultationCTA />
      <PricingCTA />
    </>
  );
}
