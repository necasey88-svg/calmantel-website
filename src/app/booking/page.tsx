import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Book a Showroom Consultation | California Mantel & Fireplace",
  description:
    "Schedule a private showroom consultation with a certified hearth expert at any of our three California showrooms: Anaheim, Dublin, or Sacramento.",
};

export default function BookingPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Private Consultation"
        title="Book a Showroom Appointment"
        description="Meet one-on-one with a hearth specialist, experience the mantel and fireplace collection in person, and shape a clear direction for your project."
      />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-stone-500 mb-8 leading-relaxed">
          Choose your preferred showroom, select a time, and we&apos;ll confirm
          your appointment by email.
        </p>
        <a
          href="https://outlook.office.com/book/CaliforniaMantelFireplace@calmantel.com/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white text-sm tracking-[0.2em] uppercase px-14 py-5 transition-colors"
        >
          Schedule Online
        </a>

        <div className="mt-12 border-t border-stone-100 pt-10 text-sm text-stone-500">
          Prefer to call?{" "}
          <a href="tel:7149087388" className="text-[color:var(--accent)] hover:underline">
            (714) 908-7388
          </a>{" "}
          Anaheim /{" "}
          <a href="tel:9254361731" className="text-[color:var(--accent)] hover:underline">
            (925) 436-1731
          </a>{" "}
          Dublin /{" "}
          <a href="tel:9166650627" className="text-[color:var(--accent)] hover:underline">
            (916) 665-0627
          </a>{" "}
          Sacramento
        </div>
      </section>
    </>
  );
}
