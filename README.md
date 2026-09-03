# Kishan Ajudiya — Portfolio

A single-page portfolio site with an Apple-style liquid glass UI, built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

## Environment variables

The contact form uses [EmailJS](https://www.emailjs.com) (no backend required). Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

1. Create a free account at emailjs.com.
2. Add an Email Service (e.g. connect your Gmail).
3. Create an Email Template with `{{from_name}}`, `{{from_email}}`, and `{{message}}` variables.
4. Copy the Service ID, Template ID, and Public Key into `.env.local`.

Without these set, the contact form falls back to showing a "not configured" notice next to the direct email/LinkedIn links.

## Content

All resume content lives in `src/data/*.ts` — edit those files to update experience, skills, education, or certifications without touching component code.

- `src/assets/` — drop a profile photo here and wire it into `Hero.tsx` (a gradient initials placeholder is used until then).
- `public/resume.pdf` — optional, for a "Download CV" link.
- `public/og-image.png` — optional, for link previews when the site is shared.

## Build & deploy

```bash
npm run build
```

Deploys cleanly to Vercel with the Vite preset (build command `npm run build`, output directory `dist`). Add the `VITE_EMAILJS_*` environment variables in the Vercel project settings before deploying.
