export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content: {
    heading?: string;
    body?: string;
    image?: { src: string; alt: string };
  }[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: "how-to-choose-a-gas-fireplace-insert",
    title: "Choose a Gas Fireplace Insert: Size, BTU, Venting",
    excerpt:
      "Learn how to choose the right gas fireplace insert for your existing firebox. Measure correctly, meet CA/NV codes, and know when to involve a specialist.",
    date: "September 2, 2026",
    author: "Natalie Casey",
    category: "Buying Guide",
    content: [
      {
        body: "A gas fireplace insert can turn a drafty, unused firebox into the warmest seat in the house. But pick the wrong size, venting setup, or BTU rating and you'll spend thousands on an appliance that either overwhelms a small room or barely takes the edge off a large one. The stakes are higher than most buyers expect. Mismatched dimensions mean costly returns. Incorrect venting can violate local building codes. And in parts of California and Nevada, permitting requirements add another layer of complexity that generic online advice rarely covers. Below, you'll find a practical decision framework: how to measure, what venting options actually work for retrofit installs, how to match heat output to your space, and when to stop Googling and call a professional.",
      },
      {
        image: {
          src: "/insights/how-to-choose-a-gas-fireplace-insert/measure-firebox.webp",
          alt: "A homeowner crouching near a traditional masonry fireplace opening with a tape measure extended across the firebox width",
        },
      },
      {
        heading: "What Is a Gas Fireplace Insert, and Do You Actually Need One?",
        body: "A gas insert is a sealed, factory-built firebox that slides into an existing masonry or factory-built fireplace opening. It connects to your gas supply and vents combustion gases through a liner that runs up your existing chimney. That's what separates it from gas logs (which sit inside an open fireplace and vent up the chimney unlined) and from a built-in gas fireplace (which gets framed into new construction and doesn't require an existing firebox at all). If you're unsure whether your hearth setup calls for an insert or something else entirely, a good starting point is understanding the [difference between a gas fireplace and a gas insert](/insights/cosmo-vs-cosmo-gas-fireplace-or-gas-insert). Why does the distinction matter? Inserts are purpose-built for retrofits. They're designed to fit inside the constraints of an existing opening, which means dimensions, venting paths, and clearances are non-negotiable.",
      },
      {
        heading: "How to Measure Your Fireplace Opening for the Right Insert",
        body: "Grab a tape measure before you start shopping. The most common and most expensive mistake is ordering an insert that doesn't physically fit.",
      },
      {
        heading: "The Five Measurements You Need",
        body: "Take these from inside the firebox, with any grate or log set removed: front width, measured across the widest point at the front opening; rear width, measured across the back wall (most fireboxes taper inward, so this number will be smaller); opening height, measured from the hearth floor to the top of the opening at center; firebox depth, measured from the front face straight back to the rear wall; and hearth depth, measured from the front of the fireplace opening outward to the edge of the hearth. The taper matters more than most guides acknowledge. A firebox that measures 36 inches across the front but only 22 inches at the back won't accept every 36-inch insert. Always check both the front and rear width specs on the manufacturer's spec sheet.",
      },
      {
        heading: "Clearance and Mantel Fit",
        body: "Every insert requires minimum clearances to combustible materials, including your mantel. If you have a wood surround, the insert's documentation will specify how far the mantel must sit above and to the sides of the unit. This is where aesthetics and safety collide. A beautifully proportioned mantel installed two inches too close to the insert violates code. Plan both elements together, rather than buying the insert first and the mantel second, to avoid that headache entirely. Current [fireplace design trends for California homes](/insights/5-fireplace-design-trends-for-california-homes) emphasize clean surrounds with generous proportions, and those proportions depend on knowing your clearance numbers upfront.",
      },
      {
        heading: "Gas Insert Venting: Direct Vent, B-Vent, and What Works for Retrofits",
        body: "Venting is the single biggest variable that separates a safe, code-compliant install from a problematic one. Here's how the three main types break down for inserts. Direct vent is the standard for modern gas inserts and the one we'd recommend in almost every case. It uses a coaxial liner (pipe within a pipe) that draws combustion air from outside and exhausts fumes back out through the chimney. The firebox stays sealed from your living space, which means your indoor air quality stays clean and efficiency stays high. B-vent (natural vent) pulls combustion air from the room and vents up the chimney. These units are less efficient and less common in newer inserts. They also require adequate room volume for combustion air supply. Vent-free units don't vent at all. While legal in some jurisdictions, they're restricted or banned in certain California air districts. We'd generally steer you toward direct vent unless you have a very specific use case. Your existing chimney condition determines what's feasible — a cracked flue liner or deteriorating masonry may need repair before any insert goes in. Start with a chimney inspection.",
      },
      {
        image: {
          src: "/insights/how-to-choose-a-gas-fireplace-insert/living-room-insert.webp",
          alt: "Interior of a warm living room at dusk with a lit gas fireplace insert glowing inside a stone surround",
        },
      },
      {
        heading: "BTU Guide: How Much Heat Output Do You Actually Need?",
        body: "BTU (British Thermal Unit) ratings tell you how much heat the unit produces. But the number on the box isn't the whole story.",
      },
      {
        heading: "Matching BTUs to Room Size and Climate",
        body: "A rough rule of thumb: you need about 20 BTUs per square foot in a mild climate and up to 35 BTUs per square foot in colder areas. A 400-square-foot living room in coastal Southern California might only need an 8,000 BTU insert for supplemental warmth. The same room in Reno during January might call for 14,000 BTUs or more. But those numbers shift based on ceiling height and how well your home insulates. A vaulted ceiling with single-pane windows loses heat fast, even in a temperate zone. How will you use the insert? Supplemental heat on chilly evenings calls for a smaller unit than primary-source heating during winter months.",
      },
      {
        heading: "Efficiency Ratings Tell the Real Story",
        body: "An insert rated at 30,000 BTUs with 80% efficiency delivers 24,000 BTUs of usable heat. One rated at 25,000 BTUs with 90% efficiency delivers 22,500. The gap narrows fast. Always compare how much heat you actually get. The U.S. EPA's BurnWise program notes that [gas inserts offer significant efficiency gains over open fireplaces](https://www.epa.gov/burnwise/frequent-questions-about-wood-burning-appliances), which typically lose most of their heat up the chimney. That efficiency advantage is the whole reason inserts exist.",
      },
      {
        heading: "Natural Gas vs. Propane: Which Fuel Fits Your Situation?",
        body: "Most inserts are available in both natural gas and propane configurations. Your choice usually comes down to what's already available at your property. If you have an existing natural gas line near the fireplace, that's the obvious path. Running a new gas line adds cost, typically several hundred dollars or more depending on distance and local labor rates. Propane is the go-to for rural properties in Nevada or mountain communities in California where natural gas service isn't available. Propane burns slightly hotter per cubic foot, but refilling your tank adds an ongoing cost that piped natural gas avoids. Neither fuel is objectively \"better.\" Match it to your infrastructure and budget.",
      },
      {
        heading: "What Does a Gas Insert Actually Cost to Install?",
        body: "The insert itself is only one line item. A realistic budget accounts for several components, and skipping any of them leads to surprise invoices mid-project: the insert unit (firebox, burner, glass front); venting and liner (a coaxial liner for direct vent through your existing chimney); gas line work (running or extending a gas line); electrical (an outlet for the blower and ignition, if not battery-powered); surround and finish (mantel, facing, tile, or stone); labor (professional installation and testing); and permits (required in most California and Nevada jurisdictions). Budget note for Bay Area homeowners: the Bay Area Air Quality Management District's Clean HEET program [does not cover gas fireplace inserts](https://www.baaqmd.gov/~/media/files/strategic-incentives/clean-heet-program/clean-heet_program-guidelines-terms-and-conditions-pdf.pdf?rev=338eaac0169c45d1b9e6772ac7212a38). Factor that into your financial planning if you were counting on rebate assistance. When you're weighing the ongoing expense, understanding [how to maintain your gas fireplace for safe and efficient use](/insights/how-to-maintain-your-gas-fireplace) helps you anticipate annual service costs and avoid deferred surprises.",
      },
      {
        image: {
          src: "/insights/how-to-choose-a-gas-fireplace-insert/insert-closeup.webp",
          alt: "Close-up detail of a modern gas fireplace insert with realistic ceramic logs and a dancing flame",
        },
      },
      {
        heading: "When to Stop DIY-ing and Call a Pro",
        body: "You can absolutely handle the research, measuring, and comparing features on your own. That homework saves time and money. But certain steps require a licensed professional, and this is where cutting corners creates real risk. Have a certified technician inspect your chimney to assess structural integrity and confirm your flue can accept a liner. Gas line work requires a licensed plumber or gas fitter in both California and Nevada. And installing the insert itself involves testing gas connections, verifying combustion air supply, and confirming clearances to combustible materials. If you're also selecting a mantel, having a single team coordinate the insert and the surround avoids the clearance conflicts we described earlier. That integrated approach — designing the full fireplace composition rather than assembling it in pieces — is where the difference between a good result and a great one shows up.",
      },
      {
        heading: "Frequently Asked Questions",
        body: "A few of the questions we hear most often from homeowners weighing a gas insert.",
      },
      {
        heading: "Can you put a gas fireplace insert in an existing fireplace?",
        body: "In many cases, yes, but your existing fireplace and chimney must be compatible with the insert's venting system and clearance requirements. A certified chimney inspection is the best way to confirm your flue can accept the correct liner and that the structure is in safe condition before you buy.",
      },
      {
        heading: "What are the disadvantages of a gas fireplace insert?",
        body: "The biggest downsides are how complex the project can get and the upfront cost, especially if you need venting, gas line work, electrical, or surround changes. In some California jurisdictions, permitting and air district rules can also limit certain configurations or add time to your install.",
      },
      {
        heading: "Are gas fireplace inserts worth the money?",
        body: "They can be, if you want a cleaner, more controllable heat source than an open fireplace and you plan to use it regularly. Value typically comes down to choosing the right unit for your space and avoiding rework from sizing, venting, or clearance mistakes.",
      },
      {
        heading: "What are the code and permit steps in California and Nevada that can delay a gas insert project?",
        body: "Most projects require permits, and timelines can vary by city, county, and local air district rules. Before you order equipment, confirm permit requirements, inspection steps, and any vent-free restrictions with your local building department and your installer.",
      },
      {
        heading: "How do I choose between a standing pilot and electronic ignition for a gas insert?",
        body: "A standing pilot can simplify how you operate the unit but uses a small amount of gas continuously, while electronic ignition reduces fuel use by lighting only when you need it. If you care about performance during outages, ask whether the unit can run on battery backup or requires household power to ignite and control.",
      },
      {
        heading: "What features should I compare beyond BTUs when selecting a specific model?",
        body: "Compare glass size and viewing area, how the flame looks, blower noise levels, thermostat or remote controls, and how the surround panels fit your opening. Also check warranty terms and whether you can get local service, since parts and support matter long after you install.",
      },
      {
        heading: "How do I plan my surround and mantel design so it stays compliant and looks proportional?",
        body: "Start with the insert's published clearance requirements, then design your mantel height, depth, and side legs around those constraints. If you are changing facing materials like tile or stone, confirm final dimensions with your installer so finish thickness does not create clearance or fit issues.",
      },
      {
        heading: "Your Next Step Toward the Right Insert",
        body: "Choosing a gas fireplace insert comes down to five decisions: size, venting type, BTU output, fuel source, and who installs it. Get those right and you'll have an appliance that heats efficiently, looks proportional to your space, and meets code on the first inspection. Get one wrong and you're looking at returns, rework, or a unit that never quite performs the way you expected. If you're in California or Nevada and want to see inserts sized alongside mantels and surrounds in a real showroom setting, [California Mantel & Fireplace](/) has been helping homeowners and builders make these decisions since 1987. Their studio approach means you can evaluate proportions, clearances, and finishes together rather than guessing from spec sheets. Reach out for a consultation before you commit to a unit.",
      },
    ],
  },
  {
    slug: "modern-fireplace-design-trends-2026",
    title: "Modern Fireplace Design Trends: 2026 Edition",
    excerpt:
      "Linear fireplaces, smart home integration, eco-conscious options, and bold new materials — here's what's shaping contemporary hearth design this year.",
    date: "April 28, 2026",
    author: "Natalie Casey",
    category: "Design Trends",
    content: [
      {
        body: "Gone are the days of bulky, ornate fireplaces that dominate a room with their traditional aesthetics. Today's fireplace designs emphasize sleek design, efficiency, and smart technology — and the 2026 lineup from California Mantel & Fireplace reflects exactly that.",
      },
      {
        heading: "Linear Fireplaces",
        body: "Horizontal flame configurations dominate modern spaces, offering minimalist aesthetics that integrate seamlessly into contemporary interiors. These units are frequently positioned beneath flat-screen televisions to create unified entertainment zones while maximizing wall space.",
      },
      {
        heading: "Smart Home Integration",
        body: "Advanced fireplace technology now enables remote control via smartphone apps and voice commands. Features include adjustable flame height, heat output scheduling, and integration with broader home automation systems — enhancing both convenience and energy management.",
      },
      {
        heading: "Eco-Conscious Options",
        body: "Gas and electric fireplaces provide cleaner alternatives to wood-burning units. Electric models produce zero emissions and require no venting, while gas options burn more efficiently than traditional fireplaces — potentially reducing heating costs and improving indoor air quality.",
      },
      {
        heading: "Indoor-Outdoor Connectivity",
        body: "Double-sided fireplaces and strategically positioned outdoor features blur the boundaries between interior and exterior living spaces, expanding usable square footage and creating cohesive design flow throughout properties.",
      },
      {
        heading: "Material Finishes",
        body: "Contemporary aesthetics favor large-format tiles, concrete, metal accents, and exotic wood veneers over traditional brick and stone — creating smooth, uninterrupted surfaces with minimal visual distraction.",
      },
    ],
  },
  {
    slug: "how-to-prep-your-fireplace-for-winter",
    title: "How to Prep Your Fireplace for Winter: A California Homeowner's Guide",
    excerpt:
      "Before you light that first spark of the season, your fireplace deserves a little attention. Here's your step-by-step winter-ready checklist.",
    date: "October 22, 2025",
    author: "April Anne Abundo",
    category: "Maintenance",
    content: [
      {
        body: "Even in sunny California, the cooler months invite us to gather by the fire and create cozy moments at home. But before you light that first spark of the season, your fireplace deserves a little attention. Whether you own a modern electric insert or a classic gas fireplace, taking the time to prepare it for winter ensures safety, efficiency, and comfort.",
      },
      {
        heading: "1. Start with a Thorough Inspection",
        body: "Before using your fireplace, inspect both the interior and exterior for signs of wear or buildup. Check for cracks or gaps in the firebox or mantel, debris or soot buildup around the insert, and any unusual odors or residue. If you notice anything unusual, contact a professional for inspection. For gas fireplaces, ensure your pilot light and gas lines are in good condition.",
      },
      {
        heading: "2. Clean the Glass and Mantel",
        body: "Over time, soot, dust, and film can cloud your fireplace glass and dull your mantel's finish. Use a fireplace-safe glass cleaner for a streak-free shine, and wipe your mantel with a soft, damp cloth and mild cleaner — avoid harsh chemicals, especially on wood or precast. Add a seasonal touch with décor like candles or garlands, but keep them clear of open flames.",
      },
      {
        heading: "3. Check Your Vents and Airflow",
        body: "Good ventilation is key to efficiency and safety. Make sure your vents and louvers are free of dust and obstructions. If you have a vented gas fireplace, ensure that exhaust pathways are clear to prevent carbon buildup. Even electric fireplaces need occasional dusting of their air intake vents for optimal performance.",
      },
      {
        heading: "4. Test Your Safety Devices",
        body: "Before you light up, test your smoke and carbon monoxide detectors. These small checks can make a big difference for your family's safety. Replace old batteries and ensure your detectors are within their service life — usually 5–10 years.",
      },
      {
        heading: "5. Add a Stylish Winter Update",
        body: "Winter is the perfect time to refresh your living space. Consider updating your fireplace area with a new mantel design or a custom surround to give your room a cozy, modern feel. From natural precast stone to sleek wood mantels, a small design upgrade can make your fireplace the centerpiece of your winter gatherings.",
      },
      {
        body: "\"A well-prepared fireplace isn't just about safety — it's about peace of mind.\" — California Mantel & Fireplace Team",
      },
    ],
  },
  {
    slug: "5-fireplace-design-trends-for-california-homes",
    title: "5 Fireplace Design Trends for California Homes",
    excerpt:
      "From minimalist linear designs and bold stone surrounds to eco-friendly electric and ventless options — what's hot in California right now.",
    date: "October 1, 2025",
    author: "April Anne Abundo",
    category: "Design Trends",
    content: [
      {
        body: "Fireplaces are no longer just about warmth — they're a centerpiece and a statement of style. Modern California homeowners increasingly view fireplace upgrades as opportunities to express personal style while accommodating the state's emphasis on indoor-outdoor living.",
      },
      {
        heading: "1. Minimalist & Linear Fireplaces",
        body: "Clean-lined, contemporary fireplaces dominate modern California interiors. These designs maximize wall space through horizontal orientations and low profiles. Many installations incorporate floor-to-ceiling tile or stone accents, establishing gallery-inspired aesthetics that complement minimalist interior schemes.",
      },
      {
        heading: "2. Indoor-Outdoor Fireplaces",
        body: "California's favorable climate enables year-round outdoor entertaining. Fireplaces that connect living rooms to patios or decks allow for cozy year-round entertaining. Double-sided models create seamless transitions between interior and exterior spaces — aligning perfectly with California's lifestyle.",
      },
      {
        heading: "3. Eco-Friendly & Gas Fireplaces",
        body: "Environmental consciousness shapes fireplace selections in California. Gas inserts and high-efficiency models provide cleaner alternatives to traditional wood-burning options — reducing maintenance requirements while decreasing carbon footprints for sustainability-focused homeowners.",
      },
      {
        heading: "4. Statement Materials & Textures",
        body: "Contemporary designs leverage dramatic materials as focal points. Marble, terrazzo, reclaimed wood, and concrete create visually striking installations. Fireplaces have become a canvas for creativity, allowing homeowners to establish distinctive room centerpieces through bold material selection.",
      },
      {
        heading: "5. Smart & Automated Fireplaces",
        body: "Technology integration enables remote fireplace control via smartphone applications. These systems offer programmable flame settings, adjustable heat output, and automated timers — catering to convenience-oriented homeowners seeking modern functionality alongside aesthetic appeal.",
      },
    ],
  },
  {
    slug: "gas-vs-wood-fireplaces",
    title: "Gas vs. Wood Fireplaces: Which One Is Right for Your Home?",
    excerpt:
      "Gas fireplaces offer push-button convenience and efficiency. Wood delivers crackling authenticity. Here's how to decide which is right for you.",
    date: "May 28, 2019",
    author: "Justin Japhet Devera",
    category: "Buying Guide",
    content: [
      {
        body: "Choosing between a gas and wood fireplace is one of the most common decisions homeowners face. Both offer real warmth and ambiance — but they suit very different lifestyles. Here's what you need to know.",
      },
      {
        heading: "Gas Fireplaces: Convenient and Efficient",
        body: "Gas fireplaces offer homeowners an accessible heating solution. With just the push of a button, you can enjoy consistent heat and clean-burning flames. These units appeal to those seeking modern convenience and minimal upkeep — no wood storage, no ash removal, no mess.",
      },
      {
        heading: "Wood Fireplaces: Traditional and Authentic",
        body: "Traditional wood-burning options deliver the sensory experience many homeowners cherish. The crackling sound and natural aroma create a warm and inviting atmosphere — though this comes at the cost of greater maintenance requirements, including regular ash cleanup and chimney sweeping.",
      },
      {
        heading: "Key Differences at a Glance",
        body: "Energy efficiency: gas units generally outperform wood alternatives. Maintenance: gas requires significantly less ongoing care. Ambiance: wood provides authentic, classic warmth. Installation: both involve different ventilation and installation needs — your home's existing setup may favor one over the other.",
      },
      {
        heading: "Making Your Choice",
        body: "The best choice ultimately depends on your lifestyle, preferences, and how you plan to use your fireplace. Homeowners prioritizing ease of operation and clean living may favor gas, while those valuing a traditional, immersive fire experience should consider wood-burning options. Our team can walk you through both in person at any of our three California showrooms.",
      },
    ],
  },
  {
    slug: "how-to-maintain-your-gas-fireplace",
    title: "How to Maintain Your Gas Fireplace for Safe and Efficient Use",
    excerpt:
      "Routine maintenance keeps your fireplace operating safely and extends its lifespan. Here's what to clean, inspect, and when to call a professional.",
    date: "May 28, 2019",
    author: "Justin Japhet Devera",
    category: "Maintenance",
    content: [
      {
        heading: "Why Maintenance Matters",
        body: "Routine upkeep keeps your fireplace operating safely while maintaining optimal heat output. It also helps prevent costly repairs and extends the lifespan of your unit — making it one of the best investments of your time as a homeowner.",
      },
      {
        heading: "Basic Cleaning Tips",
        body: "Start by turning off your fireplace and allowing it to cool completely. Clean the glass panel using a non-abrasive cleaner and remove any dust or debris from the interior. A clean fireplace not only looks better — it performs better.",
      },
      {
        heading: "Inspect Key Components",
        body: "Check the burner, pilot light, and logs for any signs of wear or blockage. If you notice unusual odors or weak flames, it may be time for a professional inspection. Don't ignore small warning signs — they often indicate issues that are inexpensive to fix early and costly to ignore.",
      },
      {
        heading: "Schedule Professional Service",
        body: "Even with regular upkeep at home, it's recommended to have your fireplace serviced annually by a certified technician to ensure everything is functioning properly. Our team at California Mantel & Fireplace can help you schedule a service visit.",
      },
      {
        body: "Maintaining your gas fireplace improves performance and gives you the confidence that your home is safe and comfortable all season long.",
      },
    ],
  },
  {
    slug: "cosmo-vs-cosmo-gas-fireplace-or-gas-insert",
    title: "Cosmo vs. Cosmo: Is It a Gas Fireplace or a Gas Insert?",
    excerpt:
      "Two Heat & Glo products share the Cosmo name — one's a standalone gas fireplace, the other's a gas insert. Here's the quick answer, plus how to tell COSMO 42 from COSMOI30 and COSMOI35.",
    date: "August 21, 2026",
    author: "Natalie Casey",
    category: "Buying Guide",
    content: [
      {
        body: "Yes, we know — naming a fireplace and an insert almost the same thing is a little cruel. Heat & Glo's Cosmo lineup covers two different products: the Cosmo (marketed as COSMO 42 at its largest size) is a standalone gas fireplace, while the Cosmo Insert (COSMOI30 and COSMOI35) is a separate product that fits inside an existing fireplace. Quick answer: COSMO 42 = gas fireplace, built for new construction or a full replacement. COSMOI30 / COSMOI35 = gas insert, built to go inside a fireplace opening you already have. The rest of this guide covers how to tell them apart and which one fits your project.",
      },
      {
        heading: "Cosmo, the Gas Fireplace",
        body: "The Heat & Glo Cosmo is a direct-vent gas fireplace, built for spaces without an existing firebox — new construction, remodels opening up a wall, or replacing an old masonry fireplace entirely. It's sized for a smaller footprint than most linear fireplaces and comes in 32\", 36\", and 42\" widths — \"COSMO 42\" is the largest of the three. It includes TV-safe heat management, so it's a common pick when a television will be mounted directly above it. See the full [Heat & Glo lineup](/fireplaces/heat-and-glo) for sizing and specs.",
      },
      {
        heading: "Cosmo, the Gas Insert",
        body: "The Cosmo Insert is a different product built to fit inside an existing wood-burning fireplace opening, converting it to clean-burning gas usually with less construction than a full fireplace replacement — though venting, gas or electrical work, and finish trim are still typically part of the install. It comes in two sizes: COSMOI30, rated up to 27,000 BTU at up to 76% efficiency, fitting a firebox opening of at least 32\"W x 26\"H; and COSMOI35, rated up to 33,000 BTU at up to 78% efficiency, fitting a firebox opening of at least 37\"W x 27\"H. It shares the same contemporary look as the Cosmo fireplace — a black fluted glass interior, with crushed glass media available in eight colors — plus Wi-Fi-enabled IntelliFire Touch ignition. Full specs are on the [Cosmo gas insert page](/fireplaces/gas-inserts/cosmo).",
      },
      {
        heading: "Key Differences at a Glance",
        body: "The core question is whether you already have a fireplace opening. Building new, or fully replacing an old fireplace? That's the Cosmo fireplace (COSMO 42, or the 32\"/36\" sizes). Have an existing wood-burning fireplace you want converted to gas? That's the Cosmo Insert, sized to your opening (COSMOI30 or COSMOI35). Both share the same modern glass-forward styling, so the deciding factor is almost always what's already in the wall, not the look.",
      },
      {
        heading: "Which One Should You Choose?",
        body: "If you're unsure which one your project needs, the fastest way to know is your firebox opening. No existing opening, or a full teardown-and-rebuild? That's Cosmo fireplace territory. Existing masonry fireplace you want to keep and convert? Measure the opening and compare it against the insert's 32\"x26\" (COSMOI30) or 37\"x27\" (COSMOI35) minimums. Our team can confirm the right fit in person — as currently listed, the Cosmo fireplace and the COSMOI35 insert are displayed at all three of our [showrooms](/showrooms), and the COSMOI30 is displayed in Anaheim.",
      },
      {
        heading: "Frequently Asked Questions",
        body: "Is COSMO 42 an insert? No — it's a standalone gas fireplace, the 42\" size in the Cosmo fireplace lineup. What does COSMOI30 mean? It's the 30\" size of the Cosmo gas insert, the version built to fit inside an existing fireplace opening. Which one can I see in a showroom? As currently listed, the Cosmo fireplace and COSMOI35 insert are on display in Anaheim, Dublin, and Sacramento, with COSMOI30 on display in Anaheim — always worth a quick call to confirm before you drive over, since floor units do rotate.",
      },
      {
        body: "Ready to see them side by side? [Visit a showroom](/showrooms), or start with a [guided project estimate](/instant-estimate) online.",
      },
    ],
  },
];

export function getInsightPost(slug: string) {
  return insightPosts.find((p) => p.slug === slug);
}
