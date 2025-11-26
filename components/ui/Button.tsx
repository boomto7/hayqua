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
  primary: 'bg-[#1a2332] text-white hover:bg-[#2a3f5f] active:bg-[#0f1419]',
  secondary: 'bg-[#f4a460] text-white hover:bg-[#d89050] active:bg-[#c67d40]',
  outline: 'border-2 border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white active:bg-[#0f1419]',
  ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200',
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

