"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/available", label: "Available Units" },
  { href: "/coupons", label: "Coupons" },
  { href: "/storage-tips", label: "Storage Tips" },
  { href: "/moving-faqs", label: "Moving FAQ's" },
  { href: "/storage-faqs", label: "Storage FAQ's" },
  { href: "/contact-us", label: "Contact Us" },
];

function NavContent({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className=" pb-4">
        <Link href="/" onClick={onLinkClick}>
          <Image
            src="/images/logo.png"
            alt="Storage Stable"
            width={400}
            height={300}
            className="w-full h-auto"
            priority
          />
        </Link>
      </div>

      {/* Contact Info */}
      <div className="px-6 pb-4 text-sm text-stone-400 space-y-1">
        <p>51 Arrowhead Drive</p>
        <p>Evanston, WY 82930</p>
        <a
          href="tel:307-789-5818"
          className="text-brand-accent hover:text-brand-accent-light font-semibold block mt-1">
          (307) 789-5818
        </a>
      </div>

      <Separator className="bg-stone-700" />

      {/* Nav Links */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onLinkClick}
                className={`block px-6 py-2.5 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-brand-accent bg-stone-800"
                    : "text-stone-300 hover:text-white hover:bg-stone-800"
                }`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Separator className="bg-stone-700" />

      {/* Pay Online CTA */}
      <div className="p-6">
        <Button
          render={
            <a
              href="http://emove.com/login/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            />
          }
          className="w-full bg-brand-accent hover:bg-brand-accent-light text-white font-semibold">
          Pay Online
        </Button>
      </div>

      {/* Hours */}
      <div className="px-6 pb-6 text-xs text-stone-500">
        <p className="font-semibold text-stone-400 mb-1">Office Hours</p>
        <p>Mon–Fri: 9am – 6pm</p>
        <p>Sat: 9am – 1pm</p>
        <p>Sun: Closed</p>
        <p className="font-semibold text-stone-400 mb-1 mt-3">Gate Hours</p>
        <p>7am – 9pm Daily</p>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-brand-dark border-b border-stone-800">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Storage Stable"
              width={150}
              height={59}
              className="h-10 w-auto rounded-sm"
              priority
            />
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="tel:307-789-5818"
              className="text-brand-accent text-sm font-semibold hidden sm:block">
              (307) 789-5818
            </a>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-stone-800"
                  />
                }>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[280px] p-0 bg-brand-dark-medium border-stone-700">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <NavContent onLinkClick={() => setOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-[260px] bg-brand-dark-medium overflow-y-auto">
        <NavContent />
      </aside>
    </>
  );
}
