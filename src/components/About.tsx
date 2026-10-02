import { aboutFacts, aboutParagraphs } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="font-serif text-3xl font-bold text-pine-900 sm:text-4xl">
            Roasted where you drink it
          </h2>
          <div className="mt-6 max-w-prose space-y-5 text-lg leading-relaxed text-pine-900/90">
            {aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="self-start border-t-2 border-pine-900">
          {aboutFacts.map((fact) => (
            <div
              key={fact.term}
              className="flex justify-between gap-6 border-b border-pine-200 py-4"
            >
              <dt className="text-pine-700">{fact.term}</dt>
              <dd className="text-right font-semibold">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
