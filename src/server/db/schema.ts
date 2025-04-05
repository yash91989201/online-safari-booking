import cuid2 from "@paralleldrive/cuid2";
import {
  pgTableCreator,
  timestamp,
  date,
  varchar,
  pgTable,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `online-safari-booking_${name}`,
);

export const corbettBooking = pgTable("corbett_booking", {
  id: varchar("id")
    .primaryKey()
    .$defaultFn(() => cuid2.createId()),
  date: date("date").notNull(),
  vehicle: varchar("vehicle").notNull(),
  zone: varchar("zone").notNull(),
  timing: varchar("timing").notNull(),
  adults: varchar("adults").notNull(),
  children: varchar("children"),
  travelerName: varchar("traveler_name").notNull(),
  mobile: varchar("mobile").notNull(),
  email: varchar("email").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
