import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getShowroom, showroomSchema } from "@/lib/business-data";

import EditorialPageHero from "@/components/EditorialPageHero";
export const metadata = {
  title: "Sacramento Fireplace & Mantel Showroom | California Mantel",
  description:
    "Visit our Sacramento showroom at 4141 N Freeway Blvd, serving Northern California — gas & electric fireplaces, custom mantels, and in-house manufacturing since 1987. Call (916) 665-0627.",
  alternates: { canonical: "/showrooms/sacramento" },
};

const services = [
  "Gas fireplace installation & service",
  "Electric fireplace installation",
  "Outdoor fireplace installation",
  "Fireplace repair & maintenance (all major brands)",
  "Custom mantel sales & installation",
  "In-house manufacturing & installation",
];

const cities = [
  "Sacramento", "Roseville", "Elk Grove", "Folsom", "Rancho Cordova",
  "Citrus Heights", "Lincoln", "Auburn", "Davis", "Woodland",
];

export default function SacramentoShowroomPage() {
  const showroom = getShowroom("sacramento")!;
  return (
    <>
      <JsonLd data={showroomSchema(showroom)} />
      <EditorialPageHero
        eyebrow="Northern California"
        title="Sacramento Showroom"
        description="A design-forward showroom serving the Sacramento region with fireplace, mantel, and installation expertise."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                Our Sacramento showroom is our corporate headquarters and the heart of
                California Mantel &amp; Fireplace. Established in 1987, this is our
                flagship location — home to our largest team of certified hearth
                consultants, our most extensive live-burning display gallery, and our
                full custom mantel manufacturing operation.
              </p>
              <p>
                When you visit Sacramento, you&apos;re visiting the source. You can meet
                the artisans who build our mantels, walk through a wide variety of
                live-burning gas and electric fireplace displays, and work directly
                with our most experienced designers to plan your project.
              </p>
              <p>
                Factory-trained and licensed installers handle every project from
                design through final inspection — all in-house, all accountable, all
                backed by 38 years of experience.
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
                <span key={c} className="bg-stone-100 text-stone-600 text-sm px-3 py-1 rounded-sm">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

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
                <p className="text-stone-700">4141 N Freeway Blvd</p>
                <p className="text-stone-700">Sacramento, CA 95834</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("4141 N Freeway Blvd, Sacramento, CA 95834")}`} target="_blank" rel="noopener noreferrer" className="inline-block mt-1.5 text-[color:var(--accent)] hover:underline">Get Directions →</a>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Hours</p>
                <p className="text-stone-700">Mon–Sat: 8:30 AM – 5:00 PM</p>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:9166650627" className="text-[color:var(--accent)] font-medium hover:text-[color:var(--ink)]">
                  (916) 665-0627
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[color:var(--accent)] text-white rounded-sm p-6">
            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              Project Estimate
            </h3>
            <p className="text-amber-100 text-sm mb-4">
              Start your project with a private consultation from our Sacramento team.
            </p>
            <Link
              href="/estimate"
              className="block text-center bg-white text-[color:var(--accent)] hover:bg-[#F9F7F3] px-5 py-2.5 rounded font-medium text-sm transition-colors"
            >
              Request Project Estimate
            </Link>
          </div>

          <div className="border border-stone-200 rounded-sm p-6">
            <h3 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-3">
              Other Showrooms
            </h3>
            <div className="space-y-2">
              <Link href="/showrooms/anaheim" className="block text-sm text-stone-700 hover:text-[color:var(--accent)] transition-colors">
                → Anaheim (Southern CA)
              </Link>
              <Link href="/showrooms/dublin" className="block text-sm text-stone-700 hover:text-[color:var(--accent)] transition-colors">
                → Dublin (Bay Area)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
