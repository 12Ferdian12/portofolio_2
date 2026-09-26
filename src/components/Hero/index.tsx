"use client";

import React, { useState } from "react";
import { useLenis } from "lenis/react";
import DitherSkull from "./DitherSkull";

function Hero() {
  const lenis = useLenis();
  const [copied, setCopied] = useState(false);
  const terminalCommand = "npx ferdian@latest";

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalCommand);
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

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-screen pt-28 sm:pt-32 pb-16 bg-[#010736] text-[#fcf1d0] px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden hermes-grid"
    >
      {/* Ambient radial lighting using #0d1c42 & #22396f tones */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_40%_20%,#0d1c42,transparent_80%)] opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#22396f]/20 blur-3xl"
      />

      {/* Main hero content container with responsive left-offsetting */}
      <div className="relative z-10 max-w-5xl w-full ml-0 sm:ml-6 md:ml-14 lg:ml-24 xl:ml-36 space-y-6 sm:space-y-7">
        {/* Monospace status tag */}
        <div className="mb-0 inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#fcf1d0]/80 bg-[#0d1c42]/60 px-3 py-1.5 border border-[#22396f]/60 backdrop-blur-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>:status: system_active</span>
          <span className="text-[#22396f]">{"//"}</span>
          <span className="hidden sm:inline">
            Computer_Science_Undergradute
          </span>
        </div>

        {/* Hero Title & Right Column (1-bit Dither Skull + Ready to know me below it) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-8 w-full">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#fcf1d0] leading-[0.92] select-none">
            <span className="block text-[#fcf1d0]/90">&ldquo;Hello</span>
            <span className="block font-bold italic text-[#fcf1d0] drop-shadow-sm">
              World.&rdquo;
            </span>
          </h1>

          {/* Section next to "Hello World": Dither Skull with "Ready to know me" below it */}
          <div className="flex flex-col gap-3.5 shrink-0 w-full sm:w-72 lg:mb-1">
            {/* 1-bit Dither Skull Art */}
            <DitherSkull />

            {/* "Ready to know me?" directly below the skull */}
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="group relative flex flex-col justify-between p-3.5 sm:p-4 bg-[#0d1c42]/80 hover:bg-[#0d1c42] border border-[#22396f] hover:border-[#fcf1d0]/60 backdrop-blur-md transition-all duration-200 w-full shadow-lg shadow-[#010736]/40 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#fcf1d0]/60">
                  :discover:
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
              </div>

              <div className="mt-2.5">
                <p className="font-serif text-base sm:text-lg font-medium text-[#fcf1d0] group-hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>Ready to know me?</span>
                  <span className="font-sans text-base transition-transform duration-200 group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </p>
                <p className="font-mono text-[11px] text-[#fcf1d0]/60 mt-0.5 leading-snug">
                  Read background &amp; journey
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Hero Subtitle / Description in Warm Cream */}
        <p className="font-serif text-[#fcf1d0]/85 text-lg sm:text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
          Welcome to my portfolio. Explore my featured projects, core skill set,
          and let&apos;s build something great together.
        </p>

        {/* CTA buttons & Terminal snippet */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#fcf1d0] text-[#010736] font-mono text-xs uppercase tracking-[0.15em] font-semibold hover:bg-white active:scale-[0.98] transition-all shadow-lg shadow-[#010736]/40"
          >
            <span>Explore Work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#22396f] bg-[#0d1c42]/40 text-[#fcf1d0] font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#0d1c42] hover:border-[#fcf1d0]/40 active:scale-[0.98] transition-all"
          >
            <span>Get in Touch</span>
          </a>

          {/* Terminal Quick Copy */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#0d1c42]/80 backdrop-blur-md border border-[#22396f] font-mono text-xs text-[#fcf1d0]/90">
            <div className="flex items-center gap-2">
              <span className="text-[#22396f] select-none">$</span>
              <code className="text-[#fcf1d0]">{terminalCommand}</code>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="cursor-pointer text-[10px] uppercase tracking-wider text-[#fcf1d0]/70 hover:text-[#fcf1d0] transition-colors ml-2"
              aria-label="Copy command"
            >
              {copied ? (
                <span className="text-emerald-400 font-bold">Copied!</span>
              ) : (
                <span>Copy</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
