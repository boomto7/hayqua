/**
 * 메뉴 관련 타입 정의
 * 데이터 구조를 명확히 정의하여 타입 안정성을 보장합니다.
 * 
 * ⚠️ 이 파일의 Category 타입은 자동 생성됩니다.
 * category-database.md를 수정하고 npm run generate-menu를 실행하세요.
 */

export type Category = 
  | 'pho'            // 쌀국수
  | 'friedNoodles'   // 볶음면
  | 'friedRice'      // 볶음밥
  | 'special'        // 스페셜메뉴
  | 'side'           // 애피타이져
  | 'drink'          // 음료
  | 'alcohol'        // 주류
  | 'hotfood';        // 안주류

export interface MenuOption {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  description?: string;
  price?: number;
  category: Category;
  image?: string;
  isPopular?: boolean;
  isNew?: boolean;
  isBest?: boolean;
  spicyLevel?: number;  // 매운맛 단계: 0(안매움), 1(매움), 2(더매움), 3(아주매움)
  options?: MenuOption[];
  note?: string;
}

export interface MenuCategory {
  id: Category;
  name: string;
  nameEn: string;
  description: string;
  order?: number;  // 카테고리 표시 순서
}

export interface Restaurant {
  name: string;
  description: string;
  logo?: string;
  contact: {
    phone: string;
    address: string;
    hours: string;
  };
}
