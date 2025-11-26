/**
 * MenuCard 컴포넌트
 * 개별 메뉴 아이템을 표시하는 카드 컴포넌트
 * UI 컴포넌트를 조합하여 비즈니스 로직을 구현합니다.
 */

'use client';

import Image from 'next/image';
import { MenuItem } from '@/types';
import { Card, CardBody, Badge } from '@/components/ui';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원';
  };

  return (
    <Card hover className="h-full">
      {/* 이미지 영역 */}
      {item.image ? (
        <div className="relative w-full h-48 bg-gray-100">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* 배지를 이미지 위에 표시 */}
          {(item.isPopular || item.isBest) && (
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              {item.isPopular && (
                <Badge variant="danger" size="sm">추천</Badge>
              )}
              {item.isBest && (
                <Badge variant="warning" size="sm">BEST</Badge>
              )}
            </div>
          )}
        </div>
      ) : (
        // 이미지가 없을 때 플레이스홀더
        <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">🍜</div>
            <p className="text-xs text-gray-400">이미지 준비중</p>
          </div>
          {/* 배지를 플레이스홀더 위에 표시 */}
          {(item.isPopular || item.isBest) && (
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              {item.isPopular && (
                <Badge variant="danger" size="sm">추천</Badge>
              )}
              {item.isBest && (
                <Badge variant="warning" size="sm">BEST</Badge>
              )}
            </div>
          )}
        </div>
      )}

      <CardBody className="flex flex-col h-full">
        <div className="flex-1">
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {item.name}
            </h3>
            {item.nameEn && (
              <p className="text-xs text-gray-500">
                {item.nameEn}
              </p>
            )}
          </div>
          
          {item.description && (
            <p className="text-sm text-gray-600 mb-3">
              {item.description}
            </p>
          )}
          
          {/* 옵션 표시 */}
          {item.options && item.options.length > 0 && (
            <div className="mb-3 space-y-1">
              {item.options.map((option, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{option.name}</span>
                  <span className="text-gray-900 font-medium">
                    {formatPrice(option.price)}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* 노트 표시 */}
          {item.note && (
            <p className="text-xs text-blue-600 mb-2">
              ※ {item.note}
            </p>
          )}
        </div>
        
        {/* 가격 표시 (옵션이 없는 경우만) */}
        {item.price && (
          <div className="mt-auto pt-3 border-t border-gray-100">
            <p className="text-xl font-bold text-blue-600">
              {formatPrice(item.price)}
            </p>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
