const skills = [
  "C", "Python", "Java", "JavaScript", "TypeScript",
  "React", "Next.js", "Tailwind CSS", "Git", "GitHub",
  "Data Structures", "Algorithms", "Linux",
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24 bg-[#030303]">
      <h2 className="mb-12 text-2xl font-semibold text-white/90">
        <span className="mr-2 bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">/</span>About
      </h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="max-w-prose leading-relaxed text-white/60">
            Hi, I&apos;m Oluchi — a Nigerian-American Computer Science student in my third year
            at Georgia State University, based in Atlanta, GA.
          </p>
          <p className="max-w-prose leading-relaxed text-white/60">
            I&apos;m working toward my Bachelor&apos;s degree with an eye on a Master&apos;s program down the road.
            Outside of school, I&apos;m an older sister of two and find a lot of motivation in building
            things that actually solve problems.
          </p>
          <p className="max-w-prose leading-relaxed text-white/60">
            I&apos;m currently deepening my skills in systems programming and web development,
            and I&apos;m open to internship opportunities.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/30">
            Skills &amp; Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs text-white/60 transition-colors duration-150 hover:border-indigo-500/40 hover:text-indigo-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
