// The estimate page itself is a client component (interactive form), so its
// metadata lives here in a server-component layout wrapper.
export const metadata = {
  title: "Request a Free Estimate | California Mantel & Fireplace",
  description:
    "Tell us about your fireplace or mantel project and upload photos to get a free, no-obligation estimate from California Mantel & Fireplace — in showroom or online.",
  alternates: { canonical: "/estimate" },
};

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
