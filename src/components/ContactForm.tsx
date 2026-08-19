"use client";
import { useState } from "react";

import { trackEvent } from "@/lib/analytics";

// Reuses the same Web3Forms destination as the /estimate form so leads land
// in one inbox; subject line distinguishes quick contact messages from
// full estimate requests.
const ACCESS_KEY = "77eca617-9eb9-4352-8b5a-c89bf8870232";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.set("access_key", ACCESS_KEY);
    formData.set("subject", "New Contact Request — calmantel.com");
    formData.set("from_name", "California Mantel & Fireplace Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        trackEvent("contact_form_submit", {
          preferred_time: String(formData.get("Preferred Callback Time") || ""),
        });
        trackEvent("generate_lead", { lead_type: "contact_form" });
        trackEvent("qualify_lead", { lead_type: "contact_form" });
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
          Message sent!
        </h3>
        <p className="text-stone-500 text-sm max-w-sm mx-auto">
          Thanks for reaching out — a member of our team will get back to you within one business day.
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
          />
        </div>
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

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          Best time to call back <span className="text-stone-400 font-normal">(optional)</span>
        </label>
        <select
          name="Preferred Callback Time"
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] bg-white"
        >
          <option value="">No preference</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          Message <span className="text-stone-400 font-normal">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] resize-none"
          placeholder="What can we help with?"
        />
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
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
