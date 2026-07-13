import Link from "next/link";
import Image from "next/image";
import PricingCTA from "@/components/PricingCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata = {
  title: "Flare Fireplaces | California Mantel & Fireplace",
  description:
    "Flare gas fireplaces — 60 modern indoor models from 25\" to 100\" wide. Front facing, see-through, corner, and room definer styles. Authorized Flare dealer and installer.",
  alternates: { canonical: "/fireplaces/flare" },
};

const styles = [
  {
    name: "Front Facing",
    tagline: "25\" to 100\" Wide · 3 Glass Heights · Most Popular",
    description:
      "Flare's signature linear front-facing fireplace. Designed to hang effortlessly in your wall with a frameless appearance. The 3D stainless steel burner creates a deeper, taller flame that runs almost end-to-end. Available in 16\", 24\", and 30\" glass heights across a full range of widths.",
    specs: ["25\" to 100\" wide", "16\", 24\", or 30\" glass height", "Advanced 3D Burner", "TV mountable 12\" from glass"],
    image: "/brands/flare-styles/front-facing.png",
    url: "https://flarefireplaces.com/contact-flare/modern-indoor-fireplaces/",
  },
  {
    name: "See Through",
    tagline: "Double-Sided · Open Floor Plans · Indoor-Outdoor",
    description:
      "Viewed from two sides, the See Through is perfect for open floor plans or indoor-outdoor connections. The same advanced 3D burner and frameless glass design — enjoyed from any direction.",
    specs: ["Viewed from two sides", "Indoor-outdoor capable", "3D Burner", "Multiple widths available"],
    image: "/brands/flare-styles/see-through.png",
    url: "https://flarefireplaces.com/contact-flare/modern-indoor-fireplaces/",
  },
  {
    name: "Double Corner",
    tagline: "Two Glass Sides · L-Shape · Dramatic Statement",
    description:
      "Glass wraps around two sides of a corner, filling the room with flame from a dramatic L-shaped opening. Ideal for rooms where you want the fireplace to command the space from two directions.",
    specs: ["Two glass sides", "Corner installation", "3D Burner", "RGB LED lighting available"],
    image: "/brands/flare-styles/double-corner.png",
    url: "https://flarefireplaces.com/contact-flare/modern-indoor-fireplaces/",
  },
  {
    name: "Left Corner",
    tagline: "Front + Left Glass · Corner Design · Architectural",
    description:
      "Glass spans the front and wraps around the left side. A versatile corner fireplace that works beautifully in living rooms and great rooms where two walls meet at a seating area.",
    specs: ["Front and left glass", "Corner installation", "3D Burner", "Multiple widths"],
    image: "/brands/flare-styles/left-corner.png",
    url: "https://flarefireplaces.com/contact-flare/modern-indoor-fireplaces/",
  },
  {
    name: "Right Corner",
    tagline: "Front + Right Glass · Corner Design · Architectural",
    description:
      "Glass spans the front and wraps around the right side — the mirror of the Left Corner. Choose based on your room layout and where you want the flame to be seen from.",
    specs: ["Front and right glass", "Corner installation", "3D Burner", "Multiple widths"],
    image: "/brands/flare-styles/right-corner.png",
    url: "https://flarefireplaces.com/contact-flare/modern-indoor-fireplaces/",
  },
  {
    name: "Room Definer",
    tagline: "Island Style · Three-Sided · Freestanding",
    description:
      "The Room Definer is a freestanding island fireplace with glass on three sides — a dramatic architectural element that divides open spaces while allowing flames to be enjoyed from all around.",
    specs: ["Three-sided glass", "Freestanding / island install", "3D Burner", "Statement piece"],
    image: "/brands/flare-styles/room-definer.png",
    url: "https://flarefireplaces.com/contact-flare/modern-indoor-fireplaces/",
  },
  {
    name: "Passage",
    tagline: "Tall Vertical Format · Walk-Through · Unique",
    description:
      "The Passage is a tall, vertical see-through fireplace designed for hallways, entryways, and transitional spaces. Flames rise through a narrow vertical opening, creating an unforgettable first impression.",
    specs: ["Vertical format", "See-through design", "Unique silhouette", "Custom sizing"],
    image: "/brands/flare-styles/passage.png",
    url: "https://flarefireplaces.com/contact-flare/modern-indoor-fireplaces/",
  },
  {
    name: "Traditional",
    tagline: "Taller Firebox · Log Set · Classic Proportions",
    description:
      "Flare's Traditional style pairs the brand's modern engineering with a taller firebox proportion and optional driftwood log burner. Classic shape, frameless glass, and a flame that fills the opening.",
    specs: ["Taller viewing window", "Summit Burner with driftwood logs", "Ceramic black reflective back", "Frameless design"],
    image: "/brands/flare-styles/traditional.png",
    url: "https://flarefireplaces.com/contact-flare/modern-indoor-fireplaces/",
  },
  {
    name: "Large Fireplaces",
    tagline: "Up to 100\" Wide · Statement Scale · Custom",
    description:
      "When the project demands it, Flare scales up. Large Fireplaces reach up to 100\" wide with the same 3D burner, double glass, and frameless engineering — built to anchor hotel lobbies, restaurants, and grand residences.",
    specs: ["Up to 100\" wide", "3D Burner end-to-end", "Double glass available", "RGB LED lighting"],
    image: "/brands/flare-styles/large-fireplaces.png",
    url: "https://flarefireplaces.com/contact-flare/modern-indoor-fireplaces/",
  },
];

const features = [
  { label: "Frameless", body: "Seamless modern appearance with no visible frame around the glass." },
  { label: "Advanced 3D Burner", body: "3 stainless steel burners create a deeper, taller flame that runs almost end-to-end." },
  { label: "3 Glass Heights", body: "Choose 16\", 24\", or 30\" glass height to match your wall design." },
  { label: "TV Mountable", body: "Hang a TV just 12\" from the glass — safe with Flare's cool-running design." },
  { label: "Corner Fireplaces", body: "Two or three-sided corner configurations available across multiple styles." },
  { label: "60 Direct Vent Models", body: "Lengths from 30\" to 100\" — the widest range of any linear gas fireplace brand." },
  { label: "RGB LED Lighting", body: "Optional multi-color LED lighting behind the media for ambient glow." },
  { label: "SIT Proflame II", body: "Advanced flame control with thermostatic mode, remote, and home automation." },
];

export default function FlarePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[color:var(--ink)]/55 mb-4">
            <Link href="/fireplaces" className="hover:text-[color:var(--accent)] transition-colors">Fireplaces</Link>
            <span className="mx-2">›</span>
            <span className="text-[color:var(--ink)]/80">Flare Fireplaces</span>
          </nav>
          <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-sm font-medium mb-3">
            Frameless · Modern · 60 Models
          </p>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.04] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Flare Fireplaces
          </h1>
          <p className="text-[color:var(--ink)]/60 max-w-2xl leading-relaxed">
            Flare offers 60 modern indoor gas fireplaces in lengths from 25&quot; to 100&quot; and glass heights of 16&quot;, 24&quot;, and 30&quot;. Their frameless design, advanced 3D burner, and wide range of styles — from front-facing to room-defining corner configurations — make them a top choice for architects, designers, and discerning homeowners.
          </p>
        </div>
      </section>

      {/* Style cards heading */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 text-center">
        <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs font-medium mb-2">Find Your Style</p>
        <h2 className="text-3xl font-medium text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
          Nine Indoor Fireplace Styles
        </h2>
        <p className="text-stone-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Every Flare fireplace starts with a viewing style. Choose the configuration that fits your space, then select your width, glass height, and media.
        </p>
      </section>

      {/* Style cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style) => (
            <div
              key={style.name}
              className="border border-stone-200 rounded-sm overflow-hidden hover:border-[color:var(--accent)] hover:shadow-sm transition-all group flex flex-col"
            >
              <div className="relative h-52 bg-stone-100 overflow-hidden">
                {style.image ? (
                  <Image
                    src={style.image}
                    alt={`Flare ${style.name} fireplace`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-6xl">🔥</div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[color:var(--accent)] text-xs uppercase tracking-[0.28em] mb-1">{style.tagline}</p>
                <h3
                  className="text-xl font-medium text-stone-900 mb-2 group-hover:text-[color:var(--accent)] transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {style.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{style.description}</p>
                <ul className="mb-5 space-y-1">
                  {style.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-stone-500">
                      <span className="w-1.5 h-1.5 rounded-sm bg-[color:var(--accent)] flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-3">
                  <Link
                    href="/estimate"
                    className="bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white text-sm px-4 py-2 rounded font-medium transition-colors"
                  >
                    Request Project Estimate
                  </Link>
                  <a
                    href={style.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--accent)] hover:underline text-sm font-medium"
                  >
                    View style →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-stone-50 border-t border-stone-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium text-stone-900 mb-8 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
            Every Flare Fireplace Includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)] flex-shrink-0" />
                  <p className="font-medium text-stone-800 text-sm">{f.label}</p>
                </div>
                <p className="text-stone-500 text-xs leading-relaxed pl-4">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
      <InstantEstimateCTA />
      <PricingCTA />
    </>
  );
}
