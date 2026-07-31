import Link from "next/link";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Fireplace Service & Repair | California Mantel & Fireplace",
  description:
    "Request fireplace service, repair, cleaning, or maintenance from California Mantel & Fireplace.",
  alternates: { canonical: "/fireplaces/service-repair" },
};

const serviceTypes = [
  {
    number: "01",
    title: "Diagnosis & Repair",
    description:
      "Pilot, ignition, burner, valve, remote, fan, and performance concerns—carefully evaluated before work begins.",
  },
  {
    number: "02",
    title: "Cleaning & Maintenance",
    description:
      "Routine care helps keep the flame presentation clean, components operating properly, and your fireplace ready when you need it.",
  },
  {
    number: "03",
    title: "Older Fireplace Guidance",
    description:
      "If a repair is not practical, we’ll explain why and help you understand thoughtful replacement options without pressure.",
  },
];

const nextSteps = [
  {
    title: "Find Your Mantel",
    description: "Search by style or fireplace dimensions.",
    href: "/mantels",
  },
  {
    title: "Explore Gas Inserts",
    description: "Efficient warmth for an existing fireplace.",
    href: "/fireplaces/gas-inserts",
  },
  {
    title: "Inspiration Gallery",
    description: "See real before-and-after transformations.",
    href: "/projects",
  },
];

export default function ServiceRepairPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Fireplace Service & Repair"
        title="Keep the heart of your home working beautifully."
        description="From a stubborn pilot light to a fireplace that simply doesn’t feel like itself, our service team is here to help you get back to warmth, comfort, and peace of mind."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[color:var(--accent)]">
                Thoughtful Fireplace Care
              </p>
              <h2
                className="text-3xl font-medium tracking-tight text-[color:var(--ink)] md:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Service that starts with listening.
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-[color:var(--ink)]/60">
              <p>
                Fireplaces are equal parts appliance and gathering place. When yours is
                not lighting, heating evenly, or operating the way it should, you want a
                clear answer—not a sales pitch.
              </p>
              <p>
                Tell us what you’re noticing and share the details you have. Our team
                will review your request, help identify the right next step, and
                coordinate service for products and areas we support.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 border-y border-[color:var(--sand-deep)] md:grid-cols-3">
            {serviceTypes.map((service, index) => (
              <article
                key={service.number}
                className={`py-8 md:px-8 ${index > 0 ? "border-t border-[color:var(--sand-deep)] md:border-l md:border-t-0" : ""}`}
              >
                <p className="text-sm text-[color:var(--accent)]">{service.number}</p>
                <h3
                  className="mb-3 mt-8 text-xl font-medium text-[color:var(--ink)]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--ink)]/55">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="service-request" className="border-y border-[color:var(--sand-deep)] bg-[#F9F7F3]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[color:var(--accent)]">
                Service Request
              </p>
              <h2
                className="text-3xl font-medium tracking-tight text-[color:var(--ink)] md:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Tell us about your fireplace.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[color:var(--ink)]/55">
              The more detail you can share, the better we can prepare. Complete the
              form and our team will be in touch.
            </p>
          </div>

          <div className="border border-[color:var(--sand-deep)] bg-white p-2 shadow-sm sm:p-4">
            <iframe
              title="California Mantel and Fireplace service request"
              src="https://solution.serviceproz.net/WorkOrderRequestFormSP.aspx?id=425"
              sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-modals"
              className="h-[740px] w-full border-0 bg-white"
            />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[color:var(--accent)]">
                Tell Us About Your Project
              </p>
              <h2
                className="mb-5 text-3xl font-medium tracking-tight md:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Repair today, or imagine what comes next.
              </h2>
              <p className="max-w-lg leading-relaxed text-white/60">
                Sometimes service is all you need. Sometimes it opens the door to a
                more efficient insert or a new focal point. Explore at your pace.
              </p>
            </div>

            <div className="border-t border-white/20">
              {nextSteps.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group grid grid-cols-[36px_1fr_auto] items-center gap-4 border-b border-white/20 py-6"
                >
                  <span className="text-sm text-[color:var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong
                      className="block text-xl font-medium"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.title}
                    </strong>
                    <small className="mt-1 block text-white/50">{item.description}</small>
                  </span>
                  <span
                    className="text-xl text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-white"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
