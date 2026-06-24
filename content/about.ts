export const ABOUT_PARAGRAPHS: string[] = [
  '2년간 굴착기 기사로 일했습니다. 배차는 전화 한 통에 좌우됐고, 장부는 수기였습니다. 당연하게 여겨지는 **비효율**이 이해되지 않았습니다.',
  '산재사고로 쉬던 중 우연히 코드를 만졌습니다. 작업 결과물처럼, 본인이 구조를 짠 코드가 결과물로 남는다는 게 좋았습니다. 내가 겪은 비효율을 내가 직접 고칠 수 있다는 생각에 너무 즐거웠습니다.',
  '지금도 코드를 짜기 전에 현장과 문제를 먼저 생각하고 구조를 잡습니다. 기능보다 맥락을 먼저 보는 개발자 — **"숲을 보는 개발자"**가 목표입니다.',
]

export interface SpecEntry {
  key: string
  values: string[]
}

export const BACKGROUND_SPEC: SpecEntry[] = [
  { key: 'OPERATIONAL_EXP', values: ['2 YEARS (EXCAVATOR / FORKLIFT)'] },
  { key: 'CORE_LOGIC', values: ['DISPATCH_COORDINATION', 'FIELD_SAFETY_MGMT'] },
  { key: 'BOOTCAMP', values: ['LIKELION FRONTEND 16TH', '2025.11 — 2026.06'] },
  { key: 'MOTIVATION', values: ['TRANSLATING PHYSICAL', 'PROBLEMS INTO CODE'] },
]

export interface TimelineItem {
  period: string
  role: string
  description?: string
}

export const IDENTITY_CHIPS: string[] = [
  '#현장도메인',
  '#접근성',
  '#끈기있는',
  '#문제먼저',
  '#팀플레이어',
]

export const TIMELINE: TimelineItem[] = [
  {
    period: '2023.05 — 2025.05',
    role: '굴착기 기사',
    description: '건설 현장 근무. 비효율적인 배차 구조를 직접 겪었습니다.',
  },
  {
    period: '2025.11 — 2026.05',
    role: '멋쟁이사자처럼 프론트엔드 16기',
    description: '부트캠프 수료. ACTIVIO, 사자들의 공부방 팀 프로젝트 참여.',
  },
]
