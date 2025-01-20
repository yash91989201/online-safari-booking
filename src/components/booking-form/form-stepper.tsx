import { Check } from "lucide-react";
import { useRef, useEffect } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface FormStepperProps {
  steps: { title: string; completed: boolean; current: boolean }[];
}

export const FormStepper = ({ steps }: FormStepperProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToCurrentStep = () => {
      const currentStepElement = scrollRef.current?.querySelector(
        '[data-current="true"]',
      );
      if (currentStepElement) {
        currentStepElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    };

    scrollToCurrentStep();
  }, [steps]);

  return (
    <ScrollArea className="mx-auto mb-3 w-full max-w-3xl pb-3 md:mb-6">
      <div className="flex items-center justify-center" ref={scrollRef}>
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex items-center"
            data-current={step.current}
          >
            <div className="flex items-center gap-1.5">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2",
                  step.completed &&
                    "border-primary bg-primary text-primary-foreground",
                  step.current &&
                    !step.completed &&
                    "border-primary text-primary",
                  !step.completed &&
                    !step.current &&
                    "border-gray-300 text-gray-500",
                )}
              >
                {step.completed ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span
                className={cn(
                  "text-center text-xs md:text-base",
                  step.current ? "font-medium text-primary" : "text-gray-500",
                )}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "mx-2 h-[2px] w-12",
                  step.completed ? "bg-primary" : "bg-gray-300",
                )}
              />
            )}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
