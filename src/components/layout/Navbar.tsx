import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { profileData } from '../../data/profile';
import { cn } from '../../utils/cn';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Journey', path: '/journey' },
    { name: 'Skills', path: '/skills' },
    { name: 'Build Log', path: '/build-log' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group transition-transform active:scale-95"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-indigo-700 flex items-center justify-center text-white border border-white/15 shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-wider text-sm text-text-primary font-mono flex items-center gap-1.5">
              DEBOJIT
              <span className="text-[10px] text-brand-400 font-normal opacity-80">// DEV</span>
            </span>
            <span className="text-[10px] font-mono text-text-muted hidden sm:block">
              BCA STUDENT
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/[0.08] bg-background-surface/60 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200',
                  isActive
                    ? 'text-white bg-white/[0.1] shadow-sm font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.05]'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status Badge */}
          <div className="hidden lg:block">
            <Badge variant="success" dot size="sm">
              Seeking Internships
            </Badge>
          </div>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-text-muted hover:text-text-primary bg-background-surface/80 hover:bg-background-surfaceHover border border-white/10 rounded-lg transition-colors font-mono"
            title="Open Command Palette (Ctrl+K or Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-brand-400" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-white/[0.06] border border-white/10 rounded text-text-secondary">
              ⌘K
            </kbd>
          </button>

          {/* GitHub quick link */}
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-lg transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-white rounded-lg bg-background-surface/80 border border-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-background-subtle/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="mb-2 px-2">
            <Badge variant="success" dot size="sm" className="w-full justify-center">
              Available for Internships
            </Badge>
          </div>
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between',
                    isActive
                      ? 'text-white bg-brand-500/15 border border-brand-500/30'
                      : 'text-text-secondary hover:text-white hover:bg-white/[0.04]'
                  )
                }
              >
                <span>{link.name}</span>
                <span className="font-mono text-[10px] text-text-muted">{link.path}</span>
              </NavLink>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 text-center text-xs font-medium text-text-secondary bg-white/[0.04] border border-white/10 rounded-lg flex items-center justify-center gap-1.5"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 text-center text-xs font-medium text-text-secondary bg-white/[0.04] border border-white/10 rounded-lg flex items-center justify-center gap-1.5"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
