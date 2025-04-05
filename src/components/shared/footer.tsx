import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Corbett */}
          <div>
            <h3 className="relative mb-4 text-xl font-bold">
              About Corbett
              <span className="absolute -bottom-2 left-0 h-1 w-12 bg-orange-500"></span>
            </h3>
            <ul className="mt-6 space-y-2">
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Dos And
                  Don&apos;ts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Jim Corbett
                  Biography
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Corbett Rivers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Corbett Flora
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Corbett Fauna
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Tiger Safari
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Corbett Permit
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Corbett
                  Information
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Visitors
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Corbett Map
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Adventure
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Corbett
                  Tourism
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-orange-400"
                >
                  <span className="mr-2 text-orange-500">›</span> Corbett
                  Landscapes
                </Link>
              </li>
            </ul>
          </div>

          {/* Corbett Tourism Zones & Attractions */}
          <div>
            <div className="mb-8">
              <h3 className="relative mb-4 text-xl font-bold">
                Corbett Tourism Zones
                <span className="absolute -bottom-2 left-0 h-1 w-12 bg-orange-500"></span>
              </h3>
              <ul className="mt-6 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Safari Zones
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Bijrani
                    Safari Zone
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Jhirna
                    Safari Zone
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Dhela Safari
                    Zone
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Durga Devi
                    Safari Zone
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Garjia
                    Safari Zone
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Sitabani
                    Forest Zone
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Dhikala
                    Safari Zone
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Phato Safari
                    Zone
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="relative mb-4 text-xl font-bold">
                Corbett Attractions
                <span className="absolute -bottom-2 left-0 h-1 w-12 bg-orange-500"></span>
              </h3>
              <ul className="mt-6 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett
                    Wedding Venues
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett
                    Habitats
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Photo
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Corbett Forest Lodges & Popular Tour Packages */}
          <div>
            <div className="mb-8">
              <h3 className="relative mb-4 text-xl font-bold">
                Corbett Forest Lodges
                <span className="absolute -bottom-2 left-0 h-1 w-12 bg-orange-500"></span>
              </h3>
              <ul className="mt-6 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Forest Rest
                    Houses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Dhikala
                    Forest Lodge
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Bijrani
                    Forest Guest House
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Jhirna
                    Forest Lodge
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Gairal
                    Forest Guest House
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="relative mb-4 text-xl font-bold">
                Popular Tour Packages
                <span className="absolute -bottom-2 left-0 h-1 w-12 bg-orange-500"></span>
              </h3>
              <ul className="mt-6 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett Fun
                    Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett
                    Holiday Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett
                    Exploration Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett
                    Nainital Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett
                    Rishikesh Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Dhikala
                    Gairal Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett
                    Fishing Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett Bird
                    Watching Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Delhi Agra
                    Corbett Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett
                    Corporate Group Tour
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Online Booking & More About Corbett */}
          <div>
            <div className="mb-8">
              <h3 className="relative mb-4 text-xl font-bold">
                Online Booking
                <span className="absolute -bottom-2 left-0 h-1 w-12 bg-orange-500"></span>
              </h3>
              <ul className="mt-6 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett Jeep
                    Safari
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett
                    Canter Safari
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Corbett
                    Elephant Safari
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Dhikala Jeep
                    Safari
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Online
                    Safari Booking
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="relative mb-4 text-xl font-bold">
                More About Corbett
                <span className="absolute -bottom-2 left-0 h-1 w-12 bg-orange-500"></span>
              </h3>
              <ul className="mt-6 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> How to Plan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> How to Reach
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Best Time to
                    Visit
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Travelling
                    Inside park
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Tiger
                    Conservation Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center hover:text-orange-400"
                  >
                    <span className="mr-2 text-orange-500">›</span> Places to
                    See
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer and Bottom Links */}
        <div className="mt-12 border-t border-gray-800 pt-6">
          <p className="mb-4 text-sm text-gray-400">
            This is not an official website of &quot;Corbett Tiger Reserve. This
            is a Registered Private Travel Agency which organizes Hotel, Safari
            and Tour Packages booking in Corbett National Park.
          </p>
          <div className="flex flex-wrap justify-end gap-6 text-sm text-gray-500">
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-gray-300">
              Blog
            </Link>
            <Link href="/faq" className="hover:text-gray-300">
              FAQ
            </Link>
            <Link href="/terms" className="hover:text-gray-300">
              Terms and Condition
            </Link>
            <Link href="/sitemap" className="hover:text-gray-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
