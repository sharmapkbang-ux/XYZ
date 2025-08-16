'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage(){
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string|null>(null)

  const signInWithOtp = async (e:any)=>{
    e.preventDefault()
    setError(null)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: typeof window !== 'undefined' ? window.location.origin : undefined }
    })
    if(error) setError(error.message); else setSent(true)
  }

  return (
    <div className="container section max-w-md">
      <div className="card p-6">
        <div className="text-xl font-semibold">Sign in / Create account</div>
        <p className="text-sm text-zinc-400 mt-2">Magic link to your inbox.</p>
        {!sent ? (
          <form onSubmit={signInWithOtp} className="mt-4 space-y-3">
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="w-full px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800" type="email" required />
            <button className="btn-primary w-full" type="submit">Send magic link</button>
          </form>
        ) : <div className="text-sm text-emerald-400 mt-4">Check your email for the sign-in link.</div>}
        {error && <div className="text-sm text-rose-400 mt-2">{error}</div>}
      </div>
    </div>
  )
}
