import ProjectsGallery from "./ProjectsGallery";
import PricingCTA from "@/components/PricingCTA";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata = {
  title: "Projects | California Mantel & Fireplace",
  description:
    "Browse before-and-after fireplace transformation projects — gas inserts, mantel surrounds, and log sets installed across California and Nevada.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Real Homes · Real Results
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Fireplace &amp; Mantel Project Gallery
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            From classic brick fireplaces converted to efficient gas inserts, to complete
            mantel surround installations — browse our before-and-after project portfolio
            and click any product to explore it further.
          </p>
        </div>
      </section>

      <ProjectsGallery />

      <ConsultationCTA />
      <PricingCTA />
    </>
  );
}
