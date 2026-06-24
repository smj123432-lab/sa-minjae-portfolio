# CLAUDE.md — 사민재 개인 포트폴리오

> 이 문서는 Claude Code가 이 저장소에서 작업할 때 따라야 할 규칙이다.
> 디자인/카피 원천 문서는 `사민재 개인 포트폴리오 최종 기획서 v3` — 컨텐츠나 컬러를 결정할 때는 그 문서가 기준이다.
>
> **현재 작업은 신규 구축이 아니라 리디자인이다.** 기존 포트폴리오의 콘텐츠는 살리고, 구조·라우팅·디자인만 새로 만든다. (자세한 원칙은 §3)

---

## 1. 프로젝트 개요

- **무엇:** 프론트엔드 신입 개발자 사민재의 개인 포트폴리오
- **포지셔닝:** "비효율을 견디지 못해서 개발자가 됐다. 현장에서 본 문제를, 이제 코드로 푼다."
- **디자인 컨셉:** Clean / Editorial Minimal — 타이포그래피 중심, 여백 강조, 무채색 90% + 액센트 1색(에메랄드 그린 `#10B981`)
- **구조 (하이브리드):**
  - **랜딩 `/`** = 한 페이지 스크롤: Hero → About → Skills → Projects(카드) → How I Work(AI 활용) → Contact. 섹션 이동은 `?section=` 같은 쿼리스트링이 아니라 **앵커 스크롤(`#about` 등)**.
  - **프로젝트 상세 `/projects/[slug]`** = 프로젝트별 **실제 라우트**. Diggo가 메인, 액티비오·사자들의 공부방이 서브. 모달이 아니라 자체 URL을 가진 페이지로 만든다 — 이력서·면접에서 특정 프로젝트를 직접 링크하기 위함이고, App Router 라우팅 실력 자체가 증거가 된다.

---

## 2. 기술 스택

### 확정

- **Framework:** Next.js (App Router, 최신 stable)
- **Language:** TypeScript (strict 모드)
- **Styling:** Tailwind CSS
- **상태관리:** Zustand (UI 상태 — 활성 섹션, 모바일 메뉴, 테마)
- **패키지 매니저:** Bun

### 추천 추가 스택

| 영역              | 추천                                                                                          | 이유                                                             |
| ----------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 테마 전환         | `next-themes`                                                                                 | 다크/라이트 깜빡임(FOUC) 방지, 시스템 선호 감지 내장             |
| 스크롤 애니메이션 | `framer-motion`                                                                               | `whileInView` 기반 reveal 구현이 가장 안정적                     |
| 아이콘            | `lucide-react`                                                                                | 스트로크 두께가 균일해 미니멀 컨셉과 결이 맞음                   |
| 폼/CTA 검증       | 없음 (연락 폼 없이 mailto/링크로 단순화 권장)                                                 | 신입 포트폴리오에 백엔드 폼은 과한 복잡도                        |
| 린트/포맷         | `ESLint` + `Prettier` + `prettier-plugin-tailwindcss`                                         | 클래스 순서 자동 정렬로 일관성 유지                              |
| Git Hook          | `husky` + `lint-staged`                                                                       | 커밋 전 자동 린트/포맷으로 컨벤션 강제                           |
| 배포              | Vercel                                                                                        | Next.js 네이티브 지원, 프리뷰 배포로 PR마다 확인 가능            |
| 폰트              | `Pretendard`(로컬/CDN `@font-face`) + `Geist Mono`(`next/font/google` 또는 `next/font/local`) | Pretendard는 Google Fonts에 없으므로 로컬 또는 jsdelivr CDN 사용 |

### 도입하지 않는 것 (의도적 배제)

- 별도 백엔드/DB — 포트폴리오는 정적 콘텐츠 중심, Diggo·액티비오와 차별화 불필요
- CSS-in-JS (styled-components 등) — Tailwind와 역할 중복
- 무거운 애니메이션 라이브러리(GSAP 등) — 컨셉상 fade-up + 카운트업 2종이면 충분
- 쿼리스트링 기반 섹션 전환(`?section=`) — SSR/라우팅 강점을 가리는 CSR 패턴. 랜딩은 앵커, 프로젝트는 실제 라우트로 간다.

---

## 3. 작업 방식 (Claude Code 진행 원칙)

> 이 작업은 **리디자인**이다. 콘텐츠는 이사(migrate)만 하고, 구조·디자인만 새로 만든다.

0. **(리디자인 전제) 코드 작성 전, 기존 자산부터 인벤토리한다.** 현재 포트폴리오의 섹션/컴포넌트 구조를 훑고, 들어가 있는 **모든 텍스트·수치 콘텐츠**(About 카피, 프로젝트별 설명·기간·역할·스택·트러블슈팅·수치, 링크)를 추출해 `content/` 데이터 파일로 분리한다. 추출 결과를 표로 보고하고, 빈 항목은 `TODO(확인필요)`로 표시한 뒤 **사용자 확인을 받고** 다음으로 넘어간다.
1. **섹션 단위로 순차 진행.** Hero부터 시작해 한 섹션이 끝나면 멈추고 확인을 받은 뒤 다음 섹션으로.
2. **디자인 토큰(컬러/폰트/스페이싱) → 셸(레이아웃) → 컴포넌트 → 콘텐츠 채우기** 순서를 지킨다. 토큰이 정의되지 않은 상태에서 임의의 hex 값을 새로 만들지 않는다.
3. **Git 작업은 직접 하지 않는다.** `git add`, `git commit`, `git push`, 브랜치 생성/병합은 사용자가 직접 실행한다. Claude Code는 코드 작성과 파일 수정만 담당하고, 커밋 메시지가 필요하면 "제안"만 한다.
4. 새 컴포넌트를 만들기 전, 기존 `components/`에 재사용 가능한 게 있는지 먼저 확인한다 (예: `MetricCard`를 Diggo와 액티비오 양쪽에서 props만 다르게 재사용).
5. **컨텐츠(카피/수치)는 절대 임의로 창작·재작성·미화하지 않는다.** 기존 포트폴리오와 기획서 v3의 텍스트를 그대로 사용하고, 빈 자리는 `TODO: 실제 수치로 교체` 주석으로 표시한다. 콘텐츠를 바꿔야 할 일이 생기면 반드시 먼저 사용자에게 묻는다.
6. **참고 사이트는 원리만 가져온다(복제 아님).** 외부 포트폴리오를 디자인 영감으로 참고하되, 색 절제·거대 타이포·스택 뱃지·상세 3단 구조 같은 *원리*만 취하고 레이아웃·카피·구조는 이 레포 콘텐츠에 맞게 새로 설계한다.

---

## 4. Git 브랜치 전략

> Claude Code는 git 명령을 실행하지 않는다(§3-3). 아래는 사용자가 직접 운영하는 전략이며, Claude Code는 이 컨벤션에 맞는 브랜치명·커밋 메시지를 "제안"하는 용도로만 참고한다.

업계에서 흔히 쓰는 **GitHub Flow 변형**(simplified Git Flow)을 따른다. 1인 프로젝트라 과한 브랜치 분기는 지양하고, 배포 안정성만 확보하는 수준으로 가볍게 운영한다.

```
main          ─────●─────────●─────────●──▶  (배포 브랜치, Vercel Production 연결)
                     \         \         \
dev           ────●───●────●───●────●────●─▶  (통합/작업 기본 브랜치)
                    \    \        \
feature/hero-section \    feature/theme-toggle
                       fix/mobile-nav-overflow
```

| 브랜치       | 용도                                 | 규칙                                                                              |
| ------------ | ------------------------------------ | --------------------------------------------------------------------------------- |
| `main`       | 배포용. 항상 배포 가능한 상태 유지   | `dev`에서만 머지. 직접 커밋 금지                                                  |
| `dev`        | 기본 작업 브랜치, 기능들이 모이는 곳 | 일상 작업은 여기서 분기                                                           |
| `feature/*`  | 새 섹션·기능 추가                    | 예: `feature/hero-section`, `feature/project-detail-route`, `feature/theme-store` |
| `fix/*`      | 버그 수정                            | 예: `fix/mobile-nav-overflow`, `fix/hydration-mismatch`                           |
| `chore/*`    | 설정, 의존성, 빌드 관련              | 예: `chore/eslint-setup`, `chore/upgrade-nextjs`                                  |
| `docs/*`     | 문서만 수정                          | 예: `docs/update-readme`                                                          |
| `refactor/*` | 동작 변화 없는 구조 개선             | 예: `refactor/extract-metric-card`                                                |

**네이밍 규칙:** `타입/짧은-설명-소문자-하이픈` (`feature/projects-section`처럼 동사 없이 명사형으로, 무엇을 다루는지만 명확하게).

**머지 전략:**

- `feature/* → dev`: Squash merge (커밋 히스토리를 깔끔하게 1개로)
- `dev → main`: 일정 단위(섹션 완성, 배포 시점)로 Merge commit, 필요시 태그(`v0.1.0` 등)
- 1인 프로젝트이므로 PR 리뷰는 필수는 아니지만, GitHub PR을 만들어 변경 사항을 스스로 기록해두면 면접에서 "협업 프로세스를 알고 있다"는 증거가 된다.

---

## 5. 커밋 컨벤션 — Conventional Commits

```
<type>(<scope>): <subject>

예시:
feat(hero): add hero section with CTA button
feat(project-detail): add /projects/[slug] route with generateMetadata
fix(theme): resolve hydration mismatch on theme toggle
style(metric-card): align before-after numbers with monospace
refactor(projects): extract shared ProjectCard component
chore(deps): upgrade next.js to latest stable
docs(readme): add local setup instructions
```

| type       | 의미                           |
| ---------- | ------------------------------ |
| `feat`     | 새 기능/섹션 추가              |
| `fix`      | 버그 수정                      |
| `style`    | 스타일/포맷팅 (로직 변화 없음) |
| `refactor` | 동작 변화 없는 구조 개선       |
| `perf`     | 성능 개선                      |
| `chore`    | 빌드, 설정, 의존성             |
| `docs`     | 문서                           |
| `test`     | 테스트 추가/수정               |

scope는 섹션/컴포넌트명(`hero`, `theme`, `metric-card`, `project-detail` 등)으로 통일.

---

## 6. 코드 컨벤션

- **파일/폴더:**
  - 컴포넌트 파일명: `PascalCase.tsx` (`MetricCard.tsx`)
  - 그 외(훅, 유틸, 스토어): `camelCase.ts` (`useTheme.ts`)
  - 폴더 구조: `app/` (라우트 — `app/page.tsx` 랜딩, `app/projects/[slug]/page.tsx` 상세), `components/` (UI), `store/` (Zustand), `lib/` (유틸/타입), `content/` (카피·수치 데이터 분리 — 아래 참고)
- **콘텐츠 분리 원칙:** Diggo/액티비오/공부방의 텍스트·수치는 컴포넌트 안에 하드코딩하지 않고 `content/projects.ts` 같은 데이터 파일로 분리한다. slug는 라우트(`/projects/[slug]`)와 1:1 매칭한다. 나중에 수치를 갱신할 때 컴포넌트를 건드릴 필요가 없어야 한다.
- **라우팅/SSR:** 프로젝트 상세는 `generateStaticParams`로 경로를 생성하고 `generateMetadata`로 페이지별 title/description/OG 태그를 지정한다. 콘텐츠는 서버 컴포넌트에서 렌더한다(CSR로 도피 금지).
- **타입:** `interface`로 props 정의, 컴포넌트당 `ComponentNameProps` 네이밍.
- **Import 순서:** 외부 라이브러리 → 절대경로 내부 모듈(`@/components`, `@/store`) → 상대경로 → 타입.
- **'use client' 최소화:** 상태/이벤트가 필요한 컴포넌트(테마 토글, Reveal, 인터랙티브 요소)만 클라이언트 컴포넌트로. 정적 콘텐츠 섹션은 서버 컴포넌트로 유지해 번들 크기를 줄인다.

---

## 7. 디자인 시스템 요약 (전체는 기획서 v3 참고)

- 컬러: 무채색 90% + 에메랄드 `#10B981`(light) / `#34D399`(dark). 액센트는 큰 숫자·CTA·활성 상태에만, 본문 텍스트 색으로 사용 금지.
- 폰트: 본문/제목 Pretendard+Inter, 수치/스택 표기는 반드시 모노스페이스(Geist Mono).
- 애니메이션: fade-up reveal + 숫자 카운트업 2종만. 패럴랙스·회전·bounce 금지. `prefers-reduced-motion` 필수 대응.
- 메트릭 표기 패턴: `라벨 → Before ──▶ After(액센트색) → delta%` 3줄 고정 패턴, 카드당 지표 3개 이하.
- **Skills 섹션 패턴:** 각 기술에 "그 기술을 사용한 프로젝트 수" 뱃지를 붙이고, 클릭 시 해당 프로젝트(카드 또는 `/projects/[slug]`)로 이동한다. "써봤다"가 아니라 "어디서 몇 번 썼다"를 보여준다.
- **프로젝트 상세 페이지 구조(고정):**
  1. 헤더 — 제목 / 한 줄 설명 / 기간·역할 / 스택 뱃지 / `배포`·`GitHub` 링크
  2. 스크린샷 (있으면)
  3. **기술 선정** — 기술마다 왜 골랐는지
  4. **트러블슈팅** — `이슈 → 해결` 구조 (Diggo는 여기가 깊으니 잘 살린다)
  5. **결과 / 회고** — 수치 포함

---

## 8. 주의사항 (반드시 지킬 것)

- **액센트 컬러 남용 금지.** 화면에 액센트가 2곳 이상 동시에 크게 보이면 과도한 것 — 절제가 컨셉의 핵심이다.
- **Hydration mismatch 주의.** `next-themes`/Zustand `persist`로 테마를 다루면 서버 렌더링 시점엔 클라이언트의 저장된 테마를 알 수 없다. 마운트 전에는 테마에 의존하는 UI를 렌더링하지 않거나 `suppressHydrationWarning`을 최소 범위로만 사용한다.
- **Pretendard 폰트 로딩.** `next/font/google`에 없으므로 로컬 폰트 파일이나 CDN `@font-face`로 처리하고, FOUT(폰트 미적용 깜빡임)을 줄이기 위해 `font-display: swap` 또는 `next/font/local`을 활용한다.
- **반응형은 모바일부터.** 에디토리얼 레이아웃은 데스크탑에서 여백이 많은 만큼, 모바일에서 여백이 과해지면 콘텐츠가 늘어져 보일 수 있다 — 브레이크포인트별로 여백 값을 따로 점검한다.
- **접근성.** 키보드 포커스 아웃라인을 절대 `outline: none`으로 지우지 않는다(액센트 컬러로 커스텀 포커스 링은 가능). 이미지/아이콘에 `alt`, 토글 버튼에 `aria-pressed` 등 상태 속성 챙긴다. **목표 Lighthouse Accessibility 100** — 액티비오에서 한 작업을 이 사이트 자체로 증명한다.
- **가짜 수치 방치 금지.** METRICS의 예시 수치(`2.8s → 1.1s` 등)는 실제 측정값으로 반드시 교체한다. 면접에서 검증 못 하는 숫자는 역효과다.
- **AI 활용 노트는 과장하지 않는다.** "AI가 한 것"을 숨기지 않되, "내가 검증한 것"이 분량과 구체성에서 항상 더 무게가 있어야 한다 — 이 균형이 깨지면 차별화 포인트가 오히려 약점이 된다.
- **포트폴리오 자체의 품질이 곧 증명이다.** Lighthouse 점수, 다크/라이트 모드 전환, 모바일 대응을 마지막에 한 번에 몰아서 점검하지 말고 섹션마다 확인한다.
- **참고 사이트를 그대로 베끼지 않는다.** 결과물이 영감 출처와 색·레이아웃까지 닮아 있으면 안 된다. 포트폴리오는 본인의 디자인 감각을 증명하는 작업물이다.
