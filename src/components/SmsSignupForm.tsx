"use client";
import { useState } from "react";

import { trackEvent, trackLeadConversion } from "@/lib/analytics";

// Reuses the same Web3Forms destination as ContactForm so leads land in one
// inbox; subject line distinguishes SMS opt-ins from other form submissions.
const ACCESS_KEY = "77eca617-9eb9-4352-8b5a-c89bf8870232";

export default function SmsSignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.set("access_key", ACCESS_KEY);
    formData.set("subject", "SMS Opt-In — calmantel.com");
    formData.set("from_name", "California Mantel & Fireplace Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        trackEvent("sms_signup_submit", {});
        trackLeadConversion({ lead_type: "sms_signup" });
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <h3
          className="text-xl font-medium text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          You&apos;re signed up!
        </h3>
        <p className="text-stone-500 text-sm max-w-sm mx-auto">
          Thanks for signing up for texts from California Mantel &amp; Fireplace.
          Reply <strong>STOP</strong> at any time to unsubscribe, or <strong>HELP</strong>{" "}
          for help.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          Mobile Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          required
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          Email <span className="text-stone-400 font-normal">(optional)</span>
        </label>
        <input
          type="email"
          name="email"
          autoComplete="email"
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
        />
      </div>

      <div className="bg-[#F9F7F3] border border-[color:var(--sand-deep)] rounded-lg p-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="SMS Consent"
            value="Yes — explicit consent given"
            required
            className="mt-1 h-4 w-4 shrink-0 rounded border-stone-400 text-[color:var(--accent)] focus:ring-[color:var(--accent)]"
          />
          <span className="text-sm text-stone-600 leading-relaxed">
            By checking this box, I consent to receive recurring automated
            marketing text messages (e.g. promotions, sales, and appointment
            updates) from <strong>California Mantel &amp; Fireplace</strong> at
            the phone number provided above. Message frequency varies. Msg
            &amp; data rates may apply. Reply <strong>STOP</strong> to
            unsubscribe or <strong>HELP</strong> for help. Consent is not a
            condition of any purchase. View our{" "}
            <a
              href="https://www.calmantel.com/sms-privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[color:var(--accent)]"
            >
              SMS Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://www.calmantel.com/sms-terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[color:var(--accent)]"
            >
              SMS Terms of Service
            </a>
            .
          </span>
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto bg-[color:var(--ink)] hover:bg-[color:var(--accent)] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium transition-colors"
      >
        {loading ? "Signing up…" : "Sign Up for Texts"}
      </button>
    </form>
  );
}
