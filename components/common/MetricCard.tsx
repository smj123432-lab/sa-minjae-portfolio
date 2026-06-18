import type { MetricItem } from '@/content/projects'

export default function MetricCard({
  label,
  before,
  after,
  delta,
}: MetricItem) {
  return (
    <div className="border-border bg-surface flex flex-col gap-3 border p-5">
      <p className="text-muted font-mono text-[10px] tracking-widest uppercase">
        {label}
      </p>
      <div className="flex items-baseline gap-2 font-mono">
        <span className="text-foreground/50 text-lg">{before}</span>
        <span className="text-muted text-xs">──▶</span>
        <span className="text-accent text-lg font-medium">{after}</span>
      </div>
      <p className="text-accent font-mono text-xs">{delta}</p>
    </div>
  )
}
