import Link from "next/link";

export default function PricingCTA({
  title = "Plan your fireplace project with confidence.",
  description = "Share the project details you have now and our team will help shape the right mantel, fireplace, installation path, and starting range.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-[#F9F7F3] border-t border-[color:var(--sand-deep)] py-20 text-center">
      <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs mb-4">
        Begin With Clarity
      </p>
      <h2
        className="text-4xl md:text-5xl font-medium text-[color:var(--ink)] tracking-tight mb-5"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>
      <p className="text-[color:var(--ink)]/60 text-base max-w-xl mx-auto mb-9 leading-relaxed">
        {description}
      </p>
      <Link
        href="/estimate"
        className="inline-block bg-[color:var(--ink)] hover:bg-black text-white text-sm tracking-[0.18em] uppercase px-12 py-4 transition-colors"
      >
        Request Project Guidance
      </Link>
    </section>
  );
}
