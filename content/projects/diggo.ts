import type { TechRationaleItem, MetricItem, AIPhase, DiggoTab } from './types'

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
  deployUrl: 'https://diggo.vercel.app',
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
