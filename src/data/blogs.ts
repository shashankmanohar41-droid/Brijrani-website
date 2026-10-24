/**
 * Verified Blog Content & Provenance for Brijrani / Krishi Varsha
 * Sources: /blogs/* on brijrani.in
 */

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  imageUrl: string;
  sourceUrl: string;
  publishDate?: string;
  summary: string;
  verifiedOutline: string[];
  contentNotice: string;
  relatedCommoditySlugs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "use-of-rice-bran-in-poultry-diets",
    title: "Use of Rice Bran in Poultry Diets",
    category: "Poultry Nutrition",
    readTime: "5 min read",
    imageUrl: "/assets/rice_bran_deoiled_cake.png",
    sourceUrl: "https://brijrani.in/blogs/use-of-rice-bran-in-poultry-diets",
    summary:
      "An overview of how raw and stabilized rice bran serves as a digestible energy and essential fatty acid contributor in commercial layer and broiler poultry formulations.",
    verifiedOutline: [
      "Metabolizable energy contributions of rice bran lipids",
      "Digestible fibre balance for gastrointestinal health in layers",
      "Managing free fatty acid (FFA) volatility through storage discipline",
      "Blending parameters with maize and high-protein meals",
    ],
    contentNotice:
      "Original published record verified from brijrani.in. The source page outlines key topical themes and relationships. Additional commercial formulation data is available upon consultation.",
    relatedCommoditySlugs: ["rice-bran", "dorb", "broken-rice"],
  },
  {
    slug: "uses-of-de-oiled-cakes-as-manure",
    title: "Uses of De Oiled Cakes as Manure",
    category: "Agronomy & Organic Manure",
    readTime: "4 min read",
    imageUrl: "/assets/mustard_de_oiled_cake.png",
    sourceUrl: "https://brijrani.in/blogs/uses-of-de-oiled-cakes-as-manure",
    summary:
      "Exploring the agronomic value of mustard, neem, and rice-bran de-oiled cakes as organic, slow-release nitrogen fertilizers and soil microbiology conditioners.",
    verifiedOutline: [
      "Slow-release organic nitrogen, phosphorus, and potassium (NPK) dynamics",
      "Soil micro-flora enrichment and organic carbon enhancement",
      "Mustard DOC sulfur content and its natural nematicidal properties",
      "Application protocols for commercial horticulture and cash crops",
    ],
    contentNotice:
      "Original published record verified from brijrani.in. Explores the circular agricultural utility of agro-processing by-products as natural soil inputs.",
    relatedCommoditySlugs: ["mustard-doc", "dorb"],
  },
  {
    slug: "value-of-rice-by-product-for-feed-industry",
    title: "Value of Rice by Product for Feed Industry",
    category: "Feed Milling Economics",
    readTime: "6 min read",
    imageUrl: "/assets/broken_rice_feed.png",
    sourceUrl: "https://brijrani.in/blogs/value-of-rice-by-product-for-feed-industry",
    summary:
      "How rice milling by-products—including broken rice, bran, and DORB—provide critical economic and nutritional flexibility for Indian compound feed manufacturers.",
    verifiedOutline: [
      "The rice milling value chain: paddy to starch, bran, and husks",
      "Broken rice (khudi) as an economical, low-tannin starch substitute for maize",
      "DORB as an essential bulk fibre and protein filler in dairy pellets",
      "Supply chain economics and regional procurement corridors across Eastern India",
    ],
    contentNotice:
      "Original published record verified from brijrani.in. Highlights Brijrani's core origin competency across Bihar and West Bengal paddy milling belts.",
    relatedCommoditySlugs: ["broken-rice", "rice-bran", "dorb"],
  },
];
