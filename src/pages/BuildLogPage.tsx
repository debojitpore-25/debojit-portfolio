import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search, Tag, ArrowRight, FolderGit2 } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { buildLogData } from '../data/buildLog';
import { BuildLogEntry } from '../types';

export const BuildLogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    buildLogData.forEach((entry: BuildLogEntry) => entry.tags.forEach((t: string) => tags.add(t)));
    return ['All', ...Array.from(tags)];
  }, []);

  const filteredLogs = useMemo(() => {
    return buildLogData.filter((entry: BuildLogEntry) => {
      const matchesSearch =
        entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.monthYear.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.bullets.some((b: string) => b.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag =
        selectedTag === 'All' || entry.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeading
          tag="JOURNAL // CHANGELOG"
          title="Build Log"
          description="A development changelog documenting real software projects, coding milestones, tool exploration, and lessons learned."
        />

        {/* Search & Tag Filter */}
        <div className="p-5 rounded-2xl bg-background-surface/80 border border-white/[0.08] backdrop-blur-md space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search logs, keywords, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background-subtle border border-white/10 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-500/50"
            />
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-mono text-text-muted mr-1 flex items-center gap-1">
              <Tag className="w-3 h-3" /> Tags:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedTag === tag
                    ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40'
                    : 'bg-white/[0.04] text-text-secondary hover:text-white border border-white/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Logs List */}
        {filteredLogs.length === 0 ? (
          <div className="py-16 text-center text-sm text-text-muted font-mono rounded-xl border border-white/5 bg-background-surface/40">
            No build log entries match your search query.
          </div>
        ) : (
          <div className="space-y-8">
            {filteredLogs.map((log: BuildLogEntry) => (
              <Card key={log.id} className="p-6 sm:p-8 bg-background-surface/80">
                <div className="space-y-6">
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                    <div className="flex items-center gap-2 font-mono text-sm font-bold text-brand-400">
                      <Calendar className="w-4 h-4" />
                      <span>{log.monthYear}</span>
                    </div>
                    <Badge variant="outline" size="sm">
                      Engineering Journal
                    </Badge>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {log.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">
                      {log.summary}
                    </p>
                  </div>

                  {/* Bulleted changes */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
                      Key Highlights & Actions:
                    </span>
                    <ul className="space-y-2">
                      {log.bullets.map((bullet: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed"
                        >
                          <span className="text-brand-400 font-mono select-none">→</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags and related project */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {log.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-text-muted"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {log.relatedProjectId && (
                      <Link
                        to={`/projects/${log.relatedProjectId}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-400 hover:text-brand-300 font-medium"
                      >
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>

                </div>
              </Card>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
