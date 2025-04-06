// generic-payment.router.ts
import { GenericPaymentFormSchema } from "@/lib/schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { genericPayments } from "@/server/db/schema";

export const genericPaymentRouter = createTRPCRouter({
  create: publicProcedure
    .input(GenericPaymentFormSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const [newPayment] = await ctx.db
          .insert(genericPayments)
          .values({
            amount: input.amount.toString(),
            name: input.name,
            email: input.email,
            mobile: input.mobile,
            zip: input.zip,
            country: input.country,
            city: input.city,
            remark: input.remark,
          })
          .returning();

        return {
          success: true,
          data: newPayment,
          message: "Payment registered successfully.",
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
          };
        }
        return {
          success: false,
          message: "Unknown error occurred while creating payment",
        };
      }
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const payments = await ctx.db
        .select()
        .from(genericPayments)
        .orderBy(genericPayments.createdAt);

      return {
        success: true,
        data: payments,
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching payments:", error);
        return {
          success: false,
          message: error.message,
        };
      }
      return {
        success: false,
        message: "Unknown error occurred while fetching payments",
      };
    }
  }),
});
