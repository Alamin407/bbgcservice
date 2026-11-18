import { boolean, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const enquiries = pgTable("bbgc_enquiries", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 254 }).notNull(),
  company: varchar("company", { length: 160 }).notNull(),
  service: varchar("service", { length: 100 }).notNull(),
  message: text("message").notNull(),
  consent: boolean("consent").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const subscribers = pgTable("bbgc_subscribers", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 254 }).notNull().unique(),
  subscribedAt: timestamp("subscribed_at", { withTimezone: true }).defaultNow().notNull(),
});
