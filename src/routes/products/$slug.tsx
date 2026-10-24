import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  CorporateArrowLeft, 
  CorporateArrowRight, 
  CertifiedSealIcon, 
  HeavyTruckIcon, 
  ContractSpecIcon, 
  MandiLocationIcon 
} from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { SpecTable } from "@/components/products/SpecTable";
import { LabReportModal } from "@/components/products/LabReportModal";
import { PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.product) {
      return { meta: [{ title: "Product Not Found | Brijrani" }] };
    }
    return {
      meta: [
        {
          title: `${loaderData.product.name} - Specifications & Bulk Supply | Brijrani`,
        },
        {
          name: "description",
          content: `${loaderData.product.headline}. Technical lab parameters, HSN ${loaderData.product.hsnCode}, applications, and nationwide bulk delivery.`,
        },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const [labModalOpen, setLabModalOpen] = useState(false);

  // Related products in the same category
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );

  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[
          { label: "Commodities", href: "/products" },
          { label: product.name },
        ]}
        badgeText={`Verified ${product.category}`}
        title={product.name}
        description={product.headline}
      >
        <Link
          to="/for-buyer"
          className="inline-flex items-center gap-2 rounded-full bg-[#174F2C] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#1f6b3a] sm:text-sm"
        >
          <span>Request Bulk Quote</span>
          <CorporateArrowRight className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={() => setLabModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-[#174F2C] bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#174F2C] shadow-sm hover:bg-[#EFF7F0] sm:text-sm"
        >
          <ContractSpecIcon className="h-4 w-4 text-[#D96F12]" />
          <span>View Verified Lab COA</span>
        </button>
      </PageHero>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Top Product Showcase (Image + Core Summary) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white p-4 shadow-lg">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#174F2C] shadow-sm backdrop-blur-md">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between px-2 text-xs text-slate-500">
                <span>Form: <strong className="text-slate-800">{product.physicalForm}</strong></span>
                <span>HSN Code: <strong className="text-slate-800">{product.hsnCode}</strong></span>
              </div>
            </div>
          </div>

          {/* Core Overview & Highlights */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-[#1F6B3A]">
              <CertifiedSealIcon className="h-4 w-4" />
              <span>Accredited Regional Lab Tested</span>
            </div>

            <h2 className="font-space text-3xl font-black text-[#174F2C] sm:text-4xl">
              Commodity Overview & Nutritional Role
            </h2>

            <p className="font-inter text-base leading-relaxed text-[#4F5D55]">
              {product.summary}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase text-slate-400">
                  Physical Form
                </span>
                <div className="mt-1 font-space text-base font-bold text-[#174F2C]">
                  {product.physicalForm}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <span className="text-[11px] font-bold uppercase text-slate-400">
                  HSN Tariff
                </span>
                <div className="mt-1 font-space text-base font-bold text-[#D96F12]">
                  {product.hsnCode}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm col-span-2 sm:col-span-1">
                <span className="text-[11px] font-bold uppercase text-slate-400">
                  Listed GST
                </span>
                <div className="mt-1 font-space text-base font-bold text-slate-800">
                  {product.listedGst.split(" ")[0]}
                </div>
              </div>
            </div>

            {/* Origin & Sourcing */}
            <div className="rounded-2xl border border-[#DCEBDD] bg-[#EFF7F0]/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#174F2C]">
                <MapPin className="h-4 w-4 text-[#F28C28]" />
                <span>Primary Sourcing & Processing Belts</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.producingRegions.map((r, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#1F6B3A] shadow-sm"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="mt-20">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
                Technical Profile
              </span>
              <h3 className="font-space text-3xl font-black text-[#174F2C]">
                Verified Laboratory Specifications
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Testing Standard: <strong className="text-slate-800">IS 4333 / NIR Kjeldahl Assay</strong>
              </span>
            </div>
          </div>

          <SpecTable
            specs={product.specifications}
            hsnCode={product.hsnCode}
            listedGst={product.listedGst}
            physicalForm={product.physicalForm}
          />
        </div>

        {/* Applications & Industries Served */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Applications */}
          <div className="rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
              Utilization
            </span>
            <h4 className="mt-2 font-space text-2xl font-bold text-[#174F2C]">
              Primary Applications
            </h4>
            <ul className="mt-6 space-y-3">
              {product.applications.map((app, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#4F5D55]">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-[#174F2C]">
                    ✓
                  </span>
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#1F6B3A]">
              Target Sectors
            </span>
            <h4 className="mt-2 font-space text-2xl font-bold text-[#174F2C]">
              Industries Served
            </h4>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.industriesServed.map((ind, i) => (
                <span
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-[#EFF7F0] px-4 py-2 text-xs font-bold text-[#174F2C]"
                >
                  {ind}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Packaging Configurations
              </span>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                {product.packagingOptions.map((pkg, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Package className="h-3.5 w-3.5 text-[#F28C28]" />
                    <span>{pkg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Storage Guidelines */}
        <div className="mt-12 rounded-3xl border border-[#DCEBDD] bg-[#EFF7F0]/40 p-8">
          <h4 className="font-space text-xl font-bold text-[#174F2C]">
            Warehouse Storage & Quality Retention Guidelines
          </h4>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {product.storageGuidelines.map((g, i) => (
              <div key={i} className="rounded-2xl border border-white bg-white p-4 shadow-sm text-xs text-[#4F5D55] leading-relaxed">
                {g}
              </div>
            ))}
          </div>
        </div>

        {/* Related Products in same Category */}
        {related.length > 0 && (
          <div className="mt-20">
            <h4 className="font-space text-2xl font-black text-[#174F2C]">
              Related Commodities in {product.category}
            </h4>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to="/products/$slug"
                  params={{ slug: rel.slug }}
                  className="group flex flex-col justify-between rounded-2xl border border-[#DCEBDD] bg-white p-5 shadow-sm transition-all hover:border-[#1F6B3A] hover:shadow-md"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#F28C28]">
                      {rel.category}
                    </span>
                    <h5 className="mt-1 font-space text-lg font-bold text-[#174F2C]">
                      {rel.name}
                    </h5>
                    <p className="mt-2 line-clamp-2 text-xs text-slate-500">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <span>View Specifications</span>
                    <CorporateArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Connected Quote Desk */}
        <div className="mt-20 rounded-3xl border border-[#174F2C] bg-[#0D2214] p-8 text-white sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F28C28]">
              Direct Sourcing Line
            </span>
            <h3 className="mt-1 font-space text-3xl font-black">
              Ready to Order {product.name} in Bulk?
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Submit your required quantity, target delivery location, and plant receiving specifications.
              Our procurement desk will provide a transparent quotation within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/for-buyer"
                className="rounded-full bg-[#F28C28] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#d96f12]"
              >
                Submit Buyer Procurement Form
              </Link>
              <Link
                to="/enquiry"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20"
              >
                Request Sample & Parameter Sheet
              </Link>
            </div>
          </div>
        </div>

        {/* Certificate of Analysis Modal */}
        <LabReportModal
          product={product}
          isOpen={labModalOpen}
          onClose={() => setLabModalOpen(false)}
        />
      </main>

      <Footer />
    </div>
  );
}
