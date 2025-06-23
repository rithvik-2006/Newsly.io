"use client"

import { Button } from "@/components/ui/button"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex-1 text-gray-700 dark:text-gray-300">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={`transition-all duration-300 rounded-full ${
              selectedCategory === category
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md transform scale-105"
                : "bg-white dark:bg-black text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-sm"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
