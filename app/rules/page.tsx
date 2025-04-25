"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { allRules } from "@/lib/data/rules"
import Head from "next/head"

export default function RulesPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Get search query from URL on initial load
  useEffect(() => {
    const queryParam = searchParams.get("search")
    if (queryParam) {
      setSearchQuery(queryParam)
    }

    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      setSelectedCategories([categoryParam])
    }
  }, [searchParams])

  // Filter rules based on search query and selected categories
  const filteredRules = allRules.filter((rule) => {
    const matchesSearch =
      searchQuery === "" ||
      rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.content.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategories =
      selectedCategories.length === 0 || rule.tags.some((tag) => selectedCategories.includes(tag))

    return matchesSearch && matchesCategories
  })

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  // Get all unique categories from the tags in all rules
  const allCategories = Array.from(new Set(allRules.flatMap((rule) => rule.tags))).sort()

  // Create structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Browse Rules | Trae Rules Directory",
    "description": "Browse and search through our collection of AI coding rules to enhance your development workflow",
    "url": `${process.env.NEXT_PUBLIC_BASE_URL || ""}/rules`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredRules.map((rule, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${process.env.NEXT_PUBLIC_BASE_URL || ""}/rules/${rule.slug}`,
        "name": rule.title
      }))
    }
  }

  return (
    <>
      <Head>
        <title>Browse Rules | Trae Rules Directory</title>
        <meta name="description" content="Browse and search through our collection of AI coding rules to enhance your development workflow" />
        <meta name="keywords" content="AI rules, coding rules, development workflow, AI assistance, coding assistance" />
        <meta property="og:title" content="Browse Rules | Trae Rules Directory" />
        <meta property="og:description" content="Browse and search through our collection of AI coding rules to enhance your development workflow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/rules`} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/og?title=Browse Rules`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Trae Rules Directory - Browse Rules" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Browse Rules | Trae Rules Directory" />
        <meta name="twitter:description" content="Browse and search through our collection of AI coding rules to enhance your development workflow" />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/og?title=Browse Rules`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main className="min-h-screen bg-gray-950 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Browse Rules</h1>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search for rules..."
                className="w-full pl-10 bg-gray-800 border-gray-700 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search for rules"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 border-gray-700 text-gray-300" aria-label="Filter rules">
                  <Filter className="h-4 w-4" />
                  Filter
                  {selectedCategories.length > 0 && (
                    <span className="ml-1 bg-purple-600 text-white text-xs rounded-full px-2 py-0.5">
                      {selectedCategories.length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700">
                <div className="p-2">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Categories</h3>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {allCategories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <label htmlFor={`category-${category}`} className="text-sm text-gray-300 cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                  {selectedCategories.length > 0 && (
                    <Button
                      variant="ghost"
                      className="w-full mt-2 text-gray-400 hover:text-white"
                      onClick={() => setSelectedCategories([])}
                      aria-label="Clear filters"
                    >
                      Clear filters
                    </Button>
                  )}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Rules Grid */}
          {filteredRules.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRules.map((rule) => (
                <Link
                  key={rule.slug}
                  href={`/rules/${rule.slug}`}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-colors"
                  aria-label={`View rule: ${rule.title}`}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{rule.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {rule.content.split('\n\n')[0]} {/* Using the first paragraph of content as description */}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {rule.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">No rules found matching your criteria.</p>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-400"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategories([])
                }}
                aria-label="Clear all filters"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

// No longer need the mock data - we're importing from lib/data/rules
