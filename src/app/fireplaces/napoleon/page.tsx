import Link from "next/link";
import Image from "next/image";
import { getFireplaceCategory } from "@/lib/fireplaces-data";
import PricingCTA from "@/components/PricingCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";

export const metadata = {
  title: "Napoleon Fireplaces | California Mantel & Fireplace",
  description: "Napoleon produces high-quality gas and electric fireplaces with realistic flame effects and robust features.",
  alternates: { canonical: "/fireplaces/napoleon" },
};

export default function NapoleonPage() {
  const category = getFireplaceCategory("napoleon");
  if (!category) return <div />;

  return (
    <>
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[color:var(--ink)]/55 mb-4">
            <Link href="/fireplaces" className="hover:text-[color:var(--accent)] transition-colors">Fireplaces</Link>
            <span className="mx-2">›</span>
            <span className="text-[color:var(--ink)]/80">{category.title}</span>
          </nav>
          <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-sm font-medium mb-3">{category.tagline}</p>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.04] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>{category.title}</h1>
          <p className="text-[color:var(--ink)]/60 max-w-2xl leading-relaxed">{category.description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, i) => (
            <div key={i} className="border border-stone-200 rounded-sm overflow-hidden hover:border-[color:var(--accent)] hover:shadow-sm transition-all group flex flex-col">
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
                <h2 className="text-xl font-medium text-stone-900 mb-2 group-hover:text-[color:var(--accent)] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>{product.name}</h2>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{product.description}</p>
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
                {product.note && <p className="text-xs text-[color:var(--accent)] italic mb-4">{product.note}</p>}
                <div className="mt-auto pt-4 flex items-center gap-3">
                  <Link href="/estimate" className="bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white text-sm px-5 py-2.5 rounded font-medium transition-colors">
                    Request Project Estimate
                  </Link>
                  {product.url && (
                    <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-[color:var(--accent)] hover:underline text-sm font-medium">
                      View details →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Napoleon Fireplace Design Studio */}
      <section className="border-y border-[color:var(--sand-deep)] bg-[#F9F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
              Interactive Design Tool
            </p>
            <h2
              className="text-3xl md:text-4xl font-medium text-[color:var(--ink)] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Design your Napoleon fireplace before you visit.
            </h2>
            <p className="text-[color:var(--ink)]/60 leading-relaxed mb-8">
              Napoleon&apos;s Fireplace Design Studio lets you choose a model, then style the flames,
              media, interior panels, and finishing trim in real time. Build the exact look you want,
              save it, and bring it to our showroom — we&apos;ll handle the specification and installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://fireplacedesignstudio.napoleon.com/en/ca/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[color:var(--ink)] text-white hover:bg-[color:var(--accent)] px-8 py-3.5 text-xs uppercase tracking-[0.16em] text-center transition-colors"
              >
                Launch the Design Studio
              </a>
              <Link
                href="/booking"
                className="inline-block border border-[color:var(--ink)]/20 text-[color:var(--ink)] hover:border-[color:var(--ink)] px-8 py-3.5 text-xs uppercase tracking-[0.16em] text-center transition-colors"
              >
                Bring Your Design to a Showroom
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InstantEstimateCTA />
      <PricingCTA />
    </>
  );
}
