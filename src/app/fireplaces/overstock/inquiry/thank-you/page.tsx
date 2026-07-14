import Link from "next/link";

export const metadata = {
  title: "Inquiry Received | California Mantel & Fireplace",
  robots: { index: false, follow: true },
};

export default function OverstockInquiryThankYouPage() {
  return (
    <main className="flex min-h-[65vh] items-center bg-[#F9F7F3] py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-[color:var(--accent)]">
          Inquiry Received
        </p>
        <h1
          className="mt-3 text-4xl font-medium text-[color:var(--ink)] sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Thank you for reaching out.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[color:var(--ink)]/58">
          Our team will review the selected overstock unit and follow up with current
          availability, condition, included components, and pricing.
        </p>
        <Link
          href="/fireplaces/overstock"
          className="mt-8 inline-block bg-[color:var(--ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent)]"
        >
          Return to Overstock Fireplaces
        </Link>
      </div>
    </main>
  );
}
