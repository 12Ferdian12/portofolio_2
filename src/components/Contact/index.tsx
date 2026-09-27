"use client";

import React from "react";

interface ContactChannel {
  id: string;
  channelNo: string;
  name: string;
  handle: string;
  description: string;
  href: string;
  actionText: string;
  iconClass: string;
  isExternal?: boolean;
}

const CHANNELS: ContactChannel[] = [
  {
    id: "instagram",
    channelNo: "01",
    name: "Instagram",
    handle: "@fercell.7",
    description:
      "Direct messaging, personal updates, and casual creative exchanges.",
    href: "https://instagram.com/fercell.7",
    actionText: "Open Instagram",
    iconClass: "fa-brands fa-instagram",
    isExternal: true,
  },
  {
    id: "github",
    channelNo: "02",
    name: "GitHub",
    handle: "@12Ferdian12",
    description: "Open-source repositories, system architectures, and commits.",
    href: "https://github.com/12Ferdian12",
    actionText: "View GitHub",
    iconClass: "fa-brands fa-github",
    isExternal: true,
  },
  {
    id: "linkedin",
    channelNo: "03",
    name: "LinkedIn",
    handle: "Ferdian",
    description:
      "Professional background, career credentials, and business network.",
    href: "https://www.linkedin.com/in/ferdian-adinata-bbab90309/",
    actionText: "Connect on LinkedIn",
    iconClass: "fa-brands fa-linkedin-in",
    isExternal: true,
  },
  {
    id: "email",
    channelNo: "04",
    name: "Email",
    handle: "contact.ferdianadinata07@gmail.com",
    description: "Direct correspondence for collaborations,  offers.",
    href: "mailto:contact.ferdianadinata07@gmail.com",
    actionText: "Send Email",
    iconClass: "fa-solid fa-envelope",
    isExternal: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center min-h-screen pt-28 sm:pt-32 pb-20 bg-[#FCF1D0] text-[#010736] px-6 sm:px-10 md:px-14 lg:px-20 border-t border-[#010736]/15 hermes-grid-dark overflow-hidden"
    >
      {/* Subtle ambient lighting on cream paper matching About section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(34,57,111,0.06),transparent_70%)]"
      />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto w-full space-y-12 sm:space-y-16">
        {/* Monospace Section & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#010736]/15 font-mono text-[11px] sm:text-xs">
          <div className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[#010736]/80 bg-[#010736]/5 px-3 py-1.5 border border-[#010736]/15 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>:section: 05</span>
            <span className="text-[#22396f]">{"//"}</span>
            <span>initiate_transmission</span>
          </div>

          <div className="flex items-center gap-3 text-[#010736]/70 uppercase tracking-wider text-[10px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/80 border border-[#010736]/15 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-semibold text-emerald-900">
                status: available_for_projects
              </span>
            </span>
            <span className="hidden sm:inline text-[#22396f]/40">|</span>
            <span className="hidden sm:inline">RESPONSE_LATENCY &lt; 24H</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#010736] leading-[0.92] select-none">
            <span className="block">&ldquo;Get in Touch&rdquo;</span>
            <span className="block font-bold italic text-3xl sm:text-5xl md:text-6xl text-[#0d1c42] mt-3">
              Direct Channels.
            </span>
          </h2>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-[#22396f] pt-1">
            [ Verified_Handles // Secure_Transmission ]
          </p>
        </div>

        {/* 4 Primary Contact Channels Grid (Instagram, GitHub, LinkedIn, Email) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CHANNELS.map((channel) => (
            <article
              key={channel.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 bg-white/75 hover:bg-white border border-[#010736]/15 hover:border-[#010736]/35 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div>
                {/* Channel Header Specimen */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#010736]/10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#22396f]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 group-hover:scale-125 transition-transform" />
                    <span>:channel: {channel.channelNo}</span>
                  </span>
                  <span className="text-[#010736]/40">
                    [{channel.name.toUpperCase()}]
                  </span>
                </div>

                {/* Framed Icon Container */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#010736]/5 border border-[#010736]/15 group-hover:bg-[#010736] text-[#010736] group-hover:text-[#FCF1D0] transition-all mb-4 shadow-xs">
                  <i
                    className={`${channel.iconClass} text-xl transition-colors`}
                    aria-hidden="true"
                  />
                </div>

                {/* Channel Title & Handle */}
                <h3 className="font-serif text-2xl font-semibold text-[#010736] mb-1">
                  {channel.name}
                </h3>
                <p className="font-mono text-xs text-[#22396f] font-medium mb-3 truncate">
                  {channel.handle}
                </p>

                {/* Channel Description */}
                <p className="font-serif text-sm text-[#010736]/75 font-light leading-relaxed mb-6">
                  {channel.description}
                </p>
              </div>

              {/* Action Button: Dedicated Mail Button for Email & Direct Links for Socials */}
              <div className="pt-4 border-t border-[#010736]/10">
                <a
                  href={channel.href}
                  target={channel.isExternal ? "_blank" : undefined}
                  rel={channel.isExternal ? "noopener noreferrer" : undefined}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#010736] text-[#FCF1D0] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#0d1c42] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
                >
                  <span>{channel.actionText}</span>
                  <span className="font-sans text-sm transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Status / Summary Banner */}
        <div className="pt-6 border-t border-[#010736]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <p className="uppercase tracking-[0.18em] text-[#010736]/60">
            :transmission_ready: secure_endpoint // response_latency &lt; 24h
          </p>
          <div className="flex items-center gap-3 text-[#22396f]">
            <span>GMT+7 // INDONESIA</span>
            <span className="text-[#010736]/30">|</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              available_for_opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
