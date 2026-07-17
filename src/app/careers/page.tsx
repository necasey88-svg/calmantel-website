import EditorialPageHero from "@/components/EditorialPageHero";

const PAYCOM_CAREERS_URL =
  "https://www.paycomonline.net/v4/ats/web.php/portal/7FC7D2AB014AA895F79932078F729892/career-page";

export const metadata = {
  title: "Careers | California Mantel & Fireplace",
  description:
    "Explore current career opportunities with California Mantel & Fireplace and apply online through our Paycom career portal.",
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
              Browse available positions and submit your application through our secure Paycom career portal below.
            </p>
          </div>

          <div className="mx-auto max-w-4xl border border-[color:var(--sand-deep)] bg-white p-2 shadow-sm sm:p-4">
            <iframe
              src={PAYCOM_CAREERS_URL}
              title="California Mantel & Fireplace current job openings and application portal"
              loading="lazy"
              className="h-[800px] w-full border-0 sm:h-[900px]"
            />
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-[color:var(--ink)]/55">
            Having trouble viewing the application portal?{" "}
            <a
              href={PAYCOM_CAREERS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[color:var(--accent)] hover:underline"
            >
              Open the Paycom career page in a new window
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
