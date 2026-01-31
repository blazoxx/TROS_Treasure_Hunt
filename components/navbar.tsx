"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LiveVisitors } from "./live-visitors";

const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#houses", label: "Houses" },
  { href: "#event", label: "Event Details" },
  { href: "#timeline", label: "Timeline" },
  { href: "#register", label: "Register" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const next = window.scrollY > 50;
        setIsScrolled((prev) => (prev === next ? prev : next));
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-blood-red/30 shadow-[0_4px_20px_rgba(100,20,20,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Horror enhanced */}
          <a
            href="#"
            className="text-lg md:text-xl font-bold tracking-wider text-blood-red hover:text-ember-orange transition-colors duration-300 font-serif relative group"
          >
            <span className="relative z-10">THE REALM OF SIX</span>
            <span className="absolute inset-0 blur-md text-blood-red opacity-0 group-hover:opacity-50 transition-opacity duration-300">THE REALM OF SIX</span>
          </a>

          {/* Desktop Navigation + Mobile Visitors */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-foreground/70 hover:text-blood-red transition-all duration-300 font-mono relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-blood-red group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <div className="pl-4 border-l border-slate-700/50">
              <LiveVisitors />
            </div>
          </div>

          {/* Mobile Menu Button - Horror styled */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground hover:text-blood-red transition-colors border border-transparent hover:border-blood-red/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Horror enhanced */}
        {isMobileMenuOpen && (
           <div className="md:hidden absolute top-16 md:top-20 left-0 right-0 bg-black/98 backdrop-blur-md border-b border-blood-red/30 shadow-[0_8px_30px_rgba(100,20,20,0.4)] animate-creep-in">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm uppercase tracking-widest text-foreground/70 hover:text-blood-red hover:bg-blood-red/10 transition-all duration-300 border-l-2 border-transparent hover:border-blood-red font-mono"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
