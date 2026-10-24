import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  CorporateArrowRight, 
  LabFlaskIcon, 
  DispatchClockIcon, 
  VerifiedCheckIcon, 
  CertifiedSealIcon, 
  ContractSpecIcon 
} from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/quality-policy")({
  head: () => ({
    meta: [
      {
        title: "Quality Policy & Laboratory Testing Standards - Brijrani (Krishi Varsha)",
      },
      {
        name: "description",
        content:
          "Read Brijrani's quality policy: accredited regional laboratory partnerships, 2–48 hour parameter turnaround, and rigorous testing for protein, moisture, and silica.",
      },
    ],
  }),
  component: QualityPolicyPage,
});

function QualityPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Quality Policy" }]}
        badgeText="Regional Laboratory Verification"
        title="Quality Discipline Shaped Around"
        titleHighlight="Accredited Testing & Integrity"
        description="Animal feed ingredients naturally vary by crop season, origin, and processing source. Brijrani manages quality through disciplined pre-dispatch sampling, regional laboratory partnerships, and clear commercial tolerances."
      >
        <Link
          to="/enquiry"
          className="inline-flex items-center gap-2 rounded-full bg-[#174F2C] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1f6b3a]"
        >
          <span>Request Certified Lot Specifications</span>
          <CorporateArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-full border border-[#174F2C]/30 bg-white px-6 py-3.5 text-sm font-bold text-[#174F2C] transition-all hover:border-[#F28C28] hover:text-[#D96F12]"
        >
          <span>View Commodity Spec Sheets</span>
        </Link>
      </PageHero>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Core Principles Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-[#174F2C]">
              <LabFlaskIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-space text-xl font-bold text-[#174F2C]">
              Regional Lab Partnerships
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4F5D55]">
              Rather than relying solely on informal visual inspection, Brijrani partners
              with certified regional agricultural testing laboratories to verify critical
              chemical limits for high-protein meals and processed cakes.
            </p>
          </div>

          <div className="rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-[#D96F12]">
              <DispatchClockIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-space text-xl font-bold text-[#174F2C]">
              2–48 Hours Turnaround
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4F5D55]">
              Depending on parameter complexity—from rapid moisture titration to full Kjeldahl
              crude protein and acid insoluble ash quantification—testing turnaround is
              structured between 2 and 48 hours before loading authorization.
            </p>
          </div>

          <div className="rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-[#174F2C]">
              <CertifiedSealIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-space text-xl font-bold text-[#174F2C]">
              Quality-Based Valuation
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4F5D55]">
              Test results directly determine pricing and lot classification. We review
              customer specifications against available origins, ensuring clear feasibility
              and applicable tolerances are established before order acceptance.
            </p>
          </div>
        </div>

        {/* 4-Stage Testing Workflow */}
        <div className="mt-20">
          <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
            Standard Operating Procedure
          </span>
          <h2 className="mt-1 font-space text-3xl font-black text-[#174F2C]">
            The 4-Stage Quality Verification Process
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
              <span className="font-space text-2xl font-black text-[#D96F12]">01</span>
              <h4 className="mt-2 font-space text-base font-bold text-[#174F2C]">
                Arrival & Weighment Check
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#4F5D55]">
                Gross weighment on certified electronic weighbridges; preliminary physical check
                for bag condition, heating, clumping, or transit rain damage.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
              <span className="font-space text-2xl font-black text-[#D96F12]">02</span>
              <h4 className="mt-2 font-space text-base font-bold text-[#174F2C]">
                Representative Composite Sampling
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#4F5D55]">
                Multi-point probing across the lot using standard sampling spears to form a
                homogenized composite sample for physical and laboratory evaluation.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
              <span className="font-space text-2xl font-black text-[#D96F12]">03</span>
              <h4 className="mt-2 font-space text-base font-bold text-[#174F2C]">
                Regional Lab Analysis
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#4F5D55]">
                Sample dispatch to accredited regional laboratories for protein, moisture, urease
                activity, and silica analysis; report generated within 2–48 hours.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
              <span className="font-space text-2xl font-black text-[#D96F12]">04</span>
              <h4 className="mt-2 font-space text-base font-bold text-[#174F2C]">
                Lot Approval & Documentation
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#4F5D55]">
                Material accepted and dispatched only when analytical results match contractual
                parameters. Test records archived and shared with the buyer upon request.
              </p>
            </div>
          </div>
        </div>

        {/* Commodity-Specific Quality Thresholds */}
        <div className="mt-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
                Key Commodity Thresholds
              </span>
              <h2 className="mt-1 font-space text-3xl font-black text-[#174F2C]">
                Verified Lab Parameters Across Core Feeds
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96F12] hover:text-[#174F2C]"
            >
              <span>Explore Complete Commodity Spec Sheets</span>
              <CorporateArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.slug}
                className="flex flex-col justify-between rounded-2xl border border-[#DCEBDD] bg-white p-5 shadow-sm"
              >
                <div>
                  <div className="text-[11px] font-bold uppercase text-[#F28C28]">
                    {prod.category}
                  </div>
                  <h4 className="mt-1 font-space text-lg font-bold text-[#174F2C]">
                    {prod.name}
                  </h4>
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs">
                    {prod.specifications.slice(0, 3).map((s, idx) => (
                      <li key={idx} className="flex justify-between">
                        <span className="text-slate-500">{s.parameter}:</span>
                        <span className="font-bold text-slate-800">{s.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-3">
                  <Link
                    to="/products/$slug"
                    params={{ slug: prod.slug }}
                    className="text-xs font-bold text-emerald-700 hover:text-[#D96F12]"
                  >
                    View Full Spec Table →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request Lab Report Documentation Box */}
        <div className="mt-20 rounded-3xl border border-[#174F2C] bg-[#0D2214] p-8 text-white sm:p-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold uppercase text-emerald-400">
              <ContractSpecIcon className="h-3.5 w-3.5" />
              <span>Commercial Laboratory Documentation</span>
            </div>
            <h3 className="mt-3 font-space text-2xl font-black sm:text-3xl">
              Need Certificate of Analysis for a Specific Lot?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              We provide formal regional laboratory test reports for booked lots according to agreed
              sampling protocol, product origin, and contractual terms. Contact our quality desk
              with your order reference or commodity specifications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/enquiry"
                className="rounded-full bg-[#F28C28] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#d96f12]"
              >
                Request Lab Specification Certificate
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20"
              >
                Contact Quality Procurement Desk
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
