export interface FireplaceProduct {
  name: string;
  description: string;
  specs?: string[];
  note?: string;
}

export interface FireplaceCategory {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  products: FireplaceProduct[];
}

export const fireplaceCategories: FireplaceCategory[] = [
  // --- Types ---
  {
    slug: "gas-inserts",
    title: "Gas Inserts",
    tagline: "Efficient · Clean · Beautiful",
    description:
      "Gas inserts are the most popular way to convert an existing wood-burning fireplace into a high-efficiency, low-maintenance heating source. They fit directly into your existing firebox and vent through your existing chimney or with a direct-vent liner.",
    products: [
      {
        name: "Heat & Glo Supreme 35",
        description:
          "Our best-selling gas insert. A large viewing area, realistic ember bed, and powerful heat output make this a top choice for living rooms.",
        specs: ["35\" viewing width", "Up to 32,000 BTU", "Up to 78% efficiency", "Variable flame control"],
      },
      {
        name: "Heat & Glo Supreme 30",
        description:
          "The mid-size Supreme series insert with the same premium flame realism in a more compact footprint.",
        specs: ["30\" viewing width", "Up to 27,000 BTU", "Up to 76% efficiency"],
      },
      {
        name: "Heat & Glo Supreme 25",
        description:
          "Ideal for smaller fireplaces. Full featured with a beautiful ember bed and realistic log set.",
        specs: ["25\" viewing width", "Up to 22,000 BTU"],
      },
      {
        name: "Mendota FV46i",
        description:
          "Premium American-made gas insert with Mendota's legendary full-view design and exceptional heat output.",
        specs: ["46\" viewing width", "Up to 55,000 BTU", "Patented MendotaDXV technology"],
      },
      {
        name: "Escape 35 Gas Insert",
        description:
          "A sleek, European-styled insert with a clean black frame and large ceramic glass viewing area.",
        specs: ["35\" viewing width", "Up to 30,000 BTU", "Sealed combustion"],
      },
      {
        name: "Napoleon NPI45",
        description:
          "Napoleon's popular insert with PHAZER log set and NIGHT LIGHT ember bed for stunning realism.",
        specs: ["45\" viewing width", "Up to 35,000 BTU", "IPI ignition"],
      },
    ],
  },
  {
    slug: "electric",
    title: "Electric Fireplaces",
    tagline: "No Venting · Flexible · Modern",
    description:
      "Electric fireplaces require no gas line and no venting — making them the most flexible option for any room in the home. From ultra-slim wall-mount units to full surround packages, today's electric fireplaces offer stunning realism and zone heating.",
    products: [
      {
        name: "Modern Flames Orion Slim",
        description:
          "Ultra-thin profile (just 3.5\" deep) with a stunning 3D flame effect. Can be recessed into drywall for a built-in look.",
        specs: ["Available 42\" to 100\"", "4,700 BTU heater", "Multi-color flame"],
      },
      {
        name: "Modern Flames RedStone",
        description:
          "Traditional-style electric insert with a realistic log set and ember bed. Drops into existing fireboxes.",
        specs: ["Available in 28\", 36\", 42\"", "5,000 BTU heater", "Remote control"],
      },
      {
        name: "SimpliFire Insert",
        description:
          "Affordable and reliable electric insert with adjustable flame brightness and color.",
        specs: ["Available in 23\", 30\", 36\"", "4,600 BTU", "Multiple flame colors"],
      },
      {
        name: "Modern Flames Landscape Pro",
        description:
          "A wide-format linear electric fireplace designed for dramatic horizontal installations.",
        specs: ["Available 56\" to 96\"", "Multicolor flame", "No heater option available"],
      },
    ],
  },
  {
    slug: "outdoor",
    title: "Outdoor Fireplaces",
    tagline: "Extend Your Living Space",
    description:
      "California's climate is perfect for outdoor entertaining year-round. Our outdoor fireplace options include gas, wood-burning, and linear designs that transform patios, decks, and backyard spaces into stunning living areas.",
    products: [
      {
        name: "Flare Outdoor Linear Gas",
        description:
          "A premium outdoor linear gas fireplace built with marine-grade materials for all-weather durability.",
        specs: ["Available 36\" to 72\"", "Up to 90,000 BTU", "Wind-resistant flame"],
        note: "Requires natural gas or propane supply",
      },
      {
        name: "Napoleon Outdoor Gas Fireplace",
        description:
          "Freestanding outdoor gas fireplace with a traditional wood-burning look and the convenience of gas.",
        specs: ["Up to 50,000 BTU", "Electronic ignition", "Powder-coated finish"],
      },
      {
        name: "Outdoor Masonry Fireplace",
        description:
          "A custom-built outdoor masonry fireplace constructed on-site. The most durable and permanent outdoor option.",
        note: "Custom build — pricing by quote",
      },
    ],
  },
  {
    slug: "masonry",
    title: "Masonry Fireplaces",
    tagline: "Built to Last · Traditional · Custom",
    description:
      "A masonry fireplace is the gold standard — built with brick, stone, or concrete block and designed to last the lifetime of the home. We design and build custom masonry fireplaces for new construction and major renovation projects.",
    products: [
      {
        name: "Traditional Brick Masonry",
        description:
          "Classic red or buff brick construction with a full-height chimney. The timeless American fireplace.",
        note: "Custom build — pricing by quote",
      },
      {
        name: "Stone Masonry Fireplace",
        description:
          "Natural or manufactured stone veneer over a concrete block core. Dramatic and durable.",
        note: "Custom build — pricing by quote",
      },
      {
        name: "Rumford Fireplace",
        description:
          "A tall, shallow firebox design perfected in the 18th century for superior radiant heat and draw.",
        note: "Custom build — pricing by quote",
      },
    ],
  },
  {
    slug: "overstock",
    title: "Overstock Sale",
    tagline: "Deep Discounts · Limited Stock",
    description:
      "Browse our current overstock inventory for significant savings on fireplace inserts, mantels, and surrounds. Stock changes frequently — contact your nearest showroom for current availability and pricing.",
    products: [
      {
        name: "Overstock Gas Inserts",
        description:
          "Previous-model and display gas inserts from Heat & Glo, Napoleon, and Mendota at reduced prices.",
        note: "Call your local showroom for current availability",
      },
      {
        name: "Overstock Electric Fireplaces",
        description:
          "Display models and discontinued electric fireplaces from Modern Flames and SimpliFire.",
        note: "Call your local showroom for current availability",
      },
      {
        name: "Overstock Mantels",
        description:
          "Discontinued mantel styles and display pieces in various finishes at clearance pricing.",
        note: "Call your local showroom for current availability",
      },
    ],
  },

  // --- Brands ---
  {
    slug: "heat-and-glo",
    title: "Heat & Glo Fireplaces",
    tagline: "Innovation · Realism · Efficiency",
    description:
      "Heat & Glo is one of the most recognized names in gas fireplaces, known for their realistic flame technology, wide product range, and reliable performance. We are an authorized Heat & Glo dealer and installer.",
    products: [
      {
        name: "Supreme Series Gas Inserts",
        description:
          "Heat & Glo's flagship insert line with stunning ember beds and high efficiency. Available in 25\", 30\", and 35\" viewing widths.",
        specs: ["Up to 32,000 BTU", "Up to 78% efficiency", "Variable flame"],
      },
      {
        name: "Primo Series",
        description:
          "An entry-level gas insert with Heat & Glo quality at an accessible price point.",
        specs: ["30\" viewing width", "Up to 26,000 BTU"],
      },
      {
        name: "Cosmo Series Gas Fireplace",
        description:
          "A contemporary built-in gas fireplace for new construction or major remodel projects.",
        specs: ["Linear design", "Up to 40,000 BTU", "Direct vent"],
      },
      {
        name: "TRUE40 See-Through",
        description:
          "A stunning two-sided gas fireplace that serves two rooms simultaneously.",
        specs: ["40\" viewing width", "Both sides visible", "Up to 35,000 BTU"],
      },
    ],
  },
  {
    slug: "heatilator",
    title: "Heatilator Fireplaces",
    tagline: "Trusted Since 1927",
    description:
      "Heatilator has been manufacturing quality fireplaces since 1927, making them one of the oldest and most trusted brands in the industry. Their products range from traditional wood-burning units to modern gas inserts and direct-vent systems.",
    products: [
      {
        name: "Heatilator Caliber NXT Gas Insert",
        description:
          "A best-selling gas insert with Heatilator's IntelliFire ignition system and large viewing area.",
        specs: ["Up to 34,500 BTU", "78% AFUE", "Remote included"],
      },
      {
        name: "Heatilator Reveal Gas Fireplace",
        description:
          "Contemporary linear gas fireplace for new construction or full remodel.",
        specs: ["Available 36\" to 60\"", "Up to 45,000 BTU", "Direct vent"],
      },
      {
        name: "Heatilator Wood-Burning Fireplace",
        description:
          "Traditional zero-clearance wood-burning fireplace with a classic masonry look.",
        specs: ["Multiple opening sizes", "Factory-built for fast installation"],
      },
    ],
  },
  {
    slug: "napoleon",
    title: "Napoleon Fireplaces",
    tagline: "Canadian Quality · American Homes",
    description:
      "Napoleon is a Canadian family-owned company producing high-quality gas, electric, and wood-burning fireplaces. Known for their exceptional flame realism, build quality, and innovative features like the NIGHT LIGHT ember system.",
    products: [
      {
        name: "Napoleon Ascent 35 Gas Insert",
        description:
          "Premium gas insert with Napoleon's PHAZER log set and stunning ember bed for exceptional realism.",
        specs: ["35\" viewing width", "Up to 35,000 BTU", "IPI ignition"],
      },
      {
        name: "Napoleon LHD45 Linear Gas",
        description:
          "A contemporary linear gas fireplace with dramatic driftwood log set.",
        specs: ["45\" viewing width", "Up to 40,000 BTU", "Direct vent"],
      },
      {
        name: "Napoleon Altitude X 36",
        description:
          "Napoleon's top-tier gas fireplace with a large viewing area and ultra-realistic flame.",
        specs: ["36\" viewing width", "Up to 38,000 BTU", "IntelliFire Plus"],
      },
      {
        name: "Napoleon Allure Electric",
        description:
          "Napoleon's popular wall-mount electric with Crystalline ember bed and adjustable flame.",
        specs: ["Available 32\" to 60\"", "Up to 5,000 BTU heater", "Multicolor flame"],
      },
    ],
  },
  {
    slug: "mendota",
    title: "Mendota Fireplaces",
    tagline: "American Made · Premium Performance",
    description:
      "Mendota is a Wisconsin-based manufacturer producing some of the finest gas fireplaces and inserts made in America. Their full-view design, exceptional heat output, and patented DXV technology set them apart.",
    products: [
      {
        name: "Mendota FV46i Insert",
        description:
          "Mendota's flagship insert with an industry-leading 46\" viewing width. The largest, most dramatic gas insert available.",
        specs: ["46\" viewing width", "Up to 55,000 BTU", "MendotaDXV flame technology"],
      },
      {
        name: "Mendota FV36i Insert",
        description:
          "A popular mid-size insert with Mendota's beautiful full-view glass and realistic log set.",
        specs: ["36\" viewing width", "Up to 42,000 BTU"],
      },
      {
        name: "Mendota FullView 44 Gas Fireplace",
        description:
          "Built-in gas fireplace for new construction with Mendota's signature full-view design.",
        specs: ["44\" viewing width", "Up to 55,000 BTU", "Direct vent"],
      },
    ],
  },
  {
    slug: "modern-flames",
    title: "Modern Flames",
    tagline: "Electric Fireplace Innovation",
    description:
      "Modern Flames is a leader in electric fireplace technology, producing some of the most realistic and beautifully designed electric fireplaces available. No gas, no venting — just stunning flame effects and zone heating.",
    products: [
      {
        name: "Orion Slim",
        description:
          "Just 3.5\" deep. The Orion Slim can be recessed into a standard 2x4 or 2x6 wall for a true built-in look.",
        specs: ["Available 42\", 52\", 60\", 74\", 100\"", "3D multi-color flame", "4,700 BTU heater"],
      },
      {
        name: "Landscape Pro",
        description:
          "Wide-format linear electric fireplace designed for dramatic horizontal statement walls.",
        specs: ["Available 56\", 68\", 80\", 96\"", "Multicolor flame", "Optional heater"],
      },
      {
        name: "RedStone",
        description:
          "A realistic log-set electric insert that fits into existing wood-burning fireboxes.",
        specs: ["Available 28\", 36\", 42\"", "Realistic ember bed", "5,000 BTU"],
      },
      {
        name: "Spectrum Slimline",
        description:
          "An ultra-slim wall-mount electric with adjustable flame speed, color, and brightness.",
        specs: ["Available 40\" to 74\"", "1.5\" depth", "No heater"],
      },
    ],
  },
  {
    slug: "ortal",
    title: "Ortal Fireplaces",
    tagline: "Israeli Design · European Engineering",
    description:
      "Ortal is an Israeli-designed, European-engineered gas fireplace brand known for their frameless, front-facing cool-glass technology and architectural aesthetics. Their fireplaces are a favorite among architects and interior designers.",
    products: [
      {
        name: "Ortal Clear 110",
        description:
          "A wide, low-profile gas fireplace with a truly frameless design and Ortal's signature cool glass that stays safe to touch.",
        specs: ["110cm viewing width", "Up to 50,000 BTU", "Cool glass technology", "Top or rear vent"],
      },
      {
        name: "Ortal Clear 85",
        description:
          "The perfect size for most living rooms. Stunning flames, frameless glass, and clean architectural lines.",
        specs: ["85cm viewing width", "Up to 38,000 BTU"],
      },
      {
        name: "Ortal Tunnel",
        description:
          "A see-through gas fireplace that can be viewed from two sides — perfect for dividing rooms in open floor plans.",
        specs: ["Multiple sizes", "See-through design", "Custom configurations available"],
      },
    ],
  },
  {
    slug: "flare",
    title: "Flare Fireplaces",
    tagline: "Outdoor · Contemporary · Durable",
    description:
      "Flare is a premium outdoor fireplace brand specializing in linear gas designs built for all-weather use. Their products are engineered for California's outdoor living culture — wind-resistant flames, marine-grade finishes, and stunning aesthetics.",
    products: [
      {
        name: "Flare Outdoor Linear 36",
        description:
          "A compact outdoor linear fireplace, perfect for smaller patios or intimate seating areas.",
        specs: ["36\" viewing width", "Up to 55,000 BTU", "Wind-resistant", "Marine-grade SS"],
      },
      {
        name: "Flare Outdoor Linear 60",
        description:
          "A bold, wide outdoor fireplace that becomes the centerpiece of any outdoor living space.",
        specs: ["60\" viewing width", "Up to 90,000 BTU", "Powder-coat or stainless finish"],
      },
      {
        name: "Flare Indoor Linear",
        description:
          "Flare's interior line brings the same clean design language indoors with direct-vent gas technology.",
        specs: ["Available 36\" to 72\"", "Up to 65,000 BTU", "Multiple vent configurations"],
      },
    ],
  },
  {
    slug: "stellar",
    title: "Stellar Fireplaces",
    tagline: "Value · Quality · Style",
    description:
      "Stellar fireplaces offer an excellent combination of quality construction and accessible pricing. A great option for homeowners looking for a reliable gas or electric fireplace without the premium brand price tag.",
    products: [
      {
        name: "Stellar Classic Gas Insert",
        description:
          "A reliable gas insert with a traditional log set and ember bed. Simple to operate and easy to install.",
        specs: ["30\" viewing width", "Up to 26,000 BTU", "Millivolt ignition"],
      },
      {
        name: "Stellar Contemporary Gas",
        description:
          "A clean-lined gas fireplace for new construction at a competitive price.",
        specs: ["36\" viewing width", "Up to 32,000 BTU", "Direct vent"],
      },
      {
        name: "Stellar Electric Insert",
        description:
          "Drop-in electric insert with adjustable flame and heater. An affordable upgrade for any existing fireplace.",
        specs: ["Available 28\" and 36\"", "4,600 BTU", "Remote control"],
      },
    ],
  },
];

export function getFireplaceCategory(slug: string): FireplaceCategory | undefined {
  return fireplaceCategories.find((c) => c.slug === slug);
}
