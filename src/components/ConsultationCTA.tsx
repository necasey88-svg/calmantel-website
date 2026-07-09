export default function ConsultationCTA() {
  return (
    <section className="bg-[color:var(--ink)] text-white py-20 text-center">
      <p className="text-[color:var(--accent)] uppercase tracking-[0.28em] text-xs mb-4">
        Design Consultation
      </p>
      <h2
        className="text-4xl md:text-5xl font-medium mb-5 tracking-tight"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        See the materials, scale, and flame in person.
      </h2>
      <p className="text-white/65 max-w-xl mx-auto mb-9 leading-relaxed">
        Meet with a hearth consultant to align the mantel, appliance, finish, clearances,
        and installation plan around the room you want to create.
      </p>
      <a
        href="https://outlook.office.com/book/CaliforniaMantelFireplace@calmantel.com/?ismsaljsauthenabled"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white hover:bg-white/90 text-[color:var(--ink)] text-sm tracking-[0.18em] uppercase px-12 py-4 transition-colors"
      >
        Book Consultation
      </a>
    </section>
  );
}
