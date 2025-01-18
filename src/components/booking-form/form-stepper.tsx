import { Check } from "lucide-react";

interface FormStepperProps {
  steps: { title: string; completed: boolean; current: boolean }[];
}

export const FormStepper = ({ steps }: FormStepperProps) => {
  return (
    <div className="mx-auto mb-8 flex w-full max-w-3xl items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.title} className="flex items-center">
          <div className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                step.completed
                  ? "border-primary bg-primary text-primary-foreground"
                  : step.current
                    ? "border-primary text-primary"
                    : "border-gray-300 text-gray-500"
              }`}
            >
              {step.completed ? (
                <Check className="h-5 w-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={`ml-2 ${step.current ? "font-medium text-primary" : "text-gray-500"}`}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`mx-4 h-[2px] w-24 ${step.completed ? "bg-primary" : "bg-gray-300"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};
