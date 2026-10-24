import { useState, useId } from "react";
import { 
  HeavyTruckIcon, 
  CalculatorTradeIcon, 
  CorporateArrowRight, 
  CertifiedSealIcon, 
  VerifiedCheckIcon 
} from "@/components/icons/AgroIcons";
import { PRODUCTS } from "@/data/products";

const DESTINATIONS = [
  { state: "Bihar (Patna / Muzaffarpur / Saran)", days: "1–2 Days", zone: "Local Origin" },
  { state: "West Bengal (Kolkata / Siliguri / Bardhaman)", days: "2–3 Days", zone: "Eastern Corridor" },
  { state: "Uttar Pradesh (Gorakhpur / Varanasi / Bareilly)", days: "2–3 Days", zone: "Northern Corridor" },
  { state: "Haryana & Punjab (Karnal / Khanna / Ludhiana)", days: "3–4 Days", zone: "Poultry Belt" },
  { state: "Andhra Pradesh & Telangana (Hyderabad / Godavari)", days: "4–5 Days", zone: "Aqua & Poultry Hub" },
  { state: "Maharashtra (Pune / Nashik / Nagpur)", days: "3–4 Days", zone: "Western Hub" },
  { state: "Madhya Pradesh (Indore / Bhopal / Jabalpur)", days: "2–3 Days", zone: "Central Hub" },
  { state: "Rajasthan (Jaipur / Alwar / Kota)", days: "3–4 Days", zone: "Mustard Belt" },
];

export function TruckloadEstimator() {
  const [selectedSlug, setSelectedSlug] = useState(PRODUCTS[0]?.slug || "dorb");
  const [tonnage, setTonnage] = useState<number>(30);
  const [packaging, setPackaging] = useState<"bags" | "loose">("bags");
  const [destinationIdx, setDestinationIdx] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const commoditySelectId = useId();
  const tonnageRangeId = useId();
  const destinationSelectId = useId();

  const selectedProduct = PRODUCTS.find((p) => p.slug === selectedSlug) || PRODUCTS[0];
  const dest = DESTINATIONS[destinationIdx];

  // Trucks calculation: Standard Indian multi-axle tippers carry 25 MT or 30-35 MT
  const truckCount = Math.max(1, Math.ceil(tonnage / 25));
  const totalBags = packaging === "bags" ? (tonnage * 1000) / 50 : 0;

  const whatsappMessage = encodeURIComponent(
    `Hello Brijrani Trading Desk,\nI would like to request an official commercial quote:\n• Commodity: ${selectedProduct.name} (${selectedProduct.physicalForm})\n• Volume: ${tonnage} Metric Tonnes (~${truckCount} FTL Trucks)\n• Packaging: ${packaging === "bags" ? "50kg HDPE Poly-Lined Bags" : "Loose Bulk Tipper"}\n• Destination: ${dest.state}\n• Delivery Window: Immediate dispatch\nPlease share today's mandi parity price and loading availability.`
  );

  return (
    <div className="rounded-3xl border border-[#DCEBDD] bg-gradient-to-br from-white via-[#FFFCF6] to-[#EFF7F0] p-6 shadow-xl sm:p-10">
      <div className="flex flex-col justify-between gap-4 border-b border-[#DCEBDD] pb-6 md:flex-row md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D96F12]/30 bg-[#F28C28]/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#D96F12]">
            <CalculatorTradeIcon className="h-3.5 w-3.5" />
            Commercial Dispatch & Logistics Planner
          </div>
          <h3 className="mt-2 font-space text-2xl font-black text-[#174F2C] sm:text-3xl">
            Truckload & Freight Dispatch Estimator
          </h3>
          <p className="mt-1 text-sm text-[#4F5D55]">
            Simulate your institutional feed mill procurement lot, calculate full truckload (FTL) capacity, and generate an instant commercial requisition.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2.5">
          <CertifiedSealIcon className="h-5 w-5 text-emerald-700 shrink-0" />
          <div className="text-xs">
            <div className="font-bold text-emerald-900">Weighbridge Guaranteed</div>
            <div className="text-[11px] text-emerald-700">Origin Computerized Slip + NIR Report</div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Controls Column */}
        <div className="space-y-6 lg:col-span-7">
          {/* Commodity Selector */}
          <div>
            <label htmlFor={commoditySelectId} className="block text-xs font-black uppercase tracking-wider text-[#174F2C]">
              Select Feed Commodity / Raw Material
            </label>
            <select
              id={commoditySelectId}
              value={selectedSlug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/20"
            >
              {PRODUCTS.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} ({p.category}) — HSN: {p.hsnCode}
                </option>
              ))}
            </select>
          </div>

          {/* Volume Slider & Input */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor={tonnageRangeId} className="text-xs font-black uppercase tracking-wider text-[#174F2C]">
                Requisition Volume (Metric Tonnes)
              </label>
              <span className="font-space text-xl font-black text-[#D96F12]">
                {tonnage} MT
              </span>
            </div>
            <input
              id={tonnageRangeId}
              type="range"
              min="10"
              max="250"
              step="5"
              value={tonnage}
              onChange={(e) => setTonnage(Number(e.target.value))}
              className="mt-3 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#174F2C]"
            />
            <div className="mt-2 flex justify-between text-[11px] font-bold text-slate-400">
              <span>10 MT (1 Light Tipper)</span>
              <span>50 MT (2 FTL Trailers)</span>
              <span>100 MT</span>
              <span>250 MT (Multi-Lot Contract)</span>
            </div>
          </div>

          {/* Packaging Option */}
          <div>
            <span className="block text-xs font-black uppercase tracking-wider text-[#174F2C]">
              Packaging Specification
            </span>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPackaging("bags")}
                className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-xs font-bold transition ${
                  packaging === "bags"
                    ? "border-[#174F2C] bg-[#174F2C] text-white shadow-md"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                <span>50kg New HDPE Poly Bags</span>
              </button>
              <button
                type="button"
                onClick={() => setPackaging("loose")}
                className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-xs font-bold transition ${
                  packaging === "loose"
                    ? "border-[#174F2C] bg-[#174F2C] text-white shadow-md"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                <span>Loose Bulk Tipper Dispatch</span>
              </button>
            </div>
          </div>

          {/* Delivery Destination */}
          <div>
            <label htmlFor={destinationSelectId} className="block text-xs font-black uppercase tracking-wider text-[#174F2C]">
              Receiving Plant / Godown Destination
            </label>
            <select
              id={destinationSelectId}
              value={destinationIdx}
              onChange={(e) => setDestinationIdx(Number(e.target.value))}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/20"
            >
              {DESTINATIONS.map((d, i) => (
                <option key={i} value={i}>
                  {d.state} — {d.zone}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Live Calculation Output Card */}
        <div className="rounded-2xl border-2 border-[#174F2C] bg-white p-6 shadow-lg lg:col-span-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#D96F12]">
              Dispatch Summary
            </span>
            <span className="font-mono text-xs font-bold text-slate-500">
              {dest.days} Transit
            </span>
          </div>

          <div className="mt-5 space-y-4 font-inter text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Selected Commodity</span>
              <span className="font-bold text-slate-900 text-right">{selectedProduct.name}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500">Total Net Weight</span>
              <span className="font-space font-black text-slate-900 text-sm">{tonnage} MT ({tonnage * 1000} kg)</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500">Truckload Requirement</span>
              <span className="inline-flex items-center gap-1 font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                <HeavyTruckIcon className="h-3.5 w-3.5" />
                {truckCount} x 25-30 MT FTL Trucks
              </span>
            </div>

            {packaging === "bags" && (
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Total 50kg Bags</span>
                <span className="font-bold text-slate-900">{totalBags.toLocaleString("en-IN")} Bags</span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-slate-500">Destination Corridor</span>
              <span className="font-bold text-slate-900 text-right">{dest.state}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500">Quality Testing Protocol</span>
              <span className="font-bold text-emerald-700">Digital NIR Moisture + Protein Verified</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500">Commercial Invoicing</span>
              <span className="font-bold text-slate-900">GST E-Way Bill + Dharam Kanta Slip</span>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-5 space-y-3">
            <a
              href={`https://wa.me/919334399829?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#174F2C] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-[#1f6b3a] active:scale-95"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Send Requisition via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                const text = `Brijrani Bulk Requisition:\nCommodity: ${selectedProduct.name}\nQuantity: ${tonnage} MT (${truckCount} Trucks)\nDestination: ${dest.state}\nPackaging: ${packaging === "bags" ? "50kg Bags" : "Bulk Loose"}`;
                navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
            >
              {copied ? (
                <>
                  <VerifiedCheckIcon className="h-4 w-4 text-emerald-600" />
                  <span className="text-emerald-700">Requisition Details Copied!</span>
                </>
              ) : (
                <>
                  <span>Copy Requisition Text</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
