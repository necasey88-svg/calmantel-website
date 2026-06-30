import Link from "next/link";
import { overstockProducts } from "@/lib/mantel-products-data";

export const metadata = {
  title: "Overstock Mantel Sale | California Mantel & Fireplace",
  description:
    "Deep discounts on precast concrete mantels from our overstock inventory. Limited stock — contact your nearest showroom for current availability and pricing.",
};

export default function OverstockSalePage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Limited Stock · Deep Discounts
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Overstock Mantel Sale
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            Browse our current overstock inventory for significant savings on precast concrete mantels.
            Stock changes frequently — contact your nearest showroom for current availability and pricing.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {overstockProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/overstock-sale/p/${product.slug}`}
              className="group border border-stone-200 rounded-xl overflow-hidden hover:border-amber-700 hover:shadow-md transition-all"
            >
              <div className="h-48 bg-stone-100 flex items-center justify-center text-6xl">🪨</div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded">SALE</span>
                  <span className="text-xs text-stone-400">Overstock · Limited qty</span>
                </div>
                <h2
                  className="text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {product.name}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">{product.description}</p>
                <div className="mt-4 flex gap-4 text-xs text-stone-400">
                  <span>Color: {product.color}</span>
                  <span>Finish: {product.finish}</span>
                  <span>Size: {product.size}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
          <p className="text-stone-700 font-medium mb-2">Stock changes frequently</p>
          <p className="text-stone-500 text-sm mb-4">
            Call your nearest showroom to confirm availability and get current overstock pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="tel:7149087388" className="text-amber-700 font-semibold hover:underline">Anaheim: (714) 908-7388</a>
            <a href="tel:9254361731" className="text-amber-700 font-semibold hover:underline">Dublin: (925) 436-1731</a>
            <a href="tel:9166650627" className="text-amber-700 font-semibold hover:underline">Sacramento: (916) 665-0627</a>
          </div>
        </div>
      </section>
    </>
  );
}
