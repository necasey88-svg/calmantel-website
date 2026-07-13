import Script from "next/script";
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
