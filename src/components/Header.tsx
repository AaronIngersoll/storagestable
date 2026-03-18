"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "/available", label: "Available Units" },
  { href: "/storage-tips", label: "Tips & FAQ's" },
  { href: "/coupons", label: "Coupons" },
  { href: "/contact-us", label: "Contact Us" },
];

const allNavLinks = [
  { href: "/", label: "Home" },
  { href: "/available", label: "Available Units" },
  { href: "/coupons", label: "Coupons" },
  { href: "/storage-tips", label: "Storage Tips" },
  { href: "/moving-faqs", label: "Moving FAQ's" },
  { href: "/storage-faqs", label: "Storage FAQ's" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 relative border-b border-stone-200 shadow-sm overflow-hidden h-24 sm:h-28 lg:h-32">
      {/* Full-width wood background */}
      <Image
        src="/images/wood-telephone-pole-post-grunge-2-720x400.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-center h-full">
        {/* Logo pinned left */}
        <Link
          href="/"
          className="flex-shrink-0 h-full flex items-center pl-4 sm:pl-6 lg:pl-10"
        >
          <Image
            src="/images/logo.png"
            alt="Storage Stable"
            width={624}
            height={303}
            className="h-16 sm:h-20 lg:h-24 w-auto drop-shadow-lg"
            priority
          />
        </Link>

        {/* Right section with nav + CTA */}
        <div className="flex-1 flex items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[15px] font-semibold transition-colors ${
                  pathname === link.href ||
                  (link.href === "/storage-tips" &&
                    (pathname === "/storage-tips" ||
                      pathname === "/moving-faqs" ||
                      pathname === "/storage-faqs"))
                    ? "text-brand-accent"
                    : "text-white hover:text-brand-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Phone + Pay Online + Mobile Menu */}
          <div className="flex items-center gap-4 lg:gap-5">
            <a
              href="tel:307-789-5818"
              className="hidden sm:flex items-center gap-2 text-base font-bold text-white hover:text-brand-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              (307) 789-5818
            </a>

            <Button
              render={
                <a
                  href="http://emove.com/login/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                />
              }
              className="bg-brand-accent hover:bg-brand-accent-light text-white font-bold text-sm sm:text-base px-5 sm:px-7 py-2.5 rounded-full shadow-md"
            >
              Pay Online
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <button className="lg:hidden p-2 text-white hover:text-brand-accent transition-colors" />
                }
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] p-0 bg-white border-stone-200"
                closeClassName="text-stone-500 hover:text-brand-accent"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                <div className="flex flex-col h-full">
                  {/* Logo in drawer */}
                  <div className="p-4 border-b border-stone-200">
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className="block"
                    >
                      <Image
                        src="/images/logo.png"
                        alt="Storage Stable"
                        width={150}
                        height={59}
                        className="h-10 w-auto"
                      />
                    </Link>
                  </div>

                  {/* Full nav links in mobile drawer */}
                  <nav className="flex-1 py-2">
                    <ul>
                      {allNavLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`block px-6 py-3 text-sm font-medium transition-colors ${
                              pathname === link.href
                                ? "text-brand-accent bg-stone-50"
                                : "text-stone-700 hover:text-brand-accent hover:bg-stone-50"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <Separator className="bg-stone-200" />

                  {/* Mobile CTA + Contact */}
                  <div className="p-4 space-y-3">
                    <Button
                      render={
                        <a
                          href="http://emove.com/login/"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        />
                      }
                      className="w-full bg-brand-accent hover:bg-brand-accent-light text-white font-semibold text-sm rounded-full"
                    >
                      Pay Online
                    </Button>
                    <div className="text-center">
                      <a
                        href="tel:307-789-5818"
                        className="text-sm font-semibold text-brand-accent"
                      >
                        (307) 789-5818
                      </a>
                    </div>
                    <div className="text-xs text-stone-500 text-center space-y-0.5">
                      <p className="font-semibold text-stone-600">
                        Office Hours
                      </p>
                      <p>Mon-Fri: 9am - 6pm</p>
                      <p>Sat: 9am - 1pm</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
