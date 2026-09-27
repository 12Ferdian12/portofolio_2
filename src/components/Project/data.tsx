export interface ProjectItem {
  id: string;
  tag: string;
  title: string;
  category: "fullstack" | "frontend" | "systems";
  description: string;
  techstack: string[];
  metrics: string;
  githubUrl: string;
  demoUrl?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "01",
    tag: "INTERACTIVE_APP // VERCEL",
    title: "SeatRoller",
    category: "frontend",
    description:
      "Interactive seat allocation and randomization application. Features real-time state orchestration, smooth visual seat shuffling, and responsive grid layouts. Deployed live on Vercel.",
    techstack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    metrics: "Live Production // Client State Engine",
    githubUrl: "https://github.com/12Ferdian12/Roller",
    demoUrl: "https://xi4roller.vercel.app",
  },
  {
    id: "02",
    tag: "MODULAR_WEB // REDUX_STATE",
    title: "SC Project Platform",
    category: "frontend",
    description:
      "Scalable web architecture engineered with Next.js and Redux Toolkit for immutable state management. Implements accessible UI patterns, responsive layout grids, and scroll-triggered animations.",
    techstack: [
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "AOS Animations",
    ],
    metrics: "Redux State Store // Modular UI Systems",
    githubUrl: "https://github.com/12Ferdian12/sc-project",
  },
  {
    id: "03",
    tag: "FINANCIAL_SYSTEM // DECOUPLED_ARCHITECTURE",
    title: "Laporan Keuangan Suite",
    category: "fullstack",
    description:
      "Full-stack financial bookkeeping and ledger management system. Frontend built with React, Vite, and TypeScript communicating with a robust Laravel RESTful backend for balance calculations and expense tracking.",
    techstack: [
      "React",
      "TypeScript",
      "Vite",
      "Laravel",
      "PHP",
      "MySQL",
      "Axios",
      "RESTful APIs",
    ],
    metrics: "Decoupled Architecture // Type-Safe Client",
    githubUrl: "https://github.com/12Ferdian12/LaporanKeuangan-FE-REACT",
  },
  {
    id: "04",
    tag: "REACTIVE_POS // REAL_TIME_CART",
    title: "Kasir Livewire",
    category: "fullstack",
    description:
      "Modern Point-of-Sale cashier system built with Laravel Livewire. Delivers single-page reactive behavior with real-time checkout totals, item increments, and transaction ledger logging without page reloads.",
    techstack: ["Laravel", "Livewire", "PHP", "MySQL", "Blade", "Tailwind CSS"],
    metrics: "Zero-Reload Reactive UI // Real-time Cart",
    githubUrl: "https://github.com/12Ferdian12/KasirLivewire",
  },
  {
    id: "05",
    tag: "HEALTHCARE_OPS // RELATIONAL_DB",
    title: "Klinik Hewan System",
    category: "fullstack",
    description:
      "Comprehensive operations management platform for veterinary clinics. Manages animal patient records, medical histories, doctor schedules, and treatment invoicing with multi-table relational integrity.",
    techstack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "Relational Schemas",
    ],
    metrics: "Multi-Entity Relational Design // Patient Ledger",
    githubUrl: "https://github.com/12Ferdian12/KlinikHewan",
  },
  {
    id: "06",
    tag: "WORKFLOW_AUTOMATION // REAL_TIME",
    title: "ChatBel Messaging App",
    category: "systems",
    description:
      "Real-time web communication platform integrated with n8n workflow automation. Features event-driven messaging, automated webhook pipelines, workflow trigger orchestration, and low-latency conversation feeds.",
    techstack: [
      "n8n",
      "WebSockets",
      "Node.js",
      "JavaScript",
      "Express",
      "REST APIs",
      "Automation",
    ],
    metrics: "n8n Automated Pipelines // Low-Latency WebSockets",
    githubUrl: "https://github.com/12Ferdian12/ChatBel",
  },
  {
    id: "07",
    tag: "ALGORITHMS // COMPUTATIONAL_LOGIC",
    title: "Competitive Programming & Problem Solving",
    category: "systems",
    description:
      "Comprehensive repository of algorithmic problem-solving implementations covering graph theory (BFS/DFS), dynamic programming, divide-and-conquer, and greedy heuristics optimized for time and memory complexity.",
    techstack: [
      "C++ (STL)",
      "JavaScript",
      "Data Structures",
      "Algorithms",
      "Memory Optimization",
    ],
    metrics: "Time & Space Complexity Optimization // STL",
    githubUrl: "https://github.com/12Ferdian12/CP",
  },
];

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend & Web" },
  { id: "systems", label: "Systems & Automation" },
] as const;

export const CATEGORIES = PROJECT_CATEGORIES;

export type CategoryId = (typeof PROJECT_CATEGORIES)[number]["id"];
