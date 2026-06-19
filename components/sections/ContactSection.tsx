import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/common/Reveal'
import { CONTACT_META, CONTACT_CHANNELS } from '@/content/contact'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-border/40 border-t px-4 pt-20 pb-16 md:px-16 lg:px-[128px]"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:gap-24">
        {/* 좌측: 문서 메타 블록 */}
        <Reveal delay={0}>
          <div className="flex flex-col gap-7">
            <div>
              <p className="text-muted mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                Document_ID
              </p>
              <p className="text-foreground font-mono text-base">
                {CONTACT_META.documentId}
              </p>
            </div>

            <div>
              <p className="text-muted mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                Status
              </p>
              <p className="text-accent font-mono text-base">
                {CONTACT_META.status}
              </p>
            </div>

            <div>
              <p className="text-muted mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                Author
              </p>
              <p className="text-foreground font-mono text-base">
                {CONTACT_META.author}
              </p>
              <p className="text-muted font-mono text-sm">
                {CONTACT_META.role}
              </p>
            </div>
          </div>
        </Reveal>

        {/* 우측: 채널 블록 */}
        <div className="flex flex-col gap-7">
          {CONTACT_CHANNELS.map((channel, i) => (
            <Reveal key={channel.label} delay={0.1 + i * 0.08}>
              <div>
                <p className="text-muted mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                  {channel.label}
                </p>
                <a
                  href={channel.href}
                  target={
                    channel.href.startsWith('mailto') ? undefined : '_blank'
                  }
                  rel={
                    channel.href.startsWith('mailto')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="text-foreground hover:text-accent inline-flex items-center gap-1.5 font-mono text-base transition-colors duration-200"
                >
                  {channel.value}
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* 카피라이트 */}
      <Reveal delay={0.24}>
        <div className="border-border/40 mt-16 border-t pt-8">
          <p className="text-muted font-mono text-[10px] tracking-widest">
            {CONTACT_META.copyright}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
