import Link from 'next/link'
export default function Blog(){
  const posts = [
    { slug:'job-readiness-score', title:'Introducing the Job Readiness Score (JRS)', summary:'A simple, transparent way to measure progress toward your target role.'},
    { slug:'three-path-model', title:'Why 3 Pathways Beat Infinite Choices', summary:'Safe • Fast • Budget beats decision fatigue.'}
  ]
  return (
    <div className="container section">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {posts.map(p=> (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-5 block hover:border-zinc-700">
            <div className="font-semibold">{p.title}</div>
            <p className="text-sm text-zinc-400 mt-1">{p.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
