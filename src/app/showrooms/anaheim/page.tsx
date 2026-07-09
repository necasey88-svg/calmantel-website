import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getShowroom, showroomSchema } from "@/lib/business-data";

import EditorialPageHero from "@/components/EditorialPageHero";
export const metadata = {
  title: "Anaheim Fireplace & Mantel Showroom | California Mantel",
  description:
    "Visit our Anaheim showroom at 1430 S Anaheim Blvd — Orange County's most complete hearth destination. Gas & electric fireplaces, custom mantels, and masonry since 1987. Call (714) 908-7388.",
  alternates: { canonical: "/showrooms/anaheim" },
};

const services = [
  "Gas fireplace installation & service",
  "Electric fireplace installation",
  "Outdoor fireplace installation",
  "Custom mantel manufacturing & installation",
  "Fireplace repair & maintenance",
  "Masonry services (exclusively at this location)",
];

const cities = [
  "Anaheim", "Orange", "Irvine", "Fullerton", "Yorba Linda",
  "Garden Grove", "Tustin", "Santa Ana", "Brea", "Placentia",
  "Los Angeles County", "Riverside County", "San Diego County",
];

export default function AnaheimShowroomPage() {
  const showroom = getShowroom("anaheim")!;
  return (
    <>
      <JsonLd data={showroomSchema(showroom)} />
      <EditorialPageHero
        eyebrow="Southern California"
        title="Anaheim Showroom"
        description="Orange County's original hearth destination for live-burning fireplace displays, custom mantels, and full masonry services."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2
              className="text-2xl font-medium text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              About This Showroom
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Our Anaheim showroom is Southern California&apos;s original California Mantel &amp;
                Fireplace location, serving Orange County homeowners and developers since 1987.
                As a family-owned operation, we maintain full project oversight from initial
                consultation through final inspection.
              </p>
              <p>
                The showroom features live-burning gas fireplace displays, a full custom
                mantel gallery, and a team of licensed, certified hearth professionals
                ready to help you design the perfect fireplace for your home.
              </p>
              <p>
                Anaheim is our only location offering masonry services — including
                brick, stone, and Rumford-style fireplace construction for new builds
                and major renovations.
              </p>
            </div>
          </div>

          <div>
            <h2
              className="text-2xl font-medium text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Services Offered
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-stone-600 text-sm">
                  <span className="text-[color:var(--accent)] mt-0.5 flex-shrink-0 font-medium">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-2xl font-medium text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cities We Serve
            </h2>
            <div className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <span
                  key={c}
                  className="bg-stone-100 text-stone-600 text-sm px-3 py-1 rounded-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="border border-stone-200 rounded-sm p-6">
            <h3
              className="text-lg font-medium text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Location & Hours
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Address</p>
                <p className="text-stone-700">1430 S Anaheim Blvd</p>
                <p className="text-stone-700">Anaheim, CA 92805</p>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Hours</p>
                <p className="text-stone-700">Mon–Sat: 9:00 AM – 5:00 PM</p>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:7149087388" className="text-[color:var(--accent)] font-medium hover:text-[color:var(--ink)]">
                  (714) 908-7388
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[color:var(--accent)] text-white rounded-sm p-6">
            <h3
              className="text-lg font-medium mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Project Estimate
            </h3>
            <p className="text-amber-100 text-sm mb-4">
              Tell us about your project and we&apos;ll provide a project estimate — in showroom or online.
            </p>
            <Link
              href="/estimate"
              className="block text-center bg-white text-[color:var(--accent)] hover:bg-amber-50 px-5 py-2.5 rounded font-medium text-sm transition-colors"
            >
              Request Project Estimate
            </Link>
          </div>

          <div className="border border-stone-200 rounded-sm p-6">
            <h3 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-3">
              Other Showrooms
            </h3>
            <div className="space-y-2">
              <Link href="/showrooms/dublin" className="block text-sm text-stone-700 hover:text-[color:var(--accent)] transition-colors">
                → Dublin (Bay Area)
              </Link>
              <Link href="/showrooms/sacramento" className="block text-sm text-stone-700 hover:text-[color:var(--accent)] transition-colors">
                → Sacramento (Northern CA)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
