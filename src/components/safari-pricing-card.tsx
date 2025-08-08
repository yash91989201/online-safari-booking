import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarIcon } from "lucide-react";

export function SafariPricingCard() {
  const safariPrices = [
    {
      zone: "Zone 1-5",
      vehicleType: "Canter (20 Seater)",
      indianAdult: "₹1,170",
      indianChild: "₹702",
      foreignAdult: "$25",
      foreignChild: "$15",
    },
    {
      zone: "Zone 1-5",
      vehicleType: "Gypsy (6 Seater)",
      indianAdult: "₹1,560",
      indianChild: "₹936",
      foreignAdult: "$35",
      foreignChild: "$20",
    },
    {
      zone: "Zone 6-10",
      vehicleType: "Canter (20 Seater)",
      indianAdult: "₹1,404",
      indianChild: "₹842",
      foreignAdult: "$30",
      foreignChild: "$18",
    },
    {
      zone: "Zone 6-10",
      vehicleType: "Gypsy (6 Seater)",
      indianAdult: "₹1,872",
      indianChild: "₹1,123",
      foreignAdult: "$42",
      foreignChild: "$24",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CarIcon className="h-5 w-5 text-orange-600" />
          Safari Pricing
        </CardTitle>
        <CardDescription>
          Current rates for Ranthambore National Park safari bookings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-orange-50">
                <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium">
                  Zone
                </th>
                <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium">
                  Vehicle
                </th>
                <th className="border border-gray-200 px-3 py-2 text-center text-sm font-medium">
                  Indian Adult
                </th>
                <th className="border border-gray-200 px-3 py-2 text-center text-sm font-medium">
                  Indian Child
                </th>
                <th className="border border-gray-200 px-3 py-2 text-center text-sm font-medium">
                  Foreign Adult
                </th>
                <th className="border border-gray-200 px-3 py-2 text-center text-sm font-medium">
                  Foreign Child
                </th>
              </tr>
            </thead>
            <tbody>
              {safariPrices.map((price, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-200 px-3 py-2 text-sm font-medium">
                    {price.zone}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-sm">
                    {price.vehicleType}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-center text-sm font-semibold text-green-600">
                    {price.indianAdult}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-center text-sm font-semibold text-green-600">
                    {price.indianChild}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-center text-sm font-semibold text-blue-600">
                    {price.foreignAdult}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-center text-sm font-semibold text-blue-600">
                    {price.foreignChild}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          <p>• Prices are per person and include forest entry fees</p>
          <p>• Children below 5 years are free of charge</p>
          <p>• Guide charges are additional (₹200-500 per safari)</p>
        </div>
      </CardContent>
    </Card>
  );
}
