import Reveal from '@/components/common/Reveal'
import { ABOUT_PARAGRAPHS, IDENTITY_CHIPS } from '@/content/about'

function hl(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-accent font-medium">
        {part}
      </span>
    ) : (
      part
    )
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-section-about border-border/40 border-t px-4 py-32 md:px-16 md:py-40 lg:px-[128px]"
    >
      <div className="w-full">
        {/* Asymmetric 2-column: left = photo / right = body */}
        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-12 md:gap-12">
          {/* Left: Photo placeholder — 사진 촬영 후 <Image>로 교체 */}
          <Reveal delay={0.04} className="md:col-span-5">
            <div className="relative min-h-[400px] overflow-hidden md:min-h-full">
              {/* Placeholder background */}
              <div className="bg-foreground/[0.15] border-border/50 absolute inset-0 border" />

              {/* Placeholder indicator */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="border-border/40 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-muted/40"
                    aria-hidden="true"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="text-muted/40 font-mono text-[10px] tracking-[0.25em] uppercase">
                  이미지 예정
                </p>
              </div>

              {/* Display text overlay — 사진 추가 후에도 유지 */}
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-7 pt-16">
                <span className="block text-sm leading-none font-light text-white/40">
                  FROM
                </span>
                <span
                  className="block leading-[0.85] font-black text-white"
                  style={{
                    fontSize: 'clamp(2.5rem, 5.5vw, 7rem)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  FIELD
                </span>
                <span className="mt-1 block text-sm leading-none font-light text-white/40">
                  TO CODE.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: body paragraphs + chips */}
          <div className="flex flex-col justify-center md:col-span-7">
            <div className="bg-background/80 mb-8 space-y-6 px-6 py-7 backdrop-blur-sm md:px-8">
              {ABOUT_PARAGRAPHS.map((paragraph, i) => (
                <Reveal key={i} delay={0.1 + i * 0.09}>
                  <p className="text-foreground/60 text-base leading-loose md:text-lg md:leading-loose">
                    {hl(paragraph)}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Identity chips */}
            <Reveal delay={0.32}>
              <div className="flex flex-wrap gap-2">
                {IDENTITY_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className={
                      chip === '#현장도메인'
                        ? 'border-accent/60 text-accent cursor-default rounded-full border px-3 py-1.5 font-mono text-xs'
                        : 'border-border/60 text-muted hover:border-accent/50 hover:text-accent cursor-default rounded-full border px-3 py-1.5 font-mono text-xs transition-colors duration-200'
                    }
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
