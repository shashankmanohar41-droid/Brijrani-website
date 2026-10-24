/**
 * Verified Agriculture Network & Supply Chain Data for Brijrani / Krishi Varsha
 * Source: /agriculture-network on brijrani.in
 */

export interface NetworkRegion {
  state: string;
  focusCommodities: string[];
  role: string;
  keyMandiHubs: string[];
}

export const NETWORK_REGIONS: NetworkRegion[] = [
  {
    state: "Bihar",
    focusCommodities: ["Yellow Maize", "Broken Rice", "Rice Bran", "DORB"],
    role: "Primary Origin & Sourcing Heart",
    keyMandiHubs: ["Kosi Belt", "Seemanchal", "Patna", "Chhapra"],
  },
  {
    state: "West Bengal",
    focusCommodities: ["Paddy / Rice Bran", "DORB", "Broken Rice"],
    role: "High-Volume Milling & Sourcing Corridor",
    keyMandiHubs: ["Burdwan Rice Cluster", "Siliguri Gateway"],
  },
  {
    state: "Uttar Pradesh",
    focusCommodities: ["Wheat Grain", "Yellow Maize", "Mustard DOC"],
    role: "Grain & Oilseed Production Corridor",
    keyMandiHubs: ["Eastern & Central UP Agro Mandis"],
  },
];

export const SUPPLY_CHAIN_PILLARS = [
  {
    step: "01",
    title: "Farmers, FPOs & Primary Merchants",
    eyebrow: "Origin Procurement Network",
    description:
      "Direct connections with over 500+ registered farmers, local merchants, and 100+ Farmer Producer Organizations (FPOs), securing first-mile commodity origination at transparent mandi benchmarks.",
  },
  {
    step: "02",
    title: "Regional Testing & Laboratory Verification",
    eyebrow: "Quality Assessment Partnerships",
    description:
      "Coordinated sampling and testing through accredited regional laboratory partners. Turnaround times of 2 to 48 hours depending on parameter complexity, directly informing fair valuation.",
  },
  {
    step: "03",
    title: "Coordinated Storage & Transport Fleet",
    eyebrow: "Logistics Management",
    description:
      "Structured collaboration with warehouse service providers and GPS-tracked commercial truck fleets, ensuring pest-protected, aerated staging and dependable dispatch schedules.",
  },
  {
    step: "04",
    title: "Feed Manufacturers & Industrial Processing Plants",
    eyebrow: "Enterprise Delivery",
    description:
      "Direct bulk delivery to commercial poultry integrators, dairy cooperative plants, aquaculture producers, and institutional export handlers across India.",
  },
];
