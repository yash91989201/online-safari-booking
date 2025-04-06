"use client";

import { api } from "@/trpc/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import ProtectedRoute from "@/components/shared/protected-route";

export default function BookingsDashboard() {
  const { data: bookings, isLoading } = api.corbettBooking.getAll.useQuery();

  return (
    <ProtectedRoute>
      <div className="bg-muted/40 min-h-screen p-6 md:p-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-foreground mb-8 text-4xl font-bold tracking-tight">
            🐾 Corbett Bookings
          </h1>

          <Card className="border-none shadow-none">
            <CardHeader className="mb-4">
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg font-semibold">Recent Bookings</span>
                <Badge variant="outline" className="text-sm">
                  Total: {bookings?.length ?? 0}
                </Badge>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {isLoading ? (
                [...(Array(5) as number[])].map((_, i) => (
                  <Skeleton key={i} className="h-[120px] w-full rounded-xl" />
                ))
              ) : bookings?.length ? (
                <div className="grid grid-cols-1 gap-6">
                  {bookings.map((booking) => (
                    <Card
                      key={booking.id}
                      className="bg-background rounded-xl border transition-all hover:shadow-md"
                    >
                      <CardContent className="p-6">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                          <div>
                            <p className="text-muted-foreground text-sm font-medium">
                              Date
                            </p>
                            <p className="text-base font-semibold">
                              {format(new Date(booking.date), "MMM d, yyyy")}
                            </p>
                          </div>

                          <div>
                            <p className="text-muted-foreground text-sm font-medium">
                              Traveler
                            </p>
                            <p className="text-base">{booking.travelerName}</p>
                          </div>

                          <div>
                            <p className="text-muted-foreground text-sm font-medium">
                              Vehicle
                            </p>
                            <Badge variant="outline" className="text-xs">
                              {booking.vehicle}
                            </Badge>
                          </div>

                          <div>
                            <p className="text-muted-foreground text-sm font-medium">
                              Zone
                            </p>
                            <Badge variant="secondary" className="text-xs">
                              {booking.zone}
                            </Badge>
                          </div>

                          <div>
                            <p className="text-muted-foreground text-sm font-medium">
                              Timing
                            </p>
                            <p className="text-base capitalize">
                              {booking.timing.toLowerCase()}
                            </p>
                          </div>

                          <div>
                            <p className="text-muted-foreground text-sm font-medium">
                              People
                            </p>
                            <div className="mt-1 flex flex-wrap gap-2">
                              <Badge>{booking.adults} Adults</Badge>
                              {booking?.children === "0" && (
                                <Badge variant="outline">
                                  {booking.children} Children
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div>
                            <p className="text-muted-foreground text-sm font-medium">
                              Contact
                            </p>
                            <p className="text-sm">{booking.email}</p>
                            <p className="text-sm">{booking.mobile}</p>
                          </div>

                          <div>
                            <p className="text-muted-foreground text-sm font-medium">
                              Booked At
                            </p>
                            <p className="text-sm">
                              {booking.createdAt &&
                                format(booking.createdAt, "MMM d, yyyy HH:mm")}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-muted-foreground flex h-64 items-center justify-center text-lg">
                  No bookings found
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}
