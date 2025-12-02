/**
 * 색상 팔레트
 * 프로젝트 전체에서 사용하는 색상을 중앙에서 관리합니다.
 * 
 * BI 이미지에서 추출한 색상을 기반으로 구성되었습니다.
 * 메인 색상: 살구색 계열 (#D4A574)
 * 서브 색상: 베이지, 브라운 계열
 */

export const colors = {
  // 메인 색상 (Primary)
  primary: {
    main: '#D4A574',      // 메인 살구색
    hover: '#C89664',     // 호버 상태
    active: '#B88654',    // 클릭/액티브 상태
    dark: '#8B6F47',      // 다크 텍스트
  },

  // 배경 색상 (Background)
  background: {
    light: '#FFF8E7',     // 연한 베이지 배경
    hover: '#FFEED6',     // 호버 배경
    active: '#FFE4C4',    // 액티브 배경
    warning: '#FFE4B5',   // 경고 배지 배경
  },

  // 텍스트 색상 (Text)
  text: {
    primary: '#8B6F47',   // 기본 텍스트 (다크 살구색)
    secondary: '#6B5F47', // 보조 텍스트
    white: '#FFFFFF',     // 흰색 텍스트
    gray: {
      300: '#D1D5DB',     // 연한 회색
      500: '#6B7280',     // 중간 회색
      600: '#4B5563',     // 다크 회색
      900: '#111827',     // 매우 다크 회색
    },
  },

  // 헤더/푸터 색상
  header: {
    background: '#FFF8E7', // 헤더 배경 (연한 베이지)
    text: '#8B6F47',      // 헤더 텍스트 (다크 살구색)
  },

  footer: {
    background: '#FFF8E7', // 푸터 배경 (연한 베이지)
    text: '#8B6F47',       // 푸터 텍스트 (다크 살구색)
  },

  // 상태 색상 (Status)
  status: {
    success: '#10B981',    // 성공 (초록)
    warning: '#F59E0B',    // 경고 (주황)
    danger: '#B88654',     // 위험/추천 배지
    info: '#3B82F6',       // 정보 (파랑)
  },
} as const;

/**
 * Tailwind CSS에서 사용할 수 있도록 색상 값을 반환합니다.
 * 예: colors.primary.main -> '#D4A574'
 */
export type ColorKey = keyof typeof colors;

/**
 * 사용 예시:
 * 
 * // 컴포넌트에서 직접 사용
 * className={`bg-[${colors.primary.main}]`}
 * 
 * // 또는 CSS 변수로 사용
 * style={{ backgroundColor: colors.primary.main }}
 * 
 * // Tailwind config에 추가하여 사용
 * // tailwind.config.js에서:
 * // colors: { ...colors }
 */

