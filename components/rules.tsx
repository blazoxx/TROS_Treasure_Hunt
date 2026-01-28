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
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blood-red/5 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 text-shadow-subtle">
            <span className="text-foreground">LAWS OF</span>
            <span className="block text-blood-red mt-2">THE REALM</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-4">
            Honor binds the Realm. Those who break it shall find no sanctuary.
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-blood-red to-transparent mx-auto" />
        </div>

        {/* Rules list */}
        <div className="space-y-4 md:space-y-6">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={rule.title}
                className="group flex items-start gap-4 md:gap-6 p-6 md:p-8 bg-card border border-border hover:border-blood-red/50 transition-all duration-300"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-blood-red/10 border border-blood-red/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-blood-red" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-blood-red uppercase tracking-widest">
                      Decree {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warning banner */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-blood-red/10 border border-blood-red/50 text-center">
          <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-blood-red mx-auto mb-4" />
          <p className="text-foreground font-bold text-sm md:text-base uppercase tracking-wider">
            Violators shall be named, shamed, and forever barred from the Realm
          </p>
        </div>
      </div>
    </section>
  );
}
