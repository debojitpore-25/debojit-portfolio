import { ProjectCaseStudy } from '../types';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'password-brute-force-simulator',
    title: 'Password Brute Force Simulator',
    tagline: 'Educational Python script demonstrating how password length, character sets, and hashing affect brute-force attempt counts and time.',
    status: 'Completed',
    primaryLanguage: 'Python',
    technologies: ['Python', 'hashlib', 'itertools', 'time'],
    githubUrl: 'https://github.com/debojitpore-25',
    liveUrl: undefined,
    featured: true,
    order: 1,
    overview: 'An educational command-line tool written in Python to demonstrate brute-force mechanics. The script attempts character combinations sequentially, generates SHA-256 hashes, and compares them with a target hash to show how quickly attempt counts grow with password length.',
    problem: 'It is easy to hear that longer passwords are safer, but harder to visualize the mathematical jump in attempt counts when moving from 4 characters to 6 or 8 characters.',
    approach: 'Used Python’s `itertools.product` to generate combinations from chosen character sets (lowercase, digits) and `hashlib` to hash each attempt. Measured time taken and computed total attempts to illustrate computational cost.',
    architectureDetails: [
      'Combination Generator: Iterates through combinations of increasing length using itertools.',
      'Hash Matching: Computes SHA-256 hash for each candidate string and compares with target hash.',
      'Basic Metrics: Tracks total attempts count and elapsed seconds using time module.',
      'Console Output: Prints the cracked string, attempt count, and execution time upon finding a match.'
    ],
    codeSnippet: {
      language: 'python',
      filename: 'brute_force_sim.py',
      code: `import itertools
import string
import time
import hashlib

def simulate_brute_force(target_hash: str, max_length: int = 5):
    """Educational script showing sequential brute force attempts."""
    charset = string.ascii_lowercase + string.digits
    attempts = 0
    start_time = time.perf_counter()

    for length in range(1, max_length + 1):
        for candidate in itertools.product(charset, repeat=length):
            attempts += 1
            guess = "".join(candidate)
            guess_hash = hashlib.sha256(guess.encode()).hexdigest()
            
            if guess_hash == target_hash:
                elapsed = time.perf_counter() - start_time
                return {
                    "matched": True,
                    "password": guess,
                    "attempts": attempts,
                    "elapsed_sec": round(elapsed, 4)
                }
    return {"matched": False, "attempts": attempts}`
    },
    challenges: [
      'Understanding how generator functions avoid creating large lists of combinations in memory.',
      'Observing how quickly the execution time escalates beyond 4-5 characters on a single CPU thread.'
    ],
    whatILearned: [
      'Worked with Python itertools.product to generate permutations efficiently.',
      'Understood how cryptographic hash functions like SHA-256 operate and why brute force becomes computationally impractical with high entropy.',
      'Practiced writing structured, readable Python functions.'
    ],
    futureImprovements: [
      'Add dictionary-based wordlist lookup mode for comparison with brute force.',
      'Add options to test different character sets (symbols, uppercase).'
    ]
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    tagline: 'Console application in C for adding, searching, displaying, and saving student records using structures and file I/O.',
    status: 'Completed',
    primaryLanguage: 'C',
    technologies: ['C', 'File I/O', 'Structs', 'Pointers'],
    githubUrl: 'https://github.com/debojitpore-25',
    liveUrl: undefined,
    featured: true,
    order: 2,
    overview: 'A console-based student record manager written in C. It allows users to add new student entries (roll number, name, marks), display all records, search by roll number, and persist records to a file on disk.',
    problem: 'Practicing C programming requires building projects that combine structures, user input handling, and disk persistence without relying on external databases.',
    approach: 'Defined a `Student` struct for data organization, implemented basic menu-driven console navigation, and used C standard file I/O (`fopen`, `fwrite`, `fread`, `fclose`) to save and read records.',
    architectureDetails: [
      'Data Structure: Uses `struct Student` containing roll number, name string, and marks float.',
      'File Persistence: Appends and reads binary records from a local `.dat` file.',
      'Record Search: Iterates through stored records sequentially to match a given roll number.',
      'Console Menu: Simple loop-driven terminal menu with user prompts.'
    ],
    codeSnippet: {
      language: 'c',
      filename: 'student_mgmt.c',
      code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int roll_no;
    char name[50];
    float marks;
} Student;

void add_student(const char *filename) {
    FILE *fp = fopen(filename, "ab");
    if (!fp) {
        printf("Error opening file.\\n");
        return;
    }
    Student s;
    printf("Enter Roll No: ");
    scanf("%d", &s.roll_no);
    printf("Enter Name: ");
    scanf("%s", s.name);
    printf("Enter Marks: ");
    scanf("%f", &s.marks);

    fwrite(&s, sizeof(Student), 1, fp);
    fclose(fp);
    printf("Record saved successfully.\\n");
}`
    },
    challenges: [
      'Handling user input and string reading safely in C.',
      'Ensuring files are properly opened and closed without leaving dangling file pointers.'
    ],
    whatILearned: [
      'Gained practical experience with C structures and file handling functions.',
      'Practiced pointer usage and memory layouts in C.',
      'Learned how to structure a multi-function CLI program.'
    ],
    futureImprovements: [
      'Add record deletion and updating capabilities.',
      'Improve input validation to handle malformed inputs cleanly.'
    ]
  }
];
