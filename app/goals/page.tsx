'use client'
import Protected from '@/components/Protected'
import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'

export default function Goals(){
  const [goalText, setGoalText] = useState('')
  const [goals, setGoals] = useState<any[]>([])
  const load = async ()=>{
    const { data: { user } } = await supabase.auth.getUser()
    if(!user) return
    const { data } = await supabase.from('goals').select('*').eq('user_id', user.id).order('created_at', {ascending:false})
    setGoals(data || [])
  }
  useEffect(()=>{ load() },[])
  const addGoal = async ()=>{
    const { data: { user } } = await supabase.auth.getUser()
    if(!user) return
    const role_key = detectRoleKey(goalText)
    await supabase.from('goals').insert({ user_id: user.id, title: goalText, role_key })
    setGoalText(''); load()
  }
  return (
    <Protected>
      <div className="container section">
        <div className="card p-4">
          <div className="text-sm text-zinc-400">Quick Goal Setup</div>
          <div className="mt-2 flex gap-2">
            <input value={goalText} onChange={e=>setGoalText(e.target.value)} placeholder="I want to be a Product Manager in 9 months" className="flex-1 px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800"/>
            <button onClick={addGoal} className="btn-primary">Create & Save</button>
          </div>
          <div className="text-xs text-zinc-400 mt-2">Detected role: <span className="font-medium">{detectRoleKey(goalText) || '—'}</span></div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {goals.map(g => (
            <div key={g.id} className="card p-4">
              <div className="flex justify-between">
                <div className="font-semibold">{g.title}</div>
                <div className="text-sm text-zinc-400">{new Date(g.created_at).toLocaleDateString()}</div>
              </div>
              <div className="mt-2 text-sm text-zinc-300">Role: {g.role_key}</div>
            </div>
          ))}
        </div>
      </div>
    </Protected>
  )
}

function detectRoleKey(t:string){
  const s=(t||'').toLowerCase()
  if(s.includes('product')) return 'product_manager'
  if(s.includes('marketing')) return 'digital_marketing'
  if(s.includes('ux')) return 'ux_designer'
  if(s.includes('project')) return 'project_manager'
  if(s.includes('data')) return 'data_analyst'
  return 'data_analyst'
}
