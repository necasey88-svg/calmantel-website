import Link from "next/link";
import Image from "next/image";
import PricingCTA from "@/components/PricingCTA";
import InstantEstimateCTA from "@/components/InstantEstimateCTA";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata = {
  title: "Ortal Fireplaces | California Mantel & Fireplace",
  description:
    "Ortal gas fireplaces — Israeli-designed, European-engineered front-facing and traditional gas fireplaces with Cool Wall Technology. Authorized Ortal dealer and installer.",
};

const traditional = [
  {
    name: "Wilderness Traditional 36\"",
    tagline: "Firelog Technology · Ultra-Realistic Flames",
    description:
      "Patent-pending Firelog Technology delivers taller, more realistic flames — the experience of a wood-burning fire with all the convenience of gas. Logs wrap around the burner for a flame that dances through hand-painted log sets.",
    specs: ["Viewing: 35 7/16\" × 31 5/8\"", "31,400 BTU (LPG)", "79.8% efficiency", "Remote / WiFi / Wall Switch"],
    image: "https://www.ortalheat.com/hubfs/TR%2036%20-%20VO%20-%20Black%20-%20Front%20view%20(1)%20Cropped.jpg",
    url: "https://www.ortalheat.com/fireplaces/wilderness-traditional-36",
  },
  {
    name: "Wilderness Traditional 42\"",
    tagline: "Firelog Technology · Ultra-Realistic Flames",
    description:
      "The larger Wilderness Traditional brings the same patent-pending Firelog Technology to a wider firebox. Choose from Driftwood, Valley Oak, or Birch log sets and pair with your choice of liners and fronts.",
    specs: ["Viewing: 42 11/16\" × 34 1/8\"", "31,400 BTU (LPG)", "79.8% efficiency", "Remote / WiFi / Wall Switch"],
    image: "https://www.ortalheat.com/hubfs/W36%20-%20DW%20-%20Red%20Updated.jpg",
    url: "https://www.ortalheat.com/fireplaces/wilderness-traditional-42",
  },
  {
    name: "Traditional 90",
    tagline: "HD Logs · Cool Wall Technology · Smart Controls",
    description:
      "Integrate modern beauty into traditional hearths. The Traditional 90 features Ortal's HD log set and Passive Cool Wall Technology — safe enough to mount a TV or artwork directly above. Available with black reflective glass, Blackridge, or brick interiors.",
    specs: ["Viewing: 35 7/16\" × 31 5/8\"", "55,000 BTU (NG)", "81.4% efficiency", "Remote / Wall Switch"],
    image: null,
    url: "https://www.ortalheat.com/fireplaces/traditional-90",
  },
  {
    name: "Traditional 110",
    tagline: "HD Logs · Cool Wall Technology · Smart Controls",
    description:
      "The widest of Ortal's Traditional line, delivering a dramatic flame display with HD log sets in a larger firebox. Passive Cool Wall Technology allows cabinetry and media to be placed directly above.",
    specs: ["Viewing: 42 11/16\" × 34 1/8\"", "55,000 BTU (NG)", "81.4% efficiency", "Remote / Wall Switch"],
    image: "https://www.ortalheat.com/hubfs/TR%2042%20%20with%20HD%20logs%20and%20Flat%20balck.jpg",
    url: "https://www.ortalheat.com/fireplaces/traditional-110",
  },
];

const frontFacingSeries = [
  {
    name: "Front Facing Standard Series",
    tagline: "31\" to 98\" Wide · Cool Wall Technology · Multiple Heights",
    description:
      "Ortal's flagship front-facing collection combines architectural beauty with revolutionary performance. Passive Cool Wall Technology keeps the surround safe to touch, allowing TV and artwork placement directly above. Available in standard (H) and tall (HH) height variants across a full range of widths — from a compact 31\" to a statement-making 98\".",
    sizes: ["31", "31H", "40H70", "44", "44H", "44HH", "51", "51H", "60", "60H", "60HH", "68", "68H", "77", "77H", "77HH", "98", "98H", "98HH"],
    specs: ["31\" to 98\" wide", "Up to 50,000+ BTU", "Cool Wall Technology", "Double glass or mesh screen", "LPG or Natural Gas"],
    image: "https://f.hubspotusercontent00.net/hubfs/5208252/_Ortal%20Site%202020/Product%20Pages/900x900/150F.jpg",
    url: "https://www.ortalheat.com/fireplaces/Front-Facing",
  },
  {
    name: "Wilderness Front Facing Series",
    tagline: "Firelog Technology · Ultra-Realistic · 25\" to 77\" Wide",
    description:
      "The Wilderness Front Facing series brings Ortal's patent-pending Firelog Technology to the linear format — logs wrap around the burner for a flame that dances through hand-painted Driftwood, Birch, or Valley Oak log sets. The most realistic gas flame available in a front-facing fireplace, combined with Ortal's signature Cool Wall performance.",
    sizes: ["25H", "31", "31H", "44", "44H", "44HH", "51", "51H", "60", "60H", "60HH", "68", "68H", "77", "77H", "77HH"],
    specs: ["25\" to 77\" wide", "Up to 52,000 BTU (NG)", "Firelog Technology", "WiFi + Remote + Wall Switch", "LPG or Natural Gas"],
    image: "https://5208252.fs1.hubspotusercontent-na1.net/hubfs/5208252/_Ortal%20Site%202020/Hero%20Images/2022/900-60H%20FRONT%20LONG%20DW.jpg",
    url: "https://www.ortalheat.com/fireplaces/Front-Facing",
  },
];

export default function OrtalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-4">
            <Link href="/fireplaces" className="hover:text-amber-400 transition-colors">Fireplaces</Link>
            <span className="mx-2">›</span>
            <span className="text-stone-200">Ortal Fireplaces</span>
          </nav>
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Israeli Design · European Engineering
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Ortal Fireplaces
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            Ortal is an Israeli-designed, European-engineered gas fireplace brand trusted by architects and interior designers worldwide. Their signature Passive Cool Wall Technology and patent-pending Firelog Technology set a new standard for safety, realism, and architectural flexibility.
          </p>
        </div>
      </section>

      {/* Traditional Section heading */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <p className="text-amber-700 uppercase tracking-widest text-xs font-semibold mb-2">Collection</p>
        <h2 className="text-3xl font-bold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
          Traditional
        </h2>
        <p className="text-stone-500 mt-2 max-w-2xl text-sm leading-relaxed">
          Classic firebox proportions with Ortal&apos;s modern gas engineering. Available with HD logs or the ultra-realistic Wilderness Firelog Technology.
        </p>
      </section>

      {/* Traditional cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traditional.map((product) => (
            <div
              key={product.name}
              className="border border-stone-200 rounded-xl overflow-hidden hover:border-amber-700 hover:shadow-md transition-all group flex flex-col"
            >
              <div className="relative h-48 bg-stone-100 overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-5xl">🔥</div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-amber-700 text-xs font-semibold uppercase tracking-widest mb-1">{product.tagline}</p>
                <h3
                  className="text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {product.name}
                </h3>
                <p className="text-stone-500 text-xs leading-relaxed mb-3">{product.description}</p>
                <ul className="mb-4 space-y-1">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-stone-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-700 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-3">
                  <Link
                    href="/estimate"
                    className="bg-amber-700 hover:bg-amber-800 text-white text-xs px-4 py-2 rounded font-semibold transition-colors"
                  >
                    Request Estimate
                  </Link>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline text-xs font-semibold"
                  >
                    View details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <hr className="border-stone-100" />
      </div>

      {/* Front Facing Section heading */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        <p className="text-amber-700 uppercase tracking-widest text-xs font-semibold mb-2">Collection</p>
        <h2 className="text-3xl font-bold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
          Front Facing
        </h2>
        <p className="text-stone-500 mt-2 max-w-2xl text-sm leading-relaxed">
          Linear fireplaces from 31&quot; to 98&quot; wide — Ortal&apos;s most popular format. Choose the Standard series for clean, modern flames or the Wilderness series for ultra-realistic Firelog Technology.
        </p>
      </section>

      {/* Front Facing series cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {frontFacingSeries.map((series) => (
            <div
              key={series.name}
              className="border border-stone-200 rounded-2xl overflow-hidden hover:border-amber-700 hover:shadow-md transition-all group flex flex-col"
            >
              <div className="relative h-60 bg-stone-100 overflow-hidden">
                <Image
                  src={series.image}
                  alt={series.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="text-amber-700 text-xs font-semibold uppercase tracking-widest mb-1">{series.tagline}</p>
                <h3
                  className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {series.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{series.description}</p>
                <ul className="mb-4 space-y-1">
                  {series.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-stone-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-700 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {series.sizes.map((size) => (
                    <span
                      key={size}
                      className="bg-stone-100 text-stone-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-stone-200"
                    >
                      {size}&quot;
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <Link
                    href="/estimate"
                    className="bg-amber-700 hover:bg-amber-800 text-white text-sm px-5 py-2.5 rounded font-semibold transition-colors"
                  >
                    Request Estimate
                  </Link>
                  <a
                    href={series.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline text-sm font-semibold"
                  >
                    View series →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Ortal */}
      <section className="bg-stone-50 border-t border-stone-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-stone-900 mb-8 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
            Why Ortal?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { title: "Cool Wall Technology", body: "Ortal's passive cool wall keeps the surround safe to touch, so you can mount a TV or hang artwork directly above the fireplace." },
              { title: "Firelog Technology", body: "Patent-pending Wilderness Firelog Technology wraps logs around the burner, creating a flame that dances through the logs just like a real wood fire." },
              { title: "Architect's Choice", body: "Frameless design, precise sizing from 25\" to 98\", and virtually zero clearance make Ortal the preferred fireplace among architects and interior designers." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-700 mb-1" />
                <p className="font-bold text-stone-800 text-sm">{item.title}</p>
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
