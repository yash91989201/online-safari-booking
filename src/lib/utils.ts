import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const showMutationResToast = ({
  status,
  message,
}: ProcedureStatusType) => {
  if (status === "SUCCESS") {
    toast.success(message);
  } else {
    toast.error(message);
  }
};
