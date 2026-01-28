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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />

      {/* Fire/ember effect overlay */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-blood-red/20 via-ember-orange/10 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-96 bg-linear-to-t from-ember-orange/30 via-blood-red/10 to-transparent blur-3xl animate-pulse" />
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
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decorative crown/sigil */}
        <div className="mb-6 md:mb-8">
          <svg
            viewBox="0 0 100 40"
            className="w-32 md:w-48 h-auto mx-auto text-blood-red animate-flicker"
            fill="currentColor"
          >
            <path d="M10 35 L20 10 L30 25 L40 5 L50 20 L60 5 L70 25 L80 10 L90 35 Z" />
            <rect x="5" y="35" width="90" height="3" />
          </svg>
        </div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight mb-4 md:mb-6 text-shadow-fire">
          <span className="block text-foreground">THE REALM</span>
          <span className="block text-blood-red">OF SIX</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90 tracking-wide mb-6 md:mb-8 text-balance">
          Six Houses rise. One Victor claims the throne.
        </p>

        {/* Event details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 md:mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2 text-foreground/70">
            <span className="w-2 h-2 bg-ember-orange rounded-full animate-pulse" />
            <span className="uppercase tracking-widest">20th February</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2 text-foreground/70">
            <span className="w-2 h-2 bg-blood-red rounded-full animate-pulse" />
            <span className="uppercase tracking-widest">IIIT Bhagalpur Campus</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#register"
          className="inline-block px-8 py-4 md:px-12 md:py-5 bg-blood-red text-foreground font-bold text-sm md:text-base uppercase tracking-widest border-2 border-blood-red hover:bg-transparent hover:text-blood-red transition-all duration-300"
        >
          Register Now
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
