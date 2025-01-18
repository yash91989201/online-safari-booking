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

export const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

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

  const { handleSubmit, formState, trigger } = bookingForm;
  console.log(formState.errors);
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

  const onSubmit = async (data: BookingFormType) => {
    console.log(currentStep);
    // Handle final submission
    console.log("Form submitted:", data);
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  const nextStep = async () => {
    const field = steps[currentStep]?.field;
    if (field === undefined) return;

    const output = await trigger(field as BookingFormKeys);
    console.log(output);
    if (!output) return;

    if (currentStep < steps.length - 2) {
      await handleSubmit(onSubmit)();
    }

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

  return (
    <Card>
      <CardHeader>
        <FormStepper steps={steps} />
      </CardHeader>
      <Form {...bookingForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>{renderStep()}</CardContent>
          <CardFooter className="justify-center">
            {currentStep == steps.length - 1 ? (
              <Button className="rounded-md bg-warning px-8 py-2 text-black hover:bg-warning/80">
                Pay: Rs. 7,500
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
    </Card>
  );
};
