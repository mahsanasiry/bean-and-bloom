import { menuItems } from "@/data/site";

export default function Menu() {
  return (
    <section id="menu" className="bg-pine-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <h2 className="font-serif text-3xl font-bold text-pine-900 sm:text-4xl">Menu</h2>
        <p className="mt-4 max-w-prose text-lg text-pine-900/90">
          Everything is made in the café, and the beans are roasted a few steps from the counter.
        </p>

        <ul className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <div className="flex items-baseline">
                <h3 className="font-serif text-xl font-bold text-pine-950">{item.name}</h3>
                <span
                  aria-hidden="true"
                  className="mx-3 min-w-6 flex-1 translate-y-[-4px] border-b-2 border-dotted border-pine-300"
                />
                <span className="font-semibold text-pine-800">{item.price}</span>
              </div>
              <p className="mt-1 max-w-md text-pine-800">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
