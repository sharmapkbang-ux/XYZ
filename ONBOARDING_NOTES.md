# Onboarding & Supabase Integration

This package preserves your original project and adds:
- `/app/onboarding/page.tsx` minimal flow that upserts into `profiles` and sets `onboarded=true`.
- `components/OnboardingGate.tsx` to softly redirect logged-in, not-onboarded users to `/onboarding`.
- `lib/supabaseClient.ts` that reads `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` without failing the build.
- Migration `supabase/migrations/20250101_add_onboarded_column.sql` to add `profiles.onboarded` if missing.
- Cleaned `next.config.js` by removing the deprecated `experimental.appDir` if it was present.
- `.env.example` with your Supabase URL and anon key.

## How to use
1. **Local**: copy `.env.example` to `.env.local` or set the variables in Vercel Project Settings.
2. If your protected pages don't already gate onboarding, you can wrap them with `OnboardingGate`.
   This script attempted to wrap common routes: `/dashboard`, `/goals`, `/provider`, `/coaches`, `/learn`.
   If any route still needs gating, add to the page component:
   ```tsx
   'use client';
   import OnboardingGate from '@/components/OnboardingGate';
   export default function Page() {
     return (
       <OnboardingGate>
         {/* existing content */}
       </OnboardingGate>
     );
   }
   ```
3. Run `npm run build` then deploy to Vercel.

*The gate fails open when it can't check the profile (so your marketing pages never break).*
