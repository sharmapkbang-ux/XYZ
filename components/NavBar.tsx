'use client'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'
import { ShieldCheck, User2 } from 'lucide-react'

export default function NavBar(){
  const [user, setUser] = useState<any>(null)
  useEffect(()=>{
    supabase.auth.getUser().then(({data})=> setUser(data.user))
    const { data: sub } = supabase.auth.onAuthStateChange((_e, sess)=> setUser(sess?.user ?? null))
    return ()=> sub.subscription.unsubscribe()
  },[])

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/50 backdrop-blur">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Disruptive Frigate" width={120} height={32} />
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm text-zinc-300">
          <Link href="/learn" className="hover:text-white">Learn</Link>
          <Link href="/coaches" className="hover:text-white">Coaches</Link>
          <Link href="/provider" className="hover:text-white">Providers</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/contact" className="hover:text-white flex items-center gap-1"><ShieldCheck size={16}/>Trust</Link>
        </nav>
        <div className="flex items-center gap-2">
          {!user ? <Link href="/login" className="btn-primary flex items-center gap-1"><User2 size={16}/> Sign in</Link>
                 : <Link href="/dashboard" className="btn-primary">Dashboard</Link>}
        </div>
      </div>
    </header>
  )
}
