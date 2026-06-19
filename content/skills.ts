export interface SkillGroup {
  category: string
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    category: 'Language',
    items: ['HTML', 'CSS / SCSS', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    category: 'Framework & Library',
    items: [
      'React.js',
      'Next.js',
      'Next.js API Routes',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
    ],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'Bun', 'Figma', 'Notion', 'Discord'],
  },
]
