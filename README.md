# Disruptive Frigate — Near-Complete Website (Zero-Cost)

**Stack:** Next.js (App Router) + Tailwind + Supabase + Icons (lucide-react)  
**Pages:** Home, Learn, Goals, Coaches, Provider, About, Pricing, Blog (+ posts), FAQ, Contact, Terms, Privacy  
**Credibility:** Visual hero, testimonials, About, Privacy, Terms, sitemap/robots, footer, trust language

## Quickstart
1. Create Supabase → copy URL + anon key.  
2. Run `supabase.sql` in SQL Editor to create tables and seed content.  
3. Copy `.env.example` → `.env.local`, fill keys.  
4. Install & run:
```bash
npm i
npm run dev
```
5. Deploy on Vercel → add env vars → connect domain.

## Notes
- Replace SVG placeholders (`/public/*.svg`) with real images when ready.
- Wire Stripe in `/app/api/stripe/route.ts` for coach sessions.
- Provider CPA via `/app/api/enroll/route.ts`.
