# 음식점 메뉴 웹사이트

Next.js로 제작된 음식점 메뉴 웹사이트입니다. 디자이너와 개발자가 효율적으로 협업할 수 있도록 설계되었습니다.

## 🎯 주요 특징

- **관심사의 분리**: 데이터 레이어와 UI 레이어가 명확히 분리되어 있습니다
- **디자인 시스템**: 재사용 가능한 UI 컴포넌트로 구성되어 있습니다
- **타입 안정성**: TypeScript로 작성되어 타입 안정성을 보장합니다
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험을 제공합니다

## 📁 프로젝트 구조

```
hayqua/
├── app/                    # Next.js 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/
│   ├── ui/                # 디자인 시스템 컴포넌트 (디자이너 작업 영역)
│   │   ├── Card.tsx       # 카드 컴포넌트
│   │   ├── Badge.tsx      # 배지 컴포넌트
│   │   ├── Button.tsx     # 버튼 컴포넌트
│   │   ├── Container.tsx  # 컨테이너 컴포넌트
│   │   └── Typography.tsx # 타이포그래피 컴포넌트
│   └── features/          # 기능별 컴포넌트 (UI 조합)
│       ├── MenuCard.tsx   # 메뉴 카드
│       ├── MenuGrid.tsx   # 메뉴 그리드
│       ├── CategoryFilter.tsx  # 카테고리 필터
│       ├── SearchBar.tsx  # 검색 바
│       └── Header.tsx     # 헤더
├── data/                  # 데이터 (개발자 작업 영역)
│   ├── menu.ts           # 메뉴 데이터
│   └── restaurant.ts     # 식당 정보
├── hooks/                 # 커스텀 훅 (비즈니스 로직)
│   ├── useMenu.ts        # 메뉴 관련 로직
│   └── useRestaurant.ts  # 식당 정보 로직
└── types/                 # 타입 정의
    └── menu.ts           # 메뉴 관련 타입
```

## 🎨 디자이너를 위한 가이드

### UI 컴포넌트 수정하기

`components/ui/` 폴더의 컴포넌트들을 수정하면 전체 사이트의 디자인이 변경됩니다.

**예시: 버튼 색상 변경**
```typescript
// components/ui/Button.tsx
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700', // 여기를 수정
  // ...
};
```

### Tailwind CSS 사용

모든 스타일링은 Tailwind CSS를 사용합니다:
- `bg-blue-600`: 배경색
- `text-white`: 텍스트 색상
- `rounded-lg`: 둥근 모서리
- `shadow-md`: 그림자

## 👨‍💻 개발자를 위한 가이드

### 데이터 수정하기

`data/` 폴더의 파일을 수정하여 메뉴와 식당 정보를 변경할 수 있습니다.

**예시: 메뉴 추가**
```typescript
// data/menu.ts
export const menuItems: MenuItem[] = [
  {
    id: 'm5',
    name: '새로운 메뉴',
    description: '맛있는 새 메뉴입니다',
    price: 12000,
    category: 'main',
    isNew: true,
  },
  // ...
];
```

### 비즈니스 로직 수정하기

`hooks/` 폴더의 커스텀 훅을 수정하여 데이터 처리 로직을 변경할 수 있습니다.

## 🚀 시작하기

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 🔧 기술 스택

- **Next.js 15**: React 프레임워크
- **TypeScript**: 타입 안정성
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **React Hooks**: 상태 관리

## 📝 개발 철학

### 1. 관심사의 분리 (Separation of Concerns)

- **데이터 레이어** (`hooks/`, `data/`): 비즈니스 로직과 데이터 관리
- **UI 레이어** (`components/ui/`): 재사용 가능한 UI 컴포넌트
- **기능 레이어** (`components/features/`): UI 컴포넌트 조합
- **페이지 레이어** (`app/`): 데이터와 UI의 통합

### 2. 컴포넌트 구성

```
Page (데이터 + UI 통합)
  ↓
Feature Components (UI 조합 + 일부 로직)
  ↓
UI Components (순수 프레젠테이션)
```

### 3. 협업 가능한 구조

- **디자이너**: `components/ui/`와 스타일 수정
- **프론트엔드 개발자**: `components/features/`와 페이지 구성
- **백엔드 개발자**: `data/`를 API 호출로 대체
- **비즈니스 로직 개발자**: `hooks/`에서 로직 구현

## 🔄 다음 단계

1. **API 연동**: `data/` 폴더의 목 데이터를 실제 API로 교체
2. **상태 관리**: 복잡한 상태는 Context API나 Zustand 도입
3. **애니메이션**: Framer Motion 등으로 인터랙션 개선
4. **성능 최적화**: 이미지 최적화, 코드 스플리팅
5. **SEO**: 메타 태그, 구조화된 데이터 추가

## 📄 라이센스

MIT
# hayqua
