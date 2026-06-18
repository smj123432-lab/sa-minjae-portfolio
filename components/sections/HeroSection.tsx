import { ChevronDown } from 'lucide-react'
import Reveal from '@/components/common/Reveal'

const FG = 'var(--foreground)'

function HeroWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-[58%] md:block"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 840 900"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill={FG}
          stroke={FG}
          fontFamily="'Geist Mono', ui-monospace, monospace"
          fontSize="11"
          strokeWidth="0.5"
          opacity="0.03"
        >
          {/* NEXT.JS APP ROUTER */}
          <rect x="220" y="80" width="400" height="76" rx="2" fill="none" />
          <text x="420" y="108" textAnchor="middle" fontSize="9">
            app layer
          </text>
          <text
            x="420"
            y="130"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
          >
            NEXT.JS APP ROUTER
          </text>
          <text x="420" y="148" textAnchor="middle" fontSize="9" opacity="0.6">
            PPR · Server Components · API Routes
          </text>

          {/* Arrow → Supabase */}
          <circle cx="420" cy="156" r="3" stroke="none" />
          <line x1="420" y1="156" x2="420" y2="210" />
          <circle cx="420" cy="210" r="3" stroke="none" />
          <polyline points="414,205 420,210 426,205" fill="none" />
          <text x="432" y="192" fontSize="8" opacity="0.6">
            HTTP / Edge Runtime
          </text>

          {/* SUPABASE */}
          <rect x="60" y="210" width="720" height="100" rx="2" fill="none" />
          <text x="420" y="238" textAnchor="middle" fontSize="9">
            infrastructure
          </text>
          <text
            x="420"
            y="264"
            textAnchor="middle"
            fontSize="15"
            fontWeight="700"
          >
            SUPABASE
          </text>
          <text x="420" y="288" textAnchor="middle" fontSize="9" opacity="0.6">
            PostgreSQL · Row Level Security · Auth · Realtime
          </text>

          {/* Fork junction */}
          <line
            x1="60"
            y1="340"
            x2="780"
            y2="340"
            strokeWidth="0.4"
            opacity="0.5"
          />
          <circle cx="220" cy="340" r="3" stroke="none" />
          <circle cx="620" cy="340" r="3" stroke="none" />
          <line x1="220" y1="340" x2="220" y2="398" />
          <polyline points="214,393 220,398 226,393" fill="none" />
          <line x1="620" y1="340" x2="620" y2="398" />
          <polyline points="614,393 620,398 626,393" fill="none" />
          <text x="252" y="378" fontSize="8" opacity="0.5">
            direct query
          </text>
          <text x="512" y="378" fontSize="8" opacity="0.5">
            policy check
          </text>

          {/* POSTGRESQL */}
          <rect x="60" y="398" width="320" height="70" rx="2" fill="none" />
          <text x="220" y="424" textAnchor="middle" fontSize="9">
            database
          </text>
          <text
            x="220"
            y="450"
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
          >
            POSTGRESQL
          </text>

          {/* RLS POLICY */}
          <rect x="460" y="398" width="320" height="70" rx="2" fill="none" />
          <text x="620" y="424" textAnchor="middle" fontSize="9">
            security layer
          </text>
          <text
            x="620"
            y="450"
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
          >
            RLS POLICY
          </text>

          {/* Section divider */}
          <line
            x1="60"
            y1="520"
            x2="780"
            y2="520"
            strokeWidth="0.4"
            opacity="0.35"
          />

          {/* API Route snippet */}
          <text x="60" y="550" fontSize="9" opacity="0.5">
            {'// app/api/match/route.ts'}
          </text>
          <text x="60" y="572">
            export async function POST(
          </text>
          <text x="60" y="594">
            {'  '}req<tspan opacity="0.6">: Request</tspan>
          </text>
          <text x="60" y="616">
            ) &#123;
          </text>
          <text x="60" y="638">
            {'  '}const &#123; data &#125; = await supabase
          </text>
          <text x="60" y="660">
            {'    '}.from<tspan opacity="0.6">(&#39;work_orders&#39;)</tspan>
          </text>
          <text x="60" y="682">
            {'    '}.select
            <tspan opacity="0.6">(&#39;*, driver:drivers(*)&#39;)</tspan>
          </text>
          <text x="60" y="704">
            {'    '}.eq
            <tspan opacity="0.6">(&#39;status&#39;, &#39;pending&#39;)</tspan>
          </text>
          <text x="60" y="726">
            &#125;
          </text>

          {/* TypeScript interface */}
          <text x="460" y="550" fontSize="9" opacity="0.5">
            interface WorkOrder &#123;
          </text>
          <text x="460" y="572">
            {'  '}id<tspan opacity="0.6">: string</tspan>
          </text>
          <text x="460" y="594">
            {'  '}driver_id<tspan opacity="0.6">: string</tspan>
          </text>
          <text x="460" y="616">
            {'  '}status<tspan opacity="0.6">: WorkStatus</tspan>
          </text>
          <text x="460" y="638">
            {'  '}rating<tspan opacity="0.6">?: number</tspan>
          </text>
          <text x="460" y="660">
            &#125;
          </text>
          <line
            x1="460"
            y1="672"
            x2="780"
            y2="672"
            strokeWidth="0.4"
            opacity="0.3"
          />
          <text x="460" y="694" fontSize="9" opacity="0.5">
            type WorkStatus =
          </text>
          <text x="460" y="716" fontSize="9">
            {'  '}| &#39;pending&#39; | &#39;confirmed&#39;
          </text>
          <text x="460" y="738" fontSize="9">
            {'  '}| &#39;completed&#39; | &#39;cancelled&#39;
          </text>
        </g>
      </svg>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-4 pt-24 pb-16 md:px-16 lg:px-[128px]"
    >
      <HeroWatermark />

      <div className="relative">
        <Reveal delay={0}>
          <p className="text-muted mb-6 font-mono text-xs tracking-widest lowercase">
            frontend developer
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className="text-foreground mb-8 leading-none font-bold break-keep"
            style={{
              fontSize: 'clamp(3rem, 11vw, 11rem)',
              letterSpacing: '-0.03em',
            }}
          >
            SA MINJAE
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-muted mb-2 text-base md:text-lg">
            비효율을 견디지 못해서 개발자가 됐다.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-muted mb-12 text-base md:text-lg">
            현장에서 본 문제를, 이제 코드로 푼다.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:outline-accent flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              프로젝트 보기
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:bg-white/10">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </a>
            <a
              href="mailto:smj123432@gmail.com"
              className="border-border text-foreground hover:bg-surface focus-visible:outline-accent rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              연락하기
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown
          size={20}
          className="text-muted motion-safe:animate-pulse"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
