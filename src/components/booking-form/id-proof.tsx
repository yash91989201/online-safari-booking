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
import type { BookingFormType } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const IdProof = () => {
  const {
    watch,
    register,
    setValue,
    formState: { errors },
  } = useFormContext<BookingFormType>();

  const adults = watch("visitingDetails.adults") || 0;
  const children = watch("visitingDetails.children") || 0;

  const renderVisitorFields = (type: "adult" | "child", index: number) => {
    const visitorIndex = type === "child" ? index + adults : index;
    const visitorType = type === "adult" ? "Adult" : "Child";

    return (
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Name */}
        <div className="flex flex-1 flex-col">
          <Input
            {...register(`idProof.${visitorIndex}.name`, {
              required: "Name is required",
            })}
            className="bg-white"
            placeholder={`${visitorType} ${index + 1} name`}
          />
          {errors.idProof?.[visitorIndex]?.name && (
            <p className="text-sm text-red-600">
              {errors.idProof[visitorIndex].name.message}
            </p>
          )}
        </div>

        {/* Nationality */}
        <div className="flex flex-1 flex-col">
          <Select
            onValueChange={(value) =>
              setValue(`idProof.${visitorIndex}.nationality`, value)
            }
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Nationality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indian">Indian</SelectItem>
              <SelectItem value="foreigner">Foreigner</SelectItem>
            </SelectContent>
          </Select>
          {errors.idProof?.[visitorIndex]?.nationality && (
            <p className="text-sm text-red-600">
              {errors.idProof[visitorIndex].nationality?.message}
            </p>
          )}
        </div>

        {/* Age */}
        <div className="flex flex-1 flex-col">
          <Input
            {...register(`idProof.${visitorIndex}.age`, {
              required: "Age is required",
              valueAsNumber: true,
              min: { value: 1, message: "Age must be at least 1" },
            })}
            className="hide-input-spinner bg-white"
            type="number"
            placeholder="Age"
          />
          {errors.idProof?.[visitorIndex]?.age && (
            <p className="text-sm text-red-600">
              {errors.idProof[visitorIndex].age.message}
            </p>
          )}
        </div>

        {/* ID Type */}
        <div className="flex flex-1 flex-col">
          <Select
            onValueChange={(value) =>
              setValue(`idProof.${visitorIndex}.idType`, value)
            }
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="ID type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aadhar_card">Aadhar card</SelectItem>
              <SelectItem value="passport">Passport</SelectItem>
            </SelectContent>
          </Select>
          {errors.idProof?.[visitorIndex]?.idType && (
            <p className="text-sm text-red-600">
              {errors.idProof[visitorIndex].idType?.message}
            </p>
          )}
        </div>

        {/* ID Detail */}
        <div className="flex flex-1 flex-col">
          <Input
            {...register(`idProof.${visitorIndex}.idDetail`, {
              required: "ID number is required",
            })}
            className="bg-white"
            placeholder="ID number"
          />
          {errors.idProof?.[visitorIndex]?.idDetail && (
            <p className="text-sm text-red-600">
              {errors.idProof[visitorIndex].idDetail.message}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Provide traveller details
      </h2>

      {/* Accordion for smaller screens */}
      <Accordion type="single" collapsible className="md:hidden">
        {Array.from({ length: adults }).map((_, index) => (
          <AccordionItem key={`adult-${index}`} value={`adult-${index}`}>
            <AccordionTrigger>{`Adult ${index + 1}`}</AccordionTrigger>
            <AccordionContent>
              {renderVisitorFields("adult", index)}
            </AccordionContent>
          </AccordionItem>
        ))}
        {Array.from({ length: children }).map((_, index) => (
          <AccordionItem key={`child-${index}`} value={`child-${index}`}>
            <AccordionTrigger>{`Child ${index + 1}`}</AccordionTrigger>
            <AccordionContent>
              {renderVisitorFields("child", index)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Grid for larger screens */}
      <div className="hidden md:block md:space-y-3">
        {Array.from({ length: adults }).map((_, index) => (
          <div key={`adult-${index}`}>
            {renderVisitorFields("adult", index)}
          </div>
        ))}
        {Array.from({ length: children }).map((_, index) => (
          <div key={`child-${index}`}>
            {renderVisitorFields("child", index)}
          </div>
        ))}
      </div>
    </div>
  );
};
