"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  date: z.date({ required_error: "Date is required" }),
  vehicle: z.string().min(1, "Please select a vehicle"),
  zone: z.string().min(1, "Please select a zone"),
  timing: z.string().min(1, "Please select a timing"),
  adults: z.string().min(1, "Please select number of adults"),
  children: z.string().optional(),
  travelerName: z.string().min(1, "Traveler name is required"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Valid email is required"),
});

export default function CorbettSafariBookingForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      vehicle: "",
      zone: "",
      timing: "",
      adults: "",
      children: "",
      travelerName: "",
      mobile: "",
      email: "",
    },
  });

  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    form.setValue("date", selectedDate);
  }, [selectedDate, form]);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleReset = () => {
    const today = new Date();
    setSelectedDate(today);
    setCurrentMonth(startOfMonth(today));
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2">
      {/* Left side - Information Tables */}
      <div className="space-y-4">
        {/* Jeep Safari Price & Safari Zones */}
        <div className="overflow-hidden rounded-md">
          <div className="bg-amber-500 py-2 text-center font-bold text-white">
            Jeep Safari Price & Safari Zones
          </div>
          <Table className="border">
            <TableBody>
              <TableRow className="bg-gray-700 text-white">
                <TableCell className="border font-medium">
                  Price (Indian)
                </TableCell>
                <TableCell className="border">
                  INR 7500 / - Jeep ( Maximum 6 Persons & 1 children (b/w - 5 to
                  12 years) are allowed in ONE Jeep)
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-700 text-white">
                <TableCell className="border font-medium">
                  Price (Foreigner)
                </TableCell>
                <TableCell className="border">
                  INR 16000 / Jeep ( Maximum 6 Persons & 1 children (b/w - 5 to
                  12 years) are allowed in ONE Jeep )
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-700 text-white">
                <TableCell className="border font-medium">Zones</TableCell>
                <TableCell className="border">
                  Bijrani / Garjiya / Jhirna / Dhela / Durgadevi / Phato /
                  Sitabani
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-700 text-white">
                <TableCell className="border font-medium">Timings</TableCell>
                <TableCell className="border">
                  Morning 6:00 AM - 9:00 AM | Evening 2:30 PM - 6:00 PM (Safari
                  Timing Varies as Season Changes)
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-700 text-white">
                <TableCell className="border font-medium">Inclusions</TableCell>
                <TableCell className="border">
                  Permission of CTR, Jeep, Driver, Permit and All Entries &
                  Taxes.
                  <br />* Guide Fee to be paid by the guest on the spot
                  directly.
                  <br />* Pick & drop is not included from hotels.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Dhikala Canter Safari Price */}
        <div className="overflow-hidden rounded-md">
          <div className="bg-amber-500 py-2 text-center font-bold text-white">
            Dhikala Canter Safari Price
          </div>
          <Table className="border">
            <TableBody>
              <TableRow className="bg-gray-700 text-white">
                <TableCell className="border font-medium">
                  Price (Indian)
                </TableCell>
                <TableCell className="border">
                  INR 2500 / Person ( ONE Canter has 16 Seats )
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-700 text-white">
                <TableCell className="border font-medium">
                  Price (Foreigner)
                </TableCell>
                <TableCell className="border">
                  INR 5000 / Person ( ONE Canter has 16 Seats )
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-700 text-white">
                <TableCell className="border font-medium">Zones</TableCell>
                <TableCell className="border">Dhikala</TableCell>
              </TableRow>
              <TableRow className="bg-gray-700 text-white">
                <TableCell className="border font-medium">Timings</TableCell>
                <TableCell className="border">
                  Morning 6:00 AM - 11:30 AM | Evening 12:00 PM - 5:30 PM
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Right side - Booking Form */}
      <div className="rounded-md bg-stone-200 p-6">
        <h2 className="mb-6 text-center text-2xl font-bold text-black">
          Corbett Safari Booking
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Calendar Section */}
            <div className="rounded-md bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <button type="button" className="p-1" onClick={handlePrevMonth}>
                  <ChevronLeft className="h-5 w-5 text-black" />
                </button>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-black">
                    {format(currentMonth, "MMMM yyyy")}
                  </span>
                  <button type="button" className="p-1" onClick={handleReset}>
                    <RotateCcw className="h-4 w-4 text-black" />
                  </button>
                </div>
                <button type="button" className="p-1" onClick={handleNextMonth}>
                  <ChevronRight className="h-5 w-5 text-black" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div key={day} className="bg-gray-700 p-2 text-sm text-white">
                    {day}
                  </div>
                ))}

                {days.map((date, index) => {
                  const inCurrentMonth = isSameMonth(date, currentMonth);
                  const isSelected = isSameDay(date, selectedDate);

                  return (
                    <div
                      key={index}
                      onClick={() => handleDateClick(date)}
                      className={cn(
                        "cursor-pointer p-2 transition-colors",
                        !inCurrentMonth && "text-gray-400",
                        isSelected && "bg-blue-500 text-white",
                        inCurrentMonth &&
                          !isSelected &&
                          "bg-green-600 text-white hover:bg-green-700",
                      )}
                    >
                      {format(date, "d")}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="vehicle"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-white text-black">
                          <SelectValue placeholder="Select Vehicle" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Jeep">Jeep</SelectItem>
                        <SelectItem value="Canter">Canter</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zone"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-white text-black">
                          <SelectValue placeholder="Select Zone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="any">
                          Bijrani/Garjiya/Jhirna/Dhela/Durgadevi/Phato/Sitabani/Dhikala
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timing"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-white text-black">
                          <SelectValue placeholder="Select Timing" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Morning">Morning</SelectItem>
                        <SelectItem value="Evening">Evening</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="adults"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-white text-black">
                          <SelectValue placeholder="Adult (above 12 yrs)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["1", "2", "3", "4", "5", "6"].map((val) => (
                          <SelectItem key={val} value={val}>
                            {val}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="children"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-white text-black">
                          <SelectValue placeholder="Child (between 5 to 12 yrs)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["0", "1"].map((val) => (
                          <SelectItem key={val} value={val}>
                            {val}
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
                name="travelerName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Traveler Name"
                        {...field}
                        className="bg-white text-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Mobile"
                        {...field}
                        className="bg-white text-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email ID"
                        {...field}
                        className="bg-white text-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Book Now
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
