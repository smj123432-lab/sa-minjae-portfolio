import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/common/Reveal'
import { PROJECT_LIST } from '@/content/projects'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-4 py-32 md:px-16 md:py-40 lg:px-[128px]"
    >
      <div className="w-full">
        <Reveal delay={0}>
          <p className="text-muted mb-16 font-mono text-xs tracking-widest lowercase">
            03 — projects
          </p>
        </Reveal>

        <div className="divide-border flex flex-col divide-y">
          {PROJECT_LIST.map((project, i) => (
            <Reveal key={project.id} delay={0.08 + i * 0.06}>
              {project.available ? (
                <Link
                  href={`/projects/${project.id}`}
                  className="group flex items-center justify-between py-8 transition-colors duration-200"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                    <span className="text-foreground group-hover:text-accent text-2xl font-bold tracking-tight transition-colors duration-200 md:text-3xl">
                      {project.name}
                    </span>
                    <span className="text-muted font-mono text-[10px] tracking-widest">
                      {project.type}
                    </span>
                    <span className="text-muted font-mono text-[10px] tracking-widest">
                      {project.period}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-accent shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ) : (
                <div className="flex items-center justify-between py-8">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                    <span className="text-foreground/30 text-2xl font-bold tracking-tight md:text-3xl">
                      {project.name}
                    </span>
                    <span className="text-muted/50 font-mono text-[10px] tracking-widest">
                      {project.type}
                    </span>
                  </div>
                  <span className="text-muted/40 font-mono text-[10px] tracking-widest">
                    soon
                  </span>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
