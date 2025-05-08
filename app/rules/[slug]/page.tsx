import { Metadata } from 'next';
import { allRules } from "@/lib/data/rules";
import { defaultMetadata } from "@/app/metadata";
import RuleContent from './rule-content'; // Import the new client component

// Props type for generateMetadata and the Page component
interface RulePageProps {
  params: { slug: string };
};

export async function generateMetadata({ params }: RulePageProps): Promise<Metadata> {
  const rule = allRules.find((r) => r.slug === params.slug);

  if (!rule) {
    return {
      title: "Rule not found", 
    };
  }

  const ruleDescription = rule.content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[`*_[\]()#+\-.!]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .substring(0, 160);

  const finalDescription = ruleDescription || defaultMetadata.description || "View this rule on Trae Rules Directory";
  const pageTitle = rule.title;
  const openGraphTitle = rule.title || defaultMetadata.openGraph?.title || "A Rule from Trae Rules Directory";
  const twitterTitle = rule.title || defaultMetadata.twitter?.title || "A Rule from Trae Rules Directory";

  return {
    title: pageTitle,
    description: finalDescription,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: openGraphTitle,
      description: finalDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://traerules.io'}/rules/${params.slug}`,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: twitterTitle,
      description: finalDescription,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://traerules.io'}/rules/${params.slug}`,
    },
  };
}

// This is now a Server Component
export default function Page({ params }: RulePageProps) {
  // Data fetching for the rule could happen here if not already done in generateMetadata
  // or if RuleContent needs the full rule object directly.
  // For simplicity, RuleContent still uses allRules.find(), but passing the rule
  // object from here would be a cleaner approach if `allRules` is large or fetching is async.
  return <RuleContent params={params} />;
}
