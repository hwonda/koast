# Phase 5: 채용 (Content Collections + 지원 폼)

## 목표
마크다운 기반 채용공고 시스템과 이력서 파일 업로드가 가능한 지원 폼을 구축한다.

## 작업 목록

### 5-1. Jobs Content Collection 추가
- `src/content/config.ts` 에 jobs 컬렉션 추가
- 스키마: title, department, location, type(정규직/계약직/인턴/프리랜서), experience, publishedAt, closingDate, isActive

### 5-2. 채용 목록 페이지 (`pages/careers/index.astro`)
- 활성 채용공고만 표시 (isActive: true)
- **JobCard.astro** — 직무명, 부서, 근무지, 경력, 마감일
- **JobList.astro** — 카드 리스트

### 5-3. 채용 상세 페이지 (`pages/careers/[...slug].astro`)
- `getStaticPaths()` 로 경로 생성
- 공고 상세 내용 (주요업무, 자격요건, 우대사항 등)
- 하단에 지원 폼 배치

### 5-4. ApplicationForm.tsx (React Island)
- `client:visible` 로 지연 로드
- 필드: 이름, 이메일, 전화번호, 자기소개(textarea), 이력서(file input)
- 파일 제한: PDF만, 5MB 이하
- Hidden 필드: access_key(Web3Forms), subject, job_title
- 클라이언트 유효성 검사
- Web3Forms API로 `multipart/form-data` 전송
- 성공/실패 상태 표시 (한국어 메시지)
- **추후 NAS 전환**: fetch URL만 교체

### 5-5. 샘플 채용공고
- 2~3개 샘플 마크다운 파일 작성

## 완료 기준
- [ ] `/careers` 에서 채용공고 목록 표시
- [ ] 개별 채용공고 상세 페이지 동작
- [ ] 지원 폼에서 파일 업로드 + 제출 동작
- [ ] Web3Forms로 이메일 수신 확인
- [ ] 마크다운 파일 추가만으로 새 공고 생성 가능
