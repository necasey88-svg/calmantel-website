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
        opens: "08:30",
        closes: "17:00",
      },
    ],
  },
];

export function getShowroom(slug: string): Showroom | undefined {
  return showrooms.find((s) => s.slug === slug);
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
