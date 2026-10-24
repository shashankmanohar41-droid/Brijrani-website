import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from "react";
import { 
  CorporateArrowRight, 
  CertifiedSealIcon, 
  ContractSpecIcon 
} from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { PRODUCTS, ProductCategory, SECONDARY_PRODUCTS, type Product } from "@/data/products";
import { LabReportModal } from "@/components/products/LabReportModal";
import { TruckloadEstimator } from "@/components/calculator/TruckloadEstimator";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      {
        title: "Agricultural Commodities Catalog | Feed Raw Materials - Brijrani",
      },
      {
        name: "description",
        content:
          "Browse Brijrani's verified feed commodity catalog: Rice Bran, Broken Rice, Wheat Grain, Yellow Maize, DORB, Mustard DOC, Soya Hipro, and Soya DOC with exact lab specifications.",
      },
    ],
  }),
  component: ProductsCatalogPage,
});

const CATEGORIES: Array<"All" | ProductCategory> = [
  "All",
  "Rice Products",
  "Grain Products",
  "De-Oiled Cakes",
  "Soya Products",
];

function ProductsCatalogPage() {
  const [selectedCat, setSelectedCat] = useState<"All" | ProductCategory>("All");
  const [activeLabProduct, setActiveLabProduct] = useState<Product | null>(null);

  const filtered =
    selectedCat === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCat);

  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Products" }]}
        badgeText="Verified Agro Commodities Portfolio"
        title="Scientifically Sourced Commodities for"
        titleHighlight="Industrial Animal Feed Millers"
        description="Explore our portfolio of high-protein meal cakes, energy cereals, and milling by-products. Every commodity profile publishes exact laboratory limits, HSN codes, and verified application guidelines."
      >
        <Link
          to="/for-buyer"
          className="inline-flex items-center gap-2 rounded-full bg-[#174F2C] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1f6b3a]"
        >
          <span>Submit Buying Requirement</span>
          <CorporateArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/for-seller"
          className="inline-flex items-center gap-2 rounded-full border border-[#174F2C]/30 bg-white px-6 py-3.5 text-sm font-bold text-[#174F2C] transition-all hover:border-[#F28C28] hover:text-[#D96F12]"
        >
          <span>Offer Commodity to Brijrani</span>
        </Link>
      </PageHero>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Category Filters Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 sm:text-sm ${
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

        {/* Product Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((prod) => (
            <div
              key={prod.slug}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1F6B3A] hover:shadow-xl"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#174F2C] shadow-sm backdrop-blur-md">
                      {prod.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                      HSN: {prod.hsnCode}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-space text-2xl font-black text-[#174F2C]">
                    {prod.name}
                  </h3>
                  {prod.hindiName && (
                    <div className="mt-0.5 text-xs font-medium text-slate-400">
                      {prod.hindiName}
                    </div>
                  )}

                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-[#4F5D55]">
                    {prod.summary}
                  </p>

                  {/* Highlight Specs */}
                  <div className="mt-5 rounded-2xl border border-slate-100 bg-[#EFF7F0]/40 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F6B3A]">
                        Verified Parameters
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveLabProduct(prod)}
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-[#D96F12] hover:text-[#174F2C]"
                      >
                        <ContractSpecIcon className="h-3 w-3" />
                        <span>View Lab COA</span>
                      </button>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-xs font-medium text-slate-700">
                      {prod.specifications.slice(0, 3).map((s, idx) => (
                        <li key={idx} className="flex justify-between">
                          <span className="text-slate-500">{s.parameter}:</span>
                          <span className="font-bold text-[#174F2C]">{s.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary Applications preview */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {prod.industriesServed.slice(0, 3).map((ind, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="space-y-2 border-t border-slate-100 p-6 pt-4">
                <Link
                  to="/products/$slug"
                  params={{ slug: prod.slug }}
                  className="group flex w-full items-center justify-between rounded-2xl bg-[#174F2C] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#F28C28]"
                >
                  <span>Detailed Specifications & RFQ</span>
                  <CorporateArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveLabProduct(prod)}
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2 text-xs font-bold text-slate-600 transition hover:border-[#174F2C] hover:text-[#174F2C]"
                >
                  <CertifiedSealIcon className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Inspect Batch Quality Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Truckload & Dispatch Estimator Tool */}
        <div className="mt-20">
          <TruckloadEstimator />
        </div>

        {/* Lab Report Modal */}
        <LabReportModal
          product={activeLabProduct}
          isOpen={!!activeLabProduct}
          onClose={() => setActiveLabProduct(null)}
        />

        {/* Secondary Catalog (Cotton DOC & Sunflower DOC) */}
        <div className="mt-20 rounded-3xl border border-amber-200 bg-amber-50/50 p-8 sm:p-10">
          <div className="flex items-start gap-3">
            <svg className="mt-1 h-5 w-5 shrink-0 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <div>
              <h3 className="font-space text-xl font-bold text-amber-950">
                Secondary & Seasonal Commodity Listings
              </h3>
              <p className="mt-1 text-xs text-amber-800 leading-relaxed">
                The following commodities are traded subject to regional season and origin crop
                cycles. In accordance with Brijrani&apos;s data verification standards, technical
                specification tables will be published once laboratory parameters are formally
                signed off.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SECONDARY_PRODUCTS.map((sp, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-amber-200/80 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-space text-base font-bold text-slate-900">
                    {sp.name}
                  </h4>
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-800">
                    {sp.category}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600">{sp.summary}</p>
                <div className="mt-3 text-[11px] font-semibold text-amber-700">
                  Status: {sp.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#174F2C] bg-[#174F2C] p-8 text-white sm:flex-row sm:p-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Contractual Assurance
            </span>
            <h3 className="mt-1 font-space text-2xl font-black sm:text-3xl">
              Require Custom Sizing, Granulation, or Moisture Limits?
            </h3>
            <p className="mt-2 text-sm text-slate-200">
              We coordinate tailored origin processing and certified pre-shipment laboratory testing
              for large industrial bulk orders.
            </p>
          </div>
          <Link
            to="/for-buyer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F28C28] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#d96f12]"
          >
            <span>Request Custom Contract</span>
            <CorporateArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
