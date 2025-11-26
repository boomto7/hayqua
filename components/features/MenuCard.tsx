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

  const getSpicyIcon = (level?: number) => {
    if (!level || level === 0) return null;
    return '🌶️'.repeat(level);
  };

  return (
    <Card hover className="flex flex-col">
      {/* 이미지 영역 */}
      {item.image ? (
        <div className="relative w-full h-64 bg-gray-100 overflow-hidden group">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* 호버 시 오버레이 */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          
          {/* 배지를 이미지 위에 표시 */}
          {(item.isPopular || item.isBest) && (
            <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
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
        <div className="relative w-full h-64 bg-gradient-to-br from-[#2a3f5f] to-[#1a2332] flex items-center justify-center overflow-hidden">
          <div className="text-center z-10">
            <div className="text-6xl mb-3">🍜</div>
            <p className="text-sm text-gray-300 font-medium">이미지 준비중</p>
          </div>
          {/* 배경 패턴 */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>
          
          {/* 배지를 플레이스홀더 위에 표시 */}
          {(item.isPopular || item.isBest) && (
            <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
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

      <CardBody className="flex flex-col flex-1 p-5">
        <div className="flex-1">
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-[#1a2332]">
                {item.name}
              </h3>
              {item.spicyLevel && item.spicyLevel > 0 ? (
                <span className="text-base" title={`매운맛 레벨 ${item.spicyLevel}`}>
                  {getSpicyIcon(item.spicyLevel)}
                </span>
              ) : null}
            </div>
            {item.nameEn && (
              <p className="text-xs text-gray-500">
                {item.nameEn}
              </p>
            )}
            {item.subtitle && (
              <p className="text-sm text-gray-600 mt-1">
                {item.subtitle}
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
                <div key={index} className="flex justify-between gap-2 text-sm">
                  <span className="text-gray-600 flex-1">{option.name}</span>
                  <span className="text-gray-900 font-medium whitespace-nowrap">
                    {formatPrice(option.price)}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* 노트 표시 */}
          {item.note && (
            <p className="text-xs text-[#f4a460] mb-2">
              ※ {item.note}
            </p>
          )}
        </div>
        
        {/* 가격 표시 */}
        {item.price && (
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-900">
              {formatPrice(item.price)}
            </p>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
