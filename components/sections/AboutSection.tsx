import Image from 'next/image'
import Reveal from '@/components/common/Reveal'
import { ABOUT_PARAGRAPHS, IDENTITY_CHIPS } from '@/content/about'

function hl(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-accent font-semibold not-italic">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
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
            <div className="relative h-72 overflow-hidden md:h-full md:min-h-[520px]">
              {/* Field photo */}
              <Image
                src="/images/field.jpg"
                alt="굴착기 현장 작업 중"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
                priority
              />

              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* FROM FIELD / TO CODE. text overlay */}
              <div className="absolute right-0 bottom-0 left-0 z-10 p-7 pt-16">
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
                  <p
                    className="text-foreground/60 text-base leading-loose md:text-lg md:leading-loose"
                    aria-label={paragraph.replace(/\*\*(.+?)\*\*/g, '$1')}
                  >
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
