"use client";

import { Calendar, Clock, MapPin, Flame } from "lucide-react";

const timelineEvents = [
  {
    date: "5th February",
    title: "Gates Closed",
    description: "Registrations are closed. The unworthy shall forever be locked outside the Realm.",
    icon: Clock,
    status: "deadline",
  },
  {
    date: "16th February",
    title: "The First Culling",
    description: "Online Prelims commence. Digital trials to separate the weak from the strong.",
    icon: Calendar,
    status: "upcoming",
  },
  {
    date: "20th February",
    title: "The Final Hunt",
    description: "Survivors gather at IIIT Bhagalpur Campus. The crown awaits its rightful claimant.",
    icon: MapPin,
    status: "main",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative py-20 md:py-32 overflow-hidden bg-black">
      {/* Background - horror enhanced */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blood-red/5 to-black" />
      
      {/* Grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 text-shadow-subtle">
            <span className="text-foreground">EVENT</span>
            <span className="block text-blood-red mt-2">TIMELINE</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-base uppercase tracking-widest mb-4 font-mono">
            Mark these important dates
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-blood-red to-transparent mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blood-red via-blood-red-dark to-blood-red md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.title}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 bg-background border-2 border-blood-red flex items-center justify-center z-10">
                    <Icon
                      className={`w-5 h-5 ${
                        event.status === "main" ? "text-ember-orange" : "text-blood-red"
                      }`}
                    />
                  </div>

                  {/* Content - Mobile */}
                  <div className="ml-16 md:hidden flex-1">
                    <div
                      className={`p-6 border ${
                        event.status === "main"
                          ? "bg-blood-red/10 border-blood-red/50"
                          : "bg-card border-border"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Flame
                          className={`w-4 h-4 ${
                            event.status === "main" ? "text-ember-orange" : "text-blood-red"
                          }`}
                        />
                        <span
                          className={`text-sm font-bold uppercase tracking-widest ${
                            event.status === "main" ? "text-ember-orange" : "text-blood-red"
                          }`}
                        >
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Content - Desktop */}
                  <div
                    className={`hidden md:block w-[calc(50%-3rem)] ${isEven ? "pr-8 text-right" : "pl-8"}`}
                  >
                    <div
                      className={`p-6 md:p-8 border ${
                        event.status === "main"
                          ? "bg-blood-red/10 border-blood-red/50"
                          : "bg-card border-border"
                      }`}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? "justify-end" : ""}`}>
                        <Flame
                          className={`w-4 h-4 ${
                            event.status === "main" ? "text-ember-orange" : "text-blood-red"
                          } ${isEven ? "order-2" : ""}`}
                        />
                        <span
                          className={`text-sm font-bold uppercase tracking-widest ${
                            event.status === "main" ? "text-ember-orange" : "text-blood-red"
                          }`}
                        >
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Venue highlight */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border">
            <MapPin className="w-5 h-5 text-blood-red" />
            <span className="text-foreground font-bold uppercase tracking-wider">
              IIIT Bhagalpur Campus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
