'use client'

import Reveal from '@/components/common/Reveal'
import { SKILLS, type SkillItem } from '@/content/skills'
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
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiNotion,
  SiZod,
  SiBun,
} from 'react-icons/si'
import { Code2, Layers, FlaskConical } from 'lucide-react'
import type { ComponentType } from 'react'

type IconComp = ComponentType<{
  size?: number
  color?: string
  'aria-hidden'?: boolean
}>

const ICON_CONFIG: Record<string, { icon: IconComp; color: string }> = {
  HTML: { icon: SiHtml5, color: '#E34F26' },
  'CSS / SCSS': { icon: SiCss, color: '#1572B6' },
  'JavaScript (ES6+)': { icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  'React.js': { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: 'currentColor' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'TanStack Query': { icon: Code2, color: '#FF4154' },
  Zustand: { icon: Layers, color: 'currentColor' },
  Zod: { icon: SiZod, color: '#3068B7' },
  Supabase: { icon: SiSupabase, color: '#3ECF8E' },
  Git: { icon: SiGit, color: '#F05032' },
  GitHub: { icon: SiGithub, color: 'currentColor' },
  Vercel: { icon: SiVercel, color: 'currentColor' },
  Figma: { icon: SiFigma, color: '#F24E1E' },
  Notion: { icon: SiNotion, color: 'currentColor' },
  Playwright: { icon: FlaskConical, color: '#2EAD33' },
  Bun: { icon: SiBun, color: '#FBF0DF' },
}

function SkillCard({ item }: { item: SkillItem }) {
  const { toggleStackFilter } = useUIStore()
  const config = ICON_CONFIG[item.name]
  const Icon = config?.icon
  const iconColor = config?.color ?? 'currentColor'
  const count = item.usedIn.length
  const isClickable = count > 0

  const cardClass =
    'group relative flex flex-col items-center gap-3 rounded-xl border border-border/40 bg-surface/60 p-6 w-[120px] transition-all duration-200 hover:border-accent/60 hover:bg-accent/[0.06] hover:scale-[1.05] hover:-translate-y-0.5'

  const inner = (
    <>
      {count > 0 && (
        <span className="bg-accent absolute top-2 right-2 min-w-[20px] rounded-full px-1.5 text-center font-mono text-[10px] leading-[18px] font-bold text-black">
          {count}
        </span>
      )}
      <div className="flex h-12 w-12 items-center justify-center">
        {Icon ? (
          <Icon size={40} color={iconColor} aria-hidden={true} />
        ) : (
          <div className="h-10 w-10" />
        )}
      </div>
      <span className="text-foreground/60 group-hover:text-foreground/90 text-center font-mono text-[11px] leading-snug transition-colors duration-200">
        {item.name}
      </span>
    </>
  )

  if (isClickable) {
    return (
      <button
        type="button"
        className={cardClass}
        aria-label={`${item.name} 필터 — 사용 프로젝트 ${count}개`}
        onClick={() => {
          toggleStackFilter(item.name)
          document
            .getElementById('projects')
            ?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        {inner}
      </button>
    )
  }

  return <div className={cardClass}>{inner}</div>
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-section-skills border-border/40 border-t px-4 py-32 md:py-40"
    >
      <div className="mx-auto max-w-4xl">
        {/* 섹션 헤더 */}
        <div className="mb-16 text-center">
          <Reveal delay={0}>
            <h2
              className="text-accent mb-4 leading-[0.9] font-bold"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
                letterSpacing: '-0.03em',
              }}
            >
              주요 기술 스택
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-muted font-mono text-base">
              스택을 누르면 해당 스택이 사용된 프로젝트로 이동합니다.
            </p>
          </Reveal>
        </div>

        {/* 스킬 그룹 */}
        <div className="space-y-12">
          {SKILLS.map((group, gi) => (
            <Reveal key={group.category} delay={0.1 + gi * 0.08}>
              <div>
                <p className="text-muted/60 mb-6 font-mono text-sm tracking-[0.15em] uppercase">
                  # {group.category}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {group.items.map((item) => (
                    <SkillCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
