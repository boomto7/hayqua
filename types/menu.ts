/**
 * 메뉴 관련 타입 정의
 * 데이터 구조를 명확히 정의하여 타입 안정성을 보장합니다.
 */

export type Category = 'main' | 'side' | 'beverage' | 'dessert';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image?: string;
  isPopular?: boolean;
  isNew?: boolean;
  allergens?: string[];
  spicyLevel?: 1 | 2 | 3 | 4 | 5;
}

export interface MenuCategory {
  id: Category;
  name: string;
  description: string;
  icon?: string;
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

