'use client'
import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Protected({ children }:{ children: React.ReactNode }){
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  useEffect(()=>{ supabase.auth.getUser().then(({data})=> { setUser(data.user); setLoading(false) }) },[])
  if(loading) return <div className="container section">Loading…</div>
  if(!user) return (
    <div className="container section">
      <div className="card p-6">
        <div className="text-xl font-semibold">Please sign in to continue</div>
        <Link href="/login" className="btn-primary mt-4 inline-block">Go to Login</Link>
      </div>
    </div>
  )
  return <>{children}</>
}
