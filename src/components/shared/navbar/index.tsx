import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between p-3 lg:p-6">
        {/* site logo */}
        <div className="flex items-center gap-3">
          <div className="relative size-12 overflow-hidden rounded-full">
            <Image src="/assets/site-logo.png" alt="wander lust" fill={true} />
          </div>
          <h1 className="text-primary lg:text-xl">Online safari booking</h1>
        </div>
        <MobileNav />
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/corbett-bookings">Corbett Bookings</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
