import Reveal from '@/components/common/Reveal'
import { ABOUT_PARAGRAPHS, BACKGROUND_SPEC, TIMELINE } from '@/content/about'

function SpecTable() {
  return (
    <div className="font-mono text-[10px] leading-none">
      <p className="text-foreground mb-4 tracking-[0.18em]">
        BACKGROUND SPECIFICATION
      </p>
      <div className="border-border/50 border-t">
        {BACKGROUND_SPEC.map((entry) => (
          <div key={entry.key} className="border-border/40 border-b py-3.5">
            <p className="text-muted mb-2 tracking-[0.12em]">{entry.key}</p>
            {entry.values.map((v, i) => (
              <p
                key={i}
                className={i === 0 ? 'text-foreground' : 'text-foreground/50'}
              >
                {v}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-32 md:px-16 md:py-40 lg:px-[128px]">
      <div className="w-full">
        {/* 섹션 레이블 */}
        <Reveal delay={0}>
          <p className="text-muted mb-16 font-mono text-xs tracking-widest lowercase">
            01 — about
          </p>
        </Reveal>

        {/* 2컬럼 분할: 좌 스토리 / 우 제원표 */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-x-16">
          {/* 좌측: 스토리 문단 */}
          <div className="md:col-span-7">
            <div className="space-y-6">
              {ABOUT_PARAGRAPHS.map((paragraph, i) => (
                <Reveal key={i} delay={0.08 + i * 0.08}>
                  <p className="text-muted text-base leading-loose md:text-lg md:leading-loose">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* 우측: 제원표 */}
          <div className="md:col-span-5">
            <Reveal delay={0.2}>
              <SpecTable />
            </Reveal>
          </div>
        </div>

        {/* 타임라인 */}
        <div className="mt-24">
          <Reveal delay={0.1}>
            <p className="text-muted mb-8 font-mono text-xs tracking-widest lowercase">
              background
            </p>
          </Reveal>

          <div className="divide-border flex flex-col divide-y">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.period} delay={0.15 + i * 0.08}>
                <div className="grid grid-cols-[8rem_1fr] gap-6 py-6 md:grid-cols-[10rem_1fr] md:gap-10">
                  <span className="text-muted pt-0.5 font-mono text-xs">
                    {item.period}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-foreground text-base font-medium md:text-lg">
                      {item.role}
                    </span>
                    {item.description && (
                      <span className="text-muted text-base">
                        {item.description}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
