import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../shared/ProjectCard';
import { projectsData } from '../../data/projects';

export const FeaturedProjects: React.FC = () => {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="01 // SELECTED PROJECTS"
            title="Projects & Code"
            description="Practical software projects built to explore programming fundamentals in C, scripting in Python, and computer science concepts."
            className="mb-0"
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-white transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {/* Honest Note */}
        <div className="mt-8 p-4 rounded-xl border border-white/[0.06] bg-background-subtle/50 text-center text-xs font-mono text-text-muted">
          Projects represent real code written during BCA studies.
        </div>

      </div>
    </section>
  );
};
