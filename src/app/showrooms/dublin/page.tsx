import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getShowroom, showroomSchema } from "@/lib/business-data";

import EditorialPageHero from "@/components/EditorialPageHero";
export const metadata = {
  title: "Dublin Fireplace & Mantel Showroom | California Mantel",
  description:
    "Visit our Dublin showroom at 6681 Sierra Ln Ste D, serving the Bay Area — gas & electric fireplaces, gas inserts, and custom mantels since 1987. Call (925) 436-1731.",
  alternates: { canonical: "/showrooms/dublin" },
};

const services = [
  "Gas fireplace & insert installation",
  "Fireplace repair & maintenance",
  "Electric fireplace installation (ideal for condos)",
  "Outdoor fireplace installation",
  "Custom mantel sales & installation",
];

const cities = [
  "Dublin", "Pleasanton", "San Ramon", "Livermore", "Danville",
  "Walnut Creek", "Concord", "Fremont", "Castro Valley",
  "Hayward", "San Leandro",
];

export default function DublinShowroomPage() {
  const showroom = getShowroom("dublin")!;
  return (
    <>
      <JsonLd data={showroomSchema(showroom)} />
      <EditorialPageHero
        eyebrow="Northern California"
        title="Dublin Showroom"
        description="A refined East Bay showroom for fireplace systems, mantel selections, and project guidance across Northern California."
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
                Our Dublin showroom brings the full California Mantel &amp; Fireplace
                experience to the Tri-Valley and greater East Bay. With nearly four
                decades of experience, our team of certified hearth professionals
                provides the same level of service and craftsmanship as our flagship
                Sacramento location.
              </p>
              <p>
                The showroom features live-burning fireplace displays, a custom mantel
                gallery, and experts who can help you design the perfect fireplace
                solution — whether you&apos;re upgrading an existing fireplace, converting
                from wood to gas, or installing a brand-new electric unit in a condo.
              </p>
              <p>
                Walk-ins are welcome Monday, Wednesday, and Friday from 10:00 AM to
                5:00 PM. The showroom is closed Tuesday, Thursday, and Saturday.
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
                <p className="text-stone-700">6681 Sierra Ln Ste D</p>
                <p className="text-stone-700">Dublin, CA 94568</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("6681 Sierra Ln Ste D, Dublin, CA 94568")}`} target="_blank" rel="noopener noreferrer" className="inline-block mt-1.5 text-[color:var(--accent)] hover:underline">Get Directions →</a>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Hours</p>
                <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-stone-700">
                  <span>Monday</span><span>10:00 AM–5:00 PM</span>
                  <span>Tuesday</span><span>Closed</span>
                  <span>Wednesday</span><span>10:00 AM–5:00 PM</span>
                  <span>Thursday</span><span>Closed</span>
                  <span>Friday</span><span>10:00 AM–5:00 PM</span>
                  <span>Saturday</span><span>Closed</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:9254361731" className="text-[color:var(--accent)] font-medium hover:text-[color:var(--ink)]">
                  (925) 436-1731
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[color:var(--accent)] text-white rounded-sm p-6">
            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              Plan Your Showroom Visit
            </h3>
            <p className="text-amber-100 text-sm mb-4">
              Visit Monday, Wednesday, or Friday, or submit a request before stopping by.
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
              <Link href="/showrooms/anaheim" className="block text-sm text-stone-700 hover:text-[color:var(--accent)] transition-colors">
                → Anaheim (Southern CA)
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
