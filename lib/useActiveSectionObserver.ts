'use client'
import { useEffect } from 'react'
import { useUIStore } from '@/store/uiStore'

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'how-i-work',
  'contact',
]

export function useActiveSectionObserver() {
  const setActiveSectionId = useUIStore((s) => s.setActiveSectionId)

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        // 뷰포트에서 가장 많이 보이는 섹션 선택
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        setActiveSectionId(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [setActiveSectionId])
}
