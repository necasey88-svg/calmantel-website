"use client";

import { useHolidayNoticeActive } from "@/hooks/useHolidayNoticeActive";
import {
  getHolidayHoursLines,
  hoursSummary,
  closedDaysNote,
  getShowroom,
  THANKSGIVING_2026_RESUME_NOTE,
} from "@/lib/business-data";

type Props = {
  slug: string;
  lineClassName?: string;
  holidayLabelClassName?: string;
  noteClassName?: string;
  /** Show the regular "Closed ..." note (e.g. "Closed Sun") when not in the holiday window. */
  showRegularClosedNote?: boolean;
  /** Show the "Regular hours resume ..." note while the holiday override is active. */
  showHolidayResumeNote?: boolean;
};

/**
 * Renders a showroom's open-hours lines: the regular schedule, plus the
 * Thanksgiving weekend 2026 override appended underneath while it's in
 * effect (not in place of the regular line — the notice window opens a few
 * days before Thanksgiving itself, so on, say, Mon/Tue/Wed of that week the
 * showroom is still open its normal hours and that must keep showing;
 * only Thu 11/26–Sat 11/28 actually change).
 *
 * `useHolidayNoticeActive` reports `false` during server rendering and only
 * resolves to the real answer once mounted in the browser (see that hook for
 * why) — so the regular hours always render first, then get the holiday
 * block appended (or not) once we can check the visitor's actual clock.
 * That's what lets the notice disappear on schedule even on a statically
 * generated page whose cached HTML was produced during the holiday window,
 * with no rebuild/redeploy required.
 */
export default function ShowroomHoursLines({
  slug,
  lineClassName = "text-stone-700 text-sm font-medium",
  holidayLabelClassName = "text-[11px] font-semibold uppercase tracking-wider text-[color:var(--accent)] mb-1",
  noteClassName = "text-stone-400 text-xs mt-1",
  showRegularClosedNote = false,
  showHolidayResumeNote = true,
}: Props) {
  const showroom = getShowroom(slug);
  const holidayActive = useHolidayNoticeActive();

  if (!showroom) return null;

  const lines = hoursSummary(showroom);
  const holidayLines = holidayActive ? getHolidayHoursLines(slug) : null;
  // The regular "Closed ..." note would be redundant/confusing right next to
  // the holiday override block, so only show one or the other.
  const note = !holidayLines && showRegularClosedNote ? closedDaysNote(showroom) : undefined;

  return (
    <>
      {lines.map((h) => (
        <p key={h} className={lineClassName}>
          {h}
        </p>
      ))}
      {note && <p className={noteClassName}>{note}</p>}
      {holidayLines && (
        <>
          <p className={holidayLabelClassName}>Thanksgiving Weekend Hours</p>
          {holidayLines.map((h) => (
            <p key={h} className={lineClassName}>
              {h}
            </p>
          ))}
          {showHolidayResumeNote && <p className={noteClassName}>{THANKSGIVING_2026_RESUME_NOTE}</p>}
        </>
      )}
    </>
  );
}
