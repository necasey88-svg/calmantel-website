import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getShowroom, showroomSchema } from "@/lib/business-data";

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
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/showrooms" className="hover:text-amber-400 transition-colors">
              Showrooms
            </Link>
            <span className="mx-2">›</span>
            <span className="text-stone-200">Dublin</span>
          </nav>
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Bay Area
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Dublin Showroom
          </h1>
          <p className="text-stone-400 italic mb-6">
            &ldquo;Serving the Tri-Valley and greater East Bay&rdquo;
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:9254361731"
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded font-semibold transition-colors"
            >
              (925) 436-1731
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
                Walk-ins are welcome Monday through Friday. Saturday visits require
                advance scheduling — please call or submit an estimate request to book
                your appointment.
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
                <span key={c} className="bg-stone-100 text-stone-600 text-sm px-3 py-1 rounded-full">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

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
                <p className="text-stone-700">6681 Sierra Ln Ste D</p>
                <p className="text-stone-700">Dublin, CA 94568</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Hours</p>
                <p className="text-stone-700">Mon–Fri: 8:30 AM – 5:00 PM</p>
                <p className="text-stone-700">Sat: By appointment</p>
                <p className="text-amber-700 text-xs mt-1">Sat: By appointment only</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:9254361731" className="text-amber-700 font-semibold hover:text-amber-800">
                  (925) 436-1731
                </a>
              </div>
            </div>
          </div>

          <div className="bg-amber-700 text-white rounded-xl p-6">
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              Book a Saturday Visit
            </h3>
            <p className="text-amber-100 text-sm mb-4">
              Saturday appointments are available — submit a request and we&apos;ll confirm your time.
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
              <Link href="/showrooms/anaheim" className="block text-sm text-stone-700 hover:text-amber-700 transition-colors">
                → Anaheim (Southern CA)
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
