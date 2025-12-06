import {
  IconBrandFlutter,
  IconBrandReact,
  IconBrandGit,
  IconDatabase,
  IconDeviceMobile,
  IconCode,
  IconShieldLock,
  IconPalette,
  IconSettings,
  IconBriefcase,
  IconUsers,
  IconRocket,
} from "@tabler/icons-react";
import type { IconComponent } from "../types/portfolio.types";

export const SKILL_ICON_MAP: Record<string, IconComponent> = {
  "Flutter Development": IconBrandFlutter,
  "State Management": IconSettings,
  "Programming Languages": IconCode,
  "Web Development": IconBrandReact,
  "Backend Frameworks": IconCode,
  "Databases & Storage": IconDatabase,
  "Security & Authentication": IconShieldLock,
  "Project Management": IconBriefcase,
  "Version Control & CI/CD": IconBrandGit,
  "UI/UX & Design": IconPalette,
  "Architecture & Patterns": IconDeviceMobile,
};

export const FEATURE_ICON_MAP: Record<string, IconComponent> = {
  "Mobile Development": IconDeviceMobile,
  "Clean Architecture": IconCode,
  "Team Leadership": IconUsers,
  Performance: IconRocket,
};

export const DEFAULT_ICON: IconComponent = IconCode;
