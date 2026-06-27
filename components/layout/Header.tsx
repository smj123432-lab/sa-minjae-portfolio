'use client'

import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useUIStore } from '@/store/uiStore'
import { useBodyScrollLock } from '@/lib/useBodyScrollLock'
import { useActiveSectionObserver } from '@/lib/useActiveSectionObserver'

const NAV_LINKS = [
  { href: '#hero', label: 'INTRO', id: 'hero' },
  { href: '#about', label: 'ABOUT', id: 'about' },
  { href: '#skills', label: 'SKILLS', id: 'skills' },
  { href: '#projects', label: 'PROJECTS', id: 'projects' },
  { href: '#contact', label: 'CONTACT', id: 'contact' },
]

export default function Header() {
  const {
    activeSectionId,
    isMobileMenuOpen,
    toggleMobileMenu,
    setMobileMenuOpen,
  } = useUIStore()

  useActiveSectionObserver()
  useBodyScrollLock(isMobileMenuOpen)

  const activeLabel =
    NAV_LINKS.find((l) => l.id === activeSectionId)?.label ?? 'INTRO'

  return (
    <>
      {/* ── 데스크탑: pill nav ── */}
      <nav
        className="border-border/60 bg-background/80 fixed top-4 right-4 z-40 hidden items-center gap-1 rounded-full border px-2 py-1.5 backdrop-blur-md md:flex"
        aria-label="메인 내비게이션"
      >
        {NAV_LINKS.map((link) => {
          const isActive = activeSectionId === link.id
          return (
            <a
              key={link.href}
              href={link.href}
              className={[
                'rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.12em] transition-all duration-200',
                isActive
                  ? 'bg-foreground text-background font-semibold'
                  : 'text-foreground/55 hover:text-foreground',
              ].join(' ')}
            >
              {link.label}
            </a>
          )
        })}
      </nav>

      {/* ── 모바일: 활성 섹션 이름 + 햄버거 ── */}
      <div className="fixed top-5 right-5 z-40 flex items-center gap-3 md:hidden">
        <span className="text-accent font-mono text-[10px] font-medium tracking-[0.18em]">
          {activeLabel}
        </span>
        <button
          onClick={toggleMobileMenu}
          aria-pressed={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          className="text-foreground/40 hover:text-foreground focus-visible:outline-accent transition-colors duration-200 focus-visible:outline focus-visible:outline-2"
        >
          {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* ── 모바일 풀스크린 오버레이 ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
            className="bg-background/95 fixed inset-0 z-30 flex flex-col items-center justify-center gap-9 backdrop-blur-xl"
          >
            {NAV_LINKS.map((link, i) => {
              const isActive = activeSectionId === link.id
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.32,
                    delay: 0.04 + i * 0.055,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={[
                    'font-mono text-lg tracking-[0.15em] transition-colors duration-200',
                    isActive
                      ? 'text-accent font-medium'
                      : 'text-foreground/50 hover:text-foreground',
                  ].join(' ')}
                >
                  {link.label}
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
