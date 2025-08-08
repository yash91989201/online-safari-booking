import * as z from "zod";

export const CorbettBookingFormSchema = z.object({
  date: z.date({ error: "Date is required" }),
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

export const SafariBookingFormSchema = z.object({
  date: z.date(),
  selectedZone: z.string().min(1, "Please select a safari zone."),
  selectedVehicle: z.string().min(1, "Please select a vehicle type."),
  selectedTime: z.string().min(1, "Please select a time slot."),
  adults: z.string().min(1, "Please specify the number of adults."),
  children: z.string().min(1, "Please specify the number of children."),
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits."),
  email: z.string().email("Invalid email address."),
});
