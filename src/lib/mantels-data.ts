export interface MantelProduct {
  name: string;
  description: string;
  finishes?: string[];
  sizes?: string;
  note?: string;
  image?: string;
}

export interface MantelCategory {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  products: MantelProduct[];
}

export const mantelCategories: MantelCategory[] = [
  {
    slug: "contemporary",
    title: "Contemporary Mantels",
    tagline: "Modern · Minimal · Refined",
    description:
      "Our contemporary mantel collection features clean horizontal lines, understated profiles, and smooth finishes designed to complement modern and transitional interiors. Available in precast concrete and wood, with a wide range of colors and textures.",
    products: [
      {
        name: "Bolte Smooth",
        description:
          "A sleek, flat-face mantel with a streamlined shelf and minimal ornamentation. The go-to choice for modern living rooms.",
        finishes: ["Kingsbury", "Le Marais", "Bianco", "Travertine Milano"],
        sizes: "Available in 42\", 48\", 54\", 60\"",
      },
      {
        name: "Manly Smooth",
        description:
          "Ultra-clean lines with a slightly raised shelf edge. Perfect for linear gas or electric fireplace inserts.",
        finishes: ["Bianco", "Kingsbury", "Old World"],
        sizes: "Available in 42\", 48\", 54\"",
      },
      {
        name: "St. Tropez Smooth",
        description:
          "A European-inspired contemporary surround with subtle leg detailing and a generous shelf.",
        finishes: ["Kingsbury", "Le Marais", "Bianco"],
        sizes: "Available in 42\", 48\", 54\", 60\"",
      },
      {
        name: "Bondi Smooth",
        description:
          "Inspired by coastal modernism. Thin-profile legs, flat face, and a wide shelf for styling.",
        finishes: ["Le Marais", "Kingsbury", "Bianco"],
        sizes: "Available in 42\", 48\", 54\"",
      },
      {
        name: "Broken Hill",
        description:
          "A bold contemporary surround with strong geometric shoulders, stepped detailing, and a commanding shelf — striking in both modern and transitional rooms.",
        finishes: ["Kingsbury", "Bianco", "Le Marais"],
        sizes: "Available in 42\", 48\", 54\", 60\"",
        image: "/mantels/broken-hill.png",
      },
    ],
  },
  {
    slug: "traditional",
    title: "Traditional Mantels",
    tagline: "Classic · Carved · Timeless",
    description:
      "Our traditional mantel collection draws on centuries of European and American design. Featuring decorative columns, carved corbels, dentil moulding, and rich detail — these surrounds create an elegant focal point in any formal or classic interior.",
    products: [
      {
        name: "Barossa Old World",
        description:
          "A richly detailed mantel with fluted pilasters, decorative corbels, and a deep shelf. One of our most popular traditional styles.",
        finishes: ["Old World Bianco", "Travertine Milano", "Kingsbury"],
        sizes: "Available in 42\", 48\", 54\", 60\"",
      },
      {
        name: "Clare Old World",
        description:
          "Elegant carved legs, an arched opening, and a broad mantel shelf make the Clare a statement piece.",
        finishes: ["Kingsbury", "Old World", "Bianco"],
        sizes: "Available in 42\", 48\", 54\"",
      },
      {
        name: "Woomera Old World",
        description:
          "Bold and dramatic with deep-cut relief detailing and generous proportions. Ideal for large rooms.",
        finishes: ["Old World", "Kingsbury"],
        sizes: "Available in 48\", 54\", 60\"",
      },
      {
        name: "Mornington Smooth",
        description:
          "A refined transitional mantel that bridges traditional and contemporary with tapered legs and simple panel detail.",
        finishes: ["Kingsbury", "Bianco", "Le Marais"],
        sizes: "Available in 42\", 48\", 54\"",
      },
    ],
  },
  {
    slug: "beams",
    title: "Fireplace Beams",
    tagline: "Rustic · Warm · Handcrafted",
    description:
      "Fireplace beams add immediate warmth and character to any room. Our solid wood beam mantels suit farmhouse, craftsman, mountain, and rustic-modern interiors.",
    products: [],
  },
  {
    slug: "hearths",
    title: "Hearths",
    tagline: "Precast · Durable · Custom Sizes",
    description:
      "A hearth completes the fireplace, providing a durable and beautiful base for your mantel surround. Our precast concrete hearths are available in five profiles to suit any firebox configuration — all finished to match our full range of mantel colors.",
    products: [
      {
        name: "Standard Hearth",
        description:
          "Our most popular hearth profile. A clean, flat rectangular pad that pairs seamlessly with any mantel in our collection. Available in all standard finish types and any of our 10 colors.",
        finishes: ["Old World", "Smooth", "Stone World", "Travertine"],
        sizes: "Custom widths available — contact your nearest showroom",
      },
      {
        name: "Standard Raised Hearth",
        description:
          "A raised-profile hearth that adds visual height and dimension to your fireplace installation. Ideal for rooms where the hearth needs to be more of a design feature.",
        finishes: ["Old World", "Smooth", "Stone World", "Travertine"],
        sizes: "Custom widths available — contact your nearest showroom",
      },
      {
        name: "45 Degree Hearth",
        description:
          "A hearth with 45-degree angled front corners, designed for corner fireplace installations. Provides a clean, tailored fit in angled or corner firebox configurations.",
        finishes: ["Old World", "Smooth", "Stone World", "Travertine"],
        sizes: "Custom widths available — contact your nearest showroom",
      },
      {
        name: "Radius Hearth",
        description:
          "A hearth with a fully rounded front edge, offering a softer, more traditional look. The radius profile adds elegant curvature that complements ornate traditional mantel surrounds.",
        finishes: ["Old World", "Smooth", "Stone World", "Travertine"],
        sizes: "Custom widths available — contact your nearest showroom",
      },
      {
        name: "Semi Radius Hearth",
        description:
          "A hearth with a partial radius on the front corners — a refined blend of the Standard and Radius profiles. Suits both transitional and traditional mantel styles.",
        finishes: ["Old World", "Smooth", "Stone World", "Travertine"],
        sizes: "Custom widths available — contact your nearest showroom",
      },
    ],
  },
  {
    slug: "overmantels",
    title: "Overmantels",
    tagline: "Dramatic · Statement · Grand",
    description:
      "An overmantel extends the visual impact of your fireplace from the mantel shelf all the way to the ceiling. Perfect for grand rooms, high ceilings, and spaces where the fireplace should be the undeniable focal point.",
    products: [
      {
        name: "Classic Panel Overmantel",
        description:
          "A symmetrical panel arrangement with a central mirror or art niche, flanked by decorative moulding columns.",
        finishes: ["Painted White", "Antique White", "Custom Color"],
        sizes: "Heights from 36\" to 72\" above shelf",
      },
      {
        name: "Arched Overmantel",
        description:
          "A dramatic arched top with keystone detail, ideal for traditional and Mediterranean interiors.",
        finishes: ["Painted White", "Antique White"],
        sizes: "Custom heights available",
      },
      {
        name: "Contemporary Floating Panel",
        description:
          "Minimal panel detail with a flush, flat face. Designed to work with TV mounting above the fireplace.",
        finishes: ["White", "Warm Grey", "Custom"],
        sizes: "Custom widths and heights",
      },
    ],
  },
  {
    slug: "wood-surrounds",
    title: "Wood Surrounds",
    tagline: "Solid Wood · Painted · Stained",
    description:
      "Our handcrafted wood mantel surrounds are built from solid hardwoods and MDF and finished in your choice of paint or stain. Perfect for traditional, transitional, and craftsman-style homes.",
    products: [
      {
        name: "Craftsman Wood Surround",
        description:
          "Clean, bungalow-inspired surround with square columns and a thick shelf. A California classic.",
        finishes: ["White", "Cream", "Custom Paint", "Natural Oak Stain"],
        sizes: "42\", 48\", 54\"",
      },
      {
        name: "Colonial Wood Surround",
        description:
          "Traditional colonial styling with fluted columns and dentil shelf detail.",
        finishes: ["White", "Antique White", "Custom"],
        sizes: "42\", 48\", 54\", 60\"",
      },
      {
        name: "Shaker Wood Surround",
        description:
          "Simple flat-panel legs with a broad, clean shelf. Versatile enough for farmhouse to modern transitional.",
        finishes: ["White", "Grey", "Navy", "Custom Color"],
        sizes: "42\", 48\", 54\"",
      },
    ],
  },
  {
    slug: "colors-finishes",
    title: "Colors & Finishes",
    tagline: "10 Colors · 4 Finish Types",
    description:
      "Our precast concrete mantels are available in 10 base colors, each offered in up to four hand-applied finish types. Every finish is unique — the nature of the precast process means subtle variations that add depth and authenticity to every piece. Visit a showroom to see physical samples.",
    products: [
      {
        name: "Aspen",
        description: "A soft, warm white with subtle warmth — versatile across traditional and contemporary interiors.",
        finishes: ["Old World", "Smooth", "Stone World"],
      },
      {
        name: "Atlantic",
        description: "A cool, coastal-inspired neutral with blue-grey undertones. Pairs beautifully with white trim and natural wood.",
        finishes: ["Stone World", "Travertine"],
      },
      {
        name: "Grecian",
        description: "A classic creamy white inspired by Mediterranean stone. Timeless in traditional and formal spaces.",
        finishes: ["Old World", "Smooth", "Stone World", "Travertine"],
      },
      {
        name: "Indian Summer",
        description: "A warm amber-beige tone that brings richness and depth to any hearth. Ideal for warm, earthy interiors.",
        finishes: ["Old World", "Smooth", "Stone World", "Travertine"],
      },
      {
        name: "Kingsbury",
        description: "Our most popular color. A warm off-white with subtle grey undertones that works in virtually any interior.",
        finishes: ["Old World", "Smooth", "Stone World", "Travertine"],
      },
      {
        name: "Le Marais",
        description: "Inspired by French limestone. A cool grey-white with delicate surface texture and aged character.",
        finishes: ["Old World", "Smooth", "Stone World", "Travertine"],
      },
      {
        name: "Limestone",
        description: "A natural warm grey tone with the look of quarried stone. Suits both rustic and refined interiors.",
        finishes: ["Stone World", "Travertine"],
      },
      {
        name: "London Fog",
        description: "A sophisticated mid-grey with cool undertones. Makes a modern statement in transitional and contemporary rooms.",
        finishes: ["Old World", "Smooth", "Stone World", "Travertine"],
      },
      {
        name: "Macambo",
        description: "A rich, deep tone with warm brown-grey character. Dramatic and distinctive for statement fireplace walls.",
        finishes: ["Old World", "Smooth"],
      },
      {
        name: "Milano",
        description: "A warm Italian-inspired tone evoking the look of classic European plaster. Elegant in traditional and transitional spaces.",
        finishes: ["Old World", "Smooth"],
      },
    ],
  },
];

export function getMantelCategory(slug: string): MantelCategory | undefined {
  return mantelCategories.find((c) => c.slug === slug);
}
