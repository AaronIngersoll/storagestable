import type { Metadata } from "next";
import { Geist, Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: {
    default: "Storage Stable - Self Storage & RV Parking in Evanston, WY",
    template: "%s | Storage Stable - Evanston, WY",
  },
  description:
    "Storage Stable offers clean, secure self storage units in Evanston, Wyoming. Sizes from 3x5 to 10x30, outdoor RV parking, free moving truck, and 50% off first month. Call (307) 789-5818.",
  keywords: [
    "self storage Evanston WY",
    "storage units Evanston Wyoming",
    "RV storage Evanston",
    "RV parking Evanston WY",
    "cheap storage units Evanston",
    "storage stable",
    "moving truck Evanston WY",
    "self storage near me",
    "storage units near Evanston Regional Hospital",
    "Uinta County storage",
  ],
  metadataBase: new URL("https://www.storagestable.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.storagestable.com",
    siteName: "Storage Stable",
    title: "Storage Stable - Self Storage & RV Parking in Evanston, WY",
    description:
      "Clean, secure self storage units in Evanston, WY. Sizes 3x5 to 10x30, RV parking, free moving truck, 50% off first month. Call (307) 789-5818.",
    images: [
      {
        url: "/images/IMG_1128-1024x683.jpeg",
        width: 1024,
        height: 683,
        alt: "Storage Stable facility in Evanston, Wyoming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Storage Stable - Self Storage & RV Parking in Evanston, WY",
    description:
      "Clean, secure self storage in Evanston, WY. Free moving truck, 50% off first month. Call (307) 789-5818.",
    images: ["/images/IMG_1128-1024x683.jpeg"],
  },
};

// JSON-LD structured data for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SelfStorage",
  name: "Storage Stable",
  description:
    "Self storage units and RV parking in Evanston, Wyoming. Sizes from 3x5 to 10x30, free moving truck for local moves, and 50% off first month for new customers.",
  url: "https://www.storagestable.com",
  telephone: "+1-307-789-5818",
  email: "storagestable@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "51 Arrowhead Drive",
    addressLocality: "Evanston",
    addressRegion: "WY",
    postalCode: "82930",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.2532,
    longitude: -110.9874,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  image: "https://www.storagestable.com/images/IMG_1128-1024x683.jpeg",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "11",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Storage Units",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Self Storage Units",
          description:
            "Indoor storage units from 3x5 to 10x30 for household and commercial storage",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "RV & Vehicle Storage",
          description: "Outdoor RV and vehicle parking with gated access",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Moving Truck",
          description:
            "Free Penske moving truck for local moves into your storage unit",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable, dancingScript.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-warm-light flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
