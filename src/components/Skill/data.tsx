import React from "react";

export type SkillLevel = "Advanced" | "Intermediate" | "Beginner-Intermediate";
export type SkillCategory = "frontend" | "backend" | "tooling";

export interface SkillItem {
  name: string;
  level: SkillLevel;
  levelPercent: number;
  category: SkillCategory;
  categoryLabel: string;
  detail: string;
  iconType: "fa" | "svg";
  faClass?: string;
  svgName?: "tailwindcss" | "n8n" | "firebase" | "nextjs" | "typescript";
}

export const SKILLS_DATA: SkillItem[] = [
  {
    name: "HTML",
    level: "Advanced",
    levelPercent: 95,
    category: "frontend",
    categoryLabel: "Frontend Core",
    detail:
      "Semantic structuring, SEO optimization, and strict accessibility standards.",
    iconType: "fa",
    faClass: "fa-brands fa-html5",
  },
  {
    name: "PHP",
    level: "Intermediate",
    levelPercent: 75,
    category: "backend",
    categoryLabel: "Backend Server",
    detail:
      "Object-oriented scripting, backend MVC architectures, and data handling.",
    iconType: "fa",
    faClass: "fa-brands fa-php",
  },
  {
    name: "Tailwindcss",
    level: "Intermediate",
    levelPercent: 80,
    category: "frontend",
    categoryLabel: "Styling Engine",
    detail:
      "Utility-first responsive layouts, customized design systems, and rapid prototyping.",
    iconType: "svg",
    svgName: "tailwindcss",
  },
  {
    name: "n8n",
    level: "Beginner-Intermediate",
    levelPercent: 60,
    category: "tooling",
    categoryLabel: "Workflow Automation",
    detail:
      "Autonomous workflow pipelines, webhook integrations, and multi-service event orchestration.",
    iconType: "svg",
    svgName: "n8n",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    levelPercent: 80,
    category: "frontend",
    categoryLabel: "Core Language",
    detail:
      "Modern ES6+ syntax, asynchronous programming, event handling, and DOM operations.",
    iconType: "fa",
    faClass: "fa-brands fa-js",
  },
  {
    name: "Laravel",
    level: "Intermediate",
    levelPercent: 75,
    category: "backend",
    categoryLabel: "Backend Framework",
    detail:
      "Fullstack MVC web architecture, Eloquent ORM, authentication, and RESTful APIs.",
    iconType: "fa",
    faClass: "fa-brands fa-laravel",
  },
  {
    name: "Firebase",
    level: "Intermediate",
    levelPercent: 75,
    category: "backend",
    categoryLabel: "Cloud & Database",
    detail:
      "Realtime NoSQL Firestore database, cloud storage, authentication, and hosting.",
    iconType: "svg",
    svgName: "firebase",
  },
  {
    name: "NextJS",
    level: "Intermediate",
    levelPercent: 80,
    category: "frontend",
    categoryLabel: "Fullstack Framework",
    detail:
      "Server-side rendering, App Router architecture, Turbopack, and static generation.",
    iconType: "svg",
    svgName: "nextjs",
  },
  {
    name: "React",
    level: "Intermediate",
    levelPercent: 80,
    category: "frontend",
    categoryLabel: "UI Architecture",
    detail:
      "Modular component hierarchies, state orchestration, custom hooks, and concurrent UI.",
    iconType: "fa",
    faClass: "fa-brands fa-react",
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    levelPercent: 75,
    category: "frontend",
    categoryLabel: "Type Safety",
    detail:
      "Type-safe architectures, generic abstractions, compile-time validation, and scalable codebases.",
    iconType: "svg",
    svgName: "typescript",
  },
  {
    name: "Git",
    level: "Intermediate",
    levelPercent: 80,
    category: "tooling",
    categoryLabel: "Version Control",
    detail:
      "Distributed version control, branch management strategies, code reviews, and GitHub workflows.",
    iconType: "fa",
    faClass: "fa-brands fa-git-alt",
  },
  {
    name: "SQL",
    level: "Intermediate",
    levelPercent: 75,
    category: "backend",
    categoryLabel: "Relational Database",
    detail:
      "Relational schema modeling, index optimization, complex queries, and data integrity.",
    iconType: "fa",
    faClass: "fa-solid fa-database",
  },
];

export const SKILL_CATEGORIES = [
  { id: "all", label: "All Skills", count: 12 },
  { id: "frontend", label: "Frontend", count: 6 },
  { id: "backend", label: "Backend & Data", count: 4 },
  { id: "tooling", label: "Tools & DevOps", count: 2 },
] as const;

export const CATEGORIES = SKILL_CATEGORIES;

export function SkillIcon({ skill }: { skill: SkillItem }) {
  if (skill.iconType === "fa" && skill.faClass) {
    return (
      <i
        className={`${skill.faClass} text-2xl transition-transform duration-200 group-hover:scale-110`}
        style={{ color: "#FCF1D0" }}
        aria-hidden="true"
      />
    );
  }

  if (skill.svgName === "tailwindcss") {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
        fill="#FCF1D0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    );
  }

  if (skill.svgName === "n8n") {
    return (
      <svg
        role="img"
        viewBox="0 0 228 120"
        className="w-7 h-4 transition-transform duration-200 group-hover:scale-110"
        fill="#FCF1D0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z"
        />
      </svg>
    );
  }

  if (skill.svgName === "firebase") {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
        fill="#FCF1D0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
      </svg>
    );
  }

  if (skill.svgName === "nextjs") {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
        fill="#FCF1D0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
      </svg>
    );
  }

  if (skill.svgName === "typescript") {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
        fill="#FCF1D0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    );
  }

  return (
    <span className="font-mono text-sm font-bold text-[#FCF1D0]">
      {skill.name.slice(0, 2).toUpperCase()}
    </span>
  );
}
