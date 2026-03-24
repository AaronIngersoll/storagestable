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
    <header className="sticky top-0 z-50 bg-brand-dark border-b border-stone-800 shadow-md">
      {/* Mobile: logo on top, CTAs below */}
      <div className="lg:hidden">
        {/* Logo row */}
        <div className="flex justify-center px-4 pt-3 pb-2">
          <Link href="/">
            <Image
              src="/images/Storage-Stable-Logo-4.png"
              alt="Storage Stable"
              width={989}
              height={821}
              className="w-48 sm:w-56 h-auto"
              priority
            />
          </Link>
        </div>
        {/* CTA row */}
        <div className="flex items-center justify-center gap-4 pb-2">
          <Button
            render={
              <a
                href="http://emove.com/login/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              />
            }
            className="bg-brand-accent hover:bg-brand-accent-light text-white font-bold text-xs px-4 py-1.5 rounded-full shadow-md">
            Pay Online
          </Button>
          <a
            href="tel:307-789-5818"
            className="flex items-center gap-1 text-xs font-semibold text-stone-300 hover:text-brand-accent transition-colors">
            <Phone className="h-3 w-3" />
            (307) 789-5818
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <button className="flex flex-col items-center gap-0.5 text-white hover:text-brand-accent transition-colors p-1" />
              }>
              <Menu className="h-5 w-5" />
              <span className="text-[9px] font-bold uppercase tracking-wide">
                Menu
              </span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] p-0 bg-white border-stone-200"
              closeClassName="text-stone-500 hover:text-brand-accent">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="flex flex-col h-full">
                {/* Logo in drawer */}
                <div className="p-4 border-b border-stone-200">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="block">
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
                          }`}>
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
                    className="w-full bg-brand-accent hover:bg-brand-accent-light text-white font-semibold text-sm rounded-full">
                    Pay Online
                  </Button>
                  <div className="text-center">
                    <a
                      href="tel:307-789-5818"
                      className="text-sm font-semibold text-brand-accent">
                      (307) 789-5818
                    </a>
                  </div>
                  <div className="text-xs text-stone-500 text-center space-y-0.5">
                    <p className="font-semibold text-stone-600">Office Hours</p>
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

      {/* Desktop: single row */}
      <div className="hidden lg:flex items-center h-36">
        <Link href="/" className="relative flex-shrink-0 h-full w-[28rem]">
          <Image
            src="/images/Storage-Stable-Logo-4.png"
            alt="Storage Stable"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex-1 flex items-center justify-between px-10">
          <nav className="flex items-center gap-2">
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
                }`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="tel:307-789-5818"
              className="flex items-center gap-2 text-base font-bold text-white hover:text-brand-accent transition-colors">
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
              className="bg-brand-accent hover:bg-brand-accent-light text-white font-bold text-sm px-7 py-2.5 rounded-full shadow-md">
              Pay Online
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
