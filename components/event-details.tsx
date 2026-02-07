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
    <section id="event" className="relative py-20 md:py-32 overflow-hidden bg-black">
      {/* Background - horror enhanced */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-blood-red/5 to-black" />
      
      {/* Grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Decorative smoke/blood effect */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-linear-to-b from-blood-red/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-blood-red/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-blood-red" />
            <Sparkles className="w-4 h-4 text-blood-red" />
            <div className="w-8 h-px bg-blood-red" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 text-shadow-subtle">
            <span className="text-foreground">THE GRAND</span>
            <span className="block text-blood-red mt-2">TREASURE HUNT</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-4 font-light">
            A multi-stage competition of wit, observation, and strategy. Only the most skilled teams
            will advance to claim victory and eternal glory.
          </p>
          <div className="w-32 h-px bg-linear-to-r from-transparent via-blood-red to-transparent mx-auto" />
        </div>

        {/* Format overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="text-center p-6 md:p-8 bg-black/60 border border-blood-red/30 hover:border-blood-red/60 transition-all duration-300 backdrop-blur-sm group">
            <div className="text-4xl md:text-5xl font-bold text-blood-red mb-2">01</div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 uppercase tracking-wider">REGISTRATION</h3>
            <p className="text-foreground/60 text-sm font-light">
              Registration for this cycle is closed. Watch for the next opening.
            </p>
            <div className="mt-4 w-12 h-px bg-blood-red/50 mx-auto" />
          </div>
          <div className="text-center p-6 md:p-8 bg-black/60 border border-ember-orange/30 hover:border-ember-orange/60 transition-all duration-300 backdrop-blur-sm group">
            <div className="text-4xl md:text-5xl font-bold text-ember-orange mb-2">02</div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 uppercase tracking-wider">ONLINE PRELIMS</h3>
            <p className="text-foreground/60 text-sm font-light">
              Compete in online qualifying rounds. Top performers advance to the grand finale.
            </p>
            <div className="mt-4 w-12 h-px bg-ember-orange/50 mx-auto" />
          </div>
          <div className="text-center p-6 md:p-8 bg-black/60 border border-gold/30 hover:border-gold/60 transition-all duration-300 backdrop-blur-sm group">
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">03</div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 uppercase tracking-wider">GRAND FINALE</h3>
            <p className="text-foreground/60 text-sm font-light">
              Finalists gather at IIIT Bhagalpur for the ultimate treasure hunt challenge.
            </p>
            <div className="mt-4 w-12 h-px bg-gold/50 mx-auto" />
          </div>
        </div>

        {/* Skills tested */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 uppercase tracking-widest">
              CORE COMPETENCIES
            </h3>
            <p className="text-foreground/60 text-sm">
              Excellence in these skills determines success.
            </p>
            <div className="mt-4 w-16 h-px bg-blood-red/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group flex items-start gap-4 p-4 md:p-6 bg-black/40 border border-zinc-800 hover:border-blood-red/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blood-red/10 border border-blood-red/30 flex items-center justify-center group-hover:bg-blood-red/20 transition-all">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-blood-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 text-sm md:text-base uppercase tracking-wide">
                      {feature.title}
                    </h4>
                    <p className="text-foreground/60 text-xs md:text-sm leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* No luck disclaimer - Horror styled */}
        <div className="text-center p-6 md:p-8 bg-black/60 border-2 border-blood-red/40 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-blood-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
