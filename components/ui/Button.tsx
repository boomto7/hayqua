/**
 * Button 컴포넌트
 * 범용 버튼 컴포넌트
 */

import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#D4A574] text-white hover:bg-[#C89664] active:bg-[#B88654]',
  secondary: 'bg-[#FFF8E7] text-[#8B6F47] hover:bg-[#FFEED6] active:bg-[#FFE4C4]',
  outline: 'border-2 border-[#D4A574] text-[#8B6F47] hover:bg-[#D4A574] hover:text-white active:bg-[#C89664]',
  ghost: 'text-[#8B6F47] hover:bg-[#FFF8E7] active:bg-[#FFEED6]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3',
};

export function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

