export interface SkillItem {
  name: string
  usedIn: string[] // project slugs
}

export interface SkillGroup {
  category: string
  items: SkillItem[]
}

export const SKILLS: SkillGroup[] = [
  {
    category: 'Front-End',
    items: [
      { name: 'HTML', usedIn: ['lions-study'] },
      { name: 'CSS / SCSS', usedIn: ['lions-study'] },
      { name: 'JavaScript (ES6+)', usedIn: ['lions-study'] },
      { name: 'TypeScript', usedIn: ['diggo', 'activio-v1', 'activio-v2'] },
      { name: 'React.js', usedIn: ['diggo', 'activio-v1', 'activio-v2'] },
      { name: 'Next.js', usedIn: ['diggo', 'activio-v1', 'activio-v2'] },
      { name: 'Tailwind CSS', usedIn: ['diggo', 'activio-v1', 'activio-v2'] },
      { name: 'TanStack Query', usedIn: ['diggo', 'activio-v1', 'activio-v2'] },
      { name: 'Zustand', usedIn: ['diggo', 'activio-v1', 'activio-v2'] },
      { name: 'Zod', usedIn: ['activio-v1', 'activio-v2'] },
    ],
  },
  {
    category: 'Infra',
    items: [
      { name: 'Supabase', usedIn: ['diggo', 'activio-v1', 'activio-v2'] },
      { name: 'Vercel', usedIn: ['diggo', 'activio-v1', 'activio-v2'] },
      { name: 'Bun', usedIn: ['diggo'] },
    ],
  },
  {
    category: 'AI 활용',
    items: [
      { name: 'Claude', usedIn: ['diggo', 'activio-v1'] },
      { name: 'Claude Code', usedIn: ['diggo', 'activio-v2'] },
      { name: 'Gemini', usedIn: ['diggo', 'activio-v2'] },
    ],
  },
]
