"use client";

import { SafariBookingForm } from "@/components/safari-booking-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClockIcon } from "lucide-react";

import { AdditionalInfoSection } from "@/components/additional-info-section";
import { SafariPricingCard } from "@/components/safari-pricing-card";

export default function SafariBookingPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Safari Pricing Tables */}
        <div className="space-y-6">
          <SafariPricingCard />

          {/* Safari Information Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-orange-600" />
                Safari Timings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-orange-50 p-4">
                  <h3 className="mb-2 font-semibold text-orange-800">
                    Morning Safari
                  </h3>
                  <p className="text-sm text-gray-600">06:30 AM - 10:00 AM</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Best for tiger sightings
                  </p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <h3 className="mb-2 font-semibold text-blue-800">
                    Evening Safari
                  </h3>
                  <p className="text-sm text-gray-600">02:30 PM - 06:00 PM</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Great for photography
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Booking Form */}
        <SafariBookingForm />
      </div>

      {/* Additional Information */}
      <AdditionalInfoSection />
    </main>
  );
}
