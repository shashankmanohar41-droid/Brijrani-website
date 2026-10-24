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
import { buyerFormSchema, BuyerFormData } from "@/lib/validation/trade";
import { submitTradeRecord, SubmissionResult } from "@/lib/supabase";

export const Route = createFileRoute("/for-buyer")({
  head: () => ({
    meta: [
      {
        title: "Buyer Portal | Feed Commodity Procurement Requisition - Brijrani",
      },
      {
        name: "description",
        content:
          "Submit your agro-commodity procurement requirement to Brijrani. Verified protein, moisture, and silica specifications with nationwide GPS-tracked fleet dispatch.",
      },
    ],
  }),
  component: ForBuyerPage,
});

type BuyerErrors = Partial<Record<keyof BuyerFormData, string>>;

function ForBuyerPage() {
  const defaultItem = PRODUCTS[4]?.name ?? "De-Oiled Rice Bran (DORB)";

  const [formData, setFormData] = useState<BuyerFormData>({
    employeeCode: "",
    buyerName: "",
    buyerAddress: "",
    contactPerson: "",
    contactNo: "",
    item: defaultItem,
    arrivalLocation: "",
    paymentTerms: "100% Against Plant Delivery",
    weight: "",
    askingRate: "",
    remarks: "",
  });

  const [fileName, setFileName] = useState<string>("");
  const [errors, setErrors] = useState<BuyerErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const k = name as keyof BuyerFormData;
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

    const validated = buyerFormSchema.safeParse(formData);
    if (!validated.success) {
      const fieldErrors: BuyerErrors = {};
      validated.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof BuyerFormData;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const res = await submitTradeRecord({
      tradeType: "buyer",
      employeeCode: formData.employeeCode,
      partyName: formData.buyerName,
      partyAddress: formData.buyerAddress,
      contactPerson: formData.contactPerson || undefined,
      contactPhone: formData.contactNo,
      commodityItem: formData.item,
      location: formData.arrivalLocation,
      locationType: "arrival",
      paymentTerms: formData.paymentTerms || undefined,
      weightQuantity: formData.weight,
      rate: formData.askingRate,
      rateType: "asking",
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
        breadcrumbs={[{ label: "For Buyer" }]}
        badgeText="Industrial Procurement & Contracting Desk"
        title="Buyer Commodity Procurement Portal"
        description="Submit your commercial feed mill or institutional procurement requirements. We align lab-verified nutritional limits, origin selection, and scheduled GPS-monitored dispatches to your delivery bays."
      />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {result ? (
          <div className="rounded-3xl border border-emerald-500/40 bg-emerald-950 p-8 text-center text-white shadow-xl sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <VerifiedCheckIcon className="h-10 w-10" />
            </div>
            <h2 className="mt-6 font-space text-2xl font-black text-white sm:text-3xl">
              Procurement Requisition Logged Successfully!
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              {result.message}
            </p>
            <div className="mt-6 inline-block rounded-2xl border border-emerald-400/30 bg-emerald-900/60 px-6 py-3 font-mono text-base font-bold text-emerald-300">
              Reference ID: {result.referenceId}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Our trading desk will review available crop origin lots and deliver a verified
              commercial offer to {formData.contactNo} within 24 hours.
            </p>
            <div className="mt-8">
              <button
                onClick={() => {
                  setResult(null);
                  setFormData({
                    employeeCode: "",
                    buyerName: "",
                    buyerAddress: "",
                    contactPerson: "",
                    contactNo: "",
                    item: defaultItem,
                    arrivalLocation: "",
                    paymentTerms: "100% Against Plant Delivery",
                    weight: "",
                    askingRate: "",
                    remarks: "",
                  });
                  setFileName("");
                }}
                className="rounded-full bg-[#F28C28] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#d96f12]"
              >
                Submit Another Requisition
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white shadow-xl">
            {/* Header Form Strip */}
            <div className="border-b border-[#DCEBDD] bg-[#EFF7F0] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1F6B3A]">
                <ContractSpecIcon className="h-4 w-4" />
                <span>Commercial Purchase Requisition (RFQ)</span>
              </div>
              <h2 className="mt-1 font-space text-2xl font-black text-[#174F2C]">
                Industrial Feed Mill Procurement & Delivery Order
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Specify your required tonnage, quality parameter thresholds, and target delivery godown.
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
                  placeholder="Enter procurement manager code or reference number"
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

              {/* Buyer Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Buyer Name (Feed Mill / Company Name) <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="buyerName"
                  value={formData.buyerName}
                  onChange={handleChange}
                  placeholder="Enter corporate mill entity or institutional buyer name"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                    errors.buyerName
                      ? "border-red-500 focus:ring-red-200"
                      : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                  }`}
                />
                {errors.buyerName && (
                  <p className="mt-1.5 text-xs text-red-600">{errors.buyerName}</p>
                )}
              </div>

              {/* Buyer Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Buyer Address (Corporate / Billing Address) <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="buyerAddress"
                  rows={3}
                  value={formData.buyerAddress}
                  onChange={handleChange}
                  placeholder="Full billing and operational office address"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                    errors.buyerAddress
                      ? "border-red-500 focus:ring-red-200"
                      : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                  }`}
                />
                {errors.buyerAddress && (
                  <p className="mt-1.5 text-xs text-red-600">{errors.buyerAddress}</p>
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
                    placeholder="Procurement Officer / Formulator Name"
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

              {/* Item & Arrival Location */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Item (Required Commodity) <span className="text-red-600">*</span>
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
                    Arrival Location (Plant Delivery Destination) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="arrivalLocation"
                    value={formData.arrivalLocation}
                    onChange={handleChange}
                    placeholder="Feed plant / unloading godown location"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                      errors.arrivalLocation
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                    }`}
                  />
                  {errors.arrivalLocation && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.arrivalLocation}</p>
                  )}
                </div>
              </div>

              {/* Payment Terms, Weight & Asking Rate */}
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
                    placeholder="e.g. Against Lab Approval"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Weight (Required Volume) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="e.g. 100 MT"
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
                    Asking Rate (Target Procurement Price) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="askingRate"
                    value={formData.askingRate}
                    onChange={handleChange}
                    placeholder="e.g. 23000/MT"
                    className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                      errors.askingRate
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:border-[#174F2C] focus:ring-[#174F2C]/10"
                    }`}
                  />
                  {errors.askingRate && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.askingRate}</p>
                  )}
                </div>
              </div>

              {/* Remarks */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Remarks / Custom Receiving Specifications
                </label>
                <textarea
                  name="remarks"
                  rows={3}
                  value={formData.remarks}
                  onChange={handleChange}
                  placeholder="Specify maximum moisture ceiling, protein floor, sand/silica limits, or delivery schedule"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#174F2C] focus:outline-none focus:ring-2 focus:ring-[#174F2C]/10"
                />
              </div>

              {/* Add a Sample Attachment */}
              <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center">
                <DocumentUploadIcon className="mx-auto h-8 w-8 text-slate-400" />
                <div className="mt-2 text-xs font-bold uppercase text-slate-700">
                  Attach Desired Specification Sheet (Optional)
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Upload your plant receiving parameters or tender document (PDF, PNG, JPG up to 10MB)
                </p>
                <label className="mt-4 inline-block cursor-pointer rounded-full border border-slate-300 bg-slate-50 px-5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100">
                  <span>{fileName ? fileName : "Choose Document"}</span>
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
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#F28C28] via-[#E07A18] to-[#D96F12] py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  <span>{submitting ? "Transmitting Requisition..." : "Submit Buyer Procurement Requisition"}</span>
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
