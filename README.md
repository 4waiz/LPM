# Lando Property Management

Marketing website for Lando Property Management, a boutique property management firm serving property owners and tenants.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)

## Overview

A multi-page single-page application with rental listings, separate owner and tenant sections, and several interactive flows: tour scheduling, a maintenance-request wizard and a rent-payment mock-up. Listings live in `src/data/properties.ts` and the rest of the copy sits in the page components. Every form validates in the browser and confirms with a toast. There is no backend, so no data leaves the browser.

## Pages & Features

| Route | Page | Highlights |
| --- | --- | --- |
| `/` | Home | Hero with a featured-availability card, four service cards, featured listings, count-up stats, auto-rotating testimonial carousel, consultation CTA |
| `/properties` | Properties | Nine listings filterable by bedrooms, bathrooms and rent range; a detail modal opens a "Schedule a Tour" form (dates from tomorrow up to 60 days out, hourly time slots) |
| `/owners` | Owners | Service offerings, pricing snapshot, three-step onboarding process and an FAQ accordion |
| `/tenants` | Tenants | Resident quick actions, including a three-step "Pay Rent" modal (demo only: nothing is charged or transmitted), plus resources and policies |
| `/maintenance` | Maintenance | Four-step request wizard (Contact, Property, Issue, Review) with per-step validation and a progress stepper |
| `/about` | About | Company story, values and team cards |
| `/contact` | Contact | Contact form with topic select, office details and business hours |
| `*` | Not found | 404 page with a link home |

Site-wide:

- Every page is lazy-loaded with `React.lazy` and `Suspense`, with animated transitions between routes.
- A toast notification system (`ToastProvider` + `useToast`) confirms form submissions.
- Light/dark theme toggle saved to `localStorage`, a sticky navbar that gains a shadow on scroll, a mobile menu and per-page document titles.
- Motion is reduced when `prefers-reduced-motion` is set (`usePrefersReducedMotion`).
- Plus Jakarta Sans is self-hosted via Fontsource.

## Tech Stack

- [React 18](https://react.dev) + TypeScript (strict mode), bundled with [Vite 5](https://vite.dev)
- [Tailwind CSS 3.4](https://tailwindcss.com) (class-based dark mode, custom navy/sand/emerald/gold palette) with PostCSS and Autoprefixer
- [Framer Motion 11](https://motion.dev) for page transitions, modals, the carousel and parallax blobs
- [React Router 6](https://reactrouter.com) (`BrowserRouter`)
- `clsx` and `@fontsource/plus-jakarta-sans`

## Getting Started

Prerequisites: Node.js and npm. The scripts call Vite and TypeScript through `node ./node_modules/...`, so run `npm install` first.

```bash
npm install
npm run dev        # start the Vite dev server
npm run build      # production build to dist/ (does not type-check)
npm run typecheck  # TypeScript project check (tsc -b)
npm run preview    # serve the production build locally
```

## Project Structure

```
public/              # favicon, team photo
src/
├── App.tsx          # theme + toast providers, layout
├── main.tsx         # React entry point, router, font import
├── components/      # AnimatedRoutes, Navbar, Footer, Modal, PropertyCard, Stepper, Toast, ...
├── context/         # ThemeContext (light/dark)
├── data/            # properties.ts
├── hooks/           # usePrefersReducedMotion, useToast
├── pages/           # Home, Properties, Owners, Tenants, Maintenance, About, Contact, NotFound
└── styles/          # index.css (Tailwind layers and utilities)
```

## Deployment

GitHub records production deployments from [Vercel](https://vercel.com)'s GitHub integration. No `vercel.json` is committed, so Vercel's Vite defaults apply: build with `npm run build` and serve `dist/`.

Routing happens client-side, so the host has to rewrite unknown paths to `index.html` for direct links such as `/properties` to load.

---

Built by [Awaiz Ahmed](https://github.com/4waiz) · Kanban Studios
