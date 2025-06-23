"use client"

import { useState, useMemo, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { NewsCard } from "@/components/news-card"
import { SearchBar } from "@/components/search-bar"
import { CategoryFilter } from "@/components/category-filter"
import { SourceFilter } from "@/components/source-filter"
import Image from "next/image"

// Enhanced mock news data with categories and URLs
const mockNews = [
  {
    id: 1,
    title: "Breaking: Major Tech Conference Announces Revolutionary AI Breakthrough",
    source: "TechNews Daily",
    category: "Technology",
    publishedAt: "2 hours ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
    excerpt: "Industry leaders gather to discuss the future of artificial intelligence and its impact on society.",
    url: "https://example.com/ai-breakthrough",
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
    source: "Environmental Times",
    category: "Environment",
    publishedAt: "4 hours ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
    excerpt: "World leaders commit to ambitious new targets for reducing greenhouse gas emissions.",
    url: "https://example.com/climate-agreement",
  },
  {
    id: 3,
    title: "Stock Markets Rally as Economic Indicators Show Strong Growth",
    source: "Financial Herald",
    category: "Business",
    publishedAt: "6 hours ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
    excerpt: "Major indices reach new highs following positive employment and inflation data.",
    url: "https://example.com/market-rally",
  },
  {
    id: 4,
    title: "Space Mission Successfully Lands on Mars, Begins Scientific Research",
    source: "Space Explorer",
    category: "Science",
    publishedAt: "8 hours ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
    excerpt: "Historic mission marks a new chapter in interplanetary exploration and research.",
    url: "https://example.com/mars-mission",
  },
  {
    id: 5,
    title: "New Medical Treatment Shows Promise in Clinical Trials",
    source: "Health Today",
    category: "Health",
    publishedAt: "10 hours ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
    excerpt: "Breakthrough therapy demonstrates significant improvement in patient outcomes.",
    url: "https://example.com/medical-breakthrough",
  },
  {
    id: 6,
    title: "Olympic Games Preparation Enters Final Phase with Record Participation",
    source: "Sports Weekly",
    category: "Sports",
    publishedAt: "12 hours ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
    excerpt: "Athletes from around the world prepare for what promises to be the most competitive games yet.",
    url: "https://example.com/olympics-prep",
  },
  {
    id: 7,
    title: "Major Political Reform Bill Passes Senate Vote",
    source: "Political Tribune",
    category: "Politics",
    publishedAt: "14 hours ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
    excerpt: "Landmark legislation promises to reshape the political landscape for years to come.",
    url: "https://example.com/reform-bill",
  },
  {
    id: 8,
    title: "Tech Giants Announce New Privacy Standards",
    source: "Digital Rights Watch",
    category: "Technology",
    publishedAt: "16 hours ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
    excerpt: "Major technology companies commit to enhanced user privacy protections.",
    url: "https://example.com/privacy-standards",
  },
  {
    id: 9,
    title: "Championship Finals Draw Record Television Audience",
    source: "Sports Network",
    category: "Sports",
    publishedAt: "18 hours ago",
    thumbnail: "/placeholder.svg?height=200&width=300",
    excerpt: "Historic match captivates millions of viewers worldwide.",
    url: "https://example.com/championship-finals",
  },
]
type Article = {
  // Adjust these fields according to your /api/news response
  title: string
  source: { name: string }
  category?: string // NewsAPI.org does not return category, but you might infer it
  publishedAt: string
  urlToImage?: string
  description?: string
  url: string
}
export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSource, setSelectedSource] = useState("All")
  const [articles, setArticles] = useState<Article[]>([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState<string | null>(null)

  // Get unique categories and sources
  const categories = ["All", ...Array.from(new Set(mockNews.map((article) => article.category)))]
  const sources = ["All", ...Array.from(new Set(mockNews.map((article) => article.source)))]
useEffect(() => {
  async function fetchNews() {
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams()
      if (searchQuery) params.append("q", searchQuery)
      if (selectedCategory !== 'All') params.append("category", selectedCategory)
      if (selectedSource !== "All") params.append("sources", selectedSource)
      const res = await fetch(`/api/news?${params.toString()}`)
      if (!res.ok) throw new Error("Failed to fetch news")
      const data = await res.json()
      setArticles(
        (data.articles || []).map((article: any, idx: number) => ({
          ...article,
          id: idx, // Add id for React keys
          source: article.source || { name: "Unknown" },
        }))
      )
    } catch (err: any) {
      setError(err.message || "Error Loading News")
    } finally {
      setLoading(false)
    }
  }
  fetchNews()
}, [searchQuery, selectedCategory, selectedSource])

// Use only API articles
const displayNews = articles

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="w-full px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Image src="/logo.svg" alt="Newsly Logo" width={36} height={36} className="h-9 w-9" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Newsly</h1>
            </div>

            {/* Right Side: Theme Toggle & GitHub */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/rithvik-2006/Newsly.io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="hover:opacity-80 transition-opacity"
              >
                <Image src="/github.svg" alt="Github" width={36} height={36} className="h-9 w-9" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters Section */}
        <div className="mb-8 space-y-4">
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          <div className="flex flex-col sm:flex-row gap-4">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <SourceFilter sources={sources} selectedSource={selectedSource} onSourceChange={setSelectedSource} />
          </div>
        </div>

        {/* Headlines Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Top Headlines</h2>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {displayNews.length} article{displayNews.length !== 1 ? "s" : ""} found
            </span>
          </div>
          {loading ? (
            <div className="text-center py-12 text-gray-600 dark:text-gray-400">Loading latest news...</div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">{error}</div>
          ) : displayNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayNews.map((article: any) => (
                <NewsCard
                  key={article.id}
                  article={{
                    id: article.id,
                    title: article.title,
                    source: article.source.name || article.source,
                    category: article.category || "General",
                    publishedAt: article.publishedAt ? new Date(article.publishedAt).toLocaleString() : "",
                    thumbnail: article.urlToImage || "/placeholder.svg?height=200&width=300",
                    excerpt: article.description || article.excerpt || "",
                    url: article.url,
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No articles found matching your criteria.</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
