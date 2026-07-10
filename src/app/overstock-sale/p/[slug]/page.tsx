import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getOverstockProduct, overstockProducts } from "@/lib/mantel-products-data";

import EditorialPageHero from "@/components/EditorialPageHero";
export function generateStaticParams() {
  return overstockProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getOverstockProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Overstock Sale | California Mantel`,
    description: product.description.slice(0, 160),
    alternates: { canonical: `/overstock-sale/p/${product.slug}` },
  };
}

export default async function OverstockProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getOverstockProduct(slug);
  if (!product) notFound();

  return (
    <>
      <EditorialPageHero
        eyebrow="Limited Availability"
        title={product.name}
        description={product.description}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative bg-stone-100 rounded-sm flex items-center justify-center h-80 text-7xl">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              "🪨"
            )}
          </div>

          <div>
            <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-stone-50 rounded-lg p-4">
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Color</p>
                <p className="text-stone-700 font-medium text-sm">{product.color}</p>
              </div>
              <div className="bg-stone-50 rounded-lg p-4">
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Finish</p>
                <p className="text-stone-700 font-medium text-sm">{product.finish}</p>
              </div>
              <div className="bg-stone-50 rounded-lg p-4">
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Size</p>
                <p className="text-stone-700 font-medium text-sm">{product.size}</p>
              </div>
            </div>

            <div className="bg-[#F9F7F3] border border-[#D9CBB8] rounded-sm p-5 mb-6">
              <p className="text-sm text-[color:var(--accent)] font-medium mb-1">Overstock pricing available in showroom</p>
              <p className="text-xs text-[color:var(--accent)]">
                Installation fee is not included. Contact your nearest showroom for current overstock pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/estimate"
                className="bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white px-7 py-3 rounded font-medium text-center transition-colors"
              >
                Request Project Estimate
              </Link>
              <Link
                href="/showrooms"
                className="border border-stone-300 text-stone-700 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] px-7 py-3 rounded font-medium text-center transition-colors"
              >
                Find a Showroom
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
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-14 text-center">
        <Link
          href="/overstock-sale"
          className="inline-block text-[color:var(--accent)] hover:text-[color:var(--ink)] font-medium transition-colors"
        >
          ← Back to Overstock Sale
        </Link>
      </section>
    </>
  );
}
