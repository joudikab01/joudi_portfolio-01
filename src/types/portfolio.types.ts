 
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

export interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  playStore?: string;
  appStore?: string;
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  current?: boolean;
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
