"use client";

import { useState, useSyncExternalStore } from "react";
import { useHolidayNoticeActive } from "@/hooks/useHolidayNoticeActive";

// Bump this if the copy/dates ever change, so a visitor who dismissed a past
// holiday notice still sees a genuinely new one.
const DISMISS_KEY = "cmf-holiday-notice-dismissed-2026-thanksgiving";

function subscribeDismissed(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getDismissedSnapshot() {
  try {
    return window.localStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    // Storage can throw in some locked-down browser contexts — fail open
    // and just show the banner.
    return false;
  }
}

function getDismissedServerSnapshot() {
  return false;
}

/**
 * Slim, dismissible sitewide banner for Thanksgiving weekend 2026 holiday
 * hours. No phone numbers or prices — just the schedule and a note on when
 * regular hours resume.
 *
 * `useHolidayNoticeActive` only resolves to true once mounted in the browser
 * (see that hook), so this banner stays hidden during server rendering and
 * only appears after a client-side check of the real date — the same
 * mechanism that lets it disappear after the cutoff with no redeploy, even
 * if this page's HTML was statically generated and cached during the
 * holiday window itself.
 */
export default function HolidayHoursBanner() {
  const holidayActive = useHolidayNoticeActive();
  const dismissedInStorage = useSyncExternalStore(
    subscribeDismissed,
    getDismissedSnapshot,
    getDismissedServerSnapshot,
  );
  const [dismissedThisSession, setDismissedThisSession] = useState(false);

  if (!holidayActive || dismissedInStorage || dismissedThisSession) return null;

  const dismiss = () => {
    setDismissedThisSession(true);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Ignore — worst case the banner reappears on the next page load.
    }
  };

  return (
    <div className="relative bg-[color:var(--sand)] border-b border-[color:var(--sand-deep)] text-[color:var(--ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 pr-10 sm:pr-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs sm:text-[13px] leading-snug">
        <span className="font-semibold uppercase tracking-wide text-[color:var(--accent)]">
          Thanksgiving Weekend Hours:
        </span>
        <span>
          Anaheim closed Thu 11/26 &amp; Sat 11/28, open Fri 11/27 (Black Friday) 9 AM–5 PM.
        </span>
        <span>
          Sacramento closed Thu 11/26 &amp; Fri 11/27, open Sat 11/28 10 AM–2 PM.
        </span>
        <span className="text-[color:var(--ink)]/60">Regular hours resume Mon 11/30.</span>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss holiday hours notice"
        className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 p-1.5 text-[color:var(--ink)]/50 hover:text-[color:var(--ink)] transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
