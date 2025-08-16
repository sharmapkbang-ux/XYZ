export default function Pricing(){
  return (
    <div className="container section">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="card p-6">
          <div className="text-sm text-zinc-400">Learners</div>
          <div className="text-2xl font-bold mt-2">Free → Pro</div>
          <ul className="text-sm text-zinc-300 mt-2 space-y-1">
            <li>Free discovery & JRS</li>
            <li>Pro unlocks AI tutor & projects</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="text-sm text-zinc-400">Coaches</div>
          <div className="text-2xl font-bold mt-2">20% commission</div>
          <ul className="text-sm text-zinc-300 mt-2 space-y-1">
            <li>Free listing</li>
            <li>Pro tier: lower commission</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="text-sm text-zinc-400">Providers</div>
          <div className="text-2xl font-bold mt-2">CPA + SaaS</div>
          <ul className="text-sm text-zinc-300 mt-2 space-y-1">
            <li>Pay per enrollment</li>
            <li>Analytics dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
