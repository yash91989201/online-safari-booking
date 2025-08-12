"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarIcon,
  UsersIcon,
  PhoneIcon,
  MailIcon,
  UserIcon,
  ArrowLeft,
} from "lucide-react";
import { SafariBookingFormSchema } from "@/lib/schema";
import { type SafariBookingFormType } from "@/lib/types";
import { useFormContext } from "react-hook-form";

export const SafariBookingForm = () => {
  const form = useForm<SafariBookingFormType>({
    resolver: zodResolver(SafariBookingFormSchema),
    defaultValues: {
      date: new Date(),
      selectedZone: "",
      selectedVehicle: "",
      selectedTime: "",
      adults: "",
      children: "",
      fullName: "",
      phoneNumber: "",
      email: "",
    },
  });

  function onSubmit(data: SafariBookingFormType) {
    console.log(data);
  }

  const [step, setStep] = React.useState(0);
  const steps = ["Select Date", "Safari Details", "Contact Information"];
  const stepDescriptions = [
    "Choose your preferred safari date to begin booking.",
    "Select safari zone, vehicle type, timing, and number of participants.",
    "Provide your contact details to finalize your booking.",
  ];

  const nextStep = () => {
    if (isStepFilled(step) && form.formState.isValid) {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const timeSlots = ["06:30 AM - 10:00 AM", "02:30 PM - 06:00 PM"];

  const zones = [
    "Zone 1",
    "Zone 2",
    "Zone 3",
    "Zone 4",
    "Zone 5",
    "Zone 6",
    "Zone 7",
    "Zone 8",
    "Zone 9",
    "Zone 10",
  ];

  const vehicleTypes = ["Canter (20 Seater)", "Gypsy (6 Seater)"];

  // Step 1: Date selector component

  // Helper to render step content

  // Helper to check if all required fields for current step are filled
  function isStepFilled(currentStep: number) {
    switch (currentStep) {
      case 0:
        return !!form.getValues("date");
      case 1:
        return (
          !!form.getValues("selectedZone") &&
          !!form.getValues("selectedVehicle") &&
          !!form.getValues("selectedTime") &&
          !!form.getValues("adults") &&
          form.getValues("adults") !== "" &&
          form.getValues("children") !== ""
        );
      case 2:
        return (
          !!form.getValues("fullName") &&
          !!form.getValues("phoneNumber") &&
          !!form.getValues("email")
        );
      default:
        return false;
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-orange-600" />
          {steps[step]}
        </CardTitle>
        <CardDescription>{stepDescriptions[step]}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Replace renderStepContent with StepContent component */}
            <RenderFormStep
              step={step}
              zones={zones}
              vehicleTypes={vehicleTypes}
              timeSlots={timeSlots}
            />
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex w-10 items-center justify-center"
                disabled={step === 0}
                onClick={prevStep}
                aria-label="Previous step"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              {step < steps.length - 1 ? (
                <Button
                  type="button"
                  className="min-w-[130px] bg-orange-600 hover:bg-orange-700"
                  style={{ width: "fit-content" }}
                  onClick={nextStep}
                  disabled={!form.formState.isValid || !isStepFilled(step)}
                >
                  Next: {steps[step + 1]}
                </Button>
              ) : (
                <Button
                  className="min-w-[130px] bg-orange-600 hover:bg-orange-700"
                  style={{ width: "fit-content" }}
                  type="submit"
                  disabled={!form.formState.isValid || !isStepFilled(step)}
                >
                  Book Now
                </Button>
              )}
            </div>
          </form>
        </Form>
        <p className="text-center text-xs text-gray-500">
          By booking, you agree to our terms and conditions. Cancellation
          charges may apply as per forest department rules.
        </p>
      </CardContent>
    </Card>
  );
};

const RenderFormStep = ({
  step,
  zones,
  vehicleTypes,
  timeSlots,
}: {
  step: number;
  zones: string[];
  vehicleTypes: string[];
  timeSlots: string[];
}) => {
  switch (step) {
    case 0:
      return <SafariDateStep />;
    case 1:
      return (
        <SafariDetailsStep
          zones={zones}
          vehicleTypes={vehicleTypes}
          timeSlots={timeSlots}
        />
      );
    case 2:
      return <SafariContactStep />;
    default:
      return null;
  }
};

const SafariDateStep = () => {
  const form = useFormContext<SafariBookingFormType>();
  return (
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem>
          <div className="w-full rounded-lg border bg-gray-50 p-4">
            <FormControl>
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date < new Date()}
                className="rounded-md border-0 bg-transparent"
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const SafariDetailsStep = ({
  zones,
  vehicleTypes,
  timeSlots,
}: {
  zones: string[];
  vehicleTypes: string[];
  timeSlots: string[];
}) => {
  const form = useFormContext<SafariBookingFormType>();
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          control={form.control}
          name="selectedZone"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select zone" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {zones.map((zone: string) => (
                    <SelectItem key={zone} value={zone}>
                      {zone}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="selectedVehicle"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {vehicleTypes.map((vehicle: string) => (
                    <SelectItem key={vehicle} value={vehicle}>
                      {vehicle}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="selectedTime"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Safari Time</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {timeSlots.map((time: string) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          control={form.control}
          name="adults"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <UsersIcon className="mr-1 inline h-4 w-4" />
                Adults
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="No. of adults" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Adult{num > 1 ? "s" : ""}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="children"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Children (5-12 years)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="No. of children" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Child" : "Children"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

// Step 3: Contact info component
const SafariContactStep = () => {
  const form = useFormContext<SafariBookingFormType>();
  return (
    <div className="border-t pt-6">
      <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <UserIcon className="mr-1 inline h-4 w-4" />
                Full Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <PhoneIcon className="mr-1 inline h-4 w-4" />
                Phone Number
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <MailIcon className="mr-1 inline h-4 w-4" />
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter email address"
                  className="w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
