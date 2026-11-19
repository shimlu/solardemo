import type { IconName } from "@/components/ui/Icon";

/** Trust strip. Values from the Facebook cover banner; verify before launch. */
export const trustStats: { id: string; value: string; label: string; icon: IconName }[] = [
  { id: "followers", value: "11K+", label: "Trusted Followers", icon: "users" },
  { id: "eco", value: "100%", label: "Eco-friendly Products", icon: "leaf" },
  { id: "years", value: "5+", label: "Years of Service", icon: "award" },
  { id: "delivery", value: "Nationwide", label: "Delivery Coverage", icon: "truck" },
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
      "Yes — our products come with a warranty. Coverage depends on the product, so message us with the item you're interested in and we'll confirm the exact terms.",
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
