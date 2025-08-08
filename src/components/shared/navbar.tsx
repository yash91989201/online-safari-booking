import Link from "next/link";
import { Trees } from "lucide-react";

export const Navbar = () => (
  <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Trees className="h-8 w-8 text-green-600" />
          <div>
            <h1 className="text-xl font-bold text-green-800">
              Ranthambore National Park
            </h1>
            <p className="text-sm text-gray-600">Wildlife Safari Booking</p>
          </div>
        </div>
        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            href="/"
            className="text-gray-700 transition-colors hover:text-green-600"
          >
            Home
          </Link>
          <Link
            href="/safari-booking"
            className="text-gray-700 transition-colors hover:text-green-600"
          >
            Safari Booking
          </Link>
          <Link
            href="#"
            className="text-gray-700 transition-colors hover:text-green-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  </header>
);
