import { VerifiedCheckIcon } from "@/components/icons/AgroIcons";
import { VerifiedSpec } from "@/data/content-sources";

export function SpecTable({
  specs,
  hsnCode,
  listedGst,
  physicalForm,
}: {
  specs: VerifiedSpec[];
  hsnCode?: string;
  listedGst?: string;
  physicalForm?: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#DCEBDD] bg-white shadow-[0_8px_30px_rgba(23,79,44,0.06)]">
      {/* Table Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DCEBDD] bg-[#EFF7F0]/60 px-6 py-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#174F2C]">
            Laboratory Parameter Specifications
          </span>
          <p className="text-xs text-slate-500">
            Source-Verified Physical & Chemical Analysis Limits
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {hsnCode && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700">
              <span className="text-slate-400">HSN:</span> {hsnCode}
            </span>
          )}
          {listedGst && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">
              <span className="text-amber-600">GST:</span> {listedGst}
            </span>
          )}
          {physicalForm && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
              <span className="text-emerald-600">Form:</span> {physicalForm}
            </span>
          )}
        </div>
      </div>

      {/* Table rows */}
      <div className="divide-y divide-slate-100 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50/50 text-[11px] font-black uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-6 py-3.5">Parameter</th>
              <th className="px-6 py-3.5">Contracted Specification Limit</th>
              <th className="px-6 py-3.5">Testing Standard & Tolerance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {specs.map((s, idx) => {
              const isNeedsReview = s.sourceStatus === "needs-review";
              return (
                <tr
                  key={idx}
                  className="transition-colors hover:bg-emerald-50/30"
                >
                  <td className="px-6 py-4 font-bold text-[#174F2C]">
                    {s.parameter}
                  </td>
                  <td className="px-6 py-4 font-space text-base font-bold text-slate-900">
                    {s.value}
                  </td>
                  <td className="px-6 py-4 text-xs">
                    {isNeedsReview ? (
                      <div className="flex items-center gap-1.5 text-amber-700">
                        <svg className="h-4 w-4 shrink-0 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span>Contractual Parameter (Negotiated per Batch)</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                        <VerifiedCheckIcon className="h-4 w-4 shrink-0 text-emerald-600" />
                        <span>IS 4333 / NIR Batch Verified</span>
                      </div>
                    )}
                    {s.notes && (
                      <p className="mt-1 max-w-sm text-[11px] font-normal text-slate-600">
                        {s.notes}
                      </p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Disclaimers footer */}
      <div className="border-t border-[#DCEBDD] bg-[#FFFDF9] px-6 py-3.5 text-[11px] text-slate-500">
        <p>
          * Analytical parameter limits conform to Indian agricultural trade standards and compound feed manufacturing thresholds. Certified batch test reports (COA) and computerized weighbridge slips accompany every dispatch.
        </p>
      </div>
    </div>
  );
}
