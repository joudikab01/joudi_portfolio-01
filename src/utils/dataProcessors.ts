import type {
  SkillCategory,
  Feature,
  Project,
  Experience,
  ProcessedSkillCategory,
  ProcessedFeature,
  ProcessedProject,
  ProcessedExperience,
} from "../types/portfolio.types";
import {
  SKILL_ICON_MAP,
  FEATURE_ICON_MAP,
  DEFAULT_ICON,
} from "../constants/icons";
import {
  getAlternatingColor,
  getAlternatingColorReverse,
} from "../constants/colors";

export const processSkillCategories = (
  categories: SkillCategory[]
): ProcessedSkillCategory[] => {
  return categories.map((category, index) => ({
    ...category,
    icon: SKILL_ICON_MAP[category.title] || DEFAULT_ICON,
    color: getAlternatingColor(index),
  }));
};

export const processFeatures = (features: Feature[]): ProcessedFeature[] => {
  return features.map((feature, index) => ({
    ...feature,
    icon: FEATURE_ICON_MAP[feature.title] || DEFAULT_ICON,
    color: getAlternatingColor(index),
  }));
};

export const processProjects = (projects: Project[]): ProcessedProject[] => {
  return projects.map((project, index) => ({
    ...project,
    color: getAlternatingColorReverse(index),
  }));
};

export const processExperiences = (
  experiences: Experience[]
): ProcessedExperience[] => {
  return experiences.map((experience, index) => ({
    ...experience,
    color: getAlternatingColorReverse(index),
  }));
};
