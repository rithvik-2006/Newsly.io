"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SourceFilterProps {
  sources: string[]
  selectedSource: string
  onSourceChange: (source: string) => void
}

export function SourceFilter({ sources, selectedSource, onSourceChange }: SourceFilterProps) {
  return (
    <div className="flex-1 max-w-xs text-gray-700 dark:text-gray-300">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">News Source</h3>
      <Select value={selectedSource} onValueChange={onSourceChange}>
        <SelectTrigger className="rounded-lg bg-white dark:bg-black border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 text-gray-700 dark:text-gray-300 ">
          <SelectValue placeholder="Select source" />
        </SelectTrigger>
        <SelectContent position="popper" className="rounded-lg bg-white dark:bg-black border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
          {sources.map((source) => (
            <SelectItem
              key={source}
              value={source}
              className="hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:bg-blue-50 dark:focus:bg-blue-900/20 transition-colors duration-200"
            >
              {source}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
