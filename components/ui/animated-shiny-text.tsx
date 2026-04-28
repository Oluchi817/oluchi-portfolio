import { type ComponentPropsWithoutRef, type CSSProperties, type FC } from "react"
import { cn } from "@/lib/utils"

interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={{ "--shiny-width": `${shimmerWidth}px` } as CSSProperties}
      className={cn(
        "inline-block text-zinc-400",
        "animate-shiny-text bg-clip-text text-transparent bg-no-repeat",
        "[background-size:var(--shiny-width)_100%] [background-position:0_0]",
        "[transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        "bg-gradient-to-r from-transparent via-white/80 via-50% to-transparent dark:via-white/70",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
