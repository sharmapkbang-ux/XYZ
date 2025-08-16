import { notFound } from 'next/navigation'

const content: Record<string, {title:string, body:string}> = {
  'job-readiness-score': {
    title: 'Introducing the Job Readiness Score (JRS)',
    body: 'JRS tracks your progress across skills, projects, and interviews. Start with a goal, follow a pathway, and watch your score rise.'
  },
  'three-path-model': {
    title: 'Why 3 Pathways Beat Infinite Choices',
    body: 'We curate a Safe, Fast, and Budget path to reduce decision fatigue and increase completion.'
  }
}

export default function Post({ params }:{ params: { slug: string }}){
  const post = content[params.slug]
  if(!post) return notFound()
  return (
    <div className="container section">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-lg text-zinc-300 mt-3">{post.body}</p>
    </div>
  )
}
