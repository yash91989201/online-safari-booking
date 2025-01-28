import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db";
import { user, account, session, verification } from "@/server/db/schema";
import { env } from "@/env";

export const auth = betterAuth({
  trustedOrigins: env.BETTER_AUTH_TRUSTED_ORIGINS.split(","),
  database: drizzleAdapter(db, {
    provider: "mysql",
    schema: {
      user,
      account,
      session,
      verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
});
