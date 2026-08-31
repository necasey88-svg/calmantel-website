import SmsSignupForm from "@/components/SmsSignupForm";

export const metadata = {
  title: "SMS Sign-Up | California Mantel & Fireplace",
  description:
    "Sign up for text message updates from California Mantel & Fireplace — promotions, appointment reminders, and project updates sent straight to your phone.",
  alternates: { canonical: "/sms-signup" },
};

export default function SmsSignupPage() {
  return (
    <section className="bg-[#F9F7F3] py-16 sm:py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Text Sign-Up
        </h1>
        <p className="text-stone-600 mb-8 leading-relaxed">
          Get texts from <strong>California Mantel &amp; Fireplace</strong>{" "}
          on new arrivals, promotions, and appointment updates. Fill out the
          form below to sign up.
        </p>

        <div className="bg-white border border-[color:var(--sand-deep)] rounded-2xl p-6 sm:p-8">
          <SmsSignupForm />
        </div>
      </div>
    </section>
  );
}
