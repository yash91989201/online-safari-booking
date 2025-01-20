"use client";

import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export const LogoutButton = ({ className = "" }: { className?: string }) => {
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    return <Loader2 className="animate-spin" />;
  }

  if (data == null) return null;

  return (
    <Button className={cn(className)} onClick={() => authClient.signOut()}>
      Logout
    </Button>
  );
};
