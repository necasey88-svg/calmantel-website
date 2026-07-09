"use client";
import { useState, useRef } from "react";

import EditorialPageHero from "@/components/EditorialPageHero";
const ACCESS_KEY = "77eca617-9eb9-4352-8b5a-c89bf8870232";

export default function EstimatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files || []);
    const valid = selected.filter((f) => f.size <= 10 * 1024 * 1024); // 10MB limit per file
    if (valid.length < selected.length) {
      setError("Some files were skipped — max 10 MB per photo.");
    } else {
      setError("");
    }
    setFiles((prev) => [...prev, ...valid].slice(0, 5)); // max 5 files
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Build a plain JSON payload (Web3Forms doesn't support file uploads)
    const payload: Record<string, string> = {
      access_key: ACCESS_KEY,
      subject: "New Estimate Request — calmantel.com",
    };
    formData.forEach((value, key) => {
      if (typeof value === "string") payload[key] = value;
    });

    // List the photo filenames in the message so staff know to follow up
    if (files.length > 0) {
      const fileNames = files.map((f) => `• ${f.name} (${(f.size / 1024 / 1024).toFixed(1)} MB)`).join("\n");
      payload.message = (payload.message || "") + `\n\n--- Photos attached by customer ---\n${fileNames}\n(Customer will email photos separately or staff should request them.)`;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
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

  return (
    <>
      <EditorialPageHero
        eyebrow="Project Consultation"
        title="Tell Us About Your Project"
        description="Share the room, style, and scope you have in mind. Our team will review the details and follow up with a thoughtful next step for your fireplace or mantel project."
      />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-green-100 rounded-sm flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2
              className="text-2xl font-medium text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Request Received!
            </h2>
            <p className="text-stone-500 max-w-sm mx-auto">
              Thank you! We&apos;ve received your estimate request and will be in touch within 1–2 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden subject line for the email */}
            <input type="hidden" name="subject" value="New Estimate Request — calmantel.com" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  name="first_name"
                  required
                  className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="last_name"
                  required
                  className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                City / Location *
              </label>
              <input
                type="text"
                name="city"
                required
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                What are you looking for? *
              </label>
              <select
                name="project_type"
                required
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] bg-white"
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
                name="message"
                rows={5}
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] resize-none"
                placeholder="Describe your fireplace, room size, style preferences, timeline…"
              />
            </div>

            {/* Photo upload */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Photos of Your Space <span className="text-stone-400 font-normal">(optional — list them here and email to info@calmantel.com)</span>
              </label>
              <div
                className="border-2 border-dashed border-stone-300 rounded-lg p-6 text-center cursor-pointer hover:border-[color:var(--accent)] transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <svg className="w-8 h-8 text-stone-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-stone-500">
                  <span className="text-[color:var(--accent)] font-medium">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-stone-400 mt-1">JPG, PNG, HEIC, WEBP</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              {/* File preview list */}
              {files.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {files.map((file, i) => (
                    <li key={i} className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm">
                      <div className="flex items-center gap-2 min-w-0">
                        <svg className="w-4 h-4 text-[color:var(--accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="truncate text-stone-700">{file.name}</span>
                        <span className="text-stone-400 flex-shrink-0">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="text-stone-400 hover:text-red-500 transition-colors ml-3 flex-shrink-0"
                        aria-label="Remove file"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {files.length >= 5 && (
                <p className="text-xs text-[color:var(--accent)] mt-2">Maximum of 5 photos reached.</p>
              )}
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[color:var(--ink)] hover:bg-[color:var(--accent)] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending…
                </>
              ) : (
                "Submit Request"
              )}
            </button>
          </form>
        )}
      </section>
    </>
  );
}
