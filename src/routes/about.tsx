import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  CorporateArrowRight, 
  VerifiedCheckIcon, 
  CertifiedSealIcon, 
  HeavyTruckIcon 
} from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { COMPANY_INFO } from "@/data/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us | Our Story & Heritage - Brijrani (Krishi Varsha)",
      },
      {
        name: "description",
        content:
          "Discover Brijrani's journey from Chhapra grain trading to a nationwide agricultural commodity network connecting 500+ farmers and feed manufacturers.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "About Us" }]}
        badgeText="Our Heritage & Purpose"
        title="Connecting Indian Agriculture with"
        titleHighlight="Modern Animal Nutrition"
        description="Brijrani Agri Product Pvt. Ltd. (Krishi Varsha) bridges the gap between rural agricultural producers and industrial feed manufacturing through origin-backed procurement, regional laboratory verification, and dependable logistics."
      >
        <Link
          to="/agriculture-network"
          className="inline-flex items-center gap-2 rounded-full bg-[#174F2C] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1f6b3a]"
        >
          <span>Explore Sourcing Network</span>
          <CorporateArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/for-buyer"
          className="inline-flex items-center gap-2 rounded-full border border-[#174F2C]/30 bg-white px-6 py-3.5 text-sm font-bold text-[#174F2C] transition-all hover:border-[#F28C28] hover:text-[#D96F12]"
        >
          <span>Procurement Portal</span>
        </Link>
      </PageHero>

      {/* Main Content Container */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Key Verified Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
            <div className="font-space text-3xl font-black text-[#D96F12] sm:text-4xl">
              {COMPANY_INFO.founderExperienceYears}
            </div>
            <div className="mt-1 font-inter text-xs font-bold text-slate-500 sm:text-sm">
              Years MD Leadership Experience
            </div>
            <p className="mt-2 text-[11px] text-slate-400">
              Founder-led trading discipline spanning two decades
            </p>
          </div>

          <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
            <div className="font-space text-3xl font-black text-[#1F6B3A] sm:text-4xl">
              {COMPANY_INFO.metrics.farmersAndMerchants}
            </div>
            <div className="mt-1 font-inter text-xs font-bold text-slate-500 sm:text-sm">
              Registered Farmers & Merchants
            </div>
            <p className="mt-2 text-[11px] text-slate-400">
              Grassroots partnerships across Bihar, WB, and UP
            </p>
          </div>

          <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
            <div className="font-space text-3xl font-black text-[#174F2C] sm:text-4xl">
              {COMPANY_INFO.metrics.fpoConnections}
            </div>
            <div className="mt-1 font-inter text-xs font-bold text-slate-500 sm:text-sm">
              FPO Access Network
            </div>
            <p className="mt-2 text-[11px] text-slate-400">
              Direct institutional producer group aggregation
            </p>
          </div>

          <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
            <div className="font-space text-3xl font-black text-[#F28C28] sm:text-4xl">
              {COMPANY_INFO.growthMilestoneYear}
            </div>
            <div className="mt-1 font-inter text-xs font-bold text-slate-500 sm:text-sm">
              Supply-Chain Expansion
            </div>
            <p className="mt-2 text-[11px] text-slate-400">
              Major formalization of logistics & regional warehousing
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F28C28]/30 bg-[#F28C28]/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#D96F12]">
              Our Provenance
            </div>
            <h2 className="font-space text-3xl font-black text-[#174F2C] sm:text-4xl">
              From Regional Mandis to an Institutional Agro Supply Network
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#4F5D55]">
              <p>
                The foundation of Brijrani (Krishi Varsha) was laid over 20 years ago by
                Managing Director Mr. Rajesh Kumar Gupta in the agrarian hub of Chhapra,
                Bihar. Starting as a regional commodity trading venture, the business
                deepened relationships with local farmers, grain merchants, and rice millers.
              </p>
              <p>
                Navigating the financial volatility, seasonal uncertainties, and logistical
                complexities of Indian agriculture imparted foundational lessons: that
                enduring supply partnerships are built on transparency of parameters,
                honoring contracts during volatile price swings, and disciplined dispatch
                schedules.
              </p>
              <p>
                In 2020, recognizing the surging demand for quality-tested animal feed
                ingredients, Brijrani embarked on an extensive supply-chain expansion. The
                enterprise connected regional solvent extraction plants and flour mills
                directly with commercial feed millers across India, formally incorporating
                as Brijrani Agri Product Pvt. Ltd. in 2022.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/directors"
                className="inline-flex items-center gap-2 font-bold text-[#D96F12] hover:text-[#174F2C]"
              >
                <span>Read Messages from the Board of Directors</span>
                <CorporateArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white p-3 shadow-xl">
            <img
              src="/assets/wheat_grain_feed.jpg"
              alt="Brijrani Origin Grain Sampling & Laboratory Inspection"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
            <div className="p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1F6B3A]">
                Origin-Direct Mandi Procurement
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-700">
                Paddy, Maize, Wheat, and Oilseed harvest collection across Bihar, West Bengal, and UP
              </div>
            </div>
          </div>
        </div>

        {/* Business Model Pillars */}
        <div className="mt-24 rounded-3xl border border-[#DCEBDD] bg-[#EFF7F0]/60 p-8 sm:p-12">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
              Operational Model
            </span>
            <h2 className="mt-2 font-space text-3xl font-black text-[#174F2C]">
              How Brijrani Creates Value Across the Agricultural Chain
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-[#174F2C]">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mt-4 font-space text-lg font-bold text-slate-900">
                Primary Producer Alliances
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We contract directly with 500+ farmers and 100+ FPOs, ensuring transparent
                weighment, fair mandi benchmarking, and rapid settlement for raw harvests.
              </p>
            </div>

            <div className="rounded-2xl border border-white bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-[#D96F12]">
                <CertifiedSealIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-space text-lg font-bold text-slate-900">
                Regional Lab Partnerships
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We verify critical chemical parameters—protein, moisture, and silica—through
                accredited regional testing facilities with turnaround times of 2 to 48 hours.
              </p>
            </div>

            <div className="rounded-2xl border border-white bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-[#174F2C]">
                <HeavyTruckIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-space text-lg font-bold text-slate-900">
                Coordinated Fleet Logistics
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                From dedicated tipper trucks to bulk containerized rakes, our transport
                network maintains transit schedules to keep feed plants operating continuously.
              </p>
            </div>
          </div>
        </div>

        {/* Commercial Trade Guarantees */}
        <div className="mt-24">
          <div className="mb-10 text-center">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
              Commercial Guarantees
            </span>
            <h2 className="mt-2 font-space text-3xl font-black text-[#174F2C]">
              Trade Protocols That Protect Industrial Feed Buyers
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-[#4F5D55]">
              Commercial animal feed plants cannot afford batch variability, moisture inflation, or delivery defaults. We operate under stringent contractual discipline:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm transition-all hover:border-[#1F6B3A] hover:shadow-md">
              <div className="flex items-center gap-2 font-space text-base font-bold text-[#174F2C]">
                <VerifiedCheckIcon className="h-5 w-5 text-emerald-600 shrink-0" />
                100% Weighbridge Slip
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Every truckload carries a computerized Dharam Kanta weighment slip stamped at the origin loading mill for seamless tare and gross weight verification.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm transition-all hover:border-[#1F6B3A] hover:shadow-md">
              <div className="flex items-center gap-2 font-space text-base font-bold text-[#174F2C]">
                <VerifiedCheckIcon className="h-5 w-5 text-emerald-600 shrink-0" />
                NIR Moisture Lock (&lt;12%)
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Pre-dispatch laboratory testing ensures moisture remains within contracted safe transit ceilings, preventing heating, clumping, and mycotoxin formation.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm transition-all hover:border-[#1F6B3A] hover:shadow-md">
              <div className="flex items-center gap-2 font-space text-base font-bold text-[#174F2C]">
                <VerifiedCheckIcon className="h-5 w-5 text-emerald-600 shrink-0" />
                Price Integrity Guarantee
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Contracts sealed with Brijrani are honored at agreed rates regardless of sudden mandi price surges, ensuring financial predictability for compounding plants.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm transition-all hover:border-[#1F6B3A] hover:shadow-md">
              <div className="flex items-center gap-2 font-space text-base font-bold text-[#174F2C]">
                <VerifiedCheckIcon className="h-5 w-5 text-emerald-600 shrink-0" />
                Direct Sourcing Traceability
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Direct origin aggregation from verified solvent plants, rice mills, and farmer groups across Bihar, MP, and UP—eliminating speculative middlemen.
              </p>
            </div>
          </div>
        </div>

        {/* Direct CTA */}
        <div className="mt-20 rounded-3xl border border-[#174F2C] bg-[#174F2C] p-8 text-center text-white sm:p-12">
          <h3 className="font-space text-2xl font-black sm:text-3xl">
            Partner with Brijrani for Verified Feed Commodity Supply
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
            Whether you are an agricultural producer offering harvests or an enterprise feed
            miller seeking dependable input materials, connect with our procurement desk.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/for-buyer"
              className="rounded-full bg-[#F28C28] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#d96f12]"
            >
              Submit Buyer Requirement
            </Link>
            <Link
              to="/for-seller"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/20"
            >
              Seller Commodity Registration
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
