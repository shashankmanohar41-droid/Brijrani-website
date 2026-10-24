/**
 * Verified Leadership Data for Brijrani / Krishi Varsha
 * Sources: /director-message, /dm-message2, /dm-message3 on brijrani.in
 */

export interface Director {
  slug: string;
  name: string;
  designation: string;
  roleSummary: string;
  portraitUrl: string;
  sourceUrl: string;
  focusAreas: string[];
  message: {
    salutation: string;
    leadParagraph: string;
    bodyParagraphs: string[];
    closingQuote: string;
  };
}

export const DIRECTORS: Director[] = [
  {
    slug: "rajesh-kumar-gupta",
    name: "Mr. Rajesh Kumar Gupta",
    designation: "Founder & Managing Director",
    roleSummary:
      "Over two decades of hands-on agricultural trading experience, commodity sourcing strategy, business recovery, and network development across North and Eastern India.",
    portraitUrl: "/assets/executive_portrait_1.png",
    sourceUrl: "https://brijrani.in/director-message",
    focusAreas: [
      "Commodity Trading & Origination",
      "Network Expansion & Farmer Alliances",
      "Sales & Marketing Operations",
      "Risk Mitigation in Volatile Markets",
    ],
    message: {
      salutation: "From the Managing Director's Desk",
      leadParagraph:
        "Our journey began more than 20 years ago as a modest grain trading venture in Chhapra, Bihar. Grounded in direct relationships with farmers and local processors, we learned that true commodity leadership is built through market resilience, discipline, and uncompromising contractual integrity.",
      bodyParagraphs: [
        "Through economic shifts and agricultural supply fluctuations, our focus has remained steadfast: creating a dependable, transparent link between rural Indian harvesting communities and high-demand commercial feed manufacturers.",
        "In 2020, we took a definitive step forward by formalizing our supply-chain infrastructure and expanding direct procurement channels across Bihar, West Bengal, and Uttar Pradesh. Today, working alongside more than 500 registered farmers, merchants, and primary producer organizations (FPOs), Brijrani stands as a trusted partner committed to consistent quality, timely dispatch, and mutual commercial prosperity.",
        "We believe that fair pricing for primary producers and reliable input parameters for industrial millers are not opposing goals—they are the twin pillars of a sustainable national agricultural supply chain.",
      ],
      closingQuote:
        "True strength in agricultural trade is defined not merely by transaction volume, but by the trust we earn when markets face volatility.",
    },
  },
  {
    slug: "suman-gupta",
    name: "Mrs. Suman Gupta",
    designation: "CHRO & Managing Director",
    roleSummary:
      "Overseeing human resources, organizational design, talent acquisition, skill enhancement, and strategic governance to build a responsive, ethics-driven workforce.",
    portraitUrl: "/assets/executive_portrait_2.png",
    sourceUrl: "https://brijrani.in/dm-message2",
    focusAreas: [
      "Strategic Human Resource Development",
      "Organizational Governance & Ethics",
      "Field Operations & Team Capability",
      "Employee Welfare & Career Pathways",
    ],
    message: {
      salutation: "Message from the CHRO & Managing Director",
      leadParagraph:
        "An enterprise in the agricultural commodity sector operates through people on the ground—procurement coordinators at mandis, quality inspectors at processing plants, logistics managers on transport routes, and client support teams.",
      bodyParagraphs: [
        "At Brijrani (Krishi Varsha), our human resources philosophy is rooted in empowerment, transparency, and accountability. We recruit and develop individuals who share our commitment to rural agrarian welfare and enterprise reliability.",
        "We invest in ongoing training around quality testing protocols, safety, and modern communication tools, ensuring that our teams bridge the gap between traditional mandi practices and contemporary corporate expectations.",
        "By nurturing an environment of respect and mutual growth, we equip our people to deliver consistent value to every farmer, vendor, and industrial client we serve.",
      ],
      closingQuote:
        "Our people are the living bridge between India's fields and its modern animal nutrition industry.",
    },
  },
  {
    slug: "sumit-gupta",
    name: "Mr. Sumit Gupta",
    designation: "Co-Founder & Chief Executive Officer",
    roleSummary:
      "Leading corporate finance, financial controls, operational efficiency, modern logistics workflows, technology enablement, and nationwide client partnerships.",
    portraitUrl: "/assets/executive_portrait_3.png",
    sourceUrl: "https://brijrani.in/dm-message3",
    focusAreas: [
      "Financial Controls & Working Capital",
      "Logistics Optimization & Route Tracking",
      "B2B Commercial Accounts & Contracting",
      "Quality Assurance & Laboratory Verification",
    ],
    message: {
      salutation: "Message from the Chief Executive Officer",
      leadParagraph:
        "Industrial animal feed manufacturing requires precision. High-throughput feed mills cannot afford delays in raw material arrivals or unexplained deviations in nutritional parameters like protein, moisture, or silica.",
      bodyParagraphs: [
        "As CEO, my focus is on institutionalizing operational discipline across every transaction. We have structured our commercial contracts, payment mechanisms, and logistics tracking to ensure buyers receive exact specifications with predictable dispatch timelines.",
        "We have established partnerships with accredited regional testing laboratories to verify critical parameters like crude protein in Soya DOC and DORB or moisture content in Yellow Maize. This discipline gives our buyers verified data before materials reach their unloading bays.",
        "Looking forward, we continue to enhance our technological capabilities, optimize multi-modal freight routes, and deepen our working relationships with industrial feed plants nationwide.",
      ],
      closingQuote:
        "Precision in logistics and honesty in laboratory specifications turn simple commodity trading into enduring enterprise partnerships.",
    },
  },
];
