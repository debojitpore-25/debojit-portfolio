import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FolderGit2,
  Wrench,
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { skillsData } from '../data/skills';
import { SkillItem } from '../types';

export const SkillsPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('All');

  const sections = ['All', 'Core / Actually Used', 'Currently Learning', 'Tools / Workflow'];

  const filteredSkills = skillsData.filter((skill: SkillItem) => {
    if (selectedSection === 'All') return true;
    return skill.section === selectedSection;
  });

  const coreSkills = filteredSkills.filter((s: SkillItem) => s.section === 'Core / Actually Used');
  const learningSkills = filteredSkills.filter((s: SkillItem) => s.section === 'Currently Learning');
  const workflowTools = filteredSkills.filter((s: SkillItem) => s.section === 'Tools / Workflow');

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeading
          tag="STACK // TECHNICAL MATRIX"
          title="Skills & Technologies"
          description="An honest breakdown of technologies practiced in projects, tools currently being studied, and daily development workflow utilities."
        />

        {/* Credibility Notice */}
        <div className="p-5 rounded-2xl border border-white/[0.08] bg-background-surface/80 flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-text-secondary leading-relaxed">
            <span className="font-bold text-text-primary font-mono uppercase tracking-wider block">
              // NO PERCENTAGE BARS OR EXAGGERATED CLAIMS
            </span>
            <p>
              I believe in listing tools honestly based on how I use them. Core skills reflect real code written in projects, learning skills represent active study areas, and workflow tools support my daily development.
            </p>
          </div>
        </div>

        {/* Section Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-text-muted mr-2">Filter:</span>
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSection(sec)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedSection === sec
                  ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40 shadow-sm'
                  : 'bg-white/[0.04] text-text-secondary hover:text-white border border-white/5'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Section 1: Core / Actually Used */}
        {coreSkills.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">
                  Core / Actually Used
                </h3>
              </div>
              <Badge variant="success" size="sm">
                Practiced in Code
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreSkills.map((skill: SkillItem) => (
                <Card
                  key={skill.name}
                  className="p-6 flex flex-col justify-between h-full bg-background-surface/80"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-text-primary">
                        {skill.name}
                      </span>
                      <Badge variant="success" size="sm">
                        {skill.statusText}
                      </Badge>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-emerald-400/90 leading-relaxed">
                      <span className="text-text-muted">Usage: </span>
                      {skill.context}
                    </div>

                    {skill.relatedProjectId && (
                      <Link
                        to={`/projects/${skill.relatedProjectId}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-400 hover:underline pt-1"
                      >
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>View Project</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Currently Learning */}
        {learningSkills.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400 animate-pulse" />
                <h3 className="text-xl font-bold text-white">
                  Currently Learning
                </h3>
              </div>
              <Badge variant="learning" size="sm" dot>
                In Active Study
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningSkills.map((skill: SkillItem) => (
                <Card
                  key={skill.name}
                  className="p-6 bg-gradient-to-br from-sky-950/20 to-background-surface border-sky-500/30 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg text-white">
                        {skill.name}
                      </span>
                      <Badge variant="learning" size="sm">
                        {skill.statusText}
                      </Badge>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-sky-500/20 text-xs font-mono text-sky-300">
                    <span className="text-text-muted">Goal / Context: </span>
                    {skill.context}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Tools / Workflow */}
        {workflowTools.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-brand-400" />
                <h3 className="text-xl font-bold text-white">
                  Tools / Workflow
                </h3>
              </div>
              <Badge variant="info" size="sm">
                Daily Setup
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workflowTools.map((skill: SkillItem) => (
                <Card
                  key={skill.name}
                  className="p-6 bg-background-surface/80 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-text-primary">
                        {skill.name}
                      </span>
                      <Badge variant="outline" size="sm">
                        {skill.statusText}
                      </Badge>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.06] text-xs font-mono text-text-muted">
                    <span className="text-brand-400">↳ </span>
                    {skill.context}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
