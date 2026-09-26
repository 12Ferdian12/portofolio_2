"use client";

import React, { useEffect, useRef } from "react";

interface AsciiWaterfallProps {
  className?: string;
}

export default function AsciiWaterfall({
  className = "pointer-events-none absolute inset-0 z-0 overflow-hidden",
}: AsciiWaterfallProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width =
      canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height =
      canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width =
        canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height =
        canvas.parentElement?.clientHeight || window.innerHeight;
      initStreams();
    };

    window.addEventListener("resize", handleResize);

    // ASCII waterfall glyph set (water drops, streaks, spray, dither)
    const glyphs = [
      "|",
      ":",
      ".",
      ";",
      "!",
      "i",
      "l",
      "~",
      "^",
      "░",
      "▒",
      "│",
      "┆",
      "╽",
      "≈",
      "°",
      "*",
      "·",
    ];

    const fontSize = 14;
    let columns = Math.floor(width / fontSize);

    interface Stream {
      x: number;
      y: number;
      speed: number;
      length: number;
      chars: string[];
      delay: number;
      opacity: number;
    }

    let streams: Stream[] = [];

    const initStreams = () => {
      columns = Math.floor(width / fontSize);
      streams = [];

      for (let i = 0; i < columns; i++) {
        // Density filter: stream in ~70% of columns for natural water spacing
        if (Math.random() > 0.7) continue;

        const length = Math.floor(Math.random() * 16) + 6;
        const chars: string[] = [];
        for (let j = 0; j < length; j++) {
          chars.push(glyphs[Math.floor(Math.random() * glyphs.length)]);
        }

        streams.push({
          x: i * fontSize,
          y: Math.random() * -height,
          speed: Math.random() * 3.0 + 1.8,
          length,
          chars,
          delay: Math.random() * 50,
          opacity: Math.random() * 0.35 + 0.35,
        });
      }
    };

    initStreams();

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    observer.observe(canvas);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // CRITICAL: Clear only — 100% transparent canvas, ZERO background alteration
      ctx.clearRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace, 'Geist Mono', ui-monospace`;

      for (const stream of streams) {
        if (stream.delay > 0) {
          stream.delay--;
          continue;
        }

        stream.y += stream.speed;

        // Occasional glyph morphing to simulate fluid shimmer
        if (Math.random() < 0.06) {
          const idx = Math.floor(Math.random() * stream.length);
          stream.chars[idx] = glyphs[Math.floor(Math.random() * glyphs.length)];
        }

        for (let i = 0; i < stream.length; i++) {
          const charY = stream.y - i * fontSize;
          if (charY < -fontSize || charY > height + fontSize) continue;

          // Leading drop: exact palette warm cream #fcf1d0
          if (i === 0) {
            ctx.fillStyle = "rgba(252, 241, 208, 0.70)";
          } else if (i === 1) {
            ctx.fillStyle = "rgba(252, 241, 208, 0.45)";
          } else {
            // Trailing body: exact palette slate blue #22396f
            const fade = (1 - i / stream.length) * stream.opacity * 0.4;
            ctx.fillStyle = `rgba(34, 57, 111, ${fade})`;
          }

          ctx.fillText(stream.chars[i] || "|", stream.x, charY);
        }

        // Bottom splash ripples
        if (stream.y >= height - 35 && stream.y <= height) {
          ctx.fillStyle = "rgba(252, 241, 208, 0.25)";
          const splash = Math.random() > 0.5 ? "~" : "≈";
          ctx.fillText(splash, stream.x, height - 6);
        }

        // Recycle stream
        if (stream.y - stream.length * fontSize > height) {
          stream.y = Math.random() * -80;
          stream.speed = Math.random() * 3.0 + 1.8;
          stream.delay = Math.random() * 25;
          for (let j = 0; j < stream.length; j++) {
            stream.chars[j] = glyphs[Math.floor(Math.random() * glyphs.length)];
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-transparent"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
}
