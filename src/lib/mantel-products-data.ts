export interface MantelDimensions {
  // Each mantel is offered in one or more sizes. Values are inches, read from the CAD.
  openingWidths: number[];   // firebox-opening width option(s), e.g. [37.125, 43]
  openingHeight: number;     // opening height (inches)
  overallWidths: number[];   // outer/shelf width option(s) — used for wall-space fit
  overallHeight: number;     // top of shelf to floor
  shelfDepth?: number;       // projection of the shelf from the wall (inches)
  // Wood only: needed for combustible-clearance check.
  shelfHeightAboveOpening?: number; // underside of shelf to top of firebox opening
  cadVerified?: boolean;     // true once a human has confirmed the extracted numbers
}

export interface MantelProduct {
  slug: string;
  name: string;
  type: "precast" | "wood" | "overmantel" | "beam";
  style: "contemporary" | "traditional" | "transitional" | "beams";
  // Beams only: what the beam is made of (some precast beams look like wood).
  beamMaterial?: "precast" | "wood";
  // Sub-classification for traditional precast mantels (drives the /mantels/traditional-* facets).
  // Provisional — assigned from descriptions/CAD shape; review against product images.
  subStyle?: "classical" | "french" | "ornate" | "rustic";
  description: string;
  specs?: string;
  cadPdf?: string; // path relative to /public, e.g. "/cad/nullarbor.pdf"
  image?: string;
  // Additional product photos shown as a gallery on the product page (first item is the main image).
  images?: string[];
  // Physical dimensions live in mantel-dimensions.ts (keyed by slug), extracted from the CADs.
}

export const mantelProducts: MantelProduct[] = [
  // --- Overmantels ---
  {
    slug: "macquarie",
    name: "Macquarie",
    type: "overmantel",
    style: "traditional",
    cadPdf: "/cad/macquarie.pdf",
    description:
      "The Macquarie Overmantel is a beautifully designed fireplace surround that blends timeless elegance with architectural precision. Expertly crafted from high-quality precast materials, this fireplace overmantel features a broad central panel framed by detailed pilasters, creating a symmetrical and balanced focal point above your hearth. With its refined molding profiles and clean lines, the Macquarie enhances the visual height and grandeur of your fireplace, adding depth and dimension without overwhelming the room. Its classic architectural detailing makes it versatile enough to complement both traditional fireplace designs and modern interior styles. Suited for gas fireplaces, electric fireplaces, or custom hearth installations, this precast overmantel combines durability, strength, and lasting beauty.",
  },
  {
    slug: "coonawarra",
    name: "Coonawarra",
    type: "overmantel",
    style: "traditional",
    cadPdf: "/cad/coonawarra.pdf",
    description:
      "The Coonawarra Overmantel is a beautifully crafted fireplace surround that blends timeless elegance with classic architectural detail. Designed with a wide rectangular frame, recessed central panel, and bold crown molding, this fireplace mantel extension adds height, depth, and sophistication to any hearth. Its smooth finish and clean lines make it a versatile choice, seamlessly enhancing both traditional fireplaces and contemporary fireplace designs. Perfect for gas fireplaces, electric fireplaces, or custom hearths, the Coonawarra serves as an elegant focal point while providing a refined backdrop for mirrors, artwork, or decorative accents.",
  },
  {
    slug: "cobar",
    name: "Cobar",
    type: "overmantel",
    style: "traditional",
    cadPdf: "/cad/cobar.pdf",
    description:
      "The Cobar Overmantel is a luxuriously crafted fireplace surround that combines timeless elegance with traditional architectural design. Featuring a central raised panel framed by symmetrical pilasters and topped with a prominent cornice shelf, this fireplace mantel instantly adds height, grandeur, and balance to any hearth. Its clean lines, subtle molding, and refined proportions showcase the artistry of classic fireplace architecture. Constructed from durable, high-quality materials, the Cobar provides a long-lasting centerpiece that enhances both traditional and transitional interiors.",
  },
  {
    slug: "monash",
    name: "Monash",
    type: "overmantel",
    style: "traditional",
    cadPdf: "/cad/monash.pdf",
    description:
      "The Monash Mantel is a luxuriously crafted wood fireplace overmantel that brings timeless sophistication and architectural charm to any living space. Built from high-quality wood, this fireplace surround features a symmetrical layout with a prominent central panel framed by two narrower side panels, offering balance, proportion, and refined elegance. Accented with subtle molding details and a beautifully sculpted crown molding, the Monash adds depth, height, and visual grandeur to your hearth. Its versatile design makes it the perfect complement for both gas fireplaces and electric fireplaces.",
  },
  // --- Wood Surrounds ---
  {
    slug: "hobart",
    beamMaterial: "wood",
    name: "Hobart",
    type: "beam",
    image: "/mantels/hobart-1.png",
    cadPdf: "/cad/hobart-1.pdf",
    style: "transitional",
    description:
      "The Hobart Mantel is a classic wood fireplace surround that blends traditional design, architectural balance, and lasting craftsmanship. Handcrafted from premium solid wood with a rich natural finish, this fireplace mantel surround features a wide, prominent top shelf — perfect for displaying décor, artwork, or seasonal accents — supported by sturdy vertical pillars that add both structural strength and refined symmetry. Subtle beveled edges and clean lines highlight its classic appeal, making it versatile enough to complement traditional, transitional, or contemporary interiors.",
  },
  {
    slug: "adelaide",
    name: "Adelaide",
    type: "wood",
    style: "transitional",
    image: "/mantels/adelaide.png",
    cadPdf: "/cad/adelaide.pdf",
    description:
      "The Adelaide Mantel is a classic wood fireplace surround that blends timeless elegance with durable craftsmanship, making it a stunning focal point for any hearth. Designed with clean, straight lines and a perfectly symmetrical layout, this fireplace mantel features a wide mantel shelf ideal for displaying artwork, mirrors, or decorative accents. Elegant fluted vertical columns provide subtle architectural detail, while the smooth wood finish highlights the natural grain and texture, adding warmth and charm to your living space.",
  },
  {
    slug: "brisbane",
    name: "Brisbane",
    type: "wood",
    style: "transitional",
    image: "/mantels/brisbane.png",
    cadPdf: "/cad/brisbane.pdf",
    description:
      "The Brisbane Mantel is a handcrafted wood fireplace surround that combines timeless design, architectural detail, and lasting durability. Featuring a substantial rectangular frame with a subtly beveled edge, this wood fireplace mantel offers a clean, symmetrical design that creates a refined focal point above your fireplace. Its rich natural wood finish highlights the grain and texture, bringing warmth, character, and sophistication to any living space. A broad mantel shelf provides generous space for displaying artwork, mirrors, or seasonal décor.",
  },
  {
    slug: "kendall",
    beamMaterial: "wood",
    name: "Kendall",
    type: "beam",
    image: "/mantels/kendall-1.png",
    style: "transitional",
    description:
      "The Kendall Mantel is a classic wood fireplace surround that blends traditional design, refined detailing, and enduring craftsmanship. Expertly constructed from high-quality solid wood with a smooth finish, it beautifully highlights the natural wood grain, adding warmth and sophistication to any room. This wood fireplace mantel features a broad, flat mantel shelf, perfect for showcasing décor, family heirlooms, or seasonal accents, while its elegantly carved trim and pilasters provide both structural integrity and decorative charm.",
  },
  {
    slug: "fremantle",
    name: "Fremantle",
    type: "wood",
    style: "transitional",
    image: "/mantels/fremantle.png",
    cadPdf: "/cad/fremantle.pdf",
    description:
      "The Fremantle Mantel is a classic wood fireplace surround that blends timeless elegance, refined style, and solid durability. Handcrafted from high-quality solid wood, this fireplace mantel surround features a smooth finish that enhances the natural wood grain and rich texture, bringing warmth, character, and charm to your living space. With its clean lines, balanced proportions, and subtle architectural detailing, the Fremantle creates a sophisticated focal point that complements both traditional fireplaces and modern hearth designs.",
  },
  {
    slug: "canberra",
    name: "Canberra",
    type: "wood",
    style: "transitional",
    image: "/mantels/canberra.png",
    cadPdf: "/cad/canberra.pdf",
    description:
      "The Canberra Mantel is a classic wood fireplace surround that blends timeless elegance, durable craftsmanship, and versatile design. Expertly crafted from high-quality wood, this fireplace mantel surround features a sturdy frame with clean lines and subtle detailing, creating a refined and sophisticated centerpiece for your hearth. Its slightly projecting mantel shelf provides both functional display space and architectural balance. The vertical supports with gently recessed paneling add depth, dimension, and texture, enhancing the mantel's traditional charm.",
  },
  // --- Contemporary Precast ---
  {
    slug: "broken-hill",
    name: "Broken Hill",
    type: "precast",
    style: "contemporary",
    cadPdf: "/cad/broken-hill.pdf",
    image: "/mantels/broken-hill.png",
    description:
      "The Broken Hill Mantel is a contemporary precast fireplace surround that combines clean lines, minimalist styling, and durable craftsmanship. Designed for today's modern fireplaces, this elegant fireplace mantel delivers a seamless balance of style and functionality. Crafted from premium, long-lasting materials with a subtle texture and neutral finish that complements a wide variety of interiors. Its versatile design works beautifully with gas fireplaces, electric fireplaces, and traditional hearths.",
  },
  {
    slug: "nullarbor",
    name: "Nullarbor",
    type: "precast",
    style: "contemporary",
    cadPdf: "/cad/nullarbor.pdf",
    image: "/mantels/nullarbor.png",
    description:
      "The Nullarbor Mantel is a sleek precast fireplace surround that blends modern fireplace design with exceptional durability and craftsmanship. Featuring clean lines, a smooth finish, and a streamlined profile, this fireplace mantel adds understated elegance to any living room, great room, or open-concept space. With its subtle detailing and timeless design, the Nullarbor Mantel provides a sophisticated backdrop for gas fireplaces, electric fireplaces, or traditional hearths.",
  },
  {
    slug: "brighton",
    name: "Brighton",
    image: "/mantels/brighton.png",
    type: "precast",
    style: "contemporary",
    cadPdf: "/cad/brighton.pdf",
    description:
      "The Brighton Mantel is a luxury precast fireplace surround crafted with clean, sleek lines and a refined minimalist profile. Perfect for today's modern fireplace designs, this versatile fireplace mantel complements a wide range of interiors, from contemporary living rooms to open-concept great rooms. Built with precision and durability, the Brighton Mantel offers lasting beauty while serving as an elegant focal point for gas fireplaces, electric fireplaces, or traditional hearth installations.",
  },
  {
    slug: "clarendon",
    name: "Clarendon",
    image: "/mantels/clarendon.png",
    type: "precast",
    style: "contemporary",
    cadPdf: "/cad/clarendon.pdf",
    description:
      "The Clarendon Mantel is a modern precast fireplace surround that seamlessly combines sleek design with exceptional craftsmanship. Featuring clean architectural lines, a smooth finish, and a versatile neutral tone, this fireplace mantel serves as a sophisticated focal point for living rooms, great rooms, and open-concept interiors. Crafted from durable, high-quality precast materials, the Clarendon Mantel offers long-lasting performance, easy installation, and low maintenance.",
  },
  {
    slug: "woomera",
    name: "Woomera",
    image: "/mantels/woomera.png",
    type: "precast",
    style: "contemporary",
    description:
      "The Woomera Mantel is a contemporary precast fireplace surround that blends clean architectural lines with minimalist elegance, making it an ideal addition to today's modern homes. Expertly crafted from durable, high-quality materials, this fireplace mantel delivers lasting strength, refined style, and reliable performance. Designed as a versatile centerpiece, the Woomera creates a sleek frame for gas fireplaces, electric fireplaces, or traditional hearth designs, enhancing warmth, ambiance, and sophistication in any living space.",
  },
  {
    slug: "urrbrae",
    name: "Urrbrae",
    image: "/mantels/urrbrae.png",
    type: "precast",
    style: "contemporary",
    description:
      "The Urrbrae Mantel is a sleek precast fireplace surround that blends modern sophistication with minimalist design, creating a refined focal point for any home. Featuring clean architectural lines, a smooth polished finish, and durable craftsmanship, this fireplace mantel delivers both timeless beauty and long-lasting performance. Perfect for gas fireplaces, electric fireplaces, or traditional hearth installations, the Urrbrae enhances warmth, ambiance, and architectural character in living rooms, great rooms, and open-concept spaces.",
  },
  {
    slug: "koonunga",
    name: "Koonunga",
    type: "precast",
    image: "/mantels/koonunga.png",
    style: "contemporary",
    cadPdf: "/cad/koonunga.pdf",
    description:
      "The Koonunga Mantel is a modern precast fireplace surround that combines clean architectural lines with refined minimalist design, making it a sophisticated focal point in any living space. Crafted from high-quality precast materials with a smooth, durable finish, this fireplace mantel delivers long-lasting performance and timeless style. Suited for gas fireplaces, electric fireplaces, or traditional fireboxes, the Koonunga enhances both warmth and ambiance while maintaining a sleek, understated profile.",
  },
  {
    slug: "willunga",
    name: "Willunga",
    image: "/mantels/willunga.png",
    type: "precast",
    style: "contemporary",
    description:
      "The Willunga Mantel is a modern precast fireplace surround that combines clean architectural lines with a refined minimalist profile, making it the perfect choice for today's interiors. Expertly crafted for both style and durability, this fireplace mantel creates a sophisticated backdrop for gas fireplaces, electric fireplaces, and traditional hearth installations. With its versatile neutral finish, the Willunga blends seamlessly into a wide variety of décor styles.",
  },
  {
    slug: "bolte",
    name: "Bolte",
    type: "precast",
    style: "contemporary",
    cadPdf: "/cad/bolte.pdf",
    image: "/mantels/bolte.png",
    description:
      "The Bolte Mantel is a contemporary precast fireplace surround that showcases sleek modern design with clean lines, a smooth finish, and minimalist elegance. Crafted from premium, durable materials, this fireplace mantel offers both style and strength. With its refined geometric profile, the Bolte is the perfect focal point for gas fireplaces, electric fireplaces, or traditional firebox openings. Designed for versatility, it complements modern interiors while adding warmth, architectural depth, and sophisticated character to any space.",
  },
  {
    slug: "fluted-filler",
    name: "Fluted Filler",
    image: "/mantels/fluted-filler.png",
    type: "precast",
    style: "contemporary",
    description:
      "The Fluted Filler Mantel is a contemporary fireplace surround designed to enhance modern living spaces with elegance, warmth, and style. Featuring a sleek, streamlined profile and clean panels, this fireplace mantel beautifully frames the flame display, creating a striking focal point that blends ambiance with comfort. Expertly crafted from durable, high-quality materials, the Fluted Filler delivers long-lasting performance while adding sophisticated architectural detail to any room.",
  },
  {
    slug: "sausalito",
    name: "Sausalito",
    type: "precast",
    image: "/mantels/sausalito.png",
    style: "contemporary",
    description:
      "The Sausalito Mantel is a modern precast fireplace surround that blends minimalist design with refined elegance, making it the perfect centerpiece for today's interiors. Defined by its clean lines, geometric simplicity, and smooth polished finish, this fireplace mantel adds sophistication and architectural character to any living space. Expertly crafted from durable, high-quality precast materials, the Sausalito offers both style and long-lasting performance.",
  },
  {
    slug: "belmont",
    name: "Belmont",
    image: "/mantels/belmont.png",
    type: "precast",
    style: "transitional",
    cadPdf: "/cad/belmont.pdf",
    description:
      "The Belmont Mantel is a luxury precast fireplace surround that combines graceful curves with sleek architectural lines, making it a stunning upgrade for any hearth. Featuring a smooth white finish, an elegant arched opening, and finely detailed columns, this fireplace mantel brings timeless sophistication and modern charm to your home. Perfect for both traditional fireplaces and contemporary fireplace inserts, the Belmont enhances living rooms and great rooms with lasting warmth and style.",
  },
  {
    slug: "boomerang",
    name: "Boomerang",
    image: "/mantels/boomerang.png",
    type: "precast",
    style: "contemporary",
    cadPdf: "/cad/boomerang.pdf",
    description:
      "The Boomerang Mantel is a modern precast fireplace surround that combines clean lines, a minimalist profile, and durable craftsmanship. Designed for today's modern fireplaces, this sleek fireplace mantel is crafted from high-quality materials to ensure both elegance and long-lasting performance. Its versatile neutral tone and streamlined silhouette make the Boomerang a sophisticated focal point for gas fireplaces, electric fireplaces, or traditional firebox openings.",
  },
  {
    slug: "whyalla",
    name: "Whyalla",
    image: "/mantels/whyalla.png",
    type: "precast",
    style: "contemporary",
    description:
      "The Whyalla Mantel is a sleek precast fireplace surround that combines modern elegance with minimalist geometry, creating a refined architectural focal point for today's homes. Featuring clean lines, a smooth polished finish, and durable craftsmanship, this fireplace mantel delivers both long-lasting beauty and reliable performance. Suited for gas fireplaces, electric fireplaces, or traditional hearth installations, the Whyalla enhances warmth, ambiance, and sophistication in any living space.",
  },
  {
    slug: "sienna",
    name: "Sienna",
    image: "/mantels/sienna.png",
    type: "precast",
    style: "contemporary",
    description:
      "The Sienna Mantel is a stunning precast fireplace surround that combines clean architectural lines with sleek modern design, making it an eye-catching centerpiece for any home. Crafted with meticulous attention to detail and premium-quality materials, this fireplace mantel delivers both durability and timeless sophistication. Featuring a minimalist silhouette and a smooth refined finish, the Sienna complements a wide variety of interior styles.",
  },
  {
    slug: "rockhampton",
    name: "Rockhampton",
    type: "precast",
    image: "/mantels/rockhampton.png",
    style: "contemporary",
    description:
      "The Rockhampton Mantel is a modern precast fireplace surround that blends clean lines, smooth finishes, and minimalist geometry to create a timeless focal point in any home. Designed with precision and crafted from durable, high-quality materials, this fireplace mantel delivers both refined style and long-lasting strength. Suited for gas fireplaces, electric fireplaces, and traditional hearth designs, the Rockhampton adds warmth, ambiance, and architectural elegance.",
  },
  {
    slug: "reynella",
    name: "Reynella",
    image: "/mantels/reynella.png",
    type: "precast",
    style: "contemporary",
    description:
      "The Reynella Mantel is a sleek precast fireplace surround that combines clean architectural lines with refined minimalist design, making it a sophisticated focal point in any home. Expertly crafted from durable precast concrete, this fireplace mantel delivers both strength and timeless style, ensuring long-lasting performance and beauty. Designed to complement gas fireplaces, electric fireplaces, and traditional hearth installations, the Reynella features a smooth surface and subtle detailing.",
  },
  {
    slug: "mingary",
    name: "Mingary",
    image: "/mantels/mingary.png",
    type: "precast",
    style: "contemporary",
    cadPdf: "/cad/mingary.pdf",
    description:
      "The Mingary Mantel is a contemporary precast fireplace surround that combines clean architectural lines, a smooth refined finish, and superior craftsmanship. Designed to complement a wide variety of interior styles, this fireplace mantel delivers both durability and timeless appeal. Perfect for framing gas fireplaces, electric fireplaces, or traditional hearth openings, the Mingary transforms any living room or great room into a sophisticated gathering area.",
  },
  {
    slug: "casden",
    name: "Casden",
    image: "/mantels/casden.png",
    type: "precast",
    style: "contemporary",
    cadPdf: "/cad/casden.pdf",
    description:
      "The Casden Mantel is a sleek precast fireplace surround designed to enhance the beauty and functionality of any modern fireplace installation. With its clean lines, smooth finish, and refined minimalist design, this fireplace mantel blends contemporary style with lasting durability. Crafted from high-quality, durable materials, the Casden serves as a timeless centerpiece for gas fireplaces, electric fireplaces, or traditional fireboxes.",
  },
  {
    slug: "onkaparinga",
    name: "Onkaparinga",
    type: "precast",
    style: "contemporary",
    image: "/mantels/onkaparinga.png",
    cadPdf: "/cad/onkaparinga.pdf",
    description:
      "The Onkaparinga Mantel is a contemporary precast fireplace surround that combines modern design with exceptional craftsmanship, creating a refined centerpiece for any living space. Featuring clean architectural lines, a smooth finish, and a minimalist silhouette, this fireplace mantel enhances both style and function in today's homes. Its versatile neutral tone allows it to seamlessly blend with a wide range of interior design styles.",
  },
  {
    slug: "wayville",
    name: "Wayville",
    image: "/mantels/wayville.png",
    type: "precast",
    style: "contemporary",
    description:
      "The Wayville Mantel is a contemporary precast fireplace surround that enhances modern living spaces with clean architectural lines and minimalist design. Expertly crafted from high-quality, durable materials, this fireplace mantel offers both strength and sophistication. Featuring neutral tones and a refined geometric silhouette, the Wayville provides a versatile aesthetic that blends seamlessly with a wide variety of interiors — from contemporary lofts to transitional living rooms.",
  },
  {
    slug: "yarra",
    name: "Yarra",
    image: "/mantels/yarra.png",
    type: "precast",
    style: "contemporary",
    description:
      "The Yarra Mantel is a contemporary precast fireplace surround that combines sleek, clean lines with modern sophistication, making it a striking architectural focal point in any living space. Expertly designed for both durability and style, this fireplace mantel offers long-lasting beauty, reliable functionality, and versatile appeal for today's homes. Crafted with precision and backed by nearly four decades of family-owned expertise, the Yarra reflects a legacy of quality and craftsmanship.",
  },
  {
    slug: "ballarat",
    name: "Ballarat",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    image: "/mantels/ballarat.png",
    description:
      "The Ballarat Mantel is a luxury precast fireplace surround that blends modern design with classic craftsmanship. Featuring a smooth crisp white finish, layered moldings, and intricate rope accents, this fireplace mantel creates a sophisticated focal point in any living room, great room, or open-concept space. Perfect for both traditional fireplaces and modern fireplace inserts, the Ballarat complements a wide range of interiors — whether you're designing a classic hearth or a sleek contemporary fireplace wall.",
  },
  {
    slug: "turin",
    name: "Turin",
    image: "/mantels/turin.png",
    type: "precast",
    style: "contemporary",
    description:
      "The Turin Mantel is a contemporary precast fireplace surround that combines modern design with exceptional craftsmanship, creating a refined architectural statement for today's homes. With its clean lines, sleek profile, and minimalist aesthetic, this fireplace mantel serves as an elegant focal point for any living space. Expertly manufactured from high-quality, durable precast materials, the Turin ensures long-lasting beauty, strength, and easy maintenance.",
  },
  {
    slug: "ashford",
    name: "Ashford",
    image: "/mantels/ashford.png",
    type: "precast",
    style: "contemporary",
    description:
      "The Ashford Mantel is a sleek precast fireplace surround designed to elevate modern interiors with its clean lines, minimalist frame, and refined elegance. Featuring a crisp white finish and smooth architectural profile, this contemporary fireplace mantel serves as a striking focal point that blends functionality with timeless style. Expertly crafted from high-quality precast materials, the Ashford delivers durability, easy installation, and lasting beauty.",
  },
  // --- Traditional Precast ---
  {
    slug: "australian",
    name: "Australian",
    type: "precast",
    style: "traditional",
    subStyle: "ornate",
    image: "/mantels/australian.png",
    description:
      "The Australian Mantel is a classically proportioned precast fireplace surround that draws on timeless European design traditions. Featuring symmetrical pilasters, refined molding profiles, and a generous mantel shelf, this traditional mantel creates an elegant focal point suited to formal living rooms and grand interiors. Crafted from durable precast concrete, it combines the beauty of carved stone with long-lasting performance.",
  },
  {
    slug: "barossa",
    name: "Barossa",
    type: "precast",
    style: "traditional",
    subStyle: "ornate",
    cadPdf: "/cad/barossa.pdf",
    image: "/mantels/barossa.png",
    description:
      "The Barossa Mantel is a richly detailed precast fireplace surround with fluted pilasters, decorative corbels, and a deep mantel shelf. One of our most popular traditional styles, the Barossa brings classic European craftsmanship to any living room, study, or formal space. Its bold proportions and refined ornamentation make it a natural centerpiece above gas or wood-burning fireplaces.",
  },
  {
    slug: "bathurst",
    name: "Bathurst",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/bathurst-picture-frame.pdf",
    image: "/mantels/bathurst.png",
    description:
      "The Bathurst Mantel is a stately precast fireplace surround that balances classic symmetry with refined architectural detail. Featuring clean pilaster legs, elegant crown molding, and a broad shelf, the Bathurst adds presence and sophistication to traditional and transitional interiors alike. Constructed from high-quality precast concrete for lasting beauty and durability.",
  },
  {
    slug: "beltana",
    name: "Beltana",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/beltana.pdf",
    image: "/mantels/beltana.png",
    description:
      "The Beltana Mantel is a beautifully crafted traditional precast fireplace surround featuring layered molding details, refined pilasters, and a substantial mantel shelf. Its classic proportions and decorative ornamentation bring timeless elegance to any hearth, complementing both gas fireplaces and traditional wood-burning fireboxes.",
  },
  {
    slug: "bendigo",
    name: "Bendigo",
    type: "precast",
    style: "traditional",
    subStyle: "ornate",
    cadPdf: "/cad/bendigo.pdf",
    image: "/mantels/bendigo.png",
    description:
      "The Bendigo Mantel is a grand traditional precast fireplace surround featuring bold architectural columns, ornate corbels, and a wide decorative frieze. Designed for rooms that demand a dramatic focal point, the Bendigo delivers depth, height, and classic elegance in equal measure. Ideal for formal dining rooms, studies, and large living spaces.",
  },
  {
    slug: "bondi",
    name: "Bondi",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/bondi.pdf",
    image: "/mantels/bondi.png",
    description:
      "The Bondi Mantel is a refined traditional precast fireplace surround with clean pilaster legs and a subtly detailed frieze. Its balanced proportions and classic styling make it a versatile choice for both formal and relaxed traditional interiors. Crafted from durable precast concrete with a smooth finish that accepts any of our standard color options.",
  },
  {
    slug: "cairns",
    name: "Cairns",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/cairns.pdf",
    image: "/mantels/cairns.png",
    description:
      "The Cairns Mantel is a classically styled precast fireplace surround with elegant symmetry, decorative pilasters, and a prominent mantel shelf. Its timeless design bridges traditional and transitional interiors, providing a sophisticated hearth feature that works beautifully with gas inserts, electric fireplaces, and custom hearth installations.",
  },
  {
    slug: "camberwell",
    beamMaterial: "precast",
    name: "Camberwell",
    type: "beam",
    style: "beams",
    image: "/mantels/camberwell.png",
    cadPdf: "/cad/camberwell.pdf",
    description:
      "The Camberwell Beam Mantel is a traditionally styled precast concrete fireplace beam with refined molding details and a well-proportioned silhouette. Its classic design and smooth precast finish create a polished focal point for formal living rooms, master suites, and studies.",
  },
  {
    slug: "cambridge",
    name: "Cambridge",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/cambridge.pdf",
    image: "/mantels/cambridge.png",
    description:
      "The Cambridge Mantel is an elegantly proportioned precast fireplace surround inspired by classic English architecture. Featuring clean pilasters, a decorative entablature, and a generous shelf, the Cambridge delivers understated grandeur that suits both traditional and transitional interiors.",
  },
  {
    slug: "cannes",
    name: "Cannes",
    type: "precast",
    style: "traditional",
    subStyle: "french",
    image: "/mantels/cannes.png",
    cadPdf: "/cad/cannes.pdf",
    description:
      "The Cannes Mantel is a European-inspired precast fireplace surround with graceful proportions, refined pilaster detailing, and a smooth polished finish. Evoking the elegance of French provincial design, the Cannes adds sophistication and warmth to formal living rooms and traditional interiors.",
  },
  {
    slug: "cassis",
    name: "Cassis",
    type: "precast",
    style: "traditional",
    subStyle: "french",
    image: "/mantels/cassis.png",
    cadPdf: "/cad/cassis.pdf",
    description:
      "The Cassis Mantel is a beautifully detailed traditional precast fireplace surround with carved column legs, a decorative frieze, and a wide mantel shelf. Drawing on the charm of southern French design, the Cassis creates an elegant and welcoming hearth feature for classic interiors.",
  },
  {
    slug: "castellina",
    name: "Castellina",
    type: "precast",
    style: "traditional",
    subStyle: "ornate",
    image: "/mantels/castellina.png",
    cadPdf: "/cad/castellina.pdf",
    description:
      "The Castellina Mantel is an Italian-inspired precast fireplace surround with richly detailed corbels, fluted pilasters, and a bold cornice shelf. Its ornate craftsmanship and classic proportions make it a stunning centerpiece for formal living rooms, dining rooms, and grand entry halls.",
  },
  {
    slug: "cazadero",
    name: "Cazadero",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    image: "/mantels/cazadero.png",
    cadPdf: "/cad/cazadero.pdf",
    description:
      "The Cazadero Mantel is a traditionally styled precast fireplace surround with layered molding profiles, elegant legs, and a substantial shelf. Its refined proportions and classic detailing suit a wide range of traditional and transitional interior styles, from craftsman homes to formal estates.",
  },
  {
    slug: "ceduna",
    name: "Ceduna",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    image: "/mantels/ceduna.png",
    cadPdf: "/cad/ceduna.pdf",
    description:
      "The Ceduna Mantel is a classically proportioned precast fireplace surround with clean pilaster legs, a detailed frieze, and a generous mantel shelf. Its timeless design pairs beautifully with gas inserts, electric fireplaces, and traditional hearth openings, adding warmth and architectural character to any interior.",
  },
  {
    slug: "chateau",
    name: "Chateau",
    type: "precast",
    style: "traditional",
    subStyle: "french",
    image: "/mantels/chateau.png",
    cadPdf: "/cad/chateau.pdf",
    description:
      "The Chateau Mantel is a grand precast fireplace surround inspired by classic French château architecture. Featuring ornate corbels, detailed pilasters, and a sweeping cornice shelf, the Chateau makes a commanding statement in formal living rooms, libraries, and large open-plan spaces.",
  },
  {
    slug: "clare",
    name: "Clare",
    type: "precast",
    image: "/mantels/clare.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/clare.pdf",
    description:
      "The Clare Mantel is an elegantly carved precast fireplace surround featuring decorative column legs, an arched or flat opening, and a broad mantel shelf. Its classic styling and refined ornamentation make it a standout focal point in traditional and transitional interiors of any scale.",
  },
  {
    slug: "classique",
    name: "Classique",
    type: "precast",
    image: "/mantels/classique.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/classique.pdf",
    description:
      "The Classique Mantel is a timeless precast fireplace surround with symmetrical pilasters, a decorative frieze, and a refined cornice. True to its name, the Classique draws on centuries of European mantel design to deliver a sophisticated and enduring focal point for formal living spaces.",
  },
  {
    slug: "coober-pedy",
    name: "Coober Pedy",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/coober-pedy.pdf",
    image: "/mantels/coober-pedy.png",
    description:
      "The Coober Pedy Mantel is a boldly styled traditional precast fireplace surround with substantial column legs, layered molding, and a wide mantel shelf. Its generous proportions and classic detailing create a dramatic hearth feature suited to large rooms and statement interiors.",
  },
  {
    slug: "corvallis",
    name: "Corvallis",
    type: "precast",
    image: "/mantels/corvallis.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/corvallis.pdf",
    description:
      "The Corvallis Mantel is a traditionally inspired precast fireplace surround with refined pilasters, subtle corbel details, and a clean mantel shelf. Its classic proportions and versatile design suit a wide range of traditional and transitional interior styles.",
  },
  {
    slug: "covington",
    name: "Covington",
    type: "precast",
    image: "/mantels/covington.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/covington.pdf",
    description:
      "The Covington Mantel is a classically styled precast fireplace surround with elegant column legs, a decorative entablature, and a prominent shelf. Its refined symmetry and timeless proportions make the Covington a popular choice for formal living rooms, master bedrooms, and traditional estate homes.",
  },
  {
    slug: "dominique",
    name: "Dominique",
    type: "precast",
    image: "/mantels/dominique.png",
    style: "traditional",
    subStyle: "french",
    cadPdf: "/cad/dominique.pdf",
    description:
      "The Dominique Mantel is a French-inspired precast fireplace surround with graceful tapered legs, a delicately carved frieze, and a generous mantel shelf. Its elegant proportions and refined detailing bring a touch of Parisian sophistication to traditional and transitional living spaces.",
  },
  {
    slug: "eudunda",
    name: "Eudunda",
    type: "precast",
    image: "/mantels/eudunda.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/eudunda.pdf",
    description:
      "The Eudunda Mantel is a classically proportioned precast fireplace surround with clean pilaster legs, a refined frieze, and a wide mantel shelf. Its balanced design and traditional styling provide a timeless focal point for living rooms, dining rooms, and formal spaces.",
  },
  {
    slug: "flinders",
    name: "Flinders",
    type: "precast",
    image: "/mantels/flinders.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/flinders.pdf",
    description:
      "The Flinders Mantel is a stately traditional precast fireplace surround with bold decorative columns, layered cornice molding, and a substantial shelf. Its commanding presence and classic detailing make it an ideal centerpiece for grand living rooms and formal entertaining spaces.",
  },
  {
    slug: "gambier",
    name: "Gambier",
    type: "precast",
    image: "/mantels/gambier.png",
    style: "traditional",
    subStyle: "ornate",
    cadPdf: "/cad/gambier.pdf",
    description:
      "The Gambier Mantel is a beautifully detailed traditional precast fireplace surround featuring ornate corbels, refined pilasters, and a broad cornice shelf. Its rich architectural character and classic proportions suit both formal and relaxed traditional interiors, adding depth and elegance to any hearth.",
  },
  {
    slug: "gosford",
    name: "Gosford",
    type: "precast",
    image: "/mantels/gosford.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/gosford.pdf",
    description:
      "The Gosford Mantel is a classically styled precast fireplace surround with symmetrical column legs, a detailed entablature, and a generous mantel shelf. Its traditional proportions and refined finish create a welcoming and sophisticated focal point for living rooms and formal spaces.",
  },
  {
    slug: "gundagai",
    name: "Gundagai",
    type: "precast",
    image: "/mantels/gundagai.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/gundagai.pdf",
    description:
      "The Gundagai Mantel is a traditionally designed precast fireplace surround with elegant pilasters, subtle molding details, and a wide shelf. Its classic styling and durable precast construction make it a lasting investment for any traditional or transitional interior.",
  },
  {
    slug: "hindmarsh",
    name: "Hindmarsh",
    type: "precast",
    image: "/mantels/hindmarsh.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/hindmarsh.pdf",
    description:
      "The Hindmarsh Mantel is a grand traditional precast fireplace surround featuring broad decorative columns, a richly detailed frieze, and a commanding cornice shelf. Its bold proportions and refined craftsmanship make it a striking focal point for large formal rooms and estate-style interiors.",
  },
  {
    slug: "kensington",
    name: "Kensington",
    type: "precast",
    image: "/mantels/kensington.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/kensington.pdf",
    description:
      "The Kensington Mantel is an English-inspired traditional precast fireplace surround with refined column legs, classic entablature detailing, and a generous shelf. Its elegant proportions and understated ornamentation bring timeless British sophistication to formal living rooms and studies.",
  },
  {
    slug: "lancelot",
    name: "Lancelot",
    type: "precast",
    image: "/mantels/lancelot.png",
    style: "traditional",
    subStyle: "ornate",
    cadPdf: "/cad/lancelot.pdf",
    description:
      "The Lancelot Mantel is a nobly styled traditional precast fireplace surround with bold decorative columns, carved corbels, and a dramatic cornice shelf. Its rich architectural detail and commanding proportions evoke the grandeur of classic European fireplace design, making it a natural centerpiece in formal and heritage-inspired interiors.",
  },
  {
    slug: "mannix",
    name: "Mannix",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/mannix.pdf",
    image: "/mantels/mannix.png",
    description:
      "The Mannix Mantel is a classically proportioned precast fireplace surround with symmetrical pilasters, refined molding profiles, and a wide mantel shelf. Its traditional styling and smooth precast finish suit formal living rooms, libraries, and elegant entertaining spaces.",
  },
  {
    slug: "heritage",
    name: "Heritage",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/heritage.pdf",
    image: "/mantels/heritage.png",
    description:
      "The Heritage Mantel is a classically styled precast fireplace surround with refined pilasters, layered molding, and a broad mantel shelf. Its timeless proportions and traditional detailing create an enduring focal point suited to formal and heritage-inspired interiors.",
  },
  {
    slug: "manly",
    name: "Manly",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/manly.pdf",
    image: "/mantels/manly.png",
    description:
      "The Manly Mantel is a traditional precast fireplace surround that combines classic architectural details with timeless elegance. Designed with clean lines, symmetrical structure, and subtle ornamental molding, it creates a refined frame that enhances the beauty of any fireplace.",
  },
  {
    slug: "milagro",
    name: "Milagro",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    image: "/mantels/milagro.png",
    description:
      "The Milagro Mantel is a traditionally styled precast fireplace surround with graceful proportions, refined pilaster detailing, and a generous mantel shelf. Its classic lines and smooth finish make it a versatile and enduring choice for traditional and transitional interiors.",
  },
  {
    slug: "millicent",
    name: "Millicent",
    type: "precast",
    image: "/mantels/millicent.png",
    style: "traditional",
    subStyle: "classical",
    description:
      "The Millicent Mantel is a gracefully designed traditional precast fireplace surround with tapered column legs, a decorative frieze, and a generous shelf. Its refined proportions and classic detailing make it a versatile and enduring choice for traditional and transitional interiors.",
  },
  {
    slug: "mornington",
    name: "Mornington",
    type: "precast",
    image: "/mantels/mornington.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/mornington.pdf",
    description:
      "The Mornington Mantel is a refined transitional precast fireplace surround that bridges classic and contemporary design with tapered legs, a clean frieze panel, and a wide shelf. Its balanced proportions and subtle detailing complement a broad range of interior styles from traditional to modern transitional.",
  },
  {
    slug: "noarlunga",
    beamMaterial: "precast",
    name: "Noarlunga",
    type: "beam",
    image: "/mantels/noarlunga.png",
    cadPdf: "/cad/noarlunga.pdf",
    style: "beams",
    description:
      "The Noarlunga Beam Mantel is a traditionally styled precast concrete fireplace beam with layered molding detail and a substantial profile. Its classic design and durable precast construction deliver lasting elegance above any fireplace.",
  },
  {
    slug: "paddington",
    name: "Paddington",
    type: "precast",
    image: "/mantels/paddington.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/paddington.pdf",
    description:
      "The Paddington Mantel is a classically proportioned precast fireplace surround inspired by Victorian-era design. Featuring decorative column legs, a detailed entablature, and a generous cornice shelf, the Paddington adds period charm and architectural character to formal living rooms and heritage-style homes.",
  },
  {
    slug: "padthaway",
    name: "Padthaway",
    type: "precast",
    image: "/mantels/padthaway.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/padthaway.pdf",
    description:
      "The Padthaway Mantel is a refined traditional precast fireplace surround with elegant pilasters, a decorative frieze, and a wide mantel shelf. Its clean lines and classic proportions make it a timeless choice for traditional and transitional living spaces.",
  },
  {
    slug: "parliament",
    name: "Parliament",
    type: "precast",
    image: "/mantels/parliament.png",
    style: "traditional",
    subStyle: "ornate",
    cadPdf: "/cad/parliament.pdf",
    description:
      "The Parliament Mantel is a stately precast fireplace surround with grand architectural columns, ornate corbel details, and a sweeping cornice shelf. Named for its commanding presence, the Parliament makes a bold statement in formal living rooms, boardrooms, and large-scale residential spaces.",
  },
  {
    slug: "parramatta",
    name: "Parramatta",
    type: "precast",
    image: "/mantels/parramatta.png",
    style: "traditional",
    subStyle: "ornate",
    cadPdf: "/cad/parramatta.pdf",
    description:
      "The Parramatta Mantel is a classically styled precast fireplace surround with symmetrical pilasters, refined molding details, and a broad mantel shelf. Its traditional proportions and smooth precast finish create an elegant and welcoming focal point for formal living rooms and traditional homes.",
  },
  {
    slug: "penfold",
    name: "Penfold",
    type: "precast",
    image: "/mantels/penfold.png",
    style: "traditional",
    subStyle: "ornate",
    cadPdf: "/cad/penfold.pdf",
    description:
      "The Penfold Mantel is a distinguished traditional precast fireplace surround with decorative column legs, a richly detailed frieze, and a generous cornice shelf. Its classic architectural styling and premium precast construction make it a lasting investment for formal and traditional living spaces.",
  },
  {
    slug: "pitcairn",
    name: "Pitcairn",
    type: "precast",
    image: "/mantels/pitcairn.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/pitcairn.pdf",
    description:
      "The Pitcairn Mantel is a classically proportioned precast fireplace surround with elegant pilasters, subtle cornice molding, and a wide mantel shelf. Its refined design and traditional styling provide a timeless focal point for living rooms, dining rooms, and formal entertaining spaces.",
  },
  {
    slug: "queensland",
    name: "Queensland",
    type: "precast",
    image: "/mantels/queensland.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/queensland.pdf",
    description:
      "The Queensland Mantel is a boldly proportioned traditional precast fireplace surround with broad decorative columns, a detailed entablature, and a commanding shelf. Its generous scale and classic detailing make it a natural focal point in grand living rooms, formal dining spaces, and estate-style interiors.",
  },
  {
    slug: "quorn",
    name: "Quorn",
    type: "precast",
    image: "/mantels/quorn.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/quorn.pdf",
    description:
      "The Quorn Mantel is a classically styled precast fireplace surround with symmetrical column legs, a refined frieze, and a broad cornice shelf. Its traditional proportions and premium precast finish make it a timeless addition to formal living rooms and traditional homes.",
  },
  {
    slug: "regency",
    name: "Regency",
    type: "precast",
    image: "/mantels/regency.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/regency.pdf",
    description:
      "The Regency Mantel is an elegantly proportioned precast fireplace surround inspired by the refined English Regency style. Decorative pilasters, a detailed entablature, and a generous shelf combine to create a distinguished focal point in formal and traditional interiors.",
  },
  {
    slug: "renmark",
    name: "Renmark",
    type: "precast",
    image: "/mantels/renmark.png",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/renmark.pdf",
    description:
      "The Renmark Mantel is a traditionally styled precast fireplace surround with clean pilasters, a smooth frieze panel, and a wide display shelf. Its balanced design and premium precast construction bring understated elegance to traditional and transitional living spaces.",
  },
  {
    slug: "rostrevor",
    name: "Rostrevor",
    type: "precast",
    image: "/mantels/rostrevor.png",
    style: "traditional",
    subStyle: "ornate",
    cadPdf: "/cad/rostrevor.pdf",
    description:
      "The Rostrevor Mantel is a richly detailed traditional precast fireplace surround with decorative column legs, ornate frieze carving, and a commanding cornice shelf. Its classic proportions make it a natural focal point in grand living rooms and formal entertaining spaces.",
  },
  {
    slug: "st-tropez",
    name: "St. Tropez",
    type: "precast",
    style: "traditional",
    subStyle: "french",
    image: "/mantels/st-tropez.png",
    cadPdf: "/cad/st-tropez.pdf",
    description:
      "The St. Tropez Mantel is a gracefully styled precast fireplace surround with refined European proportions, elegant pilasters, and a smooth decorative frieze. Its timeless character suits formal living rooms and sophisticated traditional interiors.",
  },
  {
    slug: "tonso",
    name: "Tonso",
    image: "/mantels/tonso.png",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/tonso.pdf",
    description:
      "The Tonso Mantel is a classically proportioned precast fireplace surround with tapered column legs, a clean frieze panel, and a wide mantel shelf. Its refined styling and quality precast finish make it a versatile choice for traditional and transitional homes.",
  },
  {
    slug: "torrens",
    name: "Torrens",
    image: "/mantels/torrens.png",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/torrens.pdf",
    description:
      "The Torrens Mantel is a symmetrically designed traditional precast fireplace surround with decorative pilasters, a smooth entablature, and a generous display shelf. Its classic South Australian-inspired name and timeless proportions suit formal and traditional living rooms.",
  },
  {
    slug: "tusmore",
    name: "Tusmore",
    image: "/mantels/tusmore.png",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/tusmore.pdf",
    description:
      "The Tusmore Mantel is a distinguished traditional precast fireplace surround with broad decorative columns, a detailed frieze, and a commanding shelf. Its generous proportions and refined finish create a bold architectural statement in formal living rooms and grand estates.",
  },
  {
    slug: "ucolta",
    name: "Ucolta",
    image: "/mantels/ucolta.png",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/ucolta.pdf",
    description:
      "The Ucolta Mantel is a traditionally proportioned precast fireplace surround with tapered column legs, a clean frieze, and a wide cornice shelf. Its understated elegance and premium precast construction suit a range of traditional and transitional interior styles.",
  },
  {
    slug: "venice",
    name: "Venice",
    image: "/mantels/venice.png",
    type: "precast",
    style: "traditional",
    subStyle: "french",
    cadPdf: "/cad/venice.pdf",
    description:
      "The Venice Mantel is a graceful precast fireplace surround with European-inspired proportions, refined pilasters, and a smooth decorative frieze. Its elegant silhouette brings old-world sophistication to traditional living rooms and formal entertaining spaces.",
  },
  {
    slug: "versailles",
    name: "Versailles",
    image: "/mantels/versailles.png",
    type: "precast",
    style: "traditional",
    subStyle: "french",
    cadPdf: "/cad/versailles.pdf",
    description:
      "The Versailles Mantel is a grand traditional precast fireplace surround inspired by the opulent French palace style. Ornate column legs, an elaborately detailed frieze, and a commanding cornice shelf make it a showpiece for formal living rooms and estate interiors.",
  },
  {
    slug: "victorian",
    name: "Victorian",
    image: "/mantels/victorian.png",
    type: "precast",
    style: "traditional",
    subStyle: "ornate",
    cadPdf: "/cad/victorian.pdf",
    description:
      "The Victorian Mantel is a richly detailed traditional precast fireplace surround with decorative column legs, an ornate carved frieze, and a generous cornice shelf. Its classic Victorian styling brings warmth, character, and historical elegance to formal and traditional living spaces.",
  },
  {
    slug: "wallaroo",
    name: "Wallaroo",
    image: "/mantels/wallaroo.png",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/wallaroo.pdf",
    description:
      "The Wallaroo Mantel is a solidly proportioned traditional precast fireplace surround with symmetrical pilasters, a smooth frieze panel, and a wide display shelf. Its classic styling and durable precast construction make it a lasting investment for traditional homes.",
  },
  {
    slug: "warradale",
    name: "Warradale",
    image: "/mantels/warradale.png",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/warradale.pdf",
    description:
      "The Warradale Mantel is a refined traditional precast fireplace surround with tapered column legs, a clean entablature, and a generous mantel shelf. Its balanced proportions and premium precast finish suit formal living rooms and traditional Australian-inspired interiors.",
  },
  {
    slug: "west-linn",
    name: "West Linn",
    image: "/mantels/west-linn.png",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/west-linn.pdf",
    description:
      "The West Linn Mantel is a classically styled precast fireplace surround with decorative pilasters, a smooth frieze, and a wide cornice shelf. Its traditional proportions and quality precast construction create a distinguished hearth feature for formal and traditional living spaces.",
  },
  {
    slug: "wilcannia",
    name: "Wilcannia",
    image: "/mantels/wilcannia.png",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/wilcannia.pdf",
    description:
      "The Wilcannia Mantel is a cleanly proportioned traditional precast fireplace surround with symmetrical column legs, an understated frieze panel, and a broad display shelf. Its timeless styling and premium precast finish provide a refined focal point for traditional homes.",
  },
  {
    slug: "willamette",
    name: "Willamette",
    image: "/mantels/willamette.png",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/willamette.pdf",
    description:
      "The Willamette Mantel is a gracefully proportioned precast fireplace surround with tapered pilasters, a refined decorative frieze, and a generous mantel shelf. Its classic styling bridges traditional and transitional aesthetics, suiting a wide range of formal interiors.",
  },
  {
    slug: "windsor",
    name: "Windsor",
    image: "/mantels/windsor.png",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/windsor.pdf",
    description:
      "The Windsor Mantel is a boldly styled traditional precast fireplace surround with broad decorative columns, a richly detailed frieze, and a commanding cornice shelf. Its classic English-inspired proportions bring regal elegance to formal living rooms and traditional estate interiors.",
  },
  {
    slug: "yongala",
    name: "Yongala",
    image: "/mantels/yongala.png",
    type: "precast",
    style: "traditional",
    subStyle: "classical",
    cadPdf: "/cad/yongala.pdf",
    description:
      "The Yongala Mantel is a traditionally proportioned precast fireplace surround with symmetrical column legs, a smooth frieze panel, and a wide mantel shelf. Its understated classical styling and premium precast finish make it a versatile and enduring choice for traditional homes.",
  },
  {
    slug: "melbourne",
    name: "Melbourne",
    type: "wood",
    style: "traditional",
    image: "/mantels/melbourne.png",
    cadPdf: "/cad/melbourne.pdf",
    description:
      "The Melbourne Mantel is a classic wood fireplace surround with clean lines, a generous shelf, and refined symmetry. Handcrafted from premium solid wood, its smooth finish highlights the natural grain, bringing warmth and sophistication to traditional and transitional living spaces.",
  },
  {
    slug: "perth",
    name: "Perth",
    type: "wood",
    style: "traditional",
    image: "/mantels/perth.png",
    cadPdf: "/cad/perth.pdf",
    description:
      "The Perth Mantel is a beautifully crafted wood fireplace surround with a clean, symmetrical profile and a wide display shelf. Its elegant proportions and rich wood finish make it a timeless focal point for traditional and transitional living rooms.",
  },
  {
    slug: "peterborough",
    name: "Peterborough",
    type: "wood",
    style: "traditional",
    image: "/mantels/peterborough.png",
    cadPdf: "/cad/peterborough.pdf",
    description:
      "The Peterborough Mantel is a traditionally styled wood fireplace surround with decorative column legs, a detailed frieze, and a broad mantel shelf. Its classic English-inspired design adds warmth, character, and architectural charm to any hearth.",
  },
  {
    slug: "sydney",
    name: "Sydney",
    type: "wood",
    style: "transitional",
    image: "/mantels/sydney.png",
    cadPdf: "/cad/sydney.pdf",
    description:
      "The Sydney Mantel is a versatile wood fireplace surround that blends clean contemporary lines with the warmth of solid wood craftsmanship. Its transitional design suits a broad range of interiors, from modern open-plan homes to classic California living rooms.",
  },
  {
    slug: "nelson",
    name: "Nelson",
    type: "wood",
    style: "transitional",
    image: "/mantels/nelson.png",
    description:
      "The Nelson Mantel is a solid wood fireplace surround with a clean, substantial profile and warm natural grain. Its transitional styling bridges classic and contemporary interiors, creating an inviting hearth feature in farmhouse, craftsman, and modern homes alike.",
  },
  {
    slug: "benedict",
    name: "Benedict",
    type: "wood",
    style: "transitional",
    image: "/mantels/benedict.png",
    description:
      "The Benedict Mantel is a refined wood fireplace surround with a sleek profile and understated detailing. Its clean silhouette and quality wood finish create a sophisticated hearth feature that bridges traditional and modern interior styles.",
  },
  // --- Beams ---
  {
    slug: "hollywood-park",
    beamMaterial: "precast",
    name: "Hollywood Park",
    type: "beam",
    image: "/mantels/hollywood-park.png",
    cadPdf: "/cad/hollywood-park.pdf",
    style: "traditional",
    description:
      "The Hollywood Park Beam Mantel is a handcrafted precast concrete fireplace beam with a refined, substantial profile and warm, hand-molded grain texture. Its timeless proportions suit traditional, transitional, and craftsman interiors, creating an inviting focal point above any fireplace.",
  },
  {
    slug: "collingwood",
    beamMaterial: "wood",
    name: "Collingwood",
    type: "beam",
    image: "/mantels/collingwood.png",
    cadPdf: "/cad/collingwood.pdf",
    style: "traditional",
    description:
      "The Collingwood Beam Mantel is a classic wood fireplace beam with rich natural character and a substantial profile. Crafted for warmth and rustic charm, it creates an inviting focal point above gas or wood-burning fireplaces in traditional and transitional homes.",
  },
  {
    slug: "essendon",
    beamMaterial: "wood",
    name: "Essendon",
    type: "beam",
    image: "/mantels/essendon.png",
    cadPdf: "/cad/essendon.pdf",
    style: "traditional",
    description:
      "The Essendon Beam Mantel is a handcrafted wood fireplace beam with clean proportions and natural wood grain. Its classic styling suits farmhouse, craftsman, and traditional interiors, delivering timeless warmth and character above any hearth.",
  },
  {
    slug: "geelong",
    beamMaterial: "wood",
    name: "Geelong",
    type: "beam",
    image: "/mantels/geelong.png",
    style: "traditional",
    description:
      "The Geelong Beam Mantel is a solid wood fireplace beam with a substantial, rustic profile and natural finish. Its generous proportions and warm character make it a natural centerpiece in farmhouse, craftsman, and traditional living rooms.",
  },
  {
    slug: "gippsland",
    beamMaterial: "wood",
    name: "Gippsland",
    type: "beam",
    image: "/mantels/gippsland.png",
    style: "traditional",
    description:
      "The Gippsland Beam Mantel is a robustly crafted wood fireplace beam with a bold, natural profile. Ideal for rustic, farmhouse, and lodge-style interiors, the Gippsland delivers enduring warmth and character above gas or wood-burning fireplaces.",
  },
  {
    slug: "norwood",
    beamMaterial: "wood",
    name: "Norwood",
    type: "beam",
    image: "/mantels/norwood.png",
    cadPdf: "/cad/norwood.pdf",
    style: "traditional",
    description:
      "The Norwood Beam Mantel is a classically proportioned wood fireplace beam with a smooth finish and refined profile. Its versatile design suits traditional, transitional, and craftsman-style interiors, providing a clean and warm focal point above any hearth.",
  },
  {
    slug: "yalumba",
    beamMaterial: "precast",
    name: "Yalumba",
    type: "beam",
    image: "/mantels/yalumba.png",
    cadPdf: "/cad/yalumba.pdf",
    style: "traditional",
    description:
      "The Yalumba Beam Mantel is a beautifully finished precast concrete fireplace beam with natural grain character and warm tones. Its classic proportions and quality craftsmanship make it a timeless addition to farmhouse, traditional, and transitional living spaces.",
  },
  {
    slug: "architectural",
    beamMaterial: "wood",
    name: "Architectural",
    type: "beam",
    image: "/mantels/architectural.png",
    style: "transitional",
    description:
      "The Architectural Beam Mantel is a clean-lined wood fireplace beam designed for modern and transitional interiors. Its precise profile and refined finish deliver understated sophistication, making it a versatile choice for contemporary homes that want the warmth of wood without rustic ornamentation.",
  },
  {
    slug: "darlinghurst",
    beamMaterial: "precast",
    name: "Darlinghurst",
    type: "beam",
    image: "/mantels/darlinghurst.png",
    style: "transitional",
    description:
      "The Darlinghurst Beam Mantel is a sleek, transitional precast concrete fireplace beam with clean lines and a refined finish. Its understated profile works beautifully in modern, transitional, and contemporary interiors where warmth and simplicity are equally valued.",
  },
  {
    slug: "hackney",
    beamMaterial: "precast",
    name: "Hackney",
    type: "beam",
    image: "/mantels/hackney.png",
    cadPdf: "/cad/hackney.pdf",
    style: "transitional",
    description:
      "The Hackney Beam Mantel is a contemporary precast concrete fireplace beam with a clean, architectural profile and smooth finish. Its modern sensibility and warm character make it ideal for transitional homes seeking a refined, non-combustible hearth feature.",
  },
  {
    slug: "payneham",
    beamMaterial: "precast",
    name: "Payneham",
    type: "beam",
    image: "/mantels/payneham.png",
    cadPdf: "/cad/payneham.pdf",
    style: "traditional",
    description:
      "The Payneham Beam Mantel is a traditionally styled precast concrete fireplace beam with natural character and warm proportions. Its classic design and hand-molded grain make it a timeless choice for traditional, farmhouse, and craftsman-style living spaces.",
  },
  {
    slug: "santa-anita",
    beamMaterial: "precast",
    name: "Santa Anita",
    type: "beam",
    image: "/mantels/santa-anita.png",
    style: "transitional",
    description:
      "The Santa Anita Beam Mantel is a refined precast concrete fireplace beam with clean lines and a warm natural finish. Its versatile transitional design bridges rustic and contemporary styles, making it a popular choice for California-style interiors and open-concept living spaces.",
  },
];

export const overstockProducts = [
  {
    slug: "heritage",
    name: "Heritage",
    color: "PG",
    image: "/mantels/heritage.png",
    finish: "PG",
    size: '73-1/2"',
    cadPdf: "/cad/heritage.pdf",
    description:
      "The Heritage Mantel is a traditional precast fireplace surround that captures classic elegance with its clean lines, refined molding, and timeless design. Built from durable precast stone, it delivers the beauty of a handcrafted wood mantel while eliminating the need for ongoing maintenance. Easy to install and designed to complement a wide range of interiors, the Heritage serves as a sophisticated focal point for both gas and electric fireplaces, offering lasting style and functionality for any living space.",
  },
  {
    slug: "nullarbor",
    name: "Custom Nullarbor",
    color: "PG",
    finish: "PG",
    size: '46"',
    description:
      "The Custom Nullarbor Mantel brings contemporary elegance to your fireplace with a precast design tailored to your space. Its clean lines, smooth finish, and sleek profile create a refined, modern statement while maintaining exceptional durability. Subtle detailing complements both gas and electric fireplaces, offering a versatile centerpiece that balances style with function.",
  },
  {
    slug: "manly",
    name: "Manly",
    color: "Seaside",
    image: "/mantels/manly.png",
    finish: "Old World",
    size: '66"',
    cadPdf: "/cad/manly.pdf",
    description:
      "The Manly Mantel is a traditional precast fireplace surround that combines classic architectural details with timeless elegance. Designed with clean lines, symmetrical structure, and subtle ornamental molding, it creates a refined frame that enhances the beauty of any fireplace. Expertly crafted from high-quality precast material, this mantel delivers lasting durability while maintaining the sophistication of traditional craftsmanship.",
  },
  {
    slug: "sausalito",
    name: "Sausalito",
    color: "PG",
    finish: "PG",
    size: '43-1/12"',
    description:
      "The Sausalito Mantel is a sleek precast fireplace surround that combines modern elegance with minimalist design. Featuring clean lines, geometric simplicity, and a smooth polished finish, this contemporary mantel creates a sophisticated focal point for any living space. Crafted from durable, high-quality materials, it delivers both style and longevity, making it ideal for gas or electric fireplaces.",
  },
];

export function getMantelProduct(slug: string) {
  return mantelProducts.find((p) => p.slug === slug);
}

export interface OverstockProduct {
  slug: string;
  name: string;
  color: string;
  finish: string;
  size: string;
  description: string;
  image?: string;
  cadPdf?: string;
}

export function getOverstockProduct(slug: string): OverstockProduct | undefined {
  return overstockProducts.find((p) => p.slug === slug);
}

const typeLabel: Record<MantelProduct["type"], string> = {
  precast: "Precast Concrete",
  wood: "Wood Surround",
  overmantel: "Overmantel",
  beam: "Fireplace Beam",
};

const styleLabel: Record<MantelProduct["style"], string> = {
  contemporary: "Contemporary",
  traditional: "Traditional",
  transitional: "Transitional",
  beams: "Beams",
};

const subStyleLabel: Record<NonNullable<MantelProduct["subStyle"]>, string> = {
  classical: "Classical",
  french: "French",
  ornate: "Ornate",
  rustic: "Rustic",
};

export { typeLabel, styleLabel, subStyleLabel };
