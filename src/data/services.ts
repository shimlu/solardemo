import type { IconName } from "@/components/ui/Icon";

export interface Service {
  id: string;
  title: string;
  audience: string;
  icon: IconName;
  description: string;
  points: string[];
}

export const services: Service[] = [
  {
    id: "residential",
    title: "Residential Homes",
    audience: "For Filipino households",
    icon: "home",
    description:
      "Premium solar solutions for every Filipino home — brighter rooms, safer gates and lower electricity costs.",
    points: [
      "Indoor & outdoor solar lights",
      "Easy, no-wiring setups",
      "Recommendation based on your home",
    ],
  },
  {
    id: "business",
    title: "Businesses & Contractors",
    audience: "For builders, shops & developers",
    icon: "building",
    description:
      "Reliable supply and partnership for contractors, builders and business owners who need dependable lighting.",
    points: [
      "Bulk supply & project pricing",
      "Contractor & builder partnerships",
      "Nationwide delivery",
    ],
  },
  {
    id: "lgu",
    title: "LGUs & Barangay Communities",
    audience: "For public & community projects",
    icon: "landmark",
    description:
      "LGU and barangay-ready street and outdoor lighting that keeps roads and public spaces safe after dark.",
    points: [
      "Durable outdoor street lighting",
      "Documented, BIR-registered supplier",
      "Support for community projects",
    ],
  },
];

