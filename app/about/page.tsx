import Image from 'next/image'

export default function About(){
  return (
    <div className="container section">
      <h1 className="text-3xl font-bold">About Disruptive Frigate</h1>
      <p className="text-zinc-300 mt-2 max-w-3xl">We’re building a goal-first learning platform that reduces noise and maximizes outcomes. Learners set a goal, we map 3 credible pathways, track a Job Readiness Score, and connect them with vetted coaches.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="card p-4"><div className="font-semibold">Mission</div><p className="text-sm text-zinc-300 mt-1">Help 1M professionals transition into better roles with clarity and accountability.</p></div>
        <div className="card p-4"><div className="font-semibold">Approach</div><p className="text-sm text-zinc-300 mt-1">Outcome-first curation, transparent timelines, and measurable readiness.</p></div>
        <div className="card p-4"><div className="font-semibold">Privacy</div><p className="text-sm text-zinc-300 mt-1">We store only what’s necessary and never sell personal data.</p></div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <Image src="/team1.svg" alt="Coach" width={320} height={320} className="rounded-xl border border-zinc-800"/>
        <Image src="/team2.svg" alt="PM" width={320} height={320} className="rounded-xl border border-zinc-800"/>
        <Image src="/team1.svg" alt="Coach" width={320} height={320} className="rounded-xl border border-zinc-800"/>
      </div>
    </div>
  )
}
