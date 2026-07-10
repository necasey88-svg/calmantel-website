import Link from "next/link";
import Image from "next/image";
import PricingCTA from "@/components/PricingCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata = {
  title: "Mendota Fireplaces | California Mantel & Fireplace",
  description:
    "Mendota gas fireplaces — American-made full-view fireplaces in Landscape, Classic, Linear, and Classic Arch shapes. Authorized Mendota dealer and installer.",
  alternates: { canonical: "/fireplaces/mendota" },
};

const shapes = [
  {
    name: "Landscape",
    tagline: "Variety of Flame Patterns · Mid-Century Modern · Versatile",
    description:
      "Mendota's Landscape line boasts a stunning shape and timeless beauty. Simple lines create the perfect canvas for today's clean design trends. Available in three sizes and multiple configurations with four distinct flame patterns to choose from — Traditional, FireIn, Timberline, or Decor.",
    models: ["FV36 Traditional", "FV42 Traditional", "FV48 Traditional", "FV42 FireIn", "ML48 FireIn", "FV36 Timberline", "FV36 Decor"],
    image: "/brands/mendota/firein-room.png",
    url: "https://mendotahearth.com/products/landscape-gas-fireplaces/",
  },
  {
    name: "Classic",
    tagline: "Wood-Burning Realism · Variety of Flame Patterns · Timeless",
    description:
      "Mendota's Classic shape brings a sense of nostalgia with its dramatic flame patterns. Choose Traditional — a two-tiered burner for dramatic depth — or FireIn, where logs wrap around the burner for an ultra-realistic flame that dances around and through hand-painted birch or white oak log sets. Available in multiple sizes and configurations.",
    models: ["FV34 Traditional", "FV41 Traditional", "FV46 Traditional", "DXV35 Traditional", "DXV45 Traditional", "DXV60 Traditional", "FV41 FireIn", "FV46 FireIn"],
    image: "/brands/mendota/firein-copper-birch.png",
    url: "https://mendotahearth.com/products/classic-gas-fireplaces/",
  },
  {
    name: "Linear",
    tagline: "Trend-Forward · Up to 6-Feet Wide · Variety of Flame Patterns",
    description:
      "Mendota's Linear gas fireplaces offer trend-forward design that will satisfy your most discerning aspirations. Available in five sizes up to 6-feet wide to fit almost any space. Choose from FireIn — logs that wrap around the burner for ultra-realistic flame — Timberline with a traditional fire beneath the logs, or Decor for a sleek, modern look.",
    models: ["ML48 FireIn", "ML39 Timberline", "ML48 Timberline", "ML54 Timberline", "ML60 Timberline", "ML72 Timberline", "ML Decor"],
    image: "/brands/mendota/decor.png",
    url: "https://mendotahearth.com/products/linear-gas-fireplaces/",
  },
  {
    name: "Classic Arch",
    tagline: "Traditional Flame Pattern · Bold Arch · Timeless Elegance",
    description:
      "The elegance of the Classic Arch creates a captivating space with its bold, distinctive style. With its dramatic arch, these fireplaces replicate the beautiful fireplaces of America's first families. Features a two-tiered burner for dramatic depth to the flame pattern. Available in four sizes with a variety of fronts and liners.",
    models: ["FV34 Arch", "FV41 Arch", "Chelsea", "Greenbriar"],
    image: "/brands/mendota/timberline.png",
    url: "https://mendotahearth.com/products/classic-arch-gas-fireplaces/",
  },
];

export default function MendotaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[color:var(--ink)]/55 mb-4">
            <Link href="/fireplaces" className="hover:text-[color:var(--accent)] transition-colors">Fireplaces</Link>
            <span className="mx-2">›</span>
            <span className="text-[color:var(--ink)]/80">Mendota Fireplaces</span>
          </nav>
          <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-sm font-medium mb-3">
            American Made · Premium Performance
          </p>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.04] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Mendota Fireplaces
          </h1>
          <p className="text-[color:var(--ink)]/60 max-w-2xl leading-relaxed">
            Mendota is a Wisconsin-based manufacturer producing some of the finest gas fireplaces made in America.
            Their full-view design, exceptional heat output, and patented DXV flame technology set them apart from every other brand.
          </p>
        </div>
      </section>

      {/* Find Your Shape heading */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 text-center">
        <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs font-medium mb-2">Find Your Shape</p>
        <h2 className="text-3xl font-medium text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
          Four Distinct Firebox Shapes
        </h2>
        <p className="text-stone-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Every Mendota fireplace starts with a shape. Choose the one that fits your style, then customize the finish, log set, and surround.
        </p>
      </section>

      {/* Shape cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shapes.map((shape) => (
            <div
              key={shape.name}
              className="border border-stone-200 rounded-sm overflow-hidden hover:border-[color:var(--accent)] hover:shadow-sm transition-all group flex flex-col"
            >
              <div className="relative h-56 bg-stone-100 overflow-hidden">
                <Image
                  src={shape.image}
                  alt={`Mendota ${shape.name} fireplace`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-7 flex flex-col flex-1">
                <p className="text-[color:var(--accent)] text-xs uppercase tracking-[0.28em] mb-1">{shape.tagline}</p>
                <h3
                  className="text-2xl font-medium text-stone-900 mb-3 group-hover:text-[color:var(--accent)] transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {shape.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">{shape.description}</p>

                {/* Model chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {shape.models.map((model) => (
                    <span
                      key={model}
                      className="bg-stone-100 text-stone-600 text-xs font-medium px-3 py-1.5 rounded-sm border border-stone-200"
                    >
                      {model}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3">
                  <Link
                    href="/estimate"
                    className="bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white text-sm px-5 py-2.5 rounded font-medium transition-colors"
                  >
                    Request Project Estimate
                  </Link>
                  <a
                    href={shape.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--accent)] hover:underline text-sm font-medium"
                  >
                    View models →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Mendota strip */}
      <section className="bg-stone-50 border-t border-stone-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium text-stone-900 mb-8 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
            Why Mendota?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { title: "American Made", body: "Every Mendota fireplace is designed and manufactured in Sun Prairie, Wisconsin — built to last decades." },
              { title: "Full-View Design", body: "Patented DXV technology eliminates the traditional frame, giving you the most dramatic flame view of any gas fireplace." },
              { title: "Exceptional Heat", body: "Up to 55,000 BTU with Mendota's high-efficiency heat exchanger — real warmth, not just ambiance." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[color:var(--accent)] mb-1" />
                <p className="font-medium text-stone-800 text-sm">{item.title}</p>
                <p className="text-stone-500 text-xs leading-relaxed max-w-xs">{item.body}</p>
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
