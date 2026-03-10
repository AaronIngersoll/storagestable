import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Available Units - Storage Stable",
  description: "Storage unit sizes and availability at Storage Stable in Evanston, WY.",
};

const units = [
  { size: "3x5", label: "Extra Small" },
  { size: "5x8", label: "Small" },
  { size: "5x10", label: "Small+" },
  { size: "10x10", label: "Medium" },
  { size: "10x15", label: "Large" },
  { size: "10x20", label: "Extra Large" },
  { size: "10x30", label: "Oversized" },
];

export default function Available() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-brand-dark-medium text-white py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-3">Available Storage Units</h1>
          <p className="text-stone-400">
            We have many sizes to fit your storage needs
          </p>
        </div>
      </div>

      {/* Unit Sizes Grid */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {units.map((unit) => (
            <Card key={unit.size} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-5 text-center">
                <div className="text-2xl font-bold text-brand-primary mb-1">{unit.size}</div>
                <Badge variant="secondary" className="text-xs">{unit.label}</Badge>
              </CardContent>
            </Card>
          ))}
          <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-5 text-center">
              <div className="text-2xl font-bold text-brand-primary mb-1">RV</div>
              <Badge variant="secondary" className="text-xs">Parking</Badge>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-bold mb-2">Call for Availability & Prices</h2>
          <p className="text-stone-600 mb-4">
            Our friendly team can help you find the right unit for your needs.
          </p>
          <Button render={<a href="tel:307-789-5818" />} size="lg" className="bg-brand-accent hover:bg-brand-accent-light text-white">
            (307) 789-5818
          </Button>
        </div>
      </div>
    </div>
  );
}
