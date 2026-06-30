export const metadata = {
  title: "Book a Showroom Consultation | California Mantel & Fireplace",
  description:
    "Schedule a free consultation with a certified hearth expert at any of our three California showrooms — Anaheim, Dublin, or Sacramento.",
};

export default function BookingPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Free Consultation
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Book a Showroom Appointment
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            Schedule a free one-on-one consultation with one of our certified hearth experts.
            See our full mantel and fireplace collection in person, get design advice, and
            leave with a clear plan — no pressure, no obligation.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-stone-500 mb-8 leading-relaxed">
          Click below to open our booking calendar — choose your preferred showroom,
          pick a date and time, and we&apos;ll confirm your appointment by email.
        </p>
        <a
          href="https://outlook.office.com/book/CaliforniaMantelFireplace@calmantel.com/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold tracking-widest uppercase px-14 py-5 rounded-full transition-colors"
        >
          Schedule Online
        </a>

        <div className="mt-12 border-t border-stone-100 pt-10 text-sm text-stone-500">
          Prefer to call?{" "}
          <a href="tel:7149087388" className="text-amber-700 hover:underline">(714) 908-7388</a> Anaheim ·{" "}
          <a href="tel:9254361731" className="text-amber-700 hover:underline">(925) 436-1731</a> Dublin ·{" "}
          <a href="tel:9166650627" className="text-amber-700 hover:underline">(916) 665-0627</a> Sacramento
        </div>
      </section>
    </>
  );
}
