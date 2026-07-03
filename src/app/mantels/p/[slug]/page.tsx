import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ZoomableImage from "@/components/ZoomableImage";
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
    category: `${styleLabel[product.style]} ${typeLabel[product.type]}`,
    brand: { "@type": "Brand", name: business.name },
    manufacturer: { "@type": "Organization", name: business.name },
    url: `${SITE_URL}/mantels/p/${product.slug}`,
  };

  return (
    <>
      <JsonLd data={productSchema} />
      {/* Breadcrumb + hero */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4 flex flex-wrap gap-1 items-center">
            <Link href="/mantels" className="hover:text-amber-400 transition-colors">Mantels</Link>
            <span>›</span>
            <Link href={`/mantels/${product.style === "contemporary" ? "contemporary" : product.type === "wood" ? "wood-surrounds" : product.type === "overmantel" ? "overmantels" : "traditional"}`} className="hover:text-amber-400 transition-colors">
              {typeLabel[product.type]}
            </Link>
            <span>›</span>
            <span className="text-stone-200">{product.name}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {typeLabel[product.type]}
            </span>
            <span className="bg-stone-700 text-stone-200 text-xs font-semibold px-3 py-1 rounded-full">
              {styleLabel[product.style]}
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {product.name}
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product image */}
          {product.image ? (
            <ZoomableImage src={product.image} alt={product.name} />
          ) : (
            <div className="relative bg-stone-100 rounded-2xl overflow-hidden h-80 flex items-center justify-center text-7xl">🪨</div>
          )}

          {/* Details */}
          <div>
            <h2
              className="text-2xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              About the {product.name}
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-stone-50 rounded-lg p-4">
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Material</p>
                <p className="text-stone-700 font-medium text-sm">{typeLabel[product.type]}</p>
              </div>
              <div className="bg-stone-50 rounded-lg p-4">
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Style</p>
                <p className="text-stone-700 font-medium text-sm">{styleLabel[product.style]}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/estimate"
                className="bg-amber-700 hover:bg-amber-800 text-white px-7 py-3 rounded font-semibold text-center transition-colors"
              >
                Request Estimate
              </Link>
              <Link
                href="/booking"
                className="border border-stone-300 text-stone-700 hover:border-amber-700 hover:text-amber-700 px-7 py-3 rounded font-semibold text-center transition-colors"
              >
                Book Appointment
              </Link>
            </div>

            {product.cadPdf && (
              <a
                href={product.cadPdf}
                download
                className="inline-flex items-center gap-2 mt-4 text-sm text-stone-500 hover:text-amber-700 transition-colors"
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

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-stone-50 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-xl font-bold text-stone-900 mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/mantels/p/${p.slug}`}
                  className="group border border-stone-200 bg-white rounded-xl overflow-hidden hover:border-amber-700 hover:shadow-md transition-all"
                >
                  <div className="h-32 bg-stone-100 flex items-center justify-center text-4xl">🪨</div>
                  <div className="p-4">
                    <p
                      className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors text-sm"
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
