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
    id: 'activio',
    name: 'ACTIVIO',
    type: '팀 프로젝트',
    period: '—',
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

export const DIGGO_META = {
  name: 'DIGGO',
  version: 'v1',
  nextVersion: 'v2 — 개발 예정',
  type: '개인 프로젝트',
  period: '2026.03 — 2026.06',
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

export interface AiNote {
  title: string
  body: string
  highlight?: boolean
}

export const DIGGO_AI_NOTES: AiNote[] = [
  {
    title: '역할 분리 전략',
    body: 'Claude Code를 Planner · Researcher · Reviewer 세 역할로 분리해 단계마다 다른 에이전트를 호출했다. 설계·조사·구현·리뷰를 한 세션에서 섞으면 이전 결정에 묶여 객관적인 판단이 어려워진다. 역할을 나누면 각 에이전트가 해당 단계에만 집중하므로 컨텍스트 오염 없이 결과물의 신뢰도가 높아진다.',
    highlight: true,
  },
  {
    title: 'Planner',
    body: '구현 전 요구사항 분석과 계획만 작성. 코드 수정 권한 없음 — 설계 단계에 온전히 집중하기 위해.',
  },
  {
    title: 'Researcher',
    body: '라이브러리·API 스펙·공식 문서 조사 후 요약만 보고. 코드 작성 권한 없음 — 정보 수집이 구현 방향에 오염되지 않도록.',
  },
  {
    title: 'Reviewer',
    body: '구현 후 품질·보안·가독성 검토만 보고. 파일 수정 권한 없음 — 구현 결정에 묶이지 않는 독립적인 평가를 위해.',
  },
  {
    title: '트러블슈팅 누적 루프',
    body: '버그 디버깅 시 해결책을 바로 묻지 않고 증상에서 출발해 원인을 단계적으로 역추적했다. 해결마다 증상·원인·패턴을 CLAUDE.md에 기록하고 다음 작업 시 컨텍스트로 다시 로드해 같은 실수를 반복하지 않는 구조를 만들었다. 총 20개 이상의 패턴이 누적됐다.',
  },
  {
    title: '개발 로그 자동화',
    body: '커밋 완료 시 Notion 개발 로그와 작업 DB를 자동 업데이트하도록 규칙을 정의해 문서화에 드는 컨텍스트 스위칭을 제거했다.',
  },
]

export const DIGGO_TABS: DiggoTab[] = [
  {
    id: 'perf-lcp',
    label: '[01_LCP]',
    title:
      '매 요청마다 DB를 재조회하던 구조, 서버 캐싱으로 첫 화면 속도 51% 단축',
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
    title:
      '매 요청마다 서버 재렌더가 낳은 무거운 JS, 컴포넌트 캐싱으로 브라우저 블로킹 완전 제거',
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
    title:
      '두 가지 캐싱 전략으로 병목 제거 — Lighthouse Performance Score 73 → 83점',
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
    title: 'Performance (62점 → 80점)',
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
    title: '초기 로딩 FCP (3.1초 → 1.1초)',
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
    title: '접근성 (88점 → 94점)',
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
