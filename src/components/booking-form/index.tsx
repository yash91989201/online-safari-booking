"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormStepper } from "./form-stepper";
import { VisitorDetails } from "./visitor-details";
import { IdProof } from "./id-proof";
import { ReviewAndPay } from "./review-and-pay";
import type { BookingFormKeys, BookingFormType } from "@/lib/types";
import { BookingFormSchema } from "@/lib/schema";
import { Button } from "../ui/button";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { api } from "@/trpc/react";
import { getDayFromDate, showMutationResToast } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export const BookingForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [calculatedAmount, setCalculatedAmount] = useState(0);

  const {
    mutateAsync: createCorbettBooking,
    isPending: creatingCorbettBooking,
  } = api.corbettBooking.create.useMutation();

  const bookingForm = useForm<BookingFormType>({
    resolver: zodResolver(BookingFormSchema),
    defaultValues: {
      visitingDetails: {
        travellerName: "",
        phoneNumber: "",
        vehicle: "",
        zone: "",
      },
      idProof: [],
    },
  });

  const { handleSubmit, trigger, watch } = bookingForm;
  const formData = watch();

  const steps = [
    {
      title: "Visitor details",
      completed: currentStep > 0,
      current: currentStep === 0,
      field: "visitingDetails",
    },
    {
      title: "ID proof",
      completed: currentStep > 1,
      current: currentStep === 1,
      field: "idProof" as const,
    },
    {
      title: "Review & pay",
      completed: false,
      current: currentStep === 2,
    },
  ];

  const calculatePrice = () => {
    const { vehicle, adults, children } = formData.visitingDetails;
    if (vehicle === "jeep") {
      return 7500; // Flat rate
    } else if (vehicle === "canter") {
      return 2200 * (adults + children);
    }
    return 0;
  };

  const onSubmit = async () => {
    const totalPrice = calculatePrice();
    setCalculatedAmount(totalPrice);
    setShowPaymentDialog(true);
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  const nextStep = async () => {
    const field = steps[currentStep]?.field;
    const title = steps[currentStep]?.title;
    if (field === undefined && title === undefined) return;

    const output = await trigger(field as BookingFormKeys);
    if (!output) return;

    setCurrentStep((step) => step + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <VisitorDetails />;
      case 1:
        return <IdProof />;
      case 2:
        return <ReviewAndPay />;
      default:
        return null;
    }
  };

  const handlePaymentComplete = async () => {
    // Trigger the TRPC mutation to create the booking
    const bookingData = {
      visitingDetails: {
        ...formData.visitingDetails,
        date: getDayFromDate(formData.visitingDetails.date),
      },
      idProof: formData.idProof.map((visitor) => ({
        name: visitor.name,
        age: visitor.age,
        nationality: visitor.nationality,
        idType: visitor.idType,
        idDetail: visitor.idDetail,
      })),
    };

    const mutationRes = await createCorbettBooking(bookingData);

    // Show the response as a toast notification
    showMutationResToast({
      status: mutationRes.status,
      message: mutationRes.message,
    });

    router.refresh();
  };

  return (
    <Card>
      <CardHeader className="p-3 md:p-6">
        <FormStepper steps={steps} />
      </CardHeader>
      <Form {...bookingForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="p-3 md:p-6">{renderStep()}</CardContent>
          <CardFooter className="justify-center">
            {currentStep === steps.length - 1 ? (
              <Button className="rounded-md bg-warning px-8 py-2 text-black hover:bg-warning/80">
                Pay: Rs. {calculatePrice()}
              </Button>
            ) : (
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  className="rounded-md px-8 py-2"
                  onClick={prevStep}
                >
                  Prev
                </Button>
                <Button
                  type="button"
                  className="rounded-md px-8 py-2"
                  onClick={nextStep}
                >
                  Next
                </Button>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>

      {/* Payment Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="relative mx-auto h-48 w-48">
              <Image
                src="/assets/phone-pe-qr-code.png"
                alt="Phone Pe QR Code"
                fill={true}
                loading="eager"
              />
            </div>
            <p className="text-center">
              Scan this code and pay Rs. {calculatedAmount}. Once the payment
              has been made from your end, click on the &quot;Payment
              Complete&quot; button below.
            </p>
          </div>
          <DialogFooter>
            <Button
              type="button"
              className="rounded-md px-8 py-2"
              onClick={handlePaymentComplete}
            >
              {creatingCorbettBooking && (
                <Loader2 className="mr-1.5 animate-spin" />
              )}
              Payment Complete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
