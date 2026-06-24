import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import MetricCard from '@/components/common/MetricCard'
import DiggoTabs from '@/components/common/DiggoTabs'
import ProjectGallery from '@/components/common/ProjectGallery'
import {
  DIGGO_META,
  DIGGO_METRICS,
  DIGGO_TABS,
  DIGGO_AI_PHASES,
  LIONS_STUDY_META,
  LIONS_STUDY_METRICS,
  LIONS_STUDY_TABS,
  ACTIVIO_V1_META,
  ACTIVIO_V2_META,
  type TechRationaleItem,
} from '@/content/projects'

interface Props {
  params: Promise<{ slug: string }>
}

const PROJECT_METADATA: Record<
  string,
  { title: string; description: string; ogImage: string | null }
> = {
  diggo: {
    title: 'DIGGO — SA MINJAE',
    description:
      '건설 현장 배차 불신 문제를 신뢰 뱃지 시스템으로 푼 개인 프로젝트',
    ogImage: '/images/diggo/hero_screenshot.png',
  },
  'lions-study': {
    title: '사자들의 공부방 — SA MINJAE',
    description:
      'Vanilla JS + Vite로 Lighthouse Performance 62→80, FCP 3.1→1.1초 달성한 팀 프로젝트',
    ogImage: '/images/lions-study/hero_screenshot.png',
  },
  'activio-v1': {
    title: 'ACTIVIO v1 — SA MINJAE',
    description: '부트캠프 수료 전 초기 버전 팀 프로젝트',
    ogImage: null,
  },
  'activio-v2': {
    title: 'ACTIVIO v2 — SA MINJAE',
    description: '수료 후 팀이 자발적으로 돌아온 리디자인',
    ogImage: null,
  },
}

export async function generateStaticParams() {
  return [
    { slug: 'diggo' },
    { slug: 'lions-study' },
    { slug: 'activio-v1' },
    { slug: 'activio-v2' },
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const meta = PROJECT_METADATA[slug]
  if (!meta) return {}
  return {
    title: meta.title,
    ...(meta.description ? { description: meta.description } : {}),
    openGraph: {
      title: meta.title,
      ...(meta.description ? { description: meta.description } : {}),
      ...(meta.ogImage ? { images: [{ url: meta.ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      ...(meta.description ? { description: meta.description } : {}),
      ...(meta.ogImage ? { images: [meta.ogImage] } : {}),
    },
  }
}

// ── 헬퍼 ────────────────────────────────────────────────────────────────────────

function hl(text: string): React.ReactNode {
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

// ── 공통 UI 조각 ────────────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-foreground mb-5 text-lg font-bold">{children}</h2>
}

function InfoRow({
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

function StatusDot({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs">
      <span className="bg-accent inline-block h-1.5 w-1.5 rounded-full" />
      <span className="text-accent">{status}</span>
    </span>
  )
}

function ProjectLinks({
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

function ContributionBadges({
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

function StackPills({ items }: { items: string[] }) {
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

function FeatureList({ items }: { items: string[] }) {
  if (items.length === 0) {
    return (
      <p className="text-muted font-mono text-xs">
        TODO: 주요 기능 목록 입력 예정
      </p>
    )
  }
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

function TechRationale({ items }: { items: TechRationaleItem[] }) {
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

function BackLink() {
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

// ── 프로젝트별 페이지 ───────────────────────────────────────────────────────────

function DiggoPage() {
  return (
    <main className="relative z-10 px-4 pt-28 pb-32 md:px-16 lg:px-[128px]">
      <ProjectGallery
        images={DIGGO_META.gallery}
        alt="DIGGO 스크린샷"
        positions={['top', 'top', 'top', 'top', 'top', 'center', 'top']}
      />

      {/* 헤더 */}
      <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1
            className="text-foreground mb-3 font-bold tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 5vw, 5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            {DIGGO_META.name}
          </h1>
          <div className="mb-4">
            <StatusDot status={DIGGO_META.status} />
          </div>
          <ProjectLinks
            deployUrl={DIGGO_META.deployUrl}
            githubUrl={DIGGO_META.githubUrl}
          />
        </div>
      </div>

      <div className="border-border/40 mb-12 border-t" />

      {/* INTRO */}
      <div className="bg-foreground/[0.04] border-border/40 mb-10 border p-6">
        <p className="text-accent mb-3 font-mono text-[10px] tracking-[0.2em]">
          INTRO.
        </p>
        <p className="text-foreground/65 text-sm leading-loose">
          {hl(DIGGO_META.intro)}
        </p>
      </div>

      <InfoRow label="개발 기간">
        <p className="text-foreground/70 font-mono text-sm">
          {DIGGO_META.period}
        </p>
      </InfoRow>

      <InfoRow label="구성원">
        <p className="text-foreground/70 font-mono text-sm">
          {DIGGO_META.type}
        </p>
      </InfoRow>

      <InfoRow label="기여도">
        <ContributionBadges items={DIGGO_META.contribution} />
      </InfoRow>

      <div className="mb-10">
        <SectionHeading>사용된 기술 스택</SectionHeading>
        <StackPills items={DIGGO_META.displayStack} />
      </div>

      <div className="mb-10">
        <SectionHeading>주요 기능</SectionHeading>
        <FeatureList items={DIGGO_META.features} />
      </div>

      {DIGGO_META.techRationale.length > 0 && (
        <div className="mb-10">
          <SectionHeading>기술 선정</SectionHeading>
          <TechRationale items={DIGGO_META.techRationale} />
        </div>
      )}

      <div className="mb-10">
        <SectionHeading>트러블슈팅</SectionHeading>
        <div className="bg-border/40 mb-8 grid grid-cols-1 gap-px sm:grid-cols-3">
          {DIGGO_METRICS.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
        <DiggoTabs tabs={DIGGO_TABS} />
      </div>

      <div className="mb-10">
        <SectionHeading>AI 활용 방식</SectionHeading>
        <div className="flex flex-col gap-10">
          {DIGGO_AI_PHASES.map((phase, pi) => (
            <div key={phase.phase}>
              {/* 단계 헤더 */}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-accent font-mono text-[10px] tracking-[0.2em]">
                  {String(pi + 1).padStart(2, '0')}
                </span>
                <span className="text-foreground font-bold">{phase.phase}</span>
              </div>
              {/* 툴 목록 */}
              <div className="divide-border/30 flex flex-col divide-y">
                {phase.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="grid grid-cols-1 gap-2 py-4 md:grid-cols-[10rem_1fr] md:gap-10"
                  >
                    <p className="text-accent font-mono text-sm">{tool.name}</p>
                    <p className="text-foreground/65 text-sm leading-loose">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BackLink />
    </main>
  )
}

function LionsStudyPage() {
  return (
    <main className="relative z-10 px-4 pt-28 pb-32 md:px-16 lg:px-[128px]">
      <ProjectGallery
        images={LIONS_STUDY_META.gallery}
        alt="사자들의 공부방 스크린샷"
      />

      {/* 헤더 */}
      <div className="mb-10">
        <h1
          className="text-foreground mb-3 font-bold tracking-tight"
          style={{
            fontSize: 'clamp(2rem, 5vw, 5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          {LIONS_STUDY_META.name}
        </h1>
        <div className="mb-4">
          <StatusDot status={LIONS_STUDY_META.status} />
        </div>
        <ProjectLinks
          deployUrl={LIONS_STUDY_META.deployUrl}
          githubUrl={LIONS_STUDY_META.githubUrl}
        />
      </div>

      <div className="border-border/40 mb-12 border-t" />

      {/* INTRO */}
      <div className="bg-foreground/[0.04] border-border/40 mb-10 border p-6">
        <p className="text-accent mb-3 font-mono text-[10px] tracking-[0.2em]">
          INTRO.
        </p>
        <p className="text-foreground/65 text-sm leading-loose">
          {hl(LIONS_STUDY_META.intro)}
        </p>
      </div>

      <InfoRow label="개발 기간">
        <p className="text-foreground/70 font-mono text-sm">
          {LIONS_STUDY_META.period}
        </p>
      </InfoRow>

      <InfoRow label="구성원">
        <p className="text-foreground/70 font-mono text-sm">
          {LIONS_STUDY_META.type}
        </p>
      </InfoRow>

      <InfoRow label="기여도">
        <ContributionBadges items={LIONS_STUDY_META.contribution} />
      </InfoRow>

      <div className="mb-10">
        <SectionHeading>사용된 기술 스택</SectionHeading>
        <StackPills items={LIONS_STUDY_META.displayStack} />
      </div>

      <div className="mb-10">
        <SectionHeading>주요 기능</SectionHeading>
        <FeatureList items={LIONS_STUDY_META.features} />
      </div>

      {LIONS_STUDY_META.techRationale.length > 0 && (
        <div className="mb-10">
          <SectionHeading>기술 선정</SectionHeading>
          <TechRationale items={LIONS_STUDY_META.techRationale} />
        </div>
      )}

      <div className="mb-10">
        <SectionHeading>트러블슈팅</SectionHeading>
        <div className="bg-border/40 mb-8 grid grid-cols-1 gap-px sm:grid-cols-3">
          {LIONS_STUDY_METRICS.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
        <DiggoTabs tabs={LIONS_STUDY_TABS} />
      </div>

      <BackLink />
    </main>
  )
}

function ActivioV1Page() {
  return (
    <main className="relative z-10 px-4 pt-28 pb-32 md:px-16 lg:px-[128px]">
      <div className="flex min-h-[60dvh] flex-col justify-center">
        <p className="text-accent mb-4 font-mono text-[11px] tracking-[0.2em]">
          준비 중
        </p>
        <h1
          className="text-foreground mb-2 font-bold tracking-tight"
          style={{
            fontSize: 'clamp(2rem, 5vw, 5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          {ACTIVIO_V1_META.name}
        </h1>
        <p className="text-foreground/40 mb-4 font-mono text-sm">
          {ACTIVIO_V1_META.subtitle}
        </p>
        <p className="text-foreground/50 font-mono text-sm">
          {ACTIVIO_V1_META.type}
        </p>
        <p className="text-foreground/50 mt-6 text-base">
          상세 페이지를 준비 중입니다.
        </p>
      </div>
      <BackLink />
    </main>
  )
}

function ActivioV2Page() {
  return (
    <main className="relative z-10 px-4 pt-28 pb-32 md:px-16 lg:px-[128px]">
      <div className="flex min-h-[60dvh] flex-col justify-center">
        <p className="text-accent mb-4 font-mono text-[11px] tracking-[0.2em]">
          준비 중
        </p>
        <h1
          className="text-foreground mb-2 font-bold tracking-tight"
          style={{
            fontSize: 'clamp(2rem, 5vw, 5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          {ACTIVIO_V2_META.name}
        </h1>
        <p className="text-foreground/40 mb-4 font-mono text-sm">
          {ACTIVIO_V2_META.subtitle}
        </p>
        <p className="text-foreground/50 font-mono text-sm">
          {ACTIVIO_V2_META.type}
        </p>
        <p className="text-foreground/50 mt-6 text-base">
          상세 페이지를 준비 중입니다.
        </p>
      </div>
      <BackLink />
    </main>
  )
}

// ── 라우터 ──────────────────────────────────────────────────────────────────────

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  if (slug === 'diggo')
    return (
      <>
        <Header />
        <DiggoPage />
      </>
    )
  if (slug === 'lions-study')
    return (
      <>
        <Header />
        <LionsStudyPage />
      </>
    )
  if (slug === 'activio-v1')
    return (
      <>
        <Header />
        <ActivioV1Page />
      </>
    )
  if (slug === 'activio-v2')
    return (
      <>
        <Header />
        <ActivioV2Page />
      </>
    )

  notFound()
}
