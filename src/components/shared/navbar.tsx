"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/safari-booking", label: "Safari Booking Online" },
    { href: "/payment", label: "Payment Now" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-gray-900 px-4 py-2 text-center text-xs font-bold text-white sm:text-sm">
        This is not an official website of &quot;Corbett Tiger Reserve&quot;.
        This is a Registered Private Travel Agency which organizes Hotel, Safari
        and Tour Packages booking in Corbett National Park.
      </div>
      <nav className="bg-green-700 text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-xl font-bold text-white sm:text-2xl">
                <span className="block">Corbett National Park</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 text-sm md:flex lg:text-base">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-green-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="tel:+918548269512"
              className="flex items-center gap-1 transition-colors hover:text-green-200"
            >
              <Phone className="h-4 w-4" />
              <span>+91-8548269512</span>
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-green-600"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] border-green-800 bg-green-700 text-white sm:w-[350px]"
              >
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-xl text-white">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-md px-4 py-2 transition-colors hover:bg-green-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link
                      href="tel:+918548269512"
                      className="flex items-center gap-2 rounded-md px-4 py-2 transition-colors hover:bg-green-600"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone className="h-5 w-5" />
                      <span>+91-8548269512</span>
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
