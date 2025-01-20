// UTILS
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
// TABLES
import { corbettBookingTable, corbettVisitorsTable } from "@/server/db/schema";
// SCHEMAS
import { CorbettBookingInput } from "@/lib/schema";
import { createId } from "@paralleldrive/cuid2";

export const corbettBookingRouter = createTRPCRouter({
  create: publicProcedure
    .input(CorbettBookingInput)
    .mutation(async ({ ctx, input }): Promise<ProcedureStatusType> => {
      const bookingId = createId();
      const createBookingQueryRes = await ctx.db
        .insert(corbettBookingTable)
        .values({
          id: bookingId,
          date: input.visitingDetails.date,
          adults: input.visitingDetails.adults,
          childrens: input.visitingDetails.children,
          phoneNumber: input.visitingDetails.phoneNumber,
          travellerName: input.visitingDetails.travellerName,
          zone: input.visitingDetails.zone,
        });

      if (createBookingQueryRes[0].affectedRows === 0) {
        return {
          status: "FAILED",
          message: "Unable to create booking",
        };
      }

      const idProofs = input.idProof;
      const createVisitorsAffectedRows = await Promise.all(
        idProofs.map(async (visitor) => {
          const createVisitorQueryRes = await ctx.db
            .insert(corbettVisitorsTable)
            .values({
              age: visitor.age,
              idNumber: visitor.idDetail,
              idType: visitor.idType,
              name: visitor.name,
              nationality: visitor.nationality,
              corbettBookingId: bookingId,
            });

          return createVisitorQueryRes[0].affectedRows;
        }),
      );

      const createVisitorsError = createVisitorsAffectedRows.some(
        (row) => row === 0,
      );
      if (createVisitorsError) {
        return {
          status: "FAILED",
          message: "Unable to create booking",
        };
      }

      return {
        status: "SUCCESS",
        message:
          "Booking created successfuly, we will be contacting you shortly",
      };
    }),
});
