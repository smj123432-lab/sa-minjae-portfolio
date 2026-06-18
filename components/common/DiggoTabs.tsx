'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import type { DiggoTab } from '@/content/projects'

interface DiggoTabsProps {
  tabs: DiggoTab[]
}

const SECTIONS = [
  { key: 'issue', label: '■ ISSUE' },
  { key: 'resolution', label: '■ RESOLUTION' },
  { key: 'result', label: '■ RESULT' },
] as const

export default function DiggoTabs({ tabs }: DiggoTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0].id)
  const active = tabs.find((t) => t.id === activeId)!

  return (
    <div>
      {/* Tab button row */}
      <div
        role="tablist"
        aria-label="트러블슈팅 탭"
        className="border-border flex border-b"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={[
                'border-t-2 px-4 py-3 font-mono text-[11px] transition-colors duration-200',
                isActive
                  ? 'border-accent text-accent'
                  : 'text-muted hover:text-foreground border-transparent',
              ].join(' ')}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          id={`tabpanel-${activeId}`}
          role="tabpanel"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
          className="pt-6"
        >
          {/* 제목 */}
          <p className="text-foreground mb-5 text-sm font-medium">
            {active.title}
          </p>

          {/* 트러블슈팅 이미지 */}
          <div className="border-border/40 bg-surface relative mb-6 w-full overflow-hidden border">
            <Image
              src={active.imageSrc}
              alt={active.title}
              width={1200}
              height={675}
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          {/* 3-3-3 명세 그리드 */}
          <div className="divide-border/40 border-border/40 grid grid-cols-1 divide-y border md:grid-cols-3 md:divide-x md:divide-y-0">
            {SECTIONS.map(({ key, label }) => (
              <div key={key} className="p-5">
                <p className="text-muted mb-4 font-mono text-[10px] tracking-[0.18em]">
                  {label}
                </p>
                <ol className="flex flex-col gap-3.5">
                  {(active[key] as string[]).map((line, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-muted mt-0.5 shrink-0 font-mono text-[10px]">
                        0{i + 1}
                      </span>
                      <p className="text-foreground text-sm leading-relaxed">
                        {line}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
