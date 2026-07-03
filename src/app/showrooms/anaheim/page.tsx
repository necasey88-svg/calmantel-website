import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getShowroom, showroomSchema } from "@/lib/business-data";

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
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/showrooms" className="hover:text-amber-400 transition-colors">
              Showrooms
            </Link>
            <span className="mx-2">›</span>
            <span className="text-stone-200">Anaheim</span>
          </nav>
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Southern California
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Anaheim Showroom
          </h1>
          <p className="text-stone-400 italic mb-6">
            &ldquo;Orange County&apos;s most complete hearth destination&rdquo;
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:7149087388"
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded font-semibold transition-colors"
            >
              (714) 908-7388
            </a>
            <Link
              href="/estimate"
              className="border border-white text-white hover:bg-white hover:text-stone-900 px-6 py-3 rounded font-semibold transition-colors"
            >
              Request Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2
              className="text-2xl font-bold text-stone-900 mb-4"
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
              className="text-2xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Services Offered
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-stone-600 text-sm">
                  <span className="text-amber-700 mt-0.5 flex-shrink-0 font-bold">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-2xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cities We Serve
            </h2>
            <div className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <span
                  key={c}
                  className="bg-stone-100 text-stone-600 text-sm px-3 py-1 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="border border-stone-200 rounded-xl p-6">
            <h3
              className="text-lg font-bold text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Location & Hours
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Address</p>
                <p className="text-stone-700">1430 S Anaheim Blvd</p>
                <p className="text-stone-700">Anaheim, CA 92805</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Hours</p>
                <p className="text-stone-700">Mon–Sat: 9:00 AM – 5:00 PM</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:7149087388" className="text-amber-700 font-semibold hover:text-amber-800">
                  (714) 908-7388
                </a>
              </div>
            </div>
          </div>

          <div className="bg-amber-700 text-white rounded-xl p-6">
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Free Estimate
            </h3>
            <p className="text-amber-100 text-sm mb-4">
              Tell us about your project and we&apos;ll provide a free estimate — in showroom or online.
            </p>
            <Link
              href="/estimate"
              className="block text-center bg-white text-amber-700 hover:bg-amber-50 px-5 py-2.5 rounded font-semibold text-sm transition-colors"
            >
              Request Estimate
            </Link>
          </div>

          <div className="border border-stone-200 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-3">
              Other Showrooms
            </h3>
            <div className="space-y-2">
              <Link href="/showrooms/dublin" className="block text-sm text-stone-700 hover:text-amber-700 transition-colors">
                → Dublin (Bay Area)
              </Link>
              <Link href="/showrooms/sacramento" className="block text-sm text-stone-700 hover:text-amber-700 transition-colors">
                → Sacramento (Northern CA)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
