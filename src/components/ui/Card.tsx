import React, { useRef, useState } from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowOnHover?: boolean;
  className?: string;
  subtle?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  glowOnHover = true,
  className,
  subtle = false,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!glowOnHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition(null);
      }}
      className={cn(
        'relative overflow-hidden rounded-xl transition-all duration-300',
        subtle
          ? 'bg-background-surface/50 border border-white/[0.06]'
          : 'bg-background-surface/80 backdrop-blur-md border border-white/[0.08] shadow-lg shadow-black/40',
        'hover:border-white/[0.18]',
        className
      )}
      {...props}
    >
      {/* Subtle radial spotlight following cursor */}
      {glowOnHover && isHovered && mousePosition && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
