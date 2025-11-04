# Audiophile Ecommerce (Next.js + Convex)

A modern, responsive e-commerce storefront built with Next.js and Convex for the data/backend layer. The project contains a Next.js App Router front-end, a small Convex backend (schema, functions, seeds), and utilities for sending order emails.

This README explains how to get the project running locally, how to start Convex for local development, and how to run the provided seed scripts.

## Key features

- Next.js (App Router) React front-end
- Convex used as the backend (local dev & deployable functions + database)
- Product data in `public/products.json` and `convex/seed.ts` for seeding
- Email templates and order endpoints using `nodemailer`
- Tailwind CSS for styling

## Prerequisites

- Node.js 18+ (test with `node -v`)
- A package manager: pnpm (recommended), npm or yarn
- Git
- Convex CLI (you can use the local dependency + npx or install globally)

If you don't have pnpm installed, install it globally (optional but recommended):

```powershell
npm install -g pnpm
```

## Install dependencies

From the repository root run:

```powershell
# install using pnpm (preferred)
pnpm install

# or with npm
npm install
```

## Convex setup (local development)

This repo includes a `convex/` folder with Convex schema, functions and seed code. The package.json has a helper script to run the Convex local development server:

```powershell
# start the Convex local development server (runs `convex dev`)
pnpm run start-convex
# or
npx convex dev
```

When `convex dev` starts it prints a local Convex URL (for example `http://localhost:XXXX`). To make the Next.js app use the local Convex instance, create a `.env.local` file in the project root and add the Convex URL as shown below (replace the URL with the one from `convex dev`):

```text
CONVEX_URL=http://localhost:XXXX
# Example: CONVEX_URL=http://localhost:8080
```

Note: the Next/Convex client usually picks up `process.env.CONVEX_URL`. If you prefer, run both servers in separate terminals and the frontend should connect to the local Convex instance.

### Seeding the local Convex database

This repository includes a `convex/seed.ts` and `convex/seedRunner.ts` to populate the database with example products/orders.

Two ways to run the seed:

1. Install `ts-node` (development helper) and run the runner directly:

```powershell
# optional: install ts-node if you want to run TypeScript files directly
pnpm add -D ts-node typescript

# run the seed runner (from project root)
pnpm exec ts-node convex/seedRunner.ts
# or
npx ts-node convex/seedRunner.ts
```

2. Compile the convex TypeScript files and run with node (more explicit):

```powershell
# compile convex TypeScript into JavaScript
npx tsc -p convex/tsconfig.json
# run the compiled seed runner (adjust path depending on tsc outDir)
node convex/seedRunner.js
# or if compiled to convex/dist/seedRunner.js
node convex/dist/seedRunner.js
```

After running the seed, the local Convex database will contain sample products and any other seed data defined in `convex/seed.ts`.

## Run the app (front-end)

Start the Convex dev server first (see above), then in a separate terminal run:

```powershell
# run Next.js in development mode
pnpm run dev
# or with npm
npm run dev
```

Open http://localhost:3000 in your browser.

## Useful scripts (from package.json)

- `pnpm run dev` — start Next.js dev server
- `pnpm run build` — build Next.js app for production
- `pnpm run start` — start built Next.js app
- `pnpm run lint` — run eslint
- `pnpm run start-convex` — start local Convex (runs `convex dev`)

## Environment variables

Create a `.env.local` file in the project root for local env vars. At minimum you'll want to set:

- `CONVEX_URL` — local Convex URL shown by `convex dev`
- Optional email/SMS provider credentials if you want to test order emails (e.g. SMTP_HOST, SMTP_USER, SMTP_PASS)

Example `.env.local`:

```text
CONVEX_URL=http://localhost:8080
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-password
```

## Deploy

1. Deploy Convex (see Convex docs):

```powershell
# if you have a Convex project and are ready to deploy
npx convex deploy
```

2. Deploy the Next.js app (Vercel recommended) — follow Vercel/Next.js deployment docs.

When deploying, set the `CONVEX_URL` environment variable in the hosting platform to your deployed Convex URL.

## Project structure (high level)

- `app/` — Next.js App Router pages and layout
- `components/` — UI components and modals
- `convex/` — Convex schema, functions, seeds, and seed runner
- `public/` — static assets and product JSON
- `src/` & `lib/` — data utilities and stores

## Troubleshooting

- If the front-end cannot connect to Convex, confirm `convex dev` is running and that `CONVEX_URL` in `.env.local` matches the URL printed by Convex.
- If TypeScript seed runner fails, install `ts-node` or compile with `tsc` as shown above.

---
