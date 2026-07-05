import React from 'react';
import { useScrollReveal } from '../hooks/use-scroll-reveal';

const HeroSection: React.FC = () => {
  const revealRef = useScrollReveal();
  const subRef = useScrollReveal(150);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-28">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Deep radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px]"
          style={{
            transform: "translate(-50%, -52%)",
            background: "radial-gradient(circle at center, rgba(249,115,22,0.22) 0%, rgba(249,115,22,0.06) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Ambient warm fill at top */}
        <div
          className="absolute top-0 left-0 right-0 h-64"
          style={{ background: "linear-gradient(180deg, rgba(249,115,22,0.04) 0%, transparent 100%)" }}
        />
      </div>

      {/* Animated concentric rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="animate-ring-1" />
        <div className="animate-ring-2" />
        <div className="animate-ring-3" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Pill label */}
        <div ref={subRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10
          bg-orange-500/[0.08] border border-orange-500/20 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shrink-0" />
          <span className="text-orange-400/90 font-mono text-[10px] tracking-[0.22em] uppercase">
            Enterprise AI Infrastructure
          </span>
        </div>

        <div ref={revealRef} className="flex flex-col items-center">
          <h1
            className="text-[6rem] sm:text-[8.5rem] md:text-[12rem] xl:text-[14rem] leading-[0.82]
              font-black tracking-tighter text-white select-none"
          >
            TOKEN
          </h1>
          <h1
            className="text-[6rem] sm:text-[8.5rem] md:text-[12rem] xl:text-[14rem] leading-[0.82]
              font-black tracking-tighter select-none"
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.08)",
              background: "linear-gradient(180deg, #ffffff 0%, #71717a 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FACTORY
          </h1>
        </div>
      </div>

      {/* Bottom divider + tagline */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-70" />
        <p className="text-[9px] text-gray-500 tracking-[0.3em] uppercase font-semibold">
          Where Innovation Meets Design
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
