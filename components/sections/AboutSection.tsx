import Reveal from '@/components/common/Reveal'
import { ABOUT_PARAGRAPHS, TIMELINE } from '@/content/about'

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-32 md:px-12 md:py-40 lg:px-24">
      <div className="mx-auto w-full max-w-5xl">
        {/* 섹션 아이덴티티 */}
        <Reveal delay={0}>
          <p className="text-muted mb-6 font-mono text-xs tracking-widest lowercase">
            01 — about
          </p>
        </Reveal>

        {/* 소개 문단 */}
        <div className="mb-24 max-w-2xl space-y-5">
          {ABOUT_PARAGRAPHS.map((paragraph, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="text-muted text-base leading-relaxed md:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        {/* 타임라인 */}
        <Reveal delay={0.1}>
          <p className="text-muted mb-6 font-mono text-xs tracking-widest lowercase">
            background
          </p>
        </Reveal>

        <div className="divide-border flex flex-col divide-y">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.period} delay={0.15 + i * 0.08}>
              <div className="grid grid-cols-[8rem_1fr] gap-6 py-6 md:grid-cols-[10rem_1fr] md:gap-10">
                {/* 기간 */}
                <span className="text-muted pt-0.5 font-mono text-xs">
                  {item.period}
                </span>

                {/* 내용 */}
                <div className="flex flex-col gap-1">
                  <span className="text-foreground text-sm font-medium md:text-base">
                    {item.role}
                  </span>
                  {item.description && (
                    <span className="text-muted text-sm">
                      {item.description}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
