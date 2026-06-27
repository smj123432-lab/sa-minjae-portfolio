'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, X } from 'lucide-react'
import Reveal from '@/components/common/Reveal'
import { PROJECT_CARDS, type ProjectCard } from '@/content/projects'
import { useUIStore } from '@/store/uiStore'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
  SiBun,
  SiClaude,
  SiGooglegemini,
  SiZod,
} from 'react-icons/si'
import { Code2, Layers } from 'lucide-react'
import type { ComponentType } from 'react'

type IconComponent = ComponentType<{ size?: number; className?: string }>

const ICON_MAP: Record<string, IconComponent> = {
  HTML: SiHtml5,
  'CSS / SCSS': SiCss,
  'JavaScript (ES6+)': SiJavascript,
  TypeScript: SiTypescript,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  Supabase: SiSupabase,
  'TanStack Query': Code2,
  Zustand: Layers,
  Zod: SiZod,
  Vercel: SiVercel,
  Bun: SiBun,
  Claude: SiClaude,
  'Claude Code': SiClaude,
  Gemini: SiGooglegemini,
}

function StackIcon({
  tech,
  active,
  onToggle,
}: {
  tech: string
  active: boolean
  onToggle: (e: React.MouseEvent) => void
}) {
  const Icon = ICON_MAP[tech]
  if (!Icon) return null

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`${tech} 필터 ${active ? '해제' : '추가'}`}
      className="group/icon relative"
    >
      <span
        className={[
          'flex items-center justify-center rounded-md p-0.5 transition-all duration-150',
          active ? 'ring-accent bg-accent/10 ring-2' : 'hover:bg-foreground/10',
        ].join(' ')}
      >
        <Icon
          size={18}
          className={
            active
              ? 'text-accent'
              : 'text-foreground/40 group-hover/icon:text-foreground/85 transition-colors duration-200'
          }
        />
      </span>
      <span className="bg-foreground text-background pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded px-1.5 py-0.5 font-mono text-[9px] whitespace-nowrap opacity-0 transition-opacity duration-150 group-hover/icon:opacity-100">
        {tech}
      </span>
    </button>
  )
}

function ProjectCardItem({
  project,
  dimmed,
  activeStackFilters,
  onToggle,
}: {
  project: ProjectCard
  dimmed: boolean
  activeStackFilters: string[]
  onToggle: (tech: string) => void
}) {
  if (!project.available) {
    return (
      <article
        className={`border-border/30 border transition-opacity duration-300 ${dimmed ? 'opacity-15' : 'opacity-40'}`}
      >
        <div className="bg-foreground/[0.06] flex aspect-video items-center justify-center">
          <span className="text-muted/40 font-mono text-[10px] tracking-[0.25em] uppercase">
            이미지 예정
          </span>
        </div>
        <div className="p-6 md:p-8">
          <h3
            className="text-foreground mb-2 font-bold tracking-tight"
            style={{
              fontSize: 'clamp(1.5rem, 2.2vw, 2.4rem)',
              letterSpacing: '-0.02em',
            }}
          >
            {project.name}
          </h3>
          <p className="mb-4 font-mono text-sm">
            <span className="text-foreground/50">{project.period}</span>
            <span className="text-foreground/30 mx-2">·</span>
            <span className="text-accent">{project.type}</span>
          </p>
          <p className="text-muted font-mono text-xs tracking-[0.2em] uppercase">
            준비 중
          </p>
        </div>
      </article>
    )
  }

  return (
    <article
      className={`group border-border/40 hover:border-border/60 bg-surface border transition-all duration-300 ${dimmed ? 'pointer-events-none opacity-15' : ''}`}
    >
      <Link
        href={`/projects/${project.id}`}
        className="relative block overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="relative aspect-video">
          {project.thumbnail && (
            <Image
              src={project.thumbnail}
              alt={`${project.name} 스크린샷`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
      </Link>

      <div className="p-6 md:p-8">
        <div className="mb-3 flex items-start justify-between gap-6">
          <Link href={`/projects/${project.id}`} className="flex-1">
            <h3
              className="text-foreground group-hover:text-foreground/70 font-bold tracking-tight transition-colors duration-200"
              style={{
                fontSize: 'clamp(1.5rem, 2.2vw, 2.4rem)',
                letterSpacing: '-0.02em',
              }}
            >
              {project.name}
            </h3>
          </Link>
          <Link
            href={`/projects/${project.id}`}
            className="text-muted hover:text-foreground mt-1.5 shrink-0 font-mono text-xs tracking-[0.05em] transition-colors duration-200"
          >
            자세히 보기 →
          </Link>
        </div>

        <p className="mb-5 font-mono text-sm">
          <span className="text-foreground/50">{project.period}</span>
          <span className="text-foreground/30 mx-2">·</span>
          <span className="text-accent">{project.type}</span>
        </p>

        <div className="mb-6 flex flex-wrap gap-3">
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-accent/40 text-accent hover:bg-accent/10 inline-flex items-center gap-1.5 border px-3.5 py-1.5 font-mono text-xs transition-colors duration-200"
            >
              배포 <ArrowUpRight size={12} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-accent/40 text-accent hover:bg-accent/10 inline-flex items-center gap-1.5 border px-3.5 py-1.5 font-mono text-xs transition-colors duration-200"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
          )}
        </div>

        {project.cardStack.length > 0 && (
          <div className="border-border/30 flex flex-wrap items-center gap-3 border-t pt-5">
            {project.cardStack.map((tech) => (
              <StackIcon
                key={tech}
                tech={tech}
                active={activeStackFilters.includes(tech)}
                onToggle={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  onToggle(tech)
                }}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const { activeStackFilters, toggleStackFilter, clearStackFilters } =
    useUIStore()

  const sorted = [...PROJECT_CARDS].sort((a, b) =>
    a.available === b.available ? 0 : a.available ? -1 : 1
  )

  // AND 필터 — 선택한 스택 모두 포함한 카드
  const matched =
    activeStackFilters.length > 0
      ? sorted.filter((c) =>
          activeStackFilters.every((f) => c.cardStack.includes(f))
        )
      : sorted
  const hasMatch = matched.length > 0
  const matchIds = hasMatch ? new Set(matched.map((c) => c.id)) : null

  return (
    <section
      id="projects"
      className="bg-section-projects border-border/40 border-t px-4 pt-16 pb-32 md:px-16 md:pt-20 md:pb-40 lg:px-[128px]"
    >
      <div className="w-full">
        {/* 필터 칩 */}
        {activeStackFilters.length > 0 && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="text-muted mr-1 font-mono text-[10px] tracking-[0.2em] uppercase">
              필터
            </span>
            {activeStackFilters.map((f) => (
              <span
                key={f}
                className="border-accent/60 text-accent flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs"
              >
                {f}
                <button
                  type="button"
                  onClick={() => toggleStackFilter(f)}
                  aria-label={`${f} 필터 해제`}
                  className="hover:text-foreground ml-0.5 transition-colors duration-150"
                >
                  <X size={11} />
                </button>
              </span>
            ))}
            <button
              type="button"
              onClick={clearStackFilters}
              className="text-muted hover:text-foreground ml-1 font-mono text-[10px] tracking-[0.1em] transition-colors duration-150"
            >
              전체 해제
            </button>
            {!hasMatch && (
              <span className="text-muted ml-2 font-mono text-[10px]">
                결과 없음 — 전체 표시
              </span>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {sorted.map((project, i) => {
            const dimmed = !!(
              activeStackFilters.length > 0 &&
              hasMatch &&
              !matchIds?.has(project.id)
            )
            return (
              <Reveal key={project.id} delay={0.06 + i * 0.07}>
                <ProjectCardItem
                  project={project}
                  dimmed={dimmed}
                  activeStackFilters={activeStackFilters}
                  onToggle={toggleStackFilter}
                />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
