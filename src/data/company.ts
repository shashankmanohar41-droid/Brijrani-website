/**
 * Verified Company Information for Brijrani Agri Product Pvt. Ltd. (Krishi Varsha)
 * Derived strictly from brijrani.in verified pages.
 */

export const COMPANY_INFO = {
  legalName: "Brijrani Agri Product Pvt. Ltd.",
  brandName: "Krishi Varsha",
  shortName: "Brijrani",
  tagline: "Connecting Indian Agriculture with Industrial Animal Nutrition",
  establishedYear: 2022, // Incorporation year per public registration
  founderExperienceYears: "20+", // Managing Director's commercial experience
  growthMilestoneYear: 2020, // Major supply-chain and logistics network expansion
  originLocation: "Chhapra, Bihar",
  headquarters: {
    address: "Opposite Bright Career School, Behind S2 Mall, Agamkuan–Pahari Road",
    city: "Patna",
    state: "Bihar",
    postalCode: "800007",
    country: "India",
    fullAddress:
      "Opposite Bright Career School, Behind S2 Mall, Agamkuan–Pahari Road, Patna – 800007, Bihar, India",
    googleMapsSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=Bright+Career+School+S2+Mall+Agamkuan+Pahari+Road+Patna+800007",
  },
  contact: {
    phone: "+91 9334399829",
    phoneDisplay: "+91 93343 99829",
    email: "info@brijrani.in",
    supportEmail: "info@brijrani.in",
  },
  metrics: {
    farmersAndMerchants: "500+", // Self-reported network count
    fpoConnections: "100+", // Self-reported access
    mdExperience: "20+ Years",
    coreStates: ["Bihar", "West Bengal", "Uttar Pradesh"],
  },
  mission:
    "To connect farmers, FPOs, merchants, and regional agricultural suppliers directly with feed manufacturers—ensuring primary agricultural producers receive fair, transparent value while industrial feed millers secure timely, quality-verified raw materials at realistic commercial terms.",
  vision:
    "To make a comprehensive, reliable range of agricultural raw materials accessible to animal nutrition and feed manufacturing industries across India at reasonable costs and precisely the right time.",
  coreValues: [
    {
      title: "Integrity",
      description:
        "Open, honest communication regarding commodity parameters, commercial terms, loading realities, and seasonal market movements.",
    },
    {
      title: "Reliability",
      description:
        "Consistent execution across price cycles, prioritizing contractual dispatch obligations and dependable delivery timelines.",
    },
    {
      title: "Agricultural Responsibility",
      description:
        "Respecting the agrarian ecosystem by bridging grassroots producers and FPOs with high-throughput industrial feed demand.",
    },
    {
      title: "Transparency",
      description:
        "Unambiguous specifications, testing protocols, and weighment standards verified through regional laboratory partnerships.",
    },
  ],
} as const;
