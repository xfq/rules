import { Metadata } from 'next'

// Default metadata for the site
export const defaultMetadata: Metadata = {
  title: {
    default: 'Trae Rules Directory',
    template: '%s | Trae Rules Directory'
  },
  description: 'Find, share, and use AI coding rules to enhance your development workflow. A community-driven collection of Trae Rules for developers.',
  keywords: 'Trae Rules, AI coding rules, coding assistance, development workflow, AI assistance, productivity tools',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://traerules.io',
    siteName: 'Trae Rules Directory',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/og?title=Trae Rules Directory`,
        width: 1200,
        height: 630,
        alt: 'Trae Rules Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: process.env.TWITTER_USERNAME || '@traerules',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json'
} 