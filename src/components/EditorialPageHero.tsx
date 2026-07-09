type EditorialPageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function EditorialPageHero({
  eyebrow,
  title,
  description,
  align = "left",
}: EditorialPageHeroProps) {
  const isCenter = align === "center";

  return (
    <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 ${
          isCenter ? "text-center" : ""
        }`}
      >
        {eyebrow && (
          <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-5">
            {eyebrow}
          </p>
        )}
        <h1
          className={`text-5xl md:text-6xl font-medium text-[color:var(--ink)] tracking-tight leading-[1.04] ${
            isCenter ? "mx-auto" : ""
          } max-w-4xl`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h1>
        <p
          className={`mt-7 text-[color:var(--ink)]/60 leading-relaxed text-lg max-w-2xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
