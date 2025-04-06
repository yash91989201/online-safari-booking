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

export const GenericPaymentFormSchema = z.object({
  amount: z.number().min(1, { message: "Amount is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  mobile: z.string().min(1, { message: "Mobile number is required" }),
  zip: z.string().min(1, { message: "Zip code is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  city: z.string().min(1, { message: "City name is required" }),
  remark: z.string().min(1, { message: "A small remark is required" }),
});
