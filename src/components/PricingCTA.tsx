import Link from "next/link";

export default function PricingCTA() {
  return (
    <section className="py-20 text-center">
      <h2
        className="text-4xl md:text-5xl font-bold text-red-600 mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Need Pricing?
      </h2>
      <p className="text-stone-800 text-lg max-w-lg mx-auto mb-10">
        Get an estimate for your full Fireplace and custom Mantel project today.
      </p>
      <Link
        href="/estimate"
        className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-semibold tracking-widest uppercase px-16 py-5 rounded-full transition-colors"
      >
        Get a Project Estimate
      </Link>
    </section>
  );
}
