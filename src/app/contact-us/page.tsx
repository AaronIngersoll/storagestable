import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us - Directions, Hours & Phone",
  description:
    "Contact Storage Stable at 51 Arrowhead Drive, Evanston, WY 82930. Call (307) 789-5818. Office hours Mon-Fri 9am-6pm, Sat 9am-1pm. Gate access 7am-9pm daily.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUs() {
  return (
    <div>
      {/* Hero */}
      <div className="py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-3 text-brand-primary">Contact Us</h1>
          <p className="text-stone-500">
            For any questions please feel free to call or email!
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-sm">
            <iframe
              src="https://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=51+Arrowhead+Drive,+Evanston,+WY+82930&aq=&sll=43.492704,-112.033707&sspn=0.212952,0.528374&ie=UTF8&hq=&hnear=51+Arrowhead+Dr,+Evanston,+Uinta,+Wyoming+82930&t=m&ll=41.253226,-110.987406&spn=0.032264,0.051413&z=14&iwloc=A&output=embed"
              width="100%"
              height="350"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Storage Stable Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Address</h3>
                <p className="text-stone-700">51 Arrowhead Drive</p>
                <p className="text-stone-700">Evanston, WY 82930-9244</p>
                <p className="text-xs text-stone-500 mt-1">Conveniently located across from the Evanston Regional Hospital</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Phone</h3>
                <a href="tel:307-789-5818" className="text-lg font-semibold text-brand-primary hover:text-brand-primary-light">
                  (307) 789-5818
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Email</h3>
                <a href="mailto:storagestable@gmail.com" className="text-brand-primary hover:text-brand-primary-light font-medium">
                  storagestable@gmail.com
                </a>
              </CardContent>
            </Card>

            <Button render={<a href="tel:307-789-5818" />} className="w-full bg-brand-accent hover:bg-brand-accent-light text-white" size="lg">
              Call Now
            </Button>
          </div>
        </div>

        {/* Additional info for SEO content depth */}
        <div className="mt-12 space-y-6">
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <h2 className="font-bold text-lg text-brand-primary mb-3">
                About Our Location
              </h2>
              <p className="text-stone-700 text-sm leading-relaxed mb-3">
                Storage Stable is conveniently located at 51 Arrowhead Drive in Evanston, Wyoming,
                directly across from the Evanston Regional Hospital. We serve residents and businesses
                throughout Evanston, Uinta County, and the surrounding areas including Bear River,
                Lyman, and Mountain View.
              </p>
              <p className="text-stone-700 text-sm leading-relaxed">
                Our facility features clean, well-lit driveways with on-site management. We offer
                self storage units ranging from 3x5 closet-sized spaces to 10x30 oversized garages,
                plus outdoor RV and vehicle parking. New customers receive 50% off their first month.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <h2 className="font-bold text-lg text-brand-primary mb-3">
                Office & Gate Hours
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-stone-700">
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Office Hours</h3>
                  <p>Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM</p>
                  <p>Saturday: 9:00 AM &ndash; 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Gate Hours</h3>
                  <p>Every Day: 7:00 AM &ndash; 9:00 PM</p>
                  <p className="text-stone-500 text-xs mt-1">365 days a year</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
