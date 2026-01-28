"use client";

import { Users, Wifi, MapPin, Brain, Eye, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Team-Based Combat",
    description: "Form your warband. Rally your allies. Only teams shall enter the hunt.",
  },
  {
    icon: Wifi,
    title: "Online Prelims",
    description: "Prove your worth from afar. The weak shall be culled before the final battle.",
  },
  {
    icon: MapPin,
    title: "Offline Final Hunt",
    description: "The survivors descend upon IIIT Bhagalpur. Only the worthy reach the throne.",
  },
  {
    icon: Brain,
    title: "Logic & Reasoning",
    description: "Puzzles that break minds. Riddles that consume sanity. Think or perish.",
  },
  {
    icon: Eye,
    title: "Observation",
    description: "Details hide in shadows. The vigilant survive. The blind fall.",
  },
  {
    icon: Clock,
    title: "Speed & Precision",
    description: "Hesitation is death. Strike fast, strike true, or be left in the dust.",
  },
];

export function EventDetails() {
  return (
    <section id="event" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      {/* Decorative smoke effect */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blood-red/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 text-shadow-subtle">
            <span className="text-foreground">THE HUNT</span>
            <span className="block text-blood-red mt-2">AWAITS</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-4">
            This is no mere game. This is a trial by fire, ice, and iron. Only those with cunning minds,
            sharp eyes, and iron will shall survive to claim the throne.
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-blood-red to-transparent mx-auto" />
        </div>

        {/* Format overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="text-center p-6 md:p-8 bg-card border border-border">
            <div className="text-4xl md:text-5xl font-bold text-blood-red mb-2">01</div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">REGISTRATION</h3>
            <p className="text-foreground/60 text-sm">
              Pledge your allegiance. Form your warband. Enter before the gates close forever.
            </p>
          </div>
          <div className="text-center p-6 md:p-8 bg-card border border-border">
            <div className="text-4xl md:text-5xl font-bold text-ember-orange mb-2">02</div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">ONLINE PRELIMS</h3>
            <p className="text-foreground/60 text-sm">
              The first culling. Digital trials to separate wheat from chaff. Many enter, few advance.
            </p>
          </div>
          <div className="text-center p-6 md:p-8 bg-card border border-border">
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">03</div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">THE FINAL HUNT</h3>
            <p className="text-foreground/60 text-sm">
              Survivors descend upon the campus. Hunt clues. Solve mysteries. Claim the crown.
            </p>
          </div>
        </div>

        {/* Skills tested */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              SKILLS OF THE WORTHY
            </h3>
            <p className="text-foreground/60 text-sm">
              No luck. No chance. Only skill determines the victor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group flex items-start gap-4 p-4 md:p-6 bg-secondary/30 border border-border hover:border-blood-red/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blood-red/10 border border-blood-red/30 flex items-center justify-center group-hover:bg-blood-red/20 transition-colors">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-blood-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 text-sm md:text-base">
                      {feature.title}
                    </h4>
                    <p className="text-foreground/60 text-xs md:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* No luck disclaimer */}
        <div className="text-center p-6 md:p-8 bg-card border border-ember-orange/30">
          <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-ember-orange mx-auto mb-4" />
          <p className="text-foreground/80 text-sm md:text-base font-medium">
            {"\"Fortune favors none in the Realm. Victory belongs to the cunning, the observant, and the relentless.\""}
          </p>
          <p className="text-foreground/40 text-xs uppercase tracking-widest mt-2">
            — Ancient Proverb of the Six
          </p>
        </div>
      </div>
    </section>
  );
}
