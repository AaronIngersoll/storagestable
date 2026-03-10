import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Storage Tips - Storage Stable",
  description:
    "Tips for organizing your self storage unit at Storage Stable in Evanston, WY.",
};

const tips = [
  "You need to make sure that you can easily access the items you've stored in the mini storage unit when you want them. In all but the smallest units, try to create an aisle and leave enough room to be able to get round the back.",
  "If you're storing heavy items or need boxes, we have boxes available and you can borrow our trolley to make your move easier. We offer free pallets to keep your items off the floor during our harsh Evanston winters. We also offer a free moving truck for local moves into your mini storage unit at Storage Stable.",
  "Store your largest items first. If you're stacking your unit high with boxes, always make sure to put the heaviest boxes at the bottom to avoid damage.",
  "Stack boxes and similarly sized items together to save space.",
  "If you're storing metal objects avoid resting them against items susceptible to damage.",
  "Try to assess what you'll need to access frequently and keep it at the front of your unit.",
  "Fill anything that's hollow — i.e. wardrobes, drawers, washing machines and fridges with small boxes and other items to maximize your available space.",
  "Make sure to stack boxes and containers so that you can see the labels you put on them.",
];

export default function StorageTips() {
  return (
    <div>
      {/* Hero */}
      <div className="py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-3 text-brand-primary">Storage Tips</h1>
          <p className="text-stone-500">
            A few things to remember when organizing your self storage unit
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="space-y-4">
          {tips.map((tip, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white">
              <CardContent className="p-5 flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <p className="text-stone-700 text-sm leading-relaxed">{tip}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-sm bg-brand-primary/5 mt-8">
          <CardContent className="p-6 text-center">
            <p className="text-stone-700">
              Don&apos;t hesitate to ask our on-site managers Tiffany or Robert if you
              have any questions before or after your move into your self storage unit
              at Storage Stable. We look forward to helping you —{" "}
              <span className="font-semibold text-brand-primary">
                &ldquo;Store your Stuff in our Stalls!&rdquo;
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
