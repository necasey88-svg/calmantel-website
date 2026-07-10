export type ElectricVariant = {
  name: string;
  width: string;
  btu?: string;
  price?: string;
};

export type ElectricFireplace = {
  slug: string;
  brand: string;
  name: string;
  tagline: string;
  description: string;
  startingPrice: string;
  image: string;
  gallery?: string[];
  features: string[];
  variants: ElectricVariant[];
  flameStyles?: string[];
  flameColors?: string[];
  installOptions?: string[];
};

export const electricFireplaces: ElectricFireplace[] = [
  {
    slug: "modern-flames-orion-traditional",
    brand: "Modern Flames",
    name: "Modern Flames Orion Traditional",
    tagline: "Heliovision® flames · 18 display combinations · WiFi + Alexa",
    description:
      "The Orion Traditional redefines what an electric fireplace can look like. Powered by Modern Flames' patented Heliovision® technology, it produces the most life-like fire available in an electric unit — with three flame styles, six colors, and 18 unique display combinations. WiFi-enabled and Alexa/Google Home compatible.",
    startingPrice: "Call for pricing",
    image: "/brands/modern-flames/orion-traditional.png",
    features: [
      "Heliovision® technology — the most realistic electric flame available",
      "3 flame styles (Hybrid, Wood, Gas) × 6 colors = 18 display combinations",
      "LED-lit driftwood log set with multi-color ember bed",
      "6,800 BTU electric heater",
      "Ambient crackling sound effects",
      "WiFi app control (iOS/Android) + Alexa & Google Home compatible",
      "Simple slide-in installation — no gas line or venting required",
      "Available in 5 sizes from 26\" to 54\"",
    ],
    variants: [
      { name: "Orion Traditional 26\"", width: "26\"", btu: "6,800" },
      { name: "Orion Traditional 30\"", width: "30\"", btu: "6,800" },
      { name: "Orion Traditional 36\"", width: "36\"", btu: "6,800" },
      { name: "Orion Traditional 42\"", width: "42\"", btu: "6,800" },
      { name: "Orion Traditional 54\"", width: "54\"", btu: "6,800" },
    ],
    flameStyles: ["Hybrid", "Wood", "Gas"],
    flameColors: ["Yellow", "Orange", "Blue", "Green", "Purple", "White"],
    installOptions: ["Slide-In (fits existing firebox)", "Wall Mount"],
  },
  {
    slug: "modern-flames-orion-slim",
    brand: "Modern Flames",
    name: "Modern Flames Orion Slim",
    tagline: "Linear design · Western Driftwood · WiFi + Alexa",
    description:
      "The Orion Slim brings Modern Flames' Heliovision® flame technology into a sleek linear format. Available in Slim and Multi configurations from 52\" to 100\", it delivers three flame styles and six color options with a 15\" high viewing area — perfect for modern feature walls and built-ins.",
    startingPrice: "Starting at $4,279",
    image: "/brands/modern-flames/orion-slim.png",
    features: [
      "Heliovision® flame technology in a slim linear format",
      "3 flame styles × 6 colors — fully customizable ambiance",
      "Western Driftwood log set with multi-color ember downlighting",
      "15\" high viewing area",
      "5,000 BTU electric heater",
      "Ambient crackling sound effects",
      "WiFi app control + Alexa & Google Home compatible",
      "Available in Slim and Multi configurations, 52\" to 100\"",
    ],
    variants: [
      { name: "Orion Slim 52\"", width: "52\"", btu: "5,000", price: "From $4,279" },
      { name: "Orion Slim 60\"", width: "60\"", btu: "5,000", price: "From $4,279" },
      { name: "Orion Slim 76\"", width: "76\"", btu: "5,000", price: "From $4,279" },
      { name: "Orion Slim 100\"", width: "100\"", btu: "5,000", price: "From $4,279" },
      { name: "Orion Multi 52\"", width: "52\"", btu: "5,000", price: "From $4,799" },
      { name: "Orion Multi 60\"", width: "60\"", btu: "5,000", price: "From $4,799" },
      { name: "Orion Multi 76\"", width: "76\"", btu: "5,000", price: "From $4,799" },
      { name: "Orion Multi 100\"", width: "100\"", btu: "5,000", price: "From $4,799" },
    ],
    flameStyles: ["Hybrid", "Wood", "Gas"],
    flameColors: ["Yellow", "Orange", "Blue", "Green", "Purple", "White"],
    installOptions: ["Slide-In (fits existing firebox)", "Wall Mount"],
  },
  {
    slug: "modern-flames-redstone",
    brand: "Modern Flames",
    name: "Modern Flames Redstone",
    tagline: "Built-in or insert · Traditional look · Easy installation",
    description:
      "The Redstone is Modern Flames' answer to a traditional-style electric fireplace with a realistic log fire presentation. Designed for built-in or insert applications, it pairs a warm, classic aesthetic with all the convenience of Modern Flames' flame technology — no gas, no venting, no hassle.",
    startingPrice: "Call for pricing",
    image: "/brands/modern-flames/redstone-new.png",
    features: [
      "Traditional log fire aesthetic with Modern Flames flame technology",
      "Designed for built-in and insert applications",
      "Multi-color flame and ember bed customization",
      "Electric heater — no gas line or venting required",
      "WiFi app control + Alexa & Google Home compatible",
      "Ambient crackling sound effects",
      "Available in multiple sizes",
    ],
    variants: [
      { name: "Redstone 36\"", width: "36\"" },
      { name: "Redstone 42\"", width: "42\"" },
      { name: "Redstone 48\"", width: "48\"" },
    ],
    flameColors: ["Yellow", "Orange", "Blue", "Green", "Purple", "White"],
    installOptions: ["Built-In", "Insert (existing firebox)"],
  },
  {
    slug: "modern-flames-landscape-pro",
    brand: "Modern Flames",
    name: "Modern Flames Landscape Pro",
    tagline: "Up to 120\" wide · Indoor/outdoor · 5,000–10,000 BTU",
    description:
      "The Landscape Pro is Modern Flames' most versatile linear fireplace — available up to 120\" wide and rated for both indoor and outdoor use. The Multi configuration features two independent heating zones (5,000 + 10,000 BTU), while the Slim version keeps a lower profile. Hand-painted Canyon Driftwood logs and RGB ember lighting make every installation a showpiece.",
    startingPrice: "Starting at $2,299",
    image: "/brands/modern-flames/landscape-pro.png",
    features: [
      "Available up to 120\" wide — largest in the Modern Flames lineup",
      "Indoor/outdoor rated",
      "Multi: dual heater zones (5,000 + 10,000 BTU); Slim: 5,000 BTU",
      "Hand-painted Canyon Driftwood log set",
      "15\" high viewing area",
      "Full RGB spectrum: flame, ember bed, and downlighting all customizable",
      "WiFi + Alexa & Google Home compatible",
      "Slide-in or wall-mount installation",
    ],
    variants: [
      { name: "Landscape Pro Slim 44\"", width: "44\"", btu: "5,000", price: "From $2,299" },
      { name: "Landscape Pro Slim 56\"", width: "56\"", btu: "5,000", price: "From $2,299" },
      { name: "Landscape Pro Slim 68\"", width: "68\"", btu: "5,000", price: "From $2,299" },
      { name: "Landscape Pro Slim 80\"", width: "80\"", btu: "5,000", price: "From $2,299" },
      { name: "Landscape Pro Multi 44\"", width: "44\"", btu: "10,000", price: "From $2,799" },
      { name: "Landscape Pro Multi 56\"", width: "56\"", btu: "10,000", price: "From $2,799" },
      { name: "Landscape Pro Multi 68\"", width: "68\"", btu: "10,000", price: "From $2,799" },
      { name: "Landscape Pro Multi 80\"", width: "80\"", btu: "10,000", price: "From $2,799" },
      { name: "Landscape Pro Multi 96\"", width: "96\"", btu: "10,000", price: "From $2,799" },
      { name: "Landscape Pro Multi 120\"", width: "120\"", btu: "10,000", price: "From $2,799" },
    ],
    flameColors: ["Blue", "Red", "Green", "Orange", "Pink", "Purple"],
    installOptions: ["Slide-In (fits existing firebox)", "Wall Mount", "Outdoor (weather rated)"],
  },
  {
    slug: "modern-flames-spectrum-slimline",
    brand: "Modern Flames",
    name: "Modern Flames Spectrum Slimline",
    tagline: "Ultra-slim · 10 color zones · Commercial & residential",
    description:
      "The Spectrum Slimline is Modern Flames' commercial-grade linear fireplace — designed for hotels, condos, and high-end residential installations where depth is limited. With 10 independently controlled color zones across flames, ember bed, and downlighting, and a sleek profile that installs flush into any wall, it's equally at home behind reception desks or in living rooms.",
    startingPrice: "Call for pricing",
    image: "/brands/modern-flames/spectrum-slimline.png",
    features: [
      "10 independently controlled color zones — flames, embers, and downlight",
      "Ultra-slim profile — ideal for tight wall depths",
      "5,000 BTU electric heater",
      "Hand-painted Canyon Driftwood logs",
      "15\" high viewing area",
      "Commercial and residential rated",
      "Slide-in or wall-mount installation",
      "Available in 50\", 60\", 74\", and 100\"",
    ],
    variants: [
      { name: "Spectrum Slimline 50\"", width: "50\"", btu: "5,000" },
      { name: "Spectrum Slimline 60\"", width: "60\"", btu: "5,000" },
      { name: "Spectrum Slimline 74\"", width: "74\"", btu: "5,000" },
      { name: "Spectrum Slimline 100\"", width: "100\"", btu: "5,000" },
    ],
    flameColors: ["10 RGB zones — full spectrum"],
    installOptions: ["Slide-In (fits existing firebox)", "Wall Mount"],
  },
];

export function getElectricFireplace(slug: string) {
  return electricFireplaces.find((e) => e.slug === slug);
}
