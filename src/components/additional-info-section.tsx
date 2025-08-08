import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AdditionalInfoSection() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">What to Bring</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Valid photo ID proof</li>
            <li>• Camera with extra batteries</li>
            <li>• Sunscreen and hat</li>
            <li>• Water bottle</li>
            <li>• Comfortable clothing</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Safari Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• No smoking or drinking</li>
            <li>• Maintain silence</li>
            <li>• Follow guide instructions</li>
            <li>• No feeding animals</li>
            <li>• Stay inside vehicle</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Best Time to Visit</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <strong>Peak Season:</strong> October - March
            </p>
            <p>
              <strong>Wildlife Activity:</strong> Early morning and late
              afternoon
            </p>
            <p>
              <strong>Weather:</strong> Pleasant and cool
            </p>
            <p className="text-xs text-orange-600">
              Book early for peak season!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
