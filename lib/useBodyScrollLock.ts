'use client'

import { useEffect } from 'react'

// ref-count로 복수 호출자가 동일한 전역 overflow를 놓고 싸우지 않게 한다.
// 두 컴포넌트가 동시에 잠금 요청 → lockCount=2. 하나가 해제해도 나머지가 유지.
let lockCount = 0

export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return
    lockCount++
    document.body.style.overflow = 'hidden'
    return () => {
      lockCount = Math.max(0, lockCount - 1)
      if (lockCount === 0) document.body.style.overflow = ''
    }
  }, [active])
}
