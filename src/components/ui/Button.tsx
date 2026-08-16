import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  external,
  icon,
  iconPosition = 'right',
  className,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 disabled:opacity-50 disabled:cursor-not-allowed select-none group';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-glow-sm hover:shadow-glow-md hover:brightness-110 active:scale-[0.98] border border-white/10 rounded-lg',
    secondary:
      'bg-background-elevated/80 text-text-primary hover:bg-background-surfaceHover active:scale-[0.98] border border-white/10 hover:border-white/20 rounded-lg',
    outline:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/[0.04] active:scale-[0.98] border border-white/15 hover:border-white/30 rounded-lg',
    ghost:
      'bg-transparent text-text-muted hover:text-text-primary hover:bg-white/[0.05] rounded-lg',
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="shrink-0 transition-transform group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const mergedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={mergedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={mergedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={mergedClasses} {...props}>
      {content}
    </button>
  );
};
