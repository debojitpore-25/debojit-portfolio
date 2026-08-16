import { BuildLogEntry } from '../types';

export const buildLogData: BuildLogEntry[] = [
  {
    id: 'log-august-2026',
    monthYear: 'August 2026',
    title: 'Python Scripting & Educational Brute-Force Project',
    summary: 'Built the Password Brute Force Simulator and explored AI-assisted developer workflows.',
    bullets: [
      'Wrote the Password Brute Force Simulator in Python using `hashlib` and `itertools`.',
      'Tested combinations of digits and lowercase letters against target SHA-256 hashes.',
      'Explored AI coding assistants (Antigravity, Claude, ChatGPT) for code review suggestions and debugging assistance.',
      'Maintained consistent commits on Git.'
    ],
    tags: ['Python', 'Git', 'AI Tools', 'Hashing'],
    relatedProjectId: 'password-brute-force-simulator'
  },
  {
    id: 'log-july-2026',
    monthYear: 'July 2026',
    title: 'Web Basics & Exploring JavaScript',
    summary: 'Practiced responsive HTML/CSS structures and started learning JavaScript fundamentals.',
    bullets: [
      'Built sample web pages with clean semantic HTML and responsive CSS.',
      'Began studying core JavaScript: data types, functions, and basic DOM manipulation.',
      'Started exploring React documentation and component concepts.',
      'Used VS Code extensions to improve development workflow.'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Web']
  },
  {
    id: 'log-june-2026',
    monthYear: 'June 2026',
    title: 'C Programming & Student Management System',
    summary: 'Implemented a console-based student database manager in C with file I/O.',
    bullets: [
      'Created the Student Management System using C structs and file operations (`fwrite`/`fread`).',
      'Practiced handling user input and basic menu loops in the terminal.',
      'Worked with pointer variables and basic memory layout in C.',
      'Pushed project repository to GitHub.'
    ],
    tags: ['C', 'File I/O', 'Structs', 'Git'],
    relatedProjectId: 'student-management-system'
  },
  {
    id: 'log-may-2026',
    monthYear: 'May 2026',
    title: 'BCA Coursework & Programming Foundations',
    summary: 'Focused on core BCA curriculum, basic algorithms, and setting up tools.',
    bullets: [
      'Studied fundamental data structures and basic algorithmic logic.',
      'Configured VS Code and GCC compiler environment.',
      'Learned fundamental Git commands: init, add, commit, and push.'
    ],
    tags: ['BCA', 'C Basics', 'Git', 'CS Fundamentals']
  }
];
