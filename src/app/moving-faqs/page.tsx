import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Moving FAQ's - Storage Stable",
  description: "Frequently asked questions about moving and using Storage Stable in Evanston, WY.",
};

export default function MovingFaqs() {
  return (
    <div>
      <PageBanner title="Moving FAQ's" />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-3">
              I&apos;m moving out of my house. Why should I store with Storage Stable, when I can use a friend&apos;s garage or attic?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              If you&apos;re selling your home, you certainly know by now that clearing out your possessions will make it less cluttered, and more attractive to buyers. Friends can&apos;t give you the peace of mind and access advantage that Storage Stable can! If you need a little more room, we&apos;ve got you covered. With access 365 days, clean, open, well-lit driveways, and on-site managers, you can&apos;t go wrong with Storage Stable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">
              I&apos;m moving out of my house &ndash; any tips?
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h4 className="font-bold">One month to go.</h4>
                <p>
                  Call around for mover quotes. Make sure they&apos;re properly insured and establish exactly what they&apos;re going to be doing. If you want to save yourself a lot of money and do it yourself. We rent Penske trucks or for local moves to our self storage facilities in Evanston you can use our free moving truck. Order your packing materials. Remember, we have all you need, and our prices can&apos;t be beat! Start packing any non-essential items, like out of season clothing, together with your best china, glassware, and ornaments. Mark your boxes clearly. Clear out the attic. Pack as many items as you can from your garage and/or shed. Let everyone know that you&apos;re changing address. Arrange to have mail re-directed. This needs to be done at least 2 weeks in advance, according to the USPS. Keep all correspondence from your Real Estate Agent, and the moving company you choose. Contact your insurance company to arrange transfer of your home and contents insurance on the move day.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Two weeks to go.</h4>
                <p>
                  Start running down your food stocks, especially in the freezer. Continue to pack any items you won&apos;t need before the move. Arrange for someone to look after your children and pets during the move. Contact the gas, electric, telephone, internet and water companies to inform them of the move.
                </p>
              </div>

              <div>
                <h4 className="font-bold">One week to go.</h4>
                <p>
                  Double-check the booking you&apos;ve made with the moving firm. Keep your vacuum cleaner, dusters, polish, etc., unpacked for that last once-over. Cancel newspapers, milk, window cleaning, and settle any bills you may have overlooked.
                </p>
              </div>

              <div>
                <h4 className="font-bold">The day before.</h4>
                <p>
                  Prepare your moving day &ldquo;survival kit&rdquo; containing a teapot, mugs, tea, coffee, milk, sugar, teaspoons, sandwiches, snacks, biscuits, fruit, dish soap, towels, and don&apos;t forget the toilet paper roll! Pack all your valuables such as jewelry together, and carry them with you. Keep the file containing all valuable documents relating to the move with you at all times in case you need to refer to them. Advise the phone company of the time you want your telephone disconnected (or transferred). Defrost the freezer and fridge. Make a list of useful telephone numbers for the new occupiers of your home, plus instructions for operating any appliances, central heating, etc. Make sure you have cash available for unforeseen circumstances and for tipping your movers. Telephone your insurance company to double-check that your policy will be in force on the morning of the move.
                </p>
              </div>

              <div>
                <h4 className="font-bold">The morning of the move.</h4>
                <p>
                  Telephone the gas and electric companies, and tell them it&apos;s your final day in the home. Try to keep calm. It will all work out.
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Remember we are happy to assist you in your move or store your belongings and reduce the clutter in your life. Come see us at Storage Stable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
