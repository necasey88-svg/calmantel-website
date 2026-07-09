import Link from "next/link";
import { overstockProducts } from "@/lib/mantel-products-data";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Overstock Mantel Sale | California Mantel & Fireplace",
  description:
    "Deep discounts on precast concrete mantels from our overstock inventory. Limited stock — contact your nearest showroom for current availability and pricing.",
};

export default function OverstockSalePage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Limited Availability"
        title="Overstock pieces, selected with care."
        description="A limited inventory of precast mantel pieces available through our showrooms. Availability changes often, so our team will confirm current options and fit."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {overstockProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/overstock-sale/p/${product.slug}`}
              className="group border border-[color:var(--sand-deep)] overflow-hidden hover:border-[color:var(--accent)] transition-all"
            >
              <div className="h-48 bg-stone-100 flex items-center justify-center text-6xl">🪨</div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">                  <span className="border border-[color:var(--sand-deep)] text-[color:var(--ink)]/60 text-xs font-medium px-2 py-0.5">Limited</span>                  <span className="text-xs text-stone-400">Limited availability</span>
                </div>
                <h2
                  className="text-lg font-medium text-stone-900 mb-2 group-hover:text-[color:var(--accent)] transition-colors"
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

        <div className="mt-12 bg-[#F9F7F3] border border-[color:var(--sand-deep)] p-8 text-center">
          <p className="text-stone-700 font-medium mb-2">Stock changes frequently</p>
          <p className="text-stone-500 text-sm mb-4">
            Call your nearest showroom to confirm availability and get current overstock pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="tel:7149087388" className="text-[color:var(--accent)] font-medium hover:underline">Anaheim: (714) 908-7388</a>
            <a href="tel:9254361731" className="text-[color:var(--accent)] font-medium hover:underline">Dublin: (925) 436-1731</a>
            <a href="tel:9166650627" className="text-[color:var(--accent)] font-medium hover:underline">Sacramento: (916) 665-0627</a>
          </div>
        </div>
      </section>
    </>
  );
}
