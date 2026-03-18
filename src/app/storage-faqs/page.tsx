import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Storage Unit FAQ's - Sizes, Access Hours & Pricing",
  description:
    "Answers to common storage questions at Storage Stable in Evanston, WY. Unit sizes from 3x5 to 10x30, gate hours 7am-9pm daily, month-to-month rentals. Call (307) 789-5818.",
  alternates: { canonical: "/storage-faqs" },
};

const storageFaqs = [
  {
    question: "When can I access my storage space?",
    answer:
      "Our customers have the benefit of extensive opening hours. Storage Stable is open Monday through Saturday, six days a week, should you need assistance from our on-site managers. In addition, our gate hours are 7 am to 9 pm, 365 days a year.",
  },
  {
    question: "What's the minimum time I can store for?",
    answer:
      "All rental agreements on mini storage units are month-to-month. One month is the minimum, but we sure don't mind if you stay longer. We love our customers!",
  },
  {
    question: "Where is my nearest location?",
    answer:
      "We have two convenient locations in Evanston, Wyoming. Our main location is next to the Evanston Regional Hospital on Arrowhead Drive. We offer discounted storage options at our Duncomb site — ask us to learn more.",
  },
  {
    question: "What size of storage unit do I need?",
    answer:
      "We offer units from 5x5 (25 sq ft, closet-sized) up to 10x30 (300 sq ft, oversized garage). A 10x10 fits a one-bedroom apartment, a 10x20 fits a three-bedroom house. Call us at (307) 789-5818 for help choosing the right size.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: storageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const unitSizes = [
  {
    size: "5' x 5'",
    sqft: 25,
    equivalent: "Regular Closet",
    holds:
      "Personal items, clothes, boxes, skis, children's toys, small furniture items, business records and sales rep materials.",
  },
  {
    size: "5' x 10'",
    sqft: 50,
    equivalent: "Walk-in Closet",
    holds:
      "Small amounts of furniture, sofas, chairs, chest of drawers, boxspring and mattress, business supplies and records.",
  },
  {
    size: "7.5' x 10'",
    sqft: 75,
    equivalent: "Large Closet",
    holds:
      "Small amounts of furniture, sofas, chairs, chest of drawers, boxspring and mattress, business supplies and records.",
  },
  {
    size: "10' x 10'",
    sqft: 100,
    equivalent: "Half a one-car garage",
    holds:
      "One-bedroom apartment with major appliances, other furniture and supplies.",
  },
  {
    size: "10' x 15'",
    sqft: 150,
    equivalent: "Two-thirds of a garage",
    holds:
      "A two-bedroom apartment or house, including appliances, boxes and commercial storage inventory.",
  },
  {
    size: "10' x 20'",
    sqft: 200,
    equivalent: "One-car garage",
    holds:
      "A three-bedroom house with major appliances, plus lots of boxes. Ideal for storage racks.",
  },
  {
    size: "10' x 30'",
    sqft: 300,
    equivalent: "Oversized garage",
    holds:
      "A four-to five-bedroom house with major appliances and room for boxes. Excellent for business storage.",
  },
];

export default function StorageFaqs() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <div className="py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-3 text-brand-primary">
            Storage FAQ&apos;s
          </h1>
          <p className="text-stone-500">
            Frequently asked questions about our storage units
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {/* FAQ Cards */}
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-brand-primary mb-3">
              When can I access my storage space?
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              Our customers have the benefit of extensive opening hours. Storage
              Stable is open Monday through Saturday, six days a week, should
              you need assistance from our on-site managers. In addition, our
              gate hours are 7 am to 9 pm, 365 days a year.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-brand-primary mb-3">
              What&apos;s the minimum time I can store for?
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              All rental agreements on mini storage units are month-to-month.
              One month is the minimum, but we sure don&apos;t mind if you stay
              longer. We love our customers!
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-brand-primary mb-3">
              Where is my nearest location?
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              We have two convenient locations in Evanston, Wyoming. Our main
              location is next to the Evanston Regional Hospital on Arrowhead
              Drive. We offer discounted storage options at our Duncomb site —
              ask us to learn more.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-brand-primary mb-3">
              Need help packing?
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              Visit our{" "}
              <Link
                href="/storage-tips"
                className="text-brand-accent hover:underline font-medium">
                storage tips
              </Link>{" "}
              page for help with packing.
            </p>
          </CardContent>
        </Card>

        {/* Unit Size Guide */}
        <Card className="border-0 shadow-md bg-white">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-brand-primary mb-5">
              What size of storage unit do I need?
            </h3>
            <div className="space-y-4">
              {unitSizes.map((unit) => (
                <div
                  key={unit.size}
                  className="flex flex-col sm:flex-row gap-3 p-4 rounded-lg bg-stone-50">
                  <div className="shrink-0 sm:w-28">
                    <div className="text-lg font-bold text-brand-primary">
                      {unit.size}
                    </div>
                    <Badge variant="default" className="text-xs mt-1">
                      {unit.sqft} sq ft
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-stone-800 mb-1">
                      {unit.equivalent}
                    </div>
                    <p className="text-sm text-stone-600">{unit.holds}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center py-4">
          <p className="text-xl font-bold text-brand-primary">
            Store Your Stuff in Our Stalls!
          </p>
        </div>
      </div>
    </div>
  );
}
