"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type MenuLink = {
  label: string;
  href: string;
  description?: string;
};

type MegaMenuProps = {
  label: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  featured: {
    title: string;
    description: string;
    href: string;
    image: string;
  };
  columns: {
    heading: string;
    links: MenuLink[];
  }[];
};

const mantelsMenu: MegaMenuProps["columns"] = [
  {
    heading: "Mantel Styles",
    links: [
      { label: "Contemporary", href: "/mantels/contemporary", description: "Clean architectural surrounds" },
      { label: "Traditional", href: "/mantels/traditional", description: "Classic profiles and formal rooms" },
      { label: "Wood Surrounds", href: "/mantels/wood-surrounds", description: "Warmth, grain, and architectural detail" },
      { label: "Overmantels", href: "/mantels/overmantels", description: "Full-height focal point walls" },
    ],
  },
  {
    heading: "Details",
    links: [
      { label: "Beams", href: "/mantels/beams", description: "Rustic and transitional wood mantels" },
      { label: "Hearths", href: "/mantels/hearths", description: "Stone and precast hearth pieces" },
      { label: "Colors & Finishes", href: "/mantels/colors-finishes", description: "Precast colors and surface textures" },
      { label: "All Mantels", href: "/mantels", description: "Browse the full mantel collection" },
    ],
  },
];

const fireplaceMenu: MegaMenuProps["columns"] = [
  {
    heading: "Shop By Project",
    links: [
      { label: "Gas Inserts", href: "/fireplaces/gas-inserts", description: "Convert an existing fireplace" },
      { label: "Electric Fireplaces", href: "/fireplaces/electric", description: "Flexible installs without venting" },
      { label: "Outdoor Fireplaces", href: "/fireplaces/outdoor", description: "Fire features for outdoor living" },
      { label: "New Construction Systems", href: "/fireplaces", description: "Fireplaces planned with framing and venting" },
    ],
  },
  {
    heading: "Featured Brands",
    links: [
      { label: "Heat & Glo", href: "/fireplaces/heat-and-glo", description: "Premium gas fireplaces and inserts" },
      { label: "Mendota", href: "/fireplaces/mendota", description: "High-performance gas fire views" },
      { label: "Napoleon", href: "/fireplaces/napoleon", description: "Gas, electric, and luxury linear units" },
      { label: "Ortal", href: "/fireplaces/ortal", description: "Frameless architectural fireplaces" },
    ],
  },
];

const masonryMenu: MegaMenuProps["columns"] = [
  {
    heading: "Masonry",
    links: [
      { label: "Masonry Services", href: "/masonry-new-page", description: "Stone, brick, tile, and precast work" },
      { label: "Masonry Gallery", href: "/masonry-gallery", description: "Commercial, exterior, and fireplace projects" },
      { label: "Projects", href: "/projects", description: "Before/after and new construction work" },
      { label: "Showrooms", href: "/showrooms", description: "Bring plans and photos to our team" },
    ],
  },
];

const mobileGroups = [
  { heading: "Mantels", links: mantelsMenu.flatMap((group) => group.links) },
  { heading: "Fireplaces", links: fireplaceMenu.flatMap((group) => group.links) },
  { heading: "Masonry", links: masonryMenu.flatMap((group) => group.links) },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function Chevron() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function MegaMenu({ label, open, setOpen, featured, columns }: MegaMenuProps) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-[color:var(--ink)]/70 hover:text-[color:var(--ink)] text-[11px] uppercase tracking-[0.18em] py-4 transition-colors">
        {label}
        <Chevron />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-[#F9F7F3] border border-[color:var(--sand-deep)] shadow-xl z-50">
          <div className="grid grid-cols-[280px_1fr]">
            <Link href={featured.href} className="group block border-r border-[color:var(--sand-deep)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--accent)] mb-2">
                  Featured
                </p>
                <h3
                  className="text-xl font-medium text-[color:var(--ink)] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {featured.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--ink)]/60">
                  {featured.description}
                </p>
              </div>
            </Link>
            <div className="grid grid-cols-2 gap-8 p-8">
              {columns.map((column) => (
                <div key={column.heading}>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--ink)]/40 mb-4">
                    {column.heading}
                  </p>
                  <div className="space-y-4">
                    {column.links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block group"
                        onClick={() => setOpen(false)}
                      >
                        <span className="block text-sm font-medium text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="block mt-1 text-xs leading-relaxed text-[color:var(--ink)]/50">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mantelsOpen, setMantelsOpen] = useState(false);
  const [fireplaceOpen, setFireplaceOpen] = useState(false);
  const [masonryOpen, setMasonryOpen] = useState(false);

  return (
    <header className="bg-[#F9F7F3]/95 backdrop-blur sticky top-0 z-50 border-b border-[color:var(--sand-deep)]">
      <div className="bg-[color:var(--ink)] text-white/70 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.22em] text-center py-2 px-4 flex flex-col sm:block gap-1">
        <span>Anaheim / Dublin / Sacramento showrooms</span>
        <span className="hidden sm:inline mx-3 text-white/25">|</span>
        <a href="tel:7149087388" className="hover:text-white transition-colors tracking-[0.16em]">
          (714) 908-7388
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 gap-6">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="California Mantel & Fireplace, Inc."
              width={240}
              height={66}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex flex-1 justify-center items-center gap-7">
            <MegaMenu
              label="Mantels"
              open={mantelsOpen}
              setOpen={setMantelsOpen}
              featured={{
                title: "Custom Mantel Collection",
                description: "Precast, wood, and overmantel designs selected around the architecture of the room.",
                href: "/mantels",
                image: "/mantels/bolte-fv46.png",
              }}
              columns={mantelsMenu}
            />
            <MegaMenu
              label="Fireplaces"
              open={fireplaceOpen}
              setOpen={setFireplaceOpen}
              featured={{
                title: "Fireplace Systems",
                description: "Gas, electric, outdoor, and new-construction fireplaces planned around the project.",
                href: "/fireplaces",
                image: "/brands/ortal/room-mountain-cabin.jpg",
              }}
              columns={fireplaceMenu}
            />
            <MegaMenu
              label="Masonry"
              open={masonryOpen}
              setOpen={setMasonryOpen}
              featured={{
                title: "Masonry & Precast Work",
                description: "Exterior facades, brick, stone, tile, and fireplace masonry with project guidance.",
                href: "/masonry-new-page",
                image: "/masonry-gallery/180d8e52-9754-4a75-ab98-1d21b76879a7.webp",
              }}
              columns={masonryMenu}
            />
            <Link href="/projects" className="text-[color:var(--ink)]/70 hover:text-[color:var(--ink)] text-[11px] uppercase tracking-[0.18em] transition-colors">
              Projects
            </Link>
            <Link href="/showrooms" className="text-[color:var(--ink)]/70 hover:text-[color:var(--ink)] text-[11px] uppercase tracking-[0.18em] transition-colors">
              Showrooms
            </Link>
            <Link href="/contact" className="text-[color:var(--ink)]/70 hover:text-[color:var(--ink)] text-[11px] uppercase tracking-[0.18em] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/estimate"
              className="bg-[color:var(--ink)] text-white px-5 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-[color:var(--accent)] transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/booking"
              className="border border-[color:var(--ink)]/20 text-[color:var(--ink)] px-5 py-2 text-[11px] uppercase tracking-[0.2em] hover:border-[color:var(--ink)] transition-colors"
            >
              Consultation
            </Link>
          </div>

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

      {mobileOpen && (
        <div className="md:hidden bg-[#F9F7F3] border-t border-[color:var(--sand-deep)] px-6 pb-6">
          {mobileGroups.map((group) => (
            <div key={group.heading} className="border-b border-[color:var(--sand-deep)] py-4">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--accent)] mb-3">
                {group.heading}
              </p>
              <div className="grid grid-cols-1 gap-2">
                {group.links.map((item) => (
                  <Link
                    key={`${group.heading}-${item.href}-${item.label}`}
                    href={item.href}
                    className="text-sm text-[color:var(--ink)]/75"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-5 flex flex-col gap-2">
            <Link
              href="/estimate"
              className="bg-[color:var(--ink)] text-white text-center py-3 text-xs uppercase tracking-[0.2em]"
              onClick={() => setMobileOpen(false)}
            >
              Start a Project
            </Link>
            <Link
              href="/booking"
              className="border border-[color:var(--ink)]/25 text-[color:var(--ink)] text-center py-3 text-xs uppercase tracking-[0.2em]"
              onClick={() => setMobileOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
