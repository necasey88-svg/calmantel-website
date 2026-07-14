import Link from "next/link";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Overstock Fireplaces | California Mantel & Fireplace",
  description:
    "Shop limited-quantity overstock electric, gas, linear, corner, see-through, and outdoor fireplaces from Dimplex, Faber, Empire, Flare, Outdoor Lifestyles, and Superior.",
  alternates: { canonical: "/fireplaces/overstock" },
};

type OverstockFireplace = {
  manufacturer: string;
  name: string;
  sku: string;
  quantity: number;
  category: "Electric" | "Gas" | "Gas Log Set" | "Outdoor" | "Wood-Burning";
  configuration: string;
  fuel: string;
  details: string;
  note?: string;
};

const overstockFireplaces: OverstockFireplace[] = [
  {
    manufacturer: "Dimplex",
    name: 'IgniteXL 50" Linear Electric Fireplace',
    sku: "XLF50",
    quantity: 1,
    category: "Electric",
    configuration: "Front-facing linear",
    fuel: "120V / 240V electric",
    details:
      'A low-profile 50-inch built-in electric fireplace with Multi-Fire flame effects, color themes, and supplemental heat.',
  },
  {
    manufacturer: "Faber by Glen Dimplex",
    name: "MatriX 4326 Right-Facing Built-In Gas Fireplace",
    sku: "FMG4726R",
    quantity: 2,
    category: "Gas",
    configuration: "Two-sided right corner",
    fuel: "Natural gas",
    details:
      "A right-facing corner fireplace with a five-burner system, realistic log set, ember lighting, and two-sided viewing.",
  },
  {
    manufacturer: "Faber by Glen Dimplex",
    name: "MatriX 5126B Three-Sided Bay Gas Fireplace",
    sku: "FMG5126B",
    quantity: 1,
    category: "Gas",
    configuration: "Three-sided bay",
    fuel: "Natural gas",
    details:
      "A dramatic three-sided built-in fireplace with the MatriX five-burner system, log media, and panoramic viewing.",
  },
  {
    manufacturer: "American Hearth by Empire",
    name: 'Canvas 27" Portrait Direct-Vent Fireplace',
    sku: "ADVLL27FP92N",
    quantity: 2,
    category: "Gas",
    configuration: "Front-facing portrait",
    fuel: "Natural gas",
    details:
      "A tall contemporary direct-vent fireplace with a clean-face design, reflective interior, accent lighting, and remote control.",
  },
  {
    manufacturer: "Empire",
    name: 'Boulevard 48" See-Through Linear Fireplace',
    sku: "DVLL48SP90N",
    quantity: 1,
    category: "Gas",
    configuration: "See-through linear",
    fuel: "Natural gas",
    details:
      "A 48-inch direct-vent fireplace designed to connect two spaces with ceramic glass and white LED accent lighting.",
    note: "Required liner and decorative media are selected separately; confirm included components with our team.",
  },
  {
    manufacturer: "Flare Fireplaces",
    name: 'FF-50 Front-Facing Fireplace',
    sku: "FLARE-FF-50",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing linear",
    fuel: "Gas configuration to confirm",
    details:
      "A frameless 50-inch modern fireplace with a 16-inch glass height and Flare's multi-row burner system.",
  },
  {
    manufacturer: "Flare Fireplaces",
    name: 'FF-50 Extra-High Commercial Fireplace',
    sku: "FLARE-FF-50-EH-C",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing commercial",
    fuel: "Gas configuration to confirm",
    details:
      "A commercial front-facing fireplace with an expansive 30-inch glass height, double-glass safety barrier, and frameless design.",
  },
  {
    manufacturer: "Flare Fireplaces",
    name: 'FF-50 High Fireplace Package',
    sku: "FLARE-FF-50-H / RBS-FF-H / RB-FF-50-H",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing high",
    fuel: "Gas configuration to confirm",
    details:
      "A 50-inch front-facing fireplace with a 24-inch glass height, packaged with reflective back and side panels.",
  },
  {
    manufacturer: "Flare Fireplaces",
    name: 'LC-60 Left-Corner Fireplace',
    sku: "FLARE-LC-60",
    quantity: 1,
    category: "Gas",
    configuration: "Left-corner linear",
    fuel: "Gas configuration to confirm",
    details:
      "A 60-inch frameless fireplace with front and left-side glass for an architectural two-sided flame view.",
  },
  {
    manufacturer: "Flare Fireplaces",
    name: 'ST-45 High Commercial See-Through Fireplace',
    sku: "FLARE-ST-45-H-C",
    quantity: 1,
    category: "Gas",
    configuration: "See-through commercial",
    fuel: "Gas configuration to confirm",
    details:
      "A 45-inch commercial see-through fireplace with a 24-inch glass height for a clear double-sided view between spaces.",
  },
  {
    manufacturer: "Outdoor Lifestyles by HHT",
    name: 'Lanai 51" Outdoor Linear Gas Fireplace',
    sku: "ODLANAIG-51",
    quantity: 1,
    category: "Outdoor",
    configuration: "Outdoor front-facing linear",
    fuel: "Natural gas",
    details:
      "A stainless-steel outdoor fireplace with a 51-inch viewing area, LED-lit crushed-glass firebed, and IntelliFire ignition.",
    note: "Outdoor installation only. This legacy model has been discontinued by the manufacturer.",
  },
  {
    manufacturer: "Superior",
    name: 'DRL2035 35" Linear Direct-Vent Fireplace',
    sku: "DRL2035TEN / F4182",
    quantity: 3,
    category: "Gas",
    configuration: "Front-facing linear",
    fuel: "Natural gas",
    details:
      "A compact contemporary linear fireplace with electronic ignition, battery backup, and reflective black crushed-glass media.",
  },
  {
    manufacturer: "Superior",
    name: 'DRL2045 45" Linear Direct-Vent Fireplace',
    sku: "DRL2045 / F4186",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing linear",
    fuel: "Natural gas",
    details: "A 45-inch contemporary linear direct-vent fireplace with electronic ignition and clean-face styling.",
  },
  {
    manufacturer: "Superior",
    name: 'DRT2045 45" Traditional Direct-Vent Fireplace',
    sku: "DRT2045DEN / F3889",
    quantity: 5,
    category: "Gas",
    configuration: "Front-facing traditional",
    fuel: "Natural gas",
    details: "A 45-inch traditional direct-vent fireplace with electronic ignition and a generous viewing area.",
  },
  {
    manufacturer: "Superior",
    name: 'DRT3035 35" Direct-Vent Fireplace',
    sku: "DRT3035DEN / F3893",
    quantity: 2,
    category: "Gas",
    configuration: "Front-facing traditional",
    fuel: "Natural gas",
    details: "A 35-inch traditional direct-vent gas fireplace with electronic ignition and top or rear venting.",
  },
  {
    manufacturer: "Superior",
    name: 'DRT3535 35" Direct-Vent Fireplace',
    sku: "DRT3535DEN / F3903",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing traditional",
    fuel: "Natural gas",
    details: "An enhanced 35-inch direct-vent fireplace with electronic controls and traditional log presentation.",
  },
  {
    manufacturer: "Superior",
    name: 'DRT40CR 40" Right-Corner Direct-Vent Fireplace',
    sku: "DRT40CRDEN / F1341",
    quantity: 1,
    category: "Gas",
    configuration: "Right-corner two-sided",
    fuel: "Natural gas",
    details: "A 40-inch traditional corner fireplace with front and right-side viewing and electronic ignition.",
  },
  {
    manufacturer: "Napoleon",
    name: 'Ascent Linear 46" Direct-Vent Fireplace',
    sku: "BL46NTE",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing linear",
    fuel: "Natural gas",
    details: "A 46-inch linear direct-vent fireplace with a contemporary glass ember bed and clean modern opening.",
  },
  {
    manufacturer: "Napoleon",
    name: 'Ascent X 70" Direct-Vent Fireplace',
    sku: "GX70PTE",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing traditional",
    fuel: "Propane",
    details: "A large-format Ascent X direct-vent fireplace with a deep firebox and traditional log presentation.",
  },
  {
    manufacturer: "Napoleon",
    name: 'Tall Linear Vector 74" See-Through Fireplace',
    sku: "TLV74LN2",
    quantity: 1,
    category: "Gas",
    configuration: "See-through linear",
    fuel: "Natural gas",
    details: "A tall 74-inch see-through Vector fireplace with luminous logs and a wide double-sided flame view.",
  },
  {
    manufacturer: "Ortal",
    name: 'Wilderness Traditional 42" Fireplace',
    sku: "WTR42DG",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing traditional",
    fuel: "Gas configuration to confirm",
    details: "A 42-inch traditional Wilderness fireplace with Ortal's double-glass safety system.",
  },
  {
    manufacturer: "Stellar",
    name: 'Custom 5-Sided 20" Glass Fireplace',
    sku: "5-SS-20-GL",
    quantity: 1,
    category: "Gas",
    configuration: "Five-sided custom",
    fuel: "Gas configuration to confirm",
    details: "A custom Stellar multi-sided fireplace with 20-inch glass; final configuration should be confirmed with our team.",
  },
  {
    manufacturer: "Stellar",
    name: 'Custom 8-Sided 20" Glass Fireplace',
    sku: "8-SS-20-GL NO POWERVENT",
    quantity: 1,
    category: "Gas",
    configuration: "Eight-sided custom",
    fuel: "Gas configuration to confirm",
    details: "A custom Stellar multi-sided fireplace package supplied without a power vent.",
  },
  {
    manufacturer: "Stellar",
    name: '36" Traditional Custom Fireplace',
    sku: "STELLAR 36T",
    quantity: 1,
    category: "Gas",
    configuration: "Front-facing traditional",
    fuel: "Gas configuration to confirm",
    details: "A 36-inch Stellar custom fireplace with traditional proportions; included components should be confirmed.",
  },
  {
    manufacturer: "Stellar",
    name: 'VP-36M Custom Fireplace',
    sku: "STELLAR VP-36M",
    quantity: 1,
    category: "Gas",
    configuration: "Custom fireplace",
    fuel: "Gas configuration to confirm",
    details: "A Stellar custom fireplace package identified as VP-36M; venting and included components require confirmation.",
  },
  {
    manufacturer: "SunStar",
    name: "Commercial Patio Heater",
    sku: "44560355",
    quantity: 2,
    category: "Outdoor",
    configuration: "Patio heater",
    fuel: "Gas configuration to confirm",
    details: "A commercial outdoor radiant patio-heating unit; mounting and fuel configuration should be confirmed.",
  },
  {
    manufacturer: "Dimplex",
    name: 'Revillusion 25" Electric Log Set',
    sku: "RLG25",
    quantity: 2,
    category: "Electric",
    configuration: "Electric log set",
    fuel: "Electric",
    details: "A 25-inch Revillusion electric log set designed to add realistic flames and glowing logs to an existing opening.",
  },
  {
    manufacturer: "SimpliFire by HHT",
    name: '58" Wall-Mount Electric Fireplace',
    sku: "SF-WM58-BK",
    quantity: 1,
    category: "Electric",
    configuration: "Wall-mounted linear",
    fuel: "Electric",
    details: "A slim 58-inch wall-mounted electric fireplace in black with adjustable flame and ember-bed effects.",
  },
  {
    manufacturer: "Modern Flames",
    name: 'Landscape Pro Multi 44" Electric Fireplace',
    sku: "LPM-4416",
    quantity: 1,
    category: "Electric",
    configuration: "Built-in linear",
    fuel: "Electric",
    details: "A 44-inch Landscape Pro Multi built-in electric fireplace with multicolor flame and ember lighting.",
  },
  {
    manufacturer: "Modern Flames",
    name: 'Landscape Pro Multi 56" Electric Fireplace',
    sku: "LPM-5616",
    quantity: 1,
    category: "Electric",
    configuration: "Built-in linear",
    fuel: "Electric",
    details: "A 56-inch Landscape Pro Multi built-in electric fireplace with a wide, low-profile flame presentation.",
  },
  {
    manufacturer: "Modern Flames",
    name: 'RedStone 30" Electric Fireplace',
    sku: "RS-3021",
    quantity: 1,
    category: "Electric",
    configuration: "Built-in traditional",
    fuel: "Electric",
    details: "A 30-inch RedStone electric fireplace with a traditional firebox shape and modern LED flame effects.",
  },
  {
    manufacturer: "Earthcore Isokern",
    name: '30" PERC Electronic Remote Burner',
    sku: 'PERC-30M 30" ELECTRONIC REMOTE 1BV BURNER',
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Burner system",
    fuel: "Gas configuration to confirm",
    details: "A 30-inch electronic remote-controlled burner package for a gas-log installation.",
  },
  {
    manufacturer: "Earthcore Isokern",
    name: '30" Earthcore Log Set',
    sku: 'PL-RS-30 30" EARTHCORE LOG SET',
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Decorative log set",
    fuel: "For compatible gas burner",
    details: "A 30-inch decorative log set intended for a compatible Earthcore gas burner system.",
  },
  {
    manufacturer: "Hearth & Home Technologies",
    name: 'Grand Oak 24" Two-Tier Log Set',
    sku: "2TR-GO24",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Vented log set",
    fuel: "Gas configuration to confirm",
    details: "A 24-inch two-tier Grand Oak-style log presentation; burner and controls should be confirmed.",
  },
  {
    manufacturer: "Hearth & Home Technologies",
    name: 'Campfire 30" Gas Log Set',
    sku: "CFL-30NG-C",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Vented log set",
    fuel: "Natural gas",
    details: "A 30-inch natural-gas log set package with a campfire-style presentation.",
  },
  {
    manufacturer: "Hearth & Home Technologies",
    name: 'Grand Oak 24" Log Set',
    sku: "GO24",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Vented log set",
    fuel: "Gas configuration to confirm",
    details: "A 24-inch Grand Oak decorative gas log set; compatible burner and controls should be confirmed.",
  },
  {
    manufacturer: "Hearth & Home Technologies",
    name: 'Grand Oak 24" IPI Log Set',
    sku: "GO24-IPI-LP",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "IPI gas log set",
    fuel: "Propane",
    details: "A 24-inch Grand Oak log-set package configured for propane with intermittent-pilot ignition.",
  },
  {
    manufacturer: "Hearth & Home Technologies",
    name: 'Grand Oak 30" Log Set',
    sku: "GO330",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Vented log set",
    fuel: "Gas configuration to confirm",
    details: "A large Grand Oak decorative log set; exact burner package and gas type should be confirmed.",
  },
  {
    manufacturer: "Hearth & Home Technologies",
    name: 'Grand Oak 30" IPI Log-Set Package',
    sku: "GO330-IPI-LP-HK",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "IPI gas log set",
    fuel: "Propane",
    details: "A Grand Oak log package with intermittent-pilot propane controls and hearth kit components.",
  },
  {
    manufacturer: "Hearth & Home Technologies",
    name: 'Mountain Hickory 30" Log Set',
    sku: "MHK30NG",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Gas log set",
    fuel: "Natural gas",
    details: "A 30-inch Mountain Hickory gas log set configured for natural gas.",
  },
  {
    manufacturer: "Hearth & Home Technologies",
    name: 'Split Pine 18" Log Set',
    sku: "SP18LP",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Gas log set",
    fuel: "Propane",
    details: "An 18-inch Split Pine gas log set configured for propane.",
  },
  {
    manufacturer: "Hearth & Home Technologies",
    name: 'See-Through Mountain Hickory 24" Log Set',
    sku: "STMHK24NG",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "See-through gas log set",
    fuel: "Natural gas",
    details: "A 24-inch Mountain Hickory log set designed for compatible see-through fireplaces.",
  },
  {
    manufacturer: "Hearth & Home Technologies",
    name: 'Duzy 30" Gas Log Set',
    sku: "VDY30D5",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Gas log set",
    fuel: "Gas configuration to confirm",
    details: "A 30-inch Duzy-series gas log set; valve, burner, and fuel configuration should be confirmed.",
  },
  {
    manufacturer: "Hearth & Home Technologies",
    name: 'Duzy 30" Natural-Vent Log Set',
    sku: "VDY30NVP",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Vented gas log set",
    fuel: "Gas configuration to confirm",
    details: "A 30-inch Duzy-series vented gas log package; included controls should be confirmed.",
  },
  {
    manufacturer: "Modern Flames",
    name: '36" Three-Burner Gas Log Package',
    sku: "3BRN-36-NG-MVKEI-GCRK",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Three-burner log set",
    fuel: "Natural gas",
    details: "A 36-inch three-burner natural-gas log package with millivolt controls and decorative media components.",
  },
  {
    manufacturer: "Modern Flames",
    name: '36" Outdoor Log Set',
    sku: "AWO36LOGS",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Decorative log set",
    fuel: "For compatible gas burner",
    details: "A 36-inch decorative log set for a compatible outdoor gas-fireplace system.",
  },
  {
    manufacturer: "Modern Flames",
    name: "Indoor Electronic Ignition System",
    sku: "EIS-INDOOR",
    quantity: 3,
    category: "Gas Log Set",
    configuration: "Ignition system",
    fuel: "For compatible gas system",
    details: "An indoor electronic-ignition component for compatible gas log and burner packages.",
  },
  {
    manufacturer: "Modern Flames",
    name: '42" Glass-Burner Package',
    sku: "GLASSBRN-42/14-H-NG-MVKEI-GCRK",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Glass burner",
    fuel: "Natural gas",
    details: "A 42-inch natural-gas glass-burner package with millivolt electronic ignition and decorative media components.",
  },
  {
    manufacturer: "Modern Flames",
    name: '48" Stainless Glass Burner',
    sku: "GLASSBRN-48/14-H-SS",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Glass burner",
    fuel: "Gas configuration to confirm",
    details: "A 48-inch stainless glass-burner assembly; controls, media, and fuel configuration should be confirmed.",
  },
  {
    manufacturer: "Modern Flames",
    name: '18" Vent-Free Gas Log Set',
    sku: "VFVUL18EN",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Vent-free log set",
    fuel: "Natural gas",
    details: "An 18-inch vent-free gas log set with electronic ignition, configured for natural gas.",
  },
  {
    manufacturer: "Napoleon",
    name: "GL-704 Decorative Log Set",
    sku: "GL-704",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Decorative log set",
    fuel: "For compatible gas fireplace",
    details: "A Napoleon decorative log-set accessory for a compatible fireplace or burner system.",
  },
  {
    manufacturer: "Real Fyre",
    name: "Electronic Pilot Kit",
    sku: "EPK-2M-AD",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Pilot control kit",
    fuel: "For compatible gas burner",
    details: "An electronic pilot-control kit for compatible Real Fyre gas log burners.",
  },
  {
    manufacturer: "Real Fyre",
    name: 'G45 16/19" Burner System',
    sku: "G45-16/19",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Vented burner",
    fuel: "Gas configuration to confirm",
    details: "A Real Fyre G45 burner system sized for compatible 16- to 19-inch log sets.",
  },
  {
    manufacturer: "Real Fyre",
    name: 'G45 30" Glass-Log Burner Package',
    sku: "G45-GL-30-11",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Vented burner package",
    fuel: "Gas configuration to confirm",
    details: "A 30-inch G45 burner package with compatible glass-log media.",
  },
  {
    manufacturer: "Real Fyre",
    name: 'HR-16 16" Log Set',
    sku: "HR-16",
    quantity: 1,
    category: "Gas Log Set",
    configuration: "Decorative log set",
    fuel: "For compatible gas burner",
    details: "A 16-inch Real Fyre decorative log set for a compatible burner system.",
  },
  {
    manufacturer: "Firegear",
    name: '30" Fire-Pit Burner System',
    sku: "FPB-30ITES-N",
    quantity: 2,
    category: "Outdoor",
    configuration: "Outdoor fire-pit burner",
    fuel: "Natural gas",
    details: "A 30-inch outdoor fire-pit burner system with electronic ignition, configured for natural gas.",
  },
  {
    manufacturer: "HPC Fire",
    name: '54" x 16" Electronic Fire-Pit Insert',
    sku: "54X16SSEI-H-NG/120VAC",
    quantity: 1,
    category: "Outdoor",
    configuration: "Linear fire-pit insert",
    fuel: "Natural gas / 120V ignition",
    details: "A stainless linear outdoor fire-pit insert with electronic ignition for natural gas.",
  },
  {
    manufacturer: "HPC Fire",
    name: '30/36" Fire-Pit Burner Package',
    sku: "FPL30/36WD16",
    quantity: 1,
    category: "Outdoor",
    configuration: "Outdoor fire-pit burner",
    fuel: "Gas configuration to confirm",
    details: "An HPC outdoor fire-pit burner package; enclosure size, controls, and fuel type should be confirmed.",
  },
  {
    manufacturer: "HPC Fire",
    name: '70" Linear Outdoor Burner',
    sku: "LBOF70EI-NGI",
    quantity: 1,
    category: "Outdoor",
    configuration: "Linear outdoor burner",
    fuel: "Natural gas",
    details: "A 70-inch linear outdoor burner system with electronic ignition, configured for natural gas.",
  },
  {
    manufacturer: "Superior",
    name: '48" Outdoor Linear Vent-Free Fireplace',
    sku: "ODLVF48ZEN / F4834 / F4494",
    quantity: 1,
    category: "Outdoor",
    configuration: "Front-facing linear",
    fuel: "Natural gas",
    details: "A 48-inch outdoor linear vent-free fireplace with electronic ignition and contemporary glass media.",
  },
  {
    manufacturer: "Superior",
    name: '60" Outdoor Linear Vent-Free Fireplace',
    sku: "ODLVF60ZEN / F4495 / F4835",
    quantity: 9,
    category: "Outdoor",
    configuration: "Front-facing linear",
    fuel: "Natural gas",
    details: "A 60-inch outdoor linear vent-free fireplace with electronic ignition and a wide contemporary flame presentation.",
  },
  {
    manufacturer: "Superior",
    name: 'VRE4336 36" Outdoor Vent-Free Firebox',
    sku: "VRE4336ZEN / F0512",
    quantity: 3,
    category: "Outdoor",
    configuration: "Outdoor firebox",
    fuel: "For compatible gas log set",
    details: "A 36-inch outdoor vent-free firebox for use with a compatible burner and log set.",
  },
  {
    manufacturer: "Superior",
    name: 'VRE4342 42" Outdoor Vent-Free Firebox',
    sku: "VRE4342ZEN / F0516",
    quantity: 12,
    category: "Outdoor",
    configuration: "Outdoor firebox",
    fuel: "For compatible gas log set",
    details: "A 42-inch outdoor vent-free firebox for use with a compatible burner and log set.",
  },
  {
    manufacturer: "Superior",
    name: 'VRE4543 43" Outdoor Vent-Free Fireplace',
    sku: "VRE4543EN / F0497",
    quantity: 2,
    category: "Outdoor",
    configuration: "Outdoor front-facing",
    fuel: "Gas configuration to confirm",
    details: "A 43-inch outdoor vent-free fireplace system with electronic controls.",
  },
  {
    manufacturer: "Superior",
    name: 'VRE4672 72" Outdoor Vent-Free Fireplace',
    sku: "VRE4672ZEN / F3522 / F3449",
    quantity: 1,
    category: "Outdoor",
    configuration: "Outdoor front-facing",
    fuel: "Gas configuration to confirm",
    details: "A large 72-inch outdoor vent-free fireplace designed for expansive outdoor living areas.",
  },
  {
    manufacturer: "Napoleon",
    name: 'Galaxy 48" Outdoor Linear Fireplace',
    sku: "GPFL48MHP",
    quantity: 1,
    category: "Outdoor",
    configuration: "Outdoor front-facing linear",
    fuel: "Propane",
    details: "A 48-inch Galaxy outdoor linear fireplace with a modern glass ember bed and weather-resistant construction.",
  },
  {
    manufacturer: "Napoleon",
    name: 'Torch 8" Outdoor Vertical Fireplace',
    sku: "GT8NSB",
    quantity: 2,
    category: "Outdoor",
    configuration: "Outdoor vertical",
    fuel: "Natural gas",
    details: "A slim vertical outdoor Torch fireplace designed as an architectural wall feature.",
  },
  {
    manufacturer: "Superior",
    name: "Brentwood LV Wood-Burning Fireplace Package",
    sku: "BRENTWOOD LV / H0462 / H8295",
    quantity: 1,
    category: "Wood-Burning",
    configuration: "Built-in wood-burning",
    fuel: "Wood",
    details: "A high-efficiency Brentwood LV built-in wood-burning fireplace package; included components should be confirmed.",
  },
  {
    manufacturer: "Superior",
    name: 'WRT3042 42" Wood-Burning Fireplace',
    sku: "WRT3042WSI / F0666",
    quantity: 1,
    category: "Wood-Burning",
    configuration: "Built-in wood-burning",
    fuel: "Wood",
    details: "A 42-inch traditional wood-burning fireplace with a circulating firebox and wide viewing area.",
  },
  {
    manufacturer: "Napoleon",
    name: "High Country 3000 Wood-Burning Fireplace Package",
    sku: "NZ3000H / NZ64 / FPWI3-H / H336H-WI",
    quantity: 1,
    category: "Wood-Burning",
    configuration: "High-efficiency built-in",
    fuel: "Wood",
    details: "A Napoleon High Country 3000 high-efficiency wood-burning fireplace package with associated finishing components.",
  },
  {
    manufacturer: "Osburn",
    name: "Stratford II Wood-Burning Fireplace Package",
    sku: "OB00950 / AC01421 / AC02090",
    quantity: 1,
    category: "Wood-Burning",
    configuration: "High-efficiency built-in",
    fuel: "Wood",
    details: "An Osburn Stratford II high-efficiency wood-burning fireplace package with associated accessories.",
  },
];

const totalUnits = overstockFireplaces.reduce(
  (total, fireplace) => total + fireplace.quantity,
  0,
);

const manufacturerCount = new Set(
  overstockFireplaces.map((fireplace) => fireplace.manufacturer),
).size;

export default function OverstockFireplacesPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="In Stock / Limited Quantities"
        title="Overstock fireplaces, ready for the right project."
        description="A limited collection of electric, gas, linear, corner, see-through, and outdoor fireplaces available through our California showrooms. Contact our team for condition, included components, pricing, and installation compatibility."
      />

      <section className="border-b border-[color:var(--sand-deep)] bg-[#F9F7F3]">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-[color:var(--sand-deep)] px-4 sm:px-6 lg:px-8">
          <div className="py-6 pr-4 text-center">
            <p className="text-2xl font-medium text-[color:var(--ink)]">{overstockFireplaces.length}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink)]/45">Models</p>
          </div>
          <div className="px-4 py-6 text-center">
            <p className="text-2xl font-medium text-[color:var(--ink)]">{totalUnits}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink)]/45">Total Units</p>
          </div>
          <div className="py-6 pl-4 text-center">
            <p className="text-2xl font-medium text-[color:var(--ink)]">{manufacturerCount}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink)]/45">Brands</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[color:var(--sand-deep)] pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[color:var(--accent)]">Current Inventory</p>
            <h2
              className="mt-2 text-3xl font-medium text-[color:var(--ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Available fireplace units
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[color:var(--ink)]/55">
            Inventory may change without notice. Quantity reflects the supplied overstock list and will be confirmed before purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {overstockFireplaces.map((fireplace) => (
            <article
              key={fireplace.sku}
              className="flex min-h-[390px] flex-col border border-[color:var(--sand-deep)] bg-white p-7 transition-colors hover:border-[color:var(--accent)]"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[color:var(--accent)]">
                    {fireplace.manufacturer}
                  </p>
                  <p className="mt-2 font-mono text-xs text-[color:var(--ink)]/45">SKU {fireplace.sku}</p>
                </div>
                <div className="min-w-16 border border-[color:var(--sand-deep)] px-3 py-2 text-center">
                  <p className="text-xl font-medium leading-none text-[color:var(--ink)]">{fireplace.quantity}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[color:var(--ink)]/45">
                    {fireplace.quantity === 1 ? "Unit" : "Units"}
                  </p>
                </div>
              </div>

              <span className="mb-3 w-fit bg-[color:var(--sand)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)]/65">
                {fireplace.category}
              </span>
              <h3
                className="text-2xl font-medium leading-tight text-[color:var(--ink)]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {fireplace.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink)]/58">{fireplace.details}</p>

              <dl className="mt-6 space-y-2 border-t border-[color:var(--sand-deep)] pt-5 text-xs">
                <div className="flex justify-between gap-4">
                  <dt className="text-[color:var(--ink)]/40">Configuration</dt>
                  <dd className="text-right font-medium text-[color:var(--ink)]/70">{fireplace.configuration}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[color:var(--ink)]/40">Fuel</dt>
                  <dd className="text-right font-medium text-[color:var(--ink)]/70">{fireplace.fuel}</dd>
                </div>
              </dl>

              {fireplace.note && (
                <p className="mt-4 border-l-2 border-[color:var(--accent)] pl-3 text-[11px] leading-relaxed text-[color:var(--ink)]/50">
                  {fireplace.note}
                </p>
              )}

              <Link
                href={`/fireplaces/overstock/inquiry?product=${encodeURIComponent(fireplace.sku)}`}
                className="mt-auto pt-6 text-sm font-medium text-[color:var(--accent)] hover:underline"
              >
                Ask About This Unit →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--sand-deep)] bg-[#F9F7F3] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[color:var(--accent)]">Availability & Pricing</p>
          <h2
            className="mt-3 text-3xl font-medium text-[color:var(--ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let us confirm the right unit for your project.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--ink)]/58">
            Overstock purchases are final and must be reviewed for fuel type, venting, framing, included accessories, condition, and local installation requirements before purchase.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[color:var(--ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent)]"
            >
              Request Overstock Pricing
            </Link>
            <a
              href="tel:7149087388"
              className="border border-[color:var(--ink)]/20 px-6 py-3 text-sm font-medium text-[color:var(--ink)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Call (714) 908-7388
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
