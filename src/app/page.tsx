import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div>
      <HeroSlider />

      {/* Section 1: Multiple Sizes */}
      <section className="bg-brand-warm-light py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image with decorative frame */}
          <div className="relative w-full md:w-1/2">
            <div className="relative z-10 p-1">
              <div className="absolute inset-0 border-[3px] border-brand-accent pointer-events-none -translate-x-2 translate-y-2" />
              <Image
                src="/images/IMG_1159-1024x683.jpeg"
                alt="Storage units in multiple sizes"
                width={1024}
                height={683}
                className="relative z-10 w-full h-auto shadow-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900">
              Multiple Sizes Available
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 font-light max-w-xl">
              From 3x5 closet-sized units to 10x30 oversized garages, plus
              outdoor RV and vehicle storage. Whatever you need to store,
              we&apos;ve got the space for it.
            </p>
            <Button
              render={<Link href="/available" />}
              className="bg-brand-accent hover:bg-brand-accent-light text-white font-extrabold py-3 px-8 rounded-md text-sm uppercase tracking-tight"
            >
              See Available Units
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Free Moving Truck */}
      <section className="bg-brand-dark py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          {/* Image with decorative frame */}
          <div className="relative w-full md:w-1/2">
            <div className="relative z-10 p-1">
              <div className="absolute inset-0 border-[3px] border-brand-accent pointer-events-none translate-x-2 -translate-y-2" />
              <Image
                src="/images/Moving-Trucks-Available.jpg"
                alt="Free Penske moving trucks available"
                width={1024}
                height={683}
                className="relative z-10 w-full h-auto shadow-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Free Moving Truck
            </h2>
            <p className="text-lg leading-relaxed text-stone-300 font-light max-w-xl">
              Moving into your storage unit? Use our free Penske moving truck
              for local moves. We want to make things as easy as we can for you.
              Come check us out!
            </p>
            <Button
              render={<Link href="/contact-us" />}
              className="bg-brand-accent hover:bg-brand-accent-light text-white font-extrabold py-3 px-8 rounded-md text-sm uppercase tracking-tight"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: 50% Off First Month */}
      <section className="bg-brand-warm-light py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image with decorative frame */}
          <div className="relative w-full md:w-1/2">
            <div className="relative z-10 p-1">
              <div className="absolute inset-0 border-[3px] border-brand-accent pointer-events-none -translate-x-2 translate-y-2" />
              <Image
                src="/images/IMG_1129-1024x683.jpeg"
                alt="Storage Stable office building"
                width={1024}
                height={683}
                className="relative z-10 w-full h-auto shadow-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900">
              50% Off First Month
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 font-light max-w-xl">
              New customers get 50% off their first month&apos;s rent. Come
              visit our office, give us a call, or browse available units
              online. Some conditions apply.
            </p>
            <Button
              render={<Link href="/coupons" />}
              className="bg-brand-accent hover:bg-brand-accent-light text-white font-extrabold py-3 px-8 rounded-md text-sm uppercase tracking-tight"
            >
              View Coupon
            </Button>
          </div>
        </div>
      </section>

      {/* Decorative accent divider */}
      <div className="h-1 bg-brand-accent w-full" />

      {/* About Section */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/IMG_1160-940x400.jpeg')" }}
      >
        <div className="bg-brand-dark/85 py-20 px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Store Your Stuff in Our Stalls!
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-8">
              Storage Stable offers clean, secure self-storage units in
              Evanston, Wyoming. With on-site managers, well-lit driveways, and
              access 365 days a year, you can trust us with your belongings. We
              also offer free pallets, boxes, and a free moving truck for local
              moves.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                render={<a href="tel:307-789-5818" />}
                className="bg-brand-accent hover:bg-brand-accent-light text-white"
              >
                Call (307) 789-5818
              </Button>
              <Button
                render={<Link href="/contact-us" />}
                className="border border-stone-400 bg-transparent text-white hover:bg-white/10"
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Map */}
      <section className="w-full">
        <iframe
          src="https://maps.google.com/maps?q=51+Arrowhead+Drive,+Evanston,+WY+82930&t=m&z=15&output=embed&iwloc=B"
          width="100%"
          height="400"
          className="border-0 block"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Storage Stable Location — 51 Arrowhead Drive, Evanston, WY"
        />
      </section>
    </div>
  );
}
