/**
 * Central site configuration.
 * Items tagged [PLACEHOLDER] are NOT confirmed by the client — replace before launch.
 */
export const siteConfig = {
  name: "Solar EcoPrime",
  tagline: "Lighting Homes, Empowering Communities",
  description:
    "Bicol's trusted partner for reliable solar lighting solutions — from homes to businesses and communities. Based in Naga, Camarines Sur. Now serving nationwide.",
  // [PLACEHOLDER] Set to the deployed Vercel/custom domain
  url: "https://solar-ecoprime.vercel.app",
  locale: "en_PH",

  logo: "/brand/logo.jpg",
  cover: "/brand/cover.jpg",
  birBadge: "/brand/bir-badge.jpg",

  location: {
    city: "Tabaco City",
    province: "Albay",
    region: "Bicol Region, Philippines",
    addressLine: "Blk 11 Lot 1, M.E.S Matagbac, Tabaco City, Albay",
    mapQuery: "Blk 11 Lot 1, M.E.S Matagbac, Tabaco City",
  },

  branches: [
    {
      id: "tabaco",
      name: "Tabaco City Branch (Main / Hub)",
      address: "Blk 11 Lot 1, M.E.S Matagbac, Tabaco City",
      label: "Blk 11 Lot 1, M.E.S Matagbac, Tabaco City, Albay, Philippines",
      phone: "0948 146 5509",
      lat: 13.3484,
      lng: 123.70728,
      embedUrl: "https://maps.google.com/maps?q=13.3484,123.70728&z=17&output=embed",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=13.3484,123.70728",
    },
    {
      id: "naga",
      name: "Naga City Branch",
      address: "Padre Garcia St., Sitio Matiway, San Felipe, Naga City (In front of Moraville Hotel San Felipe)",
      label: "San Felipe-Pacol-Carolina-Panicuason Road, Pacol, Naga, 4400, Philippines",
      phone: "0963 202 5811 | 0956 243 2759",
      lat: 13.6461,
      lng: 123.212318,
      embedUrl: "https://maps.google.com/maps?q=13.6461,123.212318&z=17&output=embed",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=13.6461,123.212318",
    },
  ],

  contact: {
    facebookPage: "https://www.facebook.com/profile.php?id=61590983690018",
    messenger: "https://m.me/61590983690018",
    email: "solarecoprimenaga@gmail.com",
    phone: "0963 202 5811",
    phoneHref: "tel:+639632025811",
    hours: "Always open — message us anytime",
  },

  registration: {
    label: "BIR Registered",
    year: "2024",
    rsn: "067RC2025000007346",
  },

  nav: [
    { label: "Benefits", href: "#benefits" },
    { label: "Products", href: "#products" },
    { label: "Solutions", href: "#solutions" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  cta: {
    primary: "Message Us",
    primaryLong: "Message on Facebook",
    secondary: "Browse Products",
    quote: "Request a Quote",
  },

  hero: {
    badge: "Now serving nationwide",
    headlineLead: "Lighting Homes,",
    headlineAccent: "Empowering Communities",
    subheadline:
      "Premium solar solutions for every Filipino home. Eco-first, nationally trusted and proudly rooted in Bicol — from solar lights and systems to LGU and barangay projects.",
    bullets: [
      "Solar Lights & Systems",
      "Eco-friendly Solutions",
      "Nationwide Delivery",
      "LGU, Contractor & Builder Partnerships",
    ],
  },

  sectionCopy: {
    benefits: {
      eyebrow: "Benefits of Solar Lights",
      title: "Save on electricity and enjoy peace of mind every day",
      subtitle:
        "A practical, long-lasting investment for Filipino homes, businesses, and communities — built for everyday use and sudden brownouts.",
    },
    products: {
      eyebrow: "Featured Products",
      title: "Solar lighting built for Philippine weather",
      subtitle:
        "Browse a sample of our range, then message us for availability, specs and pricing.",
    },
    solutions: {
      eyebrow: "Solutions by Customer",
      title: "One partner for homes, businesses and communities",
      subtitle: "Whatever the scale, we help you pick the right solar setup.",
    },
    why: {
      eyebrow: "Why Choose Us",
      title: "Reliable light, rooted in Bicol",
    },
    steps: {
      eyebrow: "How to Order",
      title: "Working with us is simple",
      subtitle: "Three easy steps — no cart, no hassle. Just message us.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions Filipino solar buyers ask",
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "Ready to switch to solar?",
      subtitle:
        "Send us a message and we'll recommend the right solar lighting solution and quote for you.",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
