import { z } from "zod";

export const enquiryFormSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  companyName: z.string().optional(),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .min(10, "Please provide a valid 10-digit phone number")
    .regex(/^[0-9+\s-]{10,15}$/, "Invalid phone format"),
  commodity: z.string().min(1, "Please select a commodity"),
  quantity: z.string().optional(),
  enquiryType: z.enum(["bulk_quotation", "sample_request", "specification_sheet", "general_inquiry"]),
  message: z.string().min(10, "Please specify your requirements or receiving parameters"),
  captchaAnswer: z.string().min(1, "Anti-spam validation is required"),
});

export type EnquiryFormData = z.infer<typeof enquiryFormSchema>;
