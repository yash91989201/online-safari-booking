import CorbettSafariBookingForm from "@/components/safari-booking/corbett-safari-booking-form";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import Image from "next/image";

export default function SafariBooking() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Disclaimer Header */}
      <Navbar />

      <div className="bg-black py-8 text-white">
        <div className="container mx-auto px-4">
          <CorbettSafariBookingForm />
        </div>

        <section className="bg-white p-6">
          <div className="grid items-start gap-8 lg:grid-cols-3">
            {/* Left side: Info Cards */}
            <div className="space-y-6 lg:col-span-2">
              {/* Safari Booking Info */}
              <div className="rounded-md border shadow-sm">
                <div className="rounded-t-md bg-orange-500 px-4 py-2 font-semibold text-white">
                  Safari Booking & Tariff Jim Corbett National Park
                </div>
                <div className="p-4 text-sm text-gray-700">
                  Welcome to Jeep Safari Booking portal of Jim Corbett National
                  Park. Visitors can book online Jeep Safari or Canter Safari
                  for six different zones of the park namely, Bijrani, Jhirna,
                  Dhikala, Dhela, and Durgadevi. All the procedures of Safari
                  Booking at Corbett are managed by the forest officials as per
                  India’s forest department guidelines. Please note that we
                  cannot influence the safari zone, safari driver, and the
                  naturalist guide as it is not in our hands. It is solely
                  decided by the forest officials. Though all the zones have a
                  healthy population of tigers and wildlife sightings are
                  reported more or less the same. These all aspects are
                  supervised by the automated computerized system to ensure the
                  equal distribution of safari vehicles in respective zones.
                </div>
              </div>

              {/* Advance Booking Procedure */}
              <div className="rounded-md border shadow-sm">
                <div className="rounded-t-md bg-orange-500 px-4 py-2 font-semibold text-white">
                  Advance Booking Procedure : For booking request please provide
                  us the following details
                </div>
                <div className="space-y-2 p-4 text-sm text-gray-700">
                  <p>
                    The full name, age, and sex of each visitor as printed same
                    on the identity cards to be provided along with the
                    confirmatory amount
                  </p>
                  <p>
                    Preferred traveling date & Safari timing (Morning/Afternoon)
                  </p>
                  <p>
                    Specific ID card number of your (Pan Card, Aadhaar No.,
                    Driving license No., etc.)
                  </p>
                  <p>Safari Entry fee paid in advance</p>
                  <p>Jeep Safari & Canter Safari amounts are non-refundable.</p>
                  <p>
                    Please carry the same ID card submitted during the online
                    booking
                  </p>
                  <p>
                    Please intimate us 45 days in advance (for Indian nationals)
                  </p>
                  <p>
                    Foreign nationals can ask for booking 90 days in advance
                  </p>
                  <p>
                    Passport details are mandatory for making reservations for
                    foreign tourists
                  </p>
                  <p>
                    Safari permit is issued on a first come first serve basis
                    (subject to availability)
                  </p>
                  <p>
                    In case your safari is not booked due to reasons like
                    technical error or non-availability of the seat, we will
                    refund the whole amount in your given bank account. The same
                    would be communicated accordingly.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src="/elephant-1.jpg?height=400&width=200"
                alt="Elephants in Jim Corbett"
                width={200}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="space-y-8 bg-white p-6">
          <div className="grid items-start gap-8 lg:grid-cols-3">
            {/* Left side: Info Cards */}
            <div className="space-y-6 lg:col-span-2">
              {/* Safari Booking Info */}
              <div className="rounded-md border shadow-sm">
                <div className="rounded-t-md bg-orange-500 px-4 py-2 font-semibold text-white">
                  Safari Booking & Tariff Jim Corbett National Park
                </div>
                <div className="p-4 text-sm text-gray-700">
                  Welcome to Jeep Safari Booking portal of Jim Corbett National
                  Park. Visitors can book online Jeep Safari or Canter Safari
                  for six different zones of the park namely, Bijrani, Jhirna,
                  Dhikala, Dhela, and Durgadevi. All the procedures of Safari
                  Booking at Corbett are managed by the forest officials as per
                  India’s forest department guidelines. Please note that we
                  cannot influence the safari zone, safari driver, and the
                  naturalist guide as it is not in our hands. It is solely
                  decided by the forest officials. Though all the zones have a
                  healthy population of tigers and wildlife sightings are
                  reported more or less the same. These all aspects are
                  supervised by the automated computerized system to ensure the
                  equal distribution of safari vehicles in respective zones.
                </div>
              </div>

              {/* Advance Booking Procedure */}
              <div className="rounded-md border shadow-sm">
                <div className="rounded-t-md bg-orange-500 px-4 py-2 font-semibold text-white">
                  Advance Booking Procedure : For booking request please provide
                  us the following details
                </div>
                <div className="space-y-2 p-4 text-sm text-gray-700">
                  <p>
                    The full name, age, and sex of each visitor as printed same
                    on the identity cards to be provided along with the
                    confirmatory amount
                  </p>
                  <p>
                    Preferred traveling date & Safari timing (Morning/Afternoon)
                  </p>
                  <p>
                    Specific ID card number of your (Pan Card, Aadhaar No.,
                    Driving license No., etc.)
                  </p>
                  <p>Safari Entry fee paid in advance</p>
                  <p>Jeep Safari & Canter Safari amounts are non-refundable.</p>
                  <p>
                    Please carry the same ID card submitted during the online
                    booking
                  </p>
                  <p>
                    Please intimate us 45 days in advance (for Indian nationals)
                  </p>
                  <p>
                    Foreign nationals can ask for booking 90 days in advance
                  </p>
                  <p>
                    Passport details are mandatory for making reservations for
                    foreign tourists
                  </p>
                  <p>
                    Safari permit is issued on a first come first serve basis
                    (subject to availability)
                  </p>
                  <p>
                    In case your safari is not booked due to reasons like
                    technical error or non-availability of the seat, we will
                    refund the whole amount in your given bank account. The same
                    would be communicated accordingly.
                  </p>
                </div>
              </div>

              {/* Important Info */}
              <div className="rounded-md border shadow-sm">
                <div className="rounded-t-md bg-orange-500 px-4 py-2 font-semibold text-white">
                  Jim Corbett Safari Important information
                </div>
                <div className="space-y-2 p-4 text-sm text-gray-700">
                  <p>
                    Visitors are required to obtain entry permits that are being
                    issued online (by producing above mentioned documents)
                  </p>
                  <p>
                    It should be noted that the entry permit to the Corbett
                    National Park is provisional and can be changed or cancelled
                    without any prior intimation
                  </p>
                  <p>
                    The order of the Corbett Tiger Reserve Director will be
                    final in this regard; we are governed by the rules made
                    under the guidelines
                  </p>
                  <p>Entry permit belonging to you is not transferable</p>
                  <p>
                    Only officially registered guides can join your excursions,
                    please do not try to change the guide or naturalist
                  </p>
                  <p>
                    Entry to the National Park is strictly prohibited after
                    sunset
                  </p>
                  <p>
                    Day visit to Dhikala Tourism Zone is not permitted except
                    for the tourists staying inside the forest lodges
                  </p>
                  <p>
                    While doing jeep safari do not get down from the vehicle, it
                    is strictly not allowed
                  </p>
                  <p>
                    Avoid carrying pets while you are on a holiday tour as no
                    pets can be taken inside the CTR
                  </p>
                  <p>
                    All visitors to the Corbett Tiger Reserve abide by the rules
                    and regulations of the wildlife protection act. So please
                    co-operate
                  </p>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="rounded-md border shadow-sm">
                <div className="rounded-t-md bg-orange-500 px-4 py-2 font-semibold text-white">
                  Terms & Conditions for Online Jeep Safari Booking at Corbett
                  National Park
                </div>
                <div className="space-y-2 p-4 text-sm text-gray-700">
                  <p>
                    Jeep and Canter safari at Corbett is conducted only in two
                    shifts – Morning and Evening daily
                  </p>
                  <p>
                    Morning safari is conducted from 06:30 AM to 09:30 AM and
                    afternoon safari time is from 02:30 PM to 05:30 PM
                  </p>
                  <p>
                    Visitors are required to send their passport-size photograph
                    needed for permit registration
                  </p>
                  <p>
                    The number of visitors going on safari vehicles should not
                    exceed the limit as they will be stopped at the entry gate
                  </p>
                  <p>
                    The tourists are held responsible for their own luggage
                    during the safari, no safari driver or guide is liable for
                    the same
                  </p>
                  <p>
                    Please read all the instructions before you plunge into the
                    enthralling Jeep safari at Corbett National Park
                  </p>
                  <p className="font-medium">
                    <span className="text-orange-600">Note:</span> We are merely
                    acting as a travel agent in booking your safari at the
                    national park and will not be responsible for any accident,
                    injury, theft, and death during the safari excursion.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side image */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src="/tiger-1.jpg?height=400&width=200"
                alt="Elephants in Jim Corbett"
                width={200}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
