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
    label: 'LCP 데스크탑',
    before: '5.4s',
    after: '0.9s',
    delta: '-83%',
  },
  {
    label: 'LCP 모바일',
    before: '4.6s',
    after: '2.5s',
    delta: '-46%',
  },
  { label: 'Performance Score', before: '76점', after: '99점', delta: '+23점' },
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
  {
    phase: 'QA',
    tools: [
      {
        name: 'Claude Code + Playwright',
        desc: '4개 역할(공개·기사·소장·관리자) 전체 화면을 수동으로 커버하기 어려워 Python Playwright 기반 QA 스크립트를 구축했습니다. Claude Code로 테스트 시나리오를 설계하고 스크립트를 작성해 모바일 뷰포트 전수 검사·콘솔 에러·접근성 감지를 실행했습니다.',
      },
    ],
  },
]

export const DIGGO_TABS: DiggoTab[] = [
  {
    id: 'perf-lcp',
    label: '[01_LCP]',
    title: 'LCP 5.4s → 0.9s 성능 최적화',
    imageSrc: '/images/diggo/lcp_ssr_diagram.png',
    issue: [
      'TanStack Query HydrationBoundary 방식 사용으로 초기 HTML에 일감 카드가 없어 React hydration 완료 이후에야 LCP가 측정됨',
      'Vercel 함수 리전이 미국 동부(iad1)로 설정되어 서울 Supabase DB와의 왕복 지연이 매 요청마다 누적됨',
      'Noto Sans KR 4가지 굵기(400·500·700·900) 로딩으로 woff2 파일 10개가 critical path에 포함, 폰트 로딩이 LCP를 차단',
    ],
    resolution: [
      'HydrationBoundary를 제거하고 SSR initialData prop 방식으로 전환해 서버 렌더링 카드를 초기 HTML에 직접 포함',
      'Vercel 함수 리전을 인천(icn1)으로 이전해 Supabase(서울)와의 네트워크 왕복 지연을 제거',
      'Noto Sans KR 굵기를 400·700으로 축소하고 preload 추가, critical path 폰트 파일을 10개에서 4개로 감소',
    ],
    result: [
      '데스크탑 LCP 5.4s → 0.9s (−83%)',
      'Lighthouse Performance 76 → 99',
      '모바일 LCP 4.6s → 2.5s (−46%)',
    ],
  },
  {
    id: 'chat-n1',
    label: '[02_N+1]',
    title: '채팅 목록 N+1 쿼리',
    imageSrc: '/images/diggo/n1_query_korean.png',
    issue: [
      '배차 협의 채팅방이 늘어날수록 목록 로딩이 선형으로 느려지는 문제 발생',
      '채팅방 목록 조회 후 각 방마다 마지막 메시지·미읽음 수를 개별 쿼리로 추가 호출하는 구조',
      'N개 방에서 2N+4번 DB 호출 (서버 로그 실측: 채팅방 2개 기준 8번)',
    ],
    resolution: [
      '전체 채팅방 ID를 수집해 마지막 메시지·미읽음 수를 IN절 단일 쿼리로 일괄 조회',
      '결과를 room_id 기준 Map으로 변환해 채팅방 목록에 O(1)로 조립',
      '방 개수와 무관하게 총 쿼리 6개 고정 구조로 교체 (서버 로그 실측 확인)',
    ],
    result: [
      '쿼리 수 6개로 고정, 채팅방 10개 기준 24→6 (75% 감소)',
      '배차가 활발한 소장 계정일수록 절감 효과 증가, 방이 늘어도 로딩 시간 선형 증가 없음',
      '채팅 목록 진입 체감 속도 개선',
    ],
  },
  {
    id: 'ledger-bug',
    label: '[03_BUG]',
    title: '전자 장부 집계 버그',
    imageSrc: '/images/diggo/diggo_ledger_aggregation_fix.png',
    issue: [
      '기사가 직접 입력한 수입이 월간 요약 카드에서 지출로 집계되는 버그 발생',
      'ledger_expenses 테이블에 수입·지출을 category로 구분해 함께 저장하는 구조가 원인',
      '집계 로직이 buildMonthData·computePanelNet·summaryValues 세 곳에 분산돼 한 곳만 수정하면 다른 화면에서 수치 불일치 재발',
    ],
    resolution: [
      '세 곳 모두 category === "수입" 분기 추가, totalExpense 대신 totalIncome에 가산',
      'computePanelNet에서 수동 수입(manualInc)을 별도 집계 후 순수익 계산에 포함',
      'summaryValues의 income·net 계산에도 동일하게 반영해 세 지점 동시 수정',
    ],
    result: [
      '월간 요약·날짜 패널·달력 배지 세 화면의 수입·지출·순수익 수치 정상화',
      '수치 불일치로 인한 정산 장부 신뢰성 문제 해소',
      '동일 구조(수입·지출 혼용 테이블)에서 발생하는 집계 버그 패턴을 문서화해 재발 방지',
    ],
  },
]
