import { Mail, GitBranch, PenLine, ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/common/Reveal'
import { CONTACT_META, CONTACT_CHANNELS } from '@/content/contact'
import type { ComponentType } from 'react'

const ICON_MAP: Record<
  string,
  ComponentType<{ size?: number; className?: string }>
> = {
  EMAIL: Mail,
  GITHUB: GitBranch,
  BLOG: PenLine,
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-border/40 bg-section-contact border-t px-4 pt-24 pb-16 md:px-16 lg:px-[128px]"
    >
      {/* Name */}
      <Reveal delay={0.03}>
        <p className="text-muted mb-4 font-mono text-[11px] tracking-[0.25em]">
          SA MINJAE — FRONTEND DEVELOPER
        </p>
      </Reveal>

      {/* Headline */}
      <Reveal delay={0.06}>
        <h2
          className="mb-16 font-sans leading-[1.1] font-bold text-white"
          style={{
            fontSize: 'clamp(1.8rem, 3.8vw, 4rem)',
            letterSpacing: '-0.02em',
          }}
        >
          {CONTACT_META.statusLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
      </Reveal>

      {/* Link cards */}
      <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CONTACT_CHANNELS.map((channel, i) => {
          const Icon = ICON_MAP[channel.label]
          const isMailto = channel.href.startsWith('mailto')
          return (
            <Reveal key={channel.label} delay={0.12 + i * 0.08}>
              <a
                href={channel.href}
                target={isMailto ? undefined : '_blank'}
                rel={isMailto ? undefined : 'noopener noreferrer'}
                className="border-border/40 hover:border-accent/60 bg-surface group hover:bg-accent/[0.03] flex flex-col gap-5 border p-7 transition-all duration-200"
              >
                {/* Icon */}
                {Icon && (
                  <Icon
                    size={22}
                    className="text-foreground/30 group-hover:text-accent transition-colors duration-200"
                  />
                )}
                {/* Label */}
                <div>
                  <p className="text-muted mb-1.5 font-mono text-[10px] tracking-[0.2em]">
                    {channel.label}
                  </p>
                  <p className="text-foreground/70 flex items-center gap-1.5 font-mono text-sm break-all">
                    {channel.value}
                    <ArrowUpRight size={12} className="shrink-0 opacity-50" />
                  </p>
                </div>
              </a>
            </Reveal>
          )
        })}
      </div>

      {/* Footer bar */}
      <Reveal delay={0.38}>
        <div className="border-border/40 flex items-center justify-between border-t pt-8">
          <p className="text-muted font-mono text-[10px] tracking-widest">
            {CONTACT_META.copyright}
          </p>
          <p className="text-muted font-mono text-[10px] tracking-widest">
            {CONTACT_META.documentId}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
