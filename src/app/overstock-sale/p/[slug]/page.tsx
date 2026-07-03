import { notFound } from "next/navigation";
import Link from "next/link";
import { getOverstockProduct, overstockProducts } from "@/lib/mantel-products-data";

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
  };
}

export default async function OverstockProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getOverstockProduct(slug);
  if (!product) notFound();

  return (
    <>
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4 flex items-center gap-1">
            <Link href="/overstock-sale" className="hover:text-amber-400 transition-colors">Overstock Sale</Link>
            <span>›</span>
            <span className="text-stone-200">{product.name}</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">OVERSTOCK SALE</span>
            <span className="text-stone-400 text-sm">Limited quantity available</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {product.name}
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-stone-100 rounded-2xl flex items-center justify-center h-80 text-7xl">🪨</div>

          <div>
            <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-stone-50 rounded-lg p-4">
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Color</p>
                <p className="text-stone-700 font-medium text-sm">{product.color}</p>
              </div>
              <div className="bg-stone-50 rounded-lg p-4">
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Finish</p>
                <p className="text-stone-700 font-medium text-sm">{product.finish}</p>
              </div>
              <div className="bg-stone-50 rounded-lg p-4">
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Size</p>
                <p className="text-stone-700 font-medium text-sm">{product.size}</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <p className="text-sm text-amber-800 font-medium mb-1">Overstock pricing available in showroom</p>
              <p className="text-xs text-amber-700">
                Installation fee is not included. Contact your nearest showroom for current overstock pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/estimate"
                className="bg-amber-700 hover:bg-amber-800 text-white px-7 py-3 rounded font-semibold text-center transition-colors"
              >
                Request Estimate
              </Link>
              <Link
                href="/showrooms"
                className="border border-stone-300 text-stone-700 hover:border-amber-700 hover:text-amber-700 px-7 py-3 rounded font-semibold text-center transition-colors"
              >
                Find a Showroom
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
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-14 text-center">
        <Link
          href="/overstock-sale"
          className="inline-block text-amber-700 hover:text-amber-800 font-semibold transition-colors"
        >
          ← Back to Overstock Sale
        </Link>
      </section>
    </>
  );
}
