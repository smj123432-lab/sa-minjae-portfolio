import Reveal from '@/components/common/Reveal'
import { WORK_STEPS } from '@/content/how-i-work'

export default function HowIWorkSection() {
  return (
    <section
      id="how-i-work"
      className="bg-section-howiwork border-border/40 border-t px-4 py-32 md:px-16 md:py-40 lg:px-[128px]"
    >
      <div className="w-full">
        <div className="divide-border/40 flex flex-col divide-y">
          {WORK_STEPS.map((step, i) => (
            <Reveal key={step.id} delay={0.06 + i * 0.1}>
              <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-[5rem_1fr_2fr] md:gap-16 md:py-16">
                {/* Step number */}
                <div className="flex items-start">
                  <span
                    className="text-accent font-mono leading-none font-bold"
                    style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title + subtitle */}
                <div className="flex flex-col justify-start pt-1">
                  <p
                    className="text-foreground mb-2 leading-tight font-bold"
                    style={{
                      fontSize: 'clamp(1.3rem, 1.8vw, 2rem)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {step.title}
                  </p>
                  <p className="text-accent font-mono text-xs tracking-[0.15em]">
                    {step.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="flex items-start pt-1">
                  <p className="text-foreground/65 text-base leading-loose md:text-[1.05rem]">
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
