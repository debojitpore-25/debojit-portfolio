import React from 'react';
import { BookOpen, Hammer, Terminal, Briefcase, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { currentlyData } from '../../data/currently';
import { Link } from 'react-router-dom';

export const CurrentlyPanel: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/[0.06] bg-background-subtle/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-400 font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
              <span>CURRENT STATUS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
              What I Am Doing Right Now
            </h2>
          </div>
          <Link
            to="/journey"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-brand-400 transition-colors"
          >
            <span>View Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4-Card Status Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Learning */}
          <Card className="p-5 flex flex-col justify-between h-full bg-background-surface/70">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <Badge variant="learning" size="sm" dot>
                  Learning
                </Badge>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                  {currentlyData.learning.title}
                </span>
                <h3 className="text-base font-bold text-text-primary mt-0.5">
                  {currentlyData.learning.items}
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {currentlyData.learning.details}
              </p>
            </div>
          </Card>

          {/* Card 2: Building */}
          <Card className="p-5 flex flex-col justify-between h-full bg-background-surface/70">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-brand-500/30 flex items-center justify-center text-brand-400">
                  <Hammer className="w-4 h-4" />
                </div>
                <Badge variant="info" size="sm">
                  Active Build
                </Badge>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                  {currentlyData.building.title}
                </span>
                <h3 className="text-base font-bold text-text-primary mt-0.5">
                  {currentlyData.building.items}
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {currentlyData.building.details}
              </p>
            </div>
          </Card>

          {/* Card 3: Practicing */}
          <Card className="p-5 flex flex-col justify-between h-full bg-background-surface/70">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <Badge variant="success" size="sm">
                  Practicing
                </Badge>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                  {currentlyData.practicing.title}
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {currentlyData.practicing.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 text-xs font-mono font-medium text-text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {currentlyData.practicing.details}
              </p>
            </div>
          </Card>

          {/* Card 4: Looking For */}
          <Card className="p-5 flex flex-col justify-between h-full bg-gradient-to-br from-indigo-950/40 via-background-surface/80 to-background-surface border-brand-500/30 shadow-glow-sm">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-300">
                  <Briefcase className="w-4 h-4" />
                </div>
                <Badge variant="success" dot size="sm">
                  Seeking Internships
                </Badge>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-400 font-semibold">
                  {currentlyData.lookingFor.title}
                </span>
                <h3 className="text-base font-bold text-text-primary mt-0.5">
                  {currentlyData.lookingFor.role}
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {currentlyData.lookingFor.details}
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-400">
                Timeline: {currentlyData.lookingFor.timeline}
              </span>
              <Link
                to="/contact"
                className="text-xs font-semibold text-brand-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                Contact <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};
