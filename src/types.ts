export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  category: 'AI/ML' | 'Web Development' | 'NLP/Search';
}

export interface Internship {
  id: string;
  company: string;
  location?: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  contributions: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  grade: string;
  period: string;
  secondaryDetails?: string;
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  description?: string;
  badgeType: 'technical' | 'soft-skills';
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  native?: boolean;
}
