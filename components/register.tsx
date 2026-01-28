"use client";

import { Skull, Swords } from "lucide-react";

export function Register() {
  return (
    <section id="register" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with fire effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blood-red/10 to-background" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blood-red/20 to-transparent" />

      {/* Ember particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ember-orange rounded-full animate-ember"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 30}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative skull */}
        <div className="mb-8">
          <Skull className="w-16 h-16 md:w-20 md:h-20 text-blood-red mx-auto animate-pulse" />
        </div>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 text-shadow-fire">
          <span className="text-foreground">CLAIM YOUR</span>
          <span className="block text-blood-red mt-2">BIRTHRIGHT</span>
        </h2>

        {/* Tagline */}
        <p className="text-foreground/80 text-lg md:text-xl lg:text-2xl mb-4 tracking-wide">
          The throne awaits. Will you answer the call?
        </p>

        <p className="text-foreground/60 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Join thousands who dare to enter the Realm. Form your warband. Pledge your loyalty.
          The Hunt begins soon—those who hesitate shall be left behind.
        </p>

        {/* Registration info */}
        <div className="inline-block p-4 md:p-6 bg-card border border-border mb-8">
          <p className="text-foreground/70 text-sm uppercase tracking-widest mb-2">
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
            className="group inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-blood-red text-foreground font-bold text-sm md:text-base uppercase tracking-widest border-2 border-blood-red hover:bg-transparent hover:text-blood-red transition-all duration-300"
          >
            <Swords className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            <span>Register Now</span>
          </a>
        </div>

        {/* Deadline warning */}
        <div className="mt-8 md:mt-12 p-4 bg-ember-orange/10 border border-ember-orange/30 inline-block">
          <p className="text-ember-orange text-sm md:text-base font-bold uppercase tracking-wider">
            Gates Close: 31st January
          </p>
          <p className="text-foreground/60 text-xs mt-1">
            After this date, no soul shall enter
          </p>
        </div>
      </div>
    </section>
  );
}
