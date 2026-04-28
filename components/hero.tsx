"use client"

import { SparklesText } from "@/components/ui/sparkles-text"
import { AuroraText } from "@/components/ui/aurora-text"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { DotPattern } from "@/components/ui/dot-pattern"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="[mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,white,transparent)] opacity-60"
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="rounded-full border border-zinc-700/60 bg-zinc-900/60 px-4 py-1.5 backdrop-blur-sm">
          <AnimatedShinyText className="text-xs uppercase tracking-widest text-zinc-400">
            CS Student · Georgia State University
          </AnimatedShinyText>
        </div>

        <SparklesText
          className="text-5xl font-bold tracking-tight text-zinc-100 md:text-7xl"
          sparklesCount={12}
          colors={{ first: "#a78bfa", second: "#818cf8" }}
        >
          Oluchi Chukwurah
        </SparklesText>

        <AuroraText
          className="text-xl font-medium tracking-wide md:text-2xl"
          colors={["#a78bfa", "#6d28d9", "#4f46e5", "#818cf8"]}
          speed={0.8}
        >
          Building things that live on the internet
        </AuroraText>

        <p className="max-w-md text-sm leading-relaxed text-zinc-500">
          Nigerian-American developer from Atlanta, GA · Currently pursuing a B.S. in Computer Science
        </p>

        <div className="mt-2 flex items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-colors duration-150 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors duration-150 hover:border-zinc-500 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-5 w-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
