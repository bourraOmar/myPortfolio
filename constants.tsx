
import { Skill, Experience, Education, Project, Certification } from './types.ts';

export const PERSONAL_INFO = {
  name: "Bourra Omar",
  title: "DÉVELOPPEUR WEB FULL STACK",
  email: "obourra662@gmail.com",
  phone: "+212 617 117 180",
  linkedin: "https://www.linkedin.com/in/omar-bourra",
  github: "https://github.com/bourraOmar",
  profile: "Développeur web créatif et motivé, je dispose d'une solide expertise en programmation et d'une grande capacité d'adaptation face aux nouveaux défis. Rigoureux et curieux, je souhaite mettre mes compétences au service de projets ambitieux et innovants.",
  interests: ["Programmation", "Gaming", "Natation"],
  languages: [
    { name: "Arabe", level: "Langue maternelle" },
    { name: "Français", level: "B1" },
    { name: "Anglais", level: "A2" }
  ]
};

export const SKILLS: Skill[] = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Javascript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "Laravel", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Nest.js", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Git / Github", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Jira", category: "Tools" },
  { name: "UML", category: "Tools" },
  { name: "Scrum / Agile", category: "Methodology" }
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Stage de développement web Full-Stack",
    company: "Association ASPS Agadir",
    location: "Agadir, Maroc",
    period: "Juin 2025 – Août 2025",
    description: [
      "Conception et développement d’un site web pour la gestion des activités de l’association.",
      "Réalisation d’un espace d’administration complet (CRUD, filtres, export Excel).",
      "Développement backend avec Express.js et PostgreSQL.",
      "Développement frontend avec React.js et Tailwind CSS."
    ],
    techStack: ["React.js", "Express.js", "PostgreSQL", "Tailwind CSS", "GitHub"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Formation de Developpement Web Full Stack",
    institution: "YouCode-Safi (Um6p)",
    period: "2024 – 2026"
  },
  {
    degree: "Deux année en Sciences Mathématiques et Informatique",
    institution: "Faculté Polydisciplinaire Cadi Ayyad de Safi",
    period: "2021 – 2023"
  },
  {
    degree: "Diplôme de qualification en Informatique",
    institution: "Center Informatique Nouvelle Ville-Safi",
    period: "2019 – 2021"
  },
  {
    degree: "Baccalauréat Professionnelle en Maintenance Industrie",
    institution: "Lycée El Khawarizmi",
    period: "2018 – 2019"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Auto Rent Pro",
    description: "Plateforme de location de voitures en ligne permettant aux administrateurs, propriétaires et clients de gérer facilement les véhicules et les réservations.",
    tech: ["Laravel 11", "Tailwind CSS", "MySQL", "PostgreSQL"],
    github: "https://github.com/AutoRentPro",
    image: "https://picsum.photos/seed/autorent/800/600"
  },
  {
    title: "Salefni",
    description: "Solution web de simulation et de gestion des crédits en ligne permettant aux visiteurs de simuler un prêt et aux administrateurs de traiter les demandes.",
    tech: ["React", "json-server", "React Router", "Tailwind CSS"],
    github: "https://github.com/Salefni",
    image: "https://picsum.photos/seed/salefni/800/600"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Creation des site web avec WordPress", issuer: "Edraak", year: "2023" },
  { title: "Conception de l’expérience utilisateur", issuer: "Edraak", year: "2023" },
  { title: "Introduction à la programmation à l’aide de Python", issuer: "Edraak", year: "2023" }
];
