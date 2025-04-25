import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Submit a Rule",
  description: "Contribute to the Trae Rules Directory by submitting your own AI coding rules to help other developers enhance their workflow",
  keywords: "submit rule, contribute, AI coding rules, Trae Rules, developer contribution",
  openGraph: {
    title: "Submit a Rule | Trae Rules Directory",
    description: "Contribute to the Trae Rules Directory by submitting your own AI coding rules to help other developers enhance their workflow",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/submit`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/og?title=Submit a Rule`,
        width: 1200,
        height: 630,
        alt: "Submit a Rule to Trae Rules Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Submit a Rule | Trae Rules Directory",
    description: "Contribute to the Trae Rules Directory by submitting your own AI coding rules to help other developers enhance their workflow",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/og?title=Submit a Rule`],
  },
} 