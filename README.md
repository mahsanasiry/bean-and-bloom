# Bean & Bloom: landing page for a small business

A fast, responsive, SEO-ready landing page for a neighborhood coffee roaster.
Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**, exported as a static site.

## Features

- Fully responsive layout (mobile, tablet, desktop)
- Accessible: skip link, keyboard navigation, visible focus, ARIA labels, reduced-motion support
- Contact form with client-side validation, spam trap and success/error states (Web3Forms)
- SEO basics: page metadata, Open Graph tags, `sitemap.xml`, `robots.txt`, JSON-LD (LocalBusiness)
- No external images or fonts, so pages load quickly
- All content in one file (`src/data/site.ts`), so it is easy to reuse for another business

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The static site is created in the `out` folder.

## Contact form setup

1. Get a free access key at https://web3forms.com.
2. Paste it into `web3formsKey` in `src/data/site.ts`.

Until a key is added, the form opens the visitor's email app instead.

## Deploy to GitHub Pages

1. Push this repository to GitHub (the repository name becomes part of the URL).
2. Go to **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` and publishes the site at
   `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Project structure

```
src/
  app/          layout, page, sitemap, robots, styles
  components/   Header, Hero, About, Menu, Reviews, Faq, Contact, ContactForm, Footer
  data/site.ts  all site content
```
