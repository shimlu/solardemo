import type { IconName } from "@/components/ui/Icon";

/** Trust strip. Values from the Facebook cover banner; verify before launch. */
export const trustStats: { id: string; value: string; label: string; icon: IconName }[] = [
  { id: "followers", value: "11K+", label: "Trusted Followers", icon: "users" },
  { id: "eco", value: "100%", label: "Eco-friendly Products", icon: "leaf" },
  { id: "years", value: "5+", label: "Years of Service", icon: "award" },
  { id: "delivery", value: "Nationwide", label: "Delivery Coverage", icon: "truck" },
];

export const solarBenefits: {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: IconName;
}[] = [
  {
    id: "save-electricity",
    title: "Save on Electricity",
    tag: "Tipid sa Kuryente",
    description: "100% solar-powered lighting — zero added cost to your monthly electric bill.",
    icon: "zap",
  },
  {
    id: "brownout-ready",
    title: "Light During Brownouts & Typhoons",
    tag: "Emergency Ready",
    description: "Dependable backup lighting when power goes out — stays on when you need it most.",
    icon: "lightbulb",
  },
  {
    id: "auto-on-off",
    title: "Automatic On / Off",
    tag: "Dusk-to-Dawn Sensor",
    description: "Automatically turns on at dusk and switches off at sunrise — no daily switching needed.",
    icon: "power",
  },
  {
    id: "no-wiring",
    title: "No Wiring, No Hassle",
    tag: "Easy Installation",
    description: "Quick, clean setup with no wall drilling, trenching, or messy electrical cables.",
    icon: "wrench",
  },
  {
    id: "weather-resistant",
    title: "Weather-Resistant (IP65)",
    tag: "Rain & Heat Proof",
    description: "Sealed dust-tight and water-resistant build engineered for Philippine rain and intense heat.",
    icon: "cloudSun",
  },
  {
    id: "peace-of-mind",
    title: "Everyday Peace of Mind",
    tag: "Practical Investment",
    description: "A long-lasting, practical investment that keeps homes, businesses, and streets safely lit.",
    icon: "heart",
  },
];

export const solarGuarantees: { id: string; title: string; subtitle: string; icon: IconName }[] = [
  { id: "warranty", title: "1-Year Warranty", subtitle: "Backed by our local team", icon: "shield" },
  { id: "ip65", title: "IP65 Rated", subtitle: "Water-resistant & dust-tight", icon: "droplets" },
  { id: "stores", title: "Physical Stores", subtitle: "Tabaco City & Naga City", icon: "store" },
];

export const whyUs: { id: string; title: string; description: string; icon: IconName }[] = [
  {
    id: "reliability",
    title: "Reliable Performance",
    description: "Solar lighting you can count on night after night, backed by a trusted local team.",
    icon: "shield",
  },
  {
    id: "savings",
    title: "Real Energy Savings",
    description: "Harness free sunlight and cut recurring electricity costs for homes and communities.",
    icon: "zap",
  },
  {
    id: "durability",
    title: "Built to Last Outdoors",
    description: "Weather-resistant designs made for Philippine sun, wind and heavy rain.",
    icon: "cloudSun",
  },
  {
    id: "roots",
    title: "Bicol Roots, Nationwide Reach",
    description: "Proudly based in Naga, Camarines Sur — and now delivering across the Philippines.",
    icon: "mapPin",
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  product: string;
  highlight: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    quote:
      "Sobrang worth it, kaya napaorder ulit ako. For safety din kasi at lagi nalang nawawalan ng ilaw. At least ito matagal malowbat — salamat!",
    author: "Repeat Customer · Albay",
    product: "Solar Ceiling Light",
    highlight: "Long battery life",
  },
  {
    id: "review-2",
    quote:
      "Satisfied ako sa product. It meets my expectations. Very affordable. Wala naman na damage. Super gamit na gamit namin kapag nagbabrownout.",
    author: "Verified Buyer · Albay",
    product: "300W Solar Flood Light (IP67)",
    highlight: "Brownout ready",
  },
  {
    id: "review-3",
    quote:
      "Very good investment! No problem na kung mawalan ng kuryente. Maliwanag, safe at maayos na dumating sakin ang item. Responsive din customer service. Satisfied customer!",
    author: "Verified Buyer · Bicol",
    product: "Solar Ceiling Light",
    highlight: "Responsive service",
  },
  {
    id: "review-4",
    quote:
      "Kailangan ko to dahil napapadalas ang brownout ngayon. Well packed at gumagana yung item. Recommend ko to sa mga kapitbahay ko.",
    author: "Verified Buyer · Albay",
    product: "1000W Solar Flood Light (IP68)",
    highlight: "Well-packed",
  },
  {
    id: "review-5",
    quote:
      "It's a good product, okay na okay — what you see is what you get. Walang damage ang packaging at mabilis lang din dumating. Ang liwanag niya.",
    author: "Verified Buyer · Bicol",
    product: "Indoor Solar Flood Light",
    highlight: "Fast delivery",
  },
  {
    id: "review-6",
    quote:
      "Tama desisyon ko bumili. Maganda ang item, secured at walang damage ang item. Will order again soon, thank you.",
    author: "Verified Buyer · Bicol",
    product: "Outdoor Solar Lights",
    highlight: "Will order again",
  },
];

export const orderSteps: { id: string; title: string; description: string; icon: IconName }[] = [
  {
    id: "message",
    title: "Browse & Message",
    description: "Pick products you like and send us a message on Facebook Messenger.",
    icon: "messageCircle",
  },
  {
    id: "quote",
    title: "Get Recommendation & Quote",
    description: "We recommend the right setup for your needs and send a clear quote.",
    icon: "clipboard",
  },
  {
    id: "delivery",
    title: "Delivery & Installation Support",
    description: "We ship nationwide and guide you through installation.",
    icon: "truck",
  },
];

// [PLACEHOLDER] Answers are typical industry guidance. Confirm warranty, shipping and pricing policies with the client.
export const faqs: { id: string; question: string; answer: string }[] = [
  {
    id: "warranty",
    question: "Do your solar lights come with a warranty?",
    answer:
      "Yes — our solar lights come with a 1-year warranty backed by our physical stores in Tabaco City and Naga City. Message us with the specific item and we'll share the exact coverage details.",
  },
  {
    id: "rain",
    question: "Will solar lights still work on rainy or cloudy days?",
    answer:
      "Yes. Solar panels still charge on cloudy days, just more slowly. Our outdoor lights are weather-resistant, and we can recommend battery capacity suited to Bicol's rainy season.",
  },
  {
    id: "shipping",
    question: "Do you deliver outside Naga and Camarines Sur?",
    answer:
      "Yes, we serve nationwide. Send us your location on Messenger and we'll give you the delivery details and estimated time.",
  },
  {
    id: "bulk",
    question: "Do you offer bulk pricing for LGUs, barangays and contractors?",
    answer:
      "Absolutely. We're LGU and barangay ready and partner with contractors and builders. Message us your quantity and project details for a project quote. We are a BIR-registered business.",
  },
  {
    id: "install",
    question: "Is installation difficult? Do I need an electrician?",
    answer:
      "Most solar lights are plug-and-play with no wiring to the grid. For larger systems and street lights, we provide installation guidance and can recommend the proper setup.",
  },
];
