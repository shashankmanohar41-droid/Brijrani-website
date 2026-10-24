import { Link } from "@tanstack/react-router";
import { CorporateArrowRight, ModernMenuIcon } from "@/components/icons/AgroIcons";
import { useEffect, useState } from "react";
import { Drawer } from "./Drawer";

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
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 px-5 py-3 shadow-lg backdrop-blur-xl transition-all duration-300 sm:px-6 sm:py-3.5 ${
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
              width={160}
              height={60}
              className="h-10 w-auto object-contain mix-blend-multiply transition-all duration-300 hover:scale-105 sm:h-12 md:h-14"
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

            <button
              onClick={() => setDrawerOpen(true)}
              className="group flex items-center gap-2.5 rounded-full border border-[#174F2C] bg-[#174F2C] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#F28C28] focus-visible:ring-2 focus-visible:ring-[#F28C28] active:scale-95"
              aria-label="Open Navigation Drawer"
              aria-expanded={drawerOpen}
            >
              <span className="font-extrabold tracking-widest text-amber-300 transition-colors group-hover:text-white">
                MENU
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white transition-all group-hover:bg-white/20">
                <ModernMenuIcon className="h-3.5 w-3.5 text-amber-300 transition-transform duration-300 group-hover:rotate-90 group-hover:text-white" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
