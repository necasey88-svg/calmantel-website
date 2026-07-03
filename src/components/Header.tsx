"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const mantelsLinks = [
  { label: "All Mantels", href: "/mantels" },
  { label: "Contemporary", href: "/mantels/contemporary" },
  { label: "Traditional", href: "/mantels/traditional" },
  { label: "Beams", href: "/mantels/beams" },
  { label: "Hearths", href: "/mantels/hearths" },
  { label: "Overmantels", href: "/mantels/overmantels" },
  { label: "Wood Surrounds", href: "/mantels/wood-surrounds" },
  { label: "Colors & Finishes", href: "/mantels/colors-finishes" },
];

const fireplaceLinks = [
  { label: "All Fireplaces", href: "/fireplaces" },
  { label: "Gas Inserts", href: "/fireplaces/gas-inserts" },
  { label: "Electric Fireplaces", href: "/fireplaces/electric" },
  { label: "Outdoor Fireplaces", href: "/fireplaces/outdoor" },
  { label: "Heat & Glo", href: "/fireplaces/heat-and-glo" },
  { label: "Napoleon", href: "/fireplaces/napoleon" },
  { label: "Mendota", href: "/fireplaces/mendota" },
  { label: "Ortal", href: "/fireplaces/ortal" },
  { label: "Flare", href: "/fireplaces/flare" },
  { label: "Isokern", href: "/fireplaces/isokern" },
  { label: "Overstock Sale", href: "/fireplaces/overstock" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mantelsOpen, setMantelsOpen] = useState(false);
  const [fireplaceOpen, setFireplaceOpen] = useState(false);
  const [masonryOpen, setMasonryOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#8B4513] text-white text-sm text-center py-1.5 px-4">
        Showrooms in Anaheim · Dublin · Sacramento &nbsp;|&nbsp;
        <a href="tel:7149087388" className="underline hover:no-underline">
          (714) 908-7388
        </a>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="California Mantel & Fireplace, Inc."
              width={220}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Mantels dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMantelsOpen(true)}
              onMouseLeave={() => setMantelsOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#8B4513] font-medium py-4 transition-colors">
                Mantels
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mantelsOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 rounded-b-md w-52 py-1 z-50">
                  {mantelsLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F0EB] hover:text-[#8B4513] transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Fireplaces dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setFireplaceOpen(true)}
              onMouseLeave={() => setFireplaceOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#8B4513] font-medium py-4 transition-colors">
                Fireplaces
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {fireplaceOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 rounded-b-md w-52 py-1 z-50">
                  {fireplaceLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F0EB] hover:text-[#8B4513] transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/projects" className="text-gray-700 hover:text-[#8B4513] font-medium transition-colors">
              Projects
            </Link>
            {/* Masonry dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMasonryOpen(true)}
              onMouseLeave={() => setMasonryOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#8B4513] font-medium py-4 transition-colors">
                Masonry
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {masonryOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 rounded-b-md w-52 py-1 z-50">
                  <Link href="/masonry-new-page" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F0EB] hover:text-[#8B4513] transition-colors" onClick={() => setMasonryOpen(false)}>Masonry Services</Link>
                  <Link href="/masonry-gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F0EB] hover:text-[#8B4513] transition-colors" onClick={() => setMasonryOpen(false)}>Project Gallery</Link>
                </div>
              )}
            </div>
            <Link href="/showrooms" className="text-gray-700 hover:text-[#8B4513] font-medium transition-colors">
              Showrooms
            </Link>
            <Link href="/insights" className="text-gray-700 hover:text-[#8B4513] font-medium transition-colors">
              Insights
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#8B4513] font-medium transition-colors">
              About Us
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/instant-estimate"
              className="border border-[#8B4513] text-[#8B4513] px-4 py-2 rounded text-sm font-semibold hover:bg-[#8B4513] hover:text-white transition-colors"
            >
              INSTANT ESTIMATE
            </Link>
            <a
              href="https://outlook.office.com/book/CaliforniaMantelFireplace@calmantel.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8B4513] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[#7a3c10] transition-colors"
            >
              BOOK CONSULTATION
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <div className="py-2 font-semibold text-[#8B4513]">Mantels</div>
          {mantelsLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block py-1.5 pl-3 text-sm text-gray-700" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="py-2 font-semibold text-[#8B4513] mt-2">Fireplaces</div>
          {fireplaceLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block py-1.5 pl-3 text-sm text-gray-700" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            {[
              { label: "Projects", href: "/projects" },
              { label: "Masonry Services", href: "/masonry-new-page" },
              { label: "Masonry Gallery", href: "/masonry-gallery" },
              { label: "Showrooms", href: "/showrooms" },
              { label: "Insights", href: "/insights" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="py-1.5 font-medium text-gray-700" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              href="/instant-estimate"
              className="mt-2 border border-[#8B4513] text-[#8B4513] text-center py-2.5 rounded font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              INSTANT ESTIMATE
            </Link>
            <a
              href="https://outlook.office.com/book/CaliforniaMantelFireplace@calmantel.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8B4513] text-white text-center py-2.5 rounded font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              BOOK CONSULTATION
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
