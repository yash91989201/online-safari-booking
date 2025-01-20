"use client";

import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Calendar from "./calendar";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import type { BookingFormType } from "@/lib/types";

export const VisitorDetails = () => {
  const { formState, control, setValue, watch } =
    useFormContext<BookingFormType>();

  const selectedDate = watch("visitingDetails.date");
  const dateError = formState?.errors?.visitingDetails?.date?.message;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <Calendar
          selectedDate={selectedDate}
          onDateSelect={(date) => setValue("visitingDetails.date", date)}
        />

        {dateError && (
          <p className="text-[0.8rem] font-medium text-destructive">
            {dateError}
          </p>
        )}
      </div>
      <div className="space-y-3 self-center">
        {/* Zone Selection */}
        <div className="flex flex-col gap-3 md:flex-row">
          <FormField
            control={control}
            name="visitingDetails.zone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full flex-1 bg-white">
                      <SelectValue placeholder="Select Zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bijrani">Bijrani</SelectItem>
                      <SelectItem value="jhirna">Jhirna</SelectItem>
                      <SelectItem value="dhela">Dhela</SelectItem>
                      <SelectItem value="garjiya">Garjiya</SelectItem>
                      <SelectItem value="durgadevi">Durgadevi</SelectItem>
                      <SelectItem value="phato">Phato</SelectItem>
                      <SelectItem value="sitabani">Sitabani</SelectItem>
                      <SelectItem value="bhandarpani">Bhandarpani</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Vehicle Selection */}
          <FormField
            control={control}
            name="visitingDetails.vehicle"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Select Vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jeep">Jeep</SelectItem>
                      <SelectItem value="canter">Canter</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          {/* Adults Selection */}
          <FormField
            control={control}
            name="visitingDetails.adults"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(parseInt(value))}
                    defaultValue={field.value?.toString()}
                  >
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Adults (persons above 12yrs)" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Children Selection */}
          <FormField
            control={control}
            name="visitingDetails.children"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(parseInt(value))}
                    defaultValue={field.value?.toString()}
                  >
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Children (between 5-12 yrs)" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          {/* Traveller's Name */}
          <FormField
            control={control}
            name="visitingDetails.travellerName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white"
                    placeholder="Traveller's name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            control={control}
            name="visitingDetails.phoneNumber"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white"
                    type="tel"
                    placeholder="Phone number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};
