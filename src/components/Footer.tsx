import Link from "next/link";
import Image from "next/image";

const showrooms = [
  {
    city: "Sacramento",
    address: "4141 N Freeway Blvd, Sacramento, CA 95834",
    hours: "Mon–Sat: 8:30 AM – 5:00 PM",
    phone: "(916) 665-0627",
    tel: "9166650627",
  },
  {
    city: "Anaheim",
    address: "1430 S Anaheim Blvd, Anaheim, CA 92805",
    hours: "Mon–Sat: 9:00 AM – 5:00 PM",
    phone: "(714) 908-7388",
    tel: "7149087388",
  },
  {
    city: "Dublin",
    address: "6681 Sierra Ln Ste D, Dublin, CA 94568",
    hours: "Mon–Fri: 8:30 AM – 5:00 PM · Sat by appt",
    phone: "(925) 436-1731",
    tel: "9254361731",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logo.png"
              alt="California Mantel & Fireplace, Inc."
              width={180}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Aussie-American family-owned and operated since 1987. Manufacturing mantels
            and installing gas & electric fireplaces across California and Nevada, including Reno & Lake Tahoe.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Mantels", href: "/mantels" },
              { label: "Fireplaces", href: "/fireplaces" },
              { label: "Projects", href: "/projects" },
              { label: "Showrooms", href: "/showrooms" },
              { label: "Insights", href: "/insights" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Request Estimate", href: "/estimate" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[#C8922A] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Showrooms */}
        <div className="md:col-span-2">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Showrooms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            {showrooms.map((s) => (
              <div key={s.city}>
                <p className="text-white font-medium mb-1">{s.city}</p>
                <p className="text-gray-400 leading-relaxed">{s.address}</p>
                <p className="text-gray-400 mt-1">{s.hours}</p>
                <a href={`tel:${s.tel}`} className="text-[#C8922A] hover:text-white transition-colors mt-1 block">
                  {s.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} California Mantel & Fireplace. All rights reserved.
      </div>
    </footer>
  );
}
