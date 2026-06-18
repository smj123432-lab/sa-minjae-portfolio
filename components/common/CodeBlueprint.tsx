const FG = 'var(--foreground)'

export default function CodeBlueprint() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill={FG}
          stroke={FG}
          fontFamily="'Geist Mono', ui-monospace, monospace"
          fontSize="9.5"
          strokeWidth="0.5"
          opacity="0.25"
        >
          {/* ── 아키텍처 다이어그램 ── 우측 상단 */}
          <g transform="translate(760, 110)">
            {/* Driver 박스 */}
            <rect x="0" y="0" width="100" height="38" rx="2" fill="none" />
            <text x="50" y="14" textAnchor="middle" fontSize="8" opacity="0.7">
              entity
            </text>
            <text x="50" y="28" textAnchor="middle" fontWeight="600">
              Driver
            </text>

            {/* WorkOrder 박스 */}
            <rect x="160" y="0" width="120" height="38" rx="2" fill="none" />
            <text x="220" y="14" textAnchor="middle" fontSize="8" opacity="0.7">
              entity
            </text>
            <text x="220" y="28" textAnchor="middle" fontWeight="600">
              WorkOrder
            </text>

            {/* Driver → WorkOrder 화살표 */}
            <line x1="100" y1="19" x2="158" y2="19" />
            <polyline points="153,15 158,19 153,23" fill="none" />

            {/* Manager 박스 */}
            <rect x="160" y="72" width="120" height="38" rx="2" fill="none" />
            <text x="220" y="86" textAnchor="middle" fontSize="8" opacity="0.7">
              entity
            </text>
            <text x="220" y="100" textAnchor="middle" fontWeight="600">
              Manager
            </text>

            {/* WorkOrder → Manager 화살표 */}
            <line x1="220" y1="38" x2="220" y2="70" />
            <polyline points="216,65 220,70 224,65" fill="none" />

            {/* RLS Policy 박스 */}
            <rect x="340" y="36" width="130" height="38" rx="2" fill="none" />
            <text x="405" y="50" textAnchor="middle" fontSize="8" opacity="0.7">
              policy
            </text>
            <text x="405" y="64" textAnchor="middle" fontWeight="600">
              RLS Check
            </text>

            {/* WorkOrder → RLS 화살표 */}
            <line x1="280" y1="19" x2="338" y2="55" />
            <polyline points="333,52 338,55 337,49" fill="none" />
          </g>

          {/* ── TypeScript Interface ── 우측 중단 */}
          <g transform="translate(900, 310)">
            <text x="0" dy="0">
              interface WorkOrder &#123;
            </text>
            <text x="0" dy="16">
              {'  '}id<tspan opacity="0.6">: string</tspan>
            </text>
            <text x="0" dy="32">
              {'  '}driver_id<tspan opacity="0.6">: string</tspan>
            </text>
            <text x="0" dy="48">
              {'  '}manager_id<tspan opacity="0.6">: string</tspan>
            </text>
            <text x="0" dy="64">
              {'  '}status<tspan opacity="0.6">: WorkStatus</tspan>
            </text>
            <text x="0" dy="80">
              {'  '}scheduled_at<tspan opacity="0.6">: Date</tspan>
            </text>
            <text x="0" dy="96">
              {'  '}rating<tspan opacity="0.6">?: number</tspan>
            </text>
            <text x="0" dy="112">
              &#125;
            </text>
            <line x1="0" y1="120" x2="220" y2="120" opacity="0.3" />
            <text x="0" dy="138">
              type WorkStatus =
            </text>
            <text x="0" dy="154">
              {'  '}
              <tspan opacity="0.6">| </tspan>&apos;pending&apos;
            </text>
            <text x="0" dy="170">
              {'  '}
              <tspan opacity="0.6">| </tspan>&apos;confirmed&apos;
            </text>
            <text x="0" dy="186">
              {'  '}
              <tspan opacity="0.6">| </tspan>&apos;completed&apos;
            </text>
            <text x="0" dy="202">
              {'  '}
              <tspan opacity="0.6">| </tspan>&apos;cancelled&apos;
            </text>
          </g>

          {/* ── RLS Policy SQL ── 우측 하단 */}
          <g transform="translate(760, 560)">
            <text x="0" dy="0" opacity="0.5">
              {'-- Row Level Security'}
            </text>
            <text x="0" dy="16">
              CREATE POLICY <tspan opacity="0.7">&apos;driver_own&apos;</tspan>
            </text>
            <text x="0" dy="32">
              {'  '}ON work_orders
            </text>
            <text x="0" dy="48">
              {'  '}FOR SELECT
            </text>
            <text x="0" dy="64">
              {'  '}USING (
            </text>
            <text x="0" dy="80">
              {'    '}auth.uid() = driver_id
            </text>
            <text x="0" dy="96">
              {'  '});
            </text>
            <line x1="0" y1="106" x2="280" y2="106" opacity="0.3" />
            <text x="0" dy="122" opacity="0.5">
              {'-- 소장 접근 제어'}
            </text>
            <text x="0" dy="138">
              CREATE POLICY <tspan opacity="0.7">&apos;manager_own&apos;</tspan>
            </text>
            <text x="0" dy="154">
              {'  '}ON work_orders
            </text>
            <text x="0" dy="170">
              {'  '}FOR ALL
            </text>
            <text x="0" dy="186">
              {'  '}USING (
            </text>
            <text x="0" dy="202">
              {'    '}auth.uid() = manager_id
            </text>
            <text x="0" dy="218">
              {'  '});
            </text>
          </g>

          {/* ── 유틸 함수 ── 우측 상단 끝 */}
          <g transform="translate(1120, 160)">
            <text x="0" dy="0" opacity="0.5">
              {'// 배차 매칭 로직'}
            </text>
            <text x="0" dy="16">
              async function matchDriver(
            </text>
            <text x="0" dy="32">
              {'  '}order<tspan opacity="0.6">: WorkOrder</tspan>,
            </text>
            <text x="0" dy="48">
              {'  '}available<tspan opacity="0.6">: Driver[]</tspan>
            </text>
            <text x="0" dy="64">
              )<tspan opacity="0.6">: Promise&lt;Driver&gt;</tspan> &#123;
            </text>
            <text x="0" dy="80">
              {'  '}return available
            </text>
            <text x="0" dy="96">
              {'    '}.filter(d =&gt; d.rating &gt;= 4.0)
            </text>
            <text x="0" dy="112">
              {'    '}.sort(byProximity)
            </text>
            <text x="0" dy="128">
              {'    '}.at(0)
            </text>
            <text x="0" dy="144">
              &#125;
            </text>
          </g>

          {/* ── 커넥팅 라인 (회로도 느낌) ── */}
          <g opacity="0.4">
            <line x1="1050" y1="310" x2="1050" y2="200" />
            <line x1="760" y1="500" x2="760" y2="560" />
            <line x1="1050" y1="200" x2="1120" y2="200" />
          </g>
        </g>
      </svg>
    </div>
  )
}
