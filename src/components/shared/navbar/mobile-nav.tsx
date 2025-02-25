import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export const MobileNav = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="p-2">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4 p-6">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Select a destination</SheetDescription>
          </SheetHeader>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="/" className="text-lg">
                <SheetTrigger>Home</SheetTrigger>
              </Link>
            </li>
            <li>
              <Link href="/corbett-bookings" className="text-lg">
                <SheetTrigger>Corbett Bookings</SheetTrigger>
              </Link>
            </li>
            <li>
              <Link href="/enquiry" className="text-lg">
                <SheetTrigger>Booking enquiry</SheetTrigger>
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-lg">
                <SheetTrigger>Contact Us</SheetTrigger>
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};
