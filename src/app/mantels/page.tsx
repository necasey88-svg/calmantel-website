import Link from "next/link";
import MantelSearch from "@/components/MantelSearch";
import PricingCTA from "@/components/PricingCTA";

export const metadata = {
  title: "Precast & Wood Fireplace Mantels | California Mantel",
  description:
    "Browse handcrafted fireplace mantels — contemporary, traditional, wood surrounds, beams & overmantels. Precast concrete & solid wood, manufactured in California since 1987.",
  alternates: { canonical: "/mantels" },
};

const mantelCategories = [
  {
    title: "Contemporary",
    description:
      "Sleek, minimal designs that complement modern and transitional interiors. Clean horizontal lines and understated profiles.",
    href: "/mantels/contemporary",
  },
  {
    title: "Traditional",
    description:
      "Classic carved mantels with intricate detail, columns, and pilasters that bring timeless character to any room.",
    href: "/mantels/traditional",
  },
  {
    title: "Beams",
    description:
      "Rustic wood beam mantels that add warmth and a farmhouse or lodge aesthetic to your fireplace.",
    href: "/mantels/beams",
  },
  {
    title: "Hearths",
    description:
      "Beautiful precast and stone hearth options to complete your fireplace surround.",
    href: "/mantels/hearths",
  },
  {
    title: "Overmantels",
    description:
      "Make a dramatic statement with an overmantel — extending the visual impact of your fireplace to the ceiling.",
    href: "/mantels/overmantels",
  },
  {
    title: "Wood Surrounds",
    description:
      "Handcrafted solid wood mantel surrounds in painted and stained finishes.",
    href: "/mantels/wood-surrounds",
  },
  {
    title: "Colors & Finishes",
    description:
      "Explore the full palette of colors and finishing options available for our precast concrete mantels.",
    href: "/mantels/colors-finishes",
  },
];

export default function MantelsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Handcrafted in California
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Fireplace Mantels
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            A mantel is the perfect finishing touch for your fireplace, adding both
            style and a focal point to your living space. We manufacture wood and
            precast concrete mantels in a wide range of styles to suit any home.
          </p>
        </div>
      </section>

      {/* Search */}
      <MantelSearch />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mantelCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group border border-stone-200 rounded-xl p-7 hover:border-amber-700 hover:shadow-md transition-all"
            >
              <h2
                className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {cat.title}
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed">{cat.description}</p>
              <span className="inline-block mt-4 text-amber-700 text-sm font-semibold group-hover:underline">
                Browse {cat.title} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <PricingCTA />
    </>
  );
}
