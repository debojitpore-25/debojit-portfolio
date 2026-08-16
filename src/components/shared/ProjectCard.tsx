import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProjectCaseStudy } from '../../types';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="p-6 sm:p-8 flex flex-col justify-between h-full bg-background-surface/80 group">
      <div className="space-y-6">
        
        {/* Header with Language & Status */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-400">
              {project.primaryLanguage}
            </span>
          </div>
          <Badge
            variant={project.status === 'Completed' ? 'success' : 'warning'}
            size="sm"
            dot={project.status === 'Completed'}
          >
            {project.status}
          </Badge>
        </div>

        {/* Title and Tagline */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-white transition-colors">
            <Link to={`/projects/${project.id}`} className="hover:underline focus:outline-none">
              {project.title}
            </Link>
          </h3>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Problem Statement Box */}
        <div className="p-3.5 rounded-lg bg-background-subtle/80 border border-white/[0.06] space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-amber-400/90">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Problem Solved</span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
            {project.problem}
          </p>
        </div>

        {/* Key Takeaways / What I Learned */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-text-muted flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Key Engineering Takeaway
          </span>
          <p className="text-xs text-text-secondary leading-relaxed">
            {project.whatILearned[0]}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      {/* Card Actions */}
      <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between gap-3">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 group-hover:text-white transition-colors"
        >
          <span>Read Full Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
              title="View Source on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
