export type SkillSection = 'Core / Actually Used' | 'Currently Learning' | 'Tools / Workflow';

export interface SkillItem {
  name: string;
  section: SkillSection;
  description: string;
  statusText: string; // e.g. "Practiced in Projects", "Currently Learning", "Daily Tool"
  context: string;
  relatedProjectId?: string;
}

export type ProjectStatus = 'Completed' | 'In Progress' | 'Planned';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  primaryLanguage: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
  overview: string;
  problem: string;
  approach: string;
  architectureDetails: string[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  challenges: string[];
  whatILearned: string[];
  futureImprovements: string[];
}

export interface CurrentlyStatus {
  learning: {
    title: string;
    items: string;
    details: string;
  };
  building: {
    title: string;
    items: string;
    details: string;
  };
  practicing: {
    title: string;
    items: string[];
    details: string;
  };
  lookingFor: {
    title: string;
    role: string;
    timeline: string;
    details: string;
  };
}

export type JourneyType = 'Education' | 'Foundation' | 'Project' | 'Milestone';

export interface JourneyMilestone {
  id: string;
  period: string;
  title: string;
  context: string;
  type: JourneyType;
  description: string;
  learnings: string[];
  tags: string[];
}

export interface BuildLogEntry {
  id: string;
  monthYear: string;
  title: string;
  summary: string;
  bullets: string[];
  tags: string[];
  relatedProjectId?: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  degree: string;
  bio: string;
  philosophy: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  availability: string;
  seekingRole: string;
  photoUrl: string;
}
