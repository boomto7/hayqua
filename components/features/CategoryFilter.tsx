/**
 * CategoryFilter 컴포넌트
 * 메뉴 카테고리 필터링 UI
 */

'use client';

import { Category } from '@/types';
import { Button } from '@/components/ui';

interface CategoryFilterProps {
  categories: Array<{ id: Category; name: string; description: string }>;
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
      <div className="flex gap-2 min-w-max">
        <Button
          variant={selectedCategory === 'all' ? 'primary' : 'outline'}
          size="md"
          onClick={() => onCategoryChange('all')}
        >
          전체
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'primary' : 'outline'}
            size="md"
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}


