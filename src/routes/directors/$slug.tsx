import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { 
  CorporateArrowLeft, 
  CorporateArrowRight, 
  PhoneDeskIcon, 
  DispatchMailIcon 
} from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { DIRECTORS } from "@/data/leadership";
import { COMPANY_INFO } from "@/data/company";

export const Route = createFileRoute("/directors/$slug")({
  loader: ({ params }) => {
    const director = DIRECTORS.find((d) => d.slug === params.slug);
    if (!director) throw notFound();
    return { director };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.director) {
      return { meta: [{ title: "Director Not Found | Brijrani" }] };
    }
    return {
      meta: [
        {
          title: `${loaderData.director.name} - ${loaderData.director.designation} | Brijrani`,
        },
        {
          name: "description",
          content: loaderData.director.roleSummary,
        },
      ],
    };
  },
  component: DirectorDetailPage,
});

function DirectorDetailPage() {
  const { director } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[
          { label: "Directors", href: "/directors" },
          { label: director.name },
        ]}
        badgeText={director.designation}
        title={director.name}
        description={director.roleSummary}
      >
        <Link
          to="/directors"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-sm hover:border-[#174F2C] hover:text-[#174F2C]"
        >
          <CorporateArrowLeft className="h-3.5 w-3.5" />
          <span>All Directors</span>
        </Link>
      </PageHero>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Portrait & Key Details */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white p-6 shadow-sm">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={director.portraitUrl}
                  alt={director.name}
                  className="h-96 w-full object-cover object-top"
                />
              </div>

              <div className="mt-6">
                <span className="rounded-full bg-[#EFF7F0] px-3.5 py-1 text-xs font-bold text-[#174F2C]">
                  {director.designation}
                </span>
                <h3 className="mt-3 font-space text-2xl font-bold text-[#174F2C]">
                  {director.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4F5D55]">
                  Brijrani Agri Product Pvt. Ltd. (Krishi Varsha)
                </p>
              </div>

              {/* Core areas */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Leadership Mandate
                </span>
                <ul className="mt-3 space-y-2">
                  {director.focusAreas.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact box */}
              <div className="mt-6 rounded-2xl border border-slate-100 bg-[#FFFDF9] p-4 text-xs text-slate-600">
                <div className="font-bold text-[#174F2C]">Executive Desk Sourcing</div>
                <div className="mt-2 flex items-center gap-2">
                  <DispatchMailIcon className="h-3.5 w-3.5 text-[#F28C28]" />
                  <span>{COMPANY_INFO.contact.email}</span>
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <PhoneDeskIcon className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{COMPANY_INFO.contact.phoneDisplay}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Message Body */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm sm:p-12">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D96F12]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
                <span>{director.message.salutation}</span>
              </div>

              <div className="mt-6 font-inter text-lg font-semibold leading-relaxed text-[#174F2C] sm:text-xl sm:leading-8">
                {director.message.leadParagraph}
              </div>

              <div className="mt-8 space-y-6 text-base leading-relaxed text-[#4F5D55]">
                {director.message.bodyParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Closing Highlight Quote */}
              <div className="mt-10 rounded-2xl border-l-4 border-[#F28C28] bg-[#EFF7F0] p-6">
                <div className="font-space text-lg font-bold italic text-[#174F2C]">
                  &ldquo;{director.message.closingQuote}&rdquo;
                </div>
                <div className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  — {director.name}, {director.designation}
                </div>
              </div>

              {/* Corporate Governance Strip */}
              <div className="mt-10 border-t border-slate-100 pt-6 text-xs text-slate-400">
                <span>Corporate Governance & Executive Leadership Record • Brijrani Agri Product Pvt. Ltd.</span>
              </div>
            </div>

            {/* Other Directors Navigator */}
            <div className="mt-10 rounded-3xl border border-[#DCEBDD] bg-[#EFF7F0]/60 p-6 sm:p-8">
              <h4 className="font-space text-lg font-bold text-[#174F2C]">
                Explore Other Leadership Messages
              </h4>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {DIRECTORS.filter((d) => d.slug !== director.slug).map((other) => (
                  <Link
                    key={other.slug}
                    to="/directors/$slug"
                    params={{ slug: other.slug }}
                    className="flex items-center justify-between rounded-2xl border border-white bg-white p-4 transition-all hover:border-[#1F6B3A] hover:shadow-sm"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#F28C28]">
                        {other.designation}
                      </div>
                      <div className="font-space text-sm font-bold text-slate-800">
                        {other.name}
                      </div>
                    </div>
                    <CorporateArrowRight className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
