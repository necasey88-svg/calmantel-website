export default function ConsultationCTA() {
  return (
    <section className="bg-stone-900 text-white py-16 text-center">
      <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
        Talk to an Expert
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Schedule a Showroom Consultation
      </h2>
      <p className="text-stone-300 max-w-xl mx-auto mb-8 leading-relaxed">
        Not sure where to start? Book a free appointment with one of our certified hearth
        experts — we&apos;ll help you design the perfect fireplace and mantel for your home.
      </p>
      <a
        href="https://outlook.office.com/book/CaliforniaMantelFireplace@calmantel.com/?ismsaljsauthenabled"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold tracking-widest uppercase px-12 py-4 rounded-full transition-colors"
      >
        Book a Free Consultation
      </a>
    </section>
  );
}
