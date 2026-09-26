"use client";

import React, { useState } from "react";

const SKULL_PATH =
  "M18 2h1v1h-1z M19 2h1v1h-1z M20 2h1v1h-1z M22 2h1v1h-1z M23 2h1v1h-1z M15 3h1v1h-1z M17 3h1v1h-1z M19 3h1v1h-1z M21 3h1v1h-1z M23 3h1v1h-1z M25 3h1v1h-1z M12 4h1v1h-1z M13 4h1v1h-1z M14 4h1v1h-1z M15 4h1v1h-1z M16 4h1v1h-1z M17 4h1v1h-1z M18 4h1v1h-1z M19 4h1v1h-1z M20 4h1v1h-1z M21 4h1v1h-1z M22 4h1v1h-1z M23 4h1v1h-1z M24 4h1v1h-1z M25 4h1v1h-1z M26 4h1v1h-1z M28 4h1v1h-1z M11 5h1v1h-1z M12 5h1v1h-1z M13 5h1v1h-1z M14 5h1v1h-1z M15 5h1v1h-1z M16 5h1v1h-1z M17 5h1v1h-1z M18 5h1v1h-1z M19 5h1v1h-1z M20 5h1v1h-1z M21 5h1v1h-1z M23 5h1v1h-1z M24 5h1v1h-1z M25 5h1v1h-1z M27 5h1v1h-1z M29 5h1v1h-1z M10 6h1v1h-1z M11 6h1v1h-1z M12 6h1v1h-1z M13 6h1v1h-1z M14 6h1v1h-1z M15 6h1v1h-1z M16 6h1v1h-1z M17 6h1v1h-1z M18 6h1v1h-1z M19 6h1v1h-1z M20 6h1v1h-1z M21 6h1v1h-1z M22 6h1v1h-1z M23 6h1v1h-1z M24 6h1v1h-1z M25 6h1v1h-1z M26 6h1v1h-1z M27 6h1v1h-1z M28 6h1v1h-1z M30 6h1v1h-1z M9 7h1v1h-1z M10 7h1v1h-1z M11 7h1v1h-1z M13 7h1v1h-1z M14 7h1v1h-1z M15 7h1v1h-1z M16 7h1v1h-1z M17 7h1v1h-1z M18 7h1v1h-1z M19 7h1v1h-1z M21 7h1v1h-1z M22 7h1v1h-1z M23 7h1v1h-1z M25 7h1v1h-1z M27 7h1v1h-1z M29 7h1v1h-1z M31 7h1v1h-1z M8 8h1v1h-1z M9 8h1v1h-1z M10 8h1v1h-1z M11 8h1v1h-1z M12 8h1v1h-1z M13 8h1v1h-1z M14 8h1v1h-1z M15 8h1v1h-1z M16 8h1v1h-1z M17 8h1v1h-1z M18 8h1v1h-1z M19 8h1v1h-1z M20 8h1v1h-1z M21 8h1v1h-1z M22 8h1v1h-1z M23 8h1v1h-1z M24 8h1v1h-1z M25 8h1v1h-1z M26 8h1v1h-1z M27 8h1v1h-1z M28 8h1v1h-1z M29 8h1v1h-1z M30 8h1v1h-1z M32 8h1v1h-1z M7 9h1v1h-1z M8 9h1v1h-1z M9 9h1v1h-1z M10 9h1v1h-1z M11 9h1v1h-1z M12 9h1v1h-1z M13 9h1v1h-1z M14 9h1v1h-1z M15 9h1v1h-1z M16 9h1v1h-1z M17 9h1v1h-1z M18 9h1v1h-1z M19 9h1v1h-1z M20 9h1v1h-1z M21 9h1v1h-1z M22 9h1v1h-1z M23 9h1v1h-1z M24 9h1v1h-1z M25 9h1v1h-1z M27 9h1v1h-1z M29 9h1v1h-1z M31 9h1v1h-1z M33 9h1v1h-1z M7 10h1v1h-1z M8 10h1v1h-1z M9 10h1v1h-1z M10 10h1v1h-1z M11 10h1v1h-1z M12 10h1v1h-1z M13 10h1v1h-1z M14 10h1v1h-1z M15 10h1v1h-1z M16 10h1v1h-1z M17 10h1v1h-1z M18 10h1v1h-1z M19 10h1v1h-1z M20 10h1v1h-1z M21 10h1v1h-1z M22 10h1v1h-1z M23 10h1v1h-1z M24 10h1v1h-1z M25 10h1v1h-1z M26 10h1v1h-1z M27 10h1v1h-1z M28 10h1v1h-1z M29 10h1v1h-1z M30 10h1v1h-1z M31 10h1v1h-1z M32 10h1v1h-1z M7 11h1v1h-1z M9 11h1v1h-1z M10 11h1v1h-1z M11 11h1v1h-1z M12 11h1v1h-1z M13 11h1v1h-1z M14 11h1v1h-1z M15 11h1v1h-1z M16 11h1v1h-1z M17 11h1v1h-1z M18 11h1v1h-1z M19 11h1v1h-1z M21 11h1v1h-1z M22 11h1v1h-1z M23 11h1v1h-1z M25 11h1v1h-1z M27 11h1v1h-1z M29 11h1v1h-1z M31 11h1v1h-1z M33 11h1v1h-1z M6 12h1v1h-1z M7 12h1v1h-1z M8 12h1v1h-1z M9 12h1v1h-1z M10 12h1v1h-1z M11 12h1v1h-1z M12 12h1v1h-1z M13 12h1v1h-1z M14 12h1v1h-1z M15 12h1v1h-1z M16 12h1v1h-1z M17 12h1v1h-1z M18 12h1v1h-1z M19 12h1v1h-1z M20 12h1v1h-1z M21 12h1v1h-1z M22 12h1v1h-1z M23 12h1v1h-1z M24 12h1v1h-1z M25 12h1v1h-1z M26 12h1v1h-1z M27 12h1v1h-1z M28 12h1v1h-1z M29 12h1v1h-1z M30 12h1v1h-1z M32 12h1v1h-1z M33 12h1v1h-1z M34 12h1v1h-1z M7 13h1v1h-1z M8 13h1v1h-1z M9 13h1v1h-1z M10 13h1v1h-1z M11 13h1v1h-1z M12 13h1v1h-1z M13 13h1v1h-1z M14 13h1v1h-1z M15 13h1v1h-1z M16 13h1v1h-1z M17 13h1v1h-1z M18 13h1v1h-1z M19 13h1v1h-1z M20 13h1v1h-1z M21 13h1v1h-1z M22 13h1v1h-1z M23 13h1v1h-1z M24 13h1v1h-1z M25 13h1v1h-1z M27 13h1v1h-1z M29 13h1v1h-1z M31 13h1v1h-1z M33 13h1v1h-1z M6 14h1v1h-1z M7 14h1v1h-1z M8 14h1v1h-1z M9 14h1v1h-1z M10 14h1v1h-1z M11 14h1v1h-1z M12 14h1v1h-1z M13 14h1v1h-1z M14 14h1v1h-1z M15 14h1v1h-1z M16 14h1v1h-1z M17 14h1v1h-1z M18 14h1v1h-1z M19 14h1v1h-1z M20 14h1v1h-1z M21 14h1v1h-1z M22 14h1v1h-1z M23 14h1v1h-1z M24 14h1v1h-1z M25 14h1v1h-1z M26 14h1v1h-1z M27 14h1v1h-1z M28 14h1v1h-1z M30 14h1v1h-1z M31 14h1v1h-1z M32 14h1v1h-1z M34 14h1v1h-1z M5 15h1v1h-1z M6 15h1v1h-1z M7 15h1v1h-1z M9 15h1v1h-1z M10 15h1v1h-1z M11 15h1v1h-1z M12 15h1v1h-1z M13 15h1v1h-1z M14 15h1v1h-1z M15 15h1v1h-1z M16 15h1v1h-1z M17 15h1v1h-1z M18 15h1v1h-1z M19 15h1v1h-1z M21 15h1v1h-1z M22 15h1v1h-1z M23 15h1v1h-1z M25 15h1v1h-1z M27 15h1v1h-1z M29 15h1v1h-1z M31 15h1v1h-1z M33 15h1v1h-1z M35 15h1v1h-1z M5 16h1v1h-1z M6 16h1v1h-1z M7 16h1v1h-1z M8 16h1v1h-1z M9 16h1v1h-1z M10 16h1v1h-1z M11 16h1v1h-1z M12 16h1v1h-1z M13 16h1v1h-1z M14 16h1v1h-1z M15 16h1v1h-1z M16 16h1v1h-1z M17 16h1v1h-1z M18 16h1v1h-1z M19 16h1v1h-1z M20 16h1v1h-1z M21 16h1v1h-1z M22 16h1v1h-1z M23 16h1v1h-1z M24 16h1v1h-1z M25 16h1v1h-1z M26 16h1v1h-1z M27 16h1v1h-1z M28 16h1v1h-1z M29 16h1v1h-1z M30 16h1v1h-1z M32 16h1v1h-1z M33 16h1v1h-1z M34 16h1v1h-1z M5 17h1v1h-1z M7 17h1v1h-1z M8 17h1v1h-1z M9 17h1v1h-1z M10 17h1v1h-1z M11 17h1v1h-1z M12 17h1v1h-1z M13 17h1v1h-1z M14 17h1v1h-1z M15 17h1v1h-1z M16 17h1v1h-1z M17 17h1v1h-1z M18 17h1v1h-1z M19 17h1v1h-1z M20 17h1v1h-1z M21 17h1v1h-1z M23 17h1v1h-1z M24 17h1v1h-1z M25 17h1v1h-1z M27 17h1v1h-1z M29 17h1v1h-1z M31 17h1v1h-1z M33 17h1v1h-1z M6 18h1v1h-1z M7 18h1v1h-1z M8 18h1v1h-1z M9 18h1v1h-1z M10 18h1v1h-1z M11 18h1v1h-1z M12 18h1v1h-1z M13 18h1v1h-1z M14 18h1v1h-1z M15 18h1v1h-1z M16 18h1v1h-1z M17 18h1v1h-1z M18 18h1v1h-1z M19 18h1v1h-1z M20 18h1v1h-1z M21 18h1v1h-1z M22 18h1v1h-1z M23 18h1v1h-1z M24 18h1v1h-1z M25 18h1v1h-1z M26 18h1v1h-1z M27 18h1v1h-1z M28 18h1v1h-1z M30 18h1v1h-1z M31 18h1v1h-1z M32 18h1v1h-1z M34 18h1v1h-1z M7 19h1v1h-1z M9 19h1v1h-1z M10 19h1v1h-1z M11 19h1v1h-1z M13 19h1v1h-1z M14 19h1v1h-1z M15 19h1v1h-1z M17 19h1v1h-1z M18 19h1v1h-1z M19 19h1v1h-1z M21 19h1v1h-1z M22 19h1v1h-1z M23 19h1v1h-1z M25 19h1v1h-1z M27 19h1v1h-1z M29 19h1v1h-1z M31 19h1v1h-1z M33 19h1v1h-1z M6 20h1v1h-1z M7 20h1v1h-1z M8 20h1v1h-1z M9 20h1v1h-1z M10 20h1v1h-1z M11 20h1v1h-1z M12 20h1v1h-1z M18 20h1v1h-1z M19 20h1v1h-1z M20 20h1v1h-1z M21 20h1v1h-1z M22 20h1v1h-1z M28 20h1v1h-1z M29 20h1v1h-1z M30 20h1v1h-1z M32 20h1v1h-1z M34 20h1v1h-1z M11 21h1v1h-1z M19 21h1v1h-1z M20 21h1v1h-1z M21 21h1v1h-1z M29 21h1v1h-1z M11 22h1v1h-1z M19 22h1v1h-1z M20 22h1v1h-1z M21 22h1v1h-1z M7 23h1v1h-1z M9 23h1v1h-1z M11 23h1v1h-1z M19 23h1v1h-1z M21 23h1v1h-1z M29 23h1v1h-1z M8 24h1v1h-1z M9 24h1v1h-1z M10 24h1v1h-1z M11 24h1v1h-1z M12 24h1v1h-1z M13 24h1v1h-1z M17 24h1v1h-1z M18 24h1v1h-1z M19 24h1v1h-1z M21 24h1v1h-1z M22 24h1v1h-1z M23 24h1v1h-1z M28 24h1v1h-1z M29 24h1v1h-1z M30 24h1v1h-1z M32 24h1v1h-1z M7 25h1v1h-1z M9 25h1v1h-1z M11 25h1v1h-1z M12 25h1v1h-1z M13 25h1v1h-1z M15 25h1v1h-1z M16 25h1v1h-1z M17 25h1v1h-1z M23 25h1v1h-1z M25 25h1v1h-1z M27 25h1v1h-1z M29 25h1v1h-1z M31 25h1v1h-1z M33 25h1v1h-1z M8 26h1v1h-1z M10 26h1v1h-1z M11 26h1v1h-1z M12 26h1v1h-1z M13 26h1v1h-1z M14 26h1v1h-1z M15 26h1v1h-1z M16 26h1v1h-1z M17 26h1v1h-1z M23 26h1v1h-1z M24 26h1v1h-1z M26 26h1v1h-1z M28 26h1v1h-1z M30 26h1v1h-1z M32 26h1v1h-1z M9 27h1v1h-1z M11 27h1v1h-1z M13 27h1v1h-1z M15 27h1v1h-1z M17 27h1v1h-1z M19 27h1v1h-1z M21 27h1v1h-1z M23 27h1v1h-1z M25 27h1v1h-1z M27 27h1v1h-1z M12 28h1v1h-1z M13 28h1v1h-1z M15 28h1v1h-1z M17 28h1v1h-1z M19 28h1v1h-1z M20 28h1v1h-1z M21 28h1v1h-1z M25 28h1v1h-1z M28 28h1v1h-1z M13 31h1v1h-1z M15 31h1v1h-1z M17 31h1v1h-1z M19 31h1v1h-1z M21 31h1v1h-1z M23 31h1v1h-1z M25 31h1v1h-1z M27 31h1v1h-1z M14 32h1v1h-1z M16 32h1v1h-1z M17 32h1v1h-1z M18 32h1v1h-1z M20 32h1v1h-1z M22 32h1v1h-1z M24 32h1v1h-1z M26 32h1v1h-1z M15 33h1v1h-1z M17 33h1v1h-1z M19 33h1v1h-1z M21 33h1v1h-1z M23 33h1v1h-1z M25 33h1v1h-1z M16 34h1v1h-1z M18 34h1v1h-1z M20 34h1v1h-1z M22 34h1v1h-1z M24 34h1v1h-1z M17 35h1v1h-1z M19 35h1v1h-1z M23 35h1v1h-1z M18 36h1v1h-1z M20 36h1v1h-1z M22 36h1v1h-1z";

export default function DitherSkull() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col items-center p-3 sm:p-3.5 bg-[#0d1c42]/85 border border-[#22396f] hover:border-[#fcf1d0]/50 backdrop-blur-md shadow-xl shadow-[#010736]/60 transition-all duration-300 w-full sm:w-72 select-none"
    >
      {/* Top technical header */}
      <div className="w-full flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#22396f]/60 font-mono text-[10px] uppercase tracking-[0.2em] text-[#fcf1d0]/70">
        <span>:1-bit:</span>
        <span className="text-[#22396f]">[SKULL_01]</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:animate-ping" />
      </div>

      {/* Skull Pixel Canvas Frame */}
      <div className="relative flex items-center justify-center w-full py-2 bg-[#010736]/70 border border-[#22396f]/40 overflow-hidden">
        {/* 1-bit Dither Skull SVG */}
        <svg
          viewBox="0 0 40 40"
          className="w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 group-hover:scale-105"
          shapeRendering="crispEdges"
          aria-label="1-bit dither skull pixel art"
        >
          {/* Skull Dither Pixels */}
          <path
            d={SKULL_PATH}
            fill="#fcf1d0"
            className="transition-colors duration-200 group-hover:fill-white"
          />

          {/* Interactive Eye Glow on Hover */}
          {hovered && (
            <>
              {/* Left eye pupil */}
              <rect x="14" y="21" width="2" height="2" fill="#34d399" />
              {/* Right eye pupil */}
              <rect x="25" y="21" width="2" height="2" fill="#34d399" />
            </>
          )}
        </svg>

        {/* Subtle scanline overlay effect */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(1,7,54,0)_50%,rgba(1,7,54,0.35)_50%)] bg-[length:100%_4px] opacity-40"
        />
      </div>

      {/* Bottom technical footer */}
      <div className="w-full flex items-center justify-between pt-1.5 mt-1.5 border-t border-[#22396f]/40 font-mono text-[9px] uppercase tracking-[0.15em] text-[#fcf1d0]/50">
        <span>BAYER_DITHER</span>
        <span>40x40_PIXELS</span>
      </div>
    </div>
  );
}
