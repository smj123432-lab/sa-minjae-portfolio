export const CONTACT_META = {
  documentId: 'SAMINJAE_PORTFOLIO_2026',
  status: 'OPEN — SEEKING FIRST POSITION',
  author: 'SA MINJAE',
  role: 'FRONTEND DEVELOPER',
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
]
