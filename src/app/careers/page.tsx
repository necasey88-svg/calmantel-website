import EditorialPageHero from "@/components/EditorialPageHero";
import WorkableJobsEmbed from "@/components/WorkableJobsEmbed";

export const metadata = {
  title: "Careers | California Mantel & Fireplace",
  description:
    "Explore current career opportunities with California Mantel & Fireplace and apply online through our Workable job board.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Join Our Team"
        title="Build a career around craftsmanship and service."
        description="Explore current opportunities with California Mantel & Fireplace, a family-owned company serving homeowners, designers, builders, and trade professionals since 1987."
      />

      <section className="bg-[#F9F7F3] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[color:var(--accent)]">
              Current Openings
            </p>
            <h2
              className="mt-3 text-3xl font-medium text-[color:var(--ink)] sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Find your next opportunity.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink)]/60 sm:text-base">
              Browse open roles and submit your application through our job board below.
            </p>
          </div>

          <div className="mx-auto max-w-4xl border border-[color:var(--sand-deep)] bg-white p-2 shadow-sm sm:p-4">
            <WorkableJobsEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
