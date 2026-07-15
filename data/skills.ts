import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDocker,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiPostman,
  SiJira,
} from "react-icons/si";

export interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "Tools";
  icon: React.ComponentType<any>;
}

export const skills: Skill[] = [
  {
    name: "React",
    level: 80,
    category: "Frontend",
    icon: FaReact,
  },
  {
    name: "Next.js",
    level: 75,
    category: "Frontend",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    level: 83,
    category: "Frontend",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    level: 88,
    category: "Frontend",
    icon: FaJs,
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "Frontend",
    icon: SiTailwindcss,
  },
  {
  name: "Expo",
  level: 80,
  category: "Frontend",
  icon: FaMobileAlt,
 },
 {
  name: "React Native",
  level: 80,
  category: "Frontend",
  icon: FaReact,
 },
  {
    name: "HTML5",
    level: 90,
    category: "Frontend",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    level: 89,
    category: "Frontend",
    icon: FaCss3Alt,
  },

  {
    name: "Spring Boot",
    level: 65,
    category: "Backend",
    icon: SiSpringboot,
  },

  {
    name: "Git",
    level: 80,
    category: "Tools",
    icon: FaGitAlt,
  },
  {
    name: "GitHub",
    level: 80,
    category: "Tools",
    icon: FaGithub,
  },
  {
    name: "Docker",
    level: 65,
    category: "Tools",
    icon: FaDocker,
  },
  {
    name: "Postman",
    level: 80,
    category: "Tools",
    icon: SiPostman,
  },
  {
    name: "Jira",
    level: 75,
    category: "Tools",
    icon: SiJira,
  },
{
  name: "VS Code",
  level: 90,
  category: "Tools",
  icon: FaCode,
},
  {
    name: "Figma",
    level: 80,
    category: "Tools",
    icon: FaFigma,
  },
];