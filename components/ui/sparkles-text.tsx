"use client"

import { useEffect, useState, CSSProperties } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Sparkle {
  id: string
  x: string
  y: string
  color: string
  delay: number
  scale: number
}

interface SparklesTextProps {
  children: React.ReactNode
  className?: string
  sparklesCount?: number
  colors?: { first: string; second: string }
}

function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function generateSparkle(colors: { first: string; second: string }): Sparkle {
  return {
    id: `${Date.now()}-${Math.random()}`,
    x: `${random(0, 100)}%`,
    y: `${random(0, 100)}%`,
    color: Math.random() > 0.5 ? colors.first : colors.second,
    delay: random(0, 1.5),
    scale: random(0.4, 1.2),
  }
}

export function SparklesText({
  children,
  className,
  sparklesCount = 10,
  colors = { first: "#a78bfa", second: "#c4b5fd" },
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    setSparkles(Array.from({ length: sparklesCount }, () => generateSparkle(colors)))
    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev.map((s) => (Math.random() > 0.6 ? generateSparkle(colors) : s))
      )
    }, 600)
    return () => clearInterval(interval)
  }, [sparklesCount, colors.first, colors.second])

  return (
    <span className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="pointer-events-none absolute"
          style={{ left: sparkle.x, top: sparkle.y } as CSSProperties}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: sparkle.scale, opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, delay: sparkle.delay, ease: "easeInOut" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 21 21"
            fill="none"
            style={{ color: sparkle.color }}
          >
            <path
              d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 13.3916 5.45495 14.6797 6.34299L16.4647 7.57503C17.0218 7.96463 17.0218 8.78427 16.4647 9.17387L14.6797 10.4059C13.3916 11.2939 12.4006 12.5566 11.8618 14.0286L11.1746 15.905C10.9446 16.5337 10.0553 16.5337 9.82531 15.905L9.13808 14.0286C8.59927 12.5566 7.60826 11.2939 6.32017 10.4059L4.53513 9.17387C3.978 8.78427 3.978 7.96463 4.53513 7.57503L6.32017 6.34299C7.60826 5.45495 8.59927 4.19229 9.13808 2.72026L9.82531 0.843845Z"
              fill="currentColor"
            />
          </svg>
        </motion.span>
      ))}
      <span className="relative z-10">{children}</span>
    </span>
  )
}
