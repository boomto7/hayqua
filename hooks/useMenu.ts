/**
 * 메뉴 데이터를 관리하는 커스텀 훅
 * 데이터 로직과 UI를 분리하여 관심사를 명확히 합니다.
 */

'use client';

import { useState, useMemo } from 'react';
import { MenuItem, Category } from '@/types';
import { menuItems, menuCategories } from '@/data';

export function useMenu() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 카테고리별 필터링
  const filteredByCategory = useMemo(() => {
    if (selectedCategory === 'all') {
      return menuItems;
    }
    return menuItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

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

  // 인기/추천 메뉴
  const popularItems = useMemo(() => 
    menuItems.filter(item => item.isPopular || item.isBest),
    []
  );

  // 특정 카테고리의 메뉴만 가져오기
  const getItemsByCategory = (category: Category) => {
    return menuItems.filter(item => item.category === category);
  };

  return {
    // 데이터
    allItems: menuItems,
    filteredItems,
    popularItems,
    categories: menuCategories,
    
    // 상태
    selectedCategory,
    searchQuery,
    
    // 액션
    setSelectedCategory,
    setSearchQuery,
    getItemsByCategory,
  };
}
