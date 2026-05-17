// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconComponent = React.ComponentType<any>;

export type ColorType = "cyan" | "violet";

export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
}

export interface Language {
  lang: string;
  level: string;
}

export interface AboutMe {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SubProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  url?: string;
  image?: string;
  status: "completed" | "in-progress";
}

export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  features: string[];
  status: "completed" | "in-progress";
  playStore?: string;
  appStore?: string;
  url?: string;
  image: string;
  images?: string[];
  subProjects?: SubProject[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyKey: string;
  location?: string;
  period: string;
  description: string[];
  current?: boolean;
  logo?: string;
}

export interface ProcessedSkillCategory extends SkillCategory {
  icon: IconComponent;
  color: ColorType;
}

export interface ProcessedFeature extends Feature {
  icon: IconComponent;
  color: ColorType;
}

export interface ProcessedProject extends Project {
  color: ColorType;
}

export interface CompanyGroup {
  key: string;
  projects: Project[];
}

export interface ProcessedExperience extends Experience {
  color: ColorType;
}

export interface Recommendation {
  name: string;
  title: string;
  expertise: string;
  relationship: string;
  message: string;
  linkedin?: string;
}
