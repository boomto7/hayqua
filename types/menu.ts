/**
 * 메뉴 관련 타입 정의
 * 데이터 구조를 명확히 정의하여 타입 안정성을 보장합니다.
 */

export type Category = 
  | 'hotfood'           // 안주류
  | 'pho'               // 칼국수
  | 'friedNoodles'      // 볶음면
  | 'friedRice'         // 볶음밥
  | 'special'           // 스페셜메뉴
  | 'side'              // 애피타이져
  | 'drink'             // 음료
  | 'alcohol';          // 주류

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
  isPopular?: boolean;
  isNew?: boolean;
  isBest?: boolean;
  options?: MenuOption[];
  note?: string;
}

export interface MenuCategory {
  id: Category;
  name: string;
  nameEn: string;
  description: string;
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
