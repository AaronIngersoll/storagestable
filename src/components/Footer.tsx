import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="relative text-stone-300 bg-cover bg-center" style={{ backgroundImage: "url('/images/wood_texture3850.jpg')" }}>
      <div className="absolute inset-0 bg-brand-dark/85" />
      <div className="relative max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-4">
              Location
            </h3>
            <div className="text-sm space-y-2">
              <p>51 Arrowhead Drive</p>
              <p>Evanston, WY 82930-9244</p>
              <a
                href="tel:307-789-5818"
                className="block mt-3 text-white font-semibold hover:text-brand-accent transition-colors">
                (307) 789-5818
              </a>
              <a
                href="mailto:storagestable@gmail.com"
                className="block text-stone-400 hover:text-brand-accent transition-colors">
                storagestable@gmail.com
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-4">
              Office Hours
            </h3>
            <div className="text-sm space-y-1.5">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="text-stone-400">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-stone-400">9:00 AM – 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-stone-400">Closed</span>
              </div>
            </div>
          </div>

          {/* Gate Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-4">
              Gate Hours
            </h3>
            <div className="text-sm space-y-1.5">
              <div className="flex justify-between">
                <span>Every Day</span>
                <span className="text-stone-400">7:00 AM – 9:00 PM</span>
              </div>
              <p className="text-stone-500 text-xs mt-2">365 days a year</p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="relative bg-stone-800" />

      <div className="relative text-center py-4 px-6 text-xs text-stone-500">
        Copyright {new Date().getFullYear()} Storage Stable | All Rights
        Reserved
      </div>
    </footer>
  );
}
