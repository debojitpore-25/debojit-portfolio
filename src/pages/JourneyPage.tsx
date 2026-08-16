import React, { useState } from 'react';
import {
  Milestone,
  GraduationCap,
  Terminal,
  Code2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { journeyData } from '../data/journey';
import { JourneyType, JourneyMilestone } from '../types';

export const JourneyPage: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');

  const filterOptions = ['All', 'Education', 'Foundation', 'Project', 'Milestone'];

  const filteredJourney = journeyData.filter((item: JourneyMilestone) => {
    if (filterType === 'All') return true;
    return item.type === filterType;
  });

  const getIcon = (type: JourneyType) => {
    switch (type) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-brand-400" />;
      case 'Foundation':
        return <Terminal className="w-4 h-4 text-sky-400" />;
      case 'Project':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'Milestone':
        return <Milestone className="w-4 h-4 text-amber-400" />;
    }
  };

  const getBadgeVariant = (type: JourneyType) => {
    switch (type) {
      case 'Education':
        return 'info';
      case 'Foundation':
        return 'learning';
      case 'Project':
        return 'success';
      case 'Milestone':
        return 'warning';
      default:
        return 'outline';
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeading
          tag="TIMELINE // PROGRESSION"
          title="Development Journey"
          description="A chronological record of my BCA coursework, programming practice in C and Python, and learning modern web development."
        />

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          <span className="text-xs font-mono text-text-muted mr-2">Filter Timeline:</span>
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilterType(opt)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filterType === opt
                  ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40 shadow-sm'
                  : 'bg-white/[0.04] text-text-secondary hover:text-white border border-white/5'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative pl-6 sm:pl-10 space-y-10 before:absolute before:left-[11px] sm:before:left-[19px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-brand-500 before:via-sky-500/40 before:to-transparent">
          
          {filteredJourney.map((milestone: JourneyMilestone) => (
            <div key={milestone.id} className="relative group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[30px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-background-surface border-2 border-brand-500/60 flex items-center justify-center shadow-glow-sm z-10 group-hover:scale-110 group-hover:border-brand-400 transition-all">
                {getIcon(milestone.type)}
              </div>

              {/* Milestone Content Card */}
              <Card className="p-6 sm:p-8 bg-background-surface/80">
                <div className="space-y-4">
                  
                  {/* Top Bar: Period & Type */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-brand-400">
                      {milestone.period}
                    </span>
                    <Badge variant={getBadgeVariant(milestone.type)} size="sm">
                      {milestone.type}
                    </Badge>
                  </div>

                  {/* Title & Context */}
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {milestone.title}
                    </h3>
                    <div className="text-xs font-mono text-text-muted mt-1">
                      Context: {milestone.context}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Key Learnings */}
                  {milestone.learnings.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Key Learnings
                      </span>
                      <ul className="space-y-1.5">
                        {milestone.learnings.map((learning: string, i: number) => (
                          <li
                            key={i}
                            className="text-xs text-text-secondary flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-brand-400 font-mono select-none">→</span>
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {milestone.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[11px] font-mono text-text-muted"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>
              </Card>

            </div>
          ))}

        </div>

        {/* Future Growth Note */}
        <div className="p-6 rounded-2xl border border-sky-500/30 bg-sky-950/20 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white font-mono">
              // CURRENT GOAL: DEVELOPER INTERNSHIP
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Seeking an internship where I can apply my programming foundations in C and Python, continue learning modern web technologies, and build practical software with a team.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
