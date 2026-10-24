import { createFileRoute, Link } from "@tanstack/react-router";
import { CorporateArrowRight } from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { BLOG_POSTS } from "@/data/blogs";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      {
        title: "Feed Industry Insights & Agronomy Articles - Brijrani",
      },
      {
        name: "description",
        content:
          "Read verified agro-commodity articles from Brijrani: Rice Bran in poultry diets, De-Oiled Cakes as organic manure, and rice by-product economics for feed mills.",
      },
    ],
  }),
  component: BlogsIndexPage,
});

function BlogsIndexPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Blogs" }]}
        badgeText="Verified Knowledge & Commodity Analysis"
        title="Agro Commodity & Animal Nutrition"
        titleHighlight="Industry Insights"
        description="Educational articles exploring the nutritional economics of rice by-products, de-oiled cakes, and balanced dietary formulations for Indian livestock and poultry feed millers."
      />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1F6B3A] hover:shadow-xl"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#174F2C] shadow-sm backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-bold text-white">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-space text-xl font-bold leading-snug text-[#174F2C]">
                    <Link
                      to="/blogs/$slug"
                      params={{ slug: post.slug }}
                      className="hover:text-[#D96F12] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-xs leading-relaxed text-[#4F5D55]">
                    {post.summary}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Core Exploration Topics
                    </span>
                    <ul className="mt-2 space-y-1 text-xs text-slate-600">
                      {post.verifiedOutline.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5 line-clamp-1">
                          <span className="text-[#1F6B3A]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 p-6 pt-4">
                <Link
                  to="/blogs/$slug"
                  params={{ slug: post.slug }}
                  className="group flex w-full items-center justify-between rounded-2xl bg-[#EFF7F0] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#174F2C] transition-all hover:bg-[#174F2C] hover:text-white"
                >
                  <span>Read Article Analysis</span>
                  <CorporateArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Technical Publication Notice */}
        <div className="mt-16 rounded-2xl border border-[#DCEBDD] bg-[#EFF7F0]/60 p-5 text-center text-xs text-[#4F5D55]">
          Brijrani Feed Nutrition Knowledge Hub • Technical insights and procurement advisory for livestock nutritionists, feed compounding mills, and agribusiness professionals.
        </div>
      </main>

      <Footer />
    </div>
  );
}
