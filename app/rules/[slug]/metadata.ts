import { Metadata } from 'next'
import { allRules } from '@/lib/data/rules'

// Dynamic metadata generator for rule pages
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const rule = allRules.find((r) => r.slug === params.slug)
  
  if (!rule) {
    return {
      title: 'Rule Not Found',
      description: "The rule you're looking for doesn't exist or has been removed.",
    }
  }

  // Get the first 160 characters of the content for the description
  const description = rule.content.length > 160 
    ? `${rule.content.slice(0, 157)}...` 
    : rule.content

  return {
    title: rule.title,
    description,
    keywords: rule.tags.join(', '),
    openGraph: {
      title: `${rule.title} | Trae Rules Directory`,
      description,
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/rules/${params.slug}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/og?title=${encodeURIComponent(rule.title)}`,
          width: 1200,
          height: 630,
          alt: rule.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${rule.title} | Trae Rules Directory`,
      description,
      images: [`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/og?title=${encodeURIComponent(rule.title)}`],
    },
  }
} 