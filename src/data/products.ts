export type ProductCategory = "home" | "street" | "commercial";

export interface Product {
  /** Stable id — use as SKU / CMS key in a future upgrade */
  id: string;
  name: string;
  category: ProductCategory;
  summary: string;
  specs: string[];
  /** Optional image path in /public. Falls back to a branded visual when omitted. */
  image?: string;
  badge?: string;
  /** Future: price, stock, variants, etc. can be added without touching UI */
  isPlaceholder: boolean;
}

export const productCategories: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "home", label: "Home Solar Lights" },
  { id: "street", label: "Street & Outdoor Lights" },
  { id: "commercial", label: "Commercial / Systems" },
];

// [PLACEHOLDER] All product names/specs below are realistic samples.
// Replace with the actual catalog from the client.
export const products: Product[] = [
  {
    id: "home-ceiling-light",
    name: "Solar Ceiling Light (Indoor)",
    category: "home",
    summary: "Bright indoor lighting powered by the sun — no electric bill.",
    specs: ["Remote controlled", "Panel + LED set", "Ideal for sala & rooms"],
    badge: "Popular",
    isPlaceholder: true,
  },
  {
    id: "home-garden-light",
    name: "Solar Garden & Gate Light",
    category: "home",
    summary: "Auto on at dusk, off at dawn. Perfect for gates and yards.",
    specs: ["Dusk-to-dawn sensor", "Weather-resistant", "Easy mount"],
    isPlaceholder: true,
  },
  {
    id: "home-wall-light",
    name: "Solar Motion Wall Light",
    category: "home",
    summary: "Motion-activated security lighting for walls and pathways.",
    specs: ["PIR motion sensor", "3 lighting modes", "Rain-ready"],
    isPlaceholder: true,
  },
  {
    id: "street-light-allinone",
    name: "All-in-One Solar Street Light",
    category: "street",
    summary: "Integrated panel, battery and LED — fast install, minimal upkeep.",
    specs: ["Auto dusk-to-dawn", "High-lumen LED", "Pole-mount ready"],
    badge: "LGU Ready",
    isPlaceholder: true,
  },
  {
    id: "street-flood-light",
    name: "Solar Flood Light",
    category: "street",
    summary: "Wide-beam outdoor lighting for yards, courts and parking.",
    specs: ["Remote control", "Waterproof housing", "Multiple wattages"],
    isPlaceholder: true,
  },
  {
    id: "street-split-light",
    name: "Split-Type Solar Street Light",
    category: "street",
    summary: "Separate panel and lamp for roads, barangays and subdivisions.",
    specs: ["Larger battery capacity", "Long night runtime", "Durable alloy body"],
    isPlaceholder: true,
  },
  {
    id: "commercial-system",
    name: "Solar Lighting System Kit",
    category: "commercial",
    summary: "Multi-light solar kits sized for shops, farms and small businesses.",
    specs: ["Scalable setup", "Panel + battery + controller", "Custom quote"],
    isPlaceholder: true,
  },
  {
    id: "commercial-highmast",
    name: "Solar High-Power Project Lighting",
    category: "commercial",
    summary: "High-output lighting for builders, contractors and community projects.",
    specs: ["Bulk supply", "Project-based pricing", "Installation guidance"],
    badge: "Bulk Orders",
    isPlaceholder: true,
  },
];

