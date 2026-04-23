# Lewis Team Homebuyer Guide

React PWA-style guide for buyer onboarding + education. Built with Vite + React 18 + Tailwind 3 + lucide-react.

## Run locally

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Outputs a static site into `dist/`.

## Deploy to Vercel (after local build works)

1. Initialize git and make first commit:
   ```bash
   git init
   git add .
   git commit -m "Initial deploy"
   git branch -M main
   ```
2. Create a new empty repo on GitHub named `lewis-homebuyer-guide` (don't add README — it's already here).
3. Push:
   ```bash
   git remote add origin https://github.com/<YOUR-GH-USERNAME>/lewis-homebuyer-guide.git
   git push -u origin main
   ```
4. Go to https://vercel.com/new, import the GitHub repo, accept defaults, click Deploy. Vercel auto-detects Vite.

## Before you share the live URL

Edit `src/App.jsx` around lines 18 and 34 to confirm the two emails:
- `lancey@lewisteamrealestate.com`
- `stacy@lewisteamrealestate.com`

Also double-check the Facebook profile photo URLs still load (lines 14 and 38). If they don't show, swap them for direct image hosts.

## Project structure

```
./
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── src/
    ├── main.jsx      # React entry
    ├── App.jsx       # Everything — the full app
    └── index.css     # Tailwind directives
```
