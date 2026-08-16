import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Milestone, GraduationCap, Code2, Terminal } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { journeyData } from '../../data/journey';
import { JourneyMilestone } from '../../types';

export const JourneyTeaser: React.FC = () => {
  const previewMilestones = journeyData.slice(0, 3);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-brand-400" />;
      case 'Project':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'Foundation':
        return <Terminal className="w-4 h-4 text-sky-400" />;
      default:
        return <Milestone className="w-4 h-4 text-brand-400" />;
    }
  };

  return (
    <section className="py-20 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="03 // TIMELINE"
            title="Development Journey"
            description="Tracking progress through BCA studies, programming foundations in C and Python, and learning modern web development."
            className="mb-0"
          />
          <Link
            to="/journey"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-white transition-colors group"
          >
            <span>View Full Timeline</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Card Timeline Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewMilestones.map((item: JourneyMilestone) => (
            <Card key={item.id} className="p-6 flex flex-col justify-between h-full bg-background-surface/80">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {getIcon(item.type)}
                  </div>
                  <span className="text-xs font-mono text-text-muted">
                    {item.period}
                  </span>
                </div>

                <div>
                  <Badge variant="outline" size="sm" className="mb-2">
                    {item.type}
                  </Badge>
                  <h3 className="text-base font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-brand-400 mt-0.5">
                    {item.context}
                  </div>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.06] flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-text-muted"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
