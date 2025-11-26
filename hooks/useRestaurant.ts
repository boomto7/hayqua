/**
 * 식당 정보를 관리하는 커스텀 훅
 */

'use client';

import { restaurantInfo } from '@/data';

export function useRestaurant() {
  return {
    restaurant: restaurantInfo,
  };
}

