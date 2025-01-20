"use client";

import { useFormContext } from "react-hook-form";
import type { BookingFormType } from "@/lib/types";

export const ReviewAndPay = () => {
  const { watch } = useFormContext<BookingFormType>();
  const formData = watch();

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-lg border">
        <h2 className="border-b bg-gray-50 p-4 text-xl font-semibold">
          Booking summary
        </h2>
        <div className="divide-y">
          <div className="grid grid-cols-2 p-4">
            <div className="inline-flex items-center gap-3">
              <h3 className="font-medium">Safari date :</h3>
              <p>{formData.visitingDetails.date?.toLocaleDateString()}</p>
            </div>
            <div className="inline-flex items-center gap-3">
              <h3 className="font-medium">Safari zone :</h3>
              <p>{formData.visitingDetails.zone}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 p-4">
            <div className="inline-flex items-center gap-3">
              <h3 className="font-medium">Safari timing :</h3>
              <p>Morning</p>
            </div>
          </div>
          <div className="grid grid-cols-2 p-4">
            <div className="inline-flex items-center gap-3">
              <h3 className="font-medium">Safari type :</h3>
              <p>{formData.visitingDetails.vehicle}</p>
            </div>
            <div className="inline-flex items-center gap-3">
              <h3 className="font-medium">Contact number :</h3>
              <p>{formData.visitingDetails.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
