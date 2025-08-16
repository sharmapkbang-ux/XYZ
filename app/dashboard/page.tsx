'use client'
import Protected from '@/components/Protected'
import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'

export default function Dashboard(){
  const [profile, setProfile] = useState<any>(null)
  useEffect(()=>{
    (async ()=>{
      const { data: { user } } = await supabase.auth.getUser()
      if(!user) return
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle()
      setProfile(data || {})
    })()
  },[])
  return (
    <Protected>
      <div className="container section">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-4"><div className="text-sm text-zinc-400">Streak</div><div className="text-3xl font-bold">{profile?.streak ?? 0} days</div></div>
          <div className="card p-4"><div className="text-sm text-zinc-400">Readiness</div><div className="text-3xl font-bold">{profile?.readiness ?? 0}%</div></div>
          <div className="card p-4"><div className="text-sm text-zinc-400">Goal Confidence</div><div className="text-3xl font-bold">{profile?.goal_confidence ?? 0}%</div></div>
        </div>
      </div>
    </Protected>
  )
}
