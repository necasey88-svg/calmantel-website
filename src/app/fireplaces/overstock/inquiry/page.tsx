import Link from "next/link";

export const metadata = {
  title: "Overstock Fireplace Inquiry | California Mantel & Fireplace",
  description:
    "Ask California Mantel & Fireplace about availability, condition, included components, and pricing for an overstock fireplace unit.",
  robots: { index: false, follow: true },
};

type InquiryPageProps = {
  searchParams: Promise<{
    product?: string | string[];
    location?: string | string[];
  }>;
};

export default async function OverstockInquiryPage({
  searchParams,
}: InquiryPageProps) {
  const params = await searchParams;
  const productParam = params.product;
  const locationParam = params.location;
  const product =
    (Array.isArray(productParam) ? productParam[0] : productParam)?.trim() ||
    "General Overstock Inquiry";
  const location =
    (Array.isArray(locationParam) ? locationParam[0] : locationParam)?.trim() ||
    "Sacramento Warehouse";

  return (
    <main className="bg-[#F9F7F3] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-[color:var(--ink)]/50">
          <Link
            href="/fireplaces/overstock"
            className="transition-colors hover:text-[color:var(--accent)]"
          >
            Overstock Fireplaces
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[color:var(--ink)]/75">Unit Inquiry</span>
        </nav>

        <div className="border border-[color:var(--sand-deep)] bg-white p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[color:var(--accent)]">
            Limited Availability
          </p>
          <h1
            className="mt-3 text-4xl font-medium leading-tight text-[color:var(--ink)] sm:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ask about this unit.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--ink)]/58">
            Tell us how we can help. Our team will confirm current availability,
            condition, included components, pricing, and installation compatibility.
          </p>

          <div className="mt-8 border border-[color:var(--sand-deep)] bg-[#F9F7F3] px-5 py-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink)]/45">
                  Selected Overstock SKU
                </p>
                <p className="mt-2 break-words font-mono text-sm font-medium text-[color:var(--ink)]">
                  {product}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink)]/45">
                  Location
                </p>
                <p className="mt-2 text-sm font-medium text-[color:var(--ink)]">{location}</p>
              </div>
            </div>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-8 space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="b1598619-2b9b-4e72-b8da-64815d1f9037"
            />
            <input
              type="hidden"
              name="subject"
              value={`Overstock Fireplace Inquiry — ${product}`}
            />
            <input
              type="hidden"
              name="from_name"
              value="California Mantel & Fireplace Website"
            />
            <input type="hidden" name="Overstock SKU" value={product} />
            <input type="hidden" name="Location" value={location} />
            <input
              type="hidden"
              name="redirect"
              value="https://www.calmantel.com/fireplaces/overstock/inquiry/thank-you"
            />
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label
                htmlFor="overstock-name"
                className="mb-2 block text-sm font-medium text-[color:var(--ink)]"
              >
                Name
              </label>
              <input
                id="overstock-name"
                type="text"
                name="name"
                autoComplete="name"
                required
                className="w-full border border-[color:var(--sand-deep)] bg-white px-4 py-3 text-[color:var(--ink)] outline-none transition-colors focus:border-[color:var(--accent)]"
              />
            </div>

            <div>
              <label
                htmlFor="overstock-email"
                className="mb-2 block text-sm font-medium text-[color:var(--ink)]"
              >
                Email
              </label>
              <input
                id="overstock-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                className="w-full border border-[color:var(--sand-deep)] bg-white px-4 py-3 text-[color:var(--ink)] outline-none transition-colors focus:border-[color:var(--accent)]"
              />
            </div>

            <div>
              <label
                htmlFor="overstock-message"
                className="mb-2 block text-sm font-medium text-[color:var(--ink)]"
              >
                Message
              </label>
              <textarea
                id="overstock-message"
                name="message"
                rows={6}
                required
                defaultValue={`I'm interested in overstock unit ${product} at the ${location}. Please send availability and pricing information.`}
                className="w-full resize-y border border-[color:var(--sand-deep)] bg-white px-4 py-3 text-[color:var(--ink)] outline-none transition-colors focus:border-[color:var(--accent)]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent)] sm:w-auto"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
