import { reviews } from "@/data/site";

export default function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-28">
      <h2 className="font-serif text-3xl font-bold text-pine-900 sm:text-4xl">
        What our regulars say
      </h2>

      <div className="mt-10 divide-y divide-pine-200 border-y border-pine-200">
        {reviews.map((review) => (
          <figure key={review.name} className="py-8">
            <blockquote className="font-serif text-xl leading-relaxed text-pine-950 sm:text-2xl">
              <p>{review.quote}</p>
            </blockquote>
            <figcaption className="mt-4 text-pine-700">
              <span className="font-semibold text-pine-900">{review.name}</span>, {review.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
