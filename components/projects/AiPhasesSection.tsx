import type { AIPhase } from '@/content/projects'
import { SectionHeading } from './ProjectDetailShared'

export default function AiPhasesSection({ phases }: { phases: AIPhase[] }) {
  return (
    <div className="mb-10">
      <SectionHeading>AI 활용 방식</SectionHeading>
      <div className="flex flex-col gap-10">
        {phases.map((phase, pi) => (
          <div key={phase.phase}>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-accent font-mono text-[10px] tracking-[0.2em]">
                {String(pi + 1).padStart(2, '0')}
              </span>
              <span className="text-foreground font-bold">{phase.phase}</span>
            </div>
            <div className="divide-border/30 flex flex-col divide-y">
              {phase.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="grid grid-cols-1 gap-2 py-4 md:grid-cols-[10rem_1fr] md:gap-10"
                >
                  <p className="text-accent font-mono text-sm">{tool.name}</p>
                  <p className="text-foreground/65 text-sm leading-loose">
                    {tool.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
