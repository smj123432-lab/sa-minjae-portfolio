import type { TechRationaleItem, MetricItem, DiggoTab } from './types'

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
