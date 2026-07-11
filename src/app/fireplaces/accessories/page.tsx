import Link from "next/link";
import ZoomableImage from "@/components/ZoomableImage";
import EditorialPageHero from "@/components/EditorialPageHero";
import ConsultationCTA from "@/components/ConsultationCTA";
import { shroudAccessories } from "@/lib/shroud-accessories-data";

const shroudsPdf = "/accessories/cal-mantel-fireplace-shrouds.pdf";

export const metadata = {
  title: "Decorative Chimney Shrouds | California Mantel",
  description:
    "Decorative chimney shrouds — architectural metal crowns that finish the chimney top. Review available shroud designs and plan sizing with a California Mantel showroom.",
  alternates: { canonical: "/fireplaces/accessories" },
};

const highlights = [
  {
    label: "Exterior Finish",
    text: "Decorative shrouds add a finished architectural detail above the fireplace termination.",
  },
  {
    label: "Project Coordinated",
    text: "Sizing, clearances, roof conditions, and finish direction are confirmed with the showroom team.",
  },
  {
    label: "Design Options",
    text: "Use the shroud reference guide to compare profiles before finalizing the fireplace package.",
  },
];

export default function FireplaceAccessoriesPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Decorative Chimney Shrouds"
        title="Architectural crowns for a finished chimney top."
        description="A decorative chimney shroud conceals the fireplace termination in an architectural metal surround — completing the roofline the way a mantel completes the room."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
            <div>
              <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
                Deco Shrouds
              </p>
              <h2
                className="text-3xl md:text-4xl font-medium text-[color:var(--ink)] tracking-tight mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A small exterior detail with a large architectural effect.
              </h2>
              <p className="text-[color:var(--ink)]/60 leading-relaxed mb-8">
                Decorative fireplace shrouds help the termination feel intentional rather
                than purely mechanical. Bring roof photos, plans, or fireplace model details
                to your consultation and we&apos;ll help confirm the best path forward.
              </p>

              <div className="space-y-6 border-t border-[color:var(--sand-deep)] pt-7">
                {highlights.map((item) => (
                  <div key={item.label} className="grid grid-cols-[120px_1fr] gap-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent)]">
                      {item.label}
                    </p>
                    <p className="text-sm leading-relaxed text-[color:var(--ink)]/60">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="inline-block bg-[color:var(--ink)] text-white hover:bg-black px-7 py-3.5 text-xs uppercase tracking-[0.16em] text-center transition-colors"
                >
                  Plan Accessories
                </Link>
                <a
                  href={shroudsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-[color:var(--ink)]/20 text-[color:var(--ink)] hover:border-[color:var(--ink)] px-7 py-3.5 text-xs uppercase tracking-[0.16em] text-center transition-colors"
                >
                  Download Guide
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {shroudAccessories.slice(0, 4).map((shroud, i) => (
                <div key={shroud.slug} className="border border-[color:var(--sand-deep)] bg-[#F9F7F3] p-4">
                  <ZoomableImage
                    src={shroud.image}
                    alt={shroud.name}
                    thumbClassName="relative aspect-square bg-white w-full group cursor-zoom-in"
                    thumbImgClassName="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    thumbSizes="(max-width: 1024px) 50vw, 20vw"
                    priority={i < 2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F7F3] border-y border-[color:var(--sand-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
                Shroud Collection
              </p>
              <h2
                className="text-3xl md:text-4xl font-medium text-[color:var(--ink)] tracking-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Browse decorative shroud options.
              </h2>
            </div>
            <a
              href={shroudsPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--accent)] hover:text-[color:var(--ink)] transition-colors"
            >
              Download Full Guide
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {shroudAccessories.map((shroud) => (
              <article
                key={shroud.slug}
                className="group border border-[color:var(--sand-deep)] bg-white hover:border-[color:var(--accent)] hover:shadow-sm transition-all"
              >
                <ZoomableImage
                  src={shroud.image}
                  alt={shroud.name}
                  thumbClassName="relative aspect-[5/4] bg-stone-100 overflow-hidden w-full block cursor-zoom-in"
                  thumbImgClassName="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.03]"
                  thumbSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={false}
                />
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--accent)] mb-2">
                    Decorative Shroud
                  </p>
                  <h3
                    className="text-lg font-medium text-[color:var(--ink)]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {shroud.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink)]/55">
                    Review sizing and compatibility with the showroom team before final selection.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
