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

export const getDayFromDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
