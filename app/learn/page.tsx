'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Learn(){
  const [roleKey, setRoleKey] = useState('data_analyst')
  const [paths, setPaths] = useState<any[]>([])
  useEffect(()=>{ (async()=>{
    const { data } = await supabase.from('pathways').select('*').eq('role_key', roleKey)
    setPaths(data || [])
  })() }, [roleKey])

  return (
    <div className="container section">
      <div className="flex items-center gap-3">
        <select value={roleKey} onChange={e=>setRoleKey(e.target.value)} className="px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800">
          <option value="data_analyst">Data Analyst</option>
          <option value="product_manager">Product Manager</option>
          <option value="digital_marketing">Digital Marketing</option>
          <option value="project_manager">Project Manager</option>
          <option value="ux_designer">UX Designer</option>
        </select>
        <div className="text-sm text-zinc-400">3 curated pathways (Safe • Fast • Budget)</div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {paths.map(p => (
          <div key={p.id} className="card p-4">
            <div className="flex justify-between">
              <div><div className="font-semibold">{p.provider}</div><div className="text-xs text-zinc-400">{p.timeline} • {p.end_outcome}</div></div>
              <div className="text-sm text-zinc-400">{p.fee === 0 ? 'Free' : `${p.fee} ${p.currency}`}</div>
            </div>
            <div className="mt-3 text-sm text-zinc-300">{(p.modules || []).slice(0,3).join(' • ')}</div>
            <div className="mt-4 flex gap-2">
              <a href={p.provider_link} target="_blank" className="btn-primary">Open</a>
              <button className="btn">Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
