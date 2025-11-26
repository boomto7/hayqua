/**
 * MenuCard 컴포넌트
 * 개별 메뉴 아이템을 표시하는 카드 컴포넌트
 * UI 컴포넌트를 조합하여 비즈니스 로직을 구현합니다.
 */

'use client';

import { MenuItem } from '@/types';
import { Card, CardBody, Badge } from '@/components/ui';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원';
  };

  const getSpicyLevelText = (level?: number) => {
    if (!level) return null;
    const peppers = '🌶️'.repeat(level);
    return peppers;
  };

  return (
    <Card hover className="h-full">
      <CardBody className="flex flex-col h-full">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {item.name}
            </h3>
            <div className="flex gap-1 ml-2">
              {item.isPopular && (
                <Badge variant="danger" size="sm">인기</Badge>
              )}
              {item.isNew && (
                <Badge variant="success" size="sm">NEW</Badge>
              )}
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">
            {item.description}
          </p>
          
          {item.spicyLevel && (
            <div className="mb-2">
              <span className="text-sm">
                {getSpicyLevelText(item.spicyLevel)}
              </span>
            </div>
          )}
        </div>
        
        <div className="mt-auto pt-3 border-t border-gray-100">
          <p className="text-xl font-bold text-blue-600">
            {formatPrice(item.price)}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

