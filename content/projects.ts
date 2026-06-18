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
    period: '2026.04 — 2026.06',
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
    period: '—',
    available: false,
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
  period: '2026.04 — 2026.06',
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
    id: 'err-01',
    label: '[01_ERR]',
    title: 'Supabase Realtime UPDATE 미반영',
    imageSrc: '/images/diggo/problem1_realtime.png',
    issue: [
      '채팅 메시지 삭제/읽음 처리 후 UPDATE 이벤트는 정상 발화됐음에도 상대방 화면에 아무 변화가 없었습니다.',
      'payload.new를 출력해보니 room_id가 undefined였고, 이를 현재 채팅방 ID와 비교하는 조건문에서 항상 early return이 발생하고 있었습니다.',
      '원인은 PostgreSQL REPLICA IDENTITY DEFAULT 설정 — 변경된 컬럼만 payload.new에 포함되므로 변경되지 않은 room_id는 아예 payload에 실리지 않았습니다.',
    ],
    resolution: [
      'room_id 기반 채팅방 귀속 판단을 버리고, 현재 메시지 목록(prev state)에 해당 id가 존재하는지 확인하는 방식으로 전환했습니다.',
      'prev.some(m => m.id === updated.id)로 현재 채팅방의 메시지임을 판별한 뒤 { ...m, ...updated }로 병합했습니다.',
      'REPLICA IDENTITY FULL로 모든 컬럼을 포함시키는 방법도 있었지만, 운영 DB 설정 변경 없이 클라이언트 로직만 수정해 해결했습니다.',
    ],
    result: [
      '메시지 삭제와 읽음 처리가 상대방 화면에 즉시 실시간 반영되었습니다.',
      'DB 레플리케이션 정책에 의존하지 않는 안정적인 Realtime 처리 패턴을 확립했습니다.',
      '이후 알림 실시간 구독 등 모든 Realtime UPDATE 로직에 동일한 ID 기반 귀속 패턴을 일관되게 적용했습니다.',
    ],
  },
  {
    id: 'err-02',
    label: '[02_ERR]',
    title: 'SSR ↔ TanStack Query 정렬 불일치',
    imageSrc: '/images/diggo/problem2_sorting.png',
    issue: [
      '일감 목록 진입 약 30초 후 다른 탭에서 돌아오면 목록 순서가 갑자기 바뀌는 현상이 발생했습니다.',
      'staleTime이 30초로 설정된 것과 타이밍이 정확히 일치함을 단서로, 포커스 복귀 시 TanStack Query의 재요청을 의심했습니다.',
      '추적 결과 SSR 프리페치는 created_at DESC(최신 등록순)으로 내려보내지만, 클라이언트 기본 정렬은 work_date ASC(마감임박순)이어서 staleTime 만료 후 re-fetch 시 두 기준이 충돌해 목록이 교체되고 있었습니다.',
    ],
    resolution: [
      'SSR 프리페치 함수(getCachedJobsFirstPage)의 정렬을 work_date ASC로 변경해 클라이언트 기본값과 통일했습니다.',
      'prefetchInfiniteQuery의 queryKey와 클라이언트 useInfiniteQuery의 queryKey가 동일한 필터·정렬 파라미터를 가리키도록 맞췄습니다.',
      'SSR과 TanStack Query 사이에는 queryKey·정렬 기준·필터 조건 세 가지가 완전히 일치해야 hydration 이후 데이터 교체가 발생하지 않는다는 원칙을 확인했습니다.',
    ],
    result: [
      '포커스 복귀 후 re-fetch가 발생해도 목록 순서가 유지되었습니다.',
      '서버에서 내려온 초기 데이터와 클라이언트 재요청 데이터 간 일관성을 확보했습니다.',
      '이후 SSR 프리페치를 추가할 때 반드시 클라이언트 쿼리 설정과 3가지를 맞추는 것을 코딩 원칙으로 확립했습니다.',
    ],
  },
  {
    id: 'err-03',
    label: '[03_ERR]',
    title: '비밀번호 찾기 False Success',
    imageSrc: '/images/diggo/problem3_password.png',
    issue: [
      '가입되지 않은 이메일로 비밀번호 재설정을 요청해도 "메일을 확인해 주세요" 성공 화면으로 전환되었습니다.',
      "resetPasswordForEmail()의 반환값을 확인하니 미가입 이메일에도 error: null을 반환했고, Supabase의 'Protect against user enumeration attacks' 옵션이 기본 ON이어서 이메일 존재 여부와 무관하게 항상 성공을 반환하도록 설계된 것임을 확인했습니다.",
      '클라이언트에서 SDK를 직접 호출하는 구조에서는 이 보안 정책을 우회할 방법이 없었습니다.',
    ],
    resolution: [
      '클라이언트에서 SDK를 직접 호출하는 대신 API Route(/api/auth/reset-password)를 경유하도록 구조를 변경했습니다.',
      '서버에서 SERVICE_ROLE 키로 admin REST API를 직접 fetch해 이메일 존재 여부를 선행 확인하고, 없으면 404·있으면 SDK로 재설정 이메일을 전송하는 흐름으로 재설계했습니다.',
      'getUserByEmail()이 해당 SDK 버전에 존재하지 않아 admin REST API를 직접 호출했고, filter 파라미터가 like 검색임을 감안해 반환 결과에서 이메일 정확 일치 여부를 한 번 더 검증하는 방어 로직을 추가했습니다.',
    ],
    result: [
      '미가입 이메일 입력 시 "가입되지 않은 이메일 주소입니다" 에러가 정확히 표시되었습니다.',
      '보안 기능(enumeration 방지)과 UX(정확한 피드백)를 동시에 충족시키는 구조를 만들었습니다.',
      '인증 로직을 서버로 이전하면서 SERVICE_ROLE 키가 클라이언트에 노출되지 않는 보안 설계도 자연스럽게 달성했습니다.',
    ],
  },
]
