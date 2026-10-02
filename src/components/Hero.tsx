import { featuredRoast, site } from "@/data/site";

export default function Hero() {
  return (
    <section className="bg-pine-900 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.15fr_1fr] md:py-24">
        <div>
          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pine-100">
            Come in for a flat white, stay for the pastries, or take a bag of beans home. Our
            café is on {site.address.street} in {site.address.city}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-md bg-saffron-400 px-6 py-3 font-semibold text-pine-950 hover:bg-saffron-300"
            >
              See the menu
            </a>
            <a
              href="#contact"
              className="rounded-md border border-pine-300 px-6 py-3 font-semibold text-white hover:bg-pine-800"
            >
              Find the café
            </a>
          </div>
        </div>

        {/* Bag label: this week's roast */}
        <aside
          aria-label="This week's roast"
          className="mx-auto w-full max-w-sm border-2 border-pine-950 bg-paper p-6 text-pine-950 sm:p-8"
        >
          <p className="text-sm font-semibold text-pine-600">On the bar this week</p>
          <h2 className="mt-1 font-serif text-3xl font-bold">{featuredRoast.name}</h2>
          <p className="mt-1 text-pine-700">{featuredRoast.process}</p>

          <dl className="mt-6 divide-y divide-dashed divide-pine-300 border-y border-dashed border-pine-300 text-sm">
            <div className="flex justify-between gap-4 py-3">
              <dt className="font-semibold">Tastes like</dt>
              <dd className="text-right">{featuredRoast.notes}</dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="font-semibold">Grown at</dt>
              <dd className="text-right">{featuredRoast.altitude}</dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="font-semibold">Roasted</dt>
              <dd className="text-right">{featuredRoast.roasted}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <div className="flex justify-between text-xs font-medium text-pine-700">
              <span>Light</span>
              <span>Dark</span>
            </div>
            <div
              role="img"
              aria-label={`Roast level ${featuredRoast.roastLevel} out of 5`}
              className="mt-1 grid grid-cols-5 gap-1"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`h-2 ${n <= featuredRoast.roastLevel ? "bg-pine-800" : "bg-pine-100"}`}
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
