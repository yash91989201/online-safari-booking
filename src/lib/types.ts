import type { z } from "zod";
import type { CorbettBookingFormSchema } from "./schema";

export type CorbettBookingFormType = z.infer<typeof CorbettBookingFormSchema>;
