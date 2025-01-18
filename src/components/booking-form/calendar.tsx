import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface CalendarProps {
  onDateSelect: (date: Date) => void;
  selectedDate?: Date;
}

export default function Calendar({
  onDateSelect,
  selectedDate,
}: CalendarProps) {
  const [currentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: 10 },
    (_, i) => currentDate.getFullYear() + i,
  );

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="flex h-10 w-10 items-center justify-center text-gray-400"
        >
          {/* Empty cell */}
        </div>,
      );
    }

    // Add the actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isDisabled = isDateDisabled(date);
      const isSelected = selectedDate?.toDateString() === date.toDateString();

      days.push(
        <button
          key={day}
          onClick={() => !isDisabled && onDateSelect(date)}
          disabled={isDisabled}
          type="button"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
            isDisabled
              ? "cursor-not-allowed text-gray-300"
              : "text-primary hover:bg-primary/10",
            isSelected
              ? "bg-primary text-primary-foreground"
              : "bg-transparent",
          )}
        >
          {day}
        </button>,
      );
    }

    return days;
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <Button
          size="icon"
          type="button"
          variant="ghost"
          className="rounded-full"
          onClick={() => setCurrentMonth((prev) => (prev > 0 ? prev - 1 : 11))}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-2">
          <Select
            value={currentMonth.toString()}
            onValueChange={(value) => setCurrentMonth(parseInt(value))}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue>{months[currentMonth]}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {months.map((month, index) => (
                <SelectItem key={month} value={index.toString()}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={currentYear.toString()}
            onValueChange={(value) => setCurrentYear(parseInt(value))}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue>{currentYear}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          size="icon"
          type="button"
          variant="ghost"
          className="rounded-full"
          onClick={() => setCurrentMonth((prev) => (prev < 11 ? prev + 1 : 0))}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      <div className="mb-2 grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="flex h-9 w-14 items-center justify-center rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-white"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
    </div>
  );
}
