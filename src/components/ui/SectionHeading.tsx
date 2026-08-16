import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  align = 'left',
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-10 space-y-3',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl',
        className
      )}
    >
      {tag && (
        <div
          className={cn(
            'inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-400 font-semibold',
            align === 'center' && 'justify-center'
          )}
        >
          <span className="h-px w-4 bg-brand-500/60" />
          <span>{tag}</span>
          <span className="h-px w-4 bg-brand-500/60" />
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
