"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { TrendingUp, AlertCircle, ExternalLink } from "lucide-react"
import { allRules } from "@/lib/data/rules"
import { getPopularRules, supabase } from "@/lib/supabase"

interface PopularRuleData {
  slug: string
  count: number
}

export const PopularRules = ({ limit = 5 }) => {
  const [popularRules, setPopularRules] = useState<typeof allRules>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<any>(null)

  useEffect(() => {
    const fetchPopularRules = async () => {
      setIsLoading(true)
      try {
        console.log("Fetching popular rules...")
        
        // Test connection first
        const connectionTest = await supabase.from('rule_views').select('count').limit(1)
        if (connectionTest.error) {
          console.error("Supabase connection error:", connectionTest.error)
          setError(`Connection error: ${connectionTest.error.message}`)
          setDebugInfo({
            type: "connection",
            details: connectionTest.error
          })
          setIsLoading(false)
          return
        }
        
        // Fetch popular rules
        const popularRuleData = await getPopularRules(limit)
        console.log("Popular rule data:", popularRuleData)
        
        if (!popularRuleData.length) {
          setDebugInfo({
            type: "empty",
            message: "No view data found in database",
            help: "Visit rule pages to generate view counts"
          })
        }
        
        // Match the view data with our rule data to get the full rule objects
        const rules = popularRuleData.map((popularRule: PopularRuleData) => {
          const rule = allRules.find(r => r.slug === popularRule.slug)
          return rule ? { ...rule, viewCount: popularRule.count } : null
        }).filter(Boolean)
        
        console.log("Matched rule data:", rules)
        setPopularRules(rules)
      } catch (error: any) {
        console.error("Error fetching popular rules:", error)
        setError(`Error: ${error.message || "Unknown error"}`)
        setDebugInfo({
          type: "fetch",
          error
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchPopularRules()
  }, [limit])

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        {[...Array(limit)].map((_, i) => (
          <div key={i} className="bg-gray-800 h-24 rounded-lg"></div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-900/50 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-red-400 font-medium">Error loading popular rules</h3>
            <p className="text-gray-400 mt-1">{error}</p>
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4">
                <Link href="/admin/stats" className="text-purple-400 hover:text-purple-300 text-sm flex items-center">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Check rule statistics
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (popularRules.length === 0) {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
        <p className="text-gray-400 text-center">No popular rules found yet.</p>
        
        {process.env.NODE_ENV === 'development' && debugInfo && (
          <div className="mt-4 p-4 bg-gray-800 rounded-md text-xs text-gray-400">
            <p className="mb-2 text-gray-300">{debugInfo.message || "Debugging Information:"}</p>
            <ul className="space-y-2">
              <li>• Check that <code className="text-purple-300">.env.local</code> file has valid Supabase credentials</li>
              <li>• Make sure the <code className="text-purple-300">rule_views</code> table exists in your database</li>
              <li>• Visit some rule pages to generate view data</li>
              <li>• Check that RLS policies aren't blocking access</li>
              <li className="pt-2">
                <Link href="/admin/stats" className="text-purple-400 hover:text-purple-300 flex items-center">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View rule statistics
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {popularRules.map((rule: any) => (
        <Link
          key={rule.slug}
          href={`/rules/${rule.slug}`}
          className="block bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-colors"
        >
          <h3 className="text-lg font-semibold text-white mb-2">{rule.title}</h3>
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {rule.tags.slice(0, 2).map((tag: string) => (
                <span key={tag} className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full">
                  {tag}
                </span>
              ))}
              {rule.tags.length > 2 && (
                <span className="px-2 py-0.5 text-gray-400 text-xs">+{rule.tags.length - 2}</span>
              )}
            </div>
            <div className="flex items-center text-purple-400 text-sm">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>{rule.viewCount} views</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 