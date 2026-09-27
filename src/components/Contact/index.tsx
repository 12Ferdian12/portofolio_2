"use client";

import React, { useState } from "react";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<"email" | "instagram" | null>(
    null,
  );
  const [formState, setFormState] = useState({
    name: "",
    senderEmail: "",
    subject: "",
    message: "",
  });

  const emailAddress = "contact.ferdian@gmail.com";
  const instagramHandle = "@12ferdian12";
  const instagramUrl = "https://instagram.com/12ferdian12";

  const handleCopy = (text: string, type: "email" | "instagram") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formState.subject ||
        `Inquiry from ${formState.name || "Portfolio Visitor"}`,
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.senderEmail}\n\nMessage:\n${formState.message}`,
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 sm:py-32 bg-[#010736] text-[#fcf1d0] px-6 sm:px-10 md:px-14 lg:px-20 border-t border-[#22396f]/50 hermes-grid overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_70%_25%,#0d1c42,transparent_80%)] opacity-85"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-[#22396f]/20 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] w-full ml-0 sm:ml-4 md:ml-8 lg:ml-14 xl:ml-20 space-y-12 sm:space-y-16">
        {/* Monospace Section & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#22396f]/60 font-mono text-[11px] sm:text-xs">
          <div className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[#fcf1d0]/80 bg-[#0d1c42]/60 px-3 py-1.5 border border-[#22396f]/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>:section: 05</span>
            <span className="text-[#22396f]">{"//"}</span>
            <span>initiate_transmission</span>
          </div>

          <div className="flex items-center gap-3 text-[#fcf1d0]/70 uppercase tracking-wider text-[10px] sm:text-xs">
            <span className="text-[#22396f]">STATUS:</span>
            <span className="text-emerald-400 font-semibold">
              AVAILABLE_FOR_PROJECTS
            </span>
            <span className="text-[#22396f]/40">|</span>
            <span>RESPONSE_LATENCY &lt; 24H</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#fcf1d0] leading-[0.92] select-none">
            <span className="block">Start a Conversation &amp;</span>
            <span className="block font-bold italic text-[#fcf1d0] drop-shadow-sm">
              Initiate Contact.
            </span>
          </h2>
          <p className="font-serif text-[#fcf1d0]/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed pt-1">
            Whether you have an upcoming project, technical collaboration, or
            inquiry, feel free to reach out via Email or Instagram.
          </p>
        </div>

        {/* Primary Contact Channels Grid (Email & Instagram) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Email Transmission Card */}
          <div className="group relative flex flex-col justify-between p-6 sm:p-8 bg-[#0d1c42]/80 hover:bg-[#0d1c42] border border-[#22396f] hover:border-[#fcf1d0]/70 backdrop-blur-md shadow-xl shadow-[#010736]/60 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#22396f]/60 font-mono text-[10px] uppercase tracking-[0.2em] text-[#fcf1d0]/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                  <span>:channel: 01</span>
                </span>
                <span className="text-emerald-400/90">[PRIMARY_INBOX]</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#010736] border border-[#22396f] group-hover:border-[#fcf1d0]/60 group-hover:shadow-[0_0_20px_rgba(252,241,208,0.2)] transition-all">
                  <i
                    className="fa-solid fa-envelope text-2xl transition-transform duration-200 group-hover:scale-110"
                    style={{ color: "#FCF1D0" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#fcf1d0]">
                    Email Inquiry
                  </h3>
                  <p className="font-mono text-xs text-emerald-400 mt-0.5">
                    Direct Correspondence &amp; Contracts
                  </p>
                </div>
              </div>

              <p className="font-serif text-sm sm:text-base text-[#fcf1d0]/75 font-light leading-relaxed mb-6">
                Best for long-form discussions, project proposals, specifications,
                and formal inquiries. Monitored daily with prompt response times.
              </p>

              {/* Display Box */}
              <div className="p-3.5 bg-[#010736]/80 border border-[#22396f]/80 font-mono text-xs sm:text-sm text-[#fcf1d0] flex items-center justify-between gap-3 mb-6 select-all">
                <span className="truncate">{emailAddress}</span>
                <span className="text-[#22396f] font-mono text-xs">
                  {"<addr>"}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#22396f]/60 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#fcf1d0] text-[#010736] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Compose Mail</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
              </a>

              <button
                type="button"
                onClick={() => handleCopy(emailAddress, "email")}
                className="px-4 py-3 bg-[#010736] hover:bg-[#22396f]/40 border border-[#22396f] hover:border-[#fcf1d0]/50 text-[#fcf1d0] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                aria-label="Copy email address"
              >
                {copiedType === "email" ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>

          {/* Instagram Social Card */}
          <div className="group relative flex flex-col justify-between p-6 sm:p-8 bg-[#0d1c42]/80 hover:bg-[#0d1c42] border border-[#22396f] hover:border-[#fcf1d0]/70 backdrop-blur-md shadow-xl shadow-[#010736]/60 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#22396f]/60 font-mono text-[10px] uppercase tracking-[0.2em] text-[#fcf1d0]/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                  <span>:channel: 02</span>
                </span>
                <span className="text-emerald-400/90">[SOCIAL_PRESENCE]</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#010736] border border-[#22396f] group-hover:border-[#fcf1d0]/60 group-hover:shadow-[0_0_20px_rgba(252,241,208,0.2)] transition-all">
                  <i
                    className="fa-brands fa-instagram text-2xl transition-transform duration-200 group-hover:scale-110"
                    style={{ color: "#FCF1D0" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#fcf1d0]">
                    Instagram
                  </h3>
                  <p className="font-mono text-xs text-emerald-400 mt-0.5">
                    Direct Messaging &amp; Social Updates
                  </p>
                </div>
              </div>

              <p className="font-serif text-sm sm:text-base text-[#fcf1d0]/75 font-light leading-relaxed mb-6">
                Connect for casual interactions, developer life updates, and instant
                DMs. Feel free to say hello or drop project ideas.
              </p>

              {/* Display Box */}
              <div className="p-3.5 bg-[#010736]/80 border border-[#22396f]/80 font-mono text-xs sm:text-sm text-[#fcf1d0] flex items-center justify-between gap-3 mb-6 select-all">
                <span className="truncate">{instagramHandle}</span>
                <span className="text-[#22396f] font-mono text-xs">
                  {"@handle"}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#22396f]/60 flex flex-wrap items-center gap-3">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#fcf1d0] text-[#010736] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Visit Profile</span>
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

              <button
                type="button"
                onClick={() => handleCopy(instagramHandle, "instagram")}
                className="px-4 py-3 bg-[#010736] hover:bg-[#22396f]/40 border border-[#22396f] hover:border-[#fcf1d0]/50 text-[#fcf1d0] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                aria-label="Copy Instagram handle"
              >
                {copiedType === "instagram" ? "Copied!" : "Copy Handle"}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Direct Message Dispatch Form */}
        <div className="p-6 sm:p-10 bg-[#0d1c42]/70 border border-[#22396f] backdrop-blur-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#22396f]/60 font-mono text-xs">
            <div className="text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>:dispatch_terminal: rapid_message</span>
            </div>
            <span className="text-[#fcf1d0]/60 uppercase tracking-wider text-[11px]">
              CLIENT_DIRECT_MAILTO
            </span>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs uppercase tracking-wider text-[#fcf1d0]/80"
                >
                  Your Name / Identity
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Thorne"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#010736]/90 border border-[#22396f] focus:border-[#fcf1d0] text-[#fcf1d0] placeholder-[#fcf1d0]/30 font-serif text-sm outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-xs uppercase tracking-wider text-[#fcf1d0]/80"
                >
                  Your Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formState.senderEmail}
                  onChange={(e) =>
                    setFormState({ ...formState, senderEmail: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#010736]/90 border border-[#22396f] focus:border-[#fcf1d0] text-[#fcf1d0] placeholder-[#fcf1d0]/30 font-serif text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-subject"
                className="block font-mono text-xs uppercase tracking-wider text-[#fcf1d0]/80"
              >
                Subject / Project Scope
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="e.g. Next.js Web Application / Consulting"
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#010736]/90 border border-[#22396f] focus:border-[#fcf1d0] text-[#fcf1d0] placeholder-[#fcf1d0]/30 font-serif text-sm outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="block font-mono text-xs uppercase tracking-wider text-[#fcf1d0]/80"
              >
                Message Content
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                placeholder="Describe project requirements, timeline, or brief inquiry..."
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#010736]/90 border border-[#22396f] focus:border-[#fcf1d0] text-[#fcf1d0] placeholder-[#fcf1d0]/30 font-serif text-sm outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#fcf1d0] text-[#010736] font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:bg-white active:scale-[0.99] transition-all shadow-md cursor-pointer"
            >
              <span>Transmit Message</span>
              <span className="font-sans text-sm">&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
