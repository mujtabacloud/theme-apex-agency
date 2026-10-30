# Apex Agency — Creative Studio Astro Theme

[![Built with Astro](https://img.shields.io/badge/Astro-5.0+-orange.svg)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen.svg)](https://mujtabacloud.github.io/theme-apex-agency/)

**Apex Agency** is a standalone, production-ready creative agency and digital consultancy theme built with **Astro 5+**, **TypeScript**, and modern **CSS tokens**. Designed as the premier flagship theme for the **Thempok** ecosystem, Apex Agency delivers an editorial aesthetic, high-contrast dark navy/charcoal styling, electric purple/blue/cyan accents, and zero-dependency interactive client components.

- **Live Demo:** [https://mujtabacloud.github.io/theme-apex-agency/](https://mujtabacloud.github.io/theme-apex-agency/)
- **Repository:** [https://github.com/mujtabacloud/theme-apex-agency](https://github.com/mujtabacloud/theme-apex-agency)

---

## ✨ Features & Architecture

- **High-Performance Static Delivery:** 100/100 Lighthouse-ready with lightweight HTML, optimized SVG iconography, and zero heavy runtime libraries.
- **Flawless Light & Dark Mode:** Zero-flash script with persistent `localStorage` preference and strict single-icon toggle (sun in light mode, moon in dark mode).
- **Responsive Layout System:** Fluid clamp typography, flexible CSS Grid, and custom container queries across mobile, tablet, and ultra-wide displays.
- **Filterable Case Studies Gallery:** Real-time client-side category filtering (Fintech, Healthtech, SaaS, AI/Robotics, E-Commerce) with metrics chips and deliverable tags.
- **Interactive Modals:**
  - **Inquiry Modal:** Multi-tier budget selectors ($10k-$25k, $25k-$50k, $50k-$100k, $100k+), service area checkboxes, client-side input validation, and clear demo notice.
  - **Team Bio Modal:** Dynamic member bios, career accolades, core specializations, and direct social links.
- **Dedicated Multi-Page Flow:**
  - `index.astro`: 11-section creative studio showcase (Hero, Infinite Marquee, Stats, Services, Projects, Team, Testimonials, Inquiry CTA).
  - `projects.astro`: Comprehensive case studies archive with impact stats and category filtering.
  - `services.astro`: In-depth breakdown of 6 core agency practices, deliverable matrices, and 5-phase studio methodology.
  - `about.astro`: Studio ethos, founding story, leadership roster, and team culture.
  - `contact.astro`: Full contact page with interactive RFQ estimator, office addresses, and direct channels.
  - `404.astro`: Custom branded out-of-orbit error screen with navigation recovery.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18.17.1 or higher (v20+ or v22+ recommended)
- **npm** (or pnpm / yarn)

### 1. Clone the repository

```bash
git clone https://github.com/mujtabacloud/theme-apex-agency.git my-agency
cd my-agency
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start local development

```bash
npm run dev
```

The site will be available at:
`http://localhost:4321/theme-apex-agency/` (or `http://localhost:4321/` if `base` is changed to `/`).

### 4. Build for production

```bash
npm run build
```

This compiles static HTML, CSS, and JS into the `dist/` directory.

### 5. Preview the production build locally

```bash
npm run preview
```

---

## 📁 Project Structure

```
theme-apex-agency/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Actions deployment to GitHub Pages
├── public/
│   └── favicon.svg           # Scalable vector agency monogram
├── src/
│   ├── components/           # Reusable Astro UI components
│   │   ├── Breadcrumbs.astro
│   │   ├── ContactModal.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Icon.astro
│   │   ├── Marquee.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectsShowcase.astro
│   │   ├── ServiceCard.astro
│   │   ├── ServicesGrid.astro
│   │   ├── StatsSection.astro
│   │   ├── TeamCard.astro
│   │   ├── TeamModal.astro
│   │   ├── TeamSection.astro
│   │   └── TestimonialsSection.astro
│   ├── data/                 # Type-safe structured agency content
│   │   ├── projects.ts       # Case studies, metrics, deliverables
│   │   ├── services.ts       # Agency capabilities, phases, timelines
│   │   ├── site.ts           # Global configuration & base path helper
│   │   ├── stats.ts          # Studio metrics and client logo marquee
│   │   ├── team.ts           # Partner profiles, bios, awards
│   │   └── testimonials.ts   # Executive quotes & ratings
│   ├── layouts/
│   │   └── BaseLayout.astro  # HTML head, zero-flash theme script, layout shell
│   ├── pages/
│   │   ├── 404.astro         # Custom 404 page
│   │   ├── about.astro       # Studio story and team
│   │   ├── contact.astro     # Contact & RFP inquiry page
│   │   ├── index.astro       # Homepage
│   │   ├── projects.astro    # Case studies page
│   │   └── services.astro    # Capabilities & methodology
│   └── styles/
│       └── global.css        # CSS custom properties, tokens, reset, typography
├── .gitignore
├── astro.config.mjs          # Astro configuration (site & base path)
├── LICENSE                   # MIT License
├── package.json
├── README.md
└── tsconfig.json
```

---

## 🎨 Customization Guide

### 1. Site Branding & Links
Edit [`src/data/site.ts`](src/data/site.ts) to update the studio name, tagline, navigation items, office locations, and social channels:

```typescript
export const siteConfig = {
  name: 'Apex Agency',
  shortName: 'Apex',
  tagline: 'High-Impact Digital Products & Brand Systems',
  author: 'Apex Design Co.',
  url: 'https://mujtabacloud.github.io/theme-apex-agency',
  base: '/theme-apex-agency',
};
```

### 2. Colors & Typography Tokens
Colors and design tokens are defined in [`src/styles/global.css`](src/styles/global.css):
- `--color-primary-500`: Primary brand gradient & accent button color
- `--color-accent-purple`: Signature brand glow
- `--color-accent-cyan`: Futuristic cyber/tech accent
- `--color-surface-bg`: Background canvas
- `--font-sans`: Primary font family (Inter, system-ui)

### 3. Deploying to Custom Domains or Root
If deploying to the root of a domain (e.g. `https://myagency.com/`), update [`astro.config.mjs`](astro.config.mjs):

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://myagency.com',
  base: '/',
});
```

And update `siteConfig.base` in [`src/data/site.ts`](src/data/site.ts) to `''`.

---

## 🚢 Publishing to GitHub & GitHub Pages

To publish this standalone theme to GitHub:

### 1. Initialize Git in the project directory

```bash
cd D:\theme-apex-agency
git init
git add .
git commit -m "Initial commit: Apex Agency Astro Theme v1.0.0"
```

### 2. Create the remote repository on GitHub
Create a new public repository named `theme-apex-agency` on your GitHub account (`mujtabacloud`):
[https://github.com/new](https://github.com/new)

### 3. Link and push to GitHub

```bash
git remote add origin https://github.com/mujtabacloud/theme-apex-agency.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages Deployment
1. Go to your repository **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Push to `main` will automatically trigger the included [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) workflow and publish the site to:
   `https://mujtabacloud.github.io/theme-apex-agency/`

---

## 📄 License

Apex Agency is open-source software licensed under the [MIT License](./LICENSE). Free for personal and commercial client projects.
