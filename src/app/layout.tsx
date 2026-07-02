import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "California Mantel & Fireplace | Mantels, Gas & Electric Fireplaces",
  description:
    "Aussie-American family-owned since 1987. We manufacture wood and precast concrete fireplace mantels and install gas & electric fireplaces across California and Nevada, including Reno & Lake Tahoe.",
  metadataBase: new URL("https://calmantel.com"),
  openGraph: {
    type: "website",
    url: "https://calmantel.com",
    siteName: "California Mantel & Fireplace",
    title: "California Mantel & Fireplace | Mantels, Gas & Electric Fireplaces",
    description:
      "Aussie-American family-owned since 1987. Fireplace mantels, gas inserts & electric fireplaces across California and Nevada.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "California Mantel & Fireplace showroom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "California Mantel & Fireplace | Mantels, Gas & Electric Fireplaces",
    description:
      "Aussie-American family-owned since 1987. Fireplace mantels, gas inserts & electric fireplaces across California and Nevada.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-[var(--font-inter)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
