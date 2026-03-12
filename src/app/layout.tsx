import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Storage Stable - Evanston, WY Self Storage",
  description:
    "Storage Stable offers self storage units in Evanston, Wyoming. Sizes from 3x5 to 10x30 plus RV storage. Store your stuff in our stalls!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-brand-warm-light">
        <Sidebar />
        {/* Main content area - offset on desktop for sidebar */}
        <div className="lg:ml-[300px] min-h-screen flex flex-col">
          {/* Spacer for mobile fixed header */}
          <div className="h-16 lg:hidden" />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
