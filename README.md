# YouTube Music 클론

Next.js와 TypeScript를 사용하여 구현한 YouTube Music 클론 프로젝트입니다.

# 기술 스택

# 프레임워크 & 언어
- Next.js 14.1.0
- React 18
- TypeScript

# 스타일링
- TailwindCSS
- tailwind-merge
- tailwindcss-animate
- class-variance-authority

# 상태 관리
- Zustand

# UI 컴포넌트 & 라이브러리
- **Radix UI**
  - `@radix-ui/react-dialog`: 모달 및 다이얼로그
  - `@radix-ui/react-dropdown-menu`: 드롭다운 메뉴
  - `@radix-ui/react-slider`: 슬라이더 컴포넌트
  - `@radix-ui/react-avatar`: 아바타 컴포넌트
  - 접근성(a11y) 표준 준수
  - 키보드 네비게이션 지원

- **추가 UI 컴포넌트**
  - `embla-carousel-react`: 터치 기반 캐러셀
  - `vaul`: 드로워 및 바텀시트
  - `react-icons`: 다양한 아이콘 세트
  - `react-spinners`: 로딩 애니메이션
  - `next-themes`: 다크 모드 관리

# 개발 도구 & 품질 관리
- **코드 품질**
  - ESLint: 코드 품질 및 스타일 검사
  - TypeScript: 타입 체크 및 개발 생산성 향상

- **빌드 도구**
  - PostCSS: CSS 전처리기
  - Autoprefixer: 크로스 브라우저 CSS 지원

# 설치 방법

1. 저장소 클론
```bash
git clone [repository-url]
cd yt_music
```

2. 의존성 설치
```bash
# npm 사용 시
npm install

# yarn 사용 시
yarn install
```

3. 개발 서버 실행
```bash
# npm 사용 시
npm run dev

# yarn 사용 시
yarn dev
```

# 프로젝트 구조

```
yt_music/
├── app/              # Next.js 앱 라우터
├── components/       # 재사용 가능한 UI 컴포넌트
├── hooks/           # 커스텀 React 훅
├── providers/       # 앱 전역 상태 및 컨텍스트
├── lib/             # 유틸리티 함수 및 공통 로직
├── types/           # TypeScript 타입 정의
└── public/          # 정적 파일
```

# 주요 기능

- 다크 모드 지원 (next-themes)
- 음악 재생 인터페이스
- 반응형 디자인
- 캐러셀/슬라이더 기능
- 접근성을 고려한 UI 컴포넌트

# 사용 가능한 스크립트

- `npm run dev` or `yarn dev`: 개발 서버 실행
- `npm run build` or `yarn build`: 프로덕션용 빌드
- `npm run start` or `yarn start`: 프로덕션 서버 실행
- `npm run lint` or `yarn lint`: 린트 검사

# 환경 설정

- Node.js 18.0.0 이상
- npm 또는 yarn 패키지 매니저
