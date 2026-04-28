import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
