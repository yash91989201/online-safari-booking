import type * as z from "zod";
import type { BookingFormSchema, EnquirySchema } from "./schema";

export type EnquirySchemaType = z.infer<typeof EnquirySchema>;
export type BookingFormType = z.infer<typeof BookingFormSchema>;
export type BookingFormKeys = keyof BookingFormType;
