## My Website ##

A full-stack web application showcasing my background, experience,  and projects along with a contact form backed by Node/Express API.

Live: https://saramakawi.com

## Overview ##

A single-page resume and portfolio built with React and Typescript with a custom design system encompassing my favorite color palletes and featuring glass-morphism panels, animated gradient starfield background, and full light/dark theming. The contact form is wired to a separate Express backend that emails submissions to me directly.

This repo is the frontend. The contact API lives in a separate repo: https://github.com/saramakawi/personal-website-api

## Tech Stack ##

Frontend: React + TypeScript, Vite, Tailwind CSS, Framer Motion (scroll animations), Lucide (icons)

Backend (seprate repo): Node.js + Express + TypeScript, Resend (email delivery)

Deployment: Frontend on Vercel, Backend on Render

## Architecture ##

The site separates content from presentation: all résumé data (experience, education, skills, projects) lives in typed TypeScript objects in src/data/, defined by interfaces in src/types/. Section components map over this data, so updating the resume means editing one data file rather than touching markup.

Theming is implemented with CSS custom properties that swap via a single .dark class — every color routes through semantic variables (--accent, --text-main, --panel, etc.), so light and dark modes share one set of components.

```
  src/
  ├── data/         # résumé content as typed objects (source of truth)
  ├── types/        # TypeScript interfaces
  ├── sections/     # page sections (Hero, About, Experience, etc.)
  ├── components/   # reusable UI (Navbar, Footer, cards, Starfield)
  ├── hooks/        # custom hooks (theme, persistent state)
  └── App.tsx
```
