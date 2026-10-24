import { Link } from "@tanstack/react-router";
import { 
  CorporateArrowRight, 
  ModernCloseIcon, 
  PhoneDeskIcon, 
  DispatchMailIcon 
} from "@/components/icons/AgroIcons";
import { useEffect } from "react";
import { COMPANY_INFO } from "@/data/company";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const MODULES = [
  {
    number: "01",
    eyebrow: "Verified Catalog",
    title: "Commodities & Specs",
    href: "/products",
  },
  {
    number: "02",
    eyebrow: "Our Heritage",
    title: "Company Story & Journey",
    href: "/about",
  },
  {
    number: "03",
    eyebrow: "Strategic Purpose",
    title: "Vision & Mission",
    href: "/vision-mission",
  },
  {
    number: "04",
    eyebrow: "Origin Corridors",
    title: "Agriculture Network",
    href: "/agriculture-network",
  },
  {
    number: "05",
    eyebrow: "Executive Leadership",
    title: "Board of Directors",
    href: "/directors",
  },
  {
    number: "06",
    eyebrow: "Testing Protocols",
    title: "Quality Standards",
    href: "/quality-policy",
  },
  {
    number: "07",
    eyebrow: "Mandis & Farmers",
    title: "Seller Portal (Supply Offer)",
    href: "/for-seller",
  },
  {
    number: "08",
    eyebrow: "Feed Millers & Integrators",
    title: "Buyer Portal (Procure)",
    href: "/for-buyer",
  },
  {
    number: "09",
    eyebrow: "Quick Sourcing Desk",
    title: "Enquiry & Sample Request",
    href: "/enquiry",
  },
  {
    number: "10",
    eyebrow: "Enterprise Showcase",
    title: "Operations Gallery",
    href: "/gallery",
  },
  {
    number: "11",
    eyebrow: "Industry Insights",
    title: "Knowledge & Articles",
    href: "/blogs",
  },
  {
    number: "12",
    eyebrow: "Patna Corporate Hub",
    title: "Contact & Location",
    href: "/contact",
  },
];

export function Drawer({ open, onClose }: DrawerProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[90] bg-slate-950/90 backdrop-blur-2xl transition-opacity duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-out Drawer Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main Navigation Menu"
        className={`fixed inset-y-0 right-0 z-[100] flex h-screen w-full max-w-xl flex-col justify-between overflow-x-hidden overflow-y-auto border-l border-white/15 bg-[#030D07] p-5 text-white shadow-[0_0_80px_rgba(0,0,0,0.9)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-8 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Glow ambient background orbs */}
        <div className="pointer-events-none absolute -right-36 -top-36 h-[36rem] w-[36rem] rounded-full bg-emerald-500/20 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[32rem] w-[32rem] rounded-full bg-[#F28C28]/15 blur-[180px]" />

        <div className="relative z-10 space-y-5">
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Link
              to="/"
              onClick={onClose}
              className="group flex items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-md transition-all duration-300 sm:px-5 sm:py-2.5"
              aria-label="Brijrani Home"
            >
              <img
                alt="Brijrani Krishi Varsha Logo"
                width={130}
                height={45}
                className="h-9 w-auto object-contain mix-blend-multiply transition-transform group-hover:scale-105 sm:h-11"
                src="/assets/logo.png?v=2"
              />
            </Link>

            <button
              onClick={onClose}
              className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:border-[#F28C28] hover:bg-[#F28C28] active:scale-95"
              aria-label="Close Navigation Menu"
            >
              <span className="font-bold tracking-wider">CLOSE</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white transition-all group-hover:bg-white/30">
                <ModernCloseIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-90" />
              </span>
            </button>
          </div>

          {/* Directory Meta Tag - wrap safely on narrow screens */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 px-0.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F28C28]/35 bg-[#F28C28]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F28C28]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F28C28]" />
              Enterprise Directory
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              12 Portals & Modules
            </span>
          </div>

          {/* Module Links */}
          <div className="space-y-2">
            {MODULES.map((m) => (
              <Link
                key={m.number}
                to={m.href}
                onClick={onClose}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-3.5 transition-all duration-200 hover:border-[#F28C28]/50 hover:bg-white/[0.08] active:scale-[0.99]"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-space text-sm sm:text-base font-bold text-[#F28C28]/80 transition-colors group-hover:text-[#F28C28] w-6 shrink-0">
                    {m.number}
                  </span>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-400">
                      {m.eyebrow}
                    </span>
                    <span className="text-sm sm:text-base font-bold tracking-tight text-white transition-colors group-hover:text-amber-200">
                      {m.title}
                    </span>
                  </div>
                </div>
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition-all duration-200 group-hover:translate-x-1 group-hover:border-[#F28C28] group-hover:bg-[#F28C28] group-hover:text-white shadow-sm">
                  <CorporateArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer in Drawer */}
        <div className="relative z-10 mt-8 space-y-4 border-t border-white/15 bg-[#030D07]/95 pt-6 backdrop-blur-2xl">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 ring-4 ring-emerald-400/20" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400">
                24/7 Bulk Procurement Active
              </span>
            </div>
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-300 transition-colors hover:text-[#F28C28]"
            >
              <DispatchMailIcon className="h-3.5 w-3.5" />
              {COMPANY_INFO.contact.email}
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              to="/enquiry"
              onClick={onClose}
              className="group flex h-12 sm:h-13 flex-1 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#F28C28] via-[#E07A18] to-[#D96F12] px-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_10px_28px_rgba(242,140,40,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request a Bulk Quote</span>
              <CorporateArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300"
              title="Call Direct Desk"
            >
              <PhoneDeskIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
