"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function CorbettSafariBookingForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState<Date>(new Date(2025, 3));

  const handlePrevMonth = () => {
    setMonth(new Date(month.getFullYear(), month.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setMonth(new Date(month.getFullYear(), month.getMonth() + 1));
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* Left Column - Safari Pricing Tables */}
      <div className="space-y-6">
        {/* Jeep Safari Price Table */}
        <div className="overflow-hidden rounded">
          <div className="bg-[#f0a500] py-2 text-center font-bold text-white">
            Jeep Safari Price & Safari Zones
          </div>
          <div className="bg-[#2a2a2a] text-white">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="border-r border-gray-700 p-3">
                    Price (Indian)
                  </td>
                  <td className="p-3">
                    INR 7500 / - Jeep ( Maximum 6 Persons & 1 children (b/w - 5
                    to 12 years) are allowed in ONE Jeep)
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="border-r border-gray-700 p-3">
                    Price (Foreigner)
                  </td>
                  <td className="p-3">
                    INR 16000 / Jeep ( Maximum 6 Persons & 1 children (b/w - 5
                    to 12 years) are allowed in ONE Jeep )
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="border-r border-gray-700 p-3">Zones</td>
                  <td className="p-3">
                    Bijrani / Garjiya / Jhirna / Dhela / Durgadevi / Phato /
                    Sitabani
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="border-r border-gray-700 p-3">Timings</td>
                  <td className="p-3">
                    Morning 6:00 AM - 9:00 AM | Evening 2:30 PM - 6:00 PM
                    (Safari Timing Varies as Season Changes)
                  </td>
                </tr>
                <tr>
                  <td className="border-r border-gray-700 p-3">Inclusions</td>
                  <td className="p-3">
                    Permission of CTR, Jeep, Driver, Permit and All Entries &
                    Taxes.
                    <br />* Guide Fee to be paid by the guest on the spot
                    directly.
                    <br />* Pick & drop is not included from hotels.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Dhikala Canter Safari Price Table */}
        <div className="overflow-hidden rounded">
          <div className="bg-[#f0a500] py-2 text-center font-bold text-white">
            Dhikala Canter Safari Price
          </div>
          <div className="bg-[#2a2a2a] text-white">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="border-r border-gray-700 p-3">
                    Price (Indian)
                  </td>
                  <td className="p-3">
                    INR 2500 / Person ( ONE Canter has 16 Seats )
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="border-r border-gray-700 p-3">
                    Price (Foreigner)
                  </td>
                  <td className="p-3">
                    INR 5000 / Person ( ONE Canter has 16 Seats )
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="border-r border-gray-700 p-3">Zones</td>
                  <td className="p-3">Dhikala</td>
                </tr>
                <tr>
                  <td className="border-r border-gray-700 p-3">Timings</td>
                  <td className="p-3">
                    Morning 6:00 AM - 11:30 AM | Evening 12:00 PM - 5:30 PM
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Column - Booking Form */}
      <div className="rounded bg-[#c9b18c] p-6">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Corbett Safari Booking
        </h2>

        {/* Calendar */}
        <div className="mb-4 rounded bg-white">
          <div className="flex items-center justify-between border-b p-2">
            <button onClick={handlePrevMonth} className="p-1">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="text-center font-bold">April 2025</div>
            <div className="flex">
              <button className="p-1">
                <Maximize2 className="h-5 w-5" />
              </button>
              <button onClick={handleNextMonth} className="p-1">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="p-2">
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              <div className="p-2 font-semibold">Su</div>
              <div className="p-2 font-semibold">Mo</div>
              <div className="p-2 font-semibold">Tu</div>
              <div className="p-2 font-semibold">We</div>
              <div className="p-2 font-semibold">Th</div>
              <div className="p-2 font-semibold">Fr</div>
              <div className="p-2 font-semibold">Sa</div>

              {/* Empty cells for days before April 1 */}
              <div className="p-2"></div>
              <div className="p-2"></div>
              <div className="p-2">01</div>
              <div className="p-2">02</div>
              <div className="p-2">03</div>
              <div className="p-2">04</div>
              <div className="rounded bg-red-500 p-2 text-white">05</div>

              {/* Week 2 */}
              <div className="rounded bg-green-600 p-2 text-white">06</div>
              <div className="rounded bg-green-600 p-2 text-white">07</div>
              <div className="rounded bg-green-600 p-2 text-white">08</div>
              <div className="rounded bg-green-600 p-2 text-white">09</div>
              <div className="rounded bg-green-600 p-2 text-white">10</div>
              <div className="rounded bg-green-600 p-2 text-white">11</div>
              <div className="rounded bg-green-600 p-2 text-white">12</div>

              {/* Week 3 */}
              <div className="rounded bg-green-600 p-2 text-white">13</div>
              <div className="rounded bg-green-600 p-2 text-white">14</div>
              <div className="rounded bg-green-600 p-2 text-white">15</div>
              <div className="rounded bg-green-600 p-2 text-white">16</div>
              <div className="rounded bg-green-600 p-2 text-white">17</div>
              <div className="rounded bg-green-600 p-2 text-white">18</div>
              <div className="rounded bg-green-600 p-2 text-white">19</div>

              {/* Week 4 */}
              <div className="rounded bg-green-600 p-2 text-white">20</div>
              <div className="rounded bg-green-600 p-2 text-white">21</div>
              <div className="rounded bg-green-600 p-2 text-white">22</div>
              <div className="rounded bg-green-600 p-2 text-white">23</div>
              <div className="rounded bg-green-600 p-2 text-white">24</div>
              <div className="rounded bg-green-600 p-2 text-white">25</div>
              <div className="rounded bg-green-600 p-2 text-white">26</div>

              {/* Week 5 */}
              <div className="rounded bg-green-600 p-2 text-white">27</div>
              <div className="rounded bg-green-600 p-2 text-white">28</div>
              <div className="rounded bg-green-600 p-2 text-white">29</div>
              <div className="rounded bg-green-600 p-2 text-white">30</div>
              <div className="p-2"></div>
              <div className="p-2"></div>
              <div className="p-2"></div>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <select className="w-full rounded border p-2">
              <option>Select Vehicle</option>
              <option>Jeep</option>
              <option>Canter</option>
            </select>
          </div>
          <div>
            <select className="w-full rounded border p-2">
              <option>Select Zone</option>
              <option>Bijrani</option>
              <option>Garjiya</option>
              <option>Jhirna</option>
              <option>Dhela</option>
              <option>Durgadevi</option>
              <option>Phato</option>
              <option>Sitabani</option>
              <option>Dhikala</option>
            </select>
          </div>
          <div>
            <select className="w-full rounded border p-2">
              <option>Select Timing</option>
              <option>Morning</option>
              <option>Evening</option>
            </select>
          </div>
          <div>
            <select className="w-full rounded border p-2">
              <option>Adult (above 12 yrs)</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
          <div>
            <select className="w-full rounded border p-2">
              <option>Child (between 5 to 12 yrs)</option>
              <option>0</option>
              <option>1</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Traveler Name"
              className="w-full rounded border p-2"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile"
              className="w-full rounded border p-2"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full rounded border p-2"
            />
          </div>
        </div>

        {/* Book Now Button */}
        <div className="text-center">
          <button className="rounded bg-green-600 px-8 py-3 font-bold text-white hover:bg-green-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
