/**
 * Typography 컴포넌트
 * 텍스트 스타일링을 위한 컴포넌트
 */

import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function Heading1({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 ${className}`}>
      {children}
    </h1>
  );
}

export function Heading2({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 ${className}`}>
      {children}
    </h2>
  );
}

export function Heading3({ children, className = '' }: TypographyProps) {
  return (
    <h3 className={`text-2xl md:text-3xl font-semibold text-gray-900 ${className}`}>
      {children}
    </h3>
  );
}

export function Heading4({ children, className = '' }: TypographyProps) {
  return (
    <h4 className={`text-xl md:text-2xl font-semibold text-gray-900 ${className}`}>
      {children}
    </h4>
  );
}

export function Paragraph({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-base text-gray-700 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function Caption({ children, className = '' }: TypographyProps) {
  return (
    <span className={`text-sm text-gray-500 ${className}`}>
      {children}
    </span>
  );
}


