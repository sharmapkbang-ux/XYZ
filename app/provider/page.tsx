'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Provider(){
  const [stats, setStats] = useState<any>({ views: 0, clicks: 0, enrollments: 0 })
  useEffect(()=>{ (async()=>{
    const { data } = await supabase.from('provider_stats').select('*').maybeSingle()
    setStats(data || { views: 0, clicks: 0, enrollments: 0 })
  })() },[])

  return (
    <div className="container section">
      <div className="text-xl font-semibold">Provider Dashboard</div>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        <div className="card p-4"><div className="text-sm text-zinc-400">Views</div><div className="text-3xl font-bold">{stats.views}</div></div>
        <div className="card p-4"><div className="text-sm text-zinc-400">Clicks</div><div className="text-3xl font-bold">{stats.clicks}</div></div>
        <div className="card p-4"><div className="text-sm text-zinc-400">Enrollments</div><div className="text-3xl font-bold">{stats.enrollments}</div></div>
      </div>
      <div className="card p-4 mt-6">
        <div className="text-sm text-zinc-400">CPA Model</div>
        <p className="text-sm text-zinc-300 mt-2">Track enrollments via referral links + webhooks.</p>
      </div>
    </div>
  )
}
