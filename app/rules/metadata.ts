import { Metadata } from 'next'

// Metadata for the rules listing page
export const metadata: Metadata = {
  title: 'Browse Rules',
  description: 'Browse and search through our collection of AI coding rules to enhance your development workflow',
  keywords: 'AI rules, coding rules, development workflow, AI assistance, coding assistance',
  openGraph: {
    title: 'Browse Rules | Trae Rules Directory',
    description: 'Browse and search through our collection of AI coding rules to enhance your development workflow',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/rules`,
    images: [
      {
        url: "/twitter-card.png",
        width: 1200,
        height: 630,
        alt: "Trae Rules Directory - Browse Rules",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browse Rules | Trae Rules Directory',
    description: 'Browse and search through our collection of AI coding rules to enhance your development workflow',
    images: ["/twitter-card.png"],
  },
} 