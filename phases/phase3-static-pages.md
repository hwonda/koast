# Phase 3: 정적 페이지 구현

## 목표
홈, 회사소개, 서비스 3개의 정적 페이지를 완성한다.

## 작업 목록

### 3-1. 데이터 파일 작성
- `src/data/company.ts` — 회사 비전/미션, 연혁 데이터
- `src/data/team.ts` — 팀 멤버 정보 (이름, 역할, 사진, 소개)
- `src/data/services.ts` — 서비스 목록 (제목, 설명, 아이콘, 특징)

### 3-2. 홈 페이지 (`pages/index.astro`)
- **Hero.astro** — 메인 비주얼, 슬로건, CTA 버튼
- **CompanyHighlights.astro** — 숫자/키워드로 회사 강점 소개
- **FeaturedServices.astro** — 주요 서비스 카드 3~4개
- **RecentBlogPosts.astro** — 최근 블로그 (Phase 4에서 연결, 임시 placeholder)

### 3-3. 회사소개 페이지 (`pages/about.astro`)
- **VisionMission.astro** — 비전/미션 섹션
- **Timeline.astro** — 회사 연혁 타임라인
- **TeamGrid.astro** — 팀원 카드 그리드

### 3-4. 서비스 페이지 (`pages/services.astro`)
- **ServiceCard.astro** — 서비스별 카드
- 서비스 상세 설명 섹션

## 완료 기준
- [ ] 3개 페이지가 모두 접근 가능하고 콘텐츠가 표시됨
- [ ] 모바일/데스크톱 반응형 레이아웃이 동작함
- [ ] 다크모드에서 모든 페이지가 올바르게 표시됨
- [ ] 데이터 파일에서 콘텐츠를 불러와 렌더링함
- [ ] 네비게이션으로 모든 페이지 간 이동 가능
