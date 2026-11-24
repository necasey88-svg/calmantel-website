"use client";

import { useSyncExternalStore } from "react";
import { isHolidayNoticeActive } from "@/lib/business-data";

// There's nothing to subscribe to here — the only thing that changes is
// wall-clock time, which doesn't emit events — so this is a no-op.
function subscribe() {
  return () => {};
}

function getSnapshot() {
  return isHolidayNoticeActive();
}

// Always render the regular (non-holiday) view for SSR/static generation;
// `getSnapshot` supplies the real answer once we're running in the browser
// and can read the visitor's actual clock. Deliberately not a useEffect +
// setState: useSyncExternalStore is the pattern React recommends for a value
// that legitimately differs between the server-rendered snapshot and the
// client (same idea as reading the current time, `navigator.onLine`, etc.),
// and it's how we make the holiday notice disappear after the cutoff
// without needing a redeploy — even on a page whose static HTML was cached
// from during the holiday window.
function getServerSnapshot() {
  return false;
}

/** True once the browser's clock confirms we're still inside the Thanksgiving 2026 holiday-hours window. */
export function useHolidayNoticeActive(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
