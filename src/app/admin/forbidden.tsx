import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function ForbiddenPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <Card className="w-full max-w-lg border-none text-center shadow-md">
        <CardHeader>
          <div className="flex justify-center">
            <AlertTriangle className="h-16 w-16 text-destructive" />
          </div>
          <CardTitle className="mt-4 text-2xl font-semibold">
            Unauthorized Access
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            You are not authorized to view this page. Please check your
            permissions or contact an administrator.
          </p>
        </CardContent>
        <CardFooter className="justify-center gap-3">
          <Link
            href="/"
            className={buttonVariants({
              variant: "outline",
              className: "rounded-lg",
            })}
          >
            Go to Home
          </Link>
          <Link
            href="/auth/admin/log-in"
            className={buttonVariants({ className: "rounded-lg" })}
          >
            Admin Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
