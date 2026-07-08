const items = [
  { stat: "38+ Years", label: "Designing & building fireplaces since 1987" },
  { stat: "3 Showrooms", label: "Anaheim · Dublin · Sacramento" },
  { stat: "Made in California", label: "Custom precast mantels built locally" },
  { stat: "Thousands of Projects", label: "Trusted by homeowners, designers & builders" },
];

export default function WhyCMF() {
  return (
    <section className="bg-[color:var(--ink)] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
            Why California Mantel &amp; Fireplace
          </p>
          <h2
            className="text-4xl md:text-5xl font-medium tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A Fireplace Partner You Can Trust
          </h2>
          <p className="text-white/60 leading-relaxed mt-5">
            Nearly four decades of craftsmanship, in-house manufacturing, and professional
            installation — all under one roof.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {items.map((i) => (
            <div key={i.stat} className="text-center">
              <div className="w-10 h-px bg-[color:var(--accent)] mx-auto mb-6" />
              <p
                className="text-2xl md:text-[1.75rem] font-medium leading-tight mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {i.stat}
              </p>
              <p className="text-white/60 text-sm leading-relaxed max-w-[15rem] mx-auto">
                {i.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
