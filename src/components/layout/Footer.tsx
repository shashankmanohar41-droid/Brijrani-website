import { Link } from "@tanstack/react-router";
import { 
  CorporateArrowRight, 
  DispatchMailIcon, 
  MandiLocationIcon, 
  PhoneDeskIcon, 
  CertifiedSealIcon 
} from "@/components/icons/AgroIcons";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-16 overflow-hidden rounded-t-[2.5rem] border-t-4 border-[#F28C28] bg-[#0D2214] px-5 pb-10 pt-16 text-white sm:rounded-t-[3.5rem] sm:px-8 sm:pb-16 sm:pt-24"
    >
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F28C28]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top banner / Callout */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              24/7 Bulk Procurement Active
            </div>
            <h2 className="display-font text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Build Reliable{" "}
              <span className="text-[#F28C28]">Supply Partnerships.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-medium text-slate-300 sm:text-base">
              Connect with Brijrani (Krishi Varsha) for high-protein meal cakes, cereal
              inputs, and verified laboratory parameters tailored to your animal feed
              manufacturing schedules across India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/for-buyer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F28C28] to-[#D96F12] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 sm:text-sm"
            >
              <span>Submit Buying Request</span>
              <CorporateArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/for-seller"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/20 sm:text-sm"
            >
              <span>Offer Commodity (Seller)</span>
            </Link>
          </div>
        </div>

        {/* 5-Column Master Directory Grid covering all remaining routes end to end */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {/* Col 1: Verified Commodities */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#F28C28]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F28C28]" />
              Commodities
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link
                  to="/products"
                  className="font-bold text-amber-300 transition-colors hover:text-white"
                >
                  → All Commodities Catalog
                </Link>
              </li>
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="text-slate-300 transition-colors hover:text-[#F28C28]"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Corporate & Leadership */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#F28C28]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F28C28]" />
              Corporate
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link
                  to="/vision-mission"
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/agriculture-network"
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Agriculture Network
                </Link>
              </li>
              <li>
                <Link
                  to="/directors"
                  className="font-bold text-emerald-300 transition-colors hover:text-white"
                >
                  Board of Directors
                </Link>
              </li>
              <li className="pl-2 border-l border-white/10">
                <Link
                  to="/directors/$slug"
                  params={{ slug: "rajesh-kumar-gupta" }}
                  className="text-slate-400 transition-colors hover:text-[#F28C28]"
                >
                  Mr. Rajesh Kumar Gupta (MD)
                </Link>
              </li>
              <li className="pl-2 border-l border-white/10">
                <Link
                  to="/directors/$slug"
                  params={{ slug: "suman-gupta" }}
                  className="text-slate-400 transition-colors hover:text-[#F28C28]"
                >
                  Mrs. Suman Gupta (CHRO)
                </Link>
              </li>
              <li className="pl-2 border-l border-white/10">
                <Link
                  to="/directors/$slug"
                  params={{ slug: "sumit-gupta" }}
                  className="text-slate-400 transition-colors hover:text-[#F28C28]"
                >
                  Mr. Sumit Gupta (CEO)
                </Link>
              </li>
              <li>
                <Link
                  to="/quality-policy"
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Quality Standards & Lab Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Trading Desks & Workflows */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#F28C28]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F28C28]" />
              Trading Desks
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li>
                <Link
                  to="/for-seller"
                  className="font-bold text-[#F28C28] transition-colors hover:text-white"
                >
                  Seller Portal (Offer Commodity)
                </Link>
              </li>
              <li>
                <Link
                  to="/for-buyer"
                  className="font-bold text-emerald-400 transition-colors hover:text-white"
                >
                  Buyer Portal (Procurement RFQ)
                </Link>
              </li>
              <li>
                <Link
                  to="/enquiry"
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Commercial Inquiry Desk
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Direct Procurement Desk
                </Link>
              </li>
            </ul>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                <CertifiedSealIcon className="h-3.5 w-3.5" />
                <span>Regional Lab Protocol</span>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                Partnered testing turnaround 2 to 48 hours for protein, moisture, & sand/silica.
              </p>
            </div>
          </div>

          {/* Col 4: Operations & Insights */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#F28C28]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F28C28]" />
              Media & Insights
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li>
                <Link
                  to="/gallery"
                  className="font-semibold text-slate-200 transition-colors hover:text-[#F28C28]"
                >
                  Operations & Fleet Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="font-semibold text-slate-200 transition-colors hover:text-[#F28C28]"
                >
                  Feed Industry Knowledge Hub
                </Link>
              </li>
              <li className="pl-2 border-l border-white/10">
                <Link
                  to="/blogs/$slug"
                  params={{ slug: "use-of-rice-bran-in-poultry-diets" }}
                  className="text-slate-400 transition-colors hover:text-[#F28C28]"
                >
                  Rice Bran in Poultry Diets
                </Link>
              </li>
              <li className="pl-2 border-l border-white/10">
                <Link
                  to="/blogs/$slug"
                  params={{ slug: "uses-of-de-oiled-cakes-as-manure" }}
                  className="text-slate-400 transition-colors hover:text-[#F28C28]"
                >
                  De-Oiled Cakes as Manure
                </Link>
              </li>
              <li className="pl-2 border-l border-white/10">
                <Link
                  to="/blogs/$slug"
                  params={{ slug: "value-of-rice-by-product-for-feed-industry" }}
                  className="text-slate-400 transition-colors hover:text-[#F28C28]"
                >
                  Rice By-Products for Feed
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Patna Corporate Hub */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#F28C28]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F28C28]" />
              Patna HQ
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MandiLocationIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F28C28]" />
                <span className="leading-snug">
                  {COMPANY_INFO.headquarters.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <PhoneDeskIcon className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="font-bold text-white transition-colors hover:text-[#F28C28]"
                >
                  {COMPANY_INFO.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <DispatchMailIcon className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="font-bold text-white transition-colors hover:text-[#F28C28]"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="pt-1">
                <a
                  href={COMPANY_INFO.headquarters.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F28C28] underline underline-offset-4 hover:text-white"
                >
                  <span>Locate on Google Maps</span>
                  <CorporateArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Provenance Strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
          <div>
            <p>
              © {new Date().getFullYear()} {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName}).
              All rights reserved.
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Build &amp; Maintained by{" "}
              <a
                href="https://webfloratechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#F28C28] underline underline-offset-2 transition-colors hover:text-white"
              >
                Web Flora Technologies
              </a>
            </p>
          </div>
          <p className="max-w-xl text-[11px] text-slate-400">
            Note: Managing Director brings 20+ years of agricultural trade experience; incorporated
            in 2022. All product parameters and GST classifications reproduce source-published
            values and are subject to commercial verification.
          </p>
        </div>
      </div>
    </footer>
  );
}
