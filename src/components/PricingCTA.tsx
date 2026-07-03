import Link from "next/link";

export default function PricingCTA() {
  return (
    <section className="bg-stone-50 border-t border-stone-100 py-16 text-center">
      <p className="text-amber-700 uppercase tracking-widest text-xs font-semibold mb-3">
        Ready to Get Started?
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Need Pricing?
      </h2>
      <p className="text-stone-500 text-base max-w-md mx-auto mb-8 leading-relaxed">
        Get an estimate for your full fireplace and custom mantel project today.
      </p>
      <Link
        href="/estimate"
        className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold tracking-widest uppercase px-12 py-4 rounded-full transition-colors"
      >
        Get a Project Estimate
      </Link>
    </section>
  );
}
