import Reveal from '@/components/common/Reveal'
import { SKILLS } from '@/content/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-32 md:px-12 md:py-40 lg:px-24">
      <div className="mx-auto w-full max-w-5xl">
        {/* 섹션 레이블 */}
        <Reveal delay={0}>
          <p className="text-muted mb-16 font-mono text-xs tracking-widest lowercase">
            02 — skills
          </p>
        </Reveal>

        {/* 스킬 테이블 */}
        <div className="divide-border divide-y">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={0.08 + i * 0.08}>
              <div className="grid grid-cols-[8rem_1fr] gap-6 py-6 md:grid-cols-[10rem_1fr] md:gap-10">
                {/* 카테고리 */}
                <span className="text-muted pt-0.5 font-mono text-xs">
                  {group.category}
                </span>

                {/* 기술 목록 */}
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {group.items.map((item, j) => (
                    <span
                      key={item}
                      className="text-foreground text-sm md:text-base"
                    >
                      {item}
                      {j < group.items.length - 1 && (
                        <span className="text-border ml-3" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
