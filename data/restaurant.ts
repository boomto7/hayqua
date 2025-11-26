/**
 * 음식점 정보 데이터
 * 실제 환경에서는 API나 CMS에서 가져올 데이터입니다.
 */

import { Restaurant } from '@/types';

export const restaurantInfo: Restaurant = {
  name: 'HAY QUA',
  description: '베트남 & 퓨전 요리 전문점',
  contact: {
    phone: '02-1234-5678',
    address: '서울시 강남구 테헤란로 123',
    hours: '14:00 ~ 24:00 (라스트오더 23:00)',
  },
};
