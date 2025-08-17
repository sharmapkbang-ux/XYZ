import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Read from NEXT_PUBLIC_* so it works on both server and client in Next.js App Router
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// No fail-fast throw: we "fail open", but the app pages that need Supabase will handle missing envs gracefully.
export const createClient = () => {
  // Create a new client per call (safe for edge / RSC separation)
  return createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  });
};
