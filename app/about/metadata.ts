import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the Trae Rules Directory, a community-driven collection of AI coding rules to enhance your development workflow",
  keywords: "Trae Rules, AI coding rules, development workflow, community-driven, coding assistance",
  openGraph: {
    title: "About | Trae Rules Directory",
    description: "Learn about the Trae Rules Directory, a community-driven collection of AI coding rules to enhance your development workflow",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/about`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/og?title=About Trae Rules Directory`,
        width: 1200,
        height: 630,
        alt: "About Trae Rules Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Trae Rules Directory",
    description: "Learn about the Trae Rules Directory, a community-driven collection of AI coding rules to enhance your development workflow",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/og?title=About Trae Rules Directory`],
  },
} 