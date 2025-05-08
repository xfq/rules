"use client"

import { useState, useEffect, use } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Check, Terminal, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { allRules } from "@/lib/data/rules"
import { incrementRuleView } from "@/lib/supabase"

type CopyType = "content" | "command" | "url" | null;

export default function RulePage({ params }: { params: { slug: string } }) {
  // Cast params to any to avoid TypeScript errors with React.use()
  const unwrappedParams = use(params as any) as { slug: string };
  const { toast } = useToast()
  const [copied, setCopied] = useState<CopyType>(null)

  // Find the rule by slug using imported rules
  const rule = allRules.find((r) => r.slug === unwrappedParams.slug)

  // Track view when component mounts (keep tracking functionality)
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
          {/* Back Button */}
          <Link href="/rules" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Rules
          </Link>

          {/* Rule Header */}
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

          {/* Rule Content */}
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
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Terminal className="h-4 w-4 mr-2" />
                      Command
                    </>
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
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied
                    </>
                  ) : (
                    <>
                      <LinkIcon className="h-4 w-4 mr-2" />
                      URL
                    </>
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
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Content
                    </>
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
