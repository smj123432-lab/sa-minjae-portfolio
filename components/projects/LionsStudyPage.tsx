import MetricCard from '@/components/common/MetricCard'
import DiggoTabs from '@/components/common/DiggoTabs'
import ProjectGallery from '@/components/common/ProjectGallery'
import {
  LIONS_STUDY_META,
  LIONS_STUDY_METRICS,
  LIONS_STUDY_TABS,
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

export default function LionsStudyPage() {
  return (
    <main className="relative z-10 px-4 pt-28 pb-32 md:px-16 lg:px-32">
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
      <div className="bg-foreground/4 border-border/40 mb-10 border p-6">
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
