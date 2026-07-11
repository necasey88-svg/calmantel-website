import Link from "next/link";
import EditorialPageHero from "@/components/EditorialPageHero";
import ConsultationCTA from "@/components/ConsultationCTA";

const shroudsPdf = "/accessories/cal-mantel-fireplace-shrouds.pdf";

export const metadata = {
  title: "Fireplace Shrouds & Accessories | California Mantel",
  description:
    "Decorative fireplace shrouds and accessory details for custom fireplace projects. Review available shroud concepts and plan sizing with a California Mantel showroom.",
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
        eyebrow="Fireplace Accessories"
        title="Decorative shrouds for a finished exterior detail."
        description="Complete the fireplace system with accessory details selected around the architecture, roofline, and finish expectations of the project."
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

            <div className="border border-[color:var(--sand-deep)] bg-[#F9F7F3]">
              <div className="px-5 py-4 border-b border-[color:var(--sand-deep)] flex items-center justify-between gap-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink)]/55">
                  Shroud Reference Guide
                </p>
                <a
                  href={shroudsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--accent)] hover:text-[color:var(--accent-dark)] transition-colors"
                >
                  Open PDF
                </a>
              </div>
              <object
                data={`${shroudsPdf}#toolbar=0&navpanes=0`}
                type="application/pdf"
                className="block w-full h-[620px] bg-white"
              >
                <div className="p-8 text-center">
                  <p className="text-sm text-[color:var(--ink)]/60 mb-5">
                    Your browser cannot preview this PDF inline.
                  </p>
                  <a
                    href={shroudsPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[color:var(--ink)] text-white px-6 py-3 text-xs uppercase tracking-[0.16em]"
                  >
                    Open Shroud Guide
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F7F3] border-y border-[color:var(--sand-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Confirm fireplace model and termination requirements.",
              "Review roofline, exterior material, and desired finish direction.",
              "Coordinate final shroud selection with the full fireplace package.",
            ].map((step, index) => (
              <div key={step} className="border-t border-[color:var(--sand-deep)] pt-5">
                <p className="text-4xl text-[color:var(--accent)]/35 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  0{index + 1}
                </p>
                <p className="text-sm leading-relaxed text-[color:var(--ink)]/60">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
