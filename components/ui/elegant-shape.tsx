"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ElegantShapeProps {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}

export function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-indigo-500/[0.15] to-transparent",
}: ElegantShapeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96] as const,
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className={cn(
          "rounded-[24px] md:rounded-[48px]",
          "backdrop-blur-[2px]",
          "border border-white/[0.08]",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
          "bg-gradient-to-br",
          gradient
        )}
      />
    </motion.div>
  )
}
