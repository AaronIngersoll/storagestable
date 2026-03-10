import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Coupons - Storage Stable",
  description: "Storage Stable coupons and special offers in Evanston, WY.",
};

export default function Coupons() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-brand-dark-medium text-white py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-3">Coupons & Special Offers</h1>
          <p className="text-stone-400">
            Save on your storage with these great deals
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <Card className="border-0 shadow-md bg-white overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center">
            <Image
              src="/images/storage-stable-coupon_edited-1.jpg"
              alt="Storage Stable Coupon - 50% OFF 1st Month's Rent. Some conditions apply. See manager for details."
              width={400}
              height={400}
              className="rounded-md shadow-sm"
            />
            <div className="mt-6 text-center">
              <p className="text-stone-600 text-sm mb-4">
                Present this coupon or mention it when you call. Some conditions apply — see manager for details.
              </p>
              <Button render={<a href="tel:307-789-5818" />} className="bg-brand-accent hover:bg-brand-accent-light text-white">
                Call to Redeem: (307) 789-5818
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
