import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-zinc-800/60">
      <div className="container py-10 grid md:grid-cols-4 gap-6 text-sm text-zinc-300">
        <div>
          <div className="font-semibold text-white">Disruptive Frigate</div>
          <p className="mt-2 text-zinc-400">AI-curated pathways + human coaching to reach your next role.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Product</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/learn">Learn</Link></li>
            <li><Link href="/coaches">Coaches</Link></li>
            <li><Link href="/provider">Providers</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Company</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Legal</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800/60 py-4 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Disruptive Frigate</div>
    </footer>
  )
}
