import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <HeroSlider />
        <div className="absolute top-4 right-4 z-10">
          <Button render={<Link href="/available" />} className="bg-brand-accent hover:bg-brand-accent-light text-white shadow-lg">
            View Available Units
          </Button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Multiple Sizes</h3>
              <p className="text-sm text-stone-600">
                From 3x5 closet-sized units to 10x30 oversized garages, plus RV storage.
              </p>
              <Button render={<Link href="/available" />} variant="link" className="mt-3 text-brand-primary hover:text-brand-primary-light p-0">
                See Available Units
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h.008M21 12.75V6.375a1.125 1.125 0 00-1.125-1.125H5.25a1.125 1.125 0 00-1.125 1.125v11.25" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Moving Truck</h3>
              <p className="text-sm text-stone-600">
                Use our free moving truck for local moves into your storage unit.
              </p>
              <Button render={<Link href="/contact-us" />} variant="link" className="mt-3 text-brand-primary hover:text-brand-primary-light p-0">
                Contact Us
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6h.008v.008H6V6z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">50% Off First Month</h3>
              <p className="text-sm text-stone-600">
                New customers get 50% off their first month&apos;s rent. Some conditions apply.
              </p>
              <Button render={<Link href="/coupons" />} variant="link" className="mt-3 text-brand-primary hover:text-brand-primary-light p-0">
                View Coupon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* About Section */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/wood-telephone-pole-post-grunge-2-720x400.jpg')" }}
      >
        <div className="bg-brand-dark/85 py-12 px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Store Your Stuff in Our Stalls!</h2>
            <p className="text-stone-300 leading-relaxed mb-6">
              Storage Stable offers clean, secure self-storage units in Evanston, Wyoming.
              With on-site managers, well-lit driveways, and access 365 days a year, you
              can trust us with your belongings. We also offer free pallets, boxes, and a
              free moving truck for local moves.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button render={<a href="tel:307-789-5818" />} className="bg-brand-accent hover:bg-brand-accent-light text-white">
                Call (307) 789-5818
              </Button>
              <Button render={<Link href="/contact-us" />} variant="outline" className="border-stone-500 text-white hover:bg-white/10">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
