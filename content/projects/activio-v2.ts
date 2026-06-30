import type { TechRationaleItem, MetricItem, AIPhase, DiggoTab } from './types'

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
  contribution: [
    { label: '기획', percent: 50 },
    { label: '디자인', percent: 50 },
    { label: '개발', percent: 40 },
  ],
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

export const ACTIVIO_V2_AI_PHASES: AIPhase[] = [
  {
    phase: '리디자인',
    tools: [
      {
        name: 'Claude',
        desc: 'v1 디자인의 개선 지점을 정리하고 v2 방향을 구체화하는 데 활용했습니다. 종목 확장과 화면 흐름 재설계를 대화하며 빠르게 정리했습니다.',
      },
    ],
  },
  {
    phase: '구현, 기능 추가',
    tools: [
      {
        name: 'Claude Code',
        desc: '새 기능 추가 시 기존 구조와 충돌하지 않도록 영향 범위를 먼저 파악하고 구현했습니다. Planner, Researcher, Reviewer 역할을 나눠 단계별로 호출했습니다.',
      },
    ],
  },
  {
    phase: '리팩토링',
    tools: [
      {
        name: 'Claude Code',
        desc: '1,054줄 → 532줄 감소 과정에서 중복 추출 범위와 공통 컴포넌트 설계를 함께 검토했습니다. 리팩토링 전후 동작이 동일한지 확인하는 방식으로 진행했습니다.',
      },
    ],
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
