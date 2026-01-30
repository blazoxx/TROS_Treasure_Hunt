"use client";

import { AlertTriangle, Gavel, ShieldX, Ban } from "lucide-react";

const rules = [
  {
    icon: ShieldX,
    title: "Zero Tolerance for Treachery",
    description: "Cheating, in any form, shall be met with immediate and permanent banishment from the hunt.",
  },
  {
    icon: Ban,
    title: "Unfair Means Equals Elimination",
    description: "Any attempt to gain advantage through deception, bribery, or sabotage results in instant disqualification.",
  },
  {
    icon: Gavel,
    title: "The Council's Word Is Law",
    description: "All decisions by the organizers are final and absolute. There are no second chances in the Realm.",
  },
  {
    icon: AlertTriangle,
    title: "No Appeals, No Mercy",
    description: "Once judgment is passed, it cannot be undone. Accept defeat with honor or face disgrace.",
  },
];

export function Rules() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-black">
      {/* Background - horror enhanced */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-blood-red-dark/10 to-black" />
      
      {/* Grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Blood vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-blood-red" />
            <div className="w-12 h-px bg-blood-red" />
            <AlertTriangle className="w-5 h-5 text-blood-red" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 text-shadow-subtle">
            <span className="text-foreground">RULES &</span>
            <span className="block text-blood-red mt-2">REGULATIONS</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-4 font-light">
            Fair play and integrity are paramount. All participants must adhere to these guidelines.
          </p>
          <div className="w-32 h-px bg-linear-to-r from-transparent via-blood-red to-transparent mx-auto" />
        </div>

        {/* Rules list */}
        <div className="space-y-4 md:space-y-6">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={rule.title}
                className="group flex items-start gap-4 md:gap-6 p-6 md:p-8 bg-black/60 border border-blood-red/30 hover:border-blood-red/60 hover:bg-blood-red/5 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
              >
                
                {/* Number/Icon */}
                <div className="relative shrink-0 w-12 h-12 md:w-16 md:h-16 bg-blood-red/10 border border-blood-red/40 flex items-center justify-center group-hover:bg-blood-red/20 transition-all duration-300">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-blood-red" />
                </div>

                {/* Content */}
                <div className="flex-1 relative">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-blood-red uppercase tracking-widest font-mono">
                      Rule {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 h-px bg-blood-red/20" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 uppercase tracking-wide">
                    {rule.title}
                  </h3>
                  <p className="text-foreground/60 text-sm md:text-base leading-relaxed font-light">
                    {rule.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warning banner */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-blood-red/10 border-2 border-blood-red/50 text-center relative overflow-hidden backdrop-blur-sm">
          <AlertTriangle className="relative w-8 h-8 md:w-10 md:h-10 text-blood-red mx-auto mb-4" />
          <p className="relative text-foreground font-bold text-sm md:text-base uppercase tracking-wider">
            Violations will result in immediate disqualification and permanent ban from all future events
          </p>
          <div className="relative mt-4 w-24 h-px bg-blood-red mx-auto" />
        </div>
      </div>
    </section>
  );
}
