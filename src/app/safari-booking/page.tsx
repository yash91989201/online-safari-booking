import CorbettSafariBookingForm from "@/components/safari-booking/corbett-safari-booking-form";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import Image from "next/image";

export default function SafariBooking() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="bg-black py-8 text-white">
        <div className="container mx-auto px-4">
          <CorbettSafariBookingForm />
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-md border shadow-sm">
            <div className="rounded-t-md bg-orange-500 px-4 py-2 font-semibold text-white">
              Safari Booking & Tariff Jim Corbett National Park
            </div>
            <div className="p-4 text-sm text-gray-700">
              Welcome to Jeep Safari Booking portal of Jim Corbett National
              Park. Visitors can book online Jeep Safari or Canter Safari for
              six different zones of the park namely, Bijrani, Jhirna, Dhikala,
              Dhela, and Durgadevi. All the procedures of Safari Booking at
              Corbett are managed by the forest officials as per India’s forest
              department guidelines. Please note that we cannot influence the
              safari zone, safari driver, and the naturalist guide as it is not
              in our hands. It is solely decided by the forest officials. Though
              all the zones have a healthy population of tigers and wildlife
              sightings are reported more or less the same. These all aspects
              are supervised by the automated computerized system to ensure the
              equal distribution of safari vehicles in respective zones.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto grid items-start gap-8 px-4 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="rounded-md border shadow-sm">
              <div className="rounded-t-md bg-orange-500 px-4 py-2 font-semibold text-white">
                Advance Booking Procedure : For booking request please provide
                us the following details
              </div>
              <div className="space-y-2 p-4 text-sm text-gray-700">
                <p>
                  The full name, age, and sex of each visitor as printed on the
                  ID card
                </p>
                <p>
                  Preferred traveling date & Safari timing (Morning/Afternoon)
                </p>
                <p>
                  Specific ID card number (PAN, Aadhaar, Driving License, etc.)
                </p>
                <p>Safari Entry fee paid in advance</p>
                <p>Safari amounts are non-refundable</p>
                <p>Carry the same ID card used during booking</p>
                <p>Indian nationals: Book 45 days in advance</p>
                <p>Foreign nationals: Book 90 days in advance</p>
                <p>Passport is mandatory for foreign tourists</p>
                <p>Safari permit is issued on a first-come-first-serve basis</p>
                <p>
                  If booking fails due to any reason, the amount will be
                  refunded to your bank account.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/elephant-1.jpg?height=400&width=200"
              alt="Elephants in Jim Corbett"
              width={200}
              height={400}
              className="h-96 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-md border shadow-sm">
            <div className="rounded-t-md bg-orange-500 px-4 py-2 font-semibold text-white">
              Jim Corbett Safari Important Information
            </div>
            <div className="space-y-2 p-4 text-sm text-gray-700">
              <p>Entry permits are issued online with valid documents</p>
              <p>
                Permits are provisional and may be changed or cancelled without
                prior notice
              </p>
              <p>
                Final authority lies with the Director of Corbett Tiger Reserve
              </p>
              <p>Permits are non-transferable</p>
              <p>Only registered guides are allowed, no substitutions</p>
              <p>Park entry is not allowed after sunset</p>
              <p>Dhikala zone day visit is only for staying tourists</p>
              <p>Do not get down from the vehicle during the safari</p>
              <p>Pets are not allowed inside the park</p>
              <p>
                Visitors must follow Wildlife Protection Act rules and cooperate
                with officials
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto grid items-start gap-8 px-4 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="rounded-md border shadow-sm">
              <div className="rounded-t-md bg-orange-500 px-4 py-2 font-semibold text-white">
                Terms & Conditions for Online Jeep Safari Booking at Corbett
                National Park
              </div>
              <div className="space-y-2 p-4 text-sm text-gray-700">
                <p>Safari is conducted in two shifts: Morning & Evening</p>
                <p>
                  Morning: 06:30 AM – 09:30 AM | Evening: 02:30 PM – 05:30 PM
                </p>
                <p>Passport-size photo is required for registration</p>
                <p>
                  Do not exceed vehicle visitor limit, entry gate will deny
                  excess passengers
                </p>
                <p>
                  Visitors are responsible for their belongings during safari
                </p>
                <p>
                  Read all instructions carefully before going for the safari
                </p>
                <p className="font-medium">
                  <span className="text-orange-600">Note:</span> We act only as
                  travel agents and are not liable for any mishaps during the
                  safari.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/tiger-1.jpg?height=400&width=200"
              alt="Tiger in Jim Corbett"
              width={200}
              height={400}
              className="h-96 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
