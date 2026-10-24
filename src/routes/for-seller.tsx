import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  CorporateArrowRight, 
  VerifiedCheckIcon, 
  DocumentUploadIcon, 
  ContractSpecIcon 
} from "@/components/icons/AgroIcons";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { PRODUCTS } from "@/data/products";
import { sellerFormSchema, SellerFormData } from "@/lib/validation/trade";
import { submitTradeRecord, SubmissionResult } from "@/lib/supabase";

export const Route = createFileRoute("/for-seller")({
  head: () => ({
    meta: [
      {
        title: "Seller Portal | Commodity Supply Offer - Brijrani (Krishi Varsha)",
      },
      {
        name: "description",
        content:
          "Register and offer agricultural commodities to Brijrani. Guaranteed transparent weighment, regional lab sampling, and fair mandi-linked settlement terms.",
      },
    ],
  }),
  component: ForSellerPage,
});

type SellerErrors = Partial<Record<keyof SellerFormData, string>>;

function ForSellerPage() {
  const defaultItem = PRODUCTS[0]?.name ?? "Rice Bran";

  const [formData, setFormData] = useState<SellerFormData>({
    employeeCode: "",
    vendorName: "",
    vendorAddress: "",
    contactPerson: "",
    contactNo: "",
    item: defaultItem,
    dispatchLocation: "",
    paymentTerms: "Against Dispatch Weighment",
    weight: "",
    rate: "",
    remarks: "",
  });

  const [fileName, setFileName] = useState<string>("");
  const [errors, setErrors] = useState<SellerErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const k = name as keyof SellerFormData;
    if (errors[k]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[k];
        return next;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validated = sellerFormSchema.safeParse(formData);
    if (!validated.success) {
      const fieldErrors: SellerErrors = {};
      validated.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof SellerFormData;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const res = await submitTradeRecord({
      tradeType: "seller",
      employeeCode: formData.employeeCode,
      partyName: formData.vendorName,
      partyAddress: formData.vendorAddress,
      contactPerson: formData.contactPerson || undefined,
      contactPhone: formData.contactNo,
      commodityItem: formData.item,
      location: formData.dispatchLocation,
      locationType: "dispatch",
      paymentTerms: formData.paymentTerms || undefined,
      weightQuantity: formData.weight,
      rate: formData.rate,
      rateType: "offered",
      remarks: formData.remarks || undefined,
      sampleFileName: fileName || undefined,
    });

    setSubmitting(false);
    setResult(res);
  };

  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#26332B]">
      <Header />

      <PageHero
        breadcrumbs={[{ label: "For Seller" }]}
        badgeText="Primary Sourcing & Mandi Origination"
        title="Seller Commodity Submission Portal"
        description="Offer raw agricultural commodities, milling co-products, or meal cakes directly to Brijrani (Krishi Varsha). We guarantee prompt sampling, transparent parameters, and dependable payment settlements."
      />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {result ? (
          <div className="rounded-3xl border border-emerald-500/40 bg-emerald-950 p-8 text-center text-white shadow-xl sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <VerifiedCheckIcon className="h-10 w-10" />
            </div>
            <h2 className="mt-6 font-space text-2xl font-black text-white sm:text-3xl">
              Commodity Offer Received Successfully!
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              {result.message}
            </p>
            <div className="mt-6 inline-block rounded-2xl border border-emerald-400/30 bg-emerald-900/60 px-6 py-3 font-mono text-base font-bold text-emerald-300">
              Reference ID: {result.referenceId}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Please save your reference ID for tracking. Our regional procurement manager
              will contact you at {formData.contactNo} to arrange sample testing.
            </p>
            <div className="mt-8">
              <button
                onClick={() => {
                  setResult(null);
                  setFormData({
                    employeeCode: "",
                    vendorName: "",
                    vendorAddress: "",
                    contactPerson: "",
                    contactNo: "",
                    item: defaultItem,
                    dispatchLocation: "",
                    paymentTerms: "Against Dispatch Weighment",
                    weight: "",
                    rate: "",
                    remarks: "",
                  });
                  setFileName("");
                }}
                className="rounded-full bg-[#F28C28] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#d96f12]"
              >
                Submit Another Offer
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white shadow-xl">
            {/* Header Form Strip */}
            <div className="border-b border-[#DCEBDD] bg-[#EFF7F0] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1F6B3A]">
                <ContractSpecIcon className="h-4 w-4" />
                <span>Agricultural Producer & Mill Sourcing Registration</span>
              </div>
              <h2 className="mt-1 font-space text-2xl font-black text-[#174F2C]">
                Farmer, FPO & Processing Mill Commodity Offer
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Direct procurement with transparent weighbridge settlement and scheduled fleet pickup.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6 sm:p-10">
              {/* Employee Code */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Employee Code <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="employeeCode"
                  value={formData.employeeCode}
                  onChange={handleChange}
                  placeholder="Enter authorized executive or registration code"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                    errors.employeeCode
                      ? "border-red-500 focus:ring-red-200"
                      : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                  }`}
                />
                {errors.employeeCode && (
                  <p className="mt-1.5 text-xs text-red-600">{errors.employeeCode}</p>
                )}
              </div>

              {/* Vendor Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Vendor Name (Firm / Trader Name) <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleChange}
                  placeholder="Enter business firm, mandi trader, or grower entity"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                    errors.vendorName
                      ? "border-red-500 focus:ring-red-200"
                      : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                  }`}
                />
                {errors.vendorName && (
                  <p className="mt-1.5 text-xs text-red-600">{errors.vendorName}</p>
                )}
              </div>

              {/* Vendor Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Vendor Address <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="vendorAddress"
                  rows={3}
                  value={formData.vendorAddress}
                  onChange={handleChange}
                  placeholder="Full office, mandi shop, or facility address"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                    errors.vendorAddress
                      ? "border-red-500 focus:ring-red-200"
                      : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                  }`}
                />
                {errors.vendorAddress && (
                  <p className="mt-1.5 text-xs text-red-600">{errors.vendorAddress}</p>
                )}
              </div>

              {/* Contact Person & Contact No */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Representative name"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Contact No <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                      errors.contactNo
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                    }`}
                  />
                  {errors.contactNo && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.contactNo}</p>
                  )}
                </div>
              </div>

              {/* Item & Dispatch Location */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Item (Commodity) <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="item"
                    value={formData.item}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-800 focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.slug} value={p.name}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                    <option value="Cotton DOC">Cotton DOC (Secondary)</option>
                    <option value="Sunflower DOC">Sunflower DOC (Secondary)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Dispatch Location <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="dispatchLocation"
                    value={formData.dispatchLocation}
                    onChange={handleChange}
                    placeholder="Mandi / Loading plant location"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                      errors.dispatchLocation
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                    }`}
                  />
                  {errors.dispatchLocation && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.dispatchLocation}</p>
                  )}
                </div>
              </div>

              {/* Payment Terms, Weight & Rate */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Payment Terms
                  </label>
                  <input
                    type="text"
                    name="paymentTerms"
                    value={formData.paymentTerms}
                    onChange={handleChange}
                    placeholder="e.g. Against Dispatch Weighment"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Weight (Quantity) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="e.g. 50 MT"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                      errors.weight
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                    }`}
                  />
                  {errors.weight && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.weight}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Rate (Offering Price) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="rate"
                    value={formData.rate}
                    onChange={handleChange}
                    placeholder="e.g. 23500/MT"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                      errors.rate
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                    }`}
                  />
                  {errors.rate && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.rate}</p>
                  )}
                </div>
              </div>

              {/* Remarks */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Remarks / Specifications Details
                </label>
                <textarea
                  name="remarks"
                  rows={3}
                  value={formData.remarks}
                  onChange={handleChange}
                  placeholder="Mention lot moisture, silica, bagging style, or loading terms"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                />
              </div>

              {/* Add a Sample Attachment */}
              <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center">
                <DocumentUploadIcon className="mx-auto h-8 w-8 text-slate-400" />
                <div className="mt-2 text-xs font-bold uppercase text-slate-700">
                  Add a Sample Attachment (Optional)
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Upload lot photograph or preliminary mandi test certificate (PDF, PNG, JPG up to 10MB)
                </p>
                <label className="mt-4 inline-block cursor-pointer rounded-full border border-slate-300 bg-slate-50 px-5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100">
                  <span>{fileName ? fileName : "Choose Document / Photo"}</span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.png,.jpg,.jpeg"
                    className="hidden"
                  />
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#174F2C] via-[#1F6B3A] to-[#174F2C] py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  <span>{submitting ? "Verifying & Transmitting..." : "Submit Commodity Sourcing Offer"}</span>
                  <CorporateArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
