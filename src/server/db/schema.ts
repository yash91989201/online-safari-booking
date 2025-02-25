import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import {
  mysqlTable,
  mysqlTableCreator,
  text,
  varchar,
  timestamp,
  boolean,
  int,
} from "drizzle-orm/mysql-core";

export const createTable = mysqlTableCreator((name) => name);

export const enquiryTable = mysqlTable("enquiry", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => createId()),
  name: varchar("name", { length: 512 }).notNull(),
  email: varchar("email", { length: 512 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 15 }).notNull(),
  message: text("message").notNull(),
  resolved: boolean("resolved").default(false).notNull(),
});

export const corbettBookingTable = mysqlTable("corbett_booking", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => createId()),
  date: varchar("date", { length: 12 }),
  zone: varchar("zone", { length: 16 }),
  adults: int("adults"),
  childrens: int("childrens"),
  travellerName: varchar("traveller_name", { length: 256 }),
  phoneNumber: varchar("phone_number", { length: 16 }),
});

export const corbettBookingTableRelations = relations(
  corbettBookingTable,
  ({ many }) => ({
    visitors: many(corbettVisitorsTable, {
      relationName: "corbettBookingVisitors",
    }),
  }),
);

export const corbettVisitorsTable = mysqlTable("corbett_visitors", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => createId()),
  name: varchar("name", { length: 256 }),
  nationality: varchar("nationality", { length: 16 }),
  age: int("age"),
  idType: varchar("id_type", { length: 16 }),
  idNumber: varchar("id_number", { length: 16 }),
  corbettBookingId: varchar("booking_id", { length: 36 })
    .notNull()
    .references(() => corbettBookingTable.id),
});

export const corbettVisitorsTableRelations = relations(
  corbettVisitorsTable,
  ({ one }) => ({
    corbettBooking: one(corbettBookingTable, {
      fields: [corbettVisitorsTable.corbettBookingId],
      references: [corbettBookingTable.id],
      relationName: "corbettBookingVisitors",
    }),
  }),
);

export const user = mysqlTable("user", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const session = mysqlTable("session", {
  id: varchar("id", { length: 36 }).primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: varchar("token", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => user.id),
});

export const account = mysqlTable("account", {
  id: varchar("id", { length: 36 }).primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => user.id),
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

export const verification = mysqlTable("verification", {
  id: varchar("id", { length: 36 }).primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
