# Phase 4: 블로그 (Content Collections)

## 목표
Astro Content Collections를 활용한 마크다운 기반 블로그 시스템을 구축한다.

## 작업 목록

### 4-1. Content Collections 스키마 정의
- `src/content/config.ts`
- Blog 컬렉션 스키마:
  - title, description, publishedAt, updatedAt, author, tags, thumbnail, draft

### 4-2. BlogPostLayout.astro
- 블로그 포스트 전용 레이아웃
- 제목, 작성일, 태그, 읽기 시간
- 목차 (TableOfContents.astro)
- 마크다운 본문 렌더링

### 4-3. 블로그 목록 페이지 (`pages/blog/index.astro`)
- 모든 블로그 포스트 쿼리 (날짜순 정렬, draft 제외)
- **BlogCard.astro** — 썸네일, 제목, 설명, 날짜, 태그
- **BlogList.astro** — 카드 그리드

### 4-4. 블로그 상세 페이지 (`pages/blog/[...slug].astro`)
- `getStaticPaths()` 로 모든 포스트 경로 생성
- BlogPostLayout으로 렌더링
- Article JSON-LD 구조화 데이터

### 4-5. 샘플 블로그 포스트
- 2~3개 샘플 마크다운 파일 작성

### 4-6. 홈 페이지 연결
- RecentBlogPosts 컴포넌트에서 최신 3개 포스트를 실제 데이터로 렌더링

## 완료 기준
- [ ] `/blog` 에서 블로그 목록이 표시됨
- [ ] 개별 블로그 포스트 페이지가 올바르게 렌더링됨
- [ ] 마크다운 파일 추가만으로 새 포스트 생성 가능
- [ ] 홈 페이지에 최근 블로그 포스트가 표시됨
- [ ] 태그, 날짜 등 메타 정보가 올바르게 표시됨
