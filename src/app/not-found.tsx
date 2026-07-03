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
    <section className="bg-stone-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-4">
          404 — Page Not Found
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-5"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          We couldn&apos;t find that page
        </h1>
        <p className="text-stone-300 max-w-xl mx-auto mb-10 leading-relaxed">
          The page may have moved or no longer exists. Here are a few places to pick up
          where you left off — or head back to our{" "}
          <Link href="/" className="text-amber-400 hover:text-amber-300 underline">
            home page
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border border-white/40 hover:border-amber-400 hover:text-amber-400 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
