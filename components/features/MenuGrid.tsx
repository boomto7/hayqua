/**
 * MenuGrid 컴포넌트
 * 메뉴 아이템들을 그리드 레이아웃으로 표시
 */

'use client';

import { MenuItem } from '@/types';
import { MenuCard } from './MenuCard';

interface MenuGridProps {
  items: MenuItem[];
  emptyMessage?: string;
}

export function MenuGrid({ items, emptyMessage = '메뉴가 없습니다.' }: MenuGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}

