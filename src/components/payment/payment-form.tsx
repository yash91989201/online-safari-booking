"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { GenericPaymentFormSchema } from "@/lib/schema";
import type { GenericPaymentFormType } from "@/lib/types";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { formatIndianCurrency } from "@/lib/utils";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";
import { api } from "@/trpc/react";
import { toast } from "sonner";

export default function PaymentForm() {
  const [paymentDialog, setPaymentDialog] = useState(false);

  const genericPaymentForm = useForm<GenericPaymentFormType>({
    resolver: zodResolver(GenericPaymentFormSchema),
    defaultValues: {
      amount: 0,
      name: "",
      email: "",
      mobile: "",
      zip: "",
      country: "INR Indian Rupee",
      city: "",
      remark: "",
    },
  });

  const { handleSubmit, control, reset, watch, formState } = genericPaymentForm;

  const totalAmount = Number(watch("amount")) ?? 0;

  const genericPayment = api.genericPayment.create.useMutation();

  const onSubmit: SubmitHandler<GenericPaymentFormType> = async (data) => {
    const result = await genericPayment.mutateAsync(data);

    setPaymentDialog(false);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }

    reset();
  };

  return (
    <Card className="mx-auto w-full max-w-4xl shadow-md">
      <CardHeader className="border-b">
        <CardTitle className="text-xl font-bold">PAYMENT INFORMATION</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...genericPaymentForm}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Payment Details */}
              <FormField
                control={control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Enter Amount <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Amount"
                        {...field}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          const amt = Number(e.target.value);
                          if (!isNaN(amt)) {
                            field.onChange(amt);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Personal Information */}
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Enter Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Enter Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="E-Mail" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Enter Mobile <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Contact No." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Location Details */}
              <FormField
                control={control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Country <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="INR Indian Rupee">
                          INR Indian Rupee
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      City <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter City Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      ZIP Code <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter ZIP Code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Additional Information */}
              <FormField
                control={control}
                name="remark"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Additional Remarks <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter any remarks"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Dialog onOpenChange={setPaymentDialog} open={paymentDialog}>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!formState.isValid || formState.isSubmitting}
                >
                  Proceed to Pay
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Please confirm your details before proceeding to pay.
                  </DialogTitle>
                </DialogHeader>

                <FormMessage>
                  Make sure that your contact details are correct before
                  initiating payment.
                </FormMessage>

                <div className="mx-auto my-3">
                  <Image
                    src="/payment-qr-code.jpg?height=320&width=320"
                    alt="Safari Booking"
                    width={320}
                    height={320}
                    className="object-cover"
                  />
                </div>

                <DialogDescription className="text-md text-black">
                  Scan this QR code to make your payment of{" "}
                  <span className="text-lg font-bold">
                    {formatIndianCurrency(totalAmount)}
                  </span>
                  . Click on &apos;Confirm Payment&apos; after successful
                  payment. Once payment is confirmed from our side we will
                  contact you for further details.
                </DialogDescription>

                <DialogFooter>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={async () => {
                      await handleSubmit(onSubmit)();
                    }}
                  >
                    {formState.isSubmitting && (
                      <Loader2 className="mr-3 animate-spin" />
                    )}
                    Confirm Payment
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
