/**
 * Content provenance and verification metadata
 * Maintains audit trail separating extracted source data from pending commercial sign-offs.
 */

export type SourceStatus = "verified-source" | "needs-review" | "client-pending";
export type ApprovalStatus = "pending" | "approved" | "discrepancy-flagged";

export interface ProvenanceRecord {
  sourceUrl: string;
  sourceStatus: SourceStatus;
  commercialApproval: ApprovalStatus;
  notes?: string;
}

export interface VerifiedSpec extends ProvenanceRecord {
  parameter: string;
  value: string;
  unit?: string;
  tolerance?: string;
}

export const SOURCE_PAGES = {
  about: "https://brijrani.in/about",
  agricultureNetwork: "https://brijrani.in/agriculture-network",
  qualityPolicy: "https://brijrani.in/quality-policy",
  contact: "https://brijrani.in/contact",
  directors: {
    rajesh: "https://brijrani.in/director-message",
    suman: "https://brijrani.in/dm-message2",
    sumit: "https://brijrani.in/dm-message3",
  },
  products: {
    riceBran: "https://brijrani.in/rice-bran",
    brokenRice: "https://brijrani.in/broken-rice",
    wheat: "https://brijrani.in/wheat",
    maize: "https://brijrani.in/maize-product",
    dorb: "https://brijrani.in/de-oiled-cake",
    mustardDoc: "https://brijrani.in/de-oiled-mustard-cake",
    soyaHipro: "https://brijrani.in/soya-product",
    soyaDoc: "https://brijrani.in/soya-doc",
  },
  blogs: [
    "https://brijrani.in/blogs/use-of-rice-bran-in-poultry-diets",
    "https://brijrani.in/blogs/uses-of-de-oiled-cakes-as-manure",
    "https://brijrani.in/blogs/value-of-rice-by-product-for-feed-industry",
  ],
} as const;
