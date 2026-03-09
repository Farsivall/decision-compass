# Shura — AI Decision Simulation

Pre-consulting decision evaluation. Pressure-test high-stakes decisions before committing to projects, consultants, or big initiatives.

## Run locally

```sh
git clone <YOUR_GIT_URL>
cd decision-compass
npm i
npm run dev
```

Requires Node.js and npm ([nvm](https://github.com/nvm-sh/nvm#installing-and-updating) recommended).

## Tech

- Vite, TypeScript, React
- Tailwind CSS, shadcn-ui
- Supabase (waitlist)

## Deploy (Vercel)

1. Import this repo in [Vercel](https://vercel.com).
2. In **Settings → Environment Variables**, add:
   - `VITE_SUPABASE_URL` — your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` — your Supabase anon key  
   (See `.env.example`.)
3. Deploy. The waitlist form writes to the Supabase `waitlist` table.
