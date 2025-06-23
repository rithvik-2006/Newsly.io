"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface Article {
  id: number
  title: string
  source: string
  category: string
  publishedAt: string
  thumbnail: string
  excerpt: string
  url: string
}

interface NewsCardProps {
  article: Article
}

export function NewsCard({ article }: NewsCardProps) {
  const handleReadMore = () => {
    window.open(article.url, "_blank", "noopener,noreferrer")
  }

  return (
    <Card className="group overflow-hidden rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <Image
            src={article.thumbnail || "/placeholder.svg"}
            alt={article.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-white/90 dark:bg-black text-gray-900 dark:text-white backdrop-blur-sm border-0 shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
          >
            {article.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
          {article.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-3">
          <span className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            {article.source}
          </span>
          <span className="text-xs">{article.publishedAt}</span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 leading-relaxed">{article.excerpt}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleReadMore}
          variant="outline"
          className="w-full bg-white text-gray-900 border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:bg-blue-900 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all duration-300 group/button"
        >
          <span className="mr-2">Read More</span>
          <ExternalLink className="h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-300" />
        </Button>
      </CardFooter>
    </Card>
  )
}
