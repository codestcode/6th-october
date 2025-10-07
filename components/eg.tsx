"use client"
import { cn } from "@/lib/utils"

export function EgyptianFlag({ isScrolled }: { isScrolled: boolean }) {
  return (
    <svg
      className={cn(
        "absolute inset-0 w-full h-full transition-opacity duration-500",
        isScrolled ? "opacity-20" : "opacity-40",
      )}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* ... your flag layers */}
    </svg>
  )
}
