import ContactForm from "./ContactForm";
import { site } from "@/data/site";

export default function Contact() {
  const { address } = site;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <h2 className="font-serif text-3xl font-bold text-pine-900 sm:text-4xl">
        Visit or write to us
      </h2>

      <div className="mt-10 grid gap-14 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-pine-900">Find us</h3>
            <address className="mt-2 not-italic leading-relaxed text-pine-800">
              {address.street}
              <br />
              {address.city}, {address.region} {address.postalCode}
            </address>
          </div>

          <div>
            <h3 className="font-semibold text-pine-900">Opening hours</h3>
            <dl className="mt-2 space-y-1 text-pine-800">
              {site.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-4 border-b border-pine-100 py-2">
                  <dt>{h.label}</dt>
                  <dd className="font-medium">{h.display}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="font-semibold text-pine-900">Get in touch</h3>
            <p className="mt-2 space-y-1 text-pine-800">
              <a className="block font-medium underline underline-offset-4 hover:text-pine-500" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                {site.phone}
              </a>
              <a className="block font-medium underline underline-offset-4 hover:text-pine-500" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
