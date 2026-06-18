import { ChevronDown } from 'lucide-react'
import Reveal from '@/components/common/Reveal'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center px-6 pt-24 pb-16 md:px-12 lg:px-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* 이름 · 직함 */}
        <Reveal delay={0}>
          <p className="text-muted mb-8 font-mono text-xs tracking-widest lowercase">
            sa minjae · frontend developer
          </p>
        </Reveal>

        {/* 원인 */}
        <Reveal delay={0.1}>
          <p className="text-muted mb-2 text-xl font-light md:text-2xl">
            비효율을 견디지 못해서
          </p>
        </Reveal>

        {/* 결론 — h1 */}
        <Reveal delay={0.2}>
          <h1
            className="text-foreground mb-10 text-5xl font-bold break-keep md:text-7xl lg:text-8xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            개발자가 됐다.
          </h1>
        </Reveal>

        {/* 서브카피 */}
        <Reveal delay={0.3}>
          <p className="text-muted mb-12 text-base md:text-lg">
            현장에서 본 문제를, 이제 코드로 푼다.
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="flex flex-wrap items-center gap-3">
            {/* Primary CTA — 액센트 1곳 */}
            <a
              href="#projects"
              className="group bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:outline-accent flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              프로젝트 보기
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:bg-white/10">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="mailto:smj123432@gmail.com"
              className="border-border text-foreground hover:bg-surface focus-visible:outline-accent rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              연락하기
            </a>
          </div>
        </Reveal>
      </div>

      {/* 스크롤 힌트 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown
          size={20}
          className="text-muted motion-safe:animate-pulse"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
