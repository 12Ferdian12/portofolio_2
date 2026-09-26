"use client";

import React, { useState, useEffect } from "react";

interface NavItem {
  name: string;
  href: string;
  badge?: string;
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

  // Track scroll state for glassmorphism elevation effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy to highlight current active link
      const scrollPosition = window.scrollY + 120;
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop & disable scroll when open
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

  // Handle smooth scroll navigation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    name: string,
  ) => {
    e.preventDefault();
    setActiveSection(name);
    setIsOpen(false);

    if (href === "#hero" || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "py-2 sm:py-3" : "py-4 sm:py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl md:rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/20 border border-neutral-200/80 dark:border-neutral-800/80"
              : "bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200/40 dark:border-neutral-800/40 shadow-sm"
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero", "Home")}
            className="group flex items-center gap-2.5 text-neutral-900 dark:text-white font-semibold tracking-tight text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white font-bold text-sm shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform duration-200">
              P
            </span>
            <div className="flex flex-col">
              <span className="leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                Portfolio<span className="text-amber-500">.</span>
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-normal text-neutral-500 dark:text-neutral-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                Available for work
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200/50 dark:border-neutral-700/50">
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    isActive
                      ? "text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 shadow-sm shadow-black/5"
                      : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-neutral-700/50"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Action / CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact", "Contact")}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-neutral-900 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all duration-200 shadow-md shadow-amber-400/20 hover:shadow-amber-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>Let&apos;s Talk</span>
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
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-xl text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                <span
                  className={`block h-0.5 w-5 bg-current rounded-full transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current rounded-full transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current rounded-full transition-transform duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer / Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-black/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-[76px] left-4 right-4 z-40 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-4 rounded-3xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl shadow-black/15">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold"
                      : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                  )}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-neutral-200/60 dark:border-neutral-800/60">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact", "Contact")}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/25 active:scale-98 transition-all"
              >
                <span>Let&apos;s Connect</span>
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
