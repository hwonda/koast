# Phase 1: 프로젝트 초기화

## 목표
Astro 프로젝트를 생성하고, 필수 의존성을 설치하고, 기본 설정을 완료한다.

## 작업 목록

### 1-1. Astro 프로젝트 생성
- `npm create astro@latest` 으로 minimal 템플릿 기반 프로젝트 생성

### 1-2. 의존성 설치
```
@astrojs/react @astrojs/sitemap
@tailwindcss/vite tailwindcss
react react-dom lucide-react
@types/react @types/react-dom (dev)
```

### 1-3. astro.config.mjs 설정
- `site`: GitHub Pages URL
- `base`: 프로젝트 경로 (필요 시)
- `output`: 'static'
- `integrations`: react(), sitemap()
- `vite.plugins`: tailwindcss()

### 1-4. tsconfig.json
- `@/*` 경로 별칭 설정

### 1-5. 스타일 설정
- `src/styles/global.css` — Pretendard 폰트 import, CSS 리셋
- `src/styles/tailwind.css` — `@import "tailwindcss"`

### 1-6. GitHub Actions 배포 워크플로우
- `.github/workflows/deploy.yml` 생성
- push to main → 빌드 → GitHub Pages 배포

### 1-7. .gitignore 생성

### 1-8. 디렉토리 구조 생성
```
src/
├── components/common/
├── components/home/
├── components/about/
├── components/services/
├── components/portfolio/
├── components/blog/
├── components/careers/
├── components/contact/
├── content/blog/
├── content/jobs/
├── data/
├── layouts/
├── pages/
├── styles/
├── types/
└── utils/
public/images/
```

## 완료 기준
- [x] `npm run dev` 실행 시 로컬 서버 정상 동작
- [x] Tailwind CSS 클래스가 적용됨
- [x] Pretendard 폰트가 로드됨
- [x] 프로젝트 디렉토리 구조가 생성됨
