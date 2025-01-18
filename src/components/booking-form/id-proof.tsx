"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import type { BookingFormType } from "@/lib/types";

export const IdProof = () => {
  const { control, watch } = useFormContext<BookingFormType>();
  const adults = watch("visitingDetails.adults") || 0;
  const children = watch("visitingDetails.children") || 0;

  const renderVisitorFields = (type: "adult" | "child", index: number) => {
    const visitorIndex = type === "child" ? index + adults : index;
    const visitorType = type === "adult" ? "Adult" : "Child";

    return (
      <div key={`${type}-${index}`} className="mb-6 grid grid-cols-5 gap-4">
        {/* Name */}
        <FormField
          control={control}
          name={`idProof.${visitorIndex}.name`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white"
                  placeholder={`${visitorType} ${index + 1} name`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Nationality */}
        <FormField
          control={control}
          name={`idProof.${visitorIndex}.nationality`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indian">Indian</SelectItem>
                    <SelectItem value="foreigner">Foreigner</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Age */}
        <FormField
          control={control}
          name={`idProof.${visitorIndex}.age`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="hide-input-spinner bg-white"
                  type="number"
                  placeholder="Age"
                  onChange={(event) =>
                    field.onChange(Number(event.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ID Type */}
        <FormField
          control={control}
          name={`idProof.${visitorIndex}.idType`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="ID type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aadhar_card">Aadhar card</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ID Detail */}
        <FormField
          control={control}
          name={`idProof.${visitorIndex}.idDetail`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white"
                  placeholder="ID number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="mb-6 text-2xl font-semibold">Provide traveller details</h2>

      {/* Adult Fields */}
      {Array.from({ length: adults }).map((_, index) =>
        renderVisitorFields("adult", index),
      )}

      {/* Child Fields */}
      {Array.from({ length: children }).map((_, index) =>
        renderVisitorFields("child", index),
      )}
    </div>
  );
};
