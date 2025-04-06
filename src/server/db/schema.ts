import cuid2 from "@paralleldrive/cuid2";
import {
  pgTableCreator,
  timestamp,
  date,
  varchar,
  pgTable,
  numeric,
  text,
  boolean,
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

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
