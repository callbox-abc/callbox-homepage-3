# Callbox Homepage — V3 "Console"

A homepage mockup for Callbox (B2B lead generation agency), built with
React + Vite + Tailwind CSS + lucide-react.

Design direction: bold, graphic, mostly-dark canvas with sharp-edged bento
grids, monospace data labels, and a hero illustration built as a live
"console" card — a ticking meetings-booked counter plus an auto-advancing
service dock (both driven by real React state, not just CSS).

All copy, stats and logos are **sample content** for layout review only.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Output goes to `dist/`.

## Deploy to Vercel

1. Push this folder to its own GitHub repository.
2. In Vercel: **New Project → Import** the repo.
3. Vercel auto-detects the Vite framework preset (`vite build`, output `dist`).
   A `vercel.json` is included as a fallback in case auto-detection is off.
4. Deploy. No environment variables are required.

## Structure

```
index.html          entry HTML
src/main.jsx         React root
src/App.jsx           the homepage itself
src/index.css         Tailwind directives
tailwind.config.js
vite.config.js
```
