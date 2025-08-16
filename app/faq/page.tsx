export default function FAQ(){
  const faqs = [
    {q:'How are pathways curated?', a:'By declared goal + skill gaps. We prioritize credible providers and outcome transparency.'},
    {q:'What is JRS?', a:'Job Readiness Score — a simple progress index across skills, projects, and interview readiness.'},
    {q:'How do coach bookings work?', a:'You pick a coach and time. Payments handled via Stripe (coming soon).'},
    {q:'Do you sell my data?', a:'No. We only use anonymized aggregates to improve recommendations.'},
  ]
  return (
    <div className="container section">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {faqs.map((f,i)=>(
          <div key={i} className="card p-5">
            <div className="font-semibold">{f.q}</div>
            <p className="text-sm text-zinc-300 mt-1">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
