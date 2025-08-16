import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Disruptive Frigate — Career Pathways, Coaches, and Credible Learning',
  description: 'Goal-first learning pathways with Job Readiness Score, vetted coaches, and provider analytics.',
  openGraph: {
    title: 'Disruptive Frigate',
    description: 'AI-curated pathways + human coaching',
    images: ['/hero.svg'],
    type: 'website'
  },
  metadataBase: new URL('https://www.disruptivefrigate.com')
}

export default function RootLayout({ children }:{ children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
