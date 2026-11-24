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
 * Renders a showroom's open-hours lines, swapping in the Thanksgiving
 * weekend 2026 override while it's in effect and reverting to the regular
 * schedule afterward.
 *
 * `useHolidayNoticeActive` reports `false` during server rendering and only
 * resolves to the real answer once mounted in the browser (see that hook for
 * why) — so the regular hours always render first, then get upgraded (or
 * not) once we can check the visitor's actual clock. That's what lets the
 * notice disappear on schedule even on a statically generated page whose
 * cached HTML was produced during the holiday window, with no
 * rebuild/redeploy required.
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
  const holidayLines = holidayActive ? getHolidayHoursLines(slug) : null;

  if (!showroom) return null;

  if (holidayLines) {
    return (
      <>
        <p className={holidayLabelClassName}>Thanksgiving Weekend Hours</p>
        {holidayLines.map((h) => (
          <p key={h} className={lineClassName}>
            {h}
          </p>
        ))}
        {showHolidayResumeNote && <p className={noteClassName}>{THANKSGIVING_2026_RESUME_NOTE}</p>}
      </>
    );
  }

  const lines = hoursSummary(showroom);
  const note = showRegularClosedNote ? closedDaysNote(showroom) : undefined;
  return (
    <>
      {lines.map((h) => (
        <p key={h} className={lineClassName}>
          {h}
        </p>
      ))}
      {note && <p className={noteClassName}>{note}</p>}
    </>
  );
}
