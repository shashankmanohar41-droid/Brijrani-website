/**
 * Verified Product Catalog & Technical Specifications for Brijrani / Krishi Varsha
 * Derived strictly from brijrani.in commodity detail pages.
 * All specifications preserve original published numbers and note provenance.
 */

import { VerifiedSpec } from "./content-sources";

export type ProductCategory =
  | "Rice Products"
  | "Grain Products"
  | "De-Oiled Cakes"
  | "Soya Products"
  | "Secondary Commodities";

export interface Product {
  slug: string;
  name: string;
  hindiName?: string;
  category: ProductCategory;
  headline: string;
  summary: string;
  imageUrl: string;
  sourceUrl: string;
  hsnCode: string;
  listedGst: string;
  physicalForm: string;
  specifications: VerifiedSpec[];
  applications: string[];
  industriesServed: string[];
  producingRegions: string[];
  storageGuidelines: string[];
  packagingOptions: string[];
  commercialApprovalStatus: "approved" | "pending-review";
  discrepancies?: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "rice-bran",
    name: "Rice Bran",
    hindiName: "चावल की भूसी (राइस ब्रान)",
    category: "Rice Products",
    headline: "High-Energy Lipid & Fibre Co-Product for Feed & Oil Extraction",
    summary:
      "A primary milling co-product rich in natural vegetable fats and digestible energy, extensively utilized in livestock feeds and crude rice-bran oil extraction.",
    imageUrl: "/assets/raw_rice_bran.jpg",
    sourceUrl: "https://brijrani.in/rice-bran",
    hsnCode: "23022020",
    listedGst: "5% (Source Listed — Pending Current Tax Verification)",
    physicalForm: "Meal / Powder",
    specifications: [
      {
        parameter: "Moisture",
        value: "5–12%",
        sourceUrl: "https://brijrani.in/rice-bran",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Oil / Fat Content",
        value: "8–23%",
        sourceUrl: "https://brijrani.in/rice-bran",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Hulls Content",
        value: "0–12%",
        sourceUrl: "https://brijrani.in/rice-bran",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Sand & Silica",
        value: "0–5%",
        sourceUrl: "https://brijrani.in/rice-bran",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Lumps / Clumping",
        value: "Nil (Free Flowing)",
        sourceUrl: "https://brijrani.in/rice-bran",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
    ],
    applications: [
      "Dairy and ruminant feed formulations for dietary energy boost",
      "Solvent extraction plants for crude rice-bran oil and subsequent DORB production",
      "Supplementary energy component in poultry and livestock rations",
    ],
    industriesServed: [
      "Commercial Dairy Farms",
      "Solvent Extraction Plants",
      "Compound Feed Mills",
      "Livestock Integrators",
    ],
    producingRegions: ["Bihar", "West Bengal", "Uttar Pradesh", "Chhattisgarh"],
    storageGuidelines: [
      "Store in dry, aerated covered godowns away from direct sunlight.",
      "Prevent moisture contact to restrict free fatty acid (FFA) escalation.",
      "Follow First-In First-Out (FIFO) stock rotation discipline.",
    ],
    packagingOptions: [
      "Standard 50kg PP / HDPE Woven Bags",
      "Loose Bulk Tipper Dispatch (Plant Unloading)",
    ],
    commercialApprovalStatus: "approved",
  },
  {
    slug: "broken-rice",
    name: "Broken Rice",
    hindiName: "टूटा चावल (कनकी)",
    category: "Rice Products",
    headline: "Pure High-Starch Carbohydrate Input for Poultry, Livestock & Starch Mills",
    summary:
      "Clean, graded broken rice grains offering high starch digestibility and low fiber, ideal for high-density poultry rations, cattle mash, and industrial starch conversion.",
    imageUrl: "/assets/broken_rice_feed.png",
    sourceUrl: "https://brijrani.in/broken-rice",
    hsnCode: "10064000",
    listedGst: "Nil (Exempt per Source Listing)",
    physicalForm: "Grain Fragments (Grit / Khudi)",
    specifications: [
      {
        parameter: "Moisture",
        value: "0–13%",
        sourceUrl: "https://brijrani.in/broken-rice",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Crude Fibre",
        value: "0–2%",
        sourceUrl: "https://brijrani.in/broken-rice",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Live Infestation",
        value: "Nil",
        sourceUrl: "https://brijrani.in/broken-rice",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
    ],
    applications: [
      "Poultry broiler & layer rations as a primary energy cereal source",
      "Dairy cattle concentrated feed mixes",
      "Starch, glucose, and ethanol manufacturing",
      "Snack and biscuit processing plants",
    ],
    industriesServed: [
      "Poultry Integrators",
      "Dairy Cattle Feed Millers",
      "Industrial Starch & Ethanol Plants",
      "Commercial Food Processors",
    ],
    producingRegions: ["Bihar", "West Bengal", "Uttar Pradesh"],
    storageGuidelines: [
      "Keep in damp-proof, pest-controlled storage facilities.",
      "Ensure pallets are elevated above ground level to prevent moisture condensation.",
    ],
    packagingOptions: [
      "50kg New / Sound Recycled HDPE Bags",
      "Bulk Truckload (Loose / Bagged)",
    ],
    commercialApprovalStatus: "approved",
  },
  {
    slug: "wheat",
    name: "Wheat Grain",
    hindiName: "गेहूं दाना (फीड ग्रेड)",
    category: "Grain Products",
    headline: "Wholesome Cereal Grain for Animal Nutrition, Gluten & Distilleries",
    summary:
      "Sound feed-grade wheat grains with verified moisture and purity limits, serving as a reliable dietary staple across poultry, dairy, and industrial processing lines.",
    imageUrl: "/assets/wheat_grain_feed.jpg",
    sourceUrl: "https://brijrani.in/wheat",
    hsnCode: "10019910",
    listedGst: "Nil (Exempt per Source Listing)",
    physicalForm: "Whole Grain",
    specifications: [
      {
        parameter: "Moisture",
        value: "0–14%",
        sourceUrl: "https://brijrani.in/wheat",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Red Wheat",
        value: "Max 0.5%",
        sourceUrl: "https://brijrani.in/wheat",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Black Tip Grains",
        value: "Max 0.5%",
        sourceUrl: "https://brijrani.in/wheat",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Broken & Immature",
        value: "Max 7%",
        sourceUrl: "https://brijrani.in/wheat",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Foreign Matter (FM) + OFG",
        value: "Max 5%",
        sourceUrl: "https://brijrani.in/wheat",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Live Infestation",
        value: "Nil",
        sourceUrl: "https://brijrani.in/wheat",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
    ],
    applications: [
      "High-energy poultry rations and pellet manufacturing",
      "Cattle feed mash formulations",
      "Commercial flour, starch, gluten, and ethanol production",
    ],
    industriesServed: [
      "Poultry Feed Integrators",
      "Cattle Feed Plants",
      "Grain-Based Distilleries",
      "Starch Extractors",
    ],
    producingRegions: ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Punjab"],
    storageGuidelines: [
      "Aerate silos and godowns routinely to maintain uniform temperature.",
      "Strict fumigation protocol to maintain nil live infestation standards.",
    ],
    packagingOptions: ["50kg Standard Jute / HDPE Bags", "Direct Bulk Tipper"],
    commercialApprovalStatus: "approved",
  },
  {
    slug: "maize",
    name: "Yellow Maize / Feed Corn",
    hindiName: "पीला मक्का दाना",
    category: "Grain Products",
    headline: "Premier Carbohydrate Base for Poultry Rations & Feed Millers",
    summary:
      "Sun-dried golden maize grains tested for moisture and grain integrity, representing the bedrock energy ingredient for high-performance poultry and ruminant nutrition.",
    imageUrl: "/assets/yellow_maize_grains.png",
    sourceUrl: "https://brijrani.in/maize-product",
    hsnCode: "10051000",
    listedGst: "Nil (Exempt per Source Listing)",
    physicalForm: "Whole Grain",
    specifications: [
      {
        parameter: "Moisture",
        value: "0–15%",
        sourceUrl: "https://brijrani.in/maize-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Fungus Damaged",
        value: "0–2%",
        sourceUrl: "https://brijrani.in/maize-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Broken Kernels",
        value: "0–1%",
        sourceUrl: "https://brijrani.in/maize-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Water Damaged Grains",
        value: "0–2%",
        sourceUrl: "https://brijrani.in/maize-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Foreign Matter",
        value: "0–0.5%",
        sourceUrl: "https://brijrani.in/maize-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Under-Developed (UD)",
        value: "0–4%",
        sourceUrl: "https://brijrani.in/maize-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Live Infestation",
        value: "Nil",
        sourceUrl: "https://brijrani.in/maize-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Grain Count",
        value: "350–370 (Unit Pending Client Review)",
        sourceUrl: "https://brijrani.in/maize-product",
        sourceStatus: "needs-review",
        commercialApproval: "pending",
        notes:
          "Source website lists 350–370% with an implausible percentage symbol; flagged for commercial unit clarification.",
      },
    ],
    applications: [
      "Staple energy cereal in commercial poultry starter, grower, and finisher rations",
      "Starch manufacturing and industrial sweeteners",
      "Corn flour and animal feed grits",
      "Grain distilleries and biofuel production",
    ],
    industriesServed: [
      "Poultry Feed Integrators",
      "Starch Processing Plants",
      "Ethanol Distilleries",
      "Livestock Nutritionists",
    ],
    producingRegions: ["Bihar (Kosi-Seemanchal Belt)", "West Bengal", "Uttar Pradesh"],
    storageGuidelines: [
      "Strict monitoring of moisture (<14.5% safe transit threshold) to prevent mycotoxin development.",
      "Store in moisture-sealed, ventilated godowns with periodic batch sampling.",
    ],
    packagingOptions: [
      "50kg / 60kg Polypropylene Bags",
      "Bulk Vehicle Loading (Truck & Rake)",
    ],
    commercialApprovalStatus: "approved",
    discrepancies: [
      "Grain count value published with percentage sign (350–370%) on source website requires unit confirmation (likely grains/100g).",
    ],
  },
  {
    slug: "dorb",
    name: "De-Oiled Rice Bran (DORB)",
    hindiName: "डी-ऑयल्ड राइस ब्रान (डीओआरबी)",
    category: "De-Oiled Cakes",
    headline: "Consistent 15–18% Protein, High-Fibre Meal for Cattle, Poultry & Aquaculture",
    summary:
      "Solvent-extracted rice bran meal with the fat removed, yielding a high-protein, fiber-dense base that enhances digestion and delivers cost-effective bulk nutrition.",
    imageUrl: "/assets/rice_bran_deoiled_cake.png",
    sourceUrl: "https://brijrani.in/de-oiled-cake",
    hsnCode: "23069090",
    listedGst: "Nil (Exempt per Source Listing)",
    physicalForm: "Powder & Pellets",
    specifications: [
      {
        parameter: "Crude Protein",
        value: "15–18%",
        sourceUrl: "https://brijrani.in/de-oiled-cake",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Crude Fibre",
        value: "Max 12%",
        sourceUrl: "https://brijrani.in/de-oiled-cake",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Sand & Silica (Acid Insoluble Ash)",
        value: "Max 5%",
        sourceUrl: "https://brijrani.in/de-oiled-cake",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Lumps / Burnt Material",
        value: "Nil (Uniform Consistency)",
        sourceUrl: "https://brijrani.in/de-oiled-cake",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
    ],
    applications: [
      "Compound cattle feed pellets and dairy meal mashes",
      "Poultry grower and layer feed bulk formulation",
      "Fish and carp pond sinking feeds",
      "Swine and pig feed rations",
      "High-organic-matter compost and agricultural manure",
    ],
    industriesServed: [
      "Dairy Feed Manufacturers",
      "Poultry Feed Mills",
      "Aquaculture Farms",
      "Organic Fertilizer Manufacturers",
    ],
    producingRegions: ["Bihar", "West Bengal", "Chhattisgarh", "Uttar Pradesh"],
    storageGuidelines: [
      "Keep dry and well-ventilated; ensure protection from floor dampness.",
      "Stock rotation to avoid compaction in powder form.",
    ],
    packagingOptions: [
      "50kg Woven Polypropylene Bags (Pellets / Meal)",
      "Bulk Truckload",
    ],
    commercialApprovalStatus: "approved",
  },
  {
    slug: "mustard-doc",
    name: "Mustard De-Oiled Cake (DOC)",
    hindiName: "सरसों की खली (मस्टर्ड डीओसी)",
    category: "De-Oiled Cakes",
    headline: "33–37% Protein Meal Optimized for Dairy Cattle Rations & High Milk Yield",
    summary:
      "A nutrient-dense, solvent-extracted mustard meal offering high protein and sulfur-rich amino acids, proven to enhance ruminant lactation, butterfat yield, and soil nitrogen.",
    imageUrl: "/assets/mustard_de_oiled_cake.png",
    sourceUrl: "https://brijrani.in/de-oiled-mustard-cake",
    hsnCode: "23069012",
    listedGst: "5% (Source Listed — Pending Current Tax Verification)",
    physicalForm: "Powder & Pellets",
    specifications: [
      {
        parameter: "Crude Protein",
        value: "33–37%",
        sourceUrl: "https://brijrani.in/de-oiled-mustard-cake",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Crude Fibre",
        value: "Max 10%",
        sourceUrl: "https://brijrani.in/de-oiled-mustard-cake",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Moisture",
        value: "9–12%",
        sourceUrl: "https://brijrani.in/de-oiled-mustard-cake",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Sand & Silica",
        value: "Max 5%",
        sourceUrl: "https://brijrani.in/de-oiled-mustard-cake",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
    ],
    applications: [
      "Dairy cattle and buffalo feed pellets for enhanced lactation and fat content",
      "Ruminant protein meal mixes",
      "High-nitrogen soil conditioner and organic horticulture manure",
    ],
    industriesServed: [
      "Dairy Feed Plants & Co-operatives",
      "Livestock Feed Mills",
      "Agricultural Manure Blenders",
    ],
    producingRegions: ["Rajasthan", "Madhya Pradesh", "Uttar Pradesh", "Bihar"],
    storageGuidelines: [
      "Protect from rain and humidity to retain pellet hardness and avoid mold.",
      "Store on raised pallets inside dry warehouses.",
    ],
    packagingOptions: ["50kg Standard HDPE Bags (Powder or Pelletized Form)"],
    commercialApprovalStatus: "approved",
  },
  {
    slug: "soya-hipro",
    name: "Soya Hipro Meal",
    hindiName: "सोया हाईप्रो मील (50%+ प्रोटीन)",
    category: "Soya Products",
    headline: "Premium 50%+ Crude Protein De-Hulled Soybean Meal for Critical Formulations",
    summary:
      "De-hulled, solvent-extracted soybean meal engineered for minimum 50% protein and low fibre, delivering maximum digestible amino acids for commercial poultry and shrimp aquaculture.",
    imageUrl: "/assets/soybean_meal_pellets.png",
    sourceUrl: "https://brijrani.in/soya-product",
    hsnCode: "23040030",
    listedGst: "5% (Source Listed — Pending Current Tax Verification)",
    physicalForm: "Powder & Pellets",
    specifications: [
      {
        parameter: "Crude Protein",
        value: "Min 50%",
        sourceUrl: "https://brijrani.in/soya-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Crude Fibre",
        value: "Max 4%",
        sourceUrl: "https://brijrani.in/soya-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Moisture",
        value: "9–12%",
        sourceUrl: "https://brijrani.in/soya-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Sand & Silica",
        value: "Max 1%",
        sourceUrl: "https://brijrani.in/soya-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Urease Activity (U.A.)",
        value: "Max 0.3%",
        sourceUrl: "https://brijrani.in/soya-product",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
    ],
    applications: [
      "High-efficiency commercial broiler and layer poultry feeds",
      "Intensive fish and shrimp aquaculture diets",
      "Calf starter and high-yield lactating cattle formulas",
    ],
    industriesServed: [
      "Poultry Integrators",
      "Aquaculture Feed Companies",
      "Specialty Feed Pre-mixers",
    ],
    producingRegions: ["Madhya Pradesh", "Maharashtra", "Rajasthan"],
    storageGuidelines: [
      "Maintain strictly in climate-controlled or dry, aerated warehouse conditions.",
      "Check moisture regularly to maintain urease activity index within limits.",
    ],
    packagingOptions: [
      "50kg Brand New Laminated PP Bags",
      "1000kg Jumbo Bags (On Pre-Booking)",
    ],
    commercialApprovalStatus: "approved",
  },
  {
    slug: "soya-doc",
    name: "Soya DOC (De-Oiled Cake)",
    hindiName: "सोया डीओसी (46%+ प्रोटीन)",
    category: "Soya Products",
    headline: "Industry-Benchmark 46%+ Protein High-Digestibility Soybean Meal",
    summary:
      "Standard commercial de-oiled soybean meal guaranteeing minimum 46% protein, recognized across India as the golden benchmark for poultry, dairy, and livestock protein supplementation.",
    imageUrl: "/assets/soya_doc_flakes.jpg",
    sourceUrl: "https://brijrani.in/soya-doc",
    hsnCode: "23040010",
    listedGst: "5% (Source Listed — Pending Current Tax Verification)",
    physicalForm: "Powder / Flakes",
    specifications: [
      {
        parameter: "Crude Protein",
        value: "Min 46%",
        sourceUrl: "https://brijrani.in/soya-doc",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Crude Fibre",
        value: "Max 7%",
        sourceUrl: "https://brijrani.in/soya-doc",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Moisture",
        value: "9–12%",
        sourceUrl: "https://brijrani.in/soya-doc",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Urease Activity (U.A.)",
        value: "Max 0.3%",
        sourceUrl: "https://brijrani.in/soya-doc",
        sourceStatus: "verified-source",
        commercialApproval: "approved",
      },
      {
        parameter: "Sand & Silica",
        value: "Pending Verified Source Value",
        sourceUrl: "https://brijrani.in/soya-doc",
        sourceStatus: "needs-review",
        commercialApproval: "pending",
        notes:
          "Source website omits the sand/silica numerical ceiling for standard Soya DOC; flagged for review without guessing.",
      },
    ],
    applications: [
      "Universal protein base across broiler, layer, and breeder rations",
      "Concentrated dairy cattle mash and pellet manufacturing",
      "Freshwater aquaculture and commercial fish feed",
    ],
    industriesServed: [
      "Commercial Feed Manufacturers",
      "Poultry Farming Integrators",
      "Dairy Cooperative Feed Plants",
    ],
    producingRegions: ["Madhya Pradesh", "Maharashtra"],
    storageGuidelines: [
      "Store stacked on wooden dunnage in pest-free godowns.",
      "Shield from ambient moisture and seasonal rain splash.",
    ],
    packagingOptions: ["50kg Polypropylene Bags", "Bulk Lorry Dispatch"],
    commercialApprovalStatus: "approved",
    discrepancies: [
      "Sand/Silica parameter is incomplete on source page; kept as pending review.",
    ],
  },
];

export const SECONDARY_PRODUCTS = [
  {
    name: "Cotton De-Oiled Cake (Cotton DOC)",
    category: "Secondary Commodities",
    summary:
      "A supplementary protein-fibre cake utilized in specialized ruminant rations and buffalo feed formulations.",
    status: "Specification pending certified laboratory profile sign-off.",
  },
  {
    name: "Sunflower De-Oiled Cake (Sunflower DOC)",
    category: "Secondary Commodities",
    summary:
      "An alternative vegetable protein meal with valuable fibre balance for cattle and livestock mixes.",
    status: "Specification pending certified laboratory profile sign-off.",
  },
];
