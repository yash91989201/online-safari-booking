import * as z from "zod";

export const CorbettBookingFormSchema = z.object({
  date: z.date({ required_error: "Date is required" }),
  vehicle: z.string().min(1, "Please select a vehicle"),
  zone: z.string().min(1, "Please select a zone"),
  timing: z.string().min(1, "Please select a timing"),
  adults: z.string().min(1, "Please select number of adults"),
  children: z.string().optional(),
  travelerName: z.string().min(4, "Traveler name is required"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Valid email is required"),
});
