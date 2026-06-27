import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { TechRationaleItem } from '@/content/projects'
import type React from 'react'

export function hl(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-accent font-medium">
        {part}
      </span>
    ) : (
      part
    )
  )
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-foreground mb-5 text-lg font-bold">{children}</h2>
}

export function InfoRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-10">
      <SectionHeading>{label}</SectionHeading>
      <div className="border-accent/60 border-l-2 pl-4">{children}</div>
    </div>
  )
}

export function StatusDot({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs">
      <span className="bg-accent inline-block h-1.5 w-1.5 rounded-full" />
      <span className="text-accent">{status}</span>
    </span>
  )
}

export function ProjectLinks({
  deployUrl,
  githubUrl,
}: {
  deployUrl: string
  githubUrl: string
}) {
  if (!deployUrl && !githubUrl) return null
  return (
    <div className="flex flex-wrap gap-3">
      {deployUrl && (
        <a
          href={deployUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-accent/40 text-accent hover:bg-accent/10 inline-flex items-center gap-1.5 border px-4 py-1.5 font-mono text-xs transition-colors duration-200"
        >
          배포 바로가기 <ArrowUpRight size={11} />
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-accent/40 text-accent hover:bg-accent/10 inline-flex items-center gap-1.5 border px-4 py-1.5 font-mono text-xs transition-colors duration-200"
        >
          GitHub 바로가기 <ArrowUpRight size={11} />
        </a>
      )}
    </div>
  )
}

export function ContributionBadges({
  items,
}: {
  items: { label: string; percent: number }[]
}) {
  if (items.length === 0)
    return (
      <p className="text-muted font-mono text-xs">TODO: 기여도 입력 예정</p>
    )
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ label, percent }) => (
        <span
          key={label}
          className="border-border/60 text-foreground/70 rounded-full border px-3 py-1 font-mono text-xs"
        >
          {label} {percent}%
        </span>
      ))}
    </div>
  )
}

export function StackPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="bg-accent/10 border-accent/30 text-accent rounded-full border px-3 py-1 font-mono text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

export function FeatureList({ items }: { items: string[] }) {
  if (items.length === 0)
    return (
      <p className="text-muted font-mono text-xs">
        TODO: 주요 기능 목록 입력 예정
      </p>
    )
  return (
    <ul className="flex flex-col gap-2">
      {items.map((f) => (
        <li
          key={f}
          className="text-foreground/70 flex items-start gap-2 text-base leading-relaxed"
        >
          <span className="text-accent mt-[0.35em] shrink-0 text-xs">•</span>
          <span>{hl(f)}</span>
        </li>
      ))}
    </ul>
  )
}

export function TechRationale({ items }: { items: TechRationaleItem[] }) {
  if (items.length === 0) return null
  return (
    <div className="divide-border/40 flex flex-col divide-y">
      {items.map(({ tech, reason }) => (
        <div
          key={tech}
          className="grid grid-cols-[8rem_1fr] gap-6 py-4 md:grid-cols-[12rem_1fr]"
        >
          <span className="text-foreground font-mono text-sm">{tech}</span>
          <span className="text-foreground/65 text-base leading-loose">
            {reason}
          </span>
        </div>
      ))}
    </div>
  )
}

export function BackLink() {
  return (
    <div className="border-border/40 mt-20 border-t pt-10">
      <Link
        href="/#projects"
        className="text-muted hover:text-foreground inline-flex items-center gap-2.5 font-mono text-sm transition-colors duration-200"
      >
        <ArrowLeft size={15} />
        목록으로
      </Link>
    </div>
  )
}
