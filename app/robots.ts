import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Configure base URL for production vs development
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://traerules.io'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow admin pages or any pages you don't want indexed
      disallow: ['/admin/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
} 