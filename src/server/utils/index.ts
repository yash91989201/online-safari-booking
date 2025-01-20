import "server-only";
import { headers } from "next/headers";
import { forbidden } from "next/navigation";
// UTILS
import { auth } from "@/server/utils/auth";

export const protectedPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session == null) {
    forbidden();
  }
};
