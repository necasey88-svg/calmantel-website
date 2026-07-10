import Link from "next/link";

export const metadata = {
  title: "Page Not Found | California Mantel & Fireplace",
  robots: { index: false },
};

const links = [
  { href: "/mantels", label: "Browse Mantels" },
  { href: "/fireplaces", label: "Shop Fireplaces" },
  { href: "/showrooms", label: "Find a Showroom" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs mb-4">
          404 / Page Not Found
        </p>
        <h1
          className="text-4xl md:text-5xl font-medium text-[color:var(--ink)] mb-5"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          We couldn&apos;t find that page
        </h1>
        <p className="text-[color:var(--ink)]/60 max-w-xl mx-auto mb-10 leading-relaxed">
          The page may have moved or no longer exists. Here are a few places to
          pick up where you left off, or head back to our{" "}
          <Link href="/" className="text-[color:var(--accent)] hover:text-[color:var(--ink)] underline">
            home page
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border border-[color:var(--ink)]/25 text-[color:var(--ink)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] px-6 py-3 text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
