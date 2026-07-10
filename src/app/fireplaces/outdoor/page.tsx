import Link from "next/link";
import { getFireplaceCategory } from "@/lib/fireplaces-data";
import BrandFilterGrid from "@/components/BrandFilterGrid";
import PricingCTA from "@/components/PricingCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";

export const metadata = {
  title: "Outdoor Fireplaces | California Mantel & Fireplace",
  description:
    "Outdoor gas fireplaces from Heat & Glo, Flare, Napoleon, and more. Extend your outdoor living space with a stunning fireplace built for California's climate.",
  alternates: { canonical: "/fireplaces/outdoor" },
};

export default function OutdoorFireplacesPage() {
  const category = getFireplaceCategory("outdoor");
  if (!category) return <div />;

  return (
    <>
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[color:var(--ink)]/55 mb-4">
            <Link href="/fireplaces" className="hover:text-[color:var(--accent)] transition-colors">
              Fireplaces
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[color:var(--ink)]/80">{category.title}</span>
          </nav>
          <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-sm font-medium mb-3">
            {category.tagline}
          </p>
          <h1
            className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.04] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {category.title}
          </h1>
          <p className="text-[color:var(--ink)]/60 max-w-2xl leading-relaxed">{category.description}</p>
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
