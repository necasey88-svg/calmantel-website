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

export type PopularOption = {
  name: string;
  subtitle: string;
  image: string;
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
  gallery?: string[];
  brandConfigUrl?: string;
  popularOptions?: PopularOption[];
  optionsShowcase?: string;
  features: string[];
  variants: Variant[];
  options: OptionGroup[];
};

export const gasInserts: GasInsert[] = [
  {
    slug: "supreme",
    brand: "Heat & Glo",
    brandSlug: "heat-and-glo",
    name: "Heat & Glo Supreme Gas Fireplace Insert",
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
    name: "Heat & Glo SupremeX Gas Fireplace Insert",
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
    name: "Heat & Glo Escape Gas Fireplace Insert",
    tagline: "Maximum view · FireBrick technology · European style",
    description:
      "The Escape delivers the biggest, clearest view of the fire in its class. Anti-reflective ClearVue™ glass reduces glare by up to 89%, while patented FireBrick technology produces up to 25% more heat. A favorite for homeowners who want to see every detail of the flame.",
    startingPrice: "$5,656",
    image: `${HNG}4bde9f78-2b6b-4ca3-8fd2-03dd2e85af48/img-pdp-escape-jpg`,
    gallery: [
      `${HNG}4bde9f78-2b6b-4ca3-8fd2-03dd2e85af48/img-pdp-escape-jpg`,
      `${HNG}fd05f9fa-dfdf-45a2-a1f3-cc96b64929ae/img-pdp-escape-room-shot-01-jpg`,
      `${HNG}37d9bfe4-00fd-4131-9d1c-60c6c6b2680d/Escape35-IFT_Halston-NewBronze_Room_7-2-Update-tif`,
      `${HNG}e36b4d37-9f2b-4350-8756-0fd88f372bef/Escape35-IFT_Galleria-NewBronze_Room-tif`,
    ],
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
    name: "Heat & Glo Cosmo Gas Fireplace Insert",
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
    name: "Heat & Glo Provident Gas Fireplace Insert",
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
    slug: "mendota-firein",
    brand: "Mendota",
    brandSlug: "mendota",
    name: "Mendota FireIn™ Gas Insert",
    tagline: "Ultra-realistic flame · Logs wrap the burner · American made",
    description:
      "The FireIn™ design takes realism to the next level. FireIn™ technology wraps the logs around the burner to create an ultra-realistic flame that dances around and through the logs. Mendota's signature glowing embers and hand-painted, high-definition oak and birch logs complete the effect. Available in FV44i and FV33i sizes.",
    startingPrice: "Call for pricing",
    brandConfigUrl: "https://mendotahearth.com/design-your-fireplace-or-insert/select-insert-model/",
    image: "/brands/mendota/firein-copper-birch.png",
    gallery: [
      "/brands/mendota/firein-copper-birch.png",
      "/brands/mendota/firein-room.png",
    ],
    optionsShowcase: "/brands/mendota/firein-scroll.png",
    features: [
      "FireIn™ technology — logs wrap around the burner for 360° flame realism",
      "Hand-painted, high-definition oak and birch log sets",
      "Mendota's signature glowing ember bed",
      "American made in Madison, Wisconsin",
      "Available in FV44i (large) and FV33i (mid-size)",
      "Multiple front, liner, and surround configurations",
    ],
    variants: [
      {
        name: "FV44i FireIn",
        viewingWidth: "32 3/8\" W × 23\" H",
        btu: "Call for specs",
        fireboxOpening: "Contact us for sizing",
      },
      {
        name: "FV33i FireIn",
        viewingWidth: "28 3/4\" W × 18 1/8\" H",
        btu: "Call for specs",
        fireboxOpening: "Contact us for sizing",
      },
    ],
    options: [
      {
        label: "Log Sets",
        choices: ["High-Definition Oak", "High-Definition Birch"],
      },
      {
        label: "Fronts",
        choices: ["Classic Black", "Arch Front", "Prairie Front", "Mission Front"],
      },
      {
        label: "Liners",
        choices: ["Black Reflective Glass", "Aged Brick", "Herringbone"],
      },
      {
        label: "Controls",
        choices: ["IntelliFire Plus® Remote", "Wall Switch", "Smart Home Integration"],
      },
    ],
  },
  {
    slug: "mendota-timberline",
    brand: "Mendota",
    brandSlug: "mendota",
    name: "Mendota Timberline™ Gas Insert",
    tagline: "Rugged realism · Natural log sets · Classic wood fire look",
    description:
      "The Timberline line features natural log sets intentionally placed to simulate the rugged look of a wood fire — and to burn more efficiently. An almost limitless combination of fronts, liners, and log sets can be created to match your style and create an ambiance that brings people together. Available in FV44i and FV33i sizes.",
    startingPrice: "Call for pricing",
    brandConfigUrl: "https://mendotahearth.com/design-your-fireplace-or-insert/select-insert-model/",
    image: "/brands/mendota/timberline.png",
    optionsShowcase: "/brands/mendota/timberline-scroll.png",
    popularOptions: [
      {
        name: "Prairie Front · Black · Birch",
        subtitle: "Classic wood-fire look in a timeless black finish",
        image: "/brands/mendota/timberline.png",
      },
      {
        name: "Mission Front · Gunmetal · Oak",
        subtitle: "Arts & Crafts style with a cool gunmetal finish",
        image: "https://www.mendotahearth.com/wp-content/uploads/2022/01/FV44i-Timberline-Mission-Gunmetal-Oak.jpg",
      },
      {
        name: "Arch Front · New Bronze · Birch",
        subtitle: "Warm bronze curves with natural birch logs",
        image: "https://www.mendotahearth.com/wp-content/uploads/2022/01/FV44i-Timberline-Arch-NewBronze-Birch.jpg",
      },
      {
        name: "Chateau Front · Black · Oak",
        subtitle: "Ornate detailing with rich oak log set",
        image: "https://www.mendotahearth.com/wp-content/uploads/2022/01/FV44i-Timberline-Chateau-Black-Oak.jpg",
      },
      {
        name: "Prairie Front · New Bronze · Oak",
        subtitle: "Prairie lines in a warm bronze finish",
        image: "https://www.mendotahearth.com/wp-content/uploads/2022/01/FV44i-Timberline-Prairie-NewBronze-Oak.jpg",
      },
    ],
    features: [
      "Natural log sets placed for maximum wood-fire realism",
      "Designed to simulate a rugged, authentic wood fire",
      "Virtually limitless combinations of fronts and liners",
      "American made in Madison, Wisconsin",
      "Available in FV44i (large) and FV33i (mid-size)",
      "Efficient gas heating with classic aesthetics",
    ],
    variants: [
      {
        name: "FV44i Timberline",
        viewingWidth: "32 3/8\" W × 23\" H",
        btu: "Call for specs",
        fireboxOpening: "Contact us for sizing",
      },
      {
        name: "FV33i Timberline",
        viewingWidth: "28 3/4\" W × 18 1/8\" H",
        btu: "Call for specs",
        fireboxOpening: "Contact us for sizing",
      },
    ],
    options: [
      {
        label: "Log Sets",
        choices: ["Oak", "Birch", "Split Oak"],
      },
      {
        label: "Fronts",
        choices: ["Classic Black", "Arch Front", "Prairie Front", "Mission Front"],
      },
      {
        label: "Liners",
        choices: ["Black Reflective Glass", "Aged Brick", "Herringbone"],
      },
      {
        label: "Controls",
        choices: ["IntelliFire Plus® Remote", "Wall Switch", "Smart Home Integration"],
      },
    ],
  },
  {
    slug: "mendota-decor",
    brand: "Mendota",
    brandSlug: "mendota",
    name: "Mendota Décor™ Gas Insert",
    tagline: "Contemporary fire · Unique media · Sleek aesthetics",
    description:
      "The Décor line presents fire in unexpected ways. Unique media options like liquid clear glass diamonds or natural river rocks bring a sleek aesthetic to your home. Choose from a variety of fronts and liners to create a fireplace experience that makes your style come alive in any room. Available in FV44i and FV33i sizes.",
    startingPrice: "Call for pricing",
    brandConfigUrl: "https://mendotahearth.com/design-your-fireplace-or-insert/select-insert-model/",
    image: "/brands/mendota/decor.png",
    optionsShowcase: "/brands/mendota/decor-scroll.png",
    features: [
      "Unique fire media — liquid clear glass diamonds or natural river rocks",
      "Sleek, contemporary aesthetic with bold flame presentation",
      "Choose from a variety of fronts and liners",
      "American made in Madison, Wisconsin",
      "Available in FV44i (large) and FV33i (mid-size)",
      "Perfect for modern and transitional interiors",
    ],
    variants: [
      {
        name: "FV44i Décor",
        viewingWidth: "32 3/8\" W × 23\" H",
        btu: "Call for specs",
        fireboxOpening: "Contact us for sizing",
      },
      {
        name: "FV33i Décor",
        viewingWidth: "28 3/4\" W × 18 1/8\" H",
        btu: "Call for specs",
        fireboxOpening: "Contact us for sizing",
      },
    ],
    options: [
      {
        label: "Fire Media",
        choices: ["Liquid Clear Glass Diamonds", "Natural River Rocks"],
      },
      {
        label: "Fronts",
        choices: ["Classic Black", "Copper Accent Front", "Arch Front", "Mission Front"],
      },
      {
        label: "Liners",
        choices: ["Black Reflective Glass", "Aged Brick", "Herringbone"],
      },
      {
        label: "Controls",
        choices: ["IntelliFire Plus® Remote", "Wall Switch", "Smart Home Integration"],
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
    image: "/brands/ortal/room-lake-view.jpg",
    gallery: [
      "/brands/ortal/room-lake-view.jpg",
      "/brands/ortal/room-mountain-cabin.jpg",
      "/brands/ortal/room-boho.jpg",
      "/brands/ortal/room-built-in-bronze.jpg",
      "/brands/ortal/room-classic-library.jpg",
      "/brands/ortal/room-brick-rustic.jpg",
      "/brands/ortal/room-green-traditional.jpg",
      "/brands/ortal/wilderness-44h-room.png",
    ],
    popularOptions: [
      {
        name: "29\" · Black Frame",
        subtitle: "Clean architectural black frame in a modern living room",
        image: "/brands/ortal/wilderness-29-room.jpg",
      },
      {
        name: "29\" · Bronze Frame",
        subtitle: "Warm bronze trim for a transitional look",
        image: "/brands/ortal/room-29-bronze.jpg",
      },
      {
        name: "29\" · Chrome Frame",
        subtitle: "Polished chrome for a sleek contemporary finish",
        image: "/brands/ortal/room-29-chrome.jpg",
      },
      {
        name: "34\" · Black Frame",
        subtitle: "Larger viewing area with a bold black surround",
        image: "/brands/ortal/room-34-black.jpg",
      },
      {
        name: "34\" · Bronze Frame",
        subtitle: "34\" insert with a rich bronze accent frame",
        image: "/brands/ortal/room-34-bronze.jpg",
      },
      {
        name: "34\" · Chrome Frame",
        subtitle: "34\" insert in polished chrome — bright and modern",
        image: "/brands/ortal/room-34-chrome.jpg",
      },
    ],
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
