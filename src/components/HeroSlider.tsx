"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    src: "/images/message-ss-2_edited-1.jpg",
    alt: "Storage Stable - We want to make things as easy as we can for you. If you are moving in, use one of our trucks. Come check us out!",
  },
  {
    id: 2,
    src: "/images/storage-stable-collage_edited-1-940x400.jpg",
    alt: "Storage Stable - Units Available",
  },
  {
    id: 3,
    src: "/images/Moving-Trucks-Available.jpg",
    alt: "Storage Stable - Moving Trucks Available",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[480px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}>
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, calc(100vw - 300px)"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current
                ? "bg-brand-accent w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
