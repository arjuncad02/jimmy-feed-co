# Jimmy's Feed Co. — Website

Premium, animated Next.js website for Jimmy's Feed Co., a sandwich shop at 401 Weber St N, Waterloo, ON.

## Tech Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · GSAP · Lenis smooth scroll · Embla Carousel · React Icons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Project Structure

- `src/app/` — pages (Home, Menu, About, Catering, Reviews, Contact) using the App Router
- `src/components/` — shared UI (Navbar, Footer, SandwichCard, TestimonialSlider, etc.)
- `src/data/` — site content: sandwiches, reviews, hours, nav, FAQs
- `public/images/` — image assets, organized by section

## Images

Real Jimmy's Feed Co. photography is wired in for the hero, catering, about, and gallery sections:

- `public/images/hero/hero-sandwich.jpg` — hero shot (deli sandwich close-up)
- `public/images/catering/platter-1.jpg` — Sandwich Platter card
- `public/images/catering/wrap-tray.jpg` — wrap tray, used in the Home catering teaser
- `public/images/about/storefront.jpg`, `kitchen.jpg` — About page (storefront/signage shot, fresh prep shot)
- `public/images/gallery/gallery-1.jpg` … `gallery-6.jpg` — Instagram-style gallery on the Home page

Still using branded SVG placeholders (no photo supplied yet) — swap in a real photo any time by replacing the file or updating the `src` prop:

- `public/images/catering/platter-2.svg` — Dessert Platter card
- `public/images/menu/sandwich-1.svg` … `sandwich-11.svg` — one per signature sandwich (No. 1–11)
- `public/images/about/timeline-2.svg`, `timeline-3.svg` — About timeline (Quality, Friendly Staff)
- `public/images/favicon.svg` — browser tab icon

You can drop in `.jpg`/`.png`/`.webp` files and just update the `src` prop (Next/Image handles all formats automatically).

## Content

Menu items, prices, hours, and address are defined in `src/data/sandwiches.ts` and `src/data/site.ts` — edit there to update copy sitewide.

## Deployment

This is a standard Next.js app — deploy directly to Vercel, Netlify, or any Node hosting provider.
