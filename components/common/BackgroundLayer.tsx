const NOISE_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"

export default function BackgroundLayer() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      {/* 격자선 레이어 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            'linear-gradient(var(--grid-color) 1px, transparent 1px)',
            'linear-gradient(to right, var(--grid-color) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '64px 64px',
        }}
      />

      {/* 그레인 노이즈 레이어 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${NOISE_SVG}")`,
          backgroundRepeat: 'repeat',
          opacity: 'var(--noise-opacity)',
        }}
      />
    </div>
  )
}
