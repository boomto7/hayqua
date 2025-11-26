/**
 * 메뉴 데이터
 * 실제 환경에서는 API나 데이터베이스에서 가져올 데이터입니다.
 */

import { MenuItem, MenuCategory } from '@/types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'main',
    name: '메인 요리',
    description: '푸짐하고 맛있는 메인 메뉴',
  },
  {
    id: 'side',
    name: '사이드 메뉴',
    description: '메인 요리와 함께 즐기는 사이드',
  },
  {
    id: 'beverage',
    name: '음료',
    description: '시원하고 상큼한 음료',
  },
  {
    id: 'dessert',
    name: '디저트',
    description: '달콤한 마무리',
  },
];

export const menuItems: MenuItem[] = [
  // 메인 요리
  {
    id: 'm1',
    name: '김치찌개',
    description: '푸짐한 돼지고기와 묵은지로 끓인 진한 김치찌개',
    price: 9000,
    category: 'main',
    isPopular: true,
    spicyLevel: 3,
  },
  {
    id: 'm2',
    name: '된장찌개',
    description: '구수한 된장과 신선한 채소가 가득한 된장찌개',
    price: 8000,
    category: 'main',
    spicyLevel: 1,
  },
  {
    id: 'm3',
    name: '불고기',
    description: '특제 양념에 재운 부드러운 소고기 불고기',
    price: 15000,
    category: 'main',
    isPopular: true,
  },
  {
    id: 'm4',
    name: '제육볶음',
    description: '매콤달콤한 양념으로 볶은 제육볶음',
    price: 11000,
    category: 'main',
    spicyLevel: 4,
    isNew: true,
  },
  
  // 사이드 메뉴
  {
    id: 's1',
    name: '계란말이',
    description: '부드럽고 폭신한 계란말이',
    price: 5000,
    category: 'side',
  },
  {
    id: 's2',
    name: '김치전',
    description: '바삭하게 구운 김치전',
    price: 7000,
    category: 'side',
    isPopular: true,
  },
  {
    id: 's3',
    name: '떡볶이',
    description: '매콤달콤한 떡볶이',
    price: 6000,
    category: 'side',
    spicyLevel: 3,
  },
  
  // 음료
  {
    id: 'b1',
    name: '콜라',
    description: '시원한 콜라',
    price: 2000,
    category: 'beverage',
  },
  {
    id: 'b2',
    name: '사이다',
    description: '상큼한 사이다',
    price: 2000,
    category: 'beverage',
  },
  {
    id: 'b3',
    name: '아메리카노',
    description: '진한 아메리카노',
    price: 3000,
    category: 'beverage',
  },
  
  // 디저트
  {
    id: 'd1',
    name: '아이스크림',
    description: '시원한 바닐라 아이스크림',
    price: 4000,
    category: 'dessert',
  },
  {
    id: 'd2',
    name: '과일 플레이트',
    description: '신선한 제철 과일 모음',
    price: 8000,
    category: 'dessert',
    isNew: true,
  },
];

