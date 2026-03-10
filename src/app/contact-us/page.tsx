import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Contact Us - Storage Stable",
  description: "Contact Storage Stable in Evanston, WY. Call 307-789-5818.",
};

export default function ContactUs() {
  return (
    <div>
      <PageBanner title="Contact Us" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-8">
          For any questions please feel free to call or email!
        </h2>

        {/* Google Map */}
        <div className="flex justify-center mb-8">
          <iframe
            src="https://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=51+Arrowhead+Drive,+Evanston,+WY+82930&aq=&sll=43.492704,-112.033707&sspn=0.212952,0.528374&ie=UTF8&hq=&hnear=51+Arrowhead+Dr,+Evanston,+Uinta,+Wyoming+82930&t=m&ll=41.253226,-110.987406&spn=0.032264,0.051413&z=14&iwloc=A&output=embed"
            width="600"
            height="450"
            className="border-0 max-w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Storage Stable Location"
          />
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-2">
          <p className="text-gray-500 font-bold">Location:</p>
          <p>51 Arrowhead Drive</p>
          <p>Evanston, WY 82930-9244</p>
          <p className="text-gray-500 font-bold mt-4">Phone:</p>
          <p>
            <a href="tel:307-789-5818" className="hover:text-stable-red">
              307-789-5818
            </a>
          </p>
          <p className="text-gray-500 font-bold mt-4">E-mail:</p>
          <p>
            <a href="mailto:storagestable@gmail.com" className="hover:text-stable-red">
              storagestable@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
