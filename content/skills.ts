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
      { name: 'HTML', usedIn: ['diggo', 'lions-study'] },
      { name: 'CSS / SCSS', usedIn: ['lions-study'] },
      { name: 'JavaScript (ES6+)', usedIn: ['diggo', 'lions-study'] },
      { name: 'TypeScript', usedIn: ['diggo'] },
      { name: 'React.js', usedIn: ['diggo'] },
      { name: 'Next.js', usedIn: ['diggo'] },
      { name: 'Tailwind CSS', usedIn: ['diggo'] },
      { name: 'TanStack Query', usedIn: ['diggo'] },
      { name: 'Zustand', usedIn: ['diggo'] },
      { name: 'Zod', usedIn: ['diggo'] },
    ],
  },
  {
    category: 'Back-End',
    items: [{ name: 'Supabase', usedIn: ['diggo'] }],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', usedIn: ['diggo', 'lions-study'] },
      { name: 'GitHub', usedIn: ['diggo', 'lions-study'] },
      { name: 'Vercel', usedIn: ['diggo'] },
      { name: 'Figma', usedIn: ['diggo', 'lions-study'] },
      { name: 'Notion', usedIn: ['diggo'] },
      { name: 'Bun', usedIn: ['diggo'] },
    ],
  },
]
