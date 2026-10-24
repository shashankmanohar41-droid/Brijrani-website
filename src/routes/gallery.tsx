import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ModernCloseIcon } from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: "Operations & Sourcing Gallery - Brijrani (Krishi Varsha)",
      },
      {
        name: "description",
        content:
          "Visualizing Brijrani's agricultural value chain: grain harvest, storage silos, transport fleet, feed milling co-products, and laboratory quality testing.",
      },
    ],
  }),
  component: GalleryPage,
});

interface GalleryItem {
  id: string;
  title: string;
  category: "Commodities" | "Infrastructure" | "Logistics" | "Testing";
  imageUrl: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Indian Grain Harvest & Mandi Origination",
    category: "Commodities",
    imageUrl: "/assets/hero_agriculture.png",
    description: "Primary harvest collection across rural agricultural belts in Bihar and Eastern India.",
  },
  {
    id: "g2",
    title: "Modern Aerated Storage Silos",
    category: "Infrastructure",
    imageUrl: "/assets/grain_silo_infrastructure.png",
    description: "Temperature-monitored bulk grain storage designed for moisture protection and pest control.",
  },
  {
    id: "g3",
    title: "Pan-India Dedicated Logistics Fleet",
    category: "Logistics",
    imageUrl: "/assets/logistics_fleet_trucks.png",
    description: "Contracted heavy-vehicle transport fleet coordinating timed deliveries to commercial feed plants.",
  },
  {
    id: "g4",
    title: "De-Oiled Rice Bran (DORB) Production",
    category: "Commodities",
    imageUrl: "/assets/rice_bran_deoiled_cake.png",
    description: "Solvent-extracted rice bran pellets ready for bulk dispatch to dairy and aquaculture millers.",
  },
  {
    id: "g5",
    title: "Regional QA & Laboratory Analysis",
    category: "Testing",
    imageUrl: "/assets/quality_lab_testing.png",
    description: "Certified laboratory technicians testing protein, moisture, and silica parameters.",
  },
  {
    id: "g6",
    title: "Golden Grain Yellow Maize",
    category: "Commodities",
    imageUrl: "/assets/yellow_maize_grains.png",
    description: "Sun-dried yellow corn kernels graded for low moisture and minimal broken kernel percentage.",
  },
  {
    id: "g7",
    title: "Soybean Meal & High-Protein Pellets",
    category: "Commodities",
    imageUrl: "/assets/soybean_meal_pellets.png",
    description: "46% to 50%+ crude protein meal processed for high amino acid digestibility.",
  },
  {
    id: "g8",
    title: "Mustard De-Oiled Cake (DOC)",
    category: "Commodities",
    imageUrl: "/assets/mustard_de_oiled_cake.png",
    description: "Nutrient-dense ruminant meal supporting butterfat yield in commercial dairy herds.",
  },
  {
    id: "g9",
    title: "Clean Graded Broken Rice (Khudi)",
    category: "Commodities",
    imageUrl: "/assets/broken_rice_feed.png",
    description: "Low-fibre high-starch grain fragments for poultry and industrial starch manufacturing.",
  },
];

const CATEGORIES = ["All", "Commodities", "Infrastructure", "Logistics", "Testing"] as const;

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Gallery" }]}
        badgeText="Visualizing the Enterprise Value Chain"
        title="Operations, Commodities &"
        titleHighlight="Supply Infrastructure"
        description="From harvest fields and solvent extraction mills to automated loading bays and regional testing laboratories—a visual look at the Brijrani agricultural value chain."
      />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 sm:text-sm ${
                  isSelected
                    ? "bg-[#174F2C] text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-[#1F6B3A] hover:bg-[#EFF7F0]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#174F2C] shadow-lg">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </span>
                </div>
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#174F2C] shadow-sm backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-space text-lg font-bold text-[#174F2C]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#4F5D55] line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center text-xs text-slate-500">
          * Operations gallery depicts commodity product categories and representative supply-chain
          staging facilities coordinated across Brijrani&apos;s pan-India procurement network.
        </div>
      </main>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-[#030D07] text-white shadow-2xl"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-all hover:bg-[#F28C28]"
            >
              <ModernCloseIcon className="h-5 w-5" />
            </button>
            <img
              src={activeImage.imageUrl}
              alt={activeImage.title}
              className="max-h-[75vh] w-full object-contain"
            />
            <div className="p-6">
              <span className="text-xs font-bold uppercase text-[#F28C28]">
                {activeImage.category}
              </span>
              <h3 className="mt-1 font-space text-2xl font-bold text-white">
                {activeImage.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
