# TechRangers

**TechRangers** is a modern agency-style marketing website built with **Next.js (App Router)** and **Tailwind CSS**, positioning TechRangers as a [Dexzen Labs](https://dexzenlabs.com) initiative.

---

## Project Overview

A single-page marketing website featuring:

| Section | Description |
|---|---|
| **Navbar** | Fixed header with logo, section anchor links, and primary CTA. Mobile-responsive hamburger menu. |
| **Hero** | Full-screen headline with primary/secondary CTAs and trust indicator chips. |
| **Services** | 6-card grid showcasing core service offerings. |
| **Projects** | 4-card Dexzen Labs project showcase with category tags and CTA links. |
| **About / Why Us** | Company story, stats, and differentiator checklist. |
| **Process Timeline** | 5-step delivery process with numbered timeline. |
| **Testimonials** | 3 client testimonials with avatar initials. |
| **Contact CTA** | Bold call-to-action section with email link. |
| **Footer** | Brand, quick links, contact info, and Dexzen Labs credit. |

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Fonts**: System UI font stack (via CSS custom properties)
- **Linting**: ESLint with `eslint-config-next`

---

## Getting Started

### Prerequisites

- Node.js `>= 18.17`
- npm `>= 9`

### Install dependencies

```bash
npm install
```

### Run locally (development)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Lint

```bash
npm run lint
```

---

## Build for Production

```bash
npm run build
npm run start
```

---

## Deployment

The easiest way to deploy is via **[Vercel](https://vercel.com)**:

1. Push this repo to GitHub.
2. Import the repository on [vercel.com/new](https://vercel.com/new).
3. Vercel will auto-detect Next.js and deploy with zero configuration.

Alternatively, deploy to any Node.js-compatible host using:

```bash
npm run build   # Generates the .next production build
npm run start   # Starts the production server
```

---

## Project Structure

```
├── app/
│   ├── components/       # Reusable section components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContactCTA.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── content.ts    # All section copy and data
│   ├── globals.css       # Global Tailwind base styles
│   ├── layout.tsx        # Root layout with metadata / OG tags
│   └── page.tsx          # Homepage — assembles all sections
├── public/               # Static assets
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Accessibility & SEO

- Semantic HTML landmarks (`header`, `main`, `section`, `footer`)
- Keyboard-focus-visible states on all interactive elements
- Scroll-smooth behaviour and scroll-margin-top offsets for fixed navbar
- Open Graph and Twitter card metadata in `app/layout.tsx`
- Sensible `h1 → h2 → h3` heading hierarchy

---

## Brand

TechRangers is a **[Dexzen Labs](https://dexzenlabs.com)** initiative.  
All content in this repository is original and created for this project.
