import { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  // Core / Actually Used
  {
    name: 'C',
    section: 'Core / Actually Used',
    statusText: 'Practiced in Projects',
    description: 'Basic syntax, control flow, functions, arrays, pointers, structs, and file operations.',
    context: 'Used to build the Student Management System with structured record file handling.',
    relatedProjectId: 'student-management-system',
  },
  {
    name: 'Python',
    section: 'Core / Actually Used',
    statusText: 'Practiced in Projects',
    description: 'Scripting, functions, loops, standard library modules (hashlib, itertools, string), and basic algorithms.',
    context: 'Used to build the Password Brute Force Simulator to test combinations and hash matching.',
    relatedProjectId: 'password-brute-force-simulator',
  },
  {
    name: 'HTML',
    section: 'Core / Actually Used',
    statusText: 'Practiced in Projects',
    description: 'Semantic document structure, forms, inputs, links, tables, and page layout elements.',
    context: 'Used for creating clean markup structures for personal web pages.',
  },
  {
    name: 'CSS',
    section: 'Core / Actually Used',
    statusText: 'Practiced in Projects',
    description: 'Styling, layout systems (Flexbox, basic Grid), responsive rules, colors, and typography.',
    context: 'Used for styling responsive, clean interface layouts.',
  },
  {
    name: 'Git',
    section: 'Core / Actually Used',
    statusText: 'Practiced in Workflow',
    description: 'Local repository initialization, staging, commits, branch creation, and merge basics.',
    context: 'Used daily for tracking version history across personal code projects.',
  },
  {
    name: 'GitHub',
    section: 'Core / Actually Used',
    statusText: 'Practiced in Workflow',
    description: 'Remote repository hosting, pushing commits, viewing diffs, and organizing project READMEs.',
    context: 'Used for hosting project source code and showcasing build logs.',
  },
  {
    name: 'VS Code',
    section: 'Core / Actually Used',
    statusText: 'Primary Editor',
    description: 'Code editing, extensions, integrated terminal, and basic debugging setup.',
    context: 'Primary environment for writing and running C, Python, and web code.',
  },

  // Currently Learning
  {
    name: 'JavaScript',
    section: 'Currently Learning',
    statusText: 'Currently Learning',
    description: 'Learning ES6 syntax, variables, DOM manipulation, functions, events, and asynchronous basics.',
    context: 'Building familiarity with JavaScript for interactive frontend behaviors.',
  },
  {
    name: 'React',
    section: 'Currently Learning',
    statusText: 'Currently Learning',
    description: 'Exploring component-based UI architecture, JSX, props, and fundamental useState hooks.',
    context: 'Learning to break down user interfaces into reusable components.',
  },
  {
    name: 'SQL / Database Basics',
    section: 'Currently Learning',
    statusText: 'Currently Learning',
    description: 'Studying relational database concepts, basic SELECT queries, INSERT, UPDATE, and table schemas.',
    context: 'Exploring structured data storage as part of BCA coursework.',
  },
  {
    name: 'Modern Web Development',
    section: 'Currently Learning',
    statusText: 'Currently Learning',
    description: 'Exploring responsive web patterns, accessibility basics, and frontend project structuring.',
    context: 'Working toward building complete, clean web applications.',
  },

  // Tools / Workflow
  {
    name: 'Antigravity',
    section: 'Tools / Workflow',
    statusText: 'Workflow Tool',
    description: 'Using Google Antigravity as an agentic AI coding and pair-programming assistant.',
    context: 'Used for project planning, code exploration, and iterative development.',
  },
  {
    name: 'Claude',
    section: 'Tools / Workflow',
    statusText: 'Workflow Tool',
    description: 'Leveraging Claude for technical explanations, code review suggestions, and conceptual clarity.',
    context: 'Used as an AI learning partner for understanding complex programming concepts.',
  },
  {
    name: 'ChatGPT',
    section: 'Tools / Workflow',
    statusText: 'Workflow Tool',
    description: 'Utilizing ChatGPT for brainstorming approaches, debugging tips, and syntax queries.',
    context: 'Assists with daily study and quick problem troubleshooting.',
  },
];
