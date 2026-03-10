"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [tipsOpen, setTipsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
            Logo
          </div>
          <div>
            <div className="text-2xl font-bold tracking-wider text-stable-dark uppercase leading-tight">
              Storage
            </div>
            <div className="text-3xl font-bold text-stable-dark leading-tight">
              Stable
            </div>
            <div className="text-xs text-gray-500">
              307-789-5818
            </div>
            <div className="text-xs text-gray-500">
              www.storagestable.com
            </div>
          </div>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`${mobileOpen ? "block" : "hidden"} md:block absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none`}>
          <ul className="flex flex-col md:flex-row md:items-center gap-0 md:gap-1">
            {/* Tips & FAQ's dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setTipsOpen(true)}
              onMouseLeave={() => setTipsOpen(false)}
            >
              <button
                className="w-full text-left px-4 py-3 md:py-2 text-sm font-semibold text-gray-700 hover:text-stable-red transition-colors uppercase tracking-wide"
                onClick={() => setTipsOpen(!tipsOpen)}
              >
                Tips & FAQ&apos;s
              </button>
              {tipsOpen && (
                <ul className="md:absolute left-0 top-full bg-white shadow-lg min-w-[180px] z-50">
                  <li>
                    <Link
                      href="/storage-tips"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-stable-red"
                      onClick={() => { setTipsOpen(false); setMobileOpen(false); }}
                    >
                      Storage Tips
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/moving-faqs"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-stable-red"
                      onClick={() => { setTipsOpen(false); setMobileOpen(false); }}
                    >
                      Moving FAQ&apos;s
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/storage-faqs"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-stable-red"
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
                className="block px-4 py-3 md:py-2 text-sm font-semibold text-gray-700 hover:text-stable-red transition-colors uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Coupons
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block px-4 py-3 md:py-2 text-sm font-semibold text-gray-700 hover:text-stable-red transition-colors uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/available"
                className="block px-4 py-3 md:py-2 text-sm font-semibold text-gray-700 hover:text-stable-red transition-colors uppercase tracking-wide"
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
                className="block px-4 py-3 md:py-2 text-sm font-semibold text-gray-700 hover:text-stable-red transition-colors uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Pay Online
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Tagline bar */}
      <div className="bg-stable-red text-white text-center py-1 px-4">
        <span className="text-sm font-semibold tracking-wide">
          Store your stuff in our stalls!
        </span>
      </div>
    </header>
  );
}
