"use client"

import React, { memo } from "react"
import { cn } from "@/lib/utils"

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

export const AuroraText = memo(({
  children,
  className = "",
  colors = ["#8b5cf6", "#6d28d9", "#4f46e5", "#818cf8"],
  speed = 1,
}: AuroraTextProps) => {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="sr-only">{children}</span>
      <span
        className="animate-aurora relative bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
          backgroundSize: "300% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animationDuration: `${10 / speed}s`,
        }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  )
})

AuroraText.displayName = "AuroraText"
