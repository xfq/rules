import { MetadataRoute } from 'next'
import { allRules } from '@/lib/data/rules'

export default function sitemap(): MetadataRoute.Sitemap {
  // Configure base URL for production vs development
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://traerules.io'
  
  // Generate rule pages
  const ruleEntries = allRules.map((rule) => ({
    url: `${baseUrl}/rules/${rule.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Static pages
  const routes = [
    '',
    '/rules',
    '/about',
    '/submit',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }))

  return [...routes, ...ruleEntries]
} 