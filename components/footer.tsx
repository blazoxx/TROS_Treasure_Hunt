"use client";

import { Instagram, Mail, Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 md:py-16 border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background to-card" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Flame className="w-6 h-6 text-blood-red" />
              <span className="text-lg font-bold tracking-wider text-blood-red">
                THE REALM OF SIX
              </span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Six Houses. One throne. Eternal glory or forgotten ash.
            </p>
          </div>

          {/* Organizer */}
          <div className="text-center">
            <h4 className="text-sm uppercase tracking-widest text-foreground/40 mb-4">
              Organized By
            </h4>
            <p className="text-foreground font-bold mb-1">the realm of six team</p>
            <p className="text-foreground/60 text-sm">IIIT Bhagalpur</p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-sm uppercase tracking-widest text-foreground/40 mb-4">
              Contact the Council
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:bps1trn@gmail.com"
                className="flex items-center justify-center md:justify-end gap-2 text-foreground/70 hover:text-blood-red transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">bps1trn@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/the.realm.of.six"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-foreground/70 hover:text-blood-red transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm">@therealmofsix</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 md:my-12 h-px bg-linear-to-r from-transparent via-border to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-foreground/40 text-xs uppercase tracking-widest">
            © THE REALM OF SIX — SEASON I
          </p>
          <p className="text-foreground/40 text-xs">
            All rights reserved. IIIT Bhagalpur 2026
          </p>
        </div>

        {/* Final motto */}
        <div className="mt-8 text-center">
          <p className="text-foreground/30 text-xs italic tracking-wide">
            {"\"When the hunt ends, only one shall wear the crown.\""}
          </p>
        </div>
      </div>
    </footer>
  );
}
