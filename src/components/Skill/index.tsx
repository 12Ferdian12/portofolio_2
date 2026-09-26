"use client";

import React, { useState } from "react";
import { useLenis } from "lenis/react";

const SKILL_DOMAINS = [
  {
    code: "01",
    label: "LANGUAGES // CORE",
    title: "Programming Languages",
    description:
      "Foundational syntax and type systems for algorithmic and production software.",
    skills: [
      { name: "TypeScript", detail: "Strict types, generic abstractions" },
      { name: "JavaScript (ES6+)", detail: "Modern async/await runtime" },
      { name: "Python", detail: "Data analysis, scripting & automation" },
      { name: "C / C++", detail: "Memory management, low-level algorithms" },
      { name: "SQL", detail: "Relational queries, index optimization" },
      { name: "HTML5 / CSS3", detail: "Semantic markup, modern layout models" },
    ],
  },
  {
    code: "02",
    label: "INTERFACE // CLIENT",
    title: "Frontend Engineering",
    description:
      "High-performance reactive interfaces with fluid micro-interactions and zero layout shift.",
    skills: [
      { name: "Next.js 16", detail: "App Router, SSR, Turbopack" },
      { name: "React 19", detail: "Concurrent mode, hooks architecture" },
      {
        name: "Redux Toolkit",
        detail: "Centralized immutable state management",
      },
      {
        name: "Tailwind CSS v4",
        detail: "Modern utility-first styling engine",
      },
      { name: "Lenis", detail: "Smooth inertia scroll orchestration" },
      {
        name: "Responsive Systems",
        detail: "Fluid typography & adaptive grids",
      },
    ],
  },
  {
    code: "03",
    label: "SYSTEMS // SERVER",
    title: "Backend & Databases",
    description:
      "Scalable server environments, REST API design, and reliable data persistence.",
    skills: [
      { name: "Node.js", detail: "Event-driven asynchronous backend" },
      { name: "Express", detail: "Middleware architecture & routing" },
      { name: "PostgreSQL", detail: "Relational schema design & pooling" },
      { name: "RESTful APIs", detail: "Stateless endpoints, type-safe DTOs" },
      {
        name: "Laravel / PHP",
        detail: "MVC framework & Livewire reactive components",
      },
      { name: "Database Indexing", detail: "Query profiling & query tuning" },
    ],
  },
  {
    code: "04",
    label: "TOOLING // DEV_OPS",
    title: "Engineering Workflow & Automation",
    description:
      "Modern toolchain for deterministic builds, workflow automation, and testing.",
    skills: [
      {
        name: "n8n Automation",
        detail: "Workflow orchestration & webhook triggers",
      },
      { name: "Git & GitHub", detail: "Branching strategies, code reviews" },
      { name: "Docker", detail: "Containerized local environments" },
      { name: "Linux / Bash", detail: "Command line scripting & servers" },
      { name: "CI / CD", detail: "Automated test & deploy pipelines" },
      { name: "Agentic Workflows", detail: "Modern AI-assisted development" },
    ],
  },
];

const METRICS = [
  {
    label: "TYPE_SAFETY",
    value: "100%",
    desc: "Strict type boundaries and compiler checks on all codebases.",
  },
  {
    label: "FRAME_BUDGET",
    value: "60 FPS",
    desc: "Zero layout shift, hardware-accelerated animations & smooth scroll.",
  },
  {
    label: "CORE_PARADIGM",
    value: "MODULAR",
    desc: "Clean separation of concerns, DRY code, and maintainable systems.",
  },
];

export default function Skill() {
  const lenis = useLenis();
  const [activeTab, setActiveTab] = useState<number | "all">("all");

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

  const displayedDomains =
    activeTab === "all"
      ? SKILL_DOMAINS
      : SKILL_DOMAINS.filter((_, idx) => idx === activeTab);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 sm:py-32 bg-[#010736] text-[#fcf1d0] px-6 sm:px-10 md:px-14 lg:px-20 border-t border-[#22396f]/50 hermes-grid overflow-hidden"
    >
      {/* Ambient lighting matching Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_30%_30%,#0d1c42,transparent_80%)] opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[#22396f]/20 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] w-full ml-0 sm:ml-4 md:ml-8 lg:ml-14 xl:ml-20 space-y-12 sm:space-y-16">
        {/* Monospace Section & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#22396f]/60 font-mono text-[11px] sm:text-xs">
          <div className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[#fcf1d0]/80 bg-[#0d1c42]/60 px-3 py-1.5 border border-[#22396f]/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>:section: 03</span>
            <span className="text-[#22396f]">{"//"}</span>
            <span>technical_arsenal</span>
          </div>

          <div className="flex items-center gap-3 text-[#fcf1d0]/70 uppercase tracking-wider text-[10px] sm:text-xs">
            <span className="text-[#22396f]">MATRIX:</span>
            <span className="text-[#fcf1d0] font-semibold">04_DOMAINS</span>
            <span className="text-[#22396f]/40">|</span>
            <span>PRODUCTION_TESTED</span>
          </div>
        </div>

        {/* Section Headline & Tab Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#fcf1d0] leading-[0.92] select-none">
              Core Capabilities &amp; <br />
              <span className="font-bold italic text-[#fcf1d0] drop-shadow-sm">
                Technical Arsenal.
              </span>
            </h2>
            <p className="font-serif text-[#fcf1d0]/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed pt-1">
              A comprehensive breakdown of languages, modern frameworks, system
              architectures, and developer tooling utilized in production.
            </p>
          </div>

          {/* Domain Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0d1c42]/80 border border-[#22396f] backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#fcf1d0] text-[#010736] font-semibold shadow-xs"
                  : "text-[#fcf1d0]/70 hover:text-[#fcf1d0] hover:bg-[#22396f]/40"
              }`}
            >
              All Domains
            </button>
            {SKILL_DOMAINS.map((domain, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={domain.code}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#fcf1d0] text-[#010736] font-semibold shadow-xs"
                      : "text-[#fcf1d0]/70 hover:text-[#fcf1d0] hover:bg-[#22396f]/40"
                  }`}
                >
                  {domain.title.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {displayedDomains.map((domain) => (
            <div
              key={domain.code}
              className="group relative flex flex-col justify-between p-6 sm:p-7 bg-[#0d1c42]/80 hover:bg-[#0d1c42] border border-[#22396f] hover:border-[#fcf1d0]/60 backdrop-blur-md shadow-xl shadow-[#010736]/60 transition-all duration-300"
            >
              <div>
                {/* Domain Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#22396f]/60 font-mono text-[10px] uppercase tracking-[0.2em] text-[#fcf1d0]/70">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                    <span>:{domain.code}:</span>
                  </span>
                  <span className="text-emerald-400/90">[{domain.label}]</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#fcf1d0] group-hover:text-white transition-colors mb-2">
                  {domain.title}
                </h3>
                <p className="font-serif text-sm sm:text-base text-[#fcf1d0]/75 font-light leading-relaxed mb-6">
                  {domain.description}
                </p>

                {/* Skills Chips List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {domain.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 bg-[#010736]/70 border border-[#22396f]/60 hover:border-[#fcf1d0]/50 transition-colors"
                    >
                      <p className="font-mono text-xs sm:text-sm font-semibold text-[#fcf1d0] flex items-center justify-between gap-2">
                        <span>{skill.name}</span>
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      </p>
                      <p className="font-mono text-[10px] text-[#fcf1d0]/50 mt-1 leading-tight">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Metric */}
              <div className="pt-4 mt-6 border-t border-[#22396f]/60 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[#fcf1d0]/60">
                <span>SYSTEM_STATUS:</span>
                <span className="text-emerald-400">OPTIMIZED_BUILD</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Standards / Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-5 bg-[#0d1c42]/60 border border-[#22396f]/60 backdrop-blur-sm"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 mb-1">
                :{metric.label}:
              </div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#fcf1d0] mb-1">
                {metric.value}
              </p>
              <p className="font-mono text-[11px] text-[#fcf1d0]/70 leading-relaxed">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Transition Banner: Next Step */}
        <div className="pt-6 border-t border-[#22396f]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#fcf1d0]/60">
            :next_stage: initiate_contact
          </p>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="group inline-flex items-center gap-2 font-serif text-base sm:text-lg font-medium text-[#fcf1d0] hover:text-white transition-colors"
          >
            <span>Proceed to Contact</span>
            <span className="font-sans transition-transform duration-200 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
