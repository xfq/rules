"use client"

import { useState, useEffect, use } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Check, Terminal, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { allRules } from "@/lib/data/rules"; // Assuming Rule type can be imported
import { incrementRuleView } from "@/lib/supabase"

type CopyType = "content" | "command" | "url" | null;

interface RuleContentProps {
  params: { slug: string };
}

// The actual rule object will be passed as a prop from the server component
// to avoid re-fetching or relying on allRules being exhaustive here if it changes.
// For now, we still find it from allRules as per original logic.
// A better approach might be to pass the 'rule' object directly as a prop.
export default function RuleContent({ params }: RuleContentProps) {
  const unwrappedParams = use(params as any) as { slug: string }; // Or handle params directly if `use` is not strictly needed.
  const { toast } = useToast()
  const [copied, setCopied] = useState<CopyType>(null)

  const rule = allRules.find((r) => r.slug === unwrappedParams.slug)

  useEffect(() => {
    if (rule) {
      const trackView = async () => {
        try {
          await incrementRuleView(rule.slug)
        } catch (error) {
          console.error("Error tracking view:", error)
        }
      }
      trackView()
    }
  }, [rule])

  if (!rule) {
    return (
      <div className="min-h-screen bg-gray-950 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Rule Not Found</h1>
          <p className="text-gray-400 mb-8">The rule you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/rules">Back to Rules</Link>
          </Button>
        </div>
      </div>
    )
  }

  const copyContent = () => {
    navigator.clipboard.writeText(rule.content)
    setCopied("content")
    toast({
      title: "Copied to clipboard",
      description: "The rule content has been copied to your clipboard.",
    })
    setTimeout(() => setCopied(null), 2000)
  }

  const copyCommand = () => {
    navigator.clipboard.writeText(`npx trae-rule rules add ${rule.slug}`)
    setCopied("command")
    toast({
      title: "Copied to clipboard",
      description: "The command has been copied to your clipboard.",
    })
    setTimeout(() => setCopied(null), 2000)
  }

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied("url")
    toast({
      title: "Copied to clipboard",
      description: "The URL has been copied to your clipboard.",
    })
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <>
      <main className="min-h-screen bg-gray-950 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <Link href="/rules" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Rules
          </Link>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{rule.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {rule.tags.map((category) => (
                <span key={category} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg mb-8">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold text-white">Rule Content</h2>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-300 hover:text-white"
                  onClick={copyCommand}
                  aria-label="Copy command"
                >
                  {copied === "command" ? (
                    <><Check className="h-4 w-4 mr-2" />Copied</>
                  ) : (
                    <><Terminal className="h-4 w-4 mr-2" />Command</>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-300 hover:text-white"
                  onClick={copyUrl}
                  aria-label="Copy URL"
                >
                  {copied === "url" ? (
                    <><Check className="h-4 w-4 mr-2" />Copied</>
                  ) : (
                    <><LinkIcon className="h-4 w-4 mr-2" />URL</>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-300 hover:text-white"
                  onClick={copyContent}
                  aria-label="Copy content"
                >
                  {copied === "content" ? (
                    <><Check className="h-4 w-4 mr-2" />Copied</>
                  ) : (
                    <><Copy className="h-4 w-4 mr-2" />Content</>
                  )}
                </Button>
              </div>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">{rule.content}</pre>
            </div>
          </div>
          {rule.author && (
              <p className="text-gray-400">
                Created by <span className="text-purple-400">{typeof rule.author === 'string' ? rule.author : rule.author.name}</span>
              </p>
            )}
        </div>
      </main>
    </>
  )
} 