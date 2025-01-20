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
import { EnquirySchema } from "@/lib/schema";
import type { EnquirySchemaType } from "@/lib/types";
import { api } from "@/trpc/react";
import { showMutationResToast } from "@/lib/utils";

export const EnquiryFormPage = () => {
  const enquiryForm = useForm<EnquirySchemaType>({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const { control, handleSubmit, formState, reset } = enquiryForm;
  const { mutateAsync: createEnquiry } = api.enquiry.create.useMutation();

  const submitEnquiry: SubmitHandler<EnquirySchemaType> = async (formData) => {
    const mutationRes = await createEnquiry(formData);

    showMutationResToast(mutationRes);

    reset({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-24">
      <h1 className="text-center text-3xl font-bold">Enquiry Form</h1>
      <p className="mt-2 text-center text-gray-600">
        Fill out the form below, and we’ll get back to you as soon as possible.
      </p>
      <Card className="mt-8 w-full max-w-4xl border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            Need Help with Something?
          </CardTitle>
        </CardHeader>
        <Form {...enquiryForm}>
          <form onSubmit={handleSubmit(submitEnquiry)}>
            <CardContent className="space-y-6 px-8 py-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Name Field */}
                <FormField
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-white"
                          placeholder="Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Phone Field */}
                <FormField
                  control={control}
                  name="phoneNumber"
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
              </div>
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
                        rows={4}
                        placeholder="What do you need help with?"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-center py-4">
              <Button
                className="rounded px-6 py-2 text-lg"
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
    </div>
  );
};
