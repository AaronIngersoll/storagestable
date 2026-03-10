import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Storage FAQ's - Storage Stable",
  description: "Frequently asked questions about storage units at Storage Stable in Evanston, WY.",
};

const unitSizes = [
  {
    size: "5' x 5'",
    sqft: "25 Sq. Ft.",
    equivalent: "Regular Closet",
    holds: "Personal items, clothes, boxes, skis, children's toys, small furniture items, business records and sales rep materials.",
  },
  {
    size: "5' x 10'",
    sqft: "50 Sq. Ft.",
    equivalent: "Walk-in Closet",
    holds: "Small amounts of furniture, sofas, chairs, chest of drawers, boxspring and mattress, business supplies and records. Plus other small items and boxes.",
  },
  {
    size: "7.5' x 10'",
    sqft: "75 Sq. Ft.",
    equivalent: "Large Closet",
    holds: "Small amounts of furniture, sofas, chairs, chest of drawers, boxspring and mattress, business supplies and records. Plus other small items and boxes.",
  },
  {
    size: "10' x 10'",
    sqft: "100 Sq. Ft.",
    equivalent: "Half of a one-car garage",
    holds: "One-bedroom apartment with major appliances, other furniture and supplies.",
  },
  {
    size: "10' x 15'",
    sqft: "150 Sq. Ft.",
    equivalent: "Two-thirds of a car garage",
    holds: "A two-bedroom apartment or house, including appliances, boxes and miscellaneous items and commercial storage inventory.",
  },
  {
    size: "10' x 20'",
    sqft: "200 Sq. Ft.",
    equivalent: "Standard one-car garage",
    holds: "A three-bedroom house with major appliances, plus lots of boxes. Business storage files and inventory ideal for storage racks.",
  },
  {
    size: "10' x 30'",
    sqft: "300 Sq. Ft.",
    equivalent: "Oversized one car garage",
    holds: "A four-to five-bedroom house with major appliances and room for boxes. Excellent for business storage of files, equipment and permanent records.",
  },
];

export default function StorageFaqs() {
  return (
    <div>
      <PageBanner title="Storage FAQ's" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-3">When can I access my storage space?</h3>
            <p className="text-gray-700 leading-relaxed">
              Our customers have the benefit of extensive opening hours. Storage Stable is open Monday through Saturday, six days a week, should you need assistance from our on-site managers, Ken and Cleone Lee. In addition, our gate hours are 7 am to 9 pm, 365 days a year.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">What&apos;s the minimum time I can store for?</h3>
            <p className="text-gray-700 leading-relaxed">
              All rental agreements on mini storage units are month-to-month. One month is the minimum, but we sure don&apos;t mind if you stay longer. We love our customers!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Where is my nearest location?</h3>
            <p className="text-gray-700 leading-relaxed">
              We have two convenient locations in Evanston Wyoming. Our main location is located next to the Evanston Regional Hospital on Arrowhead Drive. We&apos;re sure there is one location that is convenient for you. We offer discounted storage options at our Duncomb site. Ask us to learn more.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">I&apos;m not sure how to pack everything &ndash; can you help?</h3>
            <p className="text-gray-700 leading-relaxed">
              Visit our <a href="/storage-tips" className="text-stable-red hover:underline">storage tips</a> page for help with packing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">What size of storage unit do I need?</h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-3 py-2 text-left font-bold">Unit Size</th>
                    <th className="border px-3 py-2 text-left font-bold">Equivalent to:</th>
                    <th className="border px-3 py-2 text-left font-bold">This Unit will hold:</th>
                  </tr>
                </thead>
                <tbody>
                  {unitSizes.map((unit) => (
                    <tr key={unit.size} className="hover:bg-gray-50">
                      <td className="border px-3 py-2 font-semibold whitespace-nowrap">
                        {unit.size}
                        <br />
                        <span className="text-xs text-gray-500">({unit.sqft})</span>
                      </td>
                      <td className="border px-3 py-2">{unit.equivalent}</td>
                      <td className="border px-3 py-2">{unit.holds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-xl font-bold text-stable-red mt-8">
            Store Your Stuff in Our Stalls!
          </p>
        </div>
      </div>
    </div>
  );
}
