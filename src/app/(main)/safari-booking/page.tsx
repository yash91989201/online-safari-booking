"use client";

import * as React from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  CarIcon,
  PhoneIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";

export default function SafariBookingPage() {
  const [date, setDate] = React.useState<Date>();
  const [selectedZone, setSelectedZone] = React.useState("");
  const [selectedVehicle, setSelectedVehicle] = React.useState("");
  const [selectedTime, setSelectedTime] = React.useState("");
  const [adults, setAdults] = React.useState("");
  const [children, setChildren] = React.useState("");

  // Safari pricing data
  const safariPrices = [
    {
      zone: "Zone 1-5",
      vehicleType: "Canter (20 Seater)",
      indianAdult: "₹1,170",
      indianChild: "₹702",
      foreignAdult: "$25",
      foreignChild: "$15",
    },
    {
      zone: "Zone 1-5",
      vehicleType: "Gypsy (6 Seater)",
      indianAdult: "₹1,560",
      indianChild: "₹936",
      foreignAdult: "$35",
      foreignChild: "$20",
    },
    {
      zone: "Zone 6-10",
      vehicleType: "Canter (20 Seater)",
      indianAdult: "₹1,404",
      indianChild: "₹842",
      foreignAdult: "$30",
      foreignChild: "$18",
    },
    {
      zone: "Zone 6-10",
      vehicleType: "Gypsy (6 Seater)",
      indianAdult: "₹1,872",
      indianChild: "₹1,123",
      foreignAdult: "$42",
      foreignChild: "$24",
    },
  ];

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

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Safari Pricing Tables */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CarIcon className="h-5 w-5 text-orange-600" />
                Safari Pricing
              </CardTitle>
              <CardDescription>
                Current rates for Ranthambore National Park safari bookings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium">
                        Zone
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium">
                        Vehicle
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-center text-sm font-medium">
                        Indian Adult
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-center text-sm font-medium">
                        Indian Child
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-center text-sm font-medium">
                        Foreign Adult
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-center text-sm font-medium">
                        Foreign Child
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {safariPrices.map((price, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="border border-gray-200 px-3 py-2 text-sm font-medium">
                          {price.zone}
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-sm">
                          {price.vehicleType}
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-center text-sm font-semibold text-green-600">
                          {price.indianAdult}
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-center text-sm font-semibold text-green-600">
                          {price.indianChild}
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-center text-sm font-semibold text-blue-600">
                          {price.foreignAdult}
                        </td>
                        <td className="border border-gray-200 px-3 py-2 text-center text-sm font-semibold text-blue-600">
                          {price.foreignChild}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <p>• Prices are per person and include forest entry fees</p>
                <p>• Children below 5 years are free of charge</p>
                <p>• Guide charges are additional (₹200-500 per safari)</p>
              </div>
            </CardContent>
          </Card>

          {/* Safari Information Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-orange-600" />
                Safari Timings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-orange-50 p-4">
                  <h3 className="mb-2 font-semibold text-orange-800">
                    Morning Safari
                  </h3>
                  <p className="text-sm text-gray-600">06:30 AM - 10:00 AM</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Best for tiger sightings
                  </p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <h3 className="mb-2 font-semibold text-blue-800">
                    Evening Safari
                  </h3>
                  <p className="text-sm text-gray-600">02:30 PM - 06:00 PM</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Great for photography
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Booking Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-orange-600" />
                Book Your Safari
              </CardTitle>
              <CardDescription>
                Fill in your details to book your Ranthambore safari experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Calendar Section */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Select Safari Date
                </label>
                <div className="w-full rounded-lg border bg-gray-50 p-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border-0 bg-transparent"
                  />
                </div>
                {date && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected Date: {date.toLocaleDateString()}
                  </p>
                )}
              </div>

              {/* Safari Details */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Safari Zone
                  </label>
                  <Select value={selectedZone} onValueChange={setSelectedZone}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select zone" />
                    </SelectTrigger>
                    <SelectContent>
                      {zones.map((zone) => (
                        <SelectItem key={zone} value={zone}>
                          {zone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Vehicle Type
                  </label>
                  <Select
                    value={selectedVehicle}
                    onValueChange={setSelectedVehicle}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicleTypes.map((vehicle) => (
                        <SelectItem key={vehicle} value={vehicle}>
                          {vehicle}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Safari Time
                </label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Guests */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    <UsersIcon className="mr-1 inline h-4 w-4" />
                    Adults
                  </label>
                  <Select value={adults} onValueChange={setAdults}>
                    <SelectTrigger>
                      <SelectValue placeholder="No. of adults" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} Adult{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Children (5-12 years)
                  </label>
                  <Select value={children} onValueChange={setChildren}>
                    <SelectTrigger>
                      <SelectValue placeholder="No. of children" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Child" : "Children"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Contact Information
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      <UserIcon className="mr-1 inline h-4 w-4" />
                      Full Name
                    </label>
                    <Input placeholder="Enter your full name" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      <PhoneIcon className="mr-1 inline h-4 w-4" />
                      Phone Number
                    </label>
                    <Input placeholder="Enter phone number" />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm font-medium">
                    <MailIcon className="mr-1 inline h-4 w-4" />
                    Email Address
                  </label>
                  <Input placeholder="Enter email address" className="w-full" />
                </div>
              </div>

              {/* Booking Summary */}
              {date &&
                selectedZone &&
                selectedVehicle &&
                selectedTime &&
                adults && (
                  <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
                    <h3 className="mb-2 font-semibold text-orange-800">
                      Booking Summary
                    </h3>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>
                        <strong>Date:</strong> {date.toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Zone:</strong> {selectedZone}
                      </p>
                      <p>
                        <strong>Vehicle:</strong> {selectedVehicle}
                      </p>
                      <p>
                        <strong>Time:</strong> {selectedTime}
                      </p>
                      <p>
                        <strong>Guests:</strong> {adults} Adults
                        {children !== "0" && `, ${children} Children`}
                      </p>
                    </div>
                  </div>
                )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                  Book Now
                </Button>
                <Button variant="outline" className="flex-1">
                  Check Availability
                </Button>
              </div>

              <p className="text-center text-xs text-gray-500">
                By booking, you agree to our terms and conditions. Cancellation
                charges may apply as per forest department rules.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What to Bring</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Valid photo ID proof</li>
              <li>• Camera with extra batteries</li>
              <li>• Sunscreen and hat</li>
              <li>• Water bottle</li>
              <li>• Comfortable clothing</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Safari Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• No smoking or drinking</li>
              <li>• Maintain silence</li>
              <li>• Follow guide instructions</li>
              <li>• No feeding animals</li>
              <li>• Stay inside vehicle</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Best Time to Visit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Peak Season:</strong> October - March
              </p>
              <p>
                <strong>Wildlife Activity:</strong> Early morning and late
                afternoon
              </p>
              <p>
                <strong>Weather:</strong> Pleasant and cool
              </p>
              <p className="text-xs text-orange-600">
                Book early for peak season!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
