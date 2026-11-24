// Canonical business / location data — single source of truth for NAP
// (Name, Address, Phone) consistency and structured data (schema.org).
// Keeping this in one place prevents the NAP mismatches that hurt local SEO.

export const SITE_URL = "https://www.calmantel.com";

export const business = {
  name: "California Mantel & Fireplace, Inc.",
  legalName: "California Mantel & Fireplace, Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  founded: "1987",
  description:
    "Aussie-American family-owned since 1987. We manufacture wood and precast concrete fireplace mantels and install gas, electric, and outdoor fireplaces across California and Nevada.",
  sameAs: [
    "https://www.facebook.com/californiamantel",
    "https://www.instagram.com/californiamantel",
  ],
} as const;

export type Showroom = {
  city: string;
  slug: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  phone: string; // display format
  tel: string; // digits only
  // opening hours in schema.org OpeningHoursSpecification shape.
  // Leave empty (and set appointmentOnly) for locations with no walk-in hours.
  hours: {
    days: string[];
    opens: string; // 24h "HH:MM"
    closes: string;
  }[];
  // When true, this location has no walk-in hours — don't advertise any
  // (including in schema.org markup). Always pair with hours: [].
  appointmentOnly?: boolean;
  // When true, this location no longer takes in-person showroom bookings —
  // the primary booking flow is a virtual consultation, with in-person
  // visits available only on request (see DUBLIN_VISIT_REQUEST_HREF).
  // Always pair with appointmentOnly: true and hours: [].
  virtualOnly?: boolean;
  geo?: { lat: number; lng: number };
};

/** Exact copy used wherever Dublin's hours would otherwise be shown. */
export const DUBLIN_VIRTUAL_COPY =
  "Virtual consultations available – in-person visits by request.";

export const DUBLIN_VIRTUAL_BOOKING_LABEL = "Book a Virtual Consultation";
export const DUBLIN_VISIT_REQUEST_LABEL = "Request an In-Person Visit";
/** Pre-filled /contact link for visitors who want to see the Dublin showroom in person. */
export const DUBLIN_VISIT_REQUEST_HREF = "/contact?topic=dublin-visit#contact-form";

// Canonical values taken from the dedicated location pages.
export const showrooms: Showroom[] = [
  {
    city: "Anaheim",
    slug: "anaheim",
    streetAddress: "1430 S Anaheim Blvd",
    addressLocality: "Anaheim",
    addressRegion: "CA",
    postalCode: "92805",
    phone: "(714) 908-7388",
    tel: "7149087388",
    hours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  },
  {
    city: "Dublin",
    slug: "dublin",
    streetAddress: "6681 Sierra Ln Ste D",
    addressLocality: "Dublin",
    addressRegion: "CA",
    postalCode: "94568",
    phone: "(925) 436-1731",
    tel: "9254361731",
    // By appointment only starting Oct 13, 2026 — no walk-in hours. Keep
    // hours empty and don't add OpeningHoursSpecification entries for this
    // location (see showroomSchema below).
    hours: [],
    appointmentOnly: true,
    // Closed to walk-in/regular in-person visits starting Oct 14, 2026 —
    // the showroom now books virtual consultations by default, with
    // in-person visits available only by request through /contact.
    virtualOnly: true,
  },
  {
    city: "Sacramento",
    slug: "sacramento",
    streetAddress: "4141 N Freeway Blvd",
    addressLocality: "Sacramento",
    addressRegion: "CA",
    postalCode: "95834",
    phone: "(916) 665-0627",
    tel: "9166650627",
    hours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
  },
];

export function getShowroom(slug: string): Showroom | undefined {
  return showrooms.find((s) => s.slug === slug);
}

// ---- Thanksgiving weekend 2026 holiday hours ------------------------------
// Temporary override for Thu 11/26–Sat 11/28/2026 only. Does NOT touch the
// regular `hours` data above — `isHolidayNoticeActive()` gates every caller
// so the override (and any banner built on it) disappears on its own after
// the cutoff, with no redeploy required, as long as callers check it at
// render/request time rather than baking the result in at build time (see
// `src/components/ShowroomHoursLines.tsx`, a client component that checks on
// mount for exactly this reason).

type HolidayDayOverride = {
  /** ISO date, for the schema.org special-hours builder below. */
  date: string;
  /** Short display label, e.g. "Thu 11/26". */
  label: string;
  status: "closed" | "open";
  opens?: string; // 24h "HH:MM", required when status is "open"
  closes?: string;
  note?: string; // e.g. "Thanksgiving", "Black Friday"
};

const THANKSGIVING_2026_HOLIDAY_HOURS: { slug: string; days: HolidayDayOverride[] }[] = [
  {
    slug: "anaheim",
    days: [
      { date: "2026-11-26", label: "Thu 11/26", status: "closed", note: "Thanksgiving" },
      { date: "2026-11-27", label: "Fri 11/27", status: "open", opens: "09:00", closes: "17:00", note: "Black Friday" },
      { date: "2026-11-28", label: "Sat 11/28", status: "closed" },
    ],
  },
  {
    slug: "sacramento",
    days: [
      { date: "2026-11-26", label: "Thu 11/26", status: "closed", note: "Thanksgiving" },
      { date: "2026-11-27", label: "Fri 11/27", status: "closed" },
      { date: "2026-11-28", label: "Sat 11/28", status: "open", opens: "10:00", closes: "14:00" },
    ],
  },
  // Dublin is intentionally omitted — appointment-only/virtual, no change.
];

export const THANKSGIVING_2026_RESUME_NOTE = "Regular hours resume Mon 11/30.";

// Window: start of Thanksgiving week (Mon 11/23/2026) through end of day Sat
// 11/28/2026, both in America/Los_Angeles. Pacific is on standard time
// (UTC-8) by late November (DST ends the first Sunday of November), so
// midnight PST on 11/23 is 2026-11-23T08:00:00.000Z and 11:59:59.999 PM PST
// on 11/28 is 2026-11-29T07:59:59.999Z. The start gate matters just as much
// as the cutoff: without it the notice (and its "closed Thu/Fri/Sat" copy)
// would otherwise read as live from the moment this ships, weeks early.
const THANKSGIVING_2026_NOTICE_START_UTC_MS = Date.parse("2026-11-23T08:00:00.000Z");
const THANKSGIVING_2026_NOTICE_CUTOFF_UTC_MS = Date.parse("2026-11-29T07:59:59.999Z");

/** True from the start of Thanksgiving week through end-of-day Sat 11/28/2026 Pacific time, false otherwise. */
export function isHolidayNoticeActive(now: Date = new Date()): boolean {
  const t = now.getTime();
  return t >= THANKSGIVING_2026_NOTICE_START_UTC_MS && t <= THANKSGIVING_2026_NOTICE_CUTOFF_UTC_MS;
}

/**
 * Holiday-hours display lines for a showroom (e.g. "Thu 11/26: Closed
 * (Thanksgiving)"), or null when there's no override for that slug or the
 * notice window has passed. Always check at render/request time — see the
 * module comment above.
 */
export function getHolidayHoursLines(slug: string, now: Date = new Date()): string[] | null {
  if (!isHolidayNoticeActive(now)) return null;
  const override = THANKSGIVING_2026_HOLIDAY_HOURS.find((o) => o.slug === slug);
  if (!override) return null;
  return override.days.map((d) => {
    const suffix = d.note ? ` (${d.note})` : "";
    if (d.status === "closed") return `${d.label}: Closed${suffix}`;
    return `${d.label}: ${formatTime(d.opens!)} \u2013 ${formatTime(d.closes!)}${suffix}`;
  });
}

/**
 * Optional schema.org specialOpeningHoursSpecification entries for a
 * showroom's holiday override, or [] when none applies. Per Google's
 * structured-data guidance, a closed day is represented with equal
 * opens/closes times rather than omitting them.
 */
export function specialOpeningHoursSpecification(slug: string, now: Date = new Date()) {
  if (!isHolidayNoticeActive(now)) return [];
  const override = THANKSGIVING_2026_HOLIDAY_HOURS.find((o) => o.slug === slug);
  if (!override) return [];
  return override.days.map((d) => ({
    "@type": "OpeningHoursSpecification",
    validFrom: d.date,
    validThrough: d.date,
    opens: d.status === "open" ? d.opens : "00:00",
    closes: d.status === "open" ? d.closes : "00:00",
  }));
}

// ---- display formatting helpers --------------------------------------------
// Single source of truth for "scannable" hours/address strings, so the
// showrooms listing, Footer, and location pages can't drift out of sync.

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const DAY_ABBR: Record<string, string> = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
  Sunday: "Sun",
};

/** "09:00" -> "9:00 AM", "17:00" -> "5:00 PM" */
function formatTime(time: string): string {
  const [hStr, mStr] = time.split(":");
  const h = parseInt(hStr, 10);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mStr} ${period}`;
}

/** Joins abbreviated day names with an en dash for a run, or commas + "&" otherwise. */
function formatDayList(days: string[]): string {
  const abbr = days.map((d) => DAY_ABBR[d] ?? d);
  const indices = days.map((d) => WEEK_DAYS.indexOf(d));
  const isConsecutiveRun =
    days.length > 1 &&
    indices.every((idx, i) => i === 0 || idx === indices[i - 1] + 1);
  if (isConsecutiveRun) return `${abbr[0]}\u2013${abbr[abbr.length - 1]}`;
  if (abbr.length <= 1) return abbr[0] ?? "";
  return `${abbr.slice(0, -1).join(", ")} & ${abbr[abbr.length - 1]}`;
}

/** Scannable open-hours line(s), e.g. ["Mon–Sat: 9:00 AM – 5:00 PM"]. Always leads with open days. */
export function hoursSummary(s: Showroom): string[] {
  // virtualOnly locations are always also appointmentOnly (no walk-in hours).
  if (s.appointmentOnly) return [DUBLIN_VIRTUAL_COPY];
  return s.hours.map(
    (h) => `${formatDayList(h.days)}: ${formatTime(h.opens)} \u2013 ${formatTime(h.closes)}`,
  );
}

/** Secondary "closed" note (e.g. "Closed Tue, Thu & Sat"), or undefined if open every weekday. */
export function closedDaysNote(s: Showroom): string | undefined {
  if (s.appointmentOnly) return undefined;
  const openDays = new Set(s.hours.flatMap((h) => h.days));
  const closedWeekdays = WEEK_DAYS.filter((d) => !openDays.has(d));
  if (closedWeekdays.length === 0) return undefined;
  return `Closed ${formatDayList(closedWeekdays)}`;
}

/** Single-line mailing address, e.g. "1430 S Anaheim Blvd, Anaheim, CA 92805". */
export function formatAddress(s: Showroom): string {
  return `${s.streetAddress}, ${s.addressLocality}, ${s.addressRegion} ${s.postalCode}`;
}

// ---- schema.org builders --------------------------------------------------

export function showroomSchema(s: Showroom) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/showrooms/${s.slug}#business`,
    name: `${business.name} — ${s.city}`,
    image: business.logo,
    url: `${SITE_URL}/showrooms/${s.slug}`,
    telephone: `+1${s.tel}`,
    priceRange: "$$",
    parentOrganization: { "@type": "Organization", name: business.name, url: SITE_URL },
    address: {
      "@type": "PostalAddress",
      streetAddress: s.streetAddress,
      addressLocality: s.addressLocality,
      addressRegion: s.addressRegion,
      postalCode: s.postalCode,
      addressCountry: "US",
    },
    // Appointment-only locations have no walk-in hours — omit
    // openingHoursSpecification entirely rather than advertise any.
    ...(s.appointmentOnly || s.hours.length === 0
      ? {}
      : {
          openingHoursSpecification: s.hours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }),
    // Thanksgiving weekend 2026 override — only added while active, and only
    // for locations with a base openingHoursSpecification above.
    ...(!s.appointmentOnly && s.hours.length > 0
      ? (() => {
          const special = specialOpeningHoursSpecification(s.slug);
          return special.length > 0 ? { specialOpeningHoursSpecification: special } : {};
        })()
      : {}),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: business.name,
    legalName: business.legalName,
    url: SITE_URL,
    logo: business.logo,
    foundingDate: business.founded,
    description: business.description,
    areaServed: [
      { "@type": "State", name: "California" },
      { "@type": "State", name: "Nevada" },
    ],
    sameAs: [...business.sameAs],
    department: showrooms.map((s) => ({
      "@type": "HomeAndConstructionBusiness",
      name: `${business.name} — ${s.city}`,
      telephone: `+1${s.tel}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: s.streetAddress,
        addressLocality: s.addressLocality,
        addressRegion: s.addressRegion,
        postalCode: s.postalCode,
        addressCountry: "US",
      },
    })),
  };
}
