"use client";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { EnquirySchema } from "@/lib/schema";
import type { EnquirySchemaType } from "@/lib/types";

export const EnquiryForm = () => {
  const enquiryForm = useForm<EnquirySchemaType>({
    resolver: zodResolver(EnquirySchema),
  });

  const { control, handleSubmit, formState } = enquiryForm;

  const submitEnquiry: SubmitHandler<EnquirySchemaType> = async (data) => {
    console.log("Enquiry submitted:", data);
    // Replace with your mutation or API call
    toast.success("Enquiry submitted");
  };

  return (
    <Card className="hidden w-80 border-none lg:block xl:w-96">
      <CardHeader>
        <CardTitle className="text-center text-lg font-bold">
          Need help with anything?
        </CardTitle>
      </CardHeader>
      <Form {...enquiryForm}>
        <form onSubmit={handleSubmit(submitEnquiry)}>
          <CardContent className="space-y-4">
            {/* Name Field */}
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className="bg-white" placeholder="Name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email Field */}
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-white"
                      placeholder="Email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Phone Field */}
            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-white"
                      placeholder="Phone Number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Enquiry Message Field */}
            <FormField
              control={control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="resize-none bg-white"
                      cols={3}
                      placeholder="What do you need help with?"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              className="rounded"
              type="submit"
              disabled={formState.isSubmitting}
            >
              Submit
              {formState.isSubmitting && (
                <Loader2 className="ml-3 animate-spin" />
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
