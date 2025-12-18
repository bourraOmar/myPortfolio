
export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Methodology';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}
