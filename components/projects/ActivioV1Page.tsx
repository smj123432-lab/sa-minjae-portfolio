import Link from 'next/link'
import MetricCard from '@/components/common/MetricCard'
import DiggoTabs from '@/components/common/DiggoTabs'
import ProjectGallery from '@/components/common/ProjectGallery'
import {
  ACTIVIO_V1_META,
  ACTIVIO_V1_METRICS,
  ACTIVIO_V1_TABS,
  ACTIVIO_V1_AI_PHASES,
} from '@/content/projects'
import {
  hl,
  SectionHeading,
  InfoRow,
  StatusDot,
  ProjectLinks,
  ContributionBadges,
  StackPills,
  TechRationale,
  BackLink,
} from './ProjectDetailShared'
import AiPhasesSection from './AiPhasesSection'

export default function ActivioV1Page() {
  return (
    <main className="relative z-10 px-4 pt-28 pb-32 md:px-16 lg:px-32">
      <ProjectGallery
        images={ACTIVIO_V1_META.gallery}
        alt="ACTIVIO v1 스크린샷"
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
          {ACTIVIO_V1_META.name}
        </h1>
        <div className="mb-4">
          <StatusDot status={ACTIVIO_V1_META.status} />
        </div>
        <ProjectLinks
          deployUrl={ACTIVIO_V1_META.deployUrl}
          githubUrl={ACTIVIO_V1_META.githubUrl}
        />
      </div>

      <div className="border-border/40 mb-12 border-t" />

      {/* INTRO */}
      <div className="bg-foreground/4 border-border/40 mb-10 border p-6">
        <p className="text-accent mb-3 font-mono text-[10px] tracking-[0.2em]">
          INTRO.
        </p>
        <p className="text-foreground/65 text-sm leading-loose">
          {hl(ACTIVIO_V1_META.intro)}
        </p>
      </div>

      <InfoRow label="개발 기간">
        <p className="text-foreground/70 font-mono text-sm">
          {ACTIVIO_V1_META.period}
        </p>
      </InfoRow>

      <InfoRow label="구성원 / 역할">
        <p className="text-foreground/70 font-mono text-sm">
          {ACTIVIO_V1_META.role}
        </p>
      </InfoRow>

      <InfoRow label="기여도">
        <ContributionBadges items={ACTIVIO_V1_META.contribution} />
      </InfoRow>

      <div className="mb-10">
        <SectionHeading>사용된 기술 스택</SectionHeading>
        <StackPills items={ACTIVIO_V1_META.displayStack} />
      </div>

      {ACTIVIO_V1_META.techRationale.length > 0 && (
        <div className="mb-10">
          <SectionHeading>기술 선정</SectionHeading>
          <TechRationale items={ACTIVIO_V1_META.techRationale} />
        </div>
      )}

      <div className="mb-10">
        <SectionHeading>트러블슈팅</SectionHeading>
        <div className="bg-border/40 mb-8 grid grid-cols-1 gap-px sm:grid-cols-3">
          {ACTIVIO_V1_METRICS.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
        <DiggoTabs tabs={ACTIVIO_V1_TABS} />
      </div>

      <AiPhasesSection phases={ACTIVIO_V1_AI_PHASES} />

      {ACTIVIO_V1_META.whyV2Needed && (
        <div className="mb-10">
          <SectionHeading>v2로 이어진 이유</SectionHeading>
          <div className="bg-foreground/3 border-border/40 border p-6">
            <p className="text-foreground/65 text-sm leading-loose">
              {ACTIVIO_V1_META.whyV2Needed}
            </p>
            <div className="mt-4">
              <Link
                href="/projects/activio-v2"
                className="text-accent hover:text-accent/70 inline-flex items-center gap-1.5 font-mono text-xs transition-colors duration-200"
              >
                ACTIVIO v2 보러가기 →
              </Link>
            </div>
          </div>
        </div>
      )}

      <BackLink />
    </main>
  )
}
