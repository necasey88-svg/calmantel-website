import Script from "next/script";

export const metadata = {
  title: "Get an Instant Estimate | California Mantel & Fireplace",
  description:
    "Know your fireplace model? Use our online estimator to get a ballpark quote emailed to you instantly — select SKUs, pipe runs, and options.",
};

export default function InstantEstimatePage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Online Estimator
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Get an Instant Fireplace Estimate
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            Already know which fireplace model you want? Select your SKU, pipe run, and
            options below — we&apos;ll send a detailed ballpark quote straight to your inbox.
            Not sure yet?{" "}
            <a href="/booking" className="text-amber-400 hover:text-amber-300 underline">
              Book a free consultation
            </a>{" "}
            and our experts will walk you through it.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 min-h-[600px]">
        <div
          id="whyfire-app"
          data-settings='{"style":"pill","token":"81bab4d9-0a3a-4981-91a0-62c234e9e348","primaryColor":"#ec0807","secondaryColor":"#ffffff","accentColor":"#1c1c1c","hideFilters":false,"inheritFonts":true,"estimateFlow":"default","router":"hash"}'
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
