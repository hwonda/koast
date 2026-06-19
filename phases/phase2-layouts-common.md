# Phase 2: 레이아웃 & 공통 컴포넌트

## 목표
모든 페이지에서 사용할 레이아웃과 공통 컴포넌트를 구축한다.

## 작업 목록

### 2-1. BaseLayout.astro
- HTML 기본 구조 (`<html lang="ko">`)
- SEOHead 통합 (meta, OG tags, JSON-LD)
- 글로벌 스타일 import

### 2-2. SEOHead.astro
- title, description, og:image, og:locale(ko_KR)
- canonical URL
- JSON-LD (Organization 스키마)

### 2-3. Header.astro + Navigation.tsx
- 로고 + 네비게이션 링크
- Navigation.tsx: React Island (`client:load`)
  - 데스크톱: 가로 메뉴
  - 모바일: 햄버거 메뉴 토글
  - 다크모드 토글 버튼 (Sun/Moon 아이콘)

### 2-3-1. ThemeToggle (Navigation 내부)
- `<html>` 에 `dark` 클래스 토글
- localStorage에 테마 저장, 시스템 설정 감지
- 페이지 로드 시 FOUC 방지 (인라인 스크립트)

### 2-4. Footer.astro
- 회사 정보, 소셜 링크, 저작권
- 하단 네비게이션

### 2-5. 공통 컴포넌트
- `SectionHeading.astro` — 섹션 제목 + 부제목
- `Button.astro` — 버튼 (variant: primary, secondary, outline)
- `Card.astro` — 범용 카드 컴포넌트

### 2-6. PageLayout.astro
- BaseLayout을 확장
- Header + main(slot) + Footer 구조

### 2-7. constants.ts
- 사이트 이름, URL, 네비게이션 링크 배열
- 회사 기본 정보 (연락처, 주소 등)

## 완료 기준
- [ ] 모든 페이지에서 Header/Footer가 표시됨
- [ ] 모바일에서 햄버거 메뉴가 동작함
- [ ] SEO meta 태그가 올바르게 생성됨
- [ ] 공통 컴포넌트가 재사용 가능한 형태로 완성됨
