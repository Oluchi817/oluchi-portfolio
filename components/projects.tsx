import { MagicCard } from "@/components/ui/magic-card"

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  status?: "complete" | "in-progress"
}

const projects: Project[] = [
  {
    title: "Word Replacement Engine",
    description:
      "A C program that takes a sentence, target word, and replacement word as input. Scans for whole-word matches (not partial) and replaces them, printing the updated string.",
    tags: ["C", "Strings", "Algorithms"],
    github: "https://github.com/Oluchi817",
    status: "complete",
  },
  {
    title: "Developer Portfolio",
    description:
      "This portfolio — built with Next.js 15 App Router, Tailwind CSS, and custom Magic UI animations including sparkles, aurora text, and cursor-tracking cards.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Oluchi817",
    status: "complete",
  },
  {
    title: "More Coming Soon",
    description:
      "New projects in progress. Check back or follow on GitHub to see what's being built next.",
    tags: ["In Progress"],
    status: "in-progress",
  },
]

function TagBadge({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-zinc-700/50 bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400">
      {label}
    </span>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const isInProgress = project.status === "in-progress"
  return (
    <MagicCard
      className={`flex flex-col gap-3 rounded-xl border p-6 transition-colors duration-150 ${
        isInProgress
          ? "border-zinc-800/50 bg-zinc-900/40"
          : "border-zinc-800 bg-zinc-900"
      }`}
      gradientColor="rgba(139,92,246,0.08)"
      gradientSize={250}
    >
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>

      <h3
        className={`text-lg font-medium ${
          isInProgress ? "text-zinc-500" : "text-zinc-100"
        }`}
      >
        {project.title}
      </h3>

      <p className="flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      {project.github && !isInProgress && (
        <div className="mt-auto pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors duration-150 hover:text-violet-400"
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
          </a>
        </div>
      )}
    </MagicCard>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-12 text-2xl font-semibold text-zinc-100">
        <span className="mr-2 text-violet-400">/</span>Projects
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
