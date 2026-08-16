import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { buildLogData } from '../../data/buildLog';

export const BuildLogTeaser: React.FC = () => {
  const recentLogs = buildLogData.slice(0, 2);

  return (
    <section className="py-20 border-t border-white/[0.06] bg-background-subtle/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="04 // BUILD JOURNAL"
            title="Recent Build Log"
            description="Chronological engineering journal documenting real development, daily commits, and problem-solving logs."
            className="mb-0"
          />
          <Link
            to="/build-log"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-white transition-colors group"
          >
            <span>View Full Build Log</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2-Column Log Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentLogs.map((log) => (
            <Card key={log.id} className="p-6 bg-background-surface/90 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-400 font-semibold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{log.monthYear}</span>
                  </div>
                  <Badge variant="outline" size="sm">
                    Journal Entry
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-text-primary">
                    {log.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    {log.summary}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 pt-2">
                  {log.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-text-secondary flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-brand-400 font-mono select-none">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & footer */}
              <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {log.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/build-log"
                  className="text-xs font-mono text-text-muted hover:text-brand-400 flex items-center gap-1 transition-colors"
                >
                  Details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
