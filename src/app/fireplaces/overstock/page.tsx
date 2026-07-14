import Link from "next/link";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Overstock Fireplaces | California Mantel & Fireplace",
  description:
    "Shop limited-quantity overstock electric, gas, linear, corner, see-through, and outdoor fireplaces from Dimplex, Faber, Empire, Flare, Outdoor Lifestyles, and Superior.",
  alternates: { canonical: "/fireplaces/overstock" },
};

type OverstockFireplace = {
  manufacturer: string;
  name: string;
  sku: string;
  quantity: number;
  category: "Electric" | "Gas" | "Outdoor Gas";
  configuration: string;
  fuel: string;
  details: string;
  note?: string;
};

const overstockFireplaces: OverstockFireplace[] = [
  {
    manufacturer: "Dimplex",
    name: 'IgniteXL 50" Linear Electric Fireplace',
    sku: "XLF50",
    quantity: 1,
    category: "Electric",
    configuration: "Front-facing linear",
    fuel: "120V / 240V electric",
    details:
      'A low-profile 50-inch built-in electric fireplace with Multi-Fire flame effects, color themes, and supplemental heat.',
  },
  {
    manufacturer: "Faber by Glen Dimplex",
    name: "MatriX 4326 Right-Facing Built-In Gas Fireplace",
    sku: "FMG4726R",
    quantity: 2,
    category: "Gas",
    configuration: "Two-sided right corner",
    fuel: "Natural gas",
    details:
      "A right-facing corner fireplace with a five-burner system, realistic log set, ember lighting, and two-sided viewing.",
  },
  {
    manufacturer: "Faber by Glen Dimplex",
    name: "MatriX 5126B Three-Sided Bay Gas Fireplace",
    sku: "FMG5126B",
    quantity: 1,
    category: "Gas",
    configuration: "Three-sided bay",
    fuel: "Natural gas",
    details:
      "A dramatic three-sided built-in fireplace with the MatriX five-burner system, log media, and panoramic viewing.",
  },
  {
    manufacturer: "American Hearth by Empire",
    name: 'Canvas 27" Portrait Direct-Vent Fireplace',
    sku: "ADVLL27FP92N",
    quantity: 2,
    category: "Gas",
    configuration: "Front-facing portrait",
    fuel: "Natural gas",
    details:
      "A tall contemporary direct-vent fireplace with a clean-face design, reflective interior, accent lighting, and remote control.",
  },
  {
    manufacturer: "Empire",
    name: 'Boulevard 48" See-Through Linear Fireplace',
    sku: "DVLL48SP90N",
    quantity: 1,
    category: "Gas",
    configuration: "See-through linear",
    fuel: "Natural gas",
    details:
      "A 48-inch direct-vent fireplace designed to connect two spaces with ceramic glass and white LED accent lighting.",
    note: "Required liner and decorative media are selected separately; confirm included components with our team.",
  },
  {
    manufacturer: "Flare Fireplaces",
    name: 'FF-50 Front-Facing Fireplace',
    sku: "FLARE-FF-50",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing linear",
    fuel: "Gas configuration to confirm",
    details:
      "A frameless 50-inch modern fireplace with a 16-inch glass height and Flare's multi-row burner system.",
  },
  {
    manufacturer: "Flare Fireplaces",
    name: 'FF-50 Extra-High Commercial Fireplace',
    sku: "FLARE-FF-50-EH-C",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing commercial",
    fuel: "Gas configuration to confirm",
    details:
      "A commercial front-facing fireplace with an expansive 30-inch glass height, double-glass safety barrier, and frameless design.",
  },
  {
    manufacturer: "Flare Fireplaces",
    name: 'FF-50 High Fireplace Package',
    sku: "FLARE-FF-50-H / RBS-FF-H / RB-FF-50-H",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing high",
    fuel: "Gas configuration to confirm",
    details:
      "A 50-inch front-facing fireplace with a 24-inch glass height, packaged with reflective back and side panels.",
  },
  {
    manufacturer: "Flare Fireplaces",
    name: 'LC-60 Left-Corner Fireplace',
    sku: "FLARE-LC-60",
    quantity: 1,
    category: "Gas",
    configuration: "Left-corner linear",
    fuel: "Gas configuration to confirm",
    details:
      "A 60-inch frameless fireplace with front and left-side glass for an architectural two-sided flame view.",
  },
  {
    manufacturer: "Flare Fireplaces",
    name: 'ST-45 High Commercial See-Through Fireplace',
    sku: "FLARE-ST-45-H-C",
    quantity: 1,
    category: "Gas",
    configuration: "See-through commercial",
    fuel: "Gas configuration to confirm",
    details:
      "A 45-inch commercial see-through fireplace with a 24-inch glass height for a clear double-sided view between spaces.",
  },
  {
    manufacturer: "Outdoor Lifestyles by HHT",
    name: 'Lanai 51" Outdoor Linear Gas Fireplace',
    sku: "ODLANAIG-51",
    quantity: 1,
    category: "Outdoor Gas",
    configuration: "Outdoor front-facing linear",
    fuel: "Natural gas",
    details:
      "A stainless-steel outdoor fireplace with a 51-inch viewing area, LED-lit crushed-glass firebed, and IntelliFire ignition.",
    note: "Outdoor installation only. This legacy model has been discontinued by the manufacturer.",
  },
  {
    manufacturer: "Superior",
    name: 'DRL2035 35" Linear Direct-Vent Fireplace',
    sku: "DRL2035TEN / F4182",
    quantity: 3,
    category: "Gas",
    configuration: "Front-facing linear",
    fuel: "Natural gas",
    details:
      "A compact contemporary linear fireplace with electronic ignition, battery backup, and reflective black crushed-glass media.",
  },
];

const totalUnits = overstockFireplaces.reduce(
  (total, fireplace) => total + fireplace.quantity,
  0,
);

export default function OverstockFireplacesPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="In Stock / Limited Quantities"
        title="Overstock fireplaces, ready for the right project."
        description="A limited collection of electric, gas, linear, corner, see-through, and outdoor fireplaces available through our California showrooms. Contact our team for condition, included components, pricing, and installation compatibility."
      />

      <section className="border-b border-[color:var(--sand-deep)] bg-[#F9F7F3]">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-[color:var(--sand-deep)] px-4 sm:px-6 lg:px-8">
          <div className="py-6 pr-4 text-center">
            <p className="text-2xl font-medium text-[color:var(--ink)]">{overstockFireplaces.length}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink)]/45">Models</p>
          </div>
          <div className="px-4 py-6 text-center">
            <p className="text-2xl font-medium text-[color:var(--ink)]">{totalUnits}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink)]/45">Total Units</p>
          </div>
          <div className="py-6 pl-4 text-center">
            <p className="text-2xl font-medium text-[color:var(--ink)]">6</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink)]/45">Brands</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[color:var(--sand-deep)] pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[color:var(--accent)]">Current Inventory</p>
            <h2
              className="mt-2 text-3xl font-medium text-[color:var(--ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Available fireplace units
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[color:var(--ink)]/55">
            Inventory may change without notice. Quantity reflects the supplied overstock list and will be confirmed before purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {overstockFireplaces.map((fireplace) => (
            <article
              key={fireplace.sku}
              className="flex min-h-[390px] flex-col border border-[color:var(--sand-deep)] bg-white p-7 transition-colors hover:border-[color:var(--accent)]"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[color:var(--accent)]">
                    {fireplace.manufacturer}
                  </p>
                  <p className="mt-2 font-mono text-xs text-[color:var(--ink)]/45">SKU {fireplace.sku}</p>
                </div>
                <div className="min-w-16 border border-[color:var(--sand-deep)] px-3 py-2 text-center">
                  <p className="text-xl font-medium leading-none text-[color:var(--ink)]">{fireplace.quantity}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[color:var(--ink)]/45">
                    {fireplace.quantity === 1 ? "Unit" : "Units"}
                  </p>
                </div>
              </div>

              <span className="mb-3 w-fit bg-[color:var(--sand)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)]/65">
                {fireplace.category}
              </span>
              <h3
                className="text-2xl font-medium leading-tight text-[color:var(--ink)]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {fireplace.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink)]/58">{fireplace.details}</p>

              <dl className="mt-6 space-y-2 border-t border-[color:var(--sand-deep)] pt-5 text-xs">
                <div className="flex justify-between gap-4">
                  <dt className="text-[color:var(--ink)]/40">Configuration</dt>
                  <dd className="text-right font-medium text-[color:var(--ink)]/70">{fireplace.configuration}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[color:var(--ink)]/40">Fuel</dt>
                  <dd className="text-right font-medium text-[color:var(--ink)]/70">{fireplace.fuel}</dd>
                </div>
              </dl>

              {fireplace.note && (
                <p className="mt-4 border-l-2 border-[color:var(--accent)] pl-3 text-[11px] leading-relaxed text-[color:var(--ink)]/50">
                  {fireplace.note}
                </p>
              )}

              <Link
                href={`/fireplaces/overstock/inquiry?product=${encodeURIComponent(fireplace.sku)}`}
                className="mt-auto pt-6 text-sm font-medium text-[color:var(--accent)] hover:underline"
              >
                Ask About This Unit →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--sand-deep)] bg-[#F9F7F3] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[color:var(--accent)]">Availability & Pricing</p>
          <h2
            className="mt-3 text-3xl font-medium text-[color:var(--ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let us confirm the right unit for your project.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--ink)]/58">
            Overstock purchases are final and must be reviewed for fuel type, venting, framing, included accessories, condition, and local installation requirements before purchase.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[color:var(--ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent)]"
            >
              Request Overstock Pricing
            </Link>
            <a
              href="tel:7149087388"
              className="border border-[color:var(--ink)]/20 px-6 py-3 text-sm font-medium text-[color:var(--ink)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Call (714) 908-7388
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
