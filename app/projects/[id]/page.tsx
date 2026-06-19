import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import MetricCard from '@/components/common/MetricCard'
import DiggoTabs from '@/components/common/DiggoTabs'
import {
  DIGGO_META,
  DIGGO_METRICS,
  DIGGO_TABS,
  DIGGO_AI_NOTES,
  LIONS_STUDY_META,
  LIONS_STUDY_METRICS,
  LIONS_STUDY_TABS,
} from '@/content/projects'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return [{ id: 'diggo' }, { id: 'lions-study' }]
}

// ── 공통 레이아웃 조각 ─────────────────────────────────────────────────────────

function ProjectLinks({
  deployUrl,
  githubUrl,
}: {
  deployUrl: string
  githubUrl: string
}) {
  return (
    <div className="mb-4 flex gap-3">
      <a
        href={deployUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="border-border text-muted hover:border-accent hover:text-accent inline-flex items-center gap-2 border px-4 py-2 font-mono text-xs transition-colors duration-200"
      >
        배포 링크
        <ArrowUpRight size={12} />
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="border-border text-muted hover:border-accent hover:text-accent inline-flex items-center gap-2 border px-4 py-2 font-mono text-xs transition-colors duration-200"
      >
        GitHub
        <ArrowUpRight size={12} />
      </a>
    </div>
  )
}

function ProblemSolution({
  problem,
  solution,
}: {
  problem: string
  solution: string
}) {
  return (
    <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
      <div>
        <p className="text-muted mb-4 font-mono text-sm tracking-widest uppercase">
          Problem
        </p>
        <p className="text-muted text-base leading-loose">{problem}</p>
      </div>
      <div>
        <p className="text-muted mb-4 font-mono text-sm tracking-widest uppercase">
          Solution
        </p>
        <p className="text-muted text-base leading-loose">{solution}</p>
      </div>
    </div>
  )
}

function TechStack({
  summary,
  stack,
}: {
  summary: string
  stack: { category: string; items: string[] }[]
}) {
  return (
    <div className="mb-16">
      <p className="text-muted mb-4 font-mono text-sm tracking-widest uppercase">
        Tech
      </p>
      <p className="text-muted mb-8 text-base leading-loose">{summary}</p>
      <div className="divide-border flex flex-col divide-y">
        {stack.map(({ category, items }) => (
          <div
            key={category}
            className="grid grid-cols-[8rem_1fr] gap-6 py-4 md:grid-cols-[10rem_1fr]"
          >
            <span className="text-muted font-mono text-xs">{category}</span>
            <span className="text-foreground/80 text-base">
              {items.join('  ·  ')}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BackLink() {
  return (
    <div className="border-border border-t pt-10">
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

// ── 프로젝트별 페이지 ──────────────────────────────────────────────────────────

function DiggoPage() {
  return (
    <main className="relative z-10 px-4 pt-28 pb-32 md:px-16 lg:px-[128px]">
      {/* 헤더 */}
      <div className="mb-12">
        <div className="mb-4 flex flex-wrap items-baseline gap-4">
          <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-6xl">
            {DIGGO_META.name}
          </h1>
          <span className="text-accent font-mono text-xs tracking-widest">
            {DIGGO_META.version}
          </span>
          <span className="text-muted font-mono text-xs tracking-widest">
            {DIGGO_META.type}
          </span>
          <span className="text-muted font-mono text-xs tracking-widest">
            {DIGGO_META.period}
          </span>
        </div>
        <ProjectLinks
          deployUrl={DIGGO_META.deployUrl}
          githubUrl={DIGGO_META.githubUrl}
        />
        <p className="text-muted/60 font-mono text-xs">
          {DIGGO_META.nextVersion}
        </p>
      </div>

      {/* 아키텍처 이미지 */}
      <div className="border-border bg-surface mb-14 overflow-hidden border">
        <Image
          src={DIGGO_META.archImage}
          alt="Diggo 시스템 아키텍처"
          width={1440}
          height={810}
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      <ProblemSolution
        problem={DIGGO_META.problem}
        solution={DIGGO_META.solution}
      />

      {/* Metrics */}
      <div className="bg-border/40 mb-14 grid grid-cols-1 gap-px sm:grid-cols-3">
        {DIGGO_METRICS.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>

      <TechStack summary={DIGGO_META.tech} stack={DIGGO_META.techStack} />

      {/* 트러블슈팅 & 성능 개선 */}
      <div className="mb-20">
        <p className="text-muted mb-6 font-mono text-sm tracking-widest uppercase">
          Performance
        </p>
        <DiggoTabs tabs={DIGGO_TABS} />
      </div>

      {/* AI 활용 방식 */}
      <div className="mb-20">
        <p className="text-muted mb-8 font-mono text-sm tracking-widest uppercase">
          Claude Code 활용 방식
        </p>
        <div className="divide-border flex flex-col divide-y">
          {DIGGO_AI_NOTES.map((note) => (
            <div
              key={note.title}
              className="grid grid-cols-1 gap-3 py-7 md:grid-cols-[14rem_1fr] md:gap-10"
            >
              <p
                className={[
                  'font-mono text-base tracking-wide',
                  note.highlight ? 'text-accent' : 'text-muted',
                ].join(' ')}
              >
                {note.highlight ? '→ ' : ''}
                {note.title}
              </p>
              <p className="text-muted text-base leading-loose">{note.body}</p>
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
      {/* 헤더 */}
      <div className="mb-12">
        <div className="mb-4 flex flex-wrap items-baseline gap-4">
          <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-6xl">
            {LIONS_STUDY_META.name}
          </h1>
          <span className="text-muted font-mono text-xs tracking-widest">
            {LIONS_STUDY_META.type}
          </span>
          <span className="text-muted font-mono text-xs tracking-widest">
            {LIONS_STUDY_META.period}
          </span>
        </div>
        <ProjectLinks
          deployUrl={LIONS_STUDY_META.deployUrl}
          githubUrl={LIONS_STUDY_META.githubUrl}
        />
      </div>

      {/* 히어로 스크린샷 */}
      <div className="border-border bg-surface mb-14 overflow-hidden border">
        <Image
          src={LIONS_STUDY_META.heroImage}
          alt="사자들의 공부방 메인 화면"
          width={1440}
          height={810}
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      <ProblemSolution
        problem={LIONS_STUDY_META.problem}
        solution={LIONS_STUDY_META.solution}
      />

      {/* Metrics */}
      <div className="bg-border/40 mb-14 grid grid-cols-1 gap-px sm:grid-cols-3">
        {LIONS_STUDY_METRICS.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>

      <TechStack
        summary={LIONS_STUDY_META.tech}
        stack={LIONS_STUDY_META.techStack}
      />

      {/* 성능 개선 탭 */}
      <div className="mb-20">
        <p className="text-muted mb-6 font-mono text-sm tracking-widest uppercase">
          Performance
        </p>
        <DiggoTabs tabs={LIONS_STUDY_TABS} />
      </div>

      <BackLink />
    </main>
  )
}

// ── 라우터 ─────────────────────────────────────────────────────────────────────

export default async function ProjectPage({ params }: Props) {
  const { id } = await params

  if (id === 'diggo')
    return (
      <>
        <Header />
        <DiggoPage />
      </>
    )
  if (id === 'lions-study')
    return (
      <>
        <Header />
        <LionsStudyPage />
      </>
    )

  notFound()
}
