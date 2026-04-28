"use client"

import { motion } from "framer-motion"
import { ElegantShape } from "@/components/ui/elegant-shape"

const EASE = [0.23, 0.86, 0.39, 0.96] as const

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: EASE },
})

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030303] px-6 text-center">
      {/* Gradient backdrops */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]" />

      {/* Floating shapes */}
      <ElegantShape
        delay={0.3}
        width={600}
        height={140}
        rotate={12}
        gradient="from-indigo-500/[0.15] to-transparent"
        className="-top-20 -right-32 md:-right-16"
      />
      <ElegantShape
        delay={0.5}
        width={500}
        height={120}
        rotate={-15}
        gradient="from-rose-500/[0.15] to-transparent"
        className="-bottom-16 -left-32 md:-left-20"
      />
      <ElegantShape
        delay={0.4}
        width={300}
        height={80}
        rotate={-8}
        gradient="from-violet-500/[0.15] to-transparent"
        className="top-1/4 -left-16"
      />
      <ElegantShape
        delay={0.6}
        width={200}
        height={60}
        rotate={20}
        gradient="from-amber-500/[0.15] to-transparent"
        className="top-1/3 -right-8"
      />
      <ElegantShape
        delay={0.7}
        width={160}
        height={50}
        rotate={-5}
        gradient="from-cyan-500/[0.15] to-transparent"
        className="bottom-1/3 right-1/4"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6">
        {/* Badge */}
        <motion.div {...fadeUp(0.5)}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="text-xs font-medium uppercase tracking-widest text-white/50">
              CS Student · Georgia State University
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.7)}
          className="text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
            Oluchi Chukwurah
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.9)}
          className="text-xl font-medium tracking-wide text-white/60 md:text-2xl"
        >
          Building things that live on the internet
        </motion.p>

        {/* Sub-copy */}
        <motion.p
          {...fadeUp(1.0)}
          className="max-w-md text-sm leading-relaxed text-white/40"
        >
          Nigerian-American developer from Atlanta, GA · Currently pursuing a B.S. in Computer Science
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(1.1)} className="mt-2 flex items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-colors duration-150 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/[0.08] px-5 py-2.5 text-sm font-medium text-white/60 backdrop-blur-sm transition-colors duration-150 hover:border-white/20 hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg className="h-5 w-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
