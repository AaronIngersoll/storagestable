"use client";

const reviews = [
  {
    name: "Micheal T.",
    review:
      "Used this storage facility for MANY years and NEVER had ANY problems. Managers were ALWAYS friendly and helpful.",
  },
  {
    name: "Bob P.",
    review:
      "We have been storing our RV over the winter for many years and the management of the facility have been great to work with!",
  },
  {
    name: "Michelle E.",
    review:
      "The Storage Stables did a wonderful job. I never worried about any issues. Staff were aware of everything going on.",
  },
  {
    name: "Virgilia C.",
    review:
      "I could not be happier with the service at Storage Stable. They were extremely helpful.",
  },
  {
    name: "Jose H.",
    review:
      "Great place to store my trailer, and the owners are super friendly and helpful.",
  },
  {
    name: "Cheryl S.",
    review: "I have had my stuff here a long time. They have been swell.",
  },
  {
    name: "Kimberly S.",
    review: "Very friendly. Great storage facility!",
  },
  {
    name: "Barbara B.",
    review:
      "Excellent storage facility. Highly recommend Storage Stable in Evanston.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-brand-accent fill-brand-accent"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="flex-shrink-0 w-[380px] bg-white rounded-lg p-6 shadow-sm flex flex-col">
      <Stars />
      <p className="text-stone-700 text-sm leading-relaxed flex-1 mb-4">
        &ldquo;{review.review}&rdquo;
      </p>
      <p className="text-stone-900 font-bold text-sm">{review.name}</p>
    </div>
  );
}

export default function ReviewsScroller() {
  const allReviews = [...reviews, ...reviews];

  return (
    <section className="bg-brand-dark-medium py-8 overflow-hidden">
      <p className="text-white text-center mb-6 px-6 text-sm font-bold">
        What Our Customers Say
      </p>
      <div className="relative overflow-hidden [&:hover_.scroll-track]:pause">
        <div
          className="scroll-track flex gap-5 px-6"
          style={{
            animation: "scroll 30s linear infinite",
            width: "max-content",
          }}
        >
          {allReviews.map((review, idx) => (
            <ReviewCard key={`${review.name}-${idx}`} review={review} />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .pause {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
