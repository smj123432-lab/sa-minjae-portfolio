export const CONTACT_META = {
  documentId: 'SAMINJAE_PORTFOLIO_2026',
  status: '그 비효율, 이제 코드로 풉니다.',
  statusLines: ['그 비효율,', '이제 코드로 풉니다.'],
  author: 'SA MINJAE',
  role: 'FRONTEND DEVELOPER — 신입',
  copyright: '© 2026 SA MINJAE — FRONTEND DEVELOPER',
}

export interface ContactChannel {
  label: string
  value: string
  href: string
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: 'EMAIL',
    value: 'smj123432@gmail.com',
    href: 'mailto:smj123432@gmail.com',
  },
  {
    label: 'GITHUB',
    value: 'github.com/smj123432-lab',
    href: 'https://github.com/smj123432-lab',
  },
  {
    label: 'BLOG',
    value: 'velog.io/@ykm123432',
    href: 'https://velog.io/@ykm123432',
  },
]
