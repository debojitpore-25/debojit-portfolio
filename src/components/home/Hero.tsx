import React from 'react';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { HeroIdentity } from './HeroIdentity';
import { profileData } from '../../data/profile';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-4 sm:pt-8 pb-14 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-7">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="success" dot size="md">
                Looking for Developer Internships
              </Badge>
            </div>

            {/* Main Header */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
                DEBOJIT
              </h1>
              <div className="text-xs sm:text-sm md:text-base font-mono font-medium text-brand-400 tracking-wider flex items-center gap-2">
                <span>BCA STUDENT</span>
                <span className="text-white/30">•</span>
                <span>ASPIRING SOFTWARE DEVELOPER</span>
              </div>
            </div>

            {/* Grounded Natural Bio */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
              I am a BCA student passionate about software development. I spend my time practicing core programming in <span className="text-text-primary font-medium">C</span> and <span className="text-text-primary font-medium">Python</span>, building practical projects, and learning modern web development. Currently looking for software developer internship opportunities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <Button
                to="/projects"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Explore My Work
              </Button>
              <Button
                href={profileData.githubUrl}
                external
                variant="secondary"
                size="md"
                icon={<Github className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                GitHub
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="md"
                icon={<Mail className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Contact
              </Button>
            </div>

            {/* Authenticity Assurance */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center gap-5 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                <span>Genuine Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Grounded Skills</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Identity System (Photo + Topology) */}
          <div className="lg:col-span-6 w-full">
            <HeroIdentity />
          </div>

        </div>
      </div>
    </section>
  );
};
