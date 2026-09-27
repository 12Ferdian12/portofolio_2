"use client";

import React from "react";
import { useLenis } from "lenis/react";

export default function Footer() {
  const lenis = useLenis();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#010736] text-[#fcf1d0] border-t border-[#22396f]/70 hermes-grid overflow-hidden px-6 sm:px-10 md:px-14 lg:px-20">
      {/* Subtle top ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0d1c42]/40 to-transparent"
      />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto w-full py-16 sm:py-20 space-y-12">
        {/* Main Footer Header Grid */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 pb-12 border-b border-[#22396f]/60">
          {/* Brand & Mission Statement */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center bg-[#fcf1d0] text-[#010736] font-mono font-bold text-sm uppercase">
                H
              </span>
              <span className="font-serif font-bold text-2xl sm:text-3xl tracking-tight text-[#fcf1d0]">
                Ferdian<span className="text-[#22396f]">.</span>
              </span>
            </div>

            <p className="font-serif text-[#fcf1d0]/75 text-sm sm:text-base font-light leading-relaxed">
              Crafting reliable, scalable web applications, reactive user
              interfaces, and automated workflow systems with rigorous
              engineering standards.
            </p>

            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#fcf1d0]/70 uppercase tracking-widest bg-[#0d1c42]/80 px-3 py-1.5 border border-[#22396f]/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Location: Indonesia [WIB / GMT+7]</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 font-mono text-xs">
            {/* Sitemaps */}
            <div className="space-y-3">
              <p className="uppercase tracking-[0.2em] text-emerald-400 text-[10px] pb-1 border-b border-[#22396f]/40">
                :navigation:
              </p>
              <ul className="space-y-2 text-[#fcf1d0]/75">
                <li>
                  <a
                    href="#hero"
                    onClick={(e) => scrollToSection(e, "hero")}
                    className="hover:text-[#fcf1d0] transition-colors"
                  >
                    :home:
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    className="hover:text-[#fcf1d0] transition-colors"
                  >
                    :about:
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => scrollToSection(e, "projects")}
                    className="hover:text-[#fcf1d0] transition-colors"
                  >
                    :projects:
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={(e) => scrollToSection(e, "skills")}
                    className="hover:text-[#fcf1d0] transition-colors"
                  >
                    :skills:
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}
                    className="hover:text-[#fcf1d0] transition-colors"
                  >
                    :contact:
                  </a>
                </li>
              </ul>
            </div>

            {/* Channels & Social */}
            <div className="space-y-3">
              <p className="uppercase tracking-[0.2em] text-emerald-400 text-[10px] pb-1 border-b border-[#22396f]/40">
                :channels:
              </p>
              <ul className="space-y-2 text-[#fcf1d0]/75">
                <li>
                  <a
                    href="mailto:contact.ferdian@gmail.com"
                    className="hover:text-[#fcf1d0] transition-colors flex items-center gap-1.5"
                  >
                    <i
                      className="fa-solid fa-envelope text-[11px]"
                      style={{ color: "#FCF1D0" }}
                    />
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/12ferdian12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#fcf1d0] transition-colors flex items-center gap-1.5"
                  >
                    <i
                      className="fa-brands fa-instagram text-[11px]"
                      style={{ color: "#FCF1D0" }}
                    />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/12Ferdian12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#fcf1d0] transition-colors flex items-center gap-1.5"
                  >
                    <i
                      className="fa-brands fa-github text-[11px]"
                      style={{ color: "#FCF1D0" }}
                    />
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Architecture / Spec */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <p className="uppercase tracking-[0.2em] text-emerald-400 text-[10px] pb-1 border-b border-[#22396f]/40">
                :tech_stack:
              </p>
              <p className="text-[11px] text-[#fcf1d0]/60 leading-relaxed">
                Next.js 16 • React 19 • Tailwind CSS 4 • Lenis Smooth Scroll
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#fcf1d0]/60">
          <p>
            &copy; {currentYear} Ferdian. All rights reserved. Crafted with
            precision.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 hover:text-[#fcf1d0] transition-colors cursor-pointer py-1"
            aria-label="Scroll back to top"
          >
            <span>[Back to Top]</span>
            <span className="font-sans transition-transform duration-200 group-hover:-translate-y-1">
              &uarr;
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
