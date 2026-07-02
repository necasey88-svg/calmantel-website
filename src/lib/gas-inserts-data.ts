const HNG = "https://hearthnhome.getbynder.com/transform/";

export type Variant = {
  name: string;
  viewingWidth: string;
  btu: string;
  efficiency?: string;
  fireboxOpening?: string;
};

export type OptionGroup = {
  label: string;
  choices: string[];
};

export type GasInsert = {
  slug: string;
  brand: string;
  brandSlug: string;
  name: string;
  tagline: string;
  description: string;
  startingPrice: string;
  image: string;
  features: string[];
  variants: Variant[];
  options: OptionGroup[];
};

export const gasInserts: GasInsert[] = [
  {
    slug: "supreme",
    brand: "Heat & Glo",
    brandSlug: "heat-and-glo",
    name: "Supreme Gas Fireplace Insert",
    tagline: "Big flames · Classic style · Three sizes",
    description:
      "The Supreme is Heat & Glo's flagship insert — built for homeowners who want the widest variety of log styles, the biggest ember bed, and reliable high-efficiency heating. Available in 25\", 30\", and 35\" viewing widths to fit virtually any existing firebox.",
    startingPrice: "$4,266",
    image: `${HNG}ba165507-b44a-48e7-93ed-13a8ab82e2f5/HNG_Supreme_195x177`,
    features: [
      "IntelliFire Touch® smart ignition — Wi-Fi, remote, or wall switch",
      "Ceramic fiber logs hand-painted for realistic detail",
      "Glowing ember bed for authentic wood-fire ambiance",
      "Direct vent technology — sealed combustion, no drafts",
      "Widest variety of interior and log options in the lineup",
      "Optional powered fan for room-heating efficiency",
    ],
    variants: [
      {
        name: "Supreme Insert 25",
        viewingWidth: "25\"",
        btu: "Up to 22,000",
        efficiency: "Up to 74%",
        fireboxOpening: "Min 27\"W × 24\"H",
      },
      {
        name: "Supreme Insert 30",
        viewingWidth: "30\"",
        btu: "Up to 27,000",
        efficiency: "Up to 76%",
        fireboxOpening: "Min 32\"W × 26\"H",
      },
      {
        name: "Supreme Insert 35",
        viewingWidth: "35\"",
        btu: "Up to 32,000",
        efficiency: "Up to 78%",
        fireboxOpening: "Min 37\"W × 27\"H",
      },
    ],
    options: [
      {
        label: "Controls",
        choices: ["IntelliFire Touch® Remote (RC400)", "Wall Switch (RC150)", "Wi-Fi Smart Home Module"],
      },
      {
        label: "Interiors",
        choices: ["Reflective Black Glass", "Stratford Panel", "Tranquil Greige Panel", "Herringbone Refractory", "FireBrick"],
      },
      {
        label: "Log Sets",
        choices: ["Ceramic Fiber Birch Logs", "Oak Log Set", "Driftwood Log Set"],
      },
      {
        label: "Fronts",
        choices: ["Firescreen (Black / Gun Metal / New Bronze)", "Halston Arch", "Iron Age", "Inside Fit", "Brick MI30"],
      },
      {
        label: "Surrounds & Mantels",
        choices: ["Small / Medium / Large Insert Surrounds", "Fillmore Mantel Shelf", "Ozark Mantel Shelf", "Non-combustible cement shelf"],
      },
    ],
  },
  {
    slug: "supremex",
    brand: "Heat & Glo",
    brandSlug: "heat-and-glo",
    name: "SupremeX Gas Fireplace Insert",
    tagline: "Next-gen flames · LED ember bed · Two sizes",
    description:
      "The SupremeX is the newest addition to the Supreme family — featuring an advanced LED ember bed and flames that wrap naturally around hand-painted logs. The result is an even more lifelike fire experience, now available in 30\" and 35\" widths.",
    startingPrice: "$4,966",
    image: `${HNG}970a0255-dbd4-4f6b-99fd-0f958f02327a/Syndication_Landscape-HNG_SupremeX_30_Birch_BlkFirescreen_Room`,
    features: [
      "Advanced LED ember bed — more realistic glow than ever before",
      "Flames wrap naturally around hand-painted ceramic logs",
      "IntelliFire Touch® smart ignition with Wi-Fi capability",
      "Direct vent technology — sealed, safe combustion",
      "Same broad options library as the Supreme series",
      "Available in 30\" and 35\" viewing widths",
    ],
    variants: [
      {
        name: "SupremeX Insert 30",
        viewingWidth: "30\"",
        btu: "Up to 27,000",
        efficiency: "Up to 76%",
        fireboxOpening: "Min 32\"W × 26\"H",
      },
      {
        name: "SupremeX Insert 35",
        viewingWidth: "35\"",
        btu: "Up to 32,000",
        efficiency: "Up to 78%",
        fireboxOpening: "Min 37\"W × 27\"H",
      },
    ],
    options: [
      {
        label: "Controls",
        choices: ["IntelliFire Touch® Remote", "Wall Switch", "Wi-Fi Smart Home Module"],
      },
      {
        label: "Interiors",
        choices: ["Reflective Black Glass", "Stratford Panel", "Tranquil Greige Panel"],
      },
      {
        label: "Log Sets",
        choices: ["Hand-Painted Birch Logs", "Oak Log Set"],
      },
      {
        label: "Fronts",
        choices: ["Firescreen (Black / Gun Metal / New Bronze)", "Halston Arch", "Iron Age", "Inside Fit"],
      },
      {
        label: "Surrounds & Mantels",
        choices: ["Small / Medium / Large Insert Surrounds", "Fillmore Mantel Shelf", "Ozark Mantel Shelf"],
      },
    ],
  },
  {
    slug: "escape",
    brand: "Heat & Glo",
    brandSlug: "heat-and-glo",
    name: "Escape Gas Fireplace Insert",
    tagline: "Maximum view · FireBrick technology · European style",
    description:
      "The Escape delivers the biggest, clearest view of the fire in its class. Anti-reflective ClearVue™ glass reduces glare by up to 89%, while patented FireBrick technology produces up to 25% more heat. A favorite for homeowners who want to see every detail of the flame.",
    startingPrice: "$5,656",
    image: `${HNG}4bde9f78-2b6b-4ca3-8fd2-03dd2e85af48/img-pdp-escape-jpg`,
    features: [
      "ClearVue™ anti-reflective glass — up to 89% less glare",
      "FireBrick ceramic interior — up to 25% more heat output",
      "Hand-painted logs with a glowing live ember bed",
      "Direct vent technology for sealed, safe combustion",
      "IntelliFire Touch® smart ignition with Wi-Fi",
      "Wide range of decorative front styles and finishes",
    ],
    variants: [
      {
        name: "Escape Insert 30",
        viewingWidth: "30\"",
        btu: "Up to 28,000",
        efficiency: "Up to 77%",
        fireboxOpening: "Min 32\"W × 26\"H",
      },
      {
        name: "Escape Insert 35",
        viewingWidth: "35\"",
        btu: "Up to 33,000",
        efficiency: "Up to 79%",
        fireboxOpening: "Min 37\"W × 27\"H",
      },
    ],
    options: [
      {
        label: "Controls",
        choices: ["RC400 Remote Touchscreen", "RC150 Wall Switch", "Wi-Fi IntelliFire App Module"],
      },
      {
        label: "Interiors",
        choices: ["FireBrick (standard)", "Reflective Black Glass", "Stratford Panel"],
      },
      {
        label: "Log Sets",
        choices: ["Hand-Painted Ceramic Logs", "Birch Log Set"],
      },
      {
        label: "Fronts",
        choices: ["Chateau Forge", "Firescreen", "Galleria", "Halston Arch", "Iron Age (Black / Gun Metal / New Bronze)"],
      },
      {
        label: "Surrounds & Mantels",
        choices: ["Insert Surrounds (Small / Medium / Large)", "Fillmore Shelf", "Ozark Shelf", "Non-combustible cement"],
      },
    ],
  },
  {
    slug: "cosmo",
    brand: "Heat & Glo",
    brandSlug: "heat-and-glo",
    name: "Cosmo Gas Fireplace Insert",
    tagline: "Modern design · Glass media · Contemporary style",
    description:
      "The Cosmo brings a contemporary aesthetic to the gas insert category. With a black fluted glass interior and the option for crushed glass media in multiple colors, it's the perfect choice for modern or transitional homes looking for something beyond the traditional log-set look.",
    startingPrice: "$4,832",
    image: `${HNG}0b819fa5-acab-4fc3-9cc6-b6f48b8fa8dd/img-pdp-cosmo-jpg`,
    features: [
      "Black fluted glass interior for a sleek, modern look",
      "Crushed glass media available in 8 colors",
      "IntelliFire Touch® ignition with Wi-Fi connectivity",
      "Direct vent technology — fits existing wood-burning firebox",
      "Reflective black glass interior option for maximum drama",
      "Wide selection of contemporary front styles",
    ],
    variants: [
      {
        name: "Cosmo Insert 30",
        viewingWidth: "30\"",
        btu: "Up to 27,000",
        efficiency: "Up to 76%",
        fireboxOpening: "Min 32\"W × 26\"H",
      },
      {
        name: "Cosmo Insert 35",
        viewingWidth: "35\"",
        btu: "Up to 33,000",
        efficiency: "Up to 78%",
        fireboxOpening: "Min 37\"W × 27\"H",
      },
    ],
    options: [
      {
        label: "Controls",
        choices: ["IntelliFire Touch® Remote", "Wall Switch", "Wi-Fi Module"],
      },
      {
        label: "Glass Media Colors",
        choices: ["Amber", "Clear", "Cobalt Blue", "Driftwood", "Ebony", "Iced Fog", "Scarlet", "Stone Natural"],
      },
      {
        label: "Interiors",
        choices: ["Fluted Black Glass", "Reflective Black Glass"],
      },
      {
        label: "Fronts",
        choices: ["Firescreen", "Halston Arch", "Inside Fit", "Iron Age (Black / Gun Metal / New Bronze)"],
      },
      {
        label: "Surrounds & Mantels",
        choices: ["Insert Surrounds (Small / Medium / Large)", "Fillmore Shelf", "Ozark Shelf"],
      },
    ],
  },
  {
    slug: "provident",
    brand: "Heat & Glo",
    brandSlug: "heat-and-glo",
    name: "Provident Gas Fireplace Insert",
    tagline: "Reliable · Efficient · Great value",
    description:
      "The Provident delivers proven Heat & Glo quality at an accessible price point. With IntelliFire® ignition and direct vent technology, it's a reliable, efficient upgrade for any existing wood-burning fireplace — ideal for homeowners focused on warmth and value.",
    startingPrice: "$3,706",
    image: `${HNG}604ee0bd-b7d7-4fdd-ab76-a17334360c7b/HNG_Prov_195x177`,
    features: [
      "IntelliFire® ignition — monitors flame safety continuously",
      "Direct vent technology for clean, sealed combustion",
      "Optional SmartRemote with thermostat and timer modes",
      "Decorative interior panel options",
      "Powered fan kit available for room heating",
      "Heat & Glo build quality at an entry-level price",
    ],
    variants: [
      {
        name: "Provident Insert 30",
        viewingWidth: "30\"",
        btu: "Up to 26,000",
        efficiency: "Up to 74%",
        fireboxOpening: "Min 32\"W × 26\"H",
      },
      {
        name: "Provident Insert 35",
        viewingWidth: "35\"",
        btu: "Up to 30,000",
        efficiency: "Up to 76%",
        fireboxOpening: "Min 37\"W × 27\"H",
      },
    ],
    options: [
      {
        label: "Controls",
        choices: ["IntelliFire® Standard", "SmartRemote (thermostat + timer)", "Wall Switch"],
      },
      {
        label: "Interiors",
        choices: ["Stratford Panel", "Reflective Black Glass"],
      },
      {
        label: "Fronts",
        choices: ["Firescreen (Black)", "Inside Fit"],
      },
      {
        label: "Surrounds & Mantels",
        choices: ["Insert Surrounds (Small / Medium / Large)", "Fillmore Shelf", "Ozark Shelf"],
      },
    ],
  },
  {
    slug: "mendota-fv46i",
    brand: "Mendota",
    brandSlug: "mendota",
    name: "Mendota FV46i Gas Insert",
    tagline: "American made · Largest view · 55,000 BTU",
    description:
      "The FV46i is Mendota's flagship insert — and arguably the finest gas insert made in America. With an industry-leading 46\" viewing width and 55,000 BTU output, it's the choice for homeowners who want the most dramatic, powerful gas insert available. Made in Wisconsin, USA.",
    startingPrice: "Call for pricing",
    image: "https://www.mendotahearth.com/wp-content/uploads/2022/01/FV46i-with-Birch-Hero-Marquee-1800x1013.jpg",
    features: [
      "46\" viewing width — widest in class",
      "Up to 55,000 BTU — powerful zone heating",
      "Patented MendotaDXV™ flame technology for exceptional realism",
      "American made in Madison, Wisconsin",
      "Titanium glass ceramic for superior clarity",
      "Full-view design — no obstruction to the flame",
    ],
    variants: [
      {
        name: "FV46i",
        viewingWidth: "46\"",
        btu: "Up to 55,000",
        efficiency: "Up to 82%",
        fireboxOpening: "Min 50\"W × 28\"H",
      },
    ],
    options: [
      {
        label: "Controls",
        choices: ["SIT Nova SIT Thermostat", "IntelliFire Plus® Remote", "Wall Switch"],
      },
      {
        label: "Log Sets",
        choices: ["Charred Birch", "Charred Oak", "Driftwood"],
      },
      {
        label: "Interiors",
        choices: ["Black Reflective Glass", "Aged Brick", "Herringbone"],
      },
      {
        label: "Fronts & Surrounds",
        choices: ["Classic Black", "Arch Front", "Insert Trim Kits (multiple sizes and finishes)"],
      },
    ],
  },
  {
    slug: "mendota-fv36i",
    brand: "Mendota",
    brandSlug: "mendota",
    name: "Mendota FV36i Gas Insert",
    tagline: "Full-view design · Premium performance · 42,000 BTU",
    description:
      "The FV36i brings Mendota's legendary full-view design and flame realism to a more accessible size. At 36\" viewing width and up to 42,000 BTU, it's a premium upgrade for medium to large fireplaces — and still made right here in the USA.",
    startingPrice: "Call for pricing",
    image: "https://www.mendotahearth.com/wp-content/uploads/2022/01/FV36i-Hero-1800x1013.jpg",
    features: [
      "36\" viewing width with full-view glass",
      "Up to 42,000 BTU for powerful zone heating",
      "MendotaDXV™ flame technology",
      "American made in Madison, Wisconsin",
      "Titanium glass ceramic for superior clarity",
      "Broad selection of logs, interiors, and surrounds",
    ],
    variants: [
      {
        name: "FV36i",
        viewingWidth: "36\"",
        btu: "Up to 42,000",
        efficiency: "Up to 80%",
        fireboxOpening: "Min 38\"W × 26\"H",
      },
    ],
    options: [
      {
        label: "Controls",
        choices: ["IntelliFire Plus® Remote", "Wall Switch", "Smart Home Integration"],
      },
      {
        label: "Log Sets",
        choices: ["Charred Birch", "Charred Oak", "Driftwood"],
      },
      {
        label: "Interiors",
        choices: ["Black Reflective Glass", "Aged Brick", "Herringbone"],
      },
      {
        label: "Fronts & Surrounds",
        choices: ["Classic Black", "Arch Front", "Insert Trim Kits"],
      },
    ],
  },
  {
    slug: "ortal-wilderness",
    brand: "Ortal",
    brandSlug: "ortal",
    name: "Ortal Wilderness Gas Insert",
    tagline: "Wilderness firelog technology · Cool glass · Two sizes",
    description:
      "The Ortal Wilderness Insert is the first gas insert to incorporate Ortal's coveted Wilderness Firelog Technology — a stunning, ultra-realistic log fire experience inside your existing masonry fireplace. Available in 29\" and 34\" sizes, it fits most standard fireboxes with zero clearance to combustibles.",
    startingPrice: "Call for pricing",
    image: "https://www.ortalheat.com/hubfs/6.28.23%20-%20Inserts/34/900-INSERT%2034-DB%20RED%20f-3%20(1).jpg",
    features: [
      "Wilderness Firelog Technology — the most realistic log fire in any insert",
      "Ortal's signature cool glass — safe to touch during operation",
      "Fits most existing masonry gas fireplaces",
      "Zero clearance to combustibles for flexible installation",
      "Clean, architectural frame design",
      "Available in 29\" and 34\" viewing widths",
    ],
    variants: [
      {
        name: "Wilderness Insert 29",
        viewingWidth: "29\"",
        btu: "Contact us for specs",
        fireboxOpening: "Fits most standard fireboxes",
      },
      {
        name: "Wilderness Insert 34",
        viewingWidth: "34\"",
        btu: "Contact us for specs",
        fireboxOpening: "Fits most standard fireboxes",
      },
    ],
    options: [
      {
        label: "Log Technology",
        choices: ["Wilderness Firelog (standard — ultra-realistic)"],
      },
      {
        label: "Surround Finishes",
        choices: ["Burnished Copper", "Dark Bronze", "Black", "Custom finishes available"],
      },
      {
        label: "Controls",
        choices: ["Remote control", "Smart home integration"],
      },
    ],
  },
];

export function getGasInsert(slug: string): GasInsert | undefined {
  return gasInserts.find((g) => g.slug === slug);
}
