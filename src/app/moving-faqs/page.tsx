import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Moving FAQ's - Storage Stable",
  description:
    "Frequently asked questions about moving and using Storage Stable in Evanston, WY.",
};

export default function MovingFaqs() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-brand-dark-medium text-white py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-3">Moving FAQ&apos;s</h1>
          <p className="text-stone-400">
            Everything you need to know about moving and storage
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {/* FAQ 1 */}
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-brand-primary mb-3">
              Why should I store with Storage Stable instead of using a friend&apos;s garage or attic?
            </h3>
            <p className="text-stone-700 leading-relaxed">
              If you&apos;re selling your home, you certainly know by now that clearing out your
              possessions will make it less cluttered, and more attractive to buyers. Friends
              can&apos;t give you the peace of mind and access advantage that Storage Stable can!
              With access 365 days, clean, open, well-lit driveways, and on-site managers, you
              can&apos;t go wrong with Storage Stable.
            </p>
          </CardContent>
        </Card>

        {/* FAQ 2 */}
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-brand-primary mb-3">
              Moving tips &mdash; a timeline
            </h3>

            <div className="space-y-5 text-stone-700 leading-relaxed">
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">One month to go</h4>
                <p className="text-sm">
                  Call around for mover quotes. Make sure they&apos;re properly insured. We rent
                  Penske trucks or for local moves you can use our free moving truck. Order
                  packing materials — we have all you need at great prices. Start packing
                  non-essential items. Mark your boxes clearly. Clear out the attic. Let everyone
                  know you&apos;re changing address. Arrange mail re-direction at least 2 weeks in
                  advance. Contact your insurance company to arrange transfer on move day.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-brand-dark mb-1">Two weeks to go</h4>
                <p className="text-sm">
                  Start running down food stocks, especially in the freezer. Continue packing
                  items you won&apos;t need. Arrange someone to look after children and pets during
                  the move. Contact gas, electric, telephone, internet and water companies.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-brand-dark mb-1">One week to go</h4>
                <p className="text-sm">
                  Double-check your booking with the moving firm. Keep your vacuum cleaner and
                  cleaning supplies unpacked. Cancel newspapers, milk, and window cleaning. Settle
                  any outstanding bills.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-brand-dark mb-1">The day before</h4>
                <p className="text-sm">
                  Prepare your moving day &ldquo;survival kit&rdquo; — teapot, mugs, coffee, snacks,
                  dish soap, towels, and toilet paper. Pack valuables and carry them with you. Keep
                  important documents accessible. Defrost the freezer and fridge. Make sure you have
                  cash for unforeseen circumstances. Double-check your insurance policy.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-brand-dark mb-1">Morning of the move</h4>
                <p className="text-sm">
                  Call the gas and electric companies to confirm your final day. Try to keep calm —
                  it will all work out.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-stone-600 bg-brand-primary/5 p-4 rounded-md">
              Remember, we are happy to assist you in your move or store your belongings and
              reduce the clutter in your life. Come see us at Storage Stable.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
