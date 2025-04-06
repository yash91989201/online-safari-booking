"use client";

import { api } from "@/trpc/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

export default function PaymentsDashboard() {
  const { data: paymentsData, isLoading } =
    api.genericPayment.getAll.useQuery();

  return (
    <div className="bg-muted/40 min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-foreground mb-8 text-4xl font-bold tracking-tight">
          💰 Generic Payments
        </h1>

        <Card className="border-none shadow-none">
          <CardHeader className="mb-4">
            <CardTitle className="flex items-center justify-between">
              <span className="text-lg font-semibold">All Payments</span>
              <Badge variant="outline" className="text-sm">
                Total: {paymentsData?.data?.length ?? 0}
              </Badge>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {isLoading ? (
              [...(Array(5) as number[])].map((_, i) => (
                <Skeleton key={i} className="h-[120px] w-full rounded-xl" />
              ))
            ) : paymentsData?.success && paymentsData?.data?.length ? (
              <div className="grid grid-cols-1 gap-6">
                {paymentsData.data.map((payment) => (
                  <Card
                    key={payment.id}
                    className="bg-background rounded-xl border transition-all hover:shadow-md"
                  >
                    <CardContent className="p-6">
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <p className="text-muted-foreground text-sm font-medium">
                            Amount
                          </p>
                          <p className="text-base font-semibold">
                            ₹{payment.amount}
                          </p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-sm font-medium">
                            Payer
                          </p>
                          <p className="text-base">{payment.name}</p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-sm font-medium">
                            Contact
                          </p>
                          <p className="text-sm">{payment.email}</p>
                          <p className="text-sm">{payment.mobile}</p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-sm font-medium">
                            Location
                          </p>
                          <p className="text-sm">
                            {payment.city}, {payment.country} - {payment.zip}
                          </p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-sm font-medium">
                            Remark
                          </p>
                          <p className="line-clamp-2 text-sm">
                            {payment.remark}
                          </p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-sm font-medium">
                            Created At
                          </p>
                          <p className="text-sm">
                            {payment.createdAt &&
                              format(payment.createdAt, "MMM d, yyyy HH:mm")}
                          </p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-sm font-medium">
                            Last Updated
                          </p>
                          <p className="text-sm">
                            {payment.updatedAt &&
                              format(payment.updatedAt, "MMM d, yyyy HH:mm")}
                          </p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-sm font-medium">
                            Status
                          </p>
                          <Badge variant="outline" className="text-xs">
                            Received
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-muted-foreground flex h-64 items-center justify-center text-lg">
                {paymentsData?.success
                  ? "No payments found"
                  : (paymentsData?.message ?? "Error loading payments")}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
