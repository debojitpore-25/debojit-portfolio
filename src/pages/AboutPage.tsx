import React from 'react';
import {
  User,
  Terminal,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeading
          tag="BIOGRAPHY // BACKGROUND"
          title="About Debojit"
          description="BCA student and aspiring software developer focused on learning core programming fundamentals and building practical software."
        />

        {/* Story Section */}
        <Card className="p-6 sm:p-10 bg-background-surface/80 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold uppercase tracking-wider">
            <User className="w-4 h-4" />
            <span>My Background</span>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
            <p>
              Hi, I’m <strong className="text-text-primary">Debojit</strong>. I am an undergraduate student currently pursuing my <strong className="text-text-primary">Bachelor of Computer Applications (BCA)</strong>.
            </p>
            <p>
              I take software development seriously. Instead of jumping straight into complex frameworks without understanding the basics, I started by learning procedural programming and pointers in <strong className="text-text-primary">C</strong>, followed by scripting and algorithm problem-solving in <strong className="text-text-primary">Python</strong>. Building practical console projects helped me understand how data structures, file operations, and hashing work in practice.
            </p>
            <p>
              Right now, I am expanding into modern web development, starting with HTML, CSS, JavaScript, and React basics. I am actively looking for an <strong className="text-text-primary">internship opportunity</strong> where I can write real code, learn from experienced developers, and contribute to team projects.
            </p>
          </div>
        </Card>

        {/* Principles & Work Ethic (2-Col Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: How I Work */}
          <Card className="p-6 sm:p-8 bg-background-surface/80">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>My Approach</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-text-secondary">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Understand the Core:</strong> Focus on understanding how code works under the hood rather than just copying solutions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Build Practical Projects:</strong> Apply theoretical concepts to tangible programs like CLI tools and web pages.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Version Control Hygiene:</strong> Use Git regularly to track changes, write clear commits, and manage repositories.</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Card 2: What I Am Looking For in an Internship */}
          <Card className="p-6 sm:p-8 bg-background-surface/80">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Internship Goals</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-text-secondary">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span><strong>Team Learning:</strong> Eager to receive code reviews and adapt to team standards and workflows.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span><strong>Practical Contribution:</strong> Ready to work on bug fixes, feature implementation, and developer tooling.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span><strong>Growth Mindset:</strong> Committed to consistent practice and rapid skill expansion.</span>
                </li>
              </ul>
            </div>
          </Card>

        </div>

        {/* Development Tools */}
        <Card className="p-6 sm:p-8 bg-background-surface/80 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold uppercase tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>Tools & Workflow</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-3 rounded-lg bg-background-subtle border border-white/[0.06] space-y-1">
              <span className="text-[10px] font-mono text-text-muted uppercase">Code Editor</span>
              <div className="text-xs font-bold text-text-primary">VS Code</div>
            </div>
            <div className="p-3 rounded-lg bg-background-subtle border border-white/[0.06] space-y-1">
              <span className="text-[10px] font-mono text-text-muted uppercase">Version Control</span>
              <div className="text-xs font-bold text-text-primary">Git & GitHub</div>
            </div>
            <div className="p-3 rounded-lg bg-background-subtle border border-white/[0.06] space-y-1">
              <span className="text-[10px] font-mono text-text-muted uppercase">Languages Practiced</span>
              <div className="text-xs font-bold text-text-primary">C • Python</div>
            </div>
            <div className="p-3 rounded-lg bg-background-subtle border border-white/[0.06] space-y-1">
              <span className="text-[10px] font-mono text-text-muted uppercase">Currently Learning</span>
              <div className="text-xs font-bold text-sky-400">JavaScript • React</div>
            </div>
          </div>
        </Card>

        {/* Next Steps Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button to="/projects" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            Explore My Projects
          </Button>
          <Button to="/contact" variant="outline" size="md" icon={<Mail className="w-4 h-4" />}>
            Contact for Internship
          </Button>
        </div>

      </div>
    </div>
  );
};
