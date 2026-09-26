"use client";

import React, { useState } from "react";
import { useLenis } from "lenis/react";

interface ProjectItem {
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

const PROJECTS: ProjectItem[] = [
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

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend & Web" },
  { id: "systems", label: "Systems & Automation" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

export default function Project() {
  const lenis = useLenis();
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -20 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 sm:py-32 bg-[#010736] text-[#fcf1d0] px-6 sm:px-10 md:px-14 lg:px-20 border-t border-[#22396f]/50 hermes-grid overflow-hidden"
    >
      {/* Ambient lighting matching Hero section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_60%_20%,#0d1c42,transparent_80%)] opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-[#22396f]/20 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] w-full ml-0 sm:ml-4 md:ml-8 lg:ml-14 xl:ml-20 space-y-12 sm:space-y-16">
        {/* Monospace Section & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#22396f]/60 font-mono text-[11px] sm:text-xs">
          <div className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[#fcf1d0]/80 bg-[#0d1c42]/60 px-3 py-1.5 border border-[#22396f]/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>:section: 02</span>
            <span className="text-[#22396f]">{"//"}</span>
            <span>github_repositories</span>
          </div>

          <div className="flex items-center gap-3 text-[#fcf1d0]/70 uppercase tracking-wider text-[10px] sm:text-xs">
            <span className="text-[#22396f]">SOURCE:</span>
            <a
              href="https://github.com/12Ferdian12?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fcf1d0] font-semibold hover:underline"
            >
              github.com/12Ferdian12 &rarr;
            </a>
            <span className="text-[#22396f]/40">|</span>
            <span>PUBLIC_REPOS [07_FEATURED]</span>
          </div>
        </div>

        {/* Section Headline & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#fcf1d0] leading-[0.92] select-none">
              Featured GitHub &amp; <br />
              <span className="font-bold italic text-[#fcf1d0] drop-shadow-sm">
                Engineering Projects.
              </span>
            </h2>
            <p className="font-serif text-[#fcf1d0]/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed pt-1">
              Curated from my public GitHub repositories. Spanning full-stack
              web applications, reactive cashier systems, real-time
              communications, and algorithmic problem solving.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0d1c42]/80 border border-[#22396f] backdrop-blur-md">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#fcf1d0] text-[#010736] font-semibold shadow-xs"
                      : "text-[#fcf1d0]/70 hover:text-[#fcf1d0] hover:bg-[#22396f]/40"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid: Responsive Specimen Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 bg-[#0d1c42]/80 hover:bg-[#0d1c42] border border-[#22396f] hover:border-[#fcf1d0]/60 backdrop-blur-md shadow-xl shadow-[#010736]/60 transition-all duration-300"
            >
              <div>
                {/* Specimen Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#22396f]/60 font-mono text-[10px] uppercase tracking-[0.2em] text-[#fcf1d0]/70">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                    <span>:repo: {project.id}</span>
                  </span>
                  <span className="text-[#22396f]">[PUBLIC]</span>
                </div>

                {/* Subtag */}
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-400/90 mb-2">
                  {project.tag}
                </p>

                {/* Project Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#fcf1d0] group-hover:text-white transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="font-serif text-sm sm:text-base text-[#fcf1d0]/80 font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Techstack Badges */}
                <div className="mb-6">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#fcf1d0]/50 block mb-2">
                    :tech_stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techstack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#010736]/70 border border-[#22396f]/60 font-mono text-[11px] text-[#fcf1d0]/90 tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Metrics & Actions */}
              <div className="pt-4 border-t border-[#22396f]/60 space-y-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#fcf1d0]/60 flex items-center justify-between">
                  <span>METRIC:</span>
                  <span className="text-emerald-400">{project.metrics}</span>
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#fcf1d0] hover:text-white transition-colors"
                  >
                    <span>GitHub Repo</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      &rarr;
                    </span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#fcf1d0] text-[#010736] font-mono text-[10px] uppercase tracking-wider font-semibold hover:bg-white transition-all shadow-xs"
                    >
                      <span>Live Demo</span>
                      <span>&nearr;</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Transition Banner: Next Step */}
        <div className="pt-6 border-t border-[#22396f]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#fcf1d0]/60">
            :next_stage: core_technical_arsenal
          </p>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "skills")}
            className="group inline-flex items-center gap-2 font-serif text-base sm:text-lg font-medium text-[#fcf1d0] hover:text-white transition-colors"
          >
            <span>Proceed to Skills</span>
            <span className="font-sans transition-transform duration-200 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
