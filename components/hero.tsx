"use client";

import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [embers, setEmbers] = useState<Array<{
    left: number;
    bottom: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate random positions only on client side to avoid hydration mismatch
    setEmbers(
      [...Array(20)].map(() => ({
        left: Math.random() * 100,
        bottom: Math.random() * 50,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background layers - Horror enhanced */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Vignette overlay for darker edges */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80" />

      {/* Fire/ember effect overlay - darker and more ominous */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-linear-to-t from-blood-red/30 via-blood-red/10 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-96 bg-linear-to-t from-blood-red/40 via-ember-orange/15 to-transparent blur-3xl animate-pulse" />
        {/* Additional shadow layers */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-linear-to-b from-black/60 to-transparent" />
      </div>

      {/* Ember particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {embers.map((ember, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ember-orange rounded-full animate-ember"
            style={{
              left: `${ember.left}%`,
              bottom: `${ember.bottom}%`,
              animationDelay: `${ember.delay}s`,
              animationDuration: `${ember.duration}s`,
              boxShadow: '0 0 6px var(--ember-orange), 0 0 3px var(--blood-red)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Raven Watch */}
        <div className="mb-10 md:mb-12 flex items-center justify-center gap-4">
          <span className="h-px w-14 md:w-24 bg-blood-red/50" />
          <span className="text-xs md:text-sm font-serif uppercase tracking-[0.5em] text-zinc-100/90">
            Raven's Watching
          </span>
          <span className="h-px w-14 md:w-24 bg-blood-red/50" />
        </div>

        {/* Main title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif tracking-tight mb-8 md:mb-10 text-shadow-fire">
          <span className="block text-foreground">THE REALM</span>
          <span className="block text-blood-red">OF SIX</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-foreground/80 tracking-wide mb-9 md:mb-10 text-balance font-light italic">
          Six Houses rise. One Victor.<br/>
          The throne awaits.
        </p>

        {/* Event details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-11 md:mb-14 text-sm md:text-base">
          <div className="flex items-center gap-2 text-foreground/60">
            <span className="w-2 h-2 bg-blood-red rounded-full animate-pulse shadow-[0_0_10px_var(--blood-red)]" />
            <span className="uppercase tracking-widest font-mono">20th February</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-blood-red/30" />
          <div className="flex items-center gap-2 text-foreground/60">
            <span className="w-2 h-2 bg-ember-orange rounded-full animate-pulse shadow-[0_0_10px_var(--ember-orange)]" />
            <span className="uppercase tracking-widest font-mono">IIIT Bhagalpur Campus</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#register"
          onClick={() => {
            // Track register button click
            if (typeof window !== 'undefined' && (window as any).va) {
              (window as any).va('track', 'Register Click', { location: 'hero' });
            }
          }}
          className="inline-block px-7 py-3.5 md:px-10 md:py-4.5 bg-blood-red text-foreground font-bold text-sm md:text-base uppercase tracking-widest border-2 border-blood-red hover:bg-transparent hover:text-blood-red transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Register Now</span>
          <div className="absolute inset-0 bg-blood-red/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-foreground/50" />
      </div>

      {/* Decorative borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blood-red/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-ember-orange/50 to-transparent" />
    </section>
  );
}
