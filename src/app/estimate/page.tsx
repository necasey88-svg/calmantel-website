"use client";
import { useState } from "react";

export default function EstimatePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Free Consultation
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tell Us About Your Project
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            Fill out the form below and one of our fireplace experts will be in touch
            to discuss your project and provide a free estimate.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {submitted ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">✅</div>
            <h2
              className="text-2xl font-bold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Thank you!
            </h2>
            <p className="text-stone-500">
              We&apos;ve received your request and will be in touch within 1–2 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                City / Location *
              </label>
              <input
                type="text"
                required
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                What are you looking for? *
              </label>
              <select
                required
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 bg-white"
              >
                <option value="">Select an option</option>
                <option>Mantel / Surround</option>
                <option>Gas Fireplace / Insert</option>
                <option>Electric Fireplace</option>
                <option>Outdoor Fireplace</option>
                <option>Complete Fireplace + Mantel Package</option>
                <option>Not Sure — Need Advice</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Tell us more about your project
              </label>
              <textarea
                rows={5}
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none"
                placeholder="Describe your fireplace, room size, style preferences, timeline…"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3.5 rounded-lg font-semibold transition-colors"
            >
              Submit Request
            </button>
          </form>
        )}
      </section>
    </>
  );
}
