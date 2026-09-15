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
  // opening hours in schema.org OpeningHoursSpecification shape
  hours: {
    days: string[];
    opens: string; // 24h "HH:MM"
    closes: string;
  }[];
  geo?: { lat: number; lng: number };
};

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
    hours: [
      {
        days: ["Monday", "Wednesday", "Friday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
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
  return s.hours.map(
    (h) => `${formatDayList(h.days)}: ${formatTime(h.opens)} \u2013 ${formatTime(h.closes)}`,
  );
}

/** Secondary "closed" note (e.g. "Closed Tue, Thu & Sat"), or undefined if open every weekday. */
export function closedDaysNote(s: Showroom): string | undefined {
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
    openingHoursSpecification: s.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
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
