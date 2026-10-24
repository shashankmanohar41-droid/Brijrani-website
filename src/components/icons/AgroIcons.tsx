import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

/**
 * Bespoke Hand-Crafted Agricultural & Industrial Trade Icons
 * Replaces generic AI-template / wireframe icons with authentic agro-commodity trade iconography.
 */

// 1. Authentic Grain Ear / Wheat Sheaf (Paddy & Cereal Crops)
export function GrainEarIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 22V10" />
      <path d="M12 10c0-4 3.5-7 7-7-1 4-4 7-7 7z" />
      <path d="M12 10c0-4-3.5-7-7-7 1 4 4 7 7 7z" />
      <path d="M12 14c0-3 3-5 5.5-5-.8 3-3 5-5.5 5z" />
      <path d="M12 14c0-3-3-5-5.5-5 .8 3 3 5 5.5 5z" />
      <path d="M12 18c0-2.5 2.5-4 4.5-4-.6 2.5-2.5 4-4.5 4z" />
      <path d="M12 18c0-2.5-2.5-4-4.5-4 .6 2.5 2.5 4 4.5 4z" />
    </svg>
  );
}

// 2. Commercial Dharam Kanta Weighbridge & Precision Scale
export function WeighbridgeScaleIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 3v18" />
      <path d="M6 21h12" />
      <path d="M4 7h16" />
      <path d="m4 7 3 7h-6l3-7z" />
      <path d="m20 7 3 7h-6l3-7z" />
      <circle cx="12" cy="5" r="1.5" />
    </svg>
  );
}

// 3. Heavy Commercial Multi-Axle Freight Truck
export function HeavyTruckIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M1 4h14v12H1z" />
      <path d="M15 8h4.5l3.5 4v4h-8V8z" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="11" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M15 16h-1.5" />
      <path d="M7.5 16H8.5" />
      <path d="M1 16H2.5" />
    </svg>
  );
}

// 4. Analytical Laboratory Conical Flask & Assay Meniscus
export function LabFlaskIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M10 2v5.5L4.2 18.2A2 2 0 0 0 5.9 21h12.2a2 2 0 0 0 1.7-2.8L14 7.5V2" />
      <path d="M8.5 2h7" />
      <path d="M7 15h10" />
      <circle cx="10" cy="18" r="1" fill="currentColor" />
      <circle cx="14" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

// 5. Official Quality Guarantee & Certificate Stamp (ISO / BIS Certified Seal)
export function CertifiedSealIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 2l2.4 2.8 3.7-.4 1.2 3.5 3.3 1.7-1 3.6 2 3.1-2.9 2.3-.1 3.7-3.7.8-1.9 3.2L12 22l-3-1.7-1.9-3.2-3.7-.8-.1-3.7-2.9-2.3 2-3.1-1-3.6 3.3-1.7 1.2-3.5 3.7.4L12 2z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// 6. Bulk Storage Elevator & Grain Silo Complex
export function GrainSiloIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M4 22V9c0-3.3 2.7-6 6-6s6 2.7 6 6v13" />
      <path d="M16 22V11c0-2.2 1.8-4 4-4s4 1.8 4 4v11" />
      <path d="M2 22h22" />
      <path d="M4 9h12" />
      <path d="M4 14h12" />
      <path d="M4 18h12" />
    </svg>
  );
}

// 7. Verified Contract / Technical Specification Sheet
export function ContractSpecIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
      <circle cx="16" cy="17" r="1.5" />
    </svg>
  );
}

// 8. Industrial Document Upload / Requisition Dispatch
export function DocumentUploadIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
      <polyline points="16 8 12 4 8 8" />
      <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
  );
}

// 9. Verified Double Checkmark / Quality Approved
export function VerifiedCheckIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 5-5" />
    </svg>
  );
}

// 10. Mandi Hub / GPS Origin Locator
export function MandiLocationIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 21s-7-6.5-7-11.5a7 7 0 0 1 14 0C19 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

// 11. Direct Commercial WhatsApp & Telephonic Desk
export function PhoneDeskIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// 12. Trade Dispatch Correspondence / Envelope
export function DispatchMailIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6.5L2 7" />
    </svg>
  );
}

// 13. Directional Commercial Action Arrow
export function CorporateArrowRight({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// 14. Directional Back Arrow
export function CorporateArrowLeft({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

// 15. Sun Dehydration & Curing Symbol
export function SolarCuringIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

// 16. High Protein Kjeldahl Assay Molecule
export function ProteinMoleculeIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="m12 3 7 4v8l-7 4-7-4V7z" />
      <circle cx="12" cy="11" r="2.5" />
      <path d="M12 3v5.5" />
      <path d="m19 15-4.5-2.5" />
      <path d="M5 15l4.5-2.5" />
    </svg>
  );
}

// 17. Cattle & Dairy Special Symbol
export function DairyCattleIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      {/* Horns & Head contour of cow */}
      <path d="M5 4c0 3 2 4 4 4" />
      <path d="M19 4c0 3-2 4-4 4" />
      <path d="M9 8h6" />
      <path d="M8 8v7a4 4 0 0 0 8 0V8" />
      <circle cx="10" cy="11" r="1" fill="currentColor" />
      <circle cx="14" cy="11" r="1" fill="currentColor" />
      <path d="M10 16h4" />
    </svg>
  );
}

// 18. Energy & Starch Cereal Input Symbol
export function CerealStarchIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 2C7 7 6 13 8 18a5 5 0 0 0 8 0c2-5 1-11-4-16z" />
      <path d="M12 7v10" />
      <path d="M9.5 12h5" />
    </svg>
  );
}

// 19. Dispatch Schedule & Clock
export function DispatchClockIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// 20. Calculator / Volume Computation
export function CalculatorTradeIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="4" y="2" width="16" height="20" rx="3" />
      <rect x="7" y="5" width="10" height="4" rx="1" />
      <circle cx="8" cy="13" r="1" fill="currentColor" />
      <circle cx="12" cy="13" r="1" fill="currentColor" />
      <circle cx="16" cy="13" r="1" fill="currentColor" />
      <circle cx="8" cy="17" r="1" fill="currentColor" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
      <circle cx="16" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

// 21. Corporate Modern Menu Icon
export function ModernMenuIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="7" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

// 22. Corporate Close / Dismiss Icon
export function ModernCloseIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
