'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useUIStore } from '@/store/uiStore'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#how-i-work', label: 'How I Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useUIStore()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe mount pattern
    setMounted(true)
  }, [])

  // Body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // mounted 이전엔 isDark를 false로 고정 → 서버/클라이언트 초기 렌더 일치
  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <>
      <header className="fixed top-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
        <div className="border-border bg-background/80 flex items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-md">
          {/* 이름 */}
          <span className="text-muted font-mono text-xs tracking-widest lowercase">
            sa minjae
          </span>

          {/* 데스크탑 내비 */}
          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="메인 내비게이션"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-foreground text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* 우측: 테마 토글 + 햄버거 */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-pressed={mounted ? isDark : false}
              aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
              className="text-muted hover:bg-surface hover:text-foreground focus-visible:outline-accent flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2"
            >
              {mounted ? (
                isDark ? (
                  <Sun size={15} />
                ) : (
                  <Moon size={15} />
                )
              ) : (
                <span className="h-[15px] w-[15px]" />
              )}
            </button>

            {/* 햄버거 — 모바일 전용 */}
            <button
              onClick={toggleMobileMenu}
              aria-pressed={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              className="text-muted hover:bg-surface hover:text-foreground focus-visible:outline-accent relative flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 md:hidden"
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                className="absolute"
              >
                <X size={16} />
              </motion.span>
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                className="absolute"
              >
                <Menu size={16} />
              </motion.span>
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 풀스크린 오버레이 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="bg-background/95 fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.05 + i * 0.06,
                  ease: [0.32, 0.72, 0, 1],
                }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-accent focus-visible:outline-accent text-2xl font-light transition-colors duration-200 focus-visible:outline focus-visible:outline-2"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
