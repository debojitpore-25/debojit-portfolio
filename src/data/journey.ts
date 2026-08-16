import { JourneyMilestone } from '../types';

export const journeyData: JourneyMilestone[] = [
  {
    id: 'bca-studies',
    period: 'BCA Coursework',
    title: 'Computer Applications Studies (BCA)',
    context: 'Undergraduate Program',
    type: 'Education',
    description: 'Started BCA curriculum focusing on foundational computer science concepts, programming logic, data structures, and computer organization.',
    learnings: [
      'Studied basic algorithms, discrete logic, and data representation.',
      'Developed structured thinking and systematic problem solving.'
    ],
    tags: ['BCA', 'Foundations', 'CS Basics']
  },
  {
    id: 'c-programming',
    period: 'Systems Programming',
    title: 'Programming Foundations in C',
    context: 'Core Programming',
    type: 'Foundation',
    description: 'Began learning procedural programming with C to understand data types, control flow, functions, pointers, and memory mechanics.',
    learnings: [
      'Practiced writing C programs using arrays, structures, and pointers.',
      'Worked with standard C file input/output operations.'
    ],
    tags: ['C', 'Pointers', 'File I/O']
  },
  {
    id: 'c-student-project',
    period: 'Project',
    title: 'Built Student Management System (C)',
    context: 'Console Application',
    type: 'Project',
    description: 'Implemented a console-based student database manager in C using structs and file persistence.',
    learnings: [
      'Applied file operations (`fwrite`, `fread`) for persistent data.',
      'Organized multi-function code for a complete console tool.'
    ],
    tags: ['C', 'Structs', 'CLI']
  },
  {
    id: 'python-learning',
    period: 'Scripting & Algorithms',
    title: 'Python Programming & Scripting',
    context: 'High-Level Language',
    type: 'Foundation',
    description: 'Learned Python for scripting, basic algorithm implementation, and utilizing standard library modules.',
    learnings: [
      'Practiced with lists, dictionaries, strings, and generator functions.',
      'Explored standard libraries such as `hashlib` and `itertools`.'
    ],
    tags: ['Python', 'Scripting', 'Libraries']
  },
  {
    id: 'python-simulator',
    period: 'Project',
    title: 'Built Password Brute Force Simulator (Python)',
    context: 'Educational Script',
    type: 'Project',
    description: 'Created an educational simulator demonstrating brute-force combinations, SHA-256 hash checks, and execution time.',
    learnings: [
      'Utilized `itertools.product` to generate combinations efficiently.',
      'Gained practical insight into computational cost and password length.'
    ],
    tags: ['Python', 'Hashlib', 'Itertools']
  },
  {
    id: 'git-github-tools',
    period: 'Workflow Tools',
    title: 'Version Control with Git & GitHub',
    context: 'Developer Workflow',
    type: 'Milestone',
    description: 'Began using Git and GitHub regularly for version control and repository management.',
    learnings: [
      'Practiced making clear commits and managing local repositories.',
      'Hosted project code repositories on GitHub.'
    ],
    tags: ['Git', 'GitHub', 'Workflow']
  },
  {
    id: 'web-development-learning',
    period: 'Current Focus',
    title: 'Exploring Web Development & React',
    context: 'Active Learning',
    type: 'Milestone',
    description: 'Building familiarity with HTML, CSS, JavaScript fundamentals, and beginning to learn component basics in React.',
    learnings: [
      'Practicing responsive layouts with CSS.',
      'Learning core JavaScript and component-based UI concepts in React.'
    ],
    tags: ['HTML', 'CSS', 'JavaScript (Learning)', 'React (Learning)']
  }
];
