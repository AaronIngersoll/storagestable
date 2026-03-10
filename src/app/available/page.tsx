import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Available - Storage Stable",
  description: "Storage unit sizes and availability at Storage Stable in Evanston, WY.",
};

export default function Available() {
  return (
    <div>
      <PageBanner title="Available" />
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <p className="text-lg font-semibold uppercase mb-4">
          We have many sizes to fit your storage needs: 3x5, 5x8, 5x10, 10x10, 10x15, 10x20, 10x30, and RV Storage.
        </p>
        <p className="text-lg font-semibold uppercase">
          Please call for availability and prices.{" "}
          <a href="tel:307-789-5818" className="text-stable-red hover:underline">
            307-789-5818
          </a>
        </p>
      </div>
    </div>
  );
}
