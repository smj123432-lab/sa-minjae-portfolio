import Reveal from '@/components/common/Reveal'
import { WORK_STEPS } from '@/content/how-i-work'

export default function HowIWorkSection() {
  return (
    <section
      id="how-i-work"
      className="px-4 py-32 md:px-16 md:py-40 lg:px-[128px]"
    >
      <div className="w-full">
        <Reveal delay={0}>
          <p className="text-muted mb-16 font-mono text-xs tracking-widest lowercase">
            04 — how i work
          </p>
        </Reveal>

        <div className="divide-border flex flex-col divide-y">
          {WORK_STEPS.map((step, i) => (
            <Reveal key={step.id} delay={0.08 + i * 0.08}>
              <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[9rem_1fr] md:gap-12">
                {/* 스텝 레이블 */}
                <div className="pt-0.5">
                  <span className="text-accent font-mono text-xs tracking-widest">
                    {step.label}
                  </span>
                </div>

                {/* 콘텐츠 */}
                <div>
                  <p className="text-foreground mb-1 text-xl font-semibold">
                    {step.title}
                  </p>
                  <p className="text-muted mb-4 font-mono text-xs tracking-widest">
                    {step.subtitle}
                  </p>
                  <p className="text-foreground/70 text-base leading-loose">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
