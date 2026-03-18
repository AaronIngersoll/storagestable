import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Mobile: gradient top-to-bottom over image */}
      <div className="md:hidden relative min-h-[520px]">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_1128-1024x683.jpeg"
            alt="Storage Stable facility in Evanston, Wyoming"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white from-40% via-white/60 via-60% to-transparent to-80%" />
        </div>

        <div className="relative z-10 px-5 pt-8 pb-6">
          <p className="text-stone-600 text-sm font-medium mb-2">
            Self-Storage & RV Parking in Evanston, WY
          </p>
          <h1 className="text-3xl font-black text-stone-900 leading-tight mb-3">
            We make storage{" "}
            <span className="text-brand-accent">easy.</span>
          </h1>
          <p className="text-stone-700 text-sm leading-relaxed mb-4">
            Moving in? Use one of our trucks. We want to make things as easy as
            we can for you. Come check us out!
          </p>
          <p className="flex items-center gap-2 text-base text-brand-accent mb-6 font-[family-name:var(--font-script)]">
            <Star className="h-4 w-4 fill-brand-accent text-brand-accent flex-shrink-0" />
            <span className="font-bold">Store your stuff in our stalls</span>
            <Star className="h-4 w-4 fill-brand-accent text-brand-accent flex-shrink-0" />
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/available"
              className="inline-block bg-brand-accent hover:bg-brand-accent-light text-white font-bold text-sm px-6 py-3 rounded-full transition-colors shadow-lg"
            >
              View Available Units
            </Link>
            <Link
              href="/contact-us"
              className="inline-block bg-white hover:bg-stone-50 text-stone-800 font-bold text-sm px-6 py-3 rounded-full transition-colors shadow-lg border border-stone-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: gradient left-to-right overlay */}
      <div className="hidden md:block relative h-[500px] lg:h-[550px]">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_1128-1024x683.jpeg"
            alt="Storage Stable facility in Evanston, Wyoming"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white from-15% via-white/50 via-25% to-transparent to-35%" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="px-14 lg:px-32 xl:px-40 max-w-3xl">
            <p className="text-stone-600 text-lg font-medium mb-2">
              Self-Storage & RV Parking in Evanston, WY
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-stone-900 leading-tight mb-4">
              We make storage{" "}
              <span className="text-brand-accent">easy.</span>
            </h1>
            <p className="text-stone-700 text-lg md:text-xl leading-relaxed mb-6">
              Moving in? Use one of our trucks. We want to make things as easy
              as we can for you. Come check us out!
            </p>
            <p className="flex items-center gap-2 text-xl md:text-2xl text-brand-accent mb-8 font-[family-name:var(--font-script)]">
              <Star className="h-5 w-5 fill-brand-accent text-brand-accent flex-shrink-0" />
              <span className="font-bold">Store your stuff in our stalls</span>
              <Star className="h-5 w-5 fill-brand-accent text-brand-accent flex-shrink-0" />
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/available"
                className="inline-block bg-brand-accent hover:bg-brand-accent-light text-white font-bold text-base px-7 py-3.5 rounded-full transition-colors shadow-lg"
              >
                View Available Units
              </Link>
              <Link
                href="/contact-us"
                className="inline-block bg-white hover:bg-stone-50 text-stone-800 font-bold text-base px-7 py-3.5 rounded-full transition-colors shadow-lg border border-stone-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
