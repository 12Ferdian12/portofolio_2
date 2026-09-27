"use client";

import React, { useState } from "react";
import { useLenis } from "lenis/react";
import { PROJECTS, CATEGORIES, type CategoryId } from "./data";

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
        lenis.scrollTo(el, { offset: 0 });
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
      className="relative flex flex-col justify-center min-h-screen pt-28 sm:pt-32 pb-20 bg-[#010736] text-[#fcf1d0] px-6 sm:px-10 md:px-14 lg:px-20 border-t border-[#22396f]/50 hermes-grid overflow-hidden"
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

      <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto w-full space-y-12 sm:space-y-16">
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
              <span className="block">Featured GitHub &amp;</span>
              <span className="block font-bold italic text-[#fcf1d0] drop-shadow-sm">
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
