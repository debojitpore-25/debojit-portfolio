import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info' | 'outline' | 'learning';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  dot = false,
}) => {
  const variantStyles = {
    default: 'bg-background-elevated/70 text-text-secondary border-white/10',
    success: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30',
    warning: 'bg-amber-950/40 text-amber-300 border-amber-500/30',
    info: 'bg-indigo-950/40 text-brand-400 border-brand-500/30',
    outline: 'bg-transparent text-text-muted border-white/10',
    learning: 'bg-sky-950/40 text-sky-300 border-sky-500/30',
  };

  const dotColors = {
    default: 'bg-text-muted',
    success: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]',
    warning: 'bg-amber-400',
    info: 'bg-brand-400',
    outline: 'bg-text-muted',
    learning: 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 font-mono',
    md: 'text-xs px-2.5 py-1 font-mono',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium tracking-tight backdrop-blur-sm transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full shrink-0',
            dotColors[variant]
          )}
        />
      )}
      {children}
    </span>
  );
};
