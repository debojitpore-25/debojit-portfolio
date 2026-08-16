import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  FolderGit2,
  Milestone,
  Cpu,
  User,
  Mail,
  FileCode2,
  ExternalLink,
  Copy,
  Check,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PaletteAction {
  id: string;
  title: string;
  category: 'Navigation' | 'Projects' | 'Actions' | 'Social';
  description?: string;
  icon: React.ReactNode;
  perform: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  const actions: PaletteAction[] = [
    // Navigation
    {
      id: 'nav-home',
      title: 'Go to Overview (Home)',
      category: 'Navigation',
      description: 'Homepage, signature visualizer, and highlights',
      icon: <Cpu className="w-4 h-4 text-brand-400" />,
      perform: () => {
        navigate('/');
        onClose();
      },
    },
    {
      id: 'nav-projects',
      title: 'Go to Projects',
      category: 'Navigation',
      description: 'Explore all built case studies and technical architectures',
      icon: <FolderGit2 className="w-4 h-4 text-brand-400" />,
      perform: () => {
        navigate('/projects');
        onClose();
      },
    },
    {
      id: 'nav-journey',
      title: 'Go to Development Journey',
      category: 'Navigation',
      description: 'BCA progression timeline and milestones',
      icon: <Milestone className="w-4 h-4 text-brand-400" />,
      perform: () => {
        navigate('/journey');
        onClose();
      },
    },
    {
      id: 'nav-skills',
      title: 'Go to Skills & Stack',
      category: 'Navigation',
      description: 'Core languages, tools, and currently learning roadmap',
      icon: <FileCode2 className="w-4 h-4 text-brand-400" />,
      perform: () => {
        navigate('/skills');
        onClose();
      },
    },
    {
      id: 'nav-build-log',
      title: 'Go to Build Log',
      category: 'Navigation',
      description: 'Chronological developer journal and changelog',
      icon: <BookOpen className="w-4 h-4 text-brand-400" />,
      perform: () => {
        navigate('/build-log');
        onClose();
      },
    },
    {
      id: 'nav-about',
      title: 'Go to About Debojit',
      category: 'Navigation',
      description: 'Background, values, and student journey',
      icon: <User className="w-4 h-4 text-brand-400" />,
      perform: () => {
        navigate('/about');
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact',
      category: 'Navigation',
      description: 'Inquire about internship opportunities',
      icon: <Mail className="w-4 h-4 text-brand-400" />,
      perform: () => {
        navigate('/contact');
        onClose();
      },
    },

    // Projects
    ...projectsData.map((project) => ({
      id: `proj-${project.id}`,
      title: `Case Study: ${project.title}`,
      category: 'Projects' as const,
      description: `${project.primaryLanguage} • ${project.tagline}`,
      icon: <FolderGit2 className="w-4 h-4 text-brand-cyan" />,
      perform: () => {
        navigate(`/projects/${project.id}`);
        onClose();
      },
    })),

    // Quick Actions
    {
      id: 'act-copy-email',
      title: copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Email Address',
      category: 'Actions',
      description: profileData.email,
      icon: copiedEmail ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4 text-emerald-400" />
      ),
      perform: handleCopyEmail,
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile',
      category: 'Social',
      description: 'View repositories and commit activity',
      icon: <ExternalLink className="w-4 h-4 text-text-secondary" />,
      perform: () => {
        window.open(profileData.githubUrl, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Social',
      description: 'Connect on LinkedIn',
      icon: <ExternalLink className="w-4 h-4 text-text-secondary" />,
      perform: () => {
        window.open(profileData.linkedinUrl, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((action) => {
    const searchTarget = `${action.title} ${action.description || ''} ${action.category}`.toLowerCase();
    return searchTarget.includes(query.toLowerCase());
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(filteredActions.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % Math.max(filteredActions.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].perform();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-150">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div
        className="relative w-full max-w-xl rounded-xl border border-white/15 bg-[#0D0F18] shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-background-surface/80">
          <Search className="w-4 h-4 text-text-muted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project name, or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-sm text-text-primary placeholder:text-text-muted focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-semibold text-text-muted bg-white/[0.06] border border-white/10 rounded">
            ESC
          </kbd>
        </div>

        {/* Action list */}
        <div className="overflow-y-auto p-2 space-y-1 divide-y divide-white/[0.04]">
          {filteredActions.length === 0 ? (
            <div className="py-12 text-center text-sm text-text-muted font-mono">
              No matching commands or projects found.
            </div>
          ) : (
            filteredActions.map((action, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={action.id}
                  onClick={() => action.perform()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm transition-all duration-150 group ${
                    isSelected
                      ? 'bg-brand-500/15 border border-brand-500/30 text-white'
                      : 'text-text-secondary hover:bg-white/[0.04] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="shrink-0">{action.icon}</span>
                    <div className="min-w-0">
                      <div className="font-medium text-text-primary group-hover:text-white truncate">
                        {action.title}
                      </div>
                      {action.description && (
                        <div className="text-xs text-text-muted truncate">
                          {action.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span className="text-[10px] font-mono text-text-muted uppercase px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/5">
                      {action.category}
                    </span>
                    {isSelected && (
                      <ArrowRight className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-white/10 bg-background-subtle flex items-center justify-between text-[11px] font-mono text-text-muted">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 bg-white/[0.06] rounded border border-white/10">↑</kbd>
              <kbd className="px-1 py-0.5 bg-white/[0.06] rounded border border-white/10 ml-0.5">↓</kbd> to navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-white/[0.06] rounded border border-white/10">↵</kbd> to select
            </span>
          </div>
          <span>DEBOJIT // COMMAND_PALETTE</span>
        </div>
      </div>
    </div>
  );
};
