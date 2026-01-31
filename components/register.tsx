"use client";

import { useEffect, useState } from "react";
import { Skull, Swords } from "lucide-react";

export function Register() {
  const [embers, setEmbers] = useState<Array<{
    left: number;
    bottom: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    setEmbers(
      [...Array(15)].map(() => ({
        left: Math.random() * 100,
        bottom: Math.random() * 30,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      }))
    );
  }, []);

  return (
    <section id="register" className="relative py-20 md:py-32 overflow-hidden bg-black">
      {/* Background with blood/fire effect */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-blood-red/15 to-black" />
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-linear-to-t from-blood-red/30 to-transparent" />
      
      {/* Grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative skull */}
        <div className="mb-8">
          <Skull className="w-16 h-16 md:w-20 md:h-20 text-blood-red mx-auto" />
        </div>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 text-shadow-subtle">
          <span className="text-foreground">PLEDGE YOUR SOUL OR</span>
          <span className="block text-blood-red mt-2">PERISH IN DARKNESS</span>
        </h2>

        {/* Tagline */}
        <p className="text-foreground/70 text-lg md:text-xl lg:text-2xl mb-4 tracking-wide">
          Those who hesitate shall be consumed by the abyss.
        </p>

        <p className="text-foreground/60 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          Join teams from across the region in this epic treasure hunt competition. Form your team,
          pledge allegiance to a House, and compete for glory and prizes.
        </p>

        {/* Registration info */}
        <div className="inline-block p-4 md:p-6 bg-black/60 border border-blood-red/30 mb-8 backdrop-blur-sm">
          <p className="text-foreground/50 text-sm uppercase tracking-widest mb-2 font-mono">
            Registrations via
          </p>
          <p className="text-2xl md:text-3xl font-bold text-ember-orange tracking-wider">UNSTOP</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://bit.ly/realm-of-six"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-blood-red text-foreground font-bold text-sm md:text-base uppercase tracking-widest border-2 border-blood-red hover:bg-transparent hover:text-blood-red transition-all duration-300 relative overflow-hidden"
          >
            <Swords className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            <span>Register Now</span>
          </a>
        </div>

        {/* Deadline warning */}
        <div className="mt-8 md:mt-12 p-4 bg-blood-red/10 border-2 border-blood-red/40 inline-block backdrop-blur-sm">
          <p className="text-blood-red text-sm md:text-base font-bold uppercase tracking-wider">
            Registration Deadline: 3rd February 2026
          </p>
          <p className="text-foreground/60 text-xs mt-1 font-mono">
            No soul shall be allowed after the gates close.
          </p>
        </div>
      </div>
    </section>
  );
}
