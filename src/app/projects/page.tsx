import ProjectsGallery from "./ProjectsGallery";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import ConsultationCTA from "@/components/ConsultationCTA";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Projects | California Mantel & Fireplace",
  description:
    "Browse before-and-after fireplace transformation projects — gas inserts, mantel surrounds, and log sets installed across California and Nevada.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Real Homes / Real Transformations"
        title="A project gallery of finished focal points."
        description="Browse before-and-after fireplace transformations, mantel installations, gas inserts, masonry updates, and rooms shaped by thoughtful hearth design."
      />

      <ProjectsGallery />

      <ConsultationCTA />
      <InstantEstimateCTA />
    </>
  );
}
