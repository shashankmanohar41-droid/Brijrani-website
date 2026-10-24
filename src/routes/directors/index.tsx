import { createFileRoute, Link } from "@tanstack/react-router";
import { CorporateArrowRight, VerifiedCheckIcon } from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { DIRECTORS } from "@/data/leadership";

export const Route = createFileRoute("/directors/")({
  head: () => ({
    meta: [
      {
        title: "Board of Directors | Leadership - Brijrani (Krishi Varsha)",
      },
      {
        name: "description",
        content:
          "Meet the leadership of Brijrani Agri Product Pvt. Ltd.: Mr. Rajesh Kumar Gupta (Founder & MD), Mrs. Suman Gupta (CHRO & MD), and Mr. Sumit Gupta (Co-Founder & CEO).",
      },
    ],
  }),
  component: DirectorsIndexPage,
});

function DirectorsIndexPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Directors" }]}
        badgeText="Executive Leadership & Governance"
        title="Experienced Leadership Grounded in"
        titleHighlight="Agrarian Reality & Discipline"
        description="The executive team of Brijrani (Krishi Varsha) brings together more than two decades of managing-director commodity trading experience, strategic organizational governance, and modern financial-logistical controls."
      />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {DIRECTORS.map((dir) => (
            <div
              key={dir.slug}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1F6B3A] hover:shadow-xl"
            >
              <div>
                {/* Director Portrait */}
                <div className="relative h-80 w-full overflow-hidden bg-slate-100">
                  <img
                    src={dir.portraitUrl}
                    alt={dir.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="rounded-full bg-[#F28C28] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
                      {dir.designation}
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 sm:p-8">
                  <h2 className="font-space text-2xl font-black text-[#174F2C]">
                    {dir.name}
                  </h2>
                  <p className="mt-3 text-xs leading-relaxed text-[#4F5D55] sm:text-sm">
                    {dir.roleSummary}
                  </p>

                  {/* Focus areas */}
                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Focus Areas
                    </span>
                    <ul className="mt-3 space-y-2">
                      {dir.focusAreas.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                          <VerifiedCheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Direct Quote Preview */}
                  <div className="mt-6 rounded-2xl bg-[#EFF7F0] p-4 text-xs italic text-[#174F2C]">
                    &ldquo;{dir.message.closingQuote}&rdquo;
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="border-t border-slate-100 p-6 pt-0">
                <Link
                  to="/directors/$slug"
                  params={{ slug: dir.slug }}
                  className="group flex w-full items-center justify-between rounded-2xl bg-[#174F2C] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#F28C28]"
                >
                  <span>Read Full Executive Message</span>
                  <CorporateArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Governance Callout */}
        <div className="mt-20 rounded-3xl border border-[#DCEBDD] bg-[#EFF7F0]/60 p-8 text-center sm:p-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Corporate Integrity & Compliance
          </span>
          <h3 className="mt-2 font-space text-2xl font-bold text-[#174F2C] sm:text-3xl">
            Committed to Transparent Agricultural Commercial Practice
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#4F5D55]">
            Our directors actively review procurement terms, laboratory sampling rigor, and customer
            service channels to ensure Brijrani represents the gold standard in Indian agro trading.
          </p>
          <div className="mt-6">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-bold text-[#D96F12] hover:text-[#174F2C]"
            >
              <span>Explore Company Milestones & Heritage</span>
              <CorporateArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
