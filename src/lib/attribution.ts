// Shared first-touch attribution capture. Persists campaign/click-id context
// to sessionStorage on first landing so any lead-generating surface (chat,
// and eventually Contact/Estimate) can attach identical fields to its lead
// payload without re-implementing capture logic.
const STORAGE_KEY = "cmf_first_touch";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

export type FirstTouch = Record<(typeof TRACKED_PARAMS)[number], string> & {
  referrer: string;
  landing_page: string;
};

function captureFirstTouch(): FirstTouch {
  const params = new URLSearchParams(window.location.search);
  const entries = TRACKED_PARAMS.map((key) => [key, params.get(key) ?? ""] as const);

  return {
    ...(Object.fromEntries(entries) as Record<(typeof TRACKED_PARAMS)[number], string>),
    referrer: document.referrer || "",
    landing_page: window.location.pathname + window.location.search,
  };
}

// Returns this session's first-touch attribution, capturing it on the first
// call and reading the stored value on every call after — values never
// change mid-session even if the visitor navigates through pages with
// different (or no) campaign params.
export function getFirstTouch(): FirstTouch {
  if (typeof window === "undefined") {
    return { ...Object.fromEntries(TRACKED_PARAMS.map((k) => [k, ""])), referrer: "", landing_page: "" } as FirstTouch;
  }

  const stored = window.sessionStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as FirstTouch;
    } catch {
      // Fall through and re-capture if the stored value is corrupt.
    }
  }

  const firstTouch = captureFirstTouch();
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(firstTouch));
  return firstTouch;
}
