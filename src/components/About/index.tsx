"use client";

import React, { useState } from "react";
import { useLenis } from "lenis/react";

export default function About() {
  const lenis = useLenis();
  const [copied, setCopied] = useState(false);
  const emailAddress = "contact.ferdian@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  const highlights = [
    {
      label: ":focus:",
      code: "DOMAINS",
      title: "Full-Stack & Systems",
      desc: "Specializing in type-safe web architecture, scalable APIs, and performance-focused digital products.",
    },
    {
      label: ":education:",
      code: "ACADEMIC",
      title: "Computer Science",
      desc: "Undergraduate at Sepuluh Nopember Institute of Technology.",
    },
    {
      label: ":status:",
      code: "AVAILABLE",
      title: "Open to Opportunities",
      desc: "Actively seeking challenging internships, engineering roles, and collaborative projects.",
      isStatus: true,
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 sm:py-32 bg-[#FCF1D0] text-[#010736] px-6 sm:px-10 md:px-14 lg:px-20 border-t border-[#010736]/15 hermes-grid-dark overflow-hidden"
    >
      {/* Subtle ambient lighting on cream paper */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(34,57,111,0.06),transparent_70%)]"
      />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] w-full ml-0 sm:ml-4 md:ml-8 lg:ml-14 xl:ml-20 space-y-12 sm:space-y-16">
        {/* Monospace Section & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#010736]/15 font-mono text-[11px] sm:text-xs">
          <div className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[#010736]/80 bg-[#010736]/5 px-3 py-1.5 border border-[#010736]/15 backdrop-blur-sm">
            <span>:section: 01</span>
            <span className="text-[#22396f]">{"//"}</span>
            <span>about_me</span>
          </div>

          <div className="flex items-center gap-3 text-[#010736]/70 uppercase tracking-wider text-[10px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/80 border border-[#010736]/15 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-semibold text-emerald-900">
                status: open_for_opportunities
              </span>
            </span>
            <span className="hidden sm:inline text-[#22396f]/40">|</span>
            <span className="hidden sm:inline">Computer_Science_Undergrad</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="space-y-3 max-w-4xl">
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#010736] leading-[0.92] select-none">
            &ldquo;HI, I&apos;m Ferdian&rdquo;
            <span className="block font-bold italic text-3xl sm:text-5xl md:text-6xl text-[#0d1c42] mt-3">
              Curiosity &amp; Rigor.
            </span>
          </h2>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-[#22396f] pt-1">
            [ Tech_Enthusiast // Systems_&amp;_Interface_Craft ]
          </p>
        </div>

        {/* Narrative & Quick Action Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio Copy */}
          <div className="lg:col-span-8 space-y-5">
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#010736]/90 font-light leading-relaxed">
              I’m a Computer Science undergraduate driven by curiosity and a
              passion for exploring technology. My interests span web
              development, mobile development, artificial intelligence, and the
              many possibilities that connects to technology.
            </p>
            <p className="font-serif text-base sm:text-lg text-[#010736]/75 font-light leading-relaxed">
              My programming journey started in 9th grade with web development,
              gradually moving from front-end to back-end technologies. During
              high school, I built several web projects that led me to explore
              AI and intelligent systems more deeply. Now, I’m focused on
              expanding my technical foundation, experimenting with new ideas,
              and discovering where technology can take me next.
            </p>

            {/* Quick Action Navigation Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="group inline-flex items-center gap-2 px-5 py-3 bg-[#010736] text-[#FCF1D0] font-mono text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#0d1c42] active:scale-[0.98] transition-all shadow-md shadow-[#010736]/15"
              >
                <span>View Projects</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#010736]/30 bg-white/70 hover:bg-white text-[#010736] font-mono text-xs uppercase tracking-[0.15em] active:scale-[0.98] transition-all"
              >
                <span>Get in Touch</span>
              </a>

              {/* Direct One-Click Email Copy Pill */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 bg-white/80 hover:bg-white border border-[#010736]/20 font-mono text-xs text-[#010736]/80 hover:text-[#010736] transition-all cursor-pointer shadow-xs"
                aria-label="Copy email address"
              >
                <span className="text-[#22396f]">$</span>
                <span>{emailAddress}</span>
                <span className="ml-1 text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded-xs">
                  {copied ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>
          </div>

          {/* Quick Profile Summary Badge */}
          <div className="lg:col-span-4 p-5 sm:p-6 bg-white/80 border border-[#010736]/15 shadow-xs backdrop-blur-sm space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#010736]/10 text-[10px] uppercase tracking-widest text-[#22396f]">
              <span>:profile_meta:</span>
              <span>[INDONESIA // GMT+7]</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#010736]/60">ACADEMICS:</span>
              <span className="font-semibold text-[#010736]">
                Computer Science
              </span>
            </div>
            <div className="flex justify-between py-1 border-t border-[#010736]/10">
              <span className="text-[#010736]/60">SPECIALTY:</span>
              <span className="font-semibold text-[#010736]">
                Web Development
              </span>
            </div>
            <div className="flex justify-between py-1 border-t border-[#010736]/10">
              <span className="text-[#010736]/60">GITHUB:</span>
              <a
                href="https://github.com/12Ferdian12"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#22396f] hover:underline"
              >
                @12Ferdian12 &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Highlights / Metrics Cards (UI/UX Friendly Cards on #FCF1D0) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {highlights.map((card) => (
            <div
              key={card.label}
              className="group relative flex flex-col justify-between p-6 bg-white/75 hover:bg-white border border-[#010736]/15 hover:border-[#010736]/35 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[#22396f] pb-3 mb-3 border-b border-[#010736]/10">
                  <span>{card.label}</span>
                  <span className="text-[#010736]/40">[{card.code}]</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#010736] mb-2 flex items-center gap-2">
                  {card.isStatus && (
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse inline-block" />
                  )}
                  <span>{card.title}</span>
                </h3>
                <p className="font-serif text-sm sm:text-base text-[#010736]/75 font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Transition Banner: Next Step */}
        <div className="pt-6 border-t border-[#010736]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#010736]/60">
            :next_stage: featured_projects
          </p>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="group inline-flex items-center gap-2 font-serif text-base sm:text-lg font-medium text-[#010736] hover:text-[#0d1c42] transition-colors"
          >
            <span>Proceed to Projects</span>
            <span className="font-sans transition-transform duration-200 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
