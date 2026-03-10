"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    alt: "Storage Stable facility collage",
    placeholder: "Storage Stable - Facility Collage",
  },
  {
    id: 2,
    alt: "Storage Stable message",
    placeholder: "Storage Stable - Store Your Stuff In Our Stalls",
  },
  {
    id: 3,
    alt: "Moving trucks available",
    placeholder: "Moving Trucks Available",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[350px] bg-gray-800 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Placeholder for slide images */}
          <div className="w-full h-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-lg opacity-70 mb-2">[ Image Placeholder ]</div>
              <div className="text-xl font-semibold">{slide.placeholder}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        &#8250;
      </button>
    </div>
  );
}
