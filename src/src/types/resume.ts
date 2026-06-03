export interface Experience {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string | "Present";
    bullets: string[];
    technologies: string[];
  }
  
  export interface Education {
    institution: string;
    degree: string;
    field: string;
    location: string;
    graduationDate: string;
    details?: string[]; // optional — the ? makes it not required
  }
  
  export interface Skill {
    category: string;        // e.g., "Frontend", "Backend", "Data"
    items: string[];
  }
  
  export interface Project {
    name: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
  }
  
  export interface Profile {
    name: string;
    title: string;
    tagline: string;
    email: string;
    location: string;
    githubUrl: string;
    linkedinUrl: string;
  }