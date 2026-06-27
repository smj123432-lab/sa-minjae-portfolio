export interface ProjectListItem {
  id: string
  name: string
  type: string
  period: string
  available: boolean
}

export const PROJECT_LIST: ProjectListItem[] = [
  {
    id: 'diggo',
    name: 'DIGGO',
    type: '개인 프로젝트',
    period: '2026.03 — 2026.06',
    available: true,
  },
  {
    id: 'activio-v2',
    name: 'ACTIVIO v2',
    type: '팀 프로젝트',
    period: '2026.05 — 2026.06',
    available: true,
  },
  {
    id: 'activio-v1',
    name: 'ACTIVIO v1',
    type: '팀 프로젝트',
    period: '2026.04 — 2026.05',
    available: true,
  },
  {
    id: 'lions-study',
    name: '사자들의 공부방',
    type: '팀 프로젝트',
    period: '2026.02 — 2026.03',
    available: true,
  },
]

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

export const PROJECT_CARDS: ProjectCard[] = [
  {
    id: 'diggo',
    name: 'DIGGO',
    type: '개인 프로젝트',
    period: '2026.03 — 2026.06',
    available: true,
    thumbnail: '/images/diggo/hero_screenshot.png',
    cardStack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'Supabase',
      'Vercel',
      'Claude',
      'Claude Code',
      'Gemini',
    ],
    deployUrl: 'https://diggo-zr4b.vercel.app/',
    githubUrl: 'https://github.com/smj123432-lab/diggo',
  },
  {
    id: 'activio-v2',
    name: 'ACTIVIO v2',
    type: '팀 프로젝트',
    period: '2026.05 — 2026.06',
    available: true,
    thumbnail: '/images/activio-v2/screenshot1.png',
    cardStack: [
      'Next.js',
      'TypeScript',
      'React.js',
      'Tailwind CSS',
      'Supabase',
      'Zustand',
      'TanStack Query',
      'Zod',
      'Vercel',
      'Claude Code',
      'Gemini',
    ],
    deployUrl: 'https://activio-red.vercel.app',
    githubUrl: 'https://github.com/JMI-J/Activio',
  },
  {
    id: 'activio-v1',
    name: 'ACTIVIO v1',
    type: '팀 프로젝트',
    period: '2026.04 — 2026.05',
    available: true,
    thumbnail: '/images/activio-v1/screenshot1.png',
    cardStack: [
      'Next.js',
      'TypeScript',
      'React.js',
      'Tailwind CSS',
      'Supabase',
      'Zustand',
      'TanStack Query',
      'Zod',
      'Vercel',
      'Claude',
    ],
    deployUrl: 'https://final-project-team3.vercel.app',
    githubUrl: 'https://github.com/FRONTENDBOOTCAMP-16th/final-project-team3',
  },
  {
    id: 'lions-study',
    name: '사자들의 공부방',
    type: '팀 프로젝트',
    period: '2026.02 — 2026.03',
    available: true,
    thumbnail: '/images/lions-study/hero_screenshot.png',
    cardStack: ['HTML', 'CSS / SCSS', 'JavaScript (ES6+)'],
    deployUrl: 'http://leedh9207.dothome.co.kr/',
    githubUrl: 'https://github.com/FRONTENDBOOTCAMP-16th/vanilla-project-team2',
  },
]

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

export const DIGGO_META = {
  name: 'DIGGO',
  version: 'v1',
  nextVersion: 'v2 — 개발 예정',
  type: '개인 프로젝트',
  period: '2026.03 — 2026.06',
  subtitle: '', // TODO: 사용자가 채울 예정 (한 줄 설명)
  techRationale: [
    {
      tech: 'Next.js (App Router)',
      reason:
        '일감 목록과 기사, 소장 프로필 페이지를 SSR로 처리해 검색엔진에 콘텐츠가 노출되도록 했습니다. "use cache"로 Supabase 재조회 없이 서버 응답을 재사용하고, generateMetadata로 페이지별 OG 태그를 자동 생성했습니다. 파일 기반 라우팅과 API Route가 프론트, 백을 하나의 레포에서 관리하기에도 적합했습니다.',
    },
    {
      tech: 'TypeScript',
      reason:
        '굴착기 장비 코드, 일감 상태, 역할 등 도메인 고유 타입이 많아 런타임 에러보다 컴파일 단계에서 잡는 게 훨씬 효율적이었습니다. strict 모드로 타입 안전성을 유지했습니다.',
    },
    {
      tech: 'Supabase',
      reason:
        'DB, Auth, Realtime, Storage를 하나의 서비스로 제공해 백엔드 서버 없이 개발이 가능했습니다. RLS로 역할별 접근 제어를 SQL 레벨에서 처리할 수 있는 것도 선택 이유였습니다.',
    },
    {
      tech: 'TanStack Query v5',
      reason:
        'SSR 프리페치 후 클라이언트 하이드레이션을 지원하고, staleTime과 캐싱 전략을 세밀하게 제어할 수 있어서 선택했습니다. 무한스크롤 구현에도 useInfiniteQuery가 적합했습니다.',
    },
    {
      tech: 'Zustand',
      reason:
        '로그인 세션과 role 정도의 전역 상태만 필요해서 Redux는 과했습니다. 보일러플레이트 없이 스토어를 간단하게 정의할 수 있습니다.',
    },
    {
      tech: 'Tailwind CSS',
      reason:
        '별도 CSS 파일 없이 컴포넌트 안에서 스타일을 완결할 수 있고, 디자인 토큰이 통일되어 있어 일관성을 유지하기 쉬웠습니다.',
    },
    {
      tech: '카카오 지도 API',
      reason:
        '국내 사용자 대상 서비스라 한국 주소 데이터와 지도 정확도가 높은 카카오를 선택했습니다. 주소 검색(REST API)과 지도 렌더링(JS SDK)을 모두 제공해 별도 라이브러리 없이 구현이 가능했습니다.',
    },
    {
      tech: 'Vercel',
      reason:
        'Next.js를 만든 팀의 배포 플랫폼이라 App Router와 cacheComponents 같은 최신 기능을 별도 설정 없이 바로 쓸 수 있었습니다.',
    },
  ] as TechRationaleItem[],
  problem:
    '현장의 배차는 아직도 전화 한 통과 수기 장부로 돌아갑니다. 약속된 작업이 당일 취소돼도 기사는 보상받을 길이 없고, 소장은 처음 연락하는 기사가 신뢰할 수 있는 사람인지 알 방법이 없습니다. 매번 같은 불안을 안고 일이 시작됩니다.',
  solution:
    'Diggo는 기사와 소장이 서로를 평가하는 신뢰 배지 시스템과, 작업 내역이 투명하게 남는 디지털 장부로 이 문제를 풉니다. 노쇼가 반복되면 페널티가 누적되어 매칭 우선순위에서 자연히 멀어지고, 평점이 쌓인 기사는 다음 일을 더 쉽게 구합니다. 전화 대신 시스템이 신뢰를 기록합니다.',
  tech: 'Next.js 16의 cacheComponents + "use cache" 적용으로 LCP 9.0s → 4.4s, TBT 70ms → 0ms를 달성했습니다(Lighthouse 실측). Supabase RLS로 기사, 소장 간 데이터 접근을 행(Row) 단위로 통제했고, TanStack Query v5로 서버 상태 캐싱과 무한스크롤을 관리했습니다.',
  techStack: [
    {
      category: 'Frontend',
      items: [
        'Next.js 16 (App Router, PPR)',
        'TypeScript strict',
        'Tailwind CSS',
      ],
    },
    { category: '상태 관리', items: ['Zustand', 'TanStack Query v5'] },
    {
      category: 'Backend / Infra',
      items: [
        'Supabase (PostgreSQL, Auth, Realtime, Storage)',
        'Vercel (Edge Runtime)',
        'Bun',
      ],
    },
    { category: '외부 API', items: ['카카오맵 API (주소 검색, 지도 렌더링)'] },
  ],
  githubUrl: 'https://github.com/smj123432-lab/diggo',
  deployUrl: 'https://diggo-zr4b.vercel.app/',
  archImage: '/images/diggo/hero_screenshot.png',
  intro:
    '현장의 배차는 아직도 전화 한 통과 수기 장부로 돌아갑니다. 약속된 작업이 당일 취소돼도 기사는 보상받을 길이 없고, 소장은 처음 연락하는 기사가 신뢰할 수 있는 사람인지 알 방법이 없습니다. 매번 같은 불안을 안고 일이 시작됩니다. Diggo는 이 문제에서 출발했습니다. 기사와 소장이 서로를 평가하는 **신뢰 배지 시스템**과 작업 내역이 투명하게 남는 **디지털 장부**로 이 불신을 끊습니다. 노쇼가 반복되면 페널티가 누적되어 매칭 우선순위에서 자연히 멀어지고, 평점이 쌓인 기사는 다음 일을 더 쉽게 구합니다. 전화 대신 **시스템이 신뢰를 기록합니다.**',
  status: '배포 중',
  gallery: [
    '/images/diggo/hero_screenshot.png',
    '/images/diggo/gallery1.png',
    '/images/diggo/gallery2.png',
    '/images/diggo/gallery3.png',
    '/images/diggo/gallery4.png',
    '/images/diggo/gallery5.png',
    '/images/diggo/gallery6.png',
  ],
  displayStack: [
    'Next.js',
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'TanStack Query',
    'Zustand',
    'Supabase',
    'Vercel',
    'Claude',
    'Claude Code',
    'Gemini',
  ],
  contribution: [
    { label: '개발', percent: 100 },
    { label: '디자인', percent: 100 },
    { label: '기획', percent: 100 },
  ],
  features: [
    '일감 등록, 탐색, 지원 (소장 등록 / **기사 필터 검색, 지원, 배차**)',
    '**Supabase Realtime** 기반 1:1 채팅 (낙관적 업데이트, 읽음 처리, 미읽음 배지)',
    '작업 완료 후 상호 평가 및 평점 기반 **인증, 부정 뱃지** 자동 부여',
    '역할별 **전자 장부** (기사: 수입/지출 달력, 소장: 수주금액, 마진 자동 집계)',
    '실시간 알림 (지원, 배차, 평가 이벤트)',
    '카카오맵 주소 검색 연동',
  ],
}

// cacheComponents + "use cache" 적용 전후 — Lighthouse 실측
export const DIGGO_METRICS: MetricItem[] = [
  {
    label: 'LCP (최대 콘텐츠풀 페인트)',
    before: '9.0s',
    after: '4.4s',
    delta: '-51%',
  },
  {
    label: 'TBT (메인 스레드 블로킹)',
    before: '70ms',
    after: '0ms',
    delta: '-100%',
  },
  { label: 'Performance Score', before: '73점', after: '83점', delta: '+10점' },
]

export interface AITool {
  name: string
  desc: string
}

export interface AIPhase {
  phase: string
  tools: AITool[]
}

export const DIGGO_AI_PHASES: AIPhase[] = [
  {
    phase: '기획',
    tools: [
      {
        name: 'Claude',
        desc: '아이디어 단계에서 서비스의 핵심 문제와 타겟 사용자를 함께 정리했습니다. "이 기능이 정말 필요한가"를 반복해서 물어가며 방향을 잡았고, 범위를 좁히는 데 집중했습니다. 머릿속에 뭉쳐 있던 것들이 대화를 거치면서 글로 정리됐습니다.',
      },
      {
        name: 'Gemini',
        desc: 'Claude로 잡은 방향을 Gemini에게 다시 던져 기획서를 구체화했습니다. 유사 서비스 분석, 기능 명세 초안, 화면 흐름 정의 등을 빠르게 채웠고, 두 모델의 시각을 교차 검토해 기획 단계에서 허점을 미리 걸러냈습니다.',
      },
    ],
  },
  {
    phase: '구현',
    tools: [
      {
        name: 'Claude Code',
        desc: 'Planner, Researcher, Reviewer 세 역할로 분리해 단계마다 다른 에이전트를 호출했습니다. 설계, 조사, 구현, 리뷰를 한 세션에서 섞으면 이전 결정에 묶여 판단이 흐려지기 때문입니다. 버그가 생기면 해결책을 바로 묻지 않고 증상에서 원인을 단계적으로 역추적했고, 패턴마다 CLAUDE.md에 기록해 같은 실수가 반복되지 않는 구조를 만들었습니다. 누적된 패턴은 20개 이상입니다.',
      },
    ],
  },
  {
    phase: '배포',
    tools: [
      {
        name: 'Claude Code',
        desc: '배포 전 환경변수 누락, RLS 미적용, 빌드 경고 등을 항목별로 검수했습니다. 배포 후 발생한 이슈는 재현 조건을 정리해 원인을 좁히고 핫픽스를 빠르게 적용했습니다. 커밋 완료 시 Notion 개발 로그가 자동 업데이트되도록 워크플로우를 구성해 배포 이력을 별도 작업 없이 남겼습니다.',
      },
    ],
  },
]

export const DIGGO_TABS: DiggoTab[] = [
  {
    id: 'perf-lcp',
    label: '[01_LCP]',
    title: 'DB 재조회 문제',
    imageSrc: '/images/diggo/perf1_lcp.png',
    issue: [
      '일감 목록 페이지 LCP가 9.0s로 측정됐습니다. 첫 화면이 뜨는 데 9초.',
      '요청마다 Supabase에서 같은 일감 데이터를 새로 fetch하는 구조였습니다.',
      '캐싱이 없으니 DB 응답을 매번 기다려야 했고, 그게 LCP로 그대로 찍혔습니다.',
    ],
    resolution: [
      'getCachedJobsFirstPage()에 Next.js 16 "use cache" 디렉티브를 붙였습니다.',
      'cacheLife("seconds")로 캐싱 주기를, cacheTag("jobs")로 무효화 시점을 제어했습니다.',
      '같은 요청이 들어오면 DB를 다시 찌르지 않고 캐시 응답을 바로 돌려줬습니다.',
    ],
    result: [
      'LCP 9.0s → 4.4s, 51% 단축됐습니다.',
      '사용자 입장에서 체감 속도가 절반 이상 빨라졌습니다.',
      '캐시가 살아 있는 동안은 DB 요청 자체가 없어 부하도 없습니다.',
    ],
  },
  {
    id: 'perf-tbt',
    label: '[02_TBT]',
    title: '메인 스레드 블로킹 문제',
    imageSrc: '/images/diggo/perf2_tbt.png',
    issue: [
      'TBT가 70ms로 잡혔습니다. 버튼을 눌러도 70ms 동안 아무 반응이 없는 셈입니다.',
      '요청마다 서버에서 렌더링 연산을 반복하고, 그 결과가 클라이언트 JS 파싱 부하로 이어졌습니다.',
      'LCP 문제와 원인이 같았습니다. 캐싱이 없어 매번 최대 비용을 치르는 구조.',
    ],
    resolution: [
      'cacheComponents: true로 서버 컴포넌트 렌더링 결과 자체를 캐싱했습니다.',
      '같은 요청에서 서버 렌더링 연산을 건너뛰고 캐시 결과를 스트리밍했습니다.',
      '클라이언트가 실행해야 할 JS도 줄었습니다.',
    ],
    result: [
      'TBT 70ms → 0ms. 메인 스레드 블로킹이 사라졌습니다.',
      '페이지 로딩 중에도 클릭, 입력이 바로 반응합니다.',
      'TBT 0ms로 Lighthouse 인터랙티브 항목 만점을 받았습니다.',
    ],
  },
  {
    id: 'perf-score',
    label: '[03_SCORE]',
    title: 'Lighthouse 성능 점수 문제',
    imageSrc: '/images/diggo/perf3_score.png',
    issue: [
      'Performance Score 73점 — Lighthouse가 "개선 필요" 판정을 냈습니다.',
      'LCP, TBT 두 지표가 동시에 나빠 전체 점수를 끌어내리고 있었습니다.',
      '매 요청이 항상 DB를 새로 읽어야 해서 최악의 응답 시간을 매번 반복했습니다.',
    ],
    resolution: [
      'cacheComponents: true + "use cache" + cacheLife + cacheTag를 조합해 캐싱 레이어를 구성했습니다.',
      'SSR 프리페치(prefetchInfiniteQuery)와 캐시 정렬 기준을 맞춰 하이드레이션 불일치를 없앴습니다.',
      'revalidateTag("jobs", "max")로 캐시 무효화 시점을 명시해 데이터가 오염되지 않도록 했습니다.',
    ],
    result: [
      'Performance Score 73 → 83점, 10점 올랐습니다.',
      '"개선 필요"에서 "양호"로 올라섰습니다.',
      '캐시 히트 시 TTFB 10ms 이하를 유지합니다.',
    ],
  },
]

// ─── 사자들의 공부방 ───────────────────────────────────────────────────────────

export const LIONS_STUDY_META = {
  name: '사자들의 공부방',
  type: '팀 프로젝트',
  period: '2026.02 — 2026.03',
  subtitle: '', // TODO: 사용자가 채울 예정 (한 줄 설명)
  techRationale: [] as TechRationaleItem[], // TODO: 사용자가 채울 예정 (기술 선정 이유)
  problem:
    'dev 서버에서 번들링 없이 미압축 JS를 전송해 Performance 62점에 그쳤습니다. 단일 번들 구조로 진입 페이지와 무관한 모든 JS를 한 번에 로드해 FCP가 3.1초까지 지연됐고, 접근성 속성 누락으로 스크린리더가 이미지, 폼, 문서 정보를 읽지 못했습니다.',
  solution:
    'bun run build로 Vite 프로덕션 파이프라인을 적용해 Performance를 62점 → 80점으로 끌어올렸습니다. 페이지별 엔트리포인트 분리로 FCP를 3.1초 → 1.1초로 단축했고, alt, label, lang 등 접근성 속성 전수 적용으로 Accessibility를 88점 → 94점으로 개선했습니다.',
  tech: 'Vanilla JS + Vite로 프레임워크 없이 구현. 프로덕션 빌드 파이프라인 적용(Tree-shaking, Minify, Gzip)과 페이지별 코드 스플리팅으로 Lighthouse Performance 80점, FCP 1.1초를 달성했습니다(실측).',
  techStack: [
    { category: 'Language', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)'] },
    {
      category: 'Build Tool',
      items: ['Vite (페이지별 엔트리포인트, 코드 스플리팅)'],
    },
    { category: 'Tools', items: ['Git', 'GitHub', 'Figma'] },
  ],
  githubUrl: 'https://github.com/FRONTENDBOOTCAMP-16th/vanilla-project-team2',
  deployUrl: 'http://leedh9207.dothome.co.kr/',
  heroImage: '/images/lions-study/hero_screenshot.png',
  intro:
    'dev 서버에서 번들링 없이 미압축 JS를 전송해 Performance 62점에 그쳤습니다. 단일 번들 구조로 진입 페이지와 무관한 모든 JS를 한 번에 로드해 FCP가 3.1초까지 지연됐고, 접근성 속성 누락으로 스크린리더가 이미지, 폼, 문서 정보를 읽지 못했습니다. 이 세 문제를 하나씩 뚫었습니다. Vite 프로덕션 빌드 파이프라인을 적용해 Performance를 **62점 → 80점**으로 끌어올렸고, 페이지별 엔트리포인트 분리로 FCP를 **3.1초 → 1.1초**로 단축했습니다. alt, label, lang 등 접근성 속성 전수 적용으로 Accessibility는 **88점 → 94점**으로 개선됐습니다.',
  status: '배포 중',
  gallery: [
    '/images/lions-study/hero_screenshot.png',
    '/images/lions-study/screenshot2.png',
    '/images/lions-study/screenshot3.png',
    '/images/lions-study/screenshot4.png',
    '/images/lions-study/screenshot5.png',
  ],
  displayStack: ['HTML', 'CSS / SCSS', 'JavaScript (ES6+)', 'Vite'],
  contribution: [] as { label: string; percent: number }[], // TODO: 팀 기여도 입력 예정
  features: [] as string[], // TODO: 주요 기능 목록
}

export const LIONS_STUDY_METRICS: MetricItem[] = [
  {
    label: 'Performance Score',
    before: '62점',
    after: '80점',
    delta: '+18점',
  },
  {
    label: 'FCP (First Contentful Paint)',
    before: '3.1초',
    after: '1.1초',
    delta: '-64%',
  },
  {
    label: 'Accessibility Score',
    before: '88점',
    after: '94점',
    delta: '+6점',
  },
]

export const LIONS_STUDY_TABS: DiggoTab[] = [
  {
    id: 'perf',
    label: '[01_PERF]',
    title: '미압축 JS 문제',
    imageSrc: '/images/lions-study/b1_performance.png',
    issue: [
      '번들링, 압축 없이 JS를 그대로 전송하고 있었습니다. Performance 62점.',
      '미압축 JS를 브라우저가 받아서 파싱해야 하니 시간이 그대로 걸렸습니다.',
      'dev 서버로 배포한 탓에 프로덕션 최적화가 하나도 안 돼 있던 상태였습니다.',
    ],
    resolution: [
      'bun run build로 Vite 프로덕션 빌드 파이프라인을 돌렸습니다.',
      'Tree-shaking으로 안 쓰는 코드를 쳐내고, Minify + Gzip으로 번들을 압축했습니다.',
      '페이지별로 청크를 나눠 필요한 JS만 로드하게 했습니다.',
    ],
    result: [
      'Performance 62 → 80점, 18점 올랐습니다.',
      '빌드 자체는 226ms 안에 끝났고, 최대 청크도 6.13kB(gzip 2.41kB)에 그쳤습니다.',
      '배포 후 Lighthouse를 다시 돌려서 직접 확인했습니다.',
    ],
  },
  {
    id: 'fcp',
    label: '[02_FCP]',
    title: '초기 로드 속도 문제',
    imageSrc: '/images/lions-study/b2_fcp.png',
    issue: [
      '단일 번들 구조라 첫 페이지에 진입해도 서비스 전체 JS를 한 번에 받았습니다.',
      '관계없는 JS까지 파싱하느라 메인 스레드가 막혀 첫 화면이 3.1초에 뜰 수밖에 없었습니다.',
      'render-blocking 리소스가 걸려 있어 브라우저가 렌더링을 시작조차 못 했습니다.',
    ],
    resolution: [
      'Vite 엔트리포인트를 페이지별로 분리해 청크를 자동으로 나눴습니다.',
      '진입 페이지 JS만 먼저 로드하고 나머지는 필요한 시점에 lazy load 했습니다.',
      '공통 유틸(removeMarkdown 0.15kB, date 0.53kB)도 별도 청크로 뺐습니다.',
    ],
    result: [
      'FCP 3.1초 → 1.1초, 64% 줄었습니다.',
      '렌더 블로킹 리소스도 0건이 됐습니다.',
      'Speed Index도 3.1 → 1.1초로 같이 내려왔습니다.',
    ],
  },
  {
    id: 'a11y',
    label: '[03_A11Y]',
    title: '접근성 속성 누락 문제',
    imageSrc: '/images/lions-study/b3_accessibility.png',
    issue: [
      '<img>에 alt가 없어 스크린리더가 이미지를 그냥 건너뛰었습니다.',
      '폼 입력에 <label>이 없으니 보조 기술이 이 입력이 뭘 받는 건지 알 수가 없었습니다.',
      '<html lang>과 <title>이 빠져 있어 문서 언어와 제목 자체를 인식하지 못했습니다.',
    ],
    resolution: [
      '<img> 전체에 alt를 붙였습니다. 장식용 이미지는 alt="" 처리했습니다.',
      '폼 입력마다 <label>을 명시적으로 연결하거나, 시각적으로 숨길 때는 sr-only 클래스를 썼습니다.',
      '<html lang="ko-KR">과 <title>을 전 페이지에 빠짐없이 넣었습니다.',
    ],
    result: [
      'Accessibility 88 → 94점, 6점 올랐습니다.',
      'alt, label, lang, title 항목 전부 통과했습니다.',
      'color-contrast 1건만 남아 있고 나머지 구조적 항목은 전부 통과했습니다.',
    ],
  },
]

// ─── ACTIVIO v1 ───────────────────────────────────────────────────────────────

export const ACTIVIO_V1_META = {
  name: 'ACTIVIO v1',
  subtitle: '멋쟁이사자처럼 팀 프로젝트',
  type: '멋쟁이사자처럼 팀 프로젝트, 4인 / 팀 리드',
  period: '2026.04 — 2026.05',
  role: '팀 리드 (커뮤니티, 대회일정, 도장 찾기 페이지 담당)',
  intro:
    '주짓수 수련자들은 커뮤니티, 대회일정 확인, 도장 찾기를 각각 다른 곳에서 해결해왔습니다. ACTIVIO(Black-Belt v1)는 이 세 가지를 하나로 묶어 수련자와 관장님을 잇는 **올인원 커뮤니티 서비스**입니다.',
  status: '배포 중',
  techRationale: [
    {
      tech: 'Next.js (App Router)',
      reason:
        '도장 목록, 대회일정 등 공개 데이터는 검색 엔진에 노출되어야 해 SSR이 필수였고, generateMetadata로 페이지별 title, OG 태그를 서버에서 렌더링해 SEO를 확보했습니다. App Router의 Server Component와 use cache + revalidateTag를 조합하면 페이지 성격에 따라 캐싱 전략을 세밀하게 분리할 수 있어 선택했습니다. 단일 레이아웃 중첩(layout.tsx)으로 공통 네비, 사이드바 구조도 자연스럽게 표현됩니다.',
    },
    {
      tech: 'TypeScript',
      reason:
        'Supabase가 DB 스키마 기반 자동 타입(Database.types.ts)을 생성해주기 때문에, 서비스 함수 → 컴포넌트 Props까지 타입이 끊김 없이 전파됩니다. 팀 개발에서 API 응답 형태를 구두로 공유하는 대신 타입으로 계약을 명시해 인터페이스 오류를 빌드 단계에서 차단했습니다.',
    },
    {
      tech: 'TanStack Query',
      reason:
        '서버 데이터의 캐싱, 동기화, 무한스크롤을 직접 구현하는 대신 useInfiniteQuery와 initialData 패턴으로 SSR 데이터를 클라이언트 캐시에 주입했습니다. 글 작성, 삭제 후 invalidateQueries로 목록을 즉시 갱신하는 흐름이 이 프로젝트 구조에 잘 맞아 선택했습니다.',
    },
    {
      tech: 'Zustand',
      reason:
        '인증 상태, 모달 열림 여부처럼 전역 UI 상태는 적고 단순합니다. Redux의 보일러플레이트 없이 스토어 하나를 훅 하나로 쓸 수 있어 팀 학습 비용이 낮았습니다. 서버 데이터는 TanStack Query가 맡고, Zustand는 UI 상태에만 집중하도록 역할을 나눴습니다.',
    },
    {
      tech: 'Zod',
      reason:
        '회원가입, 게시글 작성 등 폼 스키마를 z.infer<>로 TypeScript 타입과 동기화해 스키마와 타입을 두 곳에서 관리하는 이중 작업을 없앴습니다. React Hook Form과 zodResolver를 연결하면 유효성 검사 로직이 스키마 한 곳에 집중되어 유지보수가 쉬웠습니다.',
    },
    {
      tech: 'Tailwind CSS v4',
      reason:
        '별도 CSS 파일 없이 컴포넌트 단위로 스타일을 작성할 수 있어 팀 협업 시 스타일 충돌이 없었습니다. v4의 CSS 변수 기반 테마 시스템을 활용해 다크/라이트 모드 전환을 CSS 한 곳에서 제어했고, light: variant로 라이트모드 오버라이드를 선언적으로 표현했습니다.',
    },
    {
      tech: 'Supabase',
      reason:
        'PostgreSQL DB, Auth, Storage, RLS를 하나의 서비스로 제공해 별도 백엔드 서버 없이 프로젝트를 완성할 수 있었습니다. Row Level Security로 인증된 사용자만 본인 데이터를 수정할 수 있도록 DB 레벨에서 보안을 강제했고, Storage 버킷으로 이미지, 영상, 사업자등록증 파일을 분리 관리했습니다.',
    },
    {
      tech: 'Vercel',
      reason:
        'Next.js 공식 배포 플랫폼으로 별도 설정 없이 App Router의 Edge, Serverless 함수, use cache 등 최신 기능이 그대로 동작합니다. PR마다 Preview URL이 자동 생성되어 팀원 간 리뷰와 QA를 배포 없이 진행할 수 있었습니다.',
    },
    {
      tech: '카카오 로컬 API',
      reason:
        '도장 검색에서 장소명, 주소 검색 정확도와 좌표 추출 품질이 중요했습니다. 카카오 로컬 API는 국내 장소 데이터베이스가 촘촘하고 주소→좌표 변환 결과가 안정적이어서 검색 레이어로 선택했습니다.',
    },
    {
      tech: '네이버 지도 API',
      reason:
        '지도 렌더링 퀄리티가 사용성에 직결되는 기능이라 렌더링 품질이 가장 뛰어난 네이버 지도를 선택했습니다. 카카오 로컬로 좌표를 추출하고 네이버 지도로 렌더링하는 구조 — 같은 회사 API를 세트로 쓰는 것이 일반적이지만, 각 API의 강점을 분리해 조합하면 검색 정확도와 렌더링 퀄리티를 동시에 확보할 수 있다고 판단했습니다.',
    },
  ] as TechRationaleItem[],
  whyV2Needed:
    "주짓수 단일 종목만 다루다 보니 종목이 달라지면 쓸 수 없는 구조였습니다. 부트캠프 기간 안에 기능을 완성하느라 디자인에 신경 쓸 여유가 없었던 것도 아쉬움이었습니다. 수료 후 팀원 모두가 '다시 한번 제대로 만들어보자'는 마음으로 자발적으로 모였고, v2는 그렇게 시작됐습니다.",
  githubUrl: 'https://github.com/FRONTENDBOOTCAMP-16th/final-project-team3',
  deployUrl: 'https://final-project-team3.vercel.app',
  gallery: [
    '/images/activio-v1/screenshot1.png',
    '/images/activio-v1/screenshot2.png',
    '/images/activio-v1/screenshot3.png',
    '/images/activio-v1/screenshot4.png',
    '/images/activio-v1/screenshot5.png',
    '/images/activio-v1/screenshot6.png',
  ],
  displayStack: [
    'Next.js',
    'TypeScript',
    'React.js',
    'Tailwind CSS',
    'Supabase',
    'Zustand',
    'TanStack Query',
    'Zod',
    'Vercel',
    'Claude',
  ],
  contribution: [] as { label: string; percent: number }[], // TODO: 기여도 입력
  features: [] as string[], // TODO: 주요 기능 목록
}

export const ACTIVIO_V1_METRICS: MetricItem[] = [
  {
    label: '오염 데이터 노출 (soft-delete 미적용 API)',
    before: '3곳',
    after: '0건',
    delta: '-100%',
  },
  {
    label: 'admin 관리 가능 역할',
    before: '1종',
    after: '3종',
    delta: '+2종',
  },
  {
    label: '페이지 진입 불필요 API 요청 (queryKey 오용)',
    before: '1회',
    after: '0회',
    delta: '-100%',
  },
]

export const ACTIVIO_V1_TABS: DiggoTab[] = [
  {
    id: 'softdelete',
    label: '[01_SOFT_DELETE]',
    title: '삭제 데이터 노출 문제',
    imageSrc: '/images/activio-v1/arch_softdelete.png',
    issue: [
      'soft-delete 방식으로 설계했지만 댓글 조회, 게시글 상세, 수정 API 3곳에 deleted_at IS NULL 필터가 빠진 채 배포됐습니다.',
      'GET /api/comments, getPost(), communityService.server.ts — 조회 경로가 파일마다 흩어져 있어 누락을 발견하기도 어려웠습니다.',
      '결국 삭제 처리한 게시글, 댓글이 API 응답에 그대로 담겨 클라이언트에 노출됐습니다.',
    ],
    resolution: [
      "관련 쿼리를 전수 점검하고 각 Supabase 쿼리에 .is('deleted_at', null) 조건을 붙였습니다.",
      'DB 레벨에서 삭제 데이터를 필터링해 조회 경로마다 일관되게 적용했습니다.',
      '이후 추가되는 조회 API에도 같은 원칙이 빠지지 않도록 팀 가이드로 정리했습니다.',
    ],
    result: [
      '삭제 콘텐츠가 API 응답에 담기는 오염 데이터 노출 0건으로 차단했습니다.',
      'DB 설계 원칙과 API 동작이 맞아떨어지는 상태가 됐습니다.',
      '이후 조회 API를 추가할 때도 같은 원칙을 기준으로 쓸 수 있게 됐습니다.',
    ],
  },
  {
    id: 'permission',
    label: '[02_PERMISSION]',
    title: '관리자 권한 오류 문제',
    imageSrc: '/images/activio-v1/arch_permission.png',
    issue: [
      "canManageContent 내부에서 canAdminManageAdminAuthoredContent(currentRole==='admin' && authorRole==='admin')를 중첩 호출하는 구조였습니다.",
      '글쓴이도 admin이어야 true를 반환하는 조건이라, admin이 user, manager 작성 게시글을 삭제하려 하면 403이 났습니다.',
      '운영에 필수인 관리자 콘텐츠 삭제 기능이 실질적으로 막혀 있는 상태였습니다.',
    ],
    resolution: [
      '원인이 된 canAdminManageAdminAuthoredContent 함수를 제거했습니다.',
      "canManageContent를 currentUserRole === 'admin' || currentUserId === authorUserId 단일 조건으로 단순화했습니다.",
      'admin이면 작성자 역할에 관계없이 모든 콘텐츠를 관리할 수 있도록 권한 로직을 다시 잡았습니다.',
    ],
    result: [
      'admin 관리 가능 범위가 1종(admin 작성글)에서 3종(user, manager, admin 전체)으로 늘었습니다.',
      '관리자 페이지에서 신고 콘텐츠, 불량 게시글 삭제가 의도대로 동작합니다.',
      '권한 함수가 단순해져서 역할이 늘어나도 수정할 곳이 줄었습니다.',
    ],
  },
  {
    id: 'querykey',
    label: '[03_QUERYKEY]',
    title: '불필요한 API 재요청 문제',
    imageSrc: '/images/activio-v1/arch_querykey.png',
    issue: [
      'SSR initialData를 JSON.stringify로 직렬화한 문자열을 queryKey에 넣고 있었습니다.',
      '마운트마다 새 배열 참조가 생겨 캐시 키가 달라지고, TanStack Query가 매번 캐시 미스로 판정했습니다.',
      'SSR로 미리 받아온 데이터가 있는데도 클라이언트 마운트 직후 같은 API를 한 번 더 쏘고 있었습니다.',
    ],
    resolution: [
      "queryKey를 ['competition'], ['posts', 'sport', slug] 같은 고정 배열로 바꿔 마운트 간 키를 통일했습니다.",
      'initialDataUpdatedAt: Date.now()를 추가해 SSR 데이터가 캐시 항목으로 제대로 등록되도록 했습니다.',
      '직렬화 목적으로만 쓰던 createCompetitionsSeed 등 불필요한 헬퍼 함수도 걷어냈습니다.',
    ],
    result: [
      '페이지 진입마다 나가던 불필요한 API 재요청 1회 → 0회가 됐습니다.',
      'SSR 데이터가 클라이언트 캐시에 정상 반영되어 hydration 이후 불필요한 로딩 상태가 사라졌습니다.',
      'TanStack Query + SSR initialData 패턴이 의도대로 돌아가는 안정적인 흐름이 됐습니다.',
    ],
  },
]

// ─── ACTIVIO v2 ───────────────────────────────────────────────────────────────

export const ACTIVIO_V2_META = {
  name: 'ACTIVIO v2',
  subtitle: '스포츠 수련자, 도장, 코치 연결 커뮤니티 플랫폼',
  type: '멋쟁이사자처럼 팀 프로젝트',
  period: '2026.05 — 2026.06',
  role: '팀 리드 (커뮤니티, 대회일정, 도장 찾기 페이지 담당)',
  status: '배포 중, 개선 예정',
  intro:
    'v1이 주짓수 단일 종목에 한정됐다면, v2는 유도, 주짓수, MMA, 복싱, 태권도, 레슬링 등 6개 격투기 종목으로 대상을 넓혔습니다. 각 종목 수련자들이 커뮤니티에서 정보를 나누고, 대회 일정을 확인하고, 근처 도장을 찾는 일을 하나의 서비스에서 해결합니다. 종목을 선택하면 관련 콘텐츠가 자동으로 필터링되고, 수련자와 관장님이 같은 플랫폼 안에서 연결됩니다. v1에서 기능 구현에 밀려 아쉬웠던 디자인 완성도도 전면 재설계해 실사용에 가까운 완성도를 목표로 했습니다.',
  techRationale: [
    {
      tech: 'Next.js (App Router)',
      reason:
        '도장 목록, 대회일정 등 공개 데이터는 검색 엔진에 노출되어야 해 SSR이 필수였습니다. generateMetadata로 페이지별 title, OG 태그를 서버에서 렌더링해 SEO를 확보했고, v2에서는 next/image 전면 적용으로 이미지 최적화도 같이 챙겼습니다.',
    },
    {
      tech: 'TypeScript',
      reason:
        'Supabase가 DB 스키마 기반 자동 타입(Database.types.ts)을 생성해주기 때문에, 서비스 함수 → 컴포넌트 Props까지 타입이 끊김 없이 전파됩니다. 팀 개발에서 API 응답 형태를 구두로 공유하는 대신 타입으로 계약을 명시해 인터페이스 오류를 빌드 단계에서 차단했습니다.',
    },
    {
      tech: 'TanStack Query',
      reason:
        '서버 데이터의 캐싱, 동기화, 무한스크롤을 직접 구현하는 대신 useInfiniteQuery와 initialData 패턴으로 SSR 데이터를 클라이언트 캐시에 주입했습니다. v1에서 queryKey 직렬화 버그를 경험한 뒤, v2에서는 고정 배열 키 + initialDataUpdatedAt 패턴을 처음부터 적용했습니다.',
    },
    {
      tech: 'Zustand',
      reason:
        '인증 상태, 모달 열림 여부처럼 전역 UI 상태는 적고 단순합니다. Redux의 보일러플레이트 없이 스토어 하나를 훅 하나로 쓸 수 있어 팀 학습 비용이 낮았습니다. 서버 데이터는 TanStack Query가 맡고, Zustand는 UI 상태에만 집중하도록 역할을 나눴습니다.',
    },
    {
      tech: 'Zod',
      reason:
        '회원가입, 게시글 작성 등 폼 스키마를 z.infer<>로 TypeScript 타입과 동기화해 스키마와 타입을 두 곳에서 관리하는 이중 작업을 없앴습니다. React Hook Form과 zodResolver를 연결하면 유효성 검사 로직이 스키마 한 곳에 집중되어 유지보수가 쉬웠습니다.',
    },
    {
      tech: 'Tailwind CSS v4',
      reason:
        '별도 CSS 파일 없이 컴포넌트 단위로 스타일을 작성할 수 있어 팀 협업 시 스타일 충돌이 없었습니다. v2에서 디자인을 전면 재설계하면서 CSS 변수 기반 테마 시스템으로 색상 토큰을 WCAG AA 기준에 맞게 일괄 재조정했습니다.',
    },
    {
      tech: 'Supabase',
      reason:
        'PostgreSQL DB, Auth, Storage, RLS를 하나의 서비스로 제공해 별도 백엔드 서버 없이 프로젝트를 완성할 수 있었습니다. Row Level Security로 인증된 사용자만 본인 데이터를 수정할 수 있도록 DB 레벨에서 보안을 강제했습니다.',
    },
    {
      tech: 'Vercel',
      reason:
        'Next.js 공식 배포 플랫폼으로 별도 설정 없이 App Router의 Edge, Serverless 함수가 그대로 동작합니다. PR마다 Preview URL이 자동 생성되어 팀원 간 리뷰와 QA를 배포 없이 진행할 수 있었습니다.',
    },
    {
      tech: '카카오 로컬 API',
      reason:
        '도장 검색에서 장소명, 주소 검색 정확도와 좌표 추출 품질이 중요했습니다. 카카오 로컬 API는 국내 장소 데이터베이스가 촘촘하고 주소→좌표 변환 결과가 안정적이어서 검색 레이어로 선택했습니다.',
    },
    {
      tech: '네이버 지도 API',
      reason:
        '지도 렌더링 퀄리티가 사용성에 직결되는 기능이라 렌더링 품질이 가장 뛰어난 네이버 지도를 선택했습니다. 카카오 로컬로 좌표를 추출하고 네이버 지도로 렌더링하는 구조로, 검색 정확도와 렌더링 퀄리티를 동시에 확보했습니다.',
    },
  ] as TechRationaleItem[],
  githubUrl: 'https://github.com/JMI-J/Activio',
  deployUrl: 'https://activio-red.vercel.app',
  gallery: [
    '/images/activio-v2/screenshot1.png',
    '/images/activio-v2/screenshot2.png',
    '/images/activio-v2/screenshot3.png',
    '/images/activio-v2/screenshot4.png',
    '/images/activio-v2/screenshot5.png',
  ],
  displayStack: [
    'Next.js',
    'TypeScript',
    'React.js',
    'Tailwind CSS',
    'Supabase',
    'Zustand',
    'TanStack Query',
    'Zod',
    'Vercel',
    'Claude Code',
    'Gemini',
  ],
  contribution: [] as { label: string; percent: number }[],
}

export const ACTIVIO_V2_METRICS: MetricItem[] = [
  {
    label: '접근성 위반 (axe-core 기준)',
    before: '33건',
    after: '0건',
    delta: '-100%',
  },
  {
    label: 'Lighthouse Performance (/community)',
    before: '65점',
    after: '74점',
    delta: '+9점',
  },
  {
    label: '6개 파일 합계 줄 수 (중복 제거)',
    before: '1,054줄',
    after: '532줄',
    delta: '-49.5%',
  },
]

export const ACTIVIO_V2_TABS: DiggoTab[] = [
  {
    id: 'accessibility',
    label: '[01_A11Y]',
    title: '접근성 위반 33건',
    imageSrc: '/images/activio-v2/arch_accessibility.png',
    issue: [
      '주요 페이지에 ARIA 패턴 위반 critical 4건이 있어 스크린리더가 탭 UI를 올바르게 인식하지 못했습니다.',
      '중복 landmark serious 4건으로 보조기술이 페이지 구조를 명확히 파악할 수 없었습니다.',
      'WCAG AA 색상 대비 미달 serious 25건 — 저시력 사용자에게 텍스트 가독성이 보장되지 않은 상태였습니다.',
    ],
    resolution: [
      'role="tablist" 패턴을 교정해 ARIA critical 위반 4건을 제거했습니다.',
      'landmark 구조를 재설계해 중복 region을 정리하고 페이지 계층을 명확히 했습니다.',
      '색상 토큰을 WCAG AA 기준(대비율 4.5:1 이상)에 맞게 전수 재조정했습니다.',
    ],
    result: [
      'axe-core 기준 접근성 위반이 33건 → 0건으로 사라졌습니다.',
      'Lighthouse Accessibility 100점을 달성했습니다.',
      'ARIA, landmark, 색상 대비를 한꺼번에 잡으면서 스크린리더, 저시력 사용자 모두를 포용하는 UI가 됐습니다.',
    ],
  },
  {
    id: 'nextimage',
    label: '[02_IMG]',
    title: '<img> → next/image 교체',
    imageSrc: '/images/activio-v2/arch_nextimage.png',
    issue: [
      '<img> 태그를 직접 쓴 위치가 9곳이었습니다. Next.js 자동 lazy loading이 하나도 적용되지 않았습니다.',
      'WebP 변환과 사이즈 최적화가 작동하지 않아 원본 용량 그대로 브라우저에 전송됐습니다.',
      '/community 페이지 Lighthouse Performance가 65점에 그쳤습니다.',
    ],
    resolution: [
      '9곳 모두 next/image 컴포넌트로 교체했습니다.',
      '각 사용처 특성에 맞게 fill, priority, sizes 속성을 지정했습니다.',
      'Next.js의 자동 lazy loading, WebP 변환, 디바이스별 리사이징이 활성화됐습니다.',
    ],
    result: [
      '/community Performance 65점 → 74점, 9점 올랐습니다.',
      '이미지 전송 용량이 줄어 초기 로딩 속도가 개선됐습니다.',
      'LCP 지표도 같이 내려왔습니다.',
    ],
  },
  {
    id: 'refactor',
    label: '[03_REFACTOR]',
    title: '컴포넌트 중복 코드 추출, 통합',
    imageSrc: '/images/activio-v2/arch_refactor.png',
    issue: [
      '게시글 작성, 수정, 대회 폼 로직이 3개 컴포넌트에 각각 중복 구현돼 있었습니다.',
      '커뮤니티, 대회 목록 상태 관리 코드가 3곳에 분산되어 뭔가 바꾸면 세 곳을 다 고쳐야 했습니다.',
      '6개 파일 합계 1,054줄 — 유지보수 부채가 쌓여 있었습니다.',
    ],
    resolution: [
      'PostFormBase, CompetitionFormBase 공통 컴포넌트로 폼 로직을 추출, 통합했습니다.',
      'useCommunityListState 훅으로 목록 상태 관리 중복을 한 곳으로 모았습니다.',
      '각 컴포넌트가 공통 기반을 조합하는 단일 책임 구조로 재설계했습니다.',
    ],
    result: [
      '6개 파일 합계가 1,054줄 → 532줄, 522줄(-49.5%) 줄었습니다.',
      '기능을 바꿀 때 공통 컴포넌트, 훅 한 곳만 수정하면 됩니다.',
      '코드 일관성이 확보되어 버그가 생길 수 있는 표면이 절반 이하로 줄었습니다.',
    ],
  },
]
