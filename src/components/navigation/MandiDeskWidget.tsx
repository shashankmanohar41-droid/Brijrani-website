import { useState } from "react";
import { ModernCloseIcon, CertifiedSealIcon } from "@/components/icons/AgroIcons";

const MANDI_RATES = [
  { commodity: "Yellow Maize (Makka)", mandi: "Gulabbagh, Bihar", range: "₹2,180 – ₹2,280 / Qtl", change: "+1.2%" },
  { commodity: "Soya DOC (46% Protein)", mandi: "Indore, MP", range: "₹39,500 – ₹41,000 / MT", change: "+0.8%" },
  { commodity: "Mustard DOC (Sarson)", mandi: "Alwar, Rajasthan", range: "₹24,200 – ₹25,500 / MT", change: "-0.5%" },
  { commodity: "De-Oiled Rice Bran (DORB)", mandi: "Chhapra / Saran, Bihar", range: "₹14,800 – ₹15,600 / MT", change: "+1.5%" },
  { commodity: "Broken Rice (100% Khudi)", mandi: "Purnea / WB Border", range: "₹2,150 – ₹2,300 / Qtl", change: "Steady" },
  { commodity: "Feed Wheat Grain", mandi: "Khanna / Bareilly", range: "₹2,450 – ₹2,550 / Qtl", change: "+0.4%" },
];

export function MandiDeskWidget() {
  const [ratesOpen, setRatesOpen] = useState(false);

  return (
    <>
      {/* Floating Widget Container */}
      <div className="fixed bottom-6 right-6 z-[80] flex flex-col items-end gap-3 font-inter">
        {/* Mandi Rate Sheet Popup */}
        {ratesOpen && (
          <div className="mb-2 w-[92vw] max-w-sm rounded-3xl border border-[#DCEBDD] bg-[#030D07]/95 p-5 text-white shadow-2xl backdrop-blur-2xl transition-all duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                  Daily Mandi Parity Rates
                </span>
              </div>
              <button
                onClick={() => setRatesOpen(false)}
                className="rounded-full bg-white/10 p-1.5 text-slate-400 hover:bg-white/20 hover:text-white"
                aria-label="Close Mandi Rates"
              >
                <ModernCloseIcon className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-2 text-[11px] text-slate-300">
              Indicative ex-mill & F.O.R. dispatch benchmark ranges across key sourcing mandis for commercial FTL truckloads:
            </p>

            <div className="mt-3 divide-y divide-white/10 text-xs">
              {MANDI_RATES.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">{item.commodity}</div>
                    <div className="text-[10px] text-slate-400">{item.mandi}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-space font-black text-amber-300">{item.range}</div>
                    <div className="text-[10px] text-emerald-400">{item.change}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-2.5 flex items-center gap-2 text-[10px] text-slate-300">
              <CertifiedSealIcon className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Contracts sealed against origin weighbridge slip & batch NIR lab analysis report.</span>
            </div>

            <a
              href="https://wa.me/919334399829?text=Hello%20Brijrani%20Commercial%20Desk%2C%20please%20quote%20today's%20firm%20dispatch%20rate%20for%20my%20delivery%20plant."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F28C28] py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg transition hover:bg-[#d96f12]"
            >
              <span>Lock Today&apos;s Mandi Rate</span>
            </a>
          </div>
        )}

        {/* Buttons Row */}
        <div className="flex items-center gap-2.5">
          {/* Toggle Mandi Rates Button */}
          <button
            onClick={() => setRatesOpen(!ratesOpen)}
            className="group flex items-center gap-2 rounded-full border border-slate-300 bg-white/95 px-4 py-3 text-xs font-bold text-slate-800 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:shadow-2xl active:scale-95 sm:text-sm"
          >
            <svg className="h-4 w-4 text-[#D96F12]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
            <span className="hidden sm:inline">Mandi Rates</span>
            <svg className={`h-4 w-4 text-slate-400 transition-transform ${ratesOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>

          {/* WhatsApp Action Button */}
          <a
            href="https://wa.me/919334399829?text=Hello%20Brijrani%20Trading%20Desk%2C%20I%20want%20to%20inquire%20about%20bulk%20feed%20commodity%20procurement."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full bg-[#174F2C] px-5 py-3 text-xs font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#1f6b3a] hover:shadow-[0_10px_25px_rgba(23,79,44,0.4)] active:scale-95 sm:text-sm"
            aria-label="Direct WhatsApp Procurement Desk"
          >
            <div className="relative">
              {/* Clean WhatsApp / Call SVG */}
              <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
            </div>
            <span>Trading Desk</span>
            <span className="hidden rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-mono font-medium text-amber-200 md:inline">
              +91 93343 99829
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
