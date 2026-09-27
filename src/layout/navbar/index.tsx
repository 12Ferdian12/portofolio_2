"use client";

import React, { useState, useEffect } from "react";
import { useLenis } from "lenis/react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Track scroll with Lenis for smooth navbar elevation and scroll spy
  const lenis = useLenis(({ scroll }) => {
    setScrolled(scroll > 20);

    const scrollPosition = scroll + 140;
    for (const item of navItems) {
      const id = item.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(item.name);
          break;
        }
      }
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    name: string,
  ) => {
    e.preventDefault();
    setActiveSection(name);
    setIsOpen(false);

    if (href === "#hero" || href === "#") {
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      if (lenis) {
        lenis.scrollTo(targetElement as HTMLElement, { offset: 0 });
      } else {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 md:px-14 lg:px-20 transition-all duration-300 ease-in-out ${
        scrolled ? "py-2 sm:py-3" : "py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto w-full">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 transition-all duration-300 border ${
            scrolled
              ? "bg-[#0d1c42]/90 backdrop-blur-md shadow-xl shadow-[#010736]/60 border-[#22396f]/70"
              : "bg-[#010736]/75 backdrop-blur-sm border-[#22396f]/40"
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo / Brand in Zodiak Font & Warm Cream */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero", "Home")}
            className="group flex items-center gap-3 text-[#fcf1d0] focus:outline-none"
          >
            <span className="flex h-7 w-7 items-center justify-center bg-[#fcf1d0] text-[#010736] font-mono font-bold text-xs uppercase transition-transform group-hover:scale-105">
              H
            </span>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight leading-none text-[#fcf1d0]">
                Ferdian<span className="text-[#22396f]">.</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#fcf1d0]/70 flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                :available:
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with #22396f & #fcf1d0 */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-[#0d1c42]/60 backdrop-blur-md border border-[#22396f]/50">
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition-all duration-150 ${
                    isActive
                      ? "bg-[#fcf1d0] text-[#010736] font-semibold shadow-sm"
                      : "text-[#fcf1d0]/80 hover:text-[#fcf1d0] hover:bg-[#22396f]/40"
                  }`}
                >
                  :{item.name.toLowerCase()}:
                </a>
              );
            })}
          </div>

          {/* Desktop Action / Connect Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact", "Contact")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#fcf1d0] text-[#010736] font-mono text-xs uppercase tracking-[0.15em] font-semibold hover:bg-white active:scale-95 transition-all shadow-sm shadow-[#010736]/40"
            >
              <span>Install / Connect</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-[#fcf1d0] hover:bg-[#22396f]/40 transition-colors focus:outline-none"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[68px] z-40 bg-[#010736]/70 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-[72px] left-4 right-4 z-40 transition-all duration-200 ease-out transform ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-4 bg-[#0d1c42]/95 backdrop-blur-xl border border-[#22396f] shadow-2xl">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className={`flex items-center justify-between px-4 py-3 font-mono text-xs uppercase tracking-widest transition-all ${
                    isActive
                      ? "bg-[#fcf1d0] text-[#010736] font-semibold"
                      : "text-[#fcf1d0]/85 hover:bg-[#22396f]/40"
                  }`}
                >
                  <span>:{item.name.toLowerCase()}:</span>
                  {isActive && (
                    <span className="font-sans text-sm">&rarr;</span>
                  )}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-[#22396f]/60">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact", "Contact")}
                className="w-full flex items-center justify-center gap-2 py-3 font-mono text-xs uppercase tracking-widest font-semibold text-[#010736] bg-[#fcf1d0] hover:bg-white active:scale-[0.98] transition-all"
              >
                <span>Install / Connect</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
