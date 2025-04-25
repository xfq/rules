"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { allRules } from "@/lib/data/rules"
import Link from "next/link"
import { ArrowLeft, Eye } from "lucide-react"

export default function StatsPage() {
  const [viewStats, setViewStats] = useState<{slug: string; count: number}[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [connectionStatus, setConnectionStatus] = useState<"checking" | "connected" | "error">("checking")

  useEffect(() => {
    async function checkConnection() {
      try {
        // Simple query to test connection
        const { data, error } = await supabase.from('rule_views').select('count').limit(1)
        
        if (error) {
          console.error("Connection error:", error)
          setConnectionStatus("error")
          setError(`Connection error: ${error.message}`)
        } else {
          setConnectionStatus("connected")
          fetchViewStats()
        }
      } catch (err) {
        console.error("Unexpected error:", err)
        setConnectionStatus("error")
        setError("Unexpected error checking connection")
      }
    }

    async function fetchViewStats() {
      try {
        setIsLoading(true)
        const { data, error } = await supabase
          .from('rule_views')
          .select('slug, count')
          .order('count', { ascending: false })
        
        if (error) throw error
        
        setViewStats(data || [])
      } catch (err: any) {
        console.error("Error fetching stats:", err)
        setError(err.message || "Error fetching view statistics")
      } finally {
        setIsLoading(false)
      }
    }

    checkConnection()
  }, [])

  // Find rule title by slug
  const getRuleTitle = (slug: string) => {
    const rule = allRules.find(r => r.slug === slug)
    return rule ? rule.title : slug
  }

  return (
    <main className="min-h-screen bg-gray-950 py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">Rule View Statistics</h1>
        
        {/* Connection Status */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">Database Connection</h2>
          <div className={`px-4 py-3 rounded-md ${
            connectionStatus === "connected" 
              ? "bg-green-900/30 text-green-400" 
              : connectionStatus === "error" 
                ? "bg-red-900/30 text-red-400"
                : "bg-gray-800 text-gray-400"
          }`}>
            {connectionStatus === "connected" && "✓ Connected to Supabase"}
            {connectionStatus === "error" && "✗ Connection Error"}
            {connectionStatus === "checking" && "Checking connection..."}
            
            {error && <p className="mt-2 text-sm">{error}</p>}
          </div>
        </div>

        {/* Stats Table */}
        {isLoading ? (
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-gray-800 h-12 rounded-md"></div>
            ))}
          </div>
        ) : viewStats.length > 0 ? (
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Rule</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-300 w-24">Views</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {viewStats.map((stat) => (
                  <tr key={stat.slug} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <Link href={`/rules/${stat.slug}`} className="text-white hover:text-purple-400">
                        {getRuleTitle(stat.slug)}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="inline-flex items-center text-gray-300">
                        <Eye className="h-4 w-4 mr-1 text-purple-400" />
                        {stat.count}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 text-center">
            <p className="text-gray-400">No view statistics found.</p>
            <p className="text-gray-500 text-sm mt-2">
              Visit rule pages to track views or check your database connection.
            </p>
          </div>
        )}

        {/* Troubleshooting */}
        <div className="mt-12 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Troubleshooting</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Check that your <code className="bg-gray-800 px-2 py-1 rounded text-sm">.env.local</code> file has the correct Supabase credentials</li>
            <li>• Verify the <code className="bg-gray-800 px-2 py-1 rounded text-sm">rule_views</code> table exists in your Supabase project</li>
            <li>• Make sure Row Level Security (RLS) policies allow read/write access</li>
            <li>• Visit some rule pages to generate view data</li>
            <li>• Check browser console for any errors during view tracking</li>
          </ul>
        </div>
      </div>
    </main>
  )
} 