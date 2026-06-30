export const metadata = {
  title: "SMS Privacy Policy | California Mantel & Fireplace",
  description:
    "Learn about California Mantel & Fireplace's SMS privacy practices, opt-in and opt-out options, and data privacy policies for customer communications.",
};

export default function SmsPrivacyPolicyPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            SMS Privacy Policy
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-stone">
        <p className="text-stone-500 text-sm mb-8">Last updated: June 2025</p>

        <h2>Overview</h2>
        <p>
          California Mantel &amp; Fireplace (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) may send you SMS (text message)
          communications related to your inquiries, appointments, and service updates. This policy
          describes how we use your phone number for SMS communications and how you can opt in or out.
        </p>

        <h2>Opt-In</h2>
        <p>
          By providing your phone number and consenting to SMS communications — whether through our
          website forms, in-showroom sign-ups, or verbally — you agree to receive text messages from
          California Mantel &amp; Fireplace. Message frequency varies. Standard message and data rates
          may apply.
        </p>

        <h2>Types of SMS Communications</h2>
        <ul>
          <li>Appointment confirmations and reminders</li>
          <li>Estimate and project status updates</li>
          <li>Promotional offers and seasonal sales (only with your explicit consent)</li>
          <li>Responses to your inquiries</li>
        </ul>

        <h2>Opt-Out</h2>
        <p>
          You may opt out of SMS communications at any time by replying <strong>STOP</strong> to any
          text message we send you. You may also call or email us directly to request removal from our
          SMS list. After opting out, you will receive a single confirmation message confirming your
          unsubscribe request.
        </p>

        <h2>Help</h2>
        <p>
          For help, reply <strong>HELP</strong> to any SMS message or contact us directly at one of
          our showrooms.
        </p>

        <h2>Data Privacy</h2>
        <p>
          We will not share, sell, or rent your phone number to any third party for their marketing
          purposes. Your phone number is used solely for the purposes described in this policy and
          to provide the services you request from California Mantel &amp; Fireplace.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this SMS Privacy Policy, please contact us:
        </p>
        <ul>
          <li>Anaheim: (714) 908-7388</li>
          <li>Dublin: (925) 436-1731</li>
          <li>Sacramento: (916) 665-0627</li>
        </ul>
      </section>
    </>
  );
}
