import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us - Storage Stable",
  description: "Contact Storage Stable in Evanston, WY. Call 307-789-5818.",
};

export default function ContactUs() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-brand-dark text-white py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
          <p className="text-stone-400">
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
      </div>
    </div>
  );
}
