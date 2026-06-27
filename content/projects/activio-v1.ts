import type { TechRationaleItem, MetricItem, AIPhase, DiggoTab } from './types'

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
        '도장 목록, 대회일정 등 공개 데이터는 검색 엔진에 노출되어야 해 SSR이 필수였습니다. generateMetadata로 페이지별 title, OG 태그를 서버에서 렌더링해 SEO를 확보했습니다. App Router의 Server Component와 use cache + revalidateTag를 조합하면 페이지 성격에 따라 캐싱 전략을 세밀하게 분리할 수 있어 선택했습니다. 단일 레이아웃 중첩으로 공통 네비, 사이드바 구조도 자연스럽게 표현됩니다.',
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

export const ACTIVIO_V1_AI_PHASES: AIPhase[] = [
  {
    phase: '구현',
    tools: [
      {
        name: 'Claude Code',
        desc: '컴포넌트 구조 설계와 초기 아키텍처를 잡는 데 활용했습니다. 구현 방향을 먼저 정하고 Planner, Researcher, Reviewer 역할로 나눠 단계별로 호출했고, 버그가 생기면 증상보다 원인을 먼저 찾는 방식으로 접근했습니다.',
      },
    ],
  },
  {
    phase: '리팩토링',
    tools: [
      {
        name: 'Claude Code',
        desc: '중복 코드와 개선 지점을 찾아내는 데 활용했습니다. 수정 범위와 영향도를 먼저 파악한 뒤 적용했고, 같은 문제가 반복되지 않도록 패턴을 CLAUDE.md에 기록했습니다.',
      },
    ],
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
