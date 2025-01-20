import * as z from "zod";

import parsePhoneNumberFromString from "libphonenumber-js";

export const PhoneSchema = z.string().transform((arg, ctx) => {
  const phone = parsePhoneNumberFromString(arg, {
    // set this to use a default country when the phone number omits country code
    defaultCountry: "IN",

    // set to false to require that the whole string is exactly a phone number,
    // otherwise, it will search for a phone number anywhere within the string
    extract: false,
  });

  // when it's good
  if (phone?.isValid()) {
    return phone.number;
  }

  // when it's not
  ctx.addIssue({
    code: z.ZodIssueCode.custom,
    message: "Invalid phone number",
  });
  return z.NEVER;
});

export const EnquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: PhoneSchema,
  message: z.string().min(1, "Please provide an enquiry message"),
});

export const BookingFormSchema = z.object({
  visitingDetails: z.object({
    date: z.date({ message: "Booking date is required" }),
    zone: z.string().min(1, "Zone is required"),
    vehicle: z.string().min(1, "Vehicle is required"),
    adults: z.number().min(1).max(6),
    children: z.number().min(0).max(6),
    travellerName: z.string().min(1, "Traveller name is required"),
    phoneNumber: PhoneSchema,
  }),
  idProof: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      age: z.number().min(1),
      nationality: z.enum(["indian", "foreigner"]),
      idType: z.enum(["aadhar_card", "passport"]),
      idDetail: z.string().min(1, "ID number is required"),
    }),
  ),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const SignupSchema = z
  .object({
    name: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const EnquiryResolvedSchema = z.object({
  enquiryId: z.string(),
  enquiryResolved: z.boolean(),
});
