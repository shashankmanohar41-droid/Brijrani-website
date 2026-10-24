import { z } from "zod";

export const sellerFormSchema = z.object({
  employeeCode: z.string().min(1, "Employee Code is required"),
  vendorName: z.string().min(2, "Vendor/Company Name is required"),
  vendorAddress: z.string().min(5, "Vendor Address is required"),
  contactPerson: z.string().optional(),
  contactNo: z
    .string()
    .min(10, "Valid 10-digit phone number is required")
    .regex(/^[0-9+\s-]{10,15}$/, "Invalid phone number format"),
  item: z.string().min(1, "Please select an agricultural commodity"),
  dispatchLocation: z.string().min(2, "Dispatch Location / Mandi is required"),
  paymentTerms: z.string().optional(),
  weight: z
    .string()
    .min(1, "Please specify available quantity")
    .regex(/^[0-9.]+\s*(MT|Tons|Kg|Qtl)?$/i, "Enter numeric quantity (e.g. 50 MT)"),
  rate: z
    .string()
    .min(1, "Please specify expected commercial rate")
    .regex(/^[0-9.]+\s*(\/MT|\/Kg|\/Qtl)?$/i, "Enter numeric rate (e.g. 24000/MT)"),
  remarks: z.string().optional(),
});

export const buyerFormSchema = z.object({
  employeeCode: z.string().min(1, "Employee Code is required"),
  buyerName: z.string().min(2, "Company/Buyer Name is required"),
  buyerAddress: z.string().min(5, "Plant/Delivery Address is required"),
  contactPerson: z.string().optional(),
  contactNo: z
    .string()
    .min(10, "Valid 10-digit phone number is required")
    .regex(/^[0-9+\s-]{10,15}$/, "Invalid phone number format"),
  item: z.string().min(1, "Please select an agricultural commodity"),
  arrivalLocation: z.string().min(2, "Arrival Destination / Feed Plant is required"),
  paymentTerms: z.string().optional(),
  weight: z
    .string()
    .min(1, "Please specify required procurement quantity")
    .regex(/^[0-9.]+\s*(MT|Tons|Kg|Qtl)?$/i, "Enter numeric quantity (e.g. 100 MT)"),
  askingRate: z
    .string()
    .min(1, "Please specify target procurement rate")
    .regex(/^[0-9.]+\s*(\/MT|\/Kg|\/Qtl)?$/i, "Enter numeric rate (e.g. 23500/MT)"),
  remarks: z.string().optional(),
});

export type SellerFormData = z.infer<typeof sellerFormSchema>;
export type BuyerFormData = z.infer<typeof buyerFormSchema>;
