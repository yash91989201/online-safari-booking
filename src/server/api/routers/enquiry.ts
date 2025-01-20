// UTILS
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
// TABLES
import { enquiryTable } from "@/server/db/schema";
// SCHEMAS
import { EnquiryResolvedSchema, EnquirySchema } from "@/lib/schema";
import { eq } from "drizzle-orm";

export const enquiryRouter = createTRPCRouter({
  create: publicProcedure
    .input(EnquirySchema)
    .mutation(async ({ ctx, input }): Promise<ProcedureStatusType> => {
      const queryRes = await ctx.db.insert(enquiryTable).values(input);

      if (queryRes[0].affectedRows === 0) {
        return {
          status: "FAILED",
          message: "Failed to submit enquiry, please try later!",
        };
      }

      return {
        status: "SUCCESS",
        message:
          "Your enquiry has been registered , we will contact you shortly.",
      };
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.query.enquiryTable.findMany();
  }),

  resolved: protectedProcedure
    .input(EnquiryResolvedSchema)
    .mutation(async ({ ctx, input }): Promise<ProcedureStatusType> => {
      const queryRes = await ctx.db
        .update(enquiryTable)
        .set({
          resolved: input.enquiryResolved,
        })
        .where(eq(enquiryTable.id, input.enquiryId));

      if (queryRes[0].affectedRows === 0) {
        return {
          status: "FAILED",
          message: "Unable to resolve query, try again",
        };
      }

      return {
        status: "SUCCESS",
        message: "Enquiry marked as resolved",
      };
    }),
});
