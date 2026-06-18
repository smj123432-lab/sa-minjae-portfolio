'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
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
  const [lightbox, setLightbox] = useState(false)
  const active = tabs.find((t) => t.id === activeId)!

  // ESC로 닫기
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  // 라이트박스 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightbox])

  return (
    <>
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
            <p className="text-foreground mb-5 text-base font-medium">
              {active.title}
            </p>

            {/* 이미지(좌) + 명세(우) 2열 레이아웃 */}
            <div className="bg-border/40 grid grid-cols-1 gap-px md:grid-cols-[1.1fr_1fr]">
              {/* 좌: 이미지 — 클릭 시 라이트박스 */}
              <button
                onClick={() => setLightbox(true)}
                aria-label="이미지 확대"
                className="bg-surface group relative overflow-hidden text-left"
              >
                <Image
                  src={active.imageSrc}
                  alt={active.title}
                  width={1200}
                  height={675}
                  className="h-full w-full object-contain transition-opacity duration-200 group-hover:opacity-80"
                  priority
                />
                <div className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-sm bg-black/60 px-2.5 py-1.5 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                  <ZoomIn size={12} className="text-white" />
                  <span className="font-mono text-[10px] text-white">확대</span>
                </div>
              </button>

              {/* 우: ISSUE / RESOLUTION / RESULT 세로 */}
              <div className="bg-surface divide-border/40 flex flex-col divide-y">
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
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 라이트박스 */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[90vw]"
            >
              <Image
                src={active.imageSrc}
                alt={active.title}
                width={1600}
                height={900}
                className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
              />
              <button
                onClick={() => setLightbox(false)}
                aria-label="닫기"
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              >
                <X size={14} />
              </button>
            </motion.div>
            <p className="absolute bottom-6 font-mono text-[11px] text-white/40">
              ESC 또는 클릭하여 닫기
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
