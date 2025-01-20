import { headers } from "next/headers";
import Link from "next/link";
import { auth } from "@/server/utils/auth";

export const DashboardLink = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session == null) {
    return null;
  }

  return <Link href="/admin">Dashboard</Link>;
};
