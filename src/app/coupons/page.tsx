import type { Metadata } from "next";
import Image from "next/image";
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
        <a href="/images/storage-stable-coupon_edited-1.jpg" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/storage-stable-coupon_edited-1-300x300.jpg"
            alt="Storage Stable Coupon - 50% OFF 1st Month's Rent"
            width={300}
            height={300}
            className="hover:shadow-lg transition-shadow"
          />
        </a>
      </div>
    </div>
  );
}
