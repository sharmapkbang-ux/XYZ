'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Image from 'next/image'

export default function Coaches(){
  const [coaches, setCoaches] = useState<any[]>([])
  useEffect(()=>{ (async()=>{
    const { data } = await supabase.from('coaches').select('*').order('rating', {ascending:false})
    setCoaches(data || [])
  })() },[])

  return (
    <div className="container section">
      <div className="text-xl font-semibold">Coach Marketplace</div>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {coaches.map(c => (
          <div key={c.id} className="card p-4">
            <Image src={c.image_path || '/team1.svg'} alt={c.name} width={320} height={320} className="rounded-xl border border-zinc-800" />
            <div className="flex justify-between mt-3">
              <div>
                <div className="font-semibold">{c.name}</div>
                <div className="text-xs text-zinc-400">{c.specialty}</div>
              </div>
              <div className="text-right text-xs text-zinc-400">
                <div>₹{c.rate}/session</div>
                <div>★ {c.rating}</div>
              </div>
            </div>
            <p className="text-sm text-zinc-300 mt-2">{c.bio}</p>
            <div className="mt-3 flex gap-2">
              <a href={c.calendly || '#'} target="_blank" className="btn-primary">Book</a>
              <button className="btn">Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
