import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer
      className="relative text-stone-300 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/wood-telephone-pole-post-grunge-2-720x400.jpg')",
      }}>
      <div className="absolute inset-0 bg-brand-dark/85" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">
              Location
            </h3>
            <div className="text-sm space-y-1.5">
              <p>51 Arrowhead Drive</p>
              <p>Evanston, WY 82930</p>
              <a
                href="tel:307-789-5818"
                className="block mt-2 text-white font-semibold hover:text-brand-accent transition-colors">
                (307) 789-5818
              </a>
              <a
                href="mailto:storagestable@gmail.com"
                className="block text-stone-400 hover:text-brand-accent transition-colors text-xs sm:text-sm break-all">
                storagestable@gmail.com
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">
              Office Hours
            </h3>
            <div className="text-sm space-y-1">
              <div className="flex gap-2">
                <span className="min-w-[100px]">Mon – Fri</span>
                <span className="text-stone-400">9am – 6pm</span>
              </div>
              <div className="flex gap-2">
                <span className="min-w-[100px]">Saturday</span>
                <span className="text-stone-400">9am – 1pm</span>
              </div>
              <div className="flex gap-2">
                <span className="min-w-[100px]">Sunday</span>
                <span className="text-stone-400">Closed</span>
              </div>
            </div>
          </div>

          {/* Gate Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">
              Gate Hours
            </h3>
            <div className="text-sm space-y-1">
              <div className="flex gap-2">
                <span className="min-w-[100px]">Every Day</span>
                <span className="text-stone-400">7am – 9pm</span>
              </div>
              <p className="text-stone-500 text-xs mt-1.5">365 days a year</p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="relative bg-stone-800" />

      <div className="relative text-center py-4 px-4 text-xs text-stone-500">
        Copyright {new Date().getFullYear()} Storage Stable | All Rights
        Reserved
      </div>
    </footer>
  );
}
