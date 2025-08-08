import type { z } from "zod";
import type {
  CorbettBookingFormSchema,
  GenericPaymentFormSchema,
  SafariBookingFormSchema,
} from "./schema";

export type CorbettBookingFormType = z.infer<typeof CorbettBookingFormSchema>;
export type GenericPaymentFormType = z.infer<typeof GenericPaymentFormSchema>;
export type SafariBookingFormType = z.infer<typeof SafariBookingFormSchema>;
