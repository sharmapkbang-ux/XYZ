'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabaseClient';

type GateProps = {
  children: React.ReactNode;
};

export default function OnboardingGate({ children }: GateProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(true);

  useEffect(() => {
    // Don't gate the onboarding routes themselves
    if (pathname?.startsWith('/onboarding')) {
      setAllowed(true);
      setReady(true);
      return;
    }

    const run = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // Not logged in: allow access (marketing pages), but if this page expects auth it can handle it.
        setAllowed(true);
        setReady(true);
        return;
      }

      // Check profile.onboarded
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('onboarded')
        .eq('id', user.id)
        .maybeSingle();

      if (error) {
        // Fail open (do not block site), but log to console for debugging
        console.warn('OnboardingGate: profile check error', error);
        setAllowed(true);
        setReady(true);
        return;
      }

      if (!profile || profile.onboarded !== true) {
        setAllowed(false);
        router.replace('/onboarding');
      } else {
        setAllowed(true);
      }
      setReady(true);
    };
    run();
  }, [pathname, router]);

  if (!ready) return null;
  if (!allowed) return null;
  return <>{children}</>;
}
