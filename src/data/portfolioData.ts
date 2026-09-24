import {
  Project,
  Internship,
  EducationItem,
  SkillCategory,
  Certification,
  LanguageItem,
} from '../types';

export const personalInfo = {
  name: 'Tanushri V',
  formalName: 'TANUSHRI.V',
  role: 'Aspiring Software Development / AI-ML Engineer',
  fullTitle:
    'Final-year Information Science & Engineering Student | Aspiring Software Development / AI-ML Engineer',
  tagline:
    'Final-year Information Science and Engineering student passionate about AI, Machine Learning, and Web Development',
  about:
    'Final-year Information Science and Engineering student with hands-on exposure to Python, Artificial Intelligence, Machine Learning, Web Development and databases. Experienced in developing AI-driven learning platforms, document search systems, and OCR-based solutions through academic projects and internships. Strong interest in building practical technology solutions and learning new tools. Seeking an entry-level Software Development or AI/ML role.',
  email: 'tanushrivillalan@gmail.com',
  phone: '9787267207',
  displayPhone: '+91 97872 67207',
  location: 'Puducherry / India',
  linkedinUrl: 'https://linkedin.com/in/tanushri-v-5bb81b39a',
  linkedinUsername: 'linkedin.com/in/tanushri-v-5bb81b39a',
  githubUrl: 'https://github.com/Tanushrivillalan24',
  githubUsername: 'github.com/Tanushrivillalan24',
  availableForWork: 'Actively seeking 2027 entry-level roles & internships',
  currentCGPA: '7.00',
  graduationYear: '2027',
};

export const technicalSkills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core logic & backend development',
    skills: [
      { name: 'Python', level: 'Proficient / Core' },
    ],
  },
  {
    category: 'Web Technologies',
    description: 'Markup, styling & interactive interfaces',
    skills: [
      { name: 'HTML5', level: 'Semantic structure' },
      { name: 'CSS3', level: 'Responsive design & layouts' },
    ],
  },
  {
    category: 'Tools & Platforms',
    description: 'Development environment & version control',
    skills: [
      { name: 'VS Code', level: 'Primary IDE' },
      { name: 'GitHub', level: 'Version control & collaboration' },
      { name: 'Git', level: 'CLI & workflows' },
    ],
  },
  {
    category: 'Areas of Interest',
    description: 'Primary domains of specialization',
    skills: [
      { name: 'Software Development', level: 'Architecture & engineering' },
      { name: 'AI & Machine Learning', level: 'Models, OCR & intelligence' },
      { name: 'Web Application Development', level: 'Full-stack prototyping' },
    ],
  },
];

export const educationHistory: EducationItem[] = [
  {
    id: 'btech-ise',
    institution: "Women's Engineering College",
    degree: 'B.Tech — Information Science and Engineering',
    grade: 'CGPA 7.00',
    period: '2023 – 2027',
    secondaryDetails:
      'Focusing on algorithm design, machine learning fundamentals, database management, and hands-on software development.',
  },
  {
    id: 'schooling',
    institution: 'St. Patrick Matric Higher Secondary School',
    degree: 'Higher Secondary & Secondary Education',
    grade: 'HSC: 71% (2023) | SSLC (2021)',
    period: '2011 – 2023',
    secondaryDetails:
      'Completed foundational high school education with strong emphasis on mathematics and science.',
  },
];

export const internships: Internship[] = [
  {
    id: 'adz4needz',
    company: 'Adz4Needdz (OPC) Pvt. Ltd.',
    role: 'AI/ML Intern',
    duration: '22 Jun 2026 – 05 Jul 2026',
    startDate: '22 Jun 2026',
    endDate: '05 Jul 2026',
    description:
      'Worked on a Lead Scoring ML Model and an AI-Driven Personalized Education Platform; practical AI/ML application development.',
    contributions: [
      'Developed feature preprocessing pipelines for a predictive Lead Scoring machine learning model to prioritize prospects.',
      'Contributed to the design and data flow of an AI-Driven Personalized Education Platform recommending customized modules.',
      'Gained practical industry experience in transitioning experimental ML prototypes into functional application workflows.',
    ],
    skills: ['Python', 'Machine Learning', 'Lead Scoring', 'AI Systems', 'Data Pipelines'],
  },
  {
    id: 'cloudlogic',
    company: 'Cloudlogic Technologies Pvt. Ltd., Puducherry',
    location: 'Puducherry, India',
    role: 'Web Development Intern',
    duration: '15 Jun 2025 – 13 Jul 2025',
    startDate: '15 Jun 2025',
    endDate: '13 Jul 2025',
    description:
      'Practical exposure to web development technologies and development practices.',
    contributions: [
      'Built responsive web layouts using standard web technologies with cross-device compatibility.',
      'Collaborated on front-end UI structures and gained exposure to production coding standards and web practices.',
      'Integrated styling rules, asset optimization, and user-friendly form controls for client portals.',
    ],
    skills: ['HTML5', 'CSS3', 'Web Development', 'UI Design', 'Code Standards'],
  },
];

export const projects: Project[] = [
  {
    id: 'learn-ai',
    title: 'LearnAI',
    subtitle: 'Personalized Education Platform',
    description:
      'AI-driven learning platform with personalized learning paths, quizzes, summaries, and progress tracking.',
    highlights: [
      'Generates adaptive study roadmaps tailored to individual user comprehension and pacing.',
      'Integrated dynamic quiz generation and automated topic summarization utilizing AI APIs.',
      'Stores user milestone metrics, activity history, and progress records via MongoDB database.',
    ],
    techStack: ['Python', 'Flask', 'MongoDB', 'HTML', 'CSS', 'AI API'],
    githubUrl: 'https://github.com/Tanushrivillalan24',
    category: 'AI/ML',
  },
  {
    id: 'ebook-search',
    title: 'E-Book Chapter & Section Search System',
    subtitle: 'Intelligent PDF Keyword Search & Information Retrieval',
    description:
      'Search system to find relevant chapters and sections from PDF-based e-books using keyword queries; uses text processing/TF-IDF.',
    highlights: [
      'Extracts and indexes structured textual content from unstructured PDF documents using PyPDF2.',
      'Implemented Term Frequency-Inverse Document Frequency (TF-IDF) vectorization via Scikit-learn.',
      'Ranks book sections by semantic keyword relevance to deliver fast chapter-level query retrieval.',
    ],
    techStack: ['Python', 'Flask', 'PyPDF2', 'Scikit-learn', 'TF-IDF'],
    githubUrl: 'https://github.com/Tanushrivillalan24/ebook-chapter-section-search-system',
    category: 'NLP/Search',
  },
  {
    id: 'legal-metrology',
    title: 'Legal Metrology Compliance Checker',
    subtitle: 'Automated Packaged Commodity Verification System',
    description:
      'AI-assisted system that scans packaged product labels using OCR, checks mandatory declarations, and generates reports for human review.',
    highlights: [
      'Applies optical character recognition (PyTesseract) to ingest and parse text from package label imagery.',
      'Audits mandatory statutory declarations including MRP, net quantity, manufacturing dates, and consumer care details.',
      'Flags non-compliant or missing consumer disclosure fields and generates structured reports for validation.',
    ],
    techStack: ['Python', 'FastAPI', 'Tesseract OCR', 'PyTesseract'],
    githubUrl: 'https://github.com/Tanushrivillalan24',
    category: 'AI/ML',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Developing Soft Skills and Personality',
    issuer: 'NPTEL',
    description:
      'Focused on professional communication, interpersonal effectiveness, workplace dynamics, and team collaboration.',
    badgeType: 'soft-skills',
  },
  {
    title: 'Data Science & Analytics',
    issuer: 'HP LIFE',
    description:
      'Fundamental concepts of data-driven decision making, analytical frameworks, and data evaluation methodologies.',
    badgeType: 'technical',
  },
];

export const languages: LanguageItem[] = [
  {
    name: 'English',
    proficiency: 'Professional Working Proficiency',
  },
  {
    name: 'Tamil',
    proficiency: 'Native / Bilingual Proficiency',
    native: true,
  },
];
