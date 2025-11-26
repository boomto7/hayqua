/**
 * 음식점 정보 데이터
 * 실제 환경에서는 API나 CMS에서 가져올 데이터입니다.
 */

import { Restaurant } from '@/types';

export const restaurantInfo: Restaurant = {
  name: '맛있는 식당',
  description: '신선한 재료로 만드는 정성 가득한 요리',
  contact: {
    phone: '02-1234-5678',
    address: '서울시 강남구 테헤란로 123',
    hours: '월-금 11:00 - 21:00 / 주말 12:00 - 22:00',
  },
};

