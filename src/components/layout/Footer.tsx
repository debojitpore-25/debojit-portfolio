import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-background-subtle/50 text-text-muted font-sans mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-brand-600 flex items-center justify-center text-white">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-sm tracking-wider text-text-primary font-mono">
                DEBOJIT // PORTFOLIO
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
              BCA Student & Aspiring Software Developer. Focused on core programming foundations and building practical software.
            </p>
            <div className="text-xs font-mono text-emerald-400/90 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Seeking Developer Internships</span>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Case Studies & Projects
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-white transition-colors">
                  Development Journey
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-white transition-colors">
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link to="/build-log" className="hover:text-white transition-colors">
                  Build Log
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary">
              Connect
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{profileData.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider and back to top */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} Debojit. All source code genuine and self-implemented.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-surface hover:bg-background-surfaceHover text-text-secondary hover:text-text-primary border border-white/10 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
