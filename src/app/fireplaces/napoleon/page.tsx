import Link from "next/link";
import Image from "next/image";
import { getFireplaceCategory } from "@/lib/fireplaces-data";
import PricingCTA from "@/components/PricingCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";

export const metadata = {
  title: "Napoleon Fireplaces | California Mantel & Fireplace",
  description: "Napoleon produces high-quality gas and electric fireplaces with realistic flame effects and robust features.",
};

export default function NapoleonPage() {
  const category = getFireplaceCategory("napoleon");
  if (!category) return <div />;

  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/fireplaces" className="hover:text-amber-400 transition-colors">Fireplaces</Link>
            <span className="mx-2">›</span>
            <span className="text-stone-200">{category.title}</span>
          </nav>
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">{category.tagline}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>{category.title}</h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">{category.description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, i) => (
            <div key={i} className="border border-stone-200 rounded-xl overflow-hidden hover:border-amber-700 hover:shadow-md transition-all group flex flex-col">
              <div className="relative h-52 bg-stone-100 overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-6xl">🔥</div>
                )}
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>{product.name}</h2>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{product.description}</p>
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
                {product.note && <p className="text-xs text-amber-700 italic mb-4">{product.note}</p>}
                <div className="mt-auto pt-4 flex items-center gap-3">
                  <Link href="/estimate" className="bg-amber-700 hover:bg-amber-800 text-white text-sm px-5 py-2.5 rounded font-semibold transition-colors">
                    Request Estimate
                  </Link>
                  {product.url && (
                    <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline text-sm font-semibold">
                      View details →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <InstantEstimateCTA />
      <PricingCTA />
    </>
  );
}
