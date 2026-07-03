export interface FireplaceProduct {
  name: string;
  description: string;
  specs?: string[];
  note?: string;
  image?: string;
  url?: string;
  brand?: string;
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
        name: "Lanai Single-Sided Outdoor Fireplace",
        brand: "Heat & Glo",
        description:
          "Crushed glass flames and rust-resistant stainless steel construction. Available in 48\", 60\", and 72\" widths for a dramatic outdoor focal point.",
        specs: ["3 sizes: 48\" – 72\"", "Stainless steel construction", "Crushed glass flames"],
        image: "https://hearthnhome.getbynder.com/transform/f444b35c-7f9d-4795-a9c0-99b0d7bd7565/Lanai_60StoneKit_1920x738-jpg?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/outdoor/lanai-gas-fireplace",
      },
      {
        name: "Lanai Double-Sided Outdoor Fireplace",
        brand: "Heat & Glo",
        description:
          "A stunning two-sided outdoor fireplace with crushed glass flame display and rust-resistant stainless steel. Available in 48\" and 60\" widths.",
        specs: ["2 sizes: 48\" & 60\"", "Double-sided viewing", "Weather-resistant stainless steel"],
        image: "https://hearthnhome.getbynder.com/transform/5e162ae5-e587-44dc-9f21-4492e1cfcb4b/Lanai_48ST_1920x738-jpg?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/outdoor/lanai-see-through-gas-fireplace",
      },
      {
        name: "Courtyard Outdoor Gas Fireplace",
        brand: "Heat & Glo",
        description:
          "Expand your outdoor living with the nostalgic warmth of the Courtyard. Extends the outdoor season with cozy, welcoming fire.",
        specs: ["Traditional aesthetic", "Extends outdoor season", "Multiple finishes"],
        image: "https://hearthnhome.getbynder.com/transform/444ec103-c06b-4f7e-9d99-4edaac17daa6/ODL_Courtyard_36_A1_736x555?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/outdoor/courtyard-gas-fireplace",
      },
      {
        name: "Vesper Vent-Free Outdoor Fireplace",
        brand: "Heat & Glo",
        description:
          "Ventless stainless steel outdoor fireplace — no chimney required. Available in 36\" and 42\" widths with a 27\" tall opening and choice of log sets.",
        specs: ["2 sizes: 36\" & 42\"", "Ventless — no chimney needed", "Stainless steel construction"],
        image: "https://hearthnhome.getbynder.com/transform/1343f02e-99c3-4027-8bd5-5134e36c6e5b/Vesper2_736x555?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/outdoor/vesper-vent-free-gas-fireplace",
      },
      {
        name: "Flare Outdoor Linear Gas",
        brand: "Flare",
        description:
          "A premium outdoor linear gas fireplace built with marine-grade materials for all-weather durability.",
        specs: ["Available 36\" to 72\"", "Up to 90,000 BTU", "Wind-resistant flame"],
        note: "Requires natural gas or propane supply",
      },
      {
        name: "Napoleon Outdoor Gas Fireplace",
        brand: "Napoleon",
        description:
          "Freestanding outdoor gas fireplace with a traditional wood-burning look and the convenience of gas.",
        specs: ["Up to 50,000 BTU", "Electronic ignition", "Powder-coated finish"],
      },
      {
        name: "Outdoor Masonry Fireplace",
        brand: "Custom Build",
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
        name: "Mezzo Linear Gas Fireplace",
        description:
          "Heat & Glo's stunning linear gas fireplace featuring end-to-end ribbon flames. Available in 36\", 48\", 60\", and 72\" sizes with customizable fire bed materials and log options.",
        specs: ["4 sizes: 36\" – 72\"", "Ribbon flame design", "Customizable fire bed"],
        image: "https://hearthnhome.getbynder.com/transform/d46ab388-275f-4983-b659-7c4cd454dcf5/img-pdp-mezzo-room-shot-05-jpg?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/indoor/mezzo-gas-fireplace",
      },
      {
        name: "Cosmo Gas Fireplace",
        description:
          "Sophisticated fire at a smaller footprint. The Cosmo fits beautifully beneath a TV with its smart heat management system, available in 32\", 36\", and 42\" widths.",
        specs: ["3 sizes: 32\" – 42\"", "TV-safe heat management", "Direct vent"],
        image: "https://hearthnhome.getbynder.com/transform/c0885ec5-e68c-48f7-9a85-f66e09730cd3/img-pdp-cosmo-room-shot-01-jpg?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/indoor/cosmo-gas-fireplace",
      },
      {
        name: "6K & 8K Series",
        description:
          "Heat & Glo's versatile gas fireplace series with three design packages, voice control capability, and smart heat management. Available in both traditional and contemporary styling.",
        specs: ["3 design packages", "Voice control ready", "Heat management system"],
        image: "https://hearthnhome.getbynder.com/transform/c9ebe317-8a39-4149-9400-33ec3dfe6a92/HNG-M-R_6KX_763X555?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/indoor/6k-and-8k-series",
      },
      {
        name: "SlimLine Gas Fireplace",
        description:
          "A compact 16\"-deep gas fireplace designed for spaces where depth is limited. The SlimLine Fusion adds 10 customizable design elements for a fully personalized look.",
        specs: ["Only 16\" deep", "10 design elements (Fusion)", "Starting from $2,149"],
        image: "https://hearthnhome.getbynder.com/transform/65345ded-e184-42dd-9fb8-c33e764599a8/img-pdp-slimline-fusion-room-shot-01-jpg?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/indoor/slimline-fusion-gas-fireplace",
      },
      {
        name: "True Gas Fireplace",
        description:
          "Traditional masonry styling with the largest view in its class and substantial heat output — all in a zero-clearance factory-built unit.",
        specs: ["Largest view in class", "Traditional masonry look", "High heat output"],
        image: "https://hearthnhome.getbynder.com/transform/96f4f3b6-bb4e-4004-a797-85aa7179b3bb/HNG-True_ForgedArchFront_2019Artisan_190613_Lecy_0160-1-tif?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/indoor/true-gas-fireplace",
      },
      {
        name: "Cerona Gas Fireplace",
        description:
          "Smooth curves and FireBrick® technology give the Cerona 25% more heat than comparable units, with a distinctive arched design.",
        specs: ["FireBrick® technology", "25% more heat output", "Arched design"],
        image: "https://hearthnhome.getbynder.com/transform/01654e9b-bd92-402b-b9c9-8366a6d78d9f/HNG_Cerona_Sub-catProdCardImage-2_736x555-jpg?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/indoor/cerona-gas-fireplace",
      },
      {
        name: "Twilight See-Through Fireplace",
        description:
          "A dual-sided indoor/outdoor gas fireplace with flexible venting options. Blurs the line between interior and exterior living spaces.",
        specs: ["Indoor & outdoor viewing", "Flexible venting", "Direct vent or B-vent"],
        image: "https://hearthnhome.getbynder.com/transform/49a635a6-235c-4d05-bd58-b498f53ed725/img-pdp-twilight-II-see-through-room-shot-01-jpg?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/see-through/twilight-gas-fireplace",
      },
      {
        name: "Mezzo See-Through Fireplace",
        description:
          "The two-sided version of Heat & Glo's popular Mezzo linear. Works as a stunning room divider or indoor-outdoor focal point with ribbon flames on both sides.",
        specs: ["4 sizes: 36\" – 72\"", "Room divider design", "7 fire bed options"],
        image: "https://hearthnhome.getbynder.com/transform/790894ce-7159-4873-8738-a0e2de3e1792/img-product-card-mezzo-see-through-jpg?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/see-through/mezzo-gas-fireplace",
      },
      {
        name: "Fortress See-Through Fireplace",
        description:
          "Stainless steel construction with bold see-through flames. Designed to blend indoor and outdoor spaces with a striking, industrial-modern aesthetic.",
        specs: ["Stainless steel construction", "Indoor-outdoor design", "Starting from $11,148"],
        image: "https://hearthnhome.getbynder.com/transform/14345d4e-0098-42e5-9160-945f00fabde1/img-pdp-fortress-see-through-room-shot-01-jpg?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/see-through/fortress-gas-fireplace",
      },
      {
        name: "Primo II Linear Fireplace",
        description:
          "A large-format linear gas fireplace in 48\", 60\", and 72\" sizes. Features TV-safe heat management and customizable interior panels and logs.",
        specs: ["3 sizes: 48\" – 72\"", "TV-safe heat management", "Available as see-through"],
        image: "https://hearthnhome.getbynder.com/transform/08763d99-34be-436f-b2dd-2c391d4edc87/HNG-Primo-II_72_736X555?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/indoor/primo-ii",
      },
      {
        name: "Phoenix TrueView Gas Fireplace",
        description:
          "The Phoenix TrueView delivers a glass-free open-hearth experience with Bluetooth speakers and gentle heat settings — perfect for ambiance-focused spaces.",
        specs: ["Glass-free open view", "Bluetooth speakers", "Mild heat settings"],
        image: "https://hearthnhome.getbynder.com/transform/0bf271ce-ef80-4c8c-a7f0-660531aa15bf/Phoenix_StratfordBrick_Angle_Roomshot_180620_2155-Pinto_289-tif?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/indoor/phoenix-trueview-open-gas-fireplace",
      },
      {
        name: "Supreme Freestanding Gas Stove",
        description:
          "No hearth or mantel required. The Supreme freestanding unit installs in less than a day and delivers a clear, unobstructed view of realistic flames.",
        specs: ["Freestanding — no hearth needed", "Installs in under one day", "Clear view design"],
        image: "https://hearthnhome.getbynder.com/transform/50e76208-3a7f-45f2-916d-ab62e5777c4c/HNG-CK30_cabinet_Supreme_black-glass-interior_303?io=transform:fill,width:768,height:576",
        url: "https://www.heatnglo.com/fireplaces/gas/freestanding/supreme-fs",
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
        name: "Luxuria Gas Fireplace",
        description:
          "Napoleon's flagship gas fireplace — the Luxuria sets the standard for realism and luxury. Features MIRRO-FLAME™ Porcelain Reflective Radiant Panels that create the illusion of depth, a NIGHT LIGHT™ ember bed that glows beautifully even when the fire is off, and a stunning clean-face design with no visible louvers.",
        specs: ["Up to 50,000 BTU", "MIRRO-FLAME™ reflective panels", "NIGHT LIGHT™ ember bed", "Clean-face design", "Direct vent"],
        image: "https://d2zjr2e3be66hk.cloudfront.net/eyJidWNrZXQiOiJhc3NldHMud29vZGxhbmRkaXJlY3QuY29tIiwia2V5IjoicHJvZHVjdC1pbWFnZXMvTmFwb2xlb24tTFZYNjItTHV4dXJpYS02Mi1EaXJlY3QtVmVudC1HYXMtRmlyZXBsYWNlLW1haW4uanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MDAsImhlaWdodCI6NjAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        url: "https://www.napoleon.com/en/us/fireplaces/products/fireplace-products/gas-fireplaces/luxuria-series",
      },
      {
        name: "Tall Linear Vector Gas Fireplace",
        description:
          "A dramatic tall vertical linear gas fireplace that commands attention on any feature wall. Available in 50\", 62\", and 74\" widths with a nearly frameless design, multi-colored LED underlighting, and optional Luminous™ Log Set for a breathtaking glowing effect. Bluetooth enabled via eFIRE app. Lifetime warranty.",
        specs: ["3 sizes: 50\" – 74\"", "Up to 44,000 BTU", "Nearly frameless design", "Optional Luminous™ Logs", "Bluetooth / eFIRE app", "Direct vent"],
        image: "https://d2zjr2e3be66hk.cloudfront.net/eyJidWNrZXQiOiJhc3NldHMud29vZGxhbmRkaXJlY3QuY29tIiwia2V5IjoicHJvZHVjdC1pbWFnZXMvTmFwb2xlb25UYWxsVmVjdG9yNjIubWFpbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo2MDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        url: "https://www.napoleon.com/en/us/fireplaces/products/fireplace-products/gas-fireplaces/tall-linear-vector-luminous-logs-series",
      },
      {
        name: "Vector Series Gas Fireplace",
        description:
          "Napoleon's versatile contemporary linear series — available in 38\", 50\", 62\", and 74\" widths in both single-sided and see-through configurations. Features the Divinity flame pattern, multi-color LED ember bed lighting, Bluetooth smart controls via the eFIRE app, and a lifetime warranty. Multiple heat management options allow safe TV installation above the unit.",
        specs: ["4 sizes: 38\" – 74\"", "Up to 42,000 BTU", "Single or see-through", "Bluetooth / eFIRE app", "Multi-color LED ember bed", "Lifetime warranty"],
        image: "https://d2zjr2e3be66hk.cloudfront.net/eyJidWNrZXQiOiJhc3NldHMud29vZGxhbmRkaXJlY3QuY29tIiwia2V5IjoicHJvZHVjdC1pbWFnZXMvTFY2Mk4tLS1NYWluLUltYWdlXzYwMHB4LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAwLCJoZWlnaHQiOjYwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        url: "https://www.napoleon.com/en/us/fireplaces/products/fireplace-products/gas-fireplaces/vector-series",
      },
      {
        name: "Elevation X Gas Fireplace",
        description:
          "A premium direct-vent gas fireplace with traditional proportions and modern performance. The Elevation X features an electric ember bed with 360° visible glowing embers, a heat circulating blower, and your choice of Driftwood, Split Oak, or Birch log sets. Optional Dynamic Heat Control systems allow multi-room heat distribution and safe installation above the fireplace.",
        specs: ["2 sizes: 36\" & 42\"", "Up to 45,000 BTU", "Electric ember bed — 360° glow", "Choice of 3 log styles", "Optional multi-room heat control", "President's Lifetime Warranty"],
        image: "https://d2zjr2e3be66hk.cloudfront.net/eyJidWNrZXQiOiJhc3NldHMud29vZGxhbmRkaXJlY3QuY29tIiwia2V5IjoicHJvZHVjdC1pbWFnZXMvTmFwb2xlb24tRWxldmF0aW9uLVgtNDItRFYtRmlyZXBsYWNlLU1haW4uanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MDAsImhlaWdodCI6NjAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        url: "https://www.napoleon.com/en/us/fireplaces/products/fireplace-products/gas-fireplaces/elevation-x-series",
      },
      {
        name: "Altitude X Gas Fireplace",
        description:
          "Traditional styling with a large viewing area and Napoleon's signature NIGHT LIGHT™ function — the firebox glows beautifully even when the flames are off. Features Bluetooth smart controls, a variable-speed thermostatic blower, seven decorative front options, and a 42\" wide viewing area. Proflame II remote included.",
        specs: ["2 sizes: 36\" & 42\"", "Up to 38,000 BTU", "NIGHT LIGHT™ ember function", "42\" wide viewing area", "7 decorative front options", "Bluetooth / Proflame II remote"],
        image: "https://d2zjr2e3be66hk.cloudfront.net/eyJidWNrZXQiOiJhc3NldHMud29vZGxhbmRkaXJlY3QuY29tIiwia2V5IjoicHJvZHVjdC1pbWFnZXMvTmFwb2xlb24tQWx0aXR1ZGUtWC00Mi1tYWluLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAwLCJoZWlnaHQiOjYwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        url: "https://www.napoleon.com/en/us/fireplaces/products/fireplace-products/gas-fireplaces/altitude-x-series",
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
