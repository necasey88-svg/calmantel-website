import EditorialPageHero from "@/components/EditorialPageHero";
import { getMantelProduct } from "@/lib/mantel-products-data";
import { getShowroom } from "@/lib/business-data";

const bookingUrl =
  "https://outlook.office.com/book/CaliforniaMantelFireplace@calmantel.com/?ismsaljsauthenabled";

export const metadata = {
  title: "Book a Showroom Consultation | California Mantel & Fireplace",
  description:
    "Schedule a private showroom consultation with a certified hearth expert at any of our three California showrooms: Anaheim, Dublin, or Sacramento.",
  alternates: { canonical: "/booking" },
};

type BookingPageProps = {
  searchParams: Promise<{
    showroom?: string | string[];
    mantel?: string | string[];
  }>;
};

function firstValue(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const params = await searchParams;
  const showroom = getShowroom(firstValue(params.showroom) ?? "");
  const mantel = getMantelProduct(firstValue(params.mantel) ?? "");

  return (
    <>
      <EditorialPageHero
        eyebrow="Private Consultation"
        title="Book a Showroom Appointment"
        description="Meet one-on-one with a hearth specialist, experience the mantel and fireplace collection in person, and shape a clear direction for your project."
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-stone-500 mb-6 leading-relaxed max-w-2xl mx-auto">
          Choose your preferred showroom, select a time, and we&apos;ll confirm
          your appointment by email.
        </p>

        {(showroom || mantel) && (
          <div className="mb-10 mx-auto max-w-xl border border-[#D9CBB8] bg-[#F9F7F3] px-6 py-4 text-left">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--accent)] mb-2">
              Your Appointment Details
            </p>
            <p className="text-sm text-stone-700 leading-relaxed">
              {mantel && (
                <>
                  Interested in the <span className="font-medium">{mantel.name} Mantel</span>.
                  {" "}
                </>
              )}
              {showroom && (
                <>
                  Preferred showroom: <span className="font-medium">{showroom.city}</span>.
                </>
              )}
            </p>
            <p className="mt-2 text-xs text-stone-500">
              Mention this when you schedule below (or in the appointment notes) so our
              team can have it ready for your visit.
            </p>
          </div>
        )}

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
