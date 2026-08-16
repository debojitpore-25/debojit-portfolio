import React, { useState, useMemo } from 'react';
import { Search, Code2, Sparkles, FolderGit2 } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/shared/ProjectCard';
import { Badge } from '../components/ui/Badge';
import { projectsData } from '../data/projects';
import { ProjectCaseStudy } from '../types';

export const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const languages = ['All', 'Python', 'C'];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project: ProjectCaseStudy) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLanguage =
        selectedLanguage === 'All' || project.primaryLanguage === selectedLanguage;

      const matchesStatus =
        selectedStatus === 'All' || project.status === selectedStatus;

      return matchesSearch && matchesLanguage && matchesStatus;
    });
  }, [searchQuery, selectedLanguage, selectedStatus]);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeading
          tag="PORTFOLIO // PROJECTS"
          title="Projects & Case Studies"
          description="Detailed breakdowns of software projects built to explore programming fundamentals in C, scripting in Python, and computer science concepts."
        />

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-background-surface/80 border border-white/[0.08] backdrop-blur-md space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, technologies, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background-subtle border border-white/10 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-500/50"
              />
            </div>

            {/* Language filter buttons */}
            <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-mono text-text-muted mr-1 flex items-center gap-1 shrink-0">
                <Code2 className="w-3.5 h-3.5" /> Language:
              </span>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 ${
                    selectedLanguage === lang
                      ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40 shadow-sm'
                      : 'bg-white/[0.04] text-text-secondary hover:text-white border border-white/5'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Status filter buttons */}
            <div className="md:col-span-2 flex items-center gap-1.5">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-background-subtle border border-white/10 text-xs font-mono text-text-secondary focus:outline-none focus:border-brand-500/50"
              >
                <option value="All">Status: All</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>

          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center space-y-3 rounded-2xl border border-white/[0.06] bg-background-surface/40">
            <FolderGit2 className="w-8 h-8 text-text-muted mx-auto" />
            <div className="text-sm font-medium text-text-primary">
              No projects found matching your filters.
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLanguage('All');
                setSelectedStatus('All');
              }}
              className="text-xs font-mono text-brand-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project: ProjectCaseStudy) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Future Pipeline Notice */}
        <div className="p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-indigo-950/20 to-background-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <h4 className="text-sm font-bold text-text-primary">
                Learning & Future Project Work
              </h4>
            </div>
            <p className="text-xs text-text-secondary">
              Currently practicing web development with JavaScript and React. As new projects are completed, they will be documented here.
            </p>
          </div>
          <Badge variant="learning" size="sm">
            Roadmap in Progress
          </Badge>
        </div>

      </div>
    </div>
  );
};
