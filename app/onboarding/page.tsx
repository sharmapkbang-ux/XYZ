'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabaseClient';

export default function OnboardingPage() {
  const router = useRouter();
  const supabase = createClient();
  const [displayName, setDisplayName] = useState('');
  const [roleKey, setRoleKey] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // If not logged-in, allow viewing but show a light message.
        setLoading(false);
        return;
      }
      // If already onboarded, go back to dashboard
      const { data: profile } = await supabase
        .from('profiles')
        .select('onboarded')
        .eq('id', user.id)
        .maybeSingle();
      if (profile?.onboarded === true) {
        router.replace('/dashboard');
      } else {
        setLoading(false);
      }
    };
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert('Please sign in first.');
      setLoading(false);
      return;
    }

    // Upsert into profiles
    const { error: profErr } = await supabase.from('profiles').upsert({
      id: user.id,
      email: user.email,
      display_name: displayName || null,
      role_key: roleKey || null,
      onboarded: true,
    }, { onConflict: 'id' });

    if (profErr) {
      console.warn('Profile upsert error:', profErr);
      alert('Something went wrong. Please try again.');
      setLoading(false);
      return;
    }

    router.replace('/dashboard');
  };

  if (loading) return null;

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome! Let’s get you set up.</h1>
      <p className="mb-6 text-sm opacity-80">
        This quick setup helps personalize your experience. You can change these later.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Display Name</label>
          <input
            className="w-full border rounded-md p-2"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="e.g., Alex"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Primary Role / Track</label>
          <input
            className="w-full border rounded-md p-2"
            value={roleKey}
            onChange={(e) => setRoleKey(e.target.value)}
            placeholder="e.g., ai_engineer"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-md border"
        >
          Save & Continue
        </button>
      </form>
    </main>
  );
}
