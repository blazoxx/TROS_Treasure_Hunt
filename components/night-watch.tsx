"use client";

import { Eye } from "lucide-react";

export function NightWatch() {
  return (
    <section className="relative py-32 overflow-hidden bg-black/50 border-y border-red-950/30">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Eye Icon */}
        <div className="mb-8 flex justify-center">
          <Eye className="w-12 h-12 text-red-600/60 animate-pulse" />
        </div>

        {/* Main message */}
        <p className="text-2xl md:text-3xl font-serif italic text-zinc-200 mb-6 leading-relaxed">
          The Night's Watch has eyes on all — beyond the Wall and within the walls.
        </p>

        {/* Subtitle */}
        <p className="text-xs md:text-sm font-mono text-red-900/70 uppercase tracking-widest">
          Vigilance knows no end.
        </p>
      </div>

      {/* Border accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
    </section>
  );
}
