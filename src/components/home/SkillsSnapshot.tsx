import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Wrench } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { skillsData } from '../../data/skills';
import { SkillItem } from '../../types';

export const SkillsSnapshot: React.FC = () => {
  const coreSkills = skillsData.filter((s: SkillItem) => s.section === 'Core / Actually Used');
  const learningSkills = skillsData.filter((s: SkillItem) => s.section === 'Currently Learning');
  const workflowTools = skillsData.filter((s: SkillItem) => s.section === 'Tools / Workflow');

  return (
    <section className="py-20 border-t border-white/[0.06] bg-background-subtle/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="02 // TECHNICAL MATRIX"
            title="Skills & Tooling"
            description="Clear distinction between tools practiced in projects, technologies currently being learned, and daily workflow tools."
            className="mb-0"
          />
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-white transition-colors group"
          >
            <span>Explore Complete Matrix</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Columns: Core, Learning, Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1: Core / Actually Used */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base font-bold text-text-primary">
                  Core / Actually Used
                </h3>
              </div>
              <Badge variant="success" size="sm">
                Practiced
              </Badge>
            </div>

            <div className="space-y-3">
              {coreSkills.map((skill) => (
                <Card key={skill.name} className="p-4 bg-background-surface/80">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-text-primary">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      {skill.statusText}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Column 2: Currently Learning */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
                <h3 className="text-base font-bold text-text-primary">
                  Currently Learning
                </h3>
              </div>
              <Badge variant="learning" size="sm" dot>
                In Progress
              </Badge>
            </div>

            <div className="space-y-3">
              {learningSkills.map((skill) => (
                <Card
                  key={skill.name}
                  className="p-4 bg-sky-950/20 border-sky-500/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-sky-300">
                      {skill.statusText}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="mt-2 text-[10px] font-mono text-sky-400/90">
                    ↳ {skill.context}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Column 3: Tools / Workflow */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-brand-400" />
                <h3 className="text-base font-bold text-text-primary">
                  Tools / Workflow
                </h3>
              </div>
              <Badge variant="info" size="sm">
                Daily Setup
              </Badge>
            </div>

            <div className="space-y-3">
              {workflowTools.map((skill) => (
                <Card key={skill.name} className="p-4 bg-background-surface/80">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-text-primary">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-brand-400">
                      {skill.statusText}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
