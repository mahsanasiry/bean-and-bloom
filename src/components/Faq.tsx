import { faqs } from "@/data/site";

export default function Faq() {
  return (
    <section id="faq" className="bg-pine-50">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-28">
        <h2 className="font-serif text-3xl font-bold text-pine-900 sm:text-4xl">
          Questions we hear a lot
        </h2>

        <div className="mt-10 border-t border-pine-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-pine-200 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-pine-900 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="shrink-0 transition-transform group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 max-w-prose leading-relaxed text-pine-800">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
