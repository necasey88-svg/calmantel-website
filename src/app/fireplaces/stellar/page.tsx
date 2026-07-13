import Image from "next/image";
import Link from "next/link";
import ConsultationCTA from "@/components/ConsultationCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import PricingCTA from "@/components/PricingCTA";

export const metadata = {
  title: "Stellar Fireplaces | California Mantel & Fireplace",
  description:
    "Explore Stellar by Heat & Glo luxury gas fireplaces, including the Enlight, Transcend, Carina, Endulge, Round, and Speira collections.",
  alternates: { canonical: "/fireplaces/stellar" },
};

const products = [
  {
    name: "Enlight Single-Sided Gas Fireplace",
    collection: "Enlight Collection",
    description:
      "A dramatic single-sided fire feature with bold flames, clear glass, and custom dimensions for residential or commercial designs.",
    image: "/brands/stellar-products/enlight-single-sided.png",
    url: "https://stellar.heatnglo.com/fireplaces/enlight-collection/enlight-single-sided-gas-fireplace",
  },
  {
    name: "Enlight See-Through Gas Fireplace",
    collection: "Enlight Collection",
    description:
      "Double-sided views connect two spaces while allowing each room to retain its own architectural character.",
    image: "/brands/stellar-products/enlight-see-through.png",
    url: "https://stellar.heatnglo.com/fireplaces/enlight-collection/enlight-see-through-gas-fireplace",
  },
  {
    name: "Enlight Pier Gas Fireplace",
    collection: "Enlight Collection",
    description:
      "A three-sided fireplace designed to divide open-concept spaces while preserving generous views of the flame.",
    image: "/brands/stellar-products/enlight-pier.png",
    url: "https://stellar.heatnglo.com/fireplaces/enlight-collection/enlight-pier-gas-fireplace",
  },
  {
    name: "Enlight Corner Gas Fireplace",
    collection: "Enlight Collection",
    description:
      "Left- or right-corner glass turns a wall transition into a clean, sculptural focal point with vivid flames.",
    image: "/brands/stellar-products/enlight-corner.png",
    url: "https://stellar.heatnglo.com/fireplaces/enlight-collection/enlight-corner-gas-fireplace",
  },
  {
    name: "Enlight Bay Gas Fireplace",
    collection: "Enlight Collection",
    description:
      "A three-sided bay configuration that projects the fire into the room for expansive viewing and a strong architectural presence.",
    image: "/brands/stellar-products/enlight-bay.png",
    url: "https://stellar.heatnglo.com/fireplaces/enlight-collection/enlight-bay-gas-fireplace",
  },
  {
    name: "Enlight Island Gas Fireplace",
    collection: "Enlight Collection",
    description:
      "A freestanding four-sided sculpture of fire that can separate or unify an open floor plan.",
    image: "/brands/stellar-products/enlight-island.png",
    url: "https://stellar.heatnglo.com/fireplaces/enlight-collection/enlight-island-gas-fireplace",
  },
  {
    name: "Enlight Linear Open Hearth Double-Sided",
    collection: "Enlight Open Hearth",
    description:
      "A glass-free open hearth with immersive flame views from both sides, customizable down to the inch.",
    image: "/brands/stellar-products/enlight-open-hearth-double-sided.png",
    url: "https://stellar.heatnglo.com/fireplaces/enlight-collection/enlight-linear-open-hearth-double-sided-gas-fireplace",
  },
  {
    name: "Enlight Linear Open Hearth Single-Sided",
    collection: "Enlight Open Hearth",
    description:
      "A modern single-sided open hearth with no glass between the room and some of Stellar's boldest flames.",
    image: "/brands/stellar-products/enlight-open-hearth-single-sided.png",
    url: "https://stellar.heatnglo.com/fireplaces/enlight-collection/enlight-linear-open-hearth-single-sided-gas-fireplace",
  },
  {
    name: "Transcend Indoor-Outdoor Gas Fireplace",
    collection: "Transcend Collection",
    description:
      "A complete indoor-outdoor fireplace that creates one shared focal point across interior and exterior living areas.",
    image: "/brands/stellar-products/transcend-indoor-outdoor.png",
    url: "https://stellar.heatnglo.com/fireplaces/transcend-collection/transcend-indoor-outdoor-gas-fireplace",
  },
  {
    name: "Round Gas Fireplace",
    collection: "Custom Collection",
    description:
      "A cylindrical custom fireplace with unobstructed 360-degree views and a distinctive star-shaped ribbon burner.",
    image: "/brands/stellar-products/round-gas-fireplace.png",
    url: "https://stellar.heatnglo.com/fireplaces/round-gas-fireplace",
  },
  {
    name: "Carina Open Hearth Gas Single-Sided",
    collection: "Carina Collection",
    description:
      "Traditional masonry-inspired proportions meet a glass-free open flame, modern safety systems, and custom sizing.",
    image: "/brands/stellar-products/carina-single-sided.png",
    url: "https://stellar.heatnglo.com/fireplaces/carina-gas-fireplace",
  },
  {
    name: "Carina Open Hearth Gas Double-Sided",
    collection: "Carina Collection",
    description:
      "Classic open-hearth character with two-sided viewing for adjoining rooms and refined custom installations.",
    image: "/brands/stellar-products/carina-double-sided.png",
    url: "https://stellar.heatnglo.com/fireplaces/carina-double-sided-gas-fireplace",
  },
  {
    name: "Endulge Outdoor Linear Open Hearth Gas Double-Sided",
    collection: "Endulge Outdoor Collection",
    description:
      "A customizable outdoor open hearth with flame views from both sides for patios, courtyards, and hospitality spaces.",
    image: "/brands/stellar-products/endulge-outdoor.png",
    url: "https://stellar.heatnglo.com/fireplaces/endulge-outdoor-open-hearth-gas-fireplace",
  },
  {
    name: "Endulge Outdoor Linear Open Hearth Gas Single-Sided",
    collection: "Endulge Outdoor Collection",
    description:
      "A premium single-sided outdoor fireplace that brings a large, uninterrupted open flame to exterior living spaces.",
    image: "/brands/stellar-products/endulge-outdoor.png",
    url: "https://stellar.heatnglo.com/fireplaces/endulge-outdoor-open-hearth-gas-fireplace",
  },
  {
    name: "Speira Vertical Spiral Gas Fireplace",
    collection: "Custom Collection",
    description:
      "A sculptural vertical fire feature with spiral flames that climb from floor to ceiling in a striking custom installation.",
    image: "/brands/stellar-products/speira-vertical-spiral.png",
    url: "https://stellar.heatnglo.com/fireplaces/speira-gas-fireplace",
  },
];

export default function StellarPage() {
  return (
    <>
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[color:var(--ink)]/55 mb-5">
            <Link href="/fireplaces" className="hover:text-[color:var(--accent)] transition-colors">
              Fireplaces
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[color:var(--ink)]/80">Stellar by Heat &amp; Glo</span>
          </nav>
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs font-medium mb-4">
                Custom Luxury Fireplaces
              </p>
              <h1
                className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.04] mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Stellar by Heat &amp; Glo
              </h1>
              <p className="text-[color:var(--ink)]/60 max-w-3xl leading-relaxed">
                Stellar creates statement fireplaces for custom residential and commercial projects—from
                expansive linear fire features to round, island, open-hearth, indoor-outdoor, and vertical designs.
              </p>
            </div>
            <Image
              src="/brands/stellar.jpg"
              alt="Stellar by Heat & Glo"
              width={220}
              height={110}
              className="w-44 md:w-52 h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs font-medium mb-3">
            Explore the Collection
          </p>
          <h2
            className="text-3xl md:text-4xl font-medium text-[color:var(--ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Fifteen ways to make fire architectural.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="group border border-[color:var(--sand-deep)] bg-white flex flex-col overflow-hidden hover:border-[color:var(--accent)] transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-[1.025] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[color:var(--accent)] uppercase tracking-[0.2em] text-[10px] mb-2">
                  {product.collection}
                </p>
                <h3
                  className="text-xl font-medium text-[color:var(--ink)] leading-tight mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {product.name}
                </h3>
                <p className="text-[color:var(--ink)]/55 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link
                    href={`/estimate?product=${encodeURIComponent(product.name)}`}
                    className="bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white text-xs px-4 py-2.5 transition-colors"
                  >
                    Request Estimate
                  </Link>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--accent)] hover:text-[color:var(--ink)] text-xs font-medium transition-colors"
                  >
                    View on Stellar →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ConsultationCTA />
      <InstantEstimateCTA />
      <PricingCTA />
    </>
  );
}
