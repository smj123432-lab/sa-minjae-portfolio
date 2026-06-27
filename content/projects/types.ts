export interface ProjectListItem {
  id: string
  name: string
  type: string
  period: string
  available: boolean
}

export interface ProjectCard {
  id: string
  name: string
  type: string
  period: string
  available: boolean
  thumbnail: string | null
  cardStack: string[]
  deployUrl: string
  githubUrl: string
}

export interface DiggoTab {
  id: string
  label: string
  title: string
  imageSrc: string
  issue: [string, string, string]
  resolution: [string, string, string]
  result: [string, string, string]
}

export interface MetricItem {
  label: string
  before: string
  after: string
  delta: string
}

export interface TechRationaleItem {
  tech: string
  reason: string
}

export interface AITool {
  name: string
  desc: string
}

export interface AIPhase {
  phase: string
  tools: AITool[]
}
