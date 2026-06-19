# Phase 6: 문의 페이지 + 마무리

## 목표
문의 페이지를 완성하고, SEO/성능 최적화 및 최종 점검을 수행한다.

## 작업 목록

### 6-1. 문의 페이지 (`pages/contact.astro`)
- **ContactForm.tsx** — React Island (`client:visible`)
  - 필드: 이름, 이메일, 제목, 내용
  - Web3Forms API로 전송
- **CompanyInfo.astro** — 회사 주소, 전화번호, 이메일

### 6-2. 404 페이지
- `pages/404.astro` — 커스텀 404 페이지

### 6-3. SEO 최적화
- `robots.txt` (public/)
- `site.webmanifest` (public/)
- 페이지별 JSON-LD:
  - 홈: Organization
  - 블로그: Article
  - 채용: JobPosting

### 6-4. 성능 최적화
- 이미지 lazy loading
- 적절한 이미지 크기/포맷
- 불필요한 JS 제거 확인

### 6-5. 반응형 최종 점검
- 모바일 (375px~)
- 태블릿 (768px~)
- 데스크톱 (1024px~)

### 6-6. 배포 테스트
- GitHub에 push
- GitHub Actions 빌드 성공 확인
- GitHub Pages에서 모든 페이지 동작 확인
- 모든 링크 정상 동작 확인

## 완료 기준
- [ ] 문의 폼이 정상 동작하고 이메일 수신됨
- [ ] 404 페이지가 올바르게 표시됨
- [ ] Lighthouse 점수: Performance 90+, SEO 90+, Accessibility 90+
- [ ] GitHub Pages 배포 완료 및 전체 사이트 정상 동작
