import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Storage Tips - Storage Stable",
  description:
    "Tips for organizing your self storage unit at Storage Stable in Evanston, WY.",
};

export default function StorageTips() {
  return (
    <div>
      <PageBanner title="Storage Tips" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="prose max-w-none">
          <p>
            There are a few things to remember when organizing your self storage
            unit here at Storage Stable.
          </p>
          <ul className="space-y-3 mt-4 list-disc pl-6">
            <li>
              You need to make sure that you can easily access the items
              you&apos;ve stored in the mini storage unit when you want them. In
              all but the smallest units, try to create an aisle and leave
              enough room to be able to get round the back.
            </li>
            <li>
              If you&apos;re storing heavy items or need boxes, we have boxes
              available and you can borrow our trolley to make your move easier.
              We offer free pallets to keep your items off the floor during our
              harsh Evanston winters. We also offer a free moving truck for
              local moves into your mini storage unit at Storage Stable.
            </li>
            <li>
              Store your largest items first. If you&apos;re stacking your unit
              high with boxes, always make sure to put the heaviest boxes at the
              bottom to avoid damage.
            </li>
            <li>
              Stack boxes and similarly sized items together to save space.
            </li>
            <li>
              If you&apos;re storing metal objects avoid resting them against
              items susceptible to damage.
            </li>
            <li>
              Try to assess what you&apos;ll need to access frequently and keep
              it at the front of your unit.
            </li>
            <li>
              Fill anything that&apos;s hollow &ndash; i.e. wardrobes, drawers,
              washing machines and fridges with small boxes and other items to
              maximize your available space.
            </li>
            <li>
              Make sure to stack boxes and containers so that you can see the
              labels you put on them.
            </li>
          </ul>
          <p className="mt-6">
            Don&apos;t hesitate to ask our on-site managers Tiffany or Robert,
            if you have any questions before or after your move into your self
            storage unit at Storage Stable. We look forward to helping you,
            &ldquo;Store your Stuff in our Stalls!&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
