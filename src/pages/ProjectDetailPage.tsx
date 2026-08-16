import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code2,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { projectsData } from '../data/projects';
import { ProjectCaseStudy } from '../types';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [copiedCode, setCopiedCode] = useState(false);

  const project = projectsData.find((p: ProjectCaseStudy) => p.id === id);

  if (!project) {
    return (
      <div className="py-24 max-w-3xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
        <p className="text-text-secondary text-sm">
          The requested project case study could not be found.
        </p>
        <Button to="/projects" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
          Back to Projects
        </Button>
      </div>
    );
  }

  const otherProjects = projectsData.filter((p: ProjectCaseStudy) => p.id !== project.id);

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumbs & Back */}
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-brand-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
          <div className="flex items-center gap-2">
            <Badge
              variant={project.status === 'Completed' ? 'success' : 'warning'}
              dot={project.status === 'Completed'}
              size="sm"
            >
              {project.status}
            </Badge>
            <Badge variant="info" size="sm">
              {project.primaryLanguage}
            </Badge>
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-400 font-semibold">
            <span>CASE STUDY // DEEP DIVE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {project.title}
          </h1>
          <p className="text-base sm:text-xl text-text-secondary leading-relaxed">
            {project.tagline}
          </p>

          {/* Action links */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                external
                variant="secondary"
                size="md"
                icon={<Github className="w-4 h-4" />}
              >
                View Repository on GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                external
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
            Technologies & Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-background-surface border border-white/10 text-xs font-mono font-medium text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Section: Overview */}
        <Card className="p-6 sm:p-8 bg-background-surface/80">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-brand-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Project Overview</span>
            </div>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {project.overview}
            </p>
          </div>
        </Card>

        {/* Section: Problem & Approach (2-col grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem */}
          <Card className="p-6 sm:p-8 bg-background-surface/80 border-amber-500/20">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>
          </Card>

          {/* Approach */}
          <Card className="p-6 sm:p-8 bg-background-surface/80 border-brand-500/20">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-brand-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>Engineering Approach</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.approach}
              </p>
            </div>
          </Card>
        </div>

        {/* Section: Architecture & Implementation Details */}
        <Card className="p-6 sm:p-8 bg-background-surface/80">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Architecture & Implementation Highlights</span>
            </div>
            <ul className="space-y-3">
              {project.architectureDetails.map((detail: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* Section: Code Snippet Preview (if available) */}
        {project.codeSnippet && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <Code2 className="w-4 h-4 text-brand-400" />
                <span className="font-semibold text-text-primary">
                  {project.codeSnippet.filename}
                </span>
                <span>({project.codeSnippet.language})</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-text-secondary hover:text-white transition-colors"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0A0C14] overflow-x-auto p-4 sm:p-6 shadow-inner font-mono text-xs leading-relaxed text-text-secondary">
              <pre>
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Section: Challenges Solved & What I Learned (2-col grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Challenges */}
          <Card className="p-6 sm:p-8 bg-background-surface/80">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Challenges Overcome</span>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((c: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <span className="text-amber-400 font-mono select-none">!</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* What I Learned */}
          <Card className="p-6 sm:p-8 bg-background-surface/80 border-emerald-500/20">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>What I Learned</span>
              </div>
              <ul className="space-y-3">
                {project.whatILearned.map((l: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <span className="text-emerald-400 font-mono select-none">✓</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        {/* Section: Future Improvements */}
        <Card className="p-6 sm:p-8 bg-background-surface/80">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-brand-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Future Improvements & Roadmap</span>
            </div>
            <ul className="space-y-2.5">
              {project.futureImprovements.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  <span className="text-brand-400 font-mono select-none">↳</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* Other Projects Navigation */}
        {otherProjects.length > 0 && (
          <div className="pt-12 border-t border-white/[0.08] space-y-6">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-text-muted">
              Next Case Study
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherProjects.map((p: ProjectCaseStudy) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  className="p-5 rounded-xl border border-white/10 bg-background-surface hover:bg-background-surfaceHover transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-brand-400 font-medium">
                      {p.primaryLanguage} Case Study
                    </div>
                    <div className="text-base font-bold text-text-primary group-hover:text-white">
                      {p.title}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
