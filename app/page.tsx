"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Search, X, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { allRules } from "@/lib/data/rules"
import Head from "next/head"

// Temporary popular rules component without view counts
const PopularRules = ({ limit = 3 }) => {
  // Just show some rules directly from the allRules array
  // In a real implementation, you would fetch from Supabase but not display the counts
  const somePopularRules = allRules.slice(0, limit)
  
  return (
    <div className="space-y-4">
      {somePopularRules.map((rule) => (
        <Link
          key={rule.slug}
          href={`/rules/${rule.slug}`}
          className="block bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-colors"
        >
          <h3 className="text-lg font-semibold text-white mb-2">{rule.title}</h3>
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {rule.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full">
                  {tag}
                </span>
              ))}
              {rule.tags.length > 2 && (
                <span className="px-2 py-0.5 text-gray-400 text-xs">+{rule.tags.length - 2}</span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function Home() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredRules, setFilteredRules] = useState<typeof allRules>([])
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Filter rules as user types
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredRules([])
      return
    }

    const results = allRules.filter((rule) => {
      return (
        rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rule.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }).slice(0, 5) // Limit to 5 results for cleaner UI

    setFilteredRules(results)
  }, [searchQuery])

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearching(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/rules?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
    setFilteredRules([])
  }

  // Create structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Trae Rules Directory",
    "url": process.env.NEXT_PUBLIC_BASE_URL || "",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_BASE_URL || ""}/rules?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "description": "Find, share, and use AI coding rules to enhance your development workflow",
    "keywords": "Trae Rules, AI coding rules, coding assistance, development workflow"
  }

  return (
    <>
      <Head>
        <title>Trae Rules Directory | Discover AI Coding Rules</title>
        <meta name="description" content="Find, share, and use AI coding rules to enhance your development workflow. A community-driven collection of Trae Rules for developers." />
        <meta name="keywords" content="Trae Rules, AI coding rules, coding assistance, development workflow, AI assistance, productivity tools" />
        <meta property="og:title" content="Trae Rules Directory | Discover AI Coding Rules" />
        <meta property="og:description" content="Find, share, and use AI coding rules to enhance your development workflow. A community-driven collection of Trae Rules for developers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL || ""} />
        <meta property="og:image" content="/twitter-card.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Trae Rules Directory - Discover AI Coding Rules" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trae Rules Directory | Discover AI Coding Rules" />
        <meta name="twitter:description" content="Find, share, and use AI coding rules to enhance your development workflow. A community-driven collection of Trae Rules for developers." />
        <meta name="twitter:image" content="/twitter-card.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Discover Trae Rules</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Find, share, and use AI coding rules to enhance your development workflow
              </p>

              {/* Search Bar with Live Results */}
              <div ref={searchRef} className="relative max-w-2xl mx-auto mb-8">
                <form onSubmit={handleSearch} className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for rules..."
                    className="w-full pl-10 pr-10 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setIsSearching(true)
                    }}
                    onFocus={() => setIsSearching(true)}
                    aria-label="Search for rules"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      aria-label="Clear search"
                    >
                      <X className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                    </button>
                  )}
                </form>

                {/* Live Search Results */}
                {isSearching && filteredRules.length > 0 && (
                  <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <ul className="divide-y divide-gray-700">
                      {filteredRules.map((rule) => (
                        <li key={rule.slug}>
                          <Link
                            href={`/rules/${rule.slug}`}
                            className="block px-4 py-3 hover:bg-gray-700 transition-colors"
                            onClick={() => setIsSearching(false)}
                          >
                            <div className="text-white font-medium text-left">{rule.title}</div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {rule.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                              {rule.tags.length > 3 && (
                                <span className="px-2 py-0.5 text-gray-400 text-xs">+{rule.tags.length - 3} more</span>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={() => {
                            if (searchQuery.trim()) {
                              router.push(`/rules?search=${encodeURIComponent(searchQuery)}`)
                            }
                          }}
                          className="w-full px-4 py-3 text-purple-400 hover:bg-gray-700 transition-colors text-left flex items-center"
                        >
                          <Search className="h-4 w-4 mr-2" />
                          View all results for "{searchQuery}"
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/rules">Browse All Rules</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
                >
                  <Link href="/submit">Submit Your Rule</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Rules */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-800">
          <div className="container mx-auto max-w-5xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Rules</h2>
              <Link href="/rules" className="text-purple-400 hover:text-purple-300">
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRules.map((rule) => (
                <Link
                  key={rule.id}
                  href={`/rules/${rule.slug}`}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{rule.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {rule.categories.map((category) => (
                      <span key={category} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Rules */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-950">
          <div className="container mx-auto max-w-5xl">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-purple-400 mr-2" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Popular Rules</h2>
              </div>
              <Link href="/rules" className="text-purple-400 hover:text-purple-300">
                View all →
              </Link>
            </div>
            
            <PopularRules limit={3} />
          </div>
        </section>

        {/* What are Trae Rules */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What are Trae Rules?</h2>
              <p className="text-gray-300 mb-4">
                Trae Rules are AI coding prompts that enhance your development workflow. They help you automate repetitive
                tasks, generate code, refactor existing code, and more - all through natural language instructions.
              </p>
              <p className="text-gray-300 mb-6">
                Each rule is designed to solve specific problems or tasks in your coding workflow, making you more
                productive and efficient.
              </p>
              <Button asChild variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/20">
                <a href="https://docs.trae.ai/ide/rules-for-ai" target="_blank" rel="noopener noreferrer">
                  Learn More in Official Docs
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

// Mock data for featured rules
const featuredRules = [
  {
    id: 1,
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices",
    categories: ["Code Generation", "React", "TypeScript"],
  },
  {
    id: 2,
    slug: "chrome-extension-development",
    title: "Chrome Extension Development",
    categories: ["Browser Extension", "JavaScript", "Chrome API"],
  },
  {
    id: 3,
    slug: "shadcn-ui-best-practices",
    title: "Shadcn UI Best Practices",
    categories: ["UI", "React", "TailwindCSS"],
  },
]
