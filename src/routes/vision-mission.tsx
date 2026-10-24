import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  CorporateArrowRight, 
  GrainEarIcon, 
  WeighbridgeScaleIcon, 
  HeavyTruckIcon, 
  LabFlaskIcon, 
  CertifiedSealIcon, 
  DispatchClockIcon 
} from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { COMPANY_INFO } from "@/data/company";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      {
        title: "Vision & Mission | Strategic Purpose - Brijrani (Krishi Varsha)",
      },
      {
        name: "description",
        content:
          "Explore the authentic vision and mission of Brijrani Agri Product Pvt. Ltd.—empowering Indian farmers while providing dependable raw materials to feed mills.",
      },
    ],
  }),
  component: VisionMissionPage,
});

function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Vision & Mission" }]}
        badgeText="Strategic Purpose & Principles"
        title="Balancing Fair Producer Value with"
        titleHighlight="Industrial Supply Discipline"
        description="Our mission is to establish a direct, transparent conduit connecting rural Indian agriculture with commercial animal nutrition—creating economic stability for farming communities and guaranteed quality for industrial feed manufacturers."
      />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Vision Card */}
          <div className="relative overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm transition-all hover:shadow-md sm:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-[#D96F12]">
              <GrainEarIcon className="h-7 w-7" />
            </div>
            <span className="mt-6 block text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
              Our Vision
            </span>
            <h2 className="mt-2 font-space text-2xl font-black text-[#174F2C] sm:text-3xl">
              Reliable, Reasonable & Timely Agro Raw Materials for India
            </h2>
            <p className="mt-4 font-inter text-base leading-relaxed text-[#4F5D55]">
              {COMPANY_INFO.vision}
            </p>
            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <CertifiedSealIcon className="h-4 w-4 text-[#F28C28]" />
                <span>Pan-India Feed Security & Nutritional Consistency</span>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm transition-all hover:shadow-md sm:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-[#174F2C]">
              <WeighbridgeScaleIcon className="h-7 w-7" />
            </div>
            <span className="mt-6 block text-xs font-black uppercase tracking-[0.16em] text-[#1F6B3A]">
              Our Mission
            </span>
            <h2 className="mt-2 font-space text-2xl font-black text-[#174F2C] sm:text-3xl">
              Fair Value for Primary Producers, Verified Inputs for Industry
            </h2>
            <p className="mt-4 font-inter text-base leading-relaxed text-[#4F5D55]">
              {COMPANY_INFO.mission}
            </p>
            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <CertifiedSealIcon className="h-4 w-4 text-[#1F6B3A]" />
                <span>Transparent Mandi Linkages & Verified Laboratory Parameters</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Value Creation */}
        <div className="mt-24">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
              Execution Framework
            </span>
            <h2 className="mt-2 font-space text-3xl font-black text-[#174F2C] sm:text-4xl">
              How We Put Our Purpose Into Daily Operation
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[#174F2C]">
                <GrainEarIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-space text-lg font-bold text-[#174F2C]">
                Value for Farmers & FPOs
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4F5D55] sm:text-sm">
                Transparent grading, clear mandi-linked payment mechanisms, and sustained
                offtake agreements that shield primary growers from localized distress sales.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-[#D96F12]">
                <HeavyTruckIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-space text-lg font-bold text-[#174F2C]">
                Accessibility at Right Time
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4F5D55] sm:text-sm">
                Positioning buffer stocks in key logistics corridors to meet seasonal surges in
                poultry, dairy, and aqua-feed manufacturing without production halts.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[#174F2C]">
                <LabFlaskIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-space text-lg font-bold text-[#174F2C]">
                Scientific Quality Assurance
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4F5D55] sm:text-sm">
                Rigorous regional laboratory testing for crude protein, moisture, urease activity,
                and acid insoluble ash to protect the nutritional formulation of buyers.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-[#D96F12]">
                <WeighbridgeScaleIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-space text-lg font-bold text-[#174F2C]">
                Commercial Discipline
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4F5D55] sm:text-sm">
                Honoring contract quantities and locked pricing through market cycles, turning
                transactional grain buying into enduring strategic enterprise partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Action Card */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm sm:flex-row sm:p-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Supply Chain Execution
            </span>
            <h3 className="mt-1 font-space text-2xl font-bold text-[#174F2C]">
              Discover Our Origin Sourcing & Logistics Footprint
            </h3>
            <p className="mt-2 text-sm text-[#4F5D55]">
              Learn how our sourcing corridors in Bihar, West Bengal, and Uttar Pradesh serve
              feed millers nationwide.
            </p>
          </div>
          <Link
            to="/agriculture-network"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#174F2C] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1f6b3a]"
          >
            <span>View Agriculture Network</span>
            <CorporateArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
