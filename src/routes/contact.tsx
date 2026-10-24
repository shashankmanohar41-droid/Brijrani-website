import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  MandiLocationIcon, 
  PhoneDeskIcon, 
  DispatchMailIcon, 
  DispatchClockIcon, 
  VerifiedCheckIcon, 
  CorporateArrowRight 
} from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";
import { submitEnquiryRecord, SubmissionResult } from "@/lib/supabase";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Us | Corporate Headquarters Patna - Brijrani (Krishi Varsha)",
      },
      {
        name: "description",
        content:
          "Contact Brijrani Agri Product Pvt. Ltd. at our Patna headquarters: Opposite Bright Career School, Behind S2 Mall, Agamkuan–Pahari Road. Phone: +91 9334399829.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    commodity: PRODUCTS[0]?.name ?? "Rice Bran",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitEnquiryRecord({
      fullName: formData.fullName,
      ...(formData.companyName ? { companyName: formData.companyName } : {}),
      email: formData.email,
      phone: formData.phone,
      commodity: formData.commodity,
      enquiryType: "general_inquiry",
      message: formData.message,
    });
    setSubmitting(false);
    setResult(res);
  };

  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        badgeText="Patna Corporate Headquarters"
        title="Direct Commercial Procurement &"
        titleHighlight="Trading Desk"
        description="Connect directly with Brijrani (Krishi Varsha) for bulk agro-commodity contracts, mandi origination, certified lot laboratory testing, and pan-India dispatch logistics."
      />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Office Details & Direct Actions */}
          <div className="space-y-6 lg:col-span-5">
            {/* Headquarters Card */}
            <div className="overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
                Registered Office
              </span>
              <h2 className="mt-2 font-space text-2xl font-black text-[#174F2C]">
                Brijrani Agri Product Pvt. Ltd.
              </h2>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                Krishi Varsha Industry
              </div>

              <div className="mt-8 space-y-5 text-sm text-[#4F5D55]">
                <div className="flex items-start gap-3.5">
                  <MandiLocationIcon className="mt-1 h-5 w-5 shrink-0 text-[#F28C28]" />
                  <div>
                    <strong className="block text-slate-800">Corporate Address:</strong>
                    <span className="leading-relaxed">
                      {COMPANY_INFO.headquarters.fullAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <PhoneDeskIcon className="h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <strong className="block text-slate-800">Phone Contact:</strong>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      className="font-bold text-[#174F2C] hover:text-[#D96F12]"
                    >
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <DispatchMailIcon className="h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <strong className="block text-slate-800">Electronic Mail:</strong>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="font-bold text-[#174F2C] hover:text-[#D96F12]"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-slate-100 pt-5">
                  <DispatchClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#D96F12]" />
                  <div>
                    <strong className="block text-slate-800">Procurement Desk Hours:</strong>
                    <span>Monday to Saturday: 09:00 AM – 07:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Direct Maps Link */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <a
                  href={COMPANY_INFO.headquarters.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#EFF7F0] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#174F2C] transition-all hover:bg-[#174F2C] hover:text-white"
                >
                  <span>Locate Patna Office on Google Maps</span>
                  <CorporateArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Sourcing Action Card */}
            <div className="rounded-3xl border border-[#DCEBDD] bg-[#EFF7F0]/60 p-6 sm:p-8">
              <h3 className="font-space text-lg font-bold text-[#174F2C]">
                Looking for Specialized Sourcing Portals?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4F5D55]">
                Save time by routing your request directly to the appropriate trade desk:
              </p>
              <div className="mt-5 space-y-2.5">
                <a
                  href="/for-buyer"
                  className="flex items-center justify-between rounded-xl border border-white bg-white p-3 text-xs font-bold text-[#174F2C] shadow-sm hover:border-[#1F6B3A]"
                >
                  <span>Feed Mill Buyer Requisition Desk</span>
                  <CorporateArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </a>
                <a
                  href="/for-seller"
                  className="flex items-center justify-between rounded-xl border border-white bg-white p-3 text-xs font-bold text-[#174F2C] shadow-sm hover:border-[#1F6B3A]"
                >
                  <span>Farmer / Mandi Vendor Commodity Offer</span>
                  <CorporateArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            {result ? (
              <div className="rounded-3xl border border-emerald-500/40 bg-emerald-950 p-8 text-center text-white shadow-xl sm:p-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <VerifiedCheckIcon className="h-10 w-10" />
                </div>
                <h3 className="mt-6 font-space text-2xl font-black sm:text-3xl">
                  Message Transmitted Successfully!
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  {result.message}
                </p>
                <div className="mt-6 inline-block rounded-2xl border border-emerald-400/30 bg-emerald-900/60 px-6 py-3 font-mono text-base font-bold text-emerald-300">
                  Reference ID: {result.referenceId}
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => {
                      setResult(null);
                      setFormData({
                        fullName: "",
                        companyName: "",
                        email: "",
                        phone: "",
                        commodity: PRODUCTS[0]?.name ?? "Rice Bran",
                        message: "",
                      });
                    }}
                    className="rounded-full bg-[#F28C28] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#d96f12]"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div className="overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white p-6 shadow-xl sm:p-10">
                <h3 className="font-space text-2xl font-black text-[#174F2C]">
                  Direct Message to Procurement Desk
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Fill in your details below and our team will get back to you promptly.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your Name"
                        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Company Name (optional)"
                        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Mobile Number"
                        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Primary Commodity
                    </label>
                    <select
                      value={formData.commodity}
                      onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-800 focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your inquiry or requirement..."
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#174F2C] py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#F28C28] disabled:opacity-50"
                    >
                      <span>{submitting ? "Sending..." : "Send Message to Desk"}</span>
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
