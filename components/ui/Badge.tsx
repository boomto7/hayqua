/**
 * Badge 컴포넌트
 * 태그, 라벨, 상태 표시용 배지 컴포넌트
 */

import { ReactNode } from 'react';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-[#D4A574] text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-[#FFE4B5] text-[#8B6F47]',
  danger: 'bg-[#B88654] text-white',
  info: 'bg-[#FFF8E7] text-[#8B6F47]',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5',
};

export function Badge({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: BadgeProps) {
  return (
    <span 
      className={`inline-flex items-center rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}

