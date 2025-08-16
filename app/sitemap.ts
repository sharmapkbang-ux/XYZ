import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.disruptivefrigate.com'
  return [
    { url: base, priority: 1 },
    { url: base + '/learn' },
    { url: base + '/coaches' },
    { url: base + '/provider' },
    { url: base + '/about' },
    { url: base + '/pricing' },
    { url: base + '/blog' },
    { url: base + '/faq' },
    { url: base + '/contact' },
    { url: base + '/terms' },
    { url: base + '/privacy' },
  ]
}
