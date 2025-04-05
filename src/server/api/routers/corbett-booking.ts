import { CorbettBookingFormSchema } from "@/lib/schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { corbettBooking } from "@/server/db/schema";

export const corbettBookingRouter = createTRPCRouter({
  create: publicProcedure
    .input(CorbettBookingFormSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const formattedDate = input.date.toISOString().split("T")[0];
        if (!formattedDate) throw new Error("Invalid date");

        await ctx.db.insert(corbettBooking).values({
          ...input,
          date: formattedDate,
        });

        return {
          success: true,
          message:
            "Booking registered, we will contact you shortly after the confirmation.",
        };
      } catch (error) {
        if (error instanceof Error)
          return {
            success: false,
            message: error.message,
          };
      }
      return {
        success: false,
        message: "Unknown Error occurred",
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.corbettBooking.findMany();
  }),
});
