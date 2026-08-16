import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Send,
  Briefcase,
  MapPin,
  Clock,
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { profileData } from '../data/profile';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(subject || 'Internship Inquiry');
    const encodedBody = encodeURIComponent(message);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profileData.email)}&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeading
          tag="GET IN TOUCH // INTERNSHIPS"
          title="Contact & Availability"
          description="Looking for an ambitious, foundational software developer intern? Let’s connect."
        />

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Links & Status (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <Card className="p-6 bg-gradient-to-br from-indigo-950/30 to-background-surface border-brand-500/30">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="success" dot size="sm">
                    Actively Available
                  </Badge>
                  <span className="text-[11px] font-mono text-emerald-400">
                    Open for Hiring
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Internship Opportunities
                  </h3>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    Seeking full-time or part-time internship roles in Software Engineering, Backend Scripting (C / Python), or Frontend Web Development.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] space-y-2 text-xs font-mono text-text-secondary">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-brand-400" />
                    <span>Role: Software Developer Intern</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-400" />
                    <span>Location: Remote or On-site</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-400" />
                    <span>Timeline: Immediate / Upcoming Sessions</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Direct Copy & Channels */}
            <Card className="p-6 bg-background-surface/80 space-y-4">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                Direct Channels
              </h4>

              {/* Copy Email Box */}
              <div className="p-3.5 rounded-xl bg-background-subtle border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                  <span className="text-xs font-mono text-text-primary truncate">
                    {profileData.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-text-secondary hover:text-white transition-colors flex items-center gap-1 shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub & LinkedIn Links */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-text-secondary hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-text-secondary hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </Card>

          </div>

          {/* Right Column: Quick Mail Composer (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 bg-background-surface/80">
              <form onSubmit={handleComposeMail} className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-brand-400" />
                    <h3 className="text-base font-bold text-white">
                      Compose Direct Message
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-text-muted">
                    No server required
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-text-secondary">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Internship Opportunity at [Company] / Project Discussion"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-background-subtle border border-white/10 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-text-secondary">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hi Debojit, I came across your portfolio and would like to discuss..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-background-subtle border border-white/10 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-500/50 resize-none font-sans"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  icon={<Send className="w-4 h-4" />}
                  className="w-full"
                >
                  Send via Gmail
                </Button>

                <p className="text-[11px] font-mono text-center text-text-muted pt-1">
                  Opens Gmail in a new tab addressed directly to debojitpore@gmail.com with your pre-filled message.
                </p>
              </form>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
};
