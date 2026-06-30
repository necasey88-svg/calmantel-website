import Link from "next/link";

export default function InstantEstimateCTA() {
  return (
    <section className="bg-amber-50 border-y border-amber-100 py-14 text-center">
      <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold mb-3">
        Know What You Need?
      </p>
      <h2
        className="text-2xl md:text-3xl font-bold text-stone-900 mb-3"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Get an Instant Online Estimate
      </h2>
      <p className="text-stone-600 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
        Select your fireplace model, pipe run, and options — our estimator will send a
        ballpark quote straight to your inbox in minutes.
      </p>
      <Link
        href="/instant-estimate"
        className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold tracking-widest uppercase px-12 py-4 rounded-full transition-colors"
      >
        Get Instant Estimate
      </Link>
    </section>
  );
}
