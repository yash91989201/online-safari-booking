import type * as z from "zod";
import type {
  BookingFormSchema,
  EnquiryResolvedSchema,
  EnquirySchema,
  LoginSchema,
  SignupSchema,
} from "./schema";

export type EnquirySchemaType = z.infer<typeof EnquirySchema>;
export type BookingFormType = z.infer<typeof BookingFormSchema>;
export type BookingFormKeys = keyof BookingFormType;
export type LoginType = z.infer<typeof LoginSchema>;
export type SignupType = z.infer<typeof SignupSchema>;
export type EnquiryResolvedType = z.infer<typeof EnquiryResolvedSchema>;
