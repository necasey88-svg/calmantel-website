import type { Metadata } from "next";
import EstimateForm from "@/components/EstimateForm";

type EstimatePageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Product-page CTAs link here as `/estimate?product=<name>` purely to prefill
// the form — every product on the site produces its own query-variant URL,
// which Google was crawling as if each were a distinct page (GSC: "Crawled -
// currently not indexed"). The bare /estimate URL is the one real page and
// stays indexable; any query string on it is a prefill helper, not distinct
// content, so it gets noindex,follow (still allowing Google to follow links
// on the page — there's nothing here worth deindexing wholesale).
export async function generateMetadata({
  searchParams,
}: EstimatePageProps): Promise<Metadata> {
  const params = await searchParams;
  const hasQueryParams = Object.keys(params).length > 0;

  return {
    title: "Request a Project Estimate | California Mantel & Fireplace",
    description:
      "Tell us about your fireplace or mantel project and upload photos to get a free, no-obligation estimate from California Mantel & Fireplace — in showroom or online.",
    alternates: { canonical: "/estimate" },
    ...(hasQueryParams ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function EstimatePage({ searchParams }: EstimatePageProps) {
  const params = await searchParams;
  const productParam = params.product;
  const productInterest =
    (Array.isArray(productParam) ? productParam[0] : productParam)?.trim() || "";

  return <EstimateForm initialProductInterest={productInterest} />;
}
