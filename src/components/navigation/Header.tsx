import { Link } from "@tanstack/react-router";
import { CorporateArrowRight, ModernMenuIcon, PhoneDeskIcon } from "@/components/icons/AgroIcons";
import { useEffect, useState } from "react";
import { Drawer } from "./Drawer";
import { COMPANY_INFO } from "@/data/company";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed left-0 top-0 z-50 w-full px-4 py-3.5 transition-all duration-300 sm:px-6 sm:py-5"
        aria-label="Main Navigation"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 px-4 py-2 shadow-lg backdrop-blur-xl transition-all duration-300 sm:px-6 sm:py-2.5 ${
            scrolled
              ? "bg-white/95 shadow-[0_15px_35px_rgba(23,79,44,0.12)]"
              : "bg-white/90"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="display-font flex items-center gap-2 text-2xl font-semibold tracking-tighter"
            aria-label="Brijrani Homepage"
          >
            <img
              alt="Brijrani Krishi Varsha Logo"
              width={140}
              height={45}
              className="h-8 w-auto object-contain mix-blend-multiply transition-all duration-300 hover:scale-105 sm:h-9 md:h-11"
              src="/assets/logo.png?v=2"
            />
          </Link>

          {/* Desktop Navigation Links (6 primary routes) */}
          <div className="hidden items-center gap-7 lg:flex">
            <Link
              to="/products"
              className="nav-link-animated text-sm font-bold text-slate-800 transition-colors hover:text-[#174F2C]"
            >
              Commodities
            </Link>
            <Link
              to="/about"
              className="nav-link-animated text-sm font-bold text-slate-800 transition-colors hover:text-[#174F2C]"
            >
              About
            </Link>
            <Link
              to="/agriculture-network"
              className="nav-link-animated text-sm font-bold text-slate-800 transition-colors hover:text-[#174F2C]"
            >
              Network
            </Link>
            <Link
              to="/quality-policy"
              className="nav-link-animated text-sm font-bold text-slate-800 transition-colors hover:text-[#174F2C]"
            >
              Quality
            </Link>
            <Link
              to="/for-seller"
              className="nav-link-animated text-sm font-bold text-slate-800 transition-colors hover:text-[#D96F12]"
            >
              For Seller
            </Link>
            <Link
              to="/for-buyer"
              className="nav-link-animated text-sm font-bold text-slate-800 transition-colors hover:text-[#1F6B3A]"
            >
              For Buyer
            </Link>
          </div>

          {/* Actions: Request Quote + Menu Drawer Trigger */}
          <div className="flex items-center gap-3">
            <Link
              to="/enquiry"
              className="group relative hidden overflow-hidden rounded-full bg-[#174F2C] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:scale-105 active:scale-95 sm:inline-flex sm:text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Request Quote</span>
                <CorporateArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#F28C28] to-[#D96F12] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>

            {/* Mobile Call Direct Button */}
            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="flex lg:hidden h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-emerald-700/25 bg-emerald-50 text-[#174F2C] shadow-sm transition-all duration-200 hover:bg-[#174F2C] hover:text-white active:scale-95"
              aria-label="Call Brijrani Direct Desk"
              title="Call Us Directly"
            >
              <PhoneDeskIcon className="h-4 w-4" />
            </a>

            <button
              onClick={() => setDrawerOpen(true)}
              className="group flex lg:hidden h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#174F2C] bg-[#174F2C] text-white shadow-sm transition-all duration-200 hover:bg-[#1F6B3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] active:scale-95"
              aria-label="Open Navigation Drawer"
              aria-expanded={drawerOpen}
            >
              <ModernMenuIcon className="h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
