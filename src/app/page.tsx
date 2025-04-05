import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="relative h-[400px] w-full md:h-[500px]">
        <Image
          src="/hero-img.jpg?height=500&width=1200"
          alt="Tiger in Corbett National Park"
          fill
          priority
          className="object-cover"
        />
      </div>

      <section className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Jim Corbett National Park
        </h1>
        <div className="space-y-4 text-gray-700">
          <p>
            The Jim Corbett National Park is a part of the largest Corbett Tiger
            Reserve; the Project Tiger lies in the Nainital district of
            Uttarakhand. The Majestic landscape of Corbett is well-known for its
            tiger richness. Established in the year 1936 as Hailey National
            Park, Corbett has the glory of being India&apos;s oldest and most
            prestigious National Park. It is also being honoured as the place
            where Project Tiger was first launched in the year 1973. This Unique
            tiger territory is best known as the father who gave birth to
            Project Tiger in India to safeguard the most endangered species and
            the Royal wild animal of India called Tigers.
          </p>
        </div>
      </section>

      {/* We Offer Best Services Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold">
            We Offer Best Services
          </h2>
          <div className="mx-auto mb-10 max-w-3xl">
            <p className="text-center text-gray-700">
              To ensure quality services at every step of your vacation we go
              above and beyond. Our highly expert professionals are obsessed
              with the idea of empowering vacationers with the best deals. We
              have a team of expert professionals having experience of over a
              decade in travel and tourism. You may find here an array of ideas
              empowering the idea of your wildlife holiday.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Safari Booking */}
            <div className="flex flex-col items-center">
              <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/safari-booking-service.jpg?height=160&width=160"
                  alt="Safari Booking"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Safari Booking</h3>
              <Link
                href="/safari-booking"
                className="flex items-center text-orange-500 hover:underline"
              >
                Book Now <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Tour Booking */}
            <div className="flex flex-col items-center">
              <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/tour-booking-service.jpg?height=160&width=160"
                  alt="Tour Booking"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Tour Booking</h3>
              <Link
                href="/tour-package"
                className="flex items-center text-orange-500 hover:underline"
              >
                Book Now <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Hotel Booking */}
            <div className="flex flex-col items-center">
              <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/hotel-booking-service.jpg?height=160&width=160"
                  alt="Hotel Booking"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Hotel Booking</h3>
              <Link
                href="/hotels"
                className="flex items-center text-orange-500 hover:underline"
              >
                Book Now <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Dhikala Booking */}
            <div className="flex flex-col items-center">
              <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/dhikala-booking-service.jpg?height=160&width=160"
                  alt="Dhikala Booking"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Dhikala Booking</h3>
              <Link
                href="/safari-booking"
                className="flex items-center text-orange-500 hover:underline"
              >
                Book Now <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Jeep Safari Section */}
      <section className="relative h-[500px]">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50"></div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/jeep-safari-section-tiger.jpg?height=500&width=1200"
            alt="Tiger Safari"
            fill
            className="object-cover"
          />
        </div>

        {/* Centered Text Content */}
        <div className="relative z-20 flex h-full items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white">
            <h2 className="mb-6 text-4xl font-bold">Book Your Jeep Safari!</h2>
            <p className="mb-8">
              Jeep Safari is available only within the Corbett Sanctuary Zone.
              Though it&apos;s threatening, you will enjoy the night-time
              panorama immensely. There are many zones out here that will give
              you a jeep safari to experience the sights of the region. The
              Morning Safari timings are from 6:30 AM to 9:30 AM during winter
              and in summer, 5:30 AM to 8:30 AM. And, the evening safari timings
              are from 2:30 PM to 5:30 PM during winter and in summer, 3:30 PM
              to 6:30 PM.
            </p>
            <Link
              href="/safari-booking"
              className="inline-block rounded-md bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Online Booking
            </Link>
          </div>
        </div>
      </section>

      {/* The Tourist Zones Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-3xl font-bold">The Tourist Zones</h2>
          <p className="mb-8 text-gray-700">
            To promote tourism in this region, the Corbett National Park has
            been divided into six major different tourism zones. These are the
            manifested core or buffer areas of the park where visitors can be a
            part of the wildlife safari and can relish the tempting behaviour of
            the animals with their bare eyes in the vicinity.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-6 md:col-span-2">
              <div>
                <h3 className="text-xl font-bold">Bijrani Safari Zone</h3>
                <p className="text-gray-700">
                  Bijrani Zone is a very popular tourist hub because of its
                  bountiful natural beauty and open grasslands. The entry gate
                  of the zone is located at only 1 Km from Ramnagar city.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">Jhirna Safari Zone</h3>
                <p className="text-gray-700">
                  Jhirna is another important tourist zone in the Jim Corbett
                  National park which is open for tourists round the year.
                  Jhirna Gate is located at a distance of 16 km from Ramnagar
                  city.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">Dhela Safari Zone</h3>
                <p className="text-gray-700">
                  Dhela is a new eco-tourism zone in the Corbett National Park
                  which was included in the tiger reserve zone in November 2014.
                  This is the only area in the reserve&apos;s buffer zone open
                  for tourists in CTR. The Zone is retaining the attention of a
                  large number of tourists because of its rich biodiversity and
                  is open throughout the year. Also, it is located at an
                  approximate distance of 13 Km from Ramnagar City.
                </p>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/tourist-zone-tiger.jpg?height=400&width=300"
                  alt="Tiger in Corbett"
                  width={300}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/tourist-zone-elephant.jpg?height=300&width=400"
                  alt="Elephant Safari"
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 md:col-span-2">
              <div>
                <h3 className="text-xl font-bold">Dhikala Zone</h3>
                <p className="text-gray-700">
                  Being the largest and the most diversified jungle safari zone
                  in Corbett, Dhikala is famous for its bountiful natural beauty
                  as well as for offering the best sight for its exotic fauna.
                  The Entry gate is 18 km away from Ramnagar city. Night stay
                  inside the Dhikala Tourism Zone is highly recommended for the
                  hardcore wildlife enthusiasts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">Durga Devi Zone</h3>
                <p className="text-gray-700">
                  Located at the north eastern boundary of the Jim Corbett
                  National Park, Durga Devi zone is the heaven on planet earth
                  for those who are fond of bird watching. The Entry gate is
                  located at an approximate distance of 36 km from Ramnagar
                  city.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">Sitabani Buffer Zone</h3>
                <p className="text-gray-700">
                  Sitabani Zone doesn&apos;t fall under the Corbett Tiger
                  Reserve area. But, if you are fond of the serene ambiance of
                  the natural beauty, you must visit the Sitabani area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corbett Hotel & Resort Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-3xl font-bold">Corbett Hotel & Resort</h2>
          <p className="mb-8 text-gray-700">
            Corbett National Park is one of the leading tourist destinations in
            Uttrakhand which allures travelers across the globe. Corbett is
            embellished with amusing wildlife and an abundance of rich flora and
            fauna. People come from different regions here for satisfying their
            adventurous souls. Most of the royal hotels and resorts dotted here
            for destination weddings for the candid green space as their
            backdrop. The Organic décor complements superbly and suits best.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* De Coracao Resort */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <Image
                  src="/resort-1.jpg?height=200&width=300"
                  alt="De Coracao Resort"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="mb-2 text-lg font-semibold">
                  De Coracao Resort
                </h3>
                <div className="flex justify-center">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corbett Wild Iris Spa & Resort */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <Image
                  src="/resort-2.jpg?height=200&width=300"
                  alt="Corbett Wild Iris Spa & Resort"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="mb-2 text-lg font-semibold">
                  Corbett Wild Iris Spa & Resort
                </h3>
                <div className="flex justify-center">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Infinity Resort, Corbett */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <Image
                  src="/resort-3.jpg?height=200&width=300"
                  alt="Infinity Resort, Corbett"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="mb-2 text-lg font-semibold">
                  Infinity Resort, Corbett
                </h3>
                <div className="flex justify-center">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Beyond Stay Vasavana Resort */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <Image
                  src="/resort-4.jpg?height=200&width=300"
                  alt="Beyond Stay Vasavana Resort"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="mb-2 text-lg font-semibold">
                  Beyond Stay Vasavana Resort
                </h3>
                <div className="flex justify-center">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographical Details Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Geographical Details */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                Geographical Details about Park
              </h2>
              <div className="mb-4">
                <div className="mb-4 h-64 rounded-lg bg-gray-200">
                  <Image
                    src="/google-map.jpg?height=300&width=500"
                    alt="Corbett National Park Map"
                    width={500}
                    height={300}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="text-center">View Google Map</div>
              </div>
              <ul className="space-y-2">
                <li className="bg-gray-100 px-4 py-2">
                  1. Total Forest Area – 1318.54 square kilometres
                </li>
                <li className="px-4 py-2">
                  2. Core Area – 520 square kilometres
                </li>
                <li className="bg-gray-100 px-4 py-2">
                  3. Type of Forest – Dense moist deciduous forest mainly
                  consists of sal, haldu, peepal, rohini and mango trees
                </li>
                <li className="px-4 py-2">
                  4. Rivers – Kosi River, River Ramganga
                </li>
                <li className="bg-gray-100 px-4 py-2">
                  5. Hills – Nainital, Bhimtal, Naukichital, Rishikesh, Sattal
                </li>
                <li className="px-4 py-2">
                  6. Temperature – maximum 40 degree Celsius in summer and 8
                  degree in winter
                </li>
                <li className="bg-gray-100 px-4 py-2">
                  7. Annual Rainfall – The average rainfall of Corbett National
                  Park is 1133mm
                </li>
              </ul>
            </div>

            {/* Road Distance */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                Road Distance from Corbett to following Cities
              </h2>
              <ul className="space-y-2">
                <li className="bg-gray-100 px-4 py-2">
                  1. New Delhi Ramnagar (Jim Corbett Park) via Moradabad 260 Km
                </li>
                <li className="px-4 py-2">
                  2. Lucknow Jim Corbett Park via Bareilly, Moradabad 435 Km
                </li>
                <li className="bg-gray-100 px-4 py-2">
                  3. Kanpur Jim Corbett National Park via Farrukhabad, Bareilly,
                  Rampur 460 Km
                </li>
                <li className="px-4 py-2">
                  4. Moradabad Jim Corbett Park via Kashipur 95 Km
                </li>
                <li className="bg-gray-100 px-4 py-2">
                  5. Kathgodam Jim Corbett Park via Kaladhungi 55 Km
                </li>
                <li className="px-4 py-2">
                  6. Nainital Jim Corbett Park via Kaladhungi 60 Km
                </li>
                <li className="bg-gray-100 px-4 py-2">
                  7. Almora Jim Corbett Park via Nainital 134 Km
                </li>
                <li className="px-4 py-2">
                  8. Kausani Ramnagar via Bhikyasan 155 Km
                </li>
                <li className="bg-gray-100 px-4 py-2">
                  9. Ranikhet Ramnagar via Bhikyasan 100 Km
                </li>
                <li className="px-4 py-2">
                  10. Ranikhet Ramnagar via Bhikyasan 100 Km
                </li>
                <li className="bg-gray-100 px-4 py-2">
                  11. Ranikhet Ramnagar via Bhikyasan 100 Km
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-3xl font-bold">Latest Blog</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Blog Post 1 */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/blog-1.jpg?height=200&width=300"
                  alt="Fishing and Angling at Jim Corbett Park"
                  width={300}
                  height={200}
                  className="h-auto w-full"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold">
                Fishing and Angling at Jim Corbett Park
              </h3>
              <p className="mb-2 text-sm text-gray-700">
                Situated in the district of Nainital, Uttarakhand Jim Corbett
                National...
              </p>
              <Link href="/blog" className="text-orange-500 hover:underline">
                Read More
              </Link>
            </div>

            {/* Blog Post 2 */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/blog-2.jpg?height=200&width=300"
                  alt="Bird Watching Tour at Jim Corbett"
                  width={300}
                  height={200}
                  className="h-auto w-full"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold">
                Bird Watching Tour at Jim Corbett
              </h3>
              <p className="mb-2 text-sm text-gray-700">
                Tiger Sighting and Bird watching go hand in hand at Corbett
                National...
              </p>
              <Link href="/blog" className="text-orange-500 hover:underline">
                Read More
              </Link>
            </div>

            {/* Blog Post 3 */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/blog-3.jpg?height=200&width=300"
                  alt="UK High Court Directs State govt to Declare Elephant Safari"
                  width={300}
                  height={200}
                  className="h-auto w-full"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold">
                UK High Court Directs State govt to Declare Elephant Safari
              </h3>
              <p className="mb-2 text-sm text-gray-700">
                Uttarakhand High Court ordered the Central Government to
                seriously...
              </p>
              <Link href="/blog" className="text-orange-500 hover:underline">
                Read More
              </Link>
            </div>

            {/* Blog Post 4 */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/blog-4.jpg?height=200&width=300"
                  alt="Wildlife Trip to India's Oldest National Park"
                  width={300}
                  height={200}
                  className="h-auto w-full"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold">
                Wildlife Trip to India&apos;s Oldest National Park
              </h3>
              <p className="mb-2 text-sm text-gray-700">
                Established as a Hailey National Park in the year of 1936 to
                protect the...
              </p>
              <Link href="/blog" className="text-orange-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
