import Link from "next/link";

export function Navbar() {
  return (
    <>
      <div className="bg-gray-900 px-4 py-2 text-center text-sm font-bold text-white">
        This is not an official website of &quot;Corbett Tiger Reserve&quot;.
        This is a Registered Private Travel Agency which organizes Hotel, Safari
        and Tour Packages booking in Corbett National Park.
      </div>
      <nav className="bg-green-700 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-3 md:flex-row">
          <div className="mb-2 flex items-center md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-white">
                <span className="block">Corbett National Park</span>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:gap-6 md:text-base">
            <Link href="/" className="hover:text-green-200">
              Home
            </Link>
            <Link href="/safari-booking" className="hover:text-green-200">
              Safari Booking Online
            </Link>
            <Link href="/payment" className="hover:text-green-200">
              Payment Now
            </Link>
            <Link href="/contact" className="hover:text-green-200">
              +91-7827240348 | +91-8826878883
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
