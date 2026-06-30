import MetricCard from '@/components/common/MetricCard'
import DiggoTabs from '@/components/common/DiggoTabs'
import ProjectGallery from '@/components/common/ProjectGallery'
import {
  DIGGO_META,
  DIGGO_METRICS,
  DIGGO_TABS,
  DIGGO_AI_PHASES,
} from '@/content/projects'
import {
  hl,
  SectionHeading,
  InfoRow,
  StatusDot,
  ProjectLinks,
  ContributionBadges,
  StackPills,
  FeatureList,
  TechRationale,
  BackLink,
} from './ProjectDetailShared'
import AiPhasesSection from './AiPhasesSection'

export default function DiggoPage() {
  return (
    <main className="relative z-10 px-4 pt-28 pb-32 md:px-16 lg:px-32">
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
      <div className="bg-foreground/4 border-border/40 mb-10 border p-6">
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
        <SectionHeading>트러블슈팅 및 성능개선</SectionHeading>
        <div className="bg-border/40 mb-8 grid grid-cols-1 gap-px sm:grid-cols-3">
          {DIGGO_METRICS.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
        <DiggoTabs tabs={DIGGO_TABS} />
      </div>

      <AiPhasesSection phases={DIGGO_AI_PHASES} />

      <BackLink />
    </main>
  )
}
