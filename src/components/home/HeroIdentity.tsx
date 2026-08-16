import React from 'react';
import { MapPin } from 'lucide-react';
import { TechnicalVisualizer } from './TechnicalVisualizer';
import { profileData } from '../../data/profile';
import { Badge } from '../ui/Badge';

export const HeroIdentity: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      {/* Top Identity Card */}
      <div className="rounded-2xl border border-white/10 bg-background-surface/80 backdrop-blur-xl p-4 sm:p-5 shadow-xl relative overflow-hidden group">
        
        {/* Subtle ambient light */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-4 sm:gap-5">
          
          {/* Photo Frame */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-white/15 bg-background-subtle shadow-inner relative flex items-center justify-center group-hover:border-brand-500/40 transition-colors">
              <img
                src="/profile.jpg"
                alt={profileData.name}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center block"
              />

              {/* Subtle corner tech markings */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/40 pointer-events-none" />
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/40 pointer-events-none" />
            </div>

            {/* Online Status Pill */}
            <span className="absolute -bottom-1.5 -right-1.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-background-surface" />
            </span>
          </div>

          {/* Identity Metadata */}
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400 font-semibold">
                  DEV_IDENTITY // 01
                </span>
              </div>
              <Badge variant="success" size="sm" dot>
                Seeking Internship
              </Badge>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>{profileData.name}</span>
                <span className="text-xs font-mono font-normal text-text-muted hidden sm:inline">
                  (BCA Student)
                </span>
              </h3>
              <p className="text-xs font-mono text-text-secondary">
                Focus: C • Python • Web Basics
              </p>
            </div>

            <div className="pt-1 flex items-center gap-3 text-[11px] font-mono text-text-muted">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-400" />
                <span>India</span>
              </span>
              <span>•</span>
              <span className="text-emerald-400/90 font-medium">
                Active Builder
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Signature Topology Visualizer */}
      <TechnicalVisualizer />
    </div>
  );
};
