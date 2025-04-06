"use client";

import { useSession } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isPending, error } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !data?.user) {
      router.push("/auth/admin/login");
    }
  }, [data, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  if (data?.user) {
    return <>{children}</>;
  }

  return null;
}
