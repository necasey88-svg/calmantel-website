import Link from "next/link";
import EditorialPageHero from "@/components/EditorialPageHero";
import { getMantelProduct } from "@/lib/mantel-products-data";
import {
  getShowroom,
  DUBLIN_VIRTUAL_BOOKING_LABEL,
  DUBLIN_VISIT_REQUEST_LABEL,
  DUBLIN_VISIT_REQUEST_HREF,
} from "@/lib/business-data";

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
  const isDublin = showroom?.virtualOnly === true;

  return (
    <>
      <EditorialPageHero
        eyebrow={isDublin ? "Virtual Consultation" : "Private Consultation"}
        title={isDublin ? DUBLIN_VIRTUAL_BOOKING_LABEL : "Book a Showroom Appointment"}
        description={
          isDublin
            ? "Meet one-on-one with a Dublin hearth specialist by video or phone — review the mantel and fireplace collection together and shape a clear direction for your project from wherever you are."
            : "Meet one-on-one with a hearth specialist, experience the mantel and fireplace collection in person, and shape a clear direction for your project."
        }
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-stone-500 mb-6 leading-relaxed max-w-2xl mx-auto">
          {isDublin
            ? "The Dublin showroom now offers virtual consultations only. Select a time below and we\u2019ll confirm your virtual appointment by email."
            : "Choose your preferred showroom, select a time, and we\u2019ll confirm your appointment by email."}
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
                  Preferred showroom: <span className="font-medium">{showroom.city}</span>
                  {isDublin && <span className="font-medium"> (virtual consultation)</span>}.
                </>
              )}
            </p>
            <p className="mt-2 text-xs text-stone-500">
              Mention this when you schedule below (or in the appointment notes) so our
              team can have it ready for your visit.
            </p>
          </div>
        )}

        {isDublin && (
          <p className="mb-6 text-sm font-medium text-[color:var(--accent)]">
            When scheduling below, select &ldquo;Virtual Consultation&rdquo; as your appointment type.
          </p>
        )}

        <div className="overflow-hidden border border-[color:var(--sand-deep)] bg-white shadow-sm">
          <iframe
            src={bookingUrl}
            title={
              isDublin
                ? "Schedule a virtual consultation with California Mantel & Fireplace"
                : "Schedule a showroom consultation with California Mantel & Fireplace"
            }
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

        {isDublin && (
          <div className="mt-10 mx-auto max-w-xl border border-[color:var(--sand-deep)] bg-[#F9F7F3] px-6 py-6 text-center">
            <p className="text-stone-700 font-medium mb-3">
              Want to see the Dublin showroom in person? Request a visit.
            </p>
            <Link
              href={DUBLIN_VISIT_REQUEST_HREF}
              className="inline-block bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white px-6 py-3 rounded font-medium text-sm transition-colors"
            >
              {DUBLIN_VISIT_REQUEST_LABEL} →
            </Link>
            <p className="mt-3 text-sm text-stone-500">
              Prefer to call?{" "}
              <a href="tel:9254361731" className="text-[color:var(--accent)] font-medium hover:underline">
                (925) 436-1731
              </a>
            </p>
          </div>
        )}

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
