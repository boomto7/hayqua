/**
 * 메뉴 데이터를 관리하는 커스텀 훅
 * 데이터 로직과 UI를 분리하여 관심사를 명확히 합니다.
 */

'use client';

import { useState, useMemo } from 'react';
import { MenuItem, Category } from '@/types';
import { menuItems, menuCategories } from '@/data';

interface UseMenuOptions {
  isNightMode?: boolean;
}

export function useMenu(options: UseMenuOptions = {}) {
  const { isNightMode = false } = options;
  
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 나이트 모드 필터링
  const nightFilteredItems = useMemo(() => {
    if (isNightMode) {
      // 나이트 모드: 
      // - isNight가 1인 아이템 (나이트 전용) 표시
      // - isNight가 0이거나 없는 아이템 (항상 표시) 표시
      // 즉, 모든 아이템 표시 (나이트 필드가 없으면 0으로 간주)
      return menuItems;
    } else {
      // 일반 모드: 
      // - isNight가 1인 아이템은 숨김
      // - isNight가 0이거나 없는 아이템은 표시
      return menuItems.filter(item => !item.isNight || item.isNight === 0);
    }
  }, [isNightMode]);

  // 나이트 모드 카테고리 필터링
  const nightFilteredCategories = useMemo(() => {
    if (isNightMode) {
      // 나이트 모드: 
      // - isNight가 1인 카테고리 (나이트 전용) 표시
      // - isNight가 0이거나 없는 카테고리 (항상 표시) 표시
      // 즉, 모든 카테고리 표시 (나이트 필드가 없으면 0으로 간주)
      return menuCategories;
    } else {
      // 일반 모드: 
      // - isNight가 1인 카테고리는 숨김
      // - isNight가 0이거나 없는 카테고리는 표시
      return menuCategories.filter(cat => !cat.isNight || cat.isNight === 0);
    }
  }, [isNightMode]);

  // 카테고리별 필터링
  const filteredByCategory = useMemo(() => {
    if (selectedCategory === 'all') {
      return nightFilteredItems;
    }
    return nightFilteredItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory, nightFilteredItems]);

  // 검색어 필터링
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return filteredByCategory;
    }
    const query = searchQuery.toLowerCase();
    return filteredByCategory.filter(item => 
      item.name.toLowerCase().includes(query) ||
      (item.nameEn && item.nameEn.toLowerCase().includes(query)) ||
      (item.description && item.description.toLowerCase().includes(query))
    );
  }, [filteredByCategory, searchQuery]);

  // 인기/추천 메뉴 (나이트 모드 필터링 적용)
  const popularItems = useMemo(() => 
    nightFilteredItems.filter(item => item.isPopular || item.isBest),
    [nightFilteredItems]
  );

  // 특정 카테고리의 메뉴만 가져오기 (나이트 모드 필터링 적용)
  const getItemsByCategory = (category: Category) => {
    return nightFilteredItems.filter(item => item.category === category);
  };

  return {
    // 데이터
    allItems: nightFilteredItems,
    filteredItems,
    popularItems,
    categories: nightFilteredCategories,
    
    // 상태
    selectedCategory,
    searchQuery,
    isNightMode,
    
    // 액션
    setSelectedCategory,
    setSearchQuery,
    getItemsByCategory,
  };
}
