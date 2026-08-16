import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, Briefcase } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { profileData } from '../../data/profile';

export const ContactCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Card className="p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-indigo-950/30 via-background-surface/90 to-background-surface border-brand-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle glowing ambient sphere */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <Badge variant="success" dot size="sm">
                  Internship Candidate
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Looking for a dedicated developer intern?
              </h2>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
                I am actively seeking software development internship opportunities where I can apply my foundation in C, Python, and web basics, contribute to real-world tasks, and learn alongside an engineering team.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted">
                <span className="flex items-center gap-1.5 text-text-secondary">
                  <Briefcase className="w-3.5 h-3.5 text-brand-400" />
                  <span>Role: Software Developer Intern</span>
                </span>
                <span>•</span>
                <span>Location: Remote / On-site</span>
              </div>
            </div>

            {/* Right Col: Actions */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {/* Direct Mailto */}
              <Button
                href={`mailto:${profileData.email}?subject=Internship%20Inquiry%20-%20Debojit`}
                size="lg"
                icon={<Mail className="w-4 h-4" />}
                className="w-full"
              >
                Send Direct Email
              </Button>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-background-elevated/80 hover:bg-background-surfaceHover border border-white/10 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors group"
              >
                <div className="flex items-center gap-2 truncate">
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-text-muted group-hover:text-white shrink-0" />
                  )}
                  <span className="truncate">{profileData.email}</span>
                </div>
                <span className="text-[10px] text-text-muted shrink-0 ml-2 uppercase">
                  {copied ? 'Copied!' : 'Copy'}
                </span>
              </button>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-text-secondary hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-text-secondary hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

          </div>
        </Card>

      </div>
    </section>
  );
};
