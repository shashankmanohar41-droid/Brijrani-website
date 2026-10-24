import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CorporateArrowLeft, CorporateArrowRight } from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { BLOG_POSTS } from "@/data/blogs";
import { PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.post) {
      return { meta: [{ title: "Article Not Found | Brijrani" }] };
    }
    return {
      meta: [
        {
          title: `${loaderData.post.title} | Brijrani Feed Industry Knowledge`,
        },
        {
          name: "description",
          content: loaderData.post.summary,
        },
      ],
    };
  },
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { post } = Route.useLoaderData();

  // Find related commodities
  const relatedCommodities = PRODUCTS.filter((p) =>
    post.relatedCommoditySlugs.includes(p.slug)
  );

  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[
          { label: "Blogs", href: "/blogs" },
          { label: post.title },
        ]}
        badgeText={post.category}
        title={post.title}
        description={post.summary}
      >
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-sm hover:border-[#174F2C] hover:text-[#174F2C]"
        >
          <CorporateArrowLeft className="h-3.5 w-3.5" />
          <span>All Articles</span>
        </Link>
      </PageHero>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <article className="rounded-3xl border border-[#DCEBDD] bg-white p-6 shadow-sm sm:p-12">
          {/* Cover image */}
          <div className="overflow-hidden rounded-2xl bg-slate-100">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="h-80 w-full object-cover sm:h-96"
            />
          </div>

          {/* Meta bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-bold text-[#174F2C]">
                {post.category}
              </span>
              <span className="flex items-center gap-1 font-medium">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#D96F12] hover:underline"
            >
              <span>Source URL: {new URL(post.sourceUrl).pathname}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Article Core Content */}
          <div className="mt-8 space-y-6 text-base leading-relaxed text-[#4F5D55]">
            <p className="font-inter text-lg font-medium text-slate-800">
              {post.summary}
            </p>

            <h3 className="font-space text-2xl font-bold text-[#174F2C] pt-4">
              Verified Technical Scope & Key Nutritional Dimensions
            </h3>

            <p>
              In animal feed formulation, raw materials cannot be judged solely by gross crude
              protein percentages. Digestibility coefficients, fiber fractionation, and lipid
              stability directly dictate biological feed conversion ratios (FCR) in poultry and
              fat-corrected milk yield in dairy cattle.
            </p>

            <div className="rounded-2xl border border-[#DCEBDD] bg-[#EFF7F0]/60 p-6">
              <h4 className="font-space text-base font-bold text-[#174F2C]">
                Core Topics Explored in this Article:
              </h4>
              <ul className="mt-4 space-y-3">
                {post.verifiedOutline.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Regional processing methods—such as the difference between solvent extraction
              temperatures in de-oiling units—significantly influence bypass protein levels and
              residual moisture. At Brijrani (Krishi Varsha), pre-dispatch regional laboratory
              evaluations ensure that these physical and chemical limits stay strictly within
              contractual tolerances.
            </p>
          </div>

          {/* Provenance Disclosure Box */}
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-xs text-amber-900">
            <div className="flex items-start gap-2.5">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              <div>
                <strong className="font-bold">Content Provenance Note:</strong>{" "}
                {post.contentNotice} Brijrani maintains full technical spec sheets for each
                commodity, available upon consultation with our commercial desk.
              </div>
            </div>
          </div>
        </article>

        {/* Related Commodities Showcase */}
        {relatedCommodities.length > 0 && (
          <div className="mt-16">
            <h3 className="font-space text-2xl font-black text-[#174F2C]">
              Related Commodities Traded by Brijrani
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedCommodities.map((prod) => (
                <Link
                  key={prod.slug}
                  to="/products/$slug"
                  params={{ slug: prod.slug }}
                  className="group flex flex-col justify-between rounded-2xl border border-[#DCEBDD] bg-white p-5 shadow-sm transition-all hover:border-[#1F6B3A] hover:shadow-md"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#F28C28]">
                      {prod.category}
                    </span>
                    <h4 className="mt-1 font-space text-lg font-bold text-[#174F2C]">
                      {prod.name}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-xs text-slate-500">
                      {prod.headline}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <span>View Lab Specifications</span>
                    <CorporateArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Action Callout */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#174F2C] bg-[#174F2C] p-8 text-white sm:flex-row sm:p-10">
          <div>
            <h4 className="font-space text-2xl font-bold">
              Require Verified Raw Materials for Your Feed Mill?
            </h4>
            <p className="mt-1 text-sm text-slate-200">
              Submit your required quantity, target location, and lab parameters.
            </p>
          </div>
          <Link
            to="/for-buyer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F28C28] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#d96f12]"
          >
            <span>Request Buyer Quotation</span>
            <CorporateArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
