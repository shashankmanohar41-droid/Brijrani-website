import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  CorporateArrowRight, 
  VerifiedCheckIcon, 
  DispatchMailIcon, 
  PhoneDeskIcon, 
  MandiLocationIcon 
} from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import { enquiryFormSchema, EnquiryFormData } from "@/lib/validation/enquiry";
import { submitEnquiryRecord, SubmissionResult } from "@/lib/supabase";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      {
        title: "Commercial Enquiry & Sample Request - Brijrani (Krishi Varsha)",
      },
      {
        name: "description",
        content:
          "Submit commercial inquiries, request sample lots, or obtain laboratory certificates for agro commodities from Brijrani Agri Product Pvt. Ltd.",
      },
    ],
  }),
  component: EnquiryPage,
});

interface EnquiryErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  commodity?: string;
  quantity?: string;
  enquiryType?: string;
  message?: string;
  captchaAnswer?: string;
}

function EnquiryPage() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    commodity: PRODUCTS[0]?.name ?? "Rice Bran",
    quantity: "",
    enquiryType: "bulk_quotation",
    message: "",
    captchaAnswer: "",
  });

  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const errorKey = name as keyof EnquiryErrors;
    if (errors[errorKey]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errorKey];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Verify simple anti-spam math challenge (7 + 5 = 12)
    if (formData.captchaAnswer.trim() !== "12") {
      setErrors({ captchaAnswer: "Incorrect anti-spam answer. Please solve: 7 + 5 = 12" });
      return;
    }

    const validated = enquiryFormSchema.safeParse(formData);
    if (!validated.success) {
      const fieldErrors: EnquiryErrors = {};
      validated.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof EnquiryErrors;
        if (path) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const res = await submitEnquiryRecord({
      fullName: formData.fullName,
      ...(formData.companyName ? { companyName: formData.companyName } : {}),
      email: formData.email,
      phone: formData.phone,
      commodity: formData.commodity,
      ...(formData.quantity ? { quantity: formData.quantity } : {}),
      enquiryType: formData.enquiryType,
      message: formData.message,
    });

    setSubmitting(false);
    setResult(res);
  };

  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "Enquiry" }]}
        badgeText="Commercial Inquiry & Sample Testing Desk"
        title="Connect with Our Agricultural"
        titleHighlight="Procurement & Trading Desk"
        description="Whether you need a custom bulk contract, certified laboratory documentation, or an evaluation sample lot, our procurement team in Patna is ready to assist your enterprise."
      />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Desk Details */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-[#DCEBDD] bg-white p-8 shadow-sm">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D96F12]">
                Commercial Support
              </span>
              <h3 className="mt-2 font-space text-2xl font-bold text-[#174F2C]">
                Direct Contact Channels
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4F5D55]">
                Our procurement coordinators operate across North and Eastern Indian mandis.
                For urgent truckload dispatch schedules, reach us directly.
              </p>

              <div className="mt-8 space-y-4 border-t border-slate-100 pt-6 text-sm text-[#4F5D55]">
                <div className="flex items-start gap-3">
                  <MandiLocationIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#F28C28]" />
                  <span>{COMPANY_INFO.headquarters.fullAddress}</span>
                </div>

                <div className="flex items-center gap-3">
                  <PhoneDeskIcon className="h-5 w-5 shrink-0 text-emerald-600" />
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone}`}
                    className="font-bold text-[#174F2C] hover:text-[#D96F12]"
                  >
                    {COMPANY_INFO.contact.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <DispatchMailIcon className="h-5 w-5 shrink-0 text-emerald-600" />
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="font-bold text-[#174F2C] hover:text-[#D96F12]"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="mt-8 rounded-2xl bg-[#EFF7F0] p-4 text-xs font-semibold text-[#174F2C]">
                Turnaround Guarantee: All verified inquiries reviewed and quoted within 24 working hours.
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            {result ? (
              <div className="rounded-3xl border border-emerald-500/40 bg-emerald-950 p-8 text-center text-white shadow-xl sm:p-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <VerifiedCheckIcon className="h-10 w-10" />
                </div>
                <h3 className="mt-6 font-space text-2xl font-black sm:text-3xl">
                  Enquiry Logged Successfully!
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
                        quantity: "",
                        enquiryType: "bulk_quotation",
                        message: "",
                        captchaAnswer: "",
                      });
                    }}
                    className="rounded-full bg-[#F28C28] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#d96f12]"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <div className="overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white p-6 shadow-xl sm:p-10">
                <h3 className="font-space text-2xl font-black text-[#174F2C]">
                  Send a Detailed Commercial Enquiry
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Please share exact commodity parameters and volume for an accurate commercial quotation.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Full Name & Company Name */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                          errors.fullName
                            ? "border-red-500 focus:ring-red-200"
                            : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Company / Feed Mill Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enterprise entity (optional)"
                        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@feedmill.com"
                        className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                          errors.email
                            ? "border-red-500 focus:ring-red-200"
                            : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? "border-red-500 focus:ring-red-200"
                            : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Commodity & Quantity */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Commodity of Interest <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="commodity"
                        value={formData.commodity}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-800 focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.slug} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                        <option value="Cotton DOC">Cotton DOC</option>
                        <option value="Sunflower DOC">Sunflower DOC</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Estimated Quantity (MT)
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 50 MT / recurring monthly"
                        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                      />
                    </div>
                  </div>

                  {/* Enquiry Type Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Enquiry Purpose <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-800 focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                    >
                      <option value="bulk_quotation">Request Commercial Bulk Quotation</option>
                      <option value="sample_request">Request Testing Sample Lot</option>
                      <option value="specification_sheet">Request Technical Parameter Sheet</option>
                      <option value="general_inquiry">General Commercial Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Message & Delivery Specifications <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify destination access, expected delivery timeline, and plant receiving parameters..."
                      className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                        errors.message
                          ? "border-red-500 focus:ring-red-200"
                          : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Anti-Spam CAPTCHA */}
                  <div className="rounded-2xl border border-slate-200 bg-[#EFF7F0]/40 p-4">
                    <label className="block text-xs font-bold text-slate-700">
                      Anti-Spam Verification: What is 7 + 5? <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="captchaAnswer"
                      value={formData.captchaAnswer}
                      onChange={handleChange}
                      placeholder="Enter calculation result (number)"
                      className={`mt-2 w-full max-w-xs rounded-xl border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                        errors.captchaAnswer
                          ? "border-red-500 focus:ring-red-200"
                          : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                      }`}
                    />
                    {errors.captchaAnswer && (
                      <p className="mt-1 text-xs text-red-600">{errors.captchaAnswer}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#174F2C] py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#F28C28] disabled:opacity-50"
                    >
                      <span>{submitting ? "Transmitting..." : "Submit Commercial Enquiry"}</span>
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
