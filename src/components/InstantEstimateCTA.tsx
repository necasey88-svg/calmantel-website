import Link from "next/link";

export default function InstantEstimateCTA() {
  return (
    <section className="bg-[color:var(--ink)] py-16 text-center text-white">
      <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs mb-4">
        Know What You Need?
      </p>
      <h2
        className="text-3xl md:text-4xl font-medium text-white mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Get an Instant Online Estimate
      </h2>
      <p className="text-white/70 max-w-lg mx-auto mb-9 leading-relaxed">
        Select your fireplace model, pipe run, and options — our estimator will send a
        ballpark quote straight to your inbox in minutes.
      </p>
      <Link
        href="/instant-estimate"
        className="inline-block bg-white text-[color:var(--ink)] hover:bg-white/90 text-sm font-medium tracking-widest uppercase px-12 py-4 rounded-full transition-colors"
      >
        Get Instant Estimate
      </Link>
    </section>
  );
}
