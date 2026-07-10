import EditorialPageHero from "@/components/EditorialPageHero";

const bookingUrl =
  "https://outlook.office.com/book/CaliforniaMantelFireplace@calmantel.com/?ismsaljsauthenabled";

export const metadata = {
  title: "Book a Showroom Consultation | California Mantel & Fireplace",
  description:
    "Schedule a private showroom consultation with a certified hearth expert at any of our three California showrooms: Anaheim, Dublin, or Sacramento.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Private Consultation"
        title="Book a Showroom Appointment"
        description="Meet one-on-one with a hearth specialist, experience the mantel and fireplace collection in person, and shape a clear direction for your project."
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-stone-500 mb-10 leading-relaxed max-w-2xl mx-auto">
          Choose your preferred showroom, select a time, and we&apos;ll confirm
          your appointment by email.
        </p>

        <div className="overflow-hidden border border-[color:var(--sand-deep)] bg-white shadow-sm">
          <iframe
            src={bookingUrl}
            title="Schedule a showroom consultation with California Mantel & Fireplace"
            className="block w-full h-[760px] md:h-[820px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="mt-5 text-xs text-stone-400">
          If the scheduler does not load,{" "}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--accent)] hover:underline"
          >
            open scheduling in a new tab
          </a>
          .
        </p>

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
