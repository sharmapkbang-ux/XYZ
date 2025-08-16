import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Shield, LineChart } from 'lucide-react'

export default function Home(){
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-ring pointer-events-none" />
        <div className="container section">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="badge">Zero-cost starter live-ready</div>
              <h1 className="text-5xl font-extrabold leading-tight mt-3">Cut through the noise.<br/>Reach the role.</h1>
              <p className="text-zinc-300 mt-4 text-lg">3 AI-curated pathways (Safe • Fast • Budget), a real **Job Readiness Score**, and a marketplace of vetted coaches.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/learn" className="btn-primary">Explore Pathways</Link>
                <Link href="/coaches" className="btn">Find a Coach</Link>
                <Link href="/pricing" className="btn">Pricing</Link>
              </div>
              <ul className="mt-6 text-sm text-zinc-300 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={18}/> Goal-first discovery</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18}/> Transparent outcomes & timelines</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18}/> Human coaches + AI tutor</li>
              </ul>
            </div>
            <div className="relative">
              <Image src="/hero.svg" alt="Product preview" width={960} height={540} className="rounded-2xl border border-zinc-800 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-zinc-950/40 border-y border-zinc-800/60">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <Shield className="mb-2" />
              <div className="font-semibold text-white">Credibility & Safety</div>
              <p className="text-sm text-zinc-300 mt-1">Provider transparency, outcome promises, and privacy-first auth.</p>
            </div>
            <div className="card p-6">
              <LineChart className="mb-2" />
              <div className="font-semibold text-white">Job Readiness Score</div>
              <p className="text-sm text-zinc-300 mt-1">Track progress from day one — see what moves the needle.</p>
            </div>
            <div className="card p-6">
              <Image src="/badge.svg" alt="Badge" width={40} height={40} />
              <div className="font-semibold text-white mt-2">Vetted Coaches</div>
              <p className="text-sm text-zinc-300 mt-1">Book 1:1 guidance from practitioners — accountability that sticks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold">What learners say</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              {quote:'The 3-path layout killed my analysis paralysis.', name:'Rohit — PM aspirant'},
              {quote:'Coach sessions + JRS kept me consistent.', name:'Neha — Data Analyst'},
              {quote:'I stopped doom-scrolling courses and started executing.', name:'Arjun — Marketing'}
            ].map((t,i)=>(
              <div key={i} className="card p-5 text-sm text-zinc-300">
                “{t.quote}”
                <div className="mt-3 text-xs text-zinc-400">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
