import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnalyticsEvents from "@/components/AnalyticsEvents";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "California Mantel & Fireplace | Mantels & Fireplaces",
  description:
    "Aussie-American family-owned since 1987. We manufacture wood and precast concrete fireplace mantels and install gas & electric fireplaces across California and Nevada, including Reno & Lake Tahoe.",
  metadataBase: new URL("https://www.calmantel.com"),
  openGraph: {
    type: "website",
    url: "https://www.calmantel.com",
    siteName: "California Mantel & Fireplace",
    title: "California Mantel & Fireplace | Mantels & Fireplaces",
    description:
      "Aussie-American family-owned since 1987. Fireplace mantels, gas inserts & electric fireplaces across California and Nevada.",
    // og:image is supplied by src/app/opengraph-image.tsx (generated 1200×630).
  },
  twitter: {
    card: "summary_large_image",
    title: "California Mantel & Fireplace | Mantels & Fireplaces",
    description:
      "Aussie-American family-owned since 1987. Fireplace mantels, gas inserts & electric fireplaces across California and Nevada.",
    // twitter:image is supplied by src/app/twitter-image.tsx.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KQYNMMMCL0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQYNMMMCL0');
          `}
        </Script>
        <Script
          src="//cdn.callrail.com/companies/736627927/dec286ffc96a36928e01/12/swap.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col font-[var(--font-inter)]">
        <AnalyticsEvents />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
