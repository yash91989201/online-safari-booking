import cuid2 from "@paralleldrive/cuid2";
import {
  pgTableCreator,
  timestamp,
  date,
  varchar,
  pgTable,
  numeric,
  text,
} from "drizzle-orm/pg-core";

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

export const genericPayments = pgTable("generic_payment", {
  id: varchar("id")
    .primaryKey()
    .$defaultFn(() => cuid2.createId()),
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  mobile: varchar("mobile", { length: 20 }).notNull(),
  zip: varchar("zip", { length: 20 }).notNull(),
  country: varchar("country", { length: 100 }).notNull(),
  city: varchar("city", { length: 100 }).notNull(),
  remark: text("remark").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
