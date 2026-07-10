import Image from "next/image";
import Link from "next/link";

const scenes = [
  {
    title: "Ashford with Darlinghurst Beam",
    description:
      "A clean Ashford-style surround paired with a simple Darlinghurst-inspired beam shelf.",
    image: "/inspiration/ashford-darlinghurst-room.png",
    href: "/mantels/p/ashford",
    products: [
      { label: "Ashford Mantel", href: "/mantels/p/ashford" },
      { label: "Darlinghurst Beam", href: "/mantels/p/darlinghurst" },
    ],
  },
  {
    title: "Tonso Traditional Room",
    description:
      "A refined Tonso-style arched mantel for a formal living room or library.",
    image: "/inspiration/tonso-traditional-room.png",
    href: "/mantels/p/tonso",
    products: [{ label: "Tonso Mantel", href: "/mantels/p/tonso" }],
  },
  {
    title: "Contemporary Mantel Room",
    description:
      "A smooth precast mantel concept for a warm, architectural living room.",
    image: "/inspiration/mantel-room-contemporary.png",
    href: "/mantels/contemporary",
    products: [{ label: "Contemporary Mantels", href: "/mantels/contemporary" }],
  },
  {
    title: "Linear Fireplace Great Room",
    description:
      "A new-construction fireplace wall concept with integrated stone and shelving.",
    image: "/inspiration/fireplace-great-room-linear.png",
    href: "/fireplaces",
    products: [{ label: "Fireplace Systems", href: "/fireplaces" }],
  },
];

export default function InspirationScenes() {
  return (
    <section className="bg-[#F9F7F3] border-y border-[color:var(--sand-deep)] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
              Design Inspiration
            </p>
            <h2
              className="text-4xl md:text-5xl font-medium text-[color:var(--ink)] max-w-3xl leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Room scenes shaped around the products we offer.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[color:var(--ink)]/55 max-w-sm">
            Concept renderings for planning direction. Final designs are selected
            around your room, product choice, and installation requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {scenes.map((scene) => (
            <article
              key={scene.title}
              className="group bg-white border border-[color:var(--sand-deep)]"
            >
              <Link
                href={scene.href}
                className="relative aspect-[16/10] overflow-hidden bg-stone-100 block"
                aria-label={`View ${scene.title}`}
              >
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[color:var(--ink)]/0 group-hover:bg-[color:var(--ink)]/38 transition-colors" />
                <div className="absolute left-5 right-5 bottom-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/92 backdrop-blur-sm border border-white/70 px-5 py-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--accent)] mb-2">
                      Products Featured
                    </p>
                    <p className="text-sm font-medium text-[color:var(--ink)]">
                      {scene.products.map((product) => product.label).join(" / ")}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <h3
                  className="text-xl font-medium text-[color:var(--ink)] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {scene.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--ink)]/60">
                  {scene.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {scene.products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="border border-[color:var(--ink)]/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink)]/70 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
                    >
                      {product.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
