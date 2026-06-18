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
} from '@/content/projects'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return [{ id: 'diggo' }]
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params

  if (id !== 'diggo') notFound()

  return (
    <>
      <Header />
      <main className="relative z-10 px-4 pt-28 pb-32 md:px-16 lg:px-[128px]">
        {/* 프로젝트 헤더 */}
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
          <div className="mb-4 flex gap-3">
            <a
              href={DIGGO_META.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-muted hover:border-accent hover:text-accent inline-flex items-center gap-2 border px-4 py-2 font-mono text-xs transition-colors duration-200"
            >
              배포 링크
              <ArrowUpRight size={12} />
            </a>
            <a
              href={DIGGO_META.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-muted hover:border-accent hover:text-accent inline-flex items-center gap-2 border px-4 py-2 font-mono text-xs transition-colors duration-200"
            >
              GitHub
              <ArrowUpRight size={12} />
            </a>
          </div>
          <p className="text-muted/60 font-mono text-xs">
            {DIGGO_META.nextVersion}
          </p>
        </div>

        {/* 아키텍처 도면 */}
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

        {/* Problem / Solution */}
        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-muted mb-4 font-mono text-sm tracking-widest uppercase">
              Problem
            </p>
            <p className="text-muted text-sm leading-loose">
              {DIGGO_META.problem}
            </p>
          </div>
          <div>
            <p className="text-muted mb-4 font-mono text-sm tracking-widest uppercase">
              Solution
            </p>
            <p className="text-muted text-sm leading-loose">
              {DIGGO_META.solution}
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="bg-border/40 mb-14 grid grid-cols-1 gap-px sm:grid-cols-3">
          {DIGGO_METRICS.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        {/* Tech */}
        <div className="mb-16">
          <p className="text-muted mb-4 font-mono text-sm tracking-widest uppercase">
            Tech
          </p>
          <p className="text-muted mb-8 text-sm leading-loose">
            {DIGGO_META.tech}
          </p>
          <div className="divide-border flex flex-col divide-y">
            {DIGGO_META.techStack.map(({ category, items }) => (
              <div
                key={category}
                className="grid grid-cols-[8rem_1fr] gap-6 py-4 md:grid-cols-[10rem_1fr]"
              >
                <span className="text-muted font-mono text-xs">{category}</span>
                <span className="text-foreground/80 text-sm">
                  {items.join('  ·  ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 트러블슈팅 탭 */}
        <div className="mb-20">
          <p className="text-muted mb-6 font-mono text-sm tracking-widest uppercase">
            Troubleshooting
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
                    'font-mono text-sm tracking-wide',
                    note.highlight ? 'text-accent' : 'text-muted',
                  ].join(' ')}
                >
                  {note.highlight ? '→ ' : ''}
                  {note.title}
                </p>
                <p className="text-muted text-sm leading-loose">{note.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 목록으로 */}
        <div className="border-border border-t pt-10">
          <Link
            href="/#projects"
            className="text-muted hover:text-foreground inline-flex items-center gap-2.5 font-mono text-sm transition-colors duration-200"
          >
            <ArrowLeft size={15} />
            목록으로
          </Link>
        </div>
      </main>
    </>
  )
}
