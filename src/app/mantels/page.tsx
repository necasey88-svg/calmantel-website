import Link from "next/link";
import MantelSearch from "@/components/MantelSearch";
import MantelFitFinder from "@/components/MantelFitFinder";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Precast & Wood Fireplace Mantels | California Mantel",
  description:
    "Browse handcrafted fireplace mantels — contemporary, traditional, wood surrounds, beams & overmantels. Precast concrete & solid wood, manufactured in California since 1987.",
  alternates: { canonical: "/mantels" },
};

const mantelCategories: {
  title: string;
  description: string;
  href: string;
  subLinks?: { label: string; href: string }[];
}[] = [
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
    subLinks: [
      { label: "Classical", href: "/mantels/traditional-classical" },
      { label: "French & Old-World", href: "/mantels/traditional-french" },
      { label: "Ornate & Carved", href: "/mantels/traditional-ornate" },
    ],
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
      <EditorialPageHero
        eyebrow="Handcrafted in California"
        title="Fireplace mantels with architectural presence."
        description="Explore wood and precast concrete surrounds designed around scale, proportion, finish, and the room they will anchor."
      />

      {/* Search */}
      <MantelSearch />

      {/* Fit finder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <MantelFitFinder />
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mantelCategories.map((cat) => (
            <div
              key={cat.href}
              className="group border-t border-[color:var(--sand-deep)] pt-7 transition-colors flex flex-col"
            >
              <Link href={cat.href} className="flex-1">
                <h2
                  className="text-2xl font-medium text-[color:var(--ink)] mb-3 group-hover:text-[color:var(--accent)] transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {cat.title}
                </h2>
                <p className="text-[color:var(--ink)]/55 text-sm leading-relaxed">{cat.description}</p>
              </Link>
              {cat.subLinks && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.subLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="text-xs px-3 py-1 border border-[color:var(--sand-deep)] text-[color:var(--ink)]/55 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href={cat.href}
                className="inline-block mt-4 text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent)] group-hover:text-[color:var(--accent-dark)] transition-colors"
              >
                Browse {cat.title} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <InstantEstimateCTA />
    </>
  );
}
