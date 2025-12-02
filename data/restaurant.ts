/**
 * 음식점 정보 데이터
 * 실제 환경에서는 API나 CMS에서 가져올 데이터입니다.
 */

import { Restaurant } from '@/types';

export const restaurantInfo: Restaurant = {
  name: 'HAY QUA',
  description: '베트남 & 퓨전 요리 전문점',
  contact: {
    phone: '0507-1346-3527',
    address: '경기 안양시 동안구 부림로 166 102호-2호',
    hours: '11:00 ~ 23:00',
  },
};
