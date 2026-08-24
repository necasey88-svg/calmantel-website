import Link from "next/link";

export const metadata = {
  title: "SMS Terms of Service | California Mantel & Fireplace",
  description:
    "Terms and conditions for California Mantel & Fireplace's SMS text messaging program, including opt-in, message frequency, and opt-out details.",
  alternates: { canonical: "/sms-terms-of-service" },
};

export default function SmsTermsOfServicePage() {
  return (
    <>
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            SMS Terms of Service
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-stone">
        <p className="text-stone-500 text-sm mb-8">Last updated: August 2026</p>

        <h2>Program Description</h2>
        <p>
          California Mantel &amp; Fireplace (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) offers an SMS
          (text message) program that may include appointment reminders, estimate and
          order updates, and promotional or marketing messages such as sales, new
          product announcements, and special offers.
        </p>

        <h2>How to Opt In</h2>
        <p>
          You may opt in to receive marketing text messages from us by submitting your
          phone number through a website form (such as our estimate, contact, or
          newsletter sign-up forms), a checkout or account flow, or an in-showroom
          sign-up, and affirmatively agreeing to receive text messages. By opting in,
          you consent to receive recurring automated marketing text messages from
          California Mantel &amp; Fireplace at the phone number provided. Consent to
          receive marketing texts is not a condition of any purchase.
        </p>

        <h2>Message Frequency</h2>
        <p>
          Message frequency varies and may include multiple messages per month
          depending on your interactions with us and current promotions.
          <strong> Message and data rates may apply.</strong>
        </p>

        <h2>How to Opt Out</h2>
        <p>
          You can cancel the SMS program at any time. Text <strong>STOP</strong> to any
          text message from us. After you send the message <strong>STOP</strong> to us,
          we will send you a message to confirm that you have been unsubscribed. After
          this, you will no longer receive SMS messages from us. If you want to join
          again, sign up as you did the first time and we will start sending SMS
          messages to you again.
        </p>

        <h2>How to Get Help</h2>
        <p>
          If you are experiencing issues with the messaging program, reply with the
          keyword <strong>HELP</strong> for more assistance, or contact us directly at
          one of the showroom numbers below. You can also contact us by email at{" "}
          <a href="mailto:info@calmantel.com">info@calmantel.com</a>.
        </p>

        <h2>Carriers</h2>
        <p>
          Carriers are not liable for delayed or undelivered messages. As always,
          message and data rates may apply for any messages sent to you from us and to
          us from you. If you have any questions about your text plan or data plan, it
          is best to contact your wireless provider.
        </p>

        <h2>Privacy</h2>
        <p>
          We respect your privacy. Please review our{" "}
          <Link href="/sms-privacy-policy">SMS Privacy Policy</Link> for more
          information on how we collect, use, and protect your information in
          connection with our SMS program.
        </p>

        <h2>Contact Us</h2>
        <p>For questions about these SMS Terms of Service, please contact us:</p>
        <ul>
          <li>Anaheim: (714) 908-7388</li>
          <li>Dublin: (925) 436-1731</li>
          <li>Sacramento: (916) 665-0627</li>
          <li>Email: <a href="mailto:info@calmantel.com">info@calmantel.com</a></li>
        </ul>
      </section>
    </>
  );
}
