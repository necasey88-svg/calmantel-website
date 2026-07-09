import Link from "next/link";

export default function InstantEstimateCTA() {
  return (
    <section className="bg-[color:var(--ink)] py-16 text-center text-white">
      <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs mb-4">
        Begin With Clarity
      </p>
      <h2
        className="text-3xl md:text-4xl font-medium text-white mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Start with a guided project estimate.
      </h2>
      <p className="text-white/70 max-w-lg mx-auto mb-9 leading-relaxed">
        Share a few project details and receive a thoughtful starting range before your
        showroom consultation.
      </p>
      <Link
        href="/instant-estimate"
        className="inline-block bg-white text-[color:var(--ink)] hover:bg-white/90 text-sm tracking-[0.18em] uppercase px-12 py-4 transition-colors"
      >
        Begin Estimate
      </Link>
    </section>
  );
}
