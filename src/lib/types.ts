export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  github: string;
  demo?: string;
  tags: string[];
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
}

export interface Social {
  name: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  navBrand: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  heroDescription: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  footerText: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  backend: string[];
  devops: string[];
  specializations: string[];
  design: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  details?: string;
}

export interface Activity {
  title: string;
  role: string;
  event: string;
  year: string;
  description: string;
}

export interface Interest {
  name: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}
