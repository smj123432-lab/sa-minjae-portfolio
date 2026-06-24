import { ChevronDown } from 'lucide-react'
import Reveal from '@/components/common/Reveal'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-section-hero relative flex min-h-screen flex-col overflow-hidden px-4 pt-24 pb-10 md:px-16 lg:px-[128px]"
    >
      {/* Main content — vertically centered in remaining space */}
      <div className="relative z-10 flex flex-1 flex-col justify-center">
        <Reveal delay={0}>
          <p className="text-muted mb-10 font-mono text-base tracking-[0.2em]">
            신입 프론트엔드 개발자
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1
            className="text-foreground leading-[0.87] font-bold"
            style={{
              fontSize: 'clamp(3.5rem, 13vw, 14rem)',
              letterSpacing: '-0.04em',
            }}
          >
            SA MINJAE
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="border-border my-8 border-t" />
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="text-foreground/65 leading-[1.1] font-bold break-keep"
            style={{
              fontSize: 'clamp(1.5rem, 3.8vw, 5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            비효율을 견디지 못해서
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <p
            className="text-foreground/65 leading-[1.1] font-bold break-keep"
            style={{
              fontSize: 'clamp(1.5rem, 3.8vw, 5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            개발자가 됐다.
          </p>
        </Reveal>
      </div>

      {/* SCROLL DOWN — 하단 중앙 고정 */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <Reveal delay={0.4}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-foreground font-mono text-[11px] tracking-[0.35em] uppercase">
              scroll down
            </span>
            <ChevronDown
              size={18}
              className="text-foreground motion-safe:animate-bounce"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
