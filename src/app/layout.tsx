import type { Metadata } from "next";
import { Geist, Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-script" });

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
    <html lang="en" className={cn("font-sans", geist.variable, dancingScript.variable)}>
      <body className="min-h-screen bg-brand-warm-light flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
