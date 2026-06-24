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
    id: 'activio-v1',
    name: 'ACTIVIO v1',
    type: '팀 프로젝트',
    period: '', // TODO
    available: false,
  },
  {
    id: 'activio-v2',
    name: 'ACTIVIO v2',
    type: '팀 프로젝트',
    period: '', // TODO
    available: false,
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
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'Supabase',
      'Vercel',
      'Git',
      'GitHub',
    ],
    deployUrl: 'https://diggo-zr4b.vercel.app/',
    githubUrl: 'https://github.com/smj123432-lab/diggo',
  },
  {
    id: 'activio-v1',
    name: 'ACTIVIO v1',
    type: '팀 프로젝트',
    period: '', // TODO
    available: false,
    thumbnail: null,
    cardStack: [],
    deployUrl: '',
    githubUrl: '',
  },
  {
    id: 'activio-v2',
    name: 'ACTIVIO v2',
    type: '팀 프로젝트',
    period: '', // TODO
    available: false,
    thumbnail: null,
    cardStack: [],
    deployUrl: '',
    githubUrl: '',
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
        '서버 컴포넌트와 "use cache"로 Supabase 재조회 없이 SSR 응답을 재사용할 수 있어서 선택했습니다. 파일 기반 라우팅과 API Route가 프론트·백을 하나의 레포에서 관리하기에 적합했습니다.',
    },
    {
      tech: 'Supabase',
      reason:
        'DB·Auth·Realtime·Storage를 하나의 서비스로 제공해 백엔드 서버 없이 개발이 가능했습니다. RLS로 역할별 접근 제어를 SQL 레벨에서 처리할 수 있는 것도 선택 이유였습니다.',
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
      tech: 'Vercel',
      reason:
        'Next.js를 만든 팀의 배포 플랫폼이라 App Router와 cacheComponents 같은 최신 기능을 별도 설정 없이 바로 쓸 수 있었습니다.',
    },
  ] as TechRationaleItem[],
  problem:
    '현장의 배차는 아직도 전화 한 통과 수기 장부로 돌아갑니다. 약속된 작업이 당일 취소돼도 기사는 보상받을 길이 없고, 소장은 처음 연락하는 기사가 신뢰할 수 있는 사람인지 알 방법이 없습니다. 매번 같은 불안을 안고 일이 시작됩니다.',
  solution:
    'Diggo는 기사와 소장이 서로를 평가하는 신뢰 배지 시스템과, 작업 내역이 투명하게 남는 디지털 장부로 이 문제를 풉니다. 노쇼가 반복되면 페널티가 누적되어 매칭 우선순위에서 자연히 멀어지고, 평점이 쌓인 기사는 다음 일을 더 쉽게 구합니다. 전화 대신 시스템이 신뢰를 기록합니다.',
  tech: 'Next.js 16의 cacheComponents + "use cache" 적용으로 LCP 9.0s → 4.4s, TBT 70ms → 0ms를 달성했습니다(Lighthouse 실측). Supabase RLS로 기사·소장 간 데이터 접근을 행(Row) 단위로 통제했고, TanStack Query v5로 서버 상태 캐싱과 무한스크롤을 관리했습니다.',
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
        'Supabase (PostgreSQL · Auth · Realtime · Storage)',
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
    'TypeScript',
    'Tailwind CSS',
    'TanStack Query',
    'Zustand',
    'Supabase',
    'Vercel',
    'Git',
    'GitHub',
  ],
  contribution: [
    { label: '개발', percent: 100 },
    { label: '디자인', percent: 100 },
    { label: '기획', percent: 100 },
  ],
  features: [
    '일감 등록·탐색·지원 (소장 등록 / **기사 필터 검색·지원·배차**)',
    '**Supabase Realtime** 기반 1:1 채팅 (낙관적 업데이트, 읽음 처리, 미읽음 배지)',
    '작업 완료 후 상호 평가 및 평점 기반 **인증·부정 뱃지** 자동 부여',
    '역할별 **전자 장부** (기사: 수입/지출 달력, 소장: 수주금액·마진 자동 집계)',
    '실시간 알림 (지원·배차·평가 이벤트)',
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
        desc: 'Planner · Researcher · Reviewer 세 역할로 분리해 단계마다 다른 에이전트를 호출했습니다. 설계·조사·구현·리뷰를 한 세션에서 섞으면 이전 결정에 묶여 판단이 흐려지기 때문입니다. 버그가 생기면 해결책을 바로 묻지 않고 증상에서 원인을 단계적으로 역추적했고, 패턴마다 CLAUDE.md에 기록해 같은 실수가 반복되지 않는 구조를 만들었습니다. 누적된 패턴은 20개 이상입니다.',
      },
    ],
  },
  {
    phase: '배포',
    tools: [
      {
        name: 'Claude Code',
        desc: '배포 전 환경변수 누락·RLS 미적용·빌드 경고 등을 항목별로 검수했습니다. 배포 후 발생한 이슈는 재현 조건을 정리해 원인을 좁히고 핫픽스를 빠르게 적용했습니다. 커밋 완료 시 Notion 개발 로그가 자동 업데이트되도록 워크플로우를 구성해 배포 이력을 별도 작업 없이 남겼습니다.',
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
      '일감 목록 페이지 진입 시 LCP가 9.0s로 측정되어 첫 화면이 늦게 그려졌습니다.',
      '매 요청마다 Supabase에서 동일한 일감 데이터를 새로 fetch하는 구조였습니다.',
      '서버 응답 대기 시간이 길어 브라우저가 최대 콘텐츠를 늦게 수신했습니다.',
    ],
    resolution: [
      'Next.js 16 "use cache" 디렉티브를 getCachedJobsFirstPage()에 적용했습니다.',
      'cacheLife("seconds")로 짧은 주기 캐싱, cacheTag("jobs")로 무효화를 제어했습니다.',
      '동일 요청에 대해 Supabase 재조회 없이 캐시된 응답을 즉시 반환하도록 구성했습니다.',
    ],
    result: [
      'LCP 9.0s → 4.4s로 51% 단축됐습니다.',
      '첫 화면 콘텐츠가 절반 이상 빠르게 렌더링됩니다.',
      '트래픽 증가 시에도 DB 부하 없이 동일한 응답속도를 유지합니다.',
    ],
  },
  {
    id: 'perf-tbt',
    label: '[02_TBT]',
    title: '메인 스레드 블로킹 문제',
    imageSrc: '/images/diggo/perf2_tbt.png',
    issue: [
      'TBT 70ms로 메인 스레드가 블로킹되어 사용자 입력이 지연됐습니다.',
      '매 요청마다 서버에서 데이터를 처리하며 클라이언트 JS 파싱 부하가 증가했습니다.',
      '초기 로드 시 불필요한 연산이 메인 스레드를 점유했습니다.',
    ],
    resolution: [
      'cacheComponents: true로 서버 컴포넌트 렌더링 결과를 캐싱했습니다.',
      '반복 요청에서 서버 렌더링 연산을 생략하고 캐시 결과를 스트리밍했습니다.',
      '클라이언트로 전달되는 JS 실행량이 감소했습니다.',
    ],
    result: [
      'TBT 70ms → 0ms로 메인 스레드 블로킹을 완전히 제거했습니다.',
      '페이지 로드 중 사용자 입력이 즉시 반응합니다.',
      'Lighthouse 기준 인터랙티브 응답성 만점을 달성했습니다.',
    ],
  },
  {
    id: 'perf-score',
    label: '[03_SCORE]',
    title: 'Lighthouse 성능 점수 문제',
    imageSrc: '/images/diggo/perf3_score.png',
    issue: [
      'Lighthouse Performance Score 73점으로 "개선 필요" 구간에 위치했습니다.',
      'LCP·TBT 지표 저하가 전체 점수를 끌어내리는 구조였습니다.',
      '캐싱 전략 부재로 매 요청이 최악의 응답 시나리오를 반복했습니다.',
    ],
    resolution: [
      'cacheComponents: true + "use cache" + cacheLife + cacheTag 조합으로 캐싱 파이프라인을 구성했습니다.',
      'SSR 프리페치(prefetchInfiniteQuery)와 캐시 정렬 기준을 통일해 하이드레이션 불일치를 제거했습니다.',
      'revalidateTag("jobs", "max")로 캐시 무효화를 제어해 데이터 정합성을 유지했습니다.',
    ],
    result: [
      'Performance Score 73 → 83점으로 10점 향상됐습니다.',
      '"개선 필요"에서 "양호" 구간으로 진입했습니다.',
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
    'dev 서버에서 번들링 없이 미압축 JS를 전송해 Performance 62점에 그쳤습니다. 단일 번들 구조로 진입 페이지와 무관한 모든 JS를 한 번에 로드해 FCP가 3.1초까지 지연됐고, 접근성 속성 누락으로 스크린리더가 이미지·폼·문서 정보를 읽지 못했습니다.',
  solution:
    'bun run build로 Vite 프로덕션 파이프라인을 적용해 Performance를 62점 → 80점으로 끌어올렸습니다. 페이지별 엔트리포인트 분리로 FCP를 3.1초 → 1.1초로 단축했고, alt·label·lang 등 접근성 속성 전수 적용으로 Accessibility를 88점 → 94점으로 개선했습니다.',
  tech: 'Vanilla JS + Vite로 프레임워크 없이 구현. 프로덕션 빌드 파이프라인 적용(Tree-shaking · Minify · Gzip)과 페이지별 코드 스플리팅으로 Lighthouse Performance 80점, FCP 1.1초를 달성했습니다(실측).',
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
    'dev 서버에서 번들링 없이 미압축 JS를 전송해 Performance 62점에 그쳤습니다. 단일 번들 구조로 진입 페이지와 무관한 모든 JS를 한 번에 로드해 FCP가 3.1초까지 지연됐고, 접근성 속성 누락으로 스크린리더가 이미지·폼·문서 정보를 읽지 못했습니다. 이 세 문제를 하나씩 뚫었습니다. Vite 프로덕션 빌드 파이프라인을 적용해 Performance를 **62점 → 80점**으로 끌어올렸고, 페이지별 엔트리포인트 분리로 FCP를 **3.1초 → 1.1초**로 단축했습니다. alt·label·lang 등 접근성 속성 전수 적용으로 Accessibility는 **88점 → 94점**으로 개선됐습니다.',
  status: '배포 중',
  gallery: [
    '/images/lions-study/hero_screenshot.png',
    '/images/lions-study/screenshot2.png',
    '/images/lions-study/screenshot3.png',
    '/images/lions-study/screenshot4.png',
    '/images/lions-study/screenshot5.png',
  ],
  displayStack: [
    'HTML',
    'CSS / SCSS',
    'JavaScript (ES6+)',
    'Vite',
    'Git',
    'GitHub',
    'Figma',
  ],
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
      'dev 서버는 번들링 없이 소스 파일을 그대로 전송해 JS 파싱 비용이 그대로 노출됐습니다.',
      '미압축 상태로 전달되는 JS가 브라우저 파싱 시간을 늘려 Performance 62점에 그쳤습니다.',
      '프로덕션 환경에서도 최적화 없이 배포 시 동일한 성능 저하가 발생했습니다.',
    ],
    resolution: [
      'bun run build로 Vite 프로덕션 빌드 파이프라인을 적용했습니다.',
      'Tree-shaking으로 미사용 코드를 제거하고, Minify + Gzip 압축으로 번들 크기를 축소했습니다.',
      '페이지별 코드 스플리팅으로 청크를 분리해 필요한 JS만 로드하도록 구성했습니다.',
    ],
    result: [
      'Lighthouse Performance 62점 → 80점(+18점)을 달성했습니다.',
      '전체 빌드 완료 시간 226ms 이내로 처리됐습니다.',
      '최대 청크 6.13kB(gzip 2.41kB)로 경량을 유지했습니다.',
    ],
  },
  {
    id: 'fcp',
    label: '[02_FCP]',
    title: '초기 로드 속도 문제',
    imageSrc: '/images/lions-study/b2_fcp.png',
    issue: [
      '단일 번들 구조로 진입 페이지와 무관한 모든 JS를 한 번에 다운로드했습니다.',
      '불필요한 JS 파싱이 메인 스레드를 점유해 첫 화면 표시가 3.1초까지 지연됐습니다.',
      'render-blocking 리소스로 인해 브라우저가 렌더링 시작 자체를 미뤘습니다.',
    ],
    resolution: [
      'Vite 엔트리포인트 분리로 페이지별 청크를 자동 생성했습니다.',
      '현재 진입 페이지 JS만 병렬 로드하고 나머지는 필요 시점에 lazy load하도록 구성했습니다.',
      '공통 유틸(removeMarkdown 0.15kB, date 0.53kB)도 독립 청크로 분리했습니다.',
    ],
    result: [
      'First Contentful Paint 3.1초 → 1.1초(64% 단축)를 달성했습니다.',
      'render-blocking 리소스를 0건으로 제거했습니다.',
      'Speed Index도 3.1초 → 1.1초로 동반 개선됐습니다.',
    ],
  },
  {
    id: 'a11y',
    label: '[03_A11Y]',
    title: '접근성 속성 누락 문제',
    imageSrc: '/images/lions-study/b3_accessibility.png',
    issue: [
      '<img> 태그에 alt 미적용으로 스크린리더가 이미지 내용을 전달하지 못했습니다.',
      '폼 입력 요소에 <label>이 없어 보조 기술이 입력 목적을 파악할 수 없었습니다.',
      '<html lang>, <title> 미설정으로 스크린리더가 문서 언어와 제목을 인식하지 못했습니다.',
    ],
    resolution: [
      '전체 <img> 태그에 alt 속성을 전수 적용했습니다(장식용 이미지는 alt="" 처리).',
      '모든 폼 입력 요소에 <label>을 명시적으로 연결하거나 sr-only 클래스로 숨김 처리했습니다.',
      '<html lang="ko-KR">, <title>을 전 페이지에 적용했습니다.',
    ],
    result: [
      'Lighthouse Accessibility 88점 → 94점(+6점)을 달성했습니다.',
      'alt, label, lang, title 항목 전체가 통과됐습니다.',
      'color-contrast 1건만 잔여하며 구조적 접근성 감점이 0건입니다.',
    ],
  },
]

// ─── ACTIVIO v1 ───────────────────────────────────────────────────────────────

export const ACTIVIO_V1_META = {
  name: 'ACTIVIO v1',
  subtitle: '부트캠프 수료 전 초기 버전',
  type: '팀 프로젝트',
  period: '', // TODO
  problem: '', // TODO
  solution: '', // TODO
  whyV2Needed: '', // TODO: v2가 필요했던 이유
  techStack: [] as { category: string; items: string[] }[],
  techRationale: [] as TechRationaleItem[],
  githubUrl: '', // TODO
  deployUrl: '', // TODO
  heroImage: '',
  gallery: [] as string[],
  displayStack: [] as string[],
  contribution: [] as { label: string; percent: number }[],
}

// ─── ACTIVIO v2 ───────────────────────────────────────────────────────────────

export const ACTIVIO_V2_META = {
  name: 'ACTIVIO v2',
  subtitle: '수료 후 팀이 자발적으로 돌아온 리디자인',
  type: '팀 프로젝트',
  period: '', // TODO
  whyCameBack: '', // TODO: WHY WE CAME BACK
  whatChanged: '', // TODO: WHAT CHANGED
  problem: '', // TODO
  solution: '', // TODO
  techStack: [] as { category: string; items: string[] }[],
  techRationale: [] as TechRationaleItem[],
  githubUrl: '', // TODO
  deployUrl: '', // TODO
  heroImage: '',
  gallery: [] as string[],
  displayStack: [] as string[],
  contribution: [] as { label: string; percent: number }[],
}
