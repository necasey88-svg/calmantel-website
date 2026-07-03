import Link from "next/link";
import { getFireplaceCategory } from "@/lib/fireplaces-data";
import BrandFilterGrid from "@/components/BrandFilterGrid";
import PricingCTA from "@/components/PricingCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";

export const metadata = {
  title: "Outdoor Fireplaces | California Mantel & Fireplace",
  description:
    "Outdoor gas fireplaces from Heat & Glo, Flare, Napoleon, and more. Extend your outdoor living space with a stunning fireplace built for California's climate.",
};

export default function OutdoorFireplacesPage() {
  const category = getFireplaceCategory("outdoor");
  if (!category) return <div />;

  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/fireplaces" className="hover:text-amber-400 transition-colors">
              Fireplaces
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BrandFilterGrid products={category.products} />
      </section>

      <InstantEstimateCTA />
      <PricingCTA />
    </>
  );
}
