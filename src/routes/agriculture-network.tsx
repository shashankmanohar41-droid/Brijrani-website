import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  CorporateArrowRight, 
  MandiLocationIcon, 
  VerifiedCheckIcon 
} from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { NETWORK_REGIONS, SUPPLY_CHAIN_PILLARS } from "@/data/network";
import { COMPANY_INFO } from "@/data/company";

export const Route = createFileRoute("/agriculture-network")({
  head: () => ({
    meta: [
      {
        title: "Agriculture Network & Sourcing Corridors - Brijrani (Krishi Varsha)",
      },
      {
        name: "description",
        content:
          "Explore Brijrani's agricultural commodity sourcing network across Bihar, West Bengal, and Uttar Pradesh, connecting 500+ farmers and 100+ FPOs with regional labs and logistics.",
      },
    ],
  }),
  component: AgricultureNetworkPage,
});

function AgricultureNetworkPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Agriculture Network" }]}
        badgeText="Pan-India Origination & Sourcing Network"
        title="Regional Sourcing Across"
        titleHighlight="Bihar, Bengal & Uttar Pradesh"
        description="Our supply chain integrates over 500+ registered farmers and merchants, 100+ FPOs, solvent extraction mills, accredited regional testing laboratories, and contracted fleet logistics to deliver consistent agro commodities nationwide."
      >
        <Link
          to="/for-seller"
          className="inline-flex items-center gap-2 rounded-full bg-[#174F2C] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1f6b3a]"
        >
          <span>Register as Sourcing Vendor</span>
          <CorporateArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/for-buyer"
          className="inline-flex items-center gap-2 rounded-full border border-[#174F2C]/30 bg-white px-6 py-3.5 text-sm font-bold text-[#174F2C] transition-all hover:border-[#F28C28] hover:text-[#D96F12]"
        >
          <span>Enterprise Feed Procurement</span>
        </Link>
      </PageHero>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Network Metrics Overview */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Primary Growers
            </span>
            <div className="mt-2 font-space text-3xl font-black text-[#1F6B3A]">
              {COMPANY_INFO.metrics.farmersAndMerchants}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Registered Farmers & Mandi Merchants
            </p>
          </div>

          <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Producer Groups
            </span>
            <div className="mt-2 font-space text-3xl font-black text-[#D96F12]">
              {COMPANY_INFO.metrics.fpoConnections}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              FPO Sourcing Access & Mandi Linkages
            </p>
          </div>

          <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Core Corridors
            </span>
            <div className="mt-2 font-space text-3xl font-black text-[#174F2C]">
              3 Key States
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Bihar, West Bengal & Uttar Pradesh
            </p>
          </div>

          <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Testing Turnaround
            </span>
            <div className="mt-2 font-space text-3xl font-black text-[#F28C28]">
              2–48 Hrs
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Certified Regional Lab Testing
            </p>
          </div>
        </div>

        {/* 4-Step Visual Supply Chain */}
        <div className="mt-20">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
              End-to-End Coordination
            </span>
            <h2 className="mt-2 font-space text-3xl font-black text-[#174F2C] sm:text-4xl">
              The Controlled Journey from Mandi to Industrial Plant
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[#4F5D55]">
              Illustrating the operational stages connecting grassroots agricultural production
              with modern animal feed manufacturing.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SUPPLY_CHAIN_PILLARS.map((p) => (
              <div
                key={p.step}
                className="relative flex flex-col justify-between rounded-3xl border border-[#DCEBDD] bg-white p-7 shadow-sm transition-all hover:border-[#1F6B3A] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-space text-2xl font-black text-[#D96F12]">
                      {p.step}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#174F2C]">
                      {p.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-5 font-space text-xl font-bold text-[#174F2C]">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-inter text-xs leading-relaxed text-[#4F5D55]">
                    {p.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                    <VerifiedCheckIcon className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Process Integrity Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Sourcing Regions Grid */}
        <div className="mt-24">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
              Regional Procurement Corridors
            </span>
            <h2 className="mt-1 font-space text-3xl font-black text-[#174F2C]">
              Established Sourcing Belts
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {NETWORK_REGIONS.map((reg) => (
              <div
                key={reg.state}
                className="rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <MandiLocationIcon className="h-5 w-5 text-[#F28C28]" />
                  <h3 className="font-space text-2xl font-black text-[#174F2C]">
                    {reg.state}
                  </h3>
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                  {reg.role}
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Commodities
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {reg.focusCommodities.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-[#EFF7F0] px-3 py-1 text-xs font-bold text-[#174F2C]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Mandi Clusters
                  </span>
                  <div className="mt-1 text-xs font-medium text-[#4F5D55]">
                    {reg.keyMandiHubs.join(" · ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Clarification Note */}
        <div className="mt-16 rounded-2xl border border-amber-200 bg-amber-50/60 p-6 text-xs text-amber-900">
          <div className="flex items-start gap-3">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div className="leading-relaxed">
              <strong className="block text-sm font-bold text-amber-950 mb-1">
                Transparency & Governance Notice
              </strong>
              The supply chain illustrated above depicts Brijrani&apos;s contractual and commercial
              coordination with primary farmers, merchants, FPOs, warehouse service providers, and
              accredited regional laboratories. Brijrani manages quality assurance and logistics
              scheduling across this network without claiming sole ownership of every third-party
              mandi facility, silo, or vehicle in the corridor.
            </div>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#DCEBDD] bg-[#EFF7F0] p-8 sm:flex-row sm:p-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F6B3A]">
              Get In Touch With Regional Procurement
            </span>
            <h3 className="mt-1 font-space text-2xl font-black text-[#174F2C]">
              Looking to Sell Harvest or Purchase Feed Raw Materials?
            </h3>
            <p className="mt-2 text-sm text-[#4F5D55]">
              Our commercial desks in Patna coordinate origin sourcing and nationwide dispatch daily.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/for-seller"
              className="rounded-full bg-[#F28C28] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#d96f12]"
            >
              Seller Sourcing Form
            </Link>
            <Link
              to="/for-buyer"
              className="rounded-full bg-[#174F2C] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#1f6b3a]"
            >
              Buyer Procurement Form
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
