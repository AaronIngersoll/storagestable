import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Coupons - Storage Stable",
  description: "Storage Stable coupons and special offers in Evanston, WY.",
};

export default function Coupons() {
  return (
    <div>
      <PageBanner title="Coupons" />
      <div className="max-w-4xl mx-auto px-4 py-10 flex justify-center">
        {/* Placeholder for coupon image */}
        <div className="w-[300px] h-[300px] bg-gray-200 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-center p-4">
          <div>
            <div className="text-sm text-gray-500 mb-2">[ Coupon Image Placeholder ]</div>
            <div className="text-lg font-bold text-stable-red">50% OFF</div>
            <div className="text-sm font-semibold">1st Month&apos;s Rent</div>
          </div>
        </div>
      </div>
    </div>
  );
}
