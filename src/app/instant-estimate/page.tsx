import Script from "next/script";
import Link from "next/link";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Get an Instant Pricing Guide | California Mantel & Fireplace",
  description:
    "Know your fireplace model? Use our online estimator to get a ballpark quote emailed to you instantly — select SKUs, pipe runs, and options.",
  alternates: { canonical: "/instant-estimate" },
};

export default function InstantEstimatePage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Guided Estimate"
        title="Begin with a thoughtful project range."
        description="If you already know the fireplace model or options you prefer, use the estimator below. If not, a showroom consultation will help narrow the right path."
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 min-h-[600px]">
        <div className="mb-8 grid gap-4 border border-[color:var(--sand-deep)] bg-[#F9F7F3] p-5 text-sm text-[color:var(--ink)]/62 md:grid-cols-[1.2fr_0.8fr] md:p-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[color:var(--accent)]">
              Best For Known Models
            </p>
            <p className="mt-2 leading-relaxed">
              This tool works best when you already know the fireplace model, options, or
              dimensions. If you are comparing styles or need installation guidance, our
              team can usually get you to the right answer faster.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row md:flex-col">
            <Link
              href="/contact"
              className="bg-[color:var(--ink)] px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[color:var(--accent)]"
            >
              Ask the Team
            </Link>
            <Link
              href="/booking"
              className="border border-[color:var(--ink)]/20 px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
        <div
          id="whyfire-app"
          data-settings='{"style":"pill","token":"81bab4d9-0a3a-4981-91a0-62c234e9e348","primaryColor":"#9a7b53","secondaryColor":"#ffffff","accentColor":"#211d18","hideFilters":false,"inheritFonts":true,"estimateFlow":"default","router":"hash"}'
        />
        <Script
          src="https://whyfire.com/wp-content/script/whyfire-app.js"
          strategy="afterInteractive"
          type="module"
        />
      </section>
    </>
  );
}
