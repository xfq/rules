import { Metadata } from 'next'

// Default metadata for the site (can be used as a base or for fallbacks)
export const defaultMetadata: Metadata = {
  title: {
    default: 'Trae Rules Directory',
    template: '%s | Trae Rules Directory'
  },
  description: 'Find, share, and use AI coding rules to enhance your development workflow. A community-driven collection of Trae Rules for developers.',
  keywords: ['Trae Rules', 'AI coding rules', 'coding assistance', 'development workflow', 'AI assistance', 'productivity tools'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://traerules.io',
    siteName: 'Trae Rules Directory',
    images: [
      {
        url: '/twitter-card.png', // Ensure this image is in your public folder
        width: 1200,
        height: 630,
        alt: 'Trae Rules Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: process.env.TWITTER_USERNAME || '@traerules', // Add Twitter username to .env when we have one
    // title and description for Twitter will be inherited from main title and description
    // images for Twitter will be inherited from openGraph images
  },
  icons: {
    icon: '/favicon.ico', // Ensure this image is in the public folder
    apple: '/apple-touch-icon.png', // Ensure this image is in the public folder
  },
  manifest: '/manifest.json' // Ensure this file is in the public folder
};

// Metadata specific to the Homepage
export const homepageMetadata: Metadata = {
  title: {
    absolute: 'Trae Rules Directory' // Ensures this title is used as-is
  },
  description: 'Discover, share, and utilize innovative AI coding rules on the Trae Rules Directory. Enhance your development workflow with a community-driven collection of best practices and prompts for AI-assisted coding.',
  keywords: ['Trae Rules', 'AI coding rules', 'discover AI rules', 'share AI rules', 'coding assistance', 'development workflow', 'AI assisted development', 'community coding rules'],
  openGraph: {
    ...defaultMetadata.openGraph, // Inherit default openGraph and override specific properties
    title: 'Trae Rules Directory',
    description: 'Discover, share, and utilize innovative AI coding rules on the Trae Rules Directory. Enhance your development workflow with a community-driven collection of best practices and prompts for AI-assisted coding.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://traerules.io', // Homepage URL
    images: [
      {
        url: '/twitter-card.png', // Specific OG image for homepage if different, else use default
        width: 1200,
        height: 630,
        alt: 'Trae Rules Directory - Discover AI Coding Rules',
      },
    ],
  },
  twitter: {
    ...defaultMetadata.twitter, // Inherit default twitter and override specific properties
    title: 'Trae Rules Directory',
    description: 'Discover, share, and utilize innovative AI coding rules on the Trae Rules Directory. Enhance your development workflow with a community-driven collection of best practices and prompts for AI-assisted coding.',
    images: ['/twitter-card.png'], // Specific Twitter image for homepage if different
  },
}; 