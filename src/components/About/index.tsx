"use client";

import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 sm:py-32 bg-[#010736] text-[#fcf1d0] px-6 sm:px-10 md:px-14 lg:px-20 border-t border-[#22396f]/40 hermes-grid"
    >
      <div className="relative z-10 max-w-4xl w-full ml-0 sm:ml-6 md:ml-14 lg:ml-24 xl:ml-36 space-y-8">
        {/* Monospace section label */}
        <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#fcf1d0]/80 bg-[#0d1c42]/60 px-3 py-1.5 border border-[#22396f]/60 backdrop-blur-sm">
          <span>:section: 01</span>
          <span className="text-[#22396f]">{"//"}</span>
          <span>about_me</span>
        </div>

        {/* Section Title in Zodiak */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#fcf1d0] leading-[0.95]">
          A Developer Building with <br />
          <span className="font-bold italic text-white">
            Curiosity &amp; Rigor.
          </span>
        </h2>

        {/* Bio Copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#fcf1d0]/80 font-serif text-base sm:text-lg leading-relaxed pt-2">
          <p>
            I am a Computer Science undergraduate focused on modern web
            engineering, scalable system architectures, and crafting intuitive,
            high-performance digital experiences.
          </p>
          <p>
            Bridging analytical problem solving with clean visual craft. Driven
            to build resilient software products that solve real problems and
            evolve over time.
          </p>
        </div>

        {/* Quick Highlights / Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="p-5 bg-[#0d1c42]/70 border border-[#22396f]/70">
            <span className="font-mono text-xs text-[#fcf1d0]/60 uppercase tracking-widest block mb-2">
              :focus:
            </span>
            <p className="font-serif text-xl text-[#fcf1d0] font-semibold">
              Full-Stack &amp; Systems
            </p>
          </div>
          <div className="p-5 bg-[#0d1c42]/70 border border-[#22396f]/70">
            <span className="font-mono text-xs text-[#fcf1d0]/60 uppercase tracking-widest block mb-2">
              :education:
            </span>
            <p className="font-serif text-xl text-[#fcf1d0] font-semibold">
              Computer Science
            </p>
          </div>
          <div className="p-5 bg-[#0d1c42]/70 border border-[#22396f]/70">
            <span className="font-mono text-xs text-[#fcf1d0]/60 uppercase tracking-widest block mb-2">
              :status:
            </span>
            <p className="font-serif text-xl text-emerald-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
