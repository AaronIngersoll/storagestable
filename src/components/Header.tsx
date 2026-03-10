"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [tipsOpen, setTipsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Main header with wood texture background */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/wood-telephone-pole-post-grunge-2-720x400.jpg')" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/black-logo-with-wood--460x295.jpg"
              alt="Storage Stable - Self-Storage & RV Parking"
              width={280}
              height={180}
              className="w-[200px] md:w-[280px] h-auto"
              priority
            />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 bg-black/40 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation */}
          <nav className={`${mobileOpen ? "block" : "hidden"} md:block absolute md:relative top-full left-0 right-0 bg-neutral-800 md:bg-transparent shadow-lg md:shadow-none`}>
            <ul className="flex flex-col md:flex-row md:items-center gap-0 md:gap-1">
              {/* Tips & FAQ's dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setTipsOpen(true)}
                onMouseLeave={() => setTipsOpen(false)}
              >
                <button
                  className="w-full text-left px-4 py-3 md:py-2 text-sm font-semibold text-white hover:text-amber-300 transition-colors uppercase tracking-wide drop-shadow-md"
                  onClick={() => setTipsOpen(!tipsOpen)}
                >
                  Tips & FAQ&apos;s
                </button>
                {tipsOpen && (
                  <ul className="md:absolute left-0 top-full bg-neutral-800 shadow-lg min-w-[180px] z-50">
                    <li>
                      <Link
                        href="/storage-tips"
                        className="block px-4 py-2 text-sm text-white hover:bg-neutral-700 hover:text-amber-300"
                        onClick={() => { setTipsOpen(false); setMobileOpen(false); }}
                      >
                        Storage Tips
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/moving-faqs"
                        className="block px-4 py-2 text-sm text-white hover:bg-neutral-700 hover:text-amber-300"
                        onClick={() => { setTipsOpen(false); setMobileOpen(false); }}
                      >
                        Moving FAQ&apos;s
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/storage-faqs"
                        className="block px-4 py-2 text-sm text-white hover:bg-neutral-700 hover:text-amber-300"
                        onClick={() => { setTipsOpen(false); setMobileOpen(false); }}
                      >
                        Storage FAQ&apos;s
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/coupons"
                  className="block px-4 py-3 md:py-2 text-sm font-semibold text-white hover:text-amber-300 transition-colors uppercase tracking-wide drop-shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Coupons
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="block px-4 py-3 md:py-2 text-sm font-semibold text-white hover:text-amber-300 transition-colors uppercase tracking-wide drop-shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/available"
                  className="block px-4 py-3 md:py-2 text-sm font-semibold text-white hover:text-amber-300 transition-colors uppercase tracking-wide drop-shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Available
                </Link>
              </li>
              <li>
                <a
                  href="http://emove.com/login/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block px-4 py-3 md:py-2 text-sm font-semibold text-white hover:text-amber-300 transition-colors uppercase tracking-wide drop-shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Pay Online
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Tagline bar */}
      <div className="bg-[#8b1a1a] text-white text-center py-1.5 px-4">
        <span className="text-sm font-semibold tracking-wide">
          &#9733; Store your stuff in our stalls &#9733;
        </span>
      </div>
    </header>
  );
}
