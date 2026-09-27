"use client";

import React, { useState } from "react";
import { useLenis } from "lenis/react";
import { SKILLS_DATA, CATEGORIES, SkillIcon } from "./data";

export default function Skill() {
  const lenis = useLenis();
  const [activeCategory, setActiveCategory] = useState<string>("all");

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

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 sm:py-32 bg-[#010736] text-[#fcf1d0] px-6 sm:px-10 md:px-14 lg:px-20 border-t border-[#22396f]/50 hermes-grid overflow-hidden"
    >
      {/* Ambient background glow */}
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
            <span>:section: 04</span>
            <span className="text-[#22396f]">{"//"}</span>
            <span>technical_arsenal</span>
          </div>

          <div className="flex items-center gap-3 text-[#fcf1d0]/70 uppercase tracking-wider text-[10px] sm:text-xs">
            <span className="text-[#22396f]">TECH_COUNT:</span>
            <span className="text-[#fcf1d0] font-semibold">12_ACTIVE</span>
            <span className="text-[#22396f]/40">|</span>
            <span>PRODUCTION_TESTED</span>
          </div>
        </div>

        {/* Section Headline & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#fcf1d0] leading-[0.92] select-none">
              <span className="block">Core Capabilities &amp;</span>
              <span className="block font-bold italic text-[#fcf1d0] drop-shadow-sm">
                Technical Arsenal.
              </span>
            </h2>
            <p className="font-serif text-[#fcf1d0]/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed pt-1">
              Languages, modern reactive frameworks, backend architectures, and
              automation pipelines mastered across development environments.
            </p>
          </div>

          {/* Category Filter Tabs */}
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
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>
        </div>

        {/* 12 Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col justify-between p-5 sm:p-6 bg-[#0d1c42]/80 hover:bg-[#0d1c42] border border-[#22396f] hover:border-[#fcf1d0]/60 backdrop-blur-md shadow-xl shadow-[#010736]/60 transition-all duration-300"
            >
              <div>
                {/* Header: Tech Icon + Proficiency Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* Icon framed container */}
                  <div className="w-12 h-12 flex items-center justify-center bg-[#010736] border border-[#22396f] group-hover:border-[#fcf1d0]/60 group-hover:shadow-[0_0_15px_rgba(252,241,208,0.18)] transition-all">
                    <SkillIcon skill={skill} />
                  </div>

                  {/* Proficiency Badge */}
                  <div className="flex flex-col items-end">
                    <span
                      className={`px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider font-semibold border ${
                        skill.level === "Advanced"
                          ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.15)]"
                          : skill.level === "Beginner-Intermediate"
                            ? "border-amber-400/50 bg-amber-400/10 text-amber-300"
                            : "border-[#fcf1d0]/40 bg-[#fcf1d0]/10 text-[#fcf1d0]"
                      }`}
                    >
                      {skill.level}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#fcf1d0]/50 mt-1">
                      {skill.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Tech Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#fcf1d0] group-hover:text-white transition-colors mb-2">
                  {skill.name}
                </h3>

                {/* Tech Contextual Description */}
                <p className="font-serif text-xs sm:text-sm text-[#fcf1d0]/75 font-light leading-relaxed mb-6">
                  {skill.detail}
                </p>
              </div>

              {/* Progress & Status Indicator */}
              <div className="pt-4 border-t border-[#22396f]/60 space-y-2">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[#fcf1d0]/60">
                  <span>MASTERY_LEVEL:</span>
                  <span className="text-[#fcf1d0] font-semibold">
                    {skill.level}
                  </span>
                </div>
                {/* Visual Progress Bar */}
                <div className="h-1 w-full bg-[#010736] border border-[#22396f]/80 overflow-hidden">
                  <div
                    className="h-full bg-[#fcf1d0] transition-all duration-700 ease-out"
                    style={{ width: `${skill.levelPercent}%` }}
                  />
                </div>
              </div>
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
