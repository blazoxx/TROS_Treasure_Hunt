"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Lock } from "lucide-react";

interface House {
  name: string;
  motto: string;
  lore: string;
  sigil: string;
  banner: string;
  color: string;
  borderColor: string;
}

const houses: House[] = [
  {
    name: "House Targaryen",
    motto: "Fire and Blood",
    lore: "Born from the volcanic fury of Dragonstone, House Targaryen does not conquer—they consume. Their ancestors rode beasts of nightmare, raining fire upon those who dared resist. Though the dragons sleep, the bloodline remembers. Every Targaryen carries within them the ember of destruction, waiting to ignite.",
    sigil: "/sigil/targaryen.png",
    banner: "https://i.pinimg.com/736x/ab/c9/d4/abc9d45f14d88b1df3d77f7b64b85a5e.jpg",
    color: "text-blood-red",
    borderColor: "border-blood-red/50",
  },
  {
    name: "House Stark",
    motto: "Winter Is Coming",
    lore: "In the frozen north, where lesser men perish, House Stark endures. Their blood runs cold, their honor colder still. For eight thousand years, they have guarded the realm against the darkness beyond the wall. A Stark's word is iron, unbreakable even unto death.",
    sigil: "/sigil/starks.png",
    banner: "https://i.pinimg.com/736x/b7/df/ea/b7dfea94b12f1cab1d3fce80ca09b5c9.jpg",
    color: "text-ice-blue",
    borderColor: "border-ice-blue/50",
  },
  {
    name: "House Lannister",
    motto: "A Lannister Always Pays His Debts",
    lore: "Gold flows through Casterly Rock like blood through veins. House Lannister has learned that crowns are won not through valor but through coin. Their enemies disappear into dungeons, their rivals wake with golden daggers in their backs.",
    sigil: "/sigil/lannister.png",
    banner: "https://i.pinimg.com/736x/8e/34/1c/8e341c1d90be66eb8e56be49dfe4b4e1.jpg",
    color: "text-gold",
    borderColor: "border-gold/50",
  },
  {
    name: "House Baratheon",
    motto: "Ours Is The Fury",
    lore: "House Baratheon was forged in battle and tempered by rage. They do not scheme in shadows—they meet their enemies in the open field and crush them beneath the weight of their wrath. Pure, unrelenting fury is their weapon, and it has never failed them.",
    sigil: "/sigil/baratheon1.png",
    banner: "https://i.pinimg.com/736x/20/fd/8b/20fd8b8b8aff1e393524d63b92e88b81.jpg",
    color: "text-ember-orange",
    borderColor: "border-ember-orange/50",
  },
  {
    name: "House Tyrell",
    motto: "Growing Strong",
    lore: "The rose blooms beautifully while its thorns draw blood. House Tyrell has mastered the art of appearing harmless while manipulating the entire realm. Their gardens hide poison, their feasts conceal daggers, and their smiles mask ambitions darker than any scheme.",
    sigil: "/sigil/tyrell.png",
    banner: "https://i.pinimg.com/736x/74/bf/a2/74bfa2f2ea9baa0e2e6d6b8f79cdf7ab.jpg",
    color: "text-rose-pink",
    borderColor: "border-rose-pink/50",
  },
  {
    name: "House Greyjoy",
    motto: "We Do Not Sow",
    lore: "From the drowned isles, House Greyjoy raids without mercy and takes without asking. They worship the Drowned God, embracing chaos as divine will. Their longships have ravaged every coast, their reavers have burned every port.",
    sigil: "/sigil/greyjoy.png",
    banner: "https://i.pinimg.com/736x/a8/b9/43/a8b943b1de5e2b8702f0e4bf27bfeede.jpg",
    color: "text-sea-teal",
    borderColor: "border-sea-teal/50",
  },
];

const HOUSES_RELEASE_DATE = new Date("2026-02-15T00:00:00Z");

function CountdownTimer({ releaseDate }: { releaseDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = releaseDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [releaseDate]);

  if (!timeLeft) return null;

  return (
    <div className="mt-8 pt-6 border-t border-blood-red/30 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-blood-red mb-4">
        Coming Soon
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Seconds" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-lg sm:text-xl font-serif font-bold mb-1 text-blood-red">
              {String(item.value).padStart(2, "0")}
            </div>
            <p className="text-xs uppercase tracking-wide text-foreground/40">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Houses() {
  const [isReleased, setIsReleased] = useState(false);

  useEffect(() => {
    setIsReleased(new Date() >= HOUSES_RELEASE_DATE);
  }, []);

  if (!isReleased) {
    return (
      <section id="houses" className="relative py-20 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-card to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 text-shadow-subtle">
              <span className="text-foreground">HOUSES OF</span>
              <span className="block text-blood-red mt-2">THE REALM</span>
            </h2>
            <p className="text-foreground/60 text-sm md:text-base uppercase tracking-widest mb-4">
              Reveal after the Preliminaries
            </p>
            <div className="w-32 h-px bg-linear-to-r from-transparent via-blood-red to-transparent mx-auto" />
          </div>

          {/* Locked state */}
          <div className="flex flex-col items-center justify-center py-20">
            <Lock className="w-20 h-20 text-blood-red/40 mb-6" />
            <p className="text-lg uppercase tracking-[0.2em] text-foreground/60 mb-2">
              The Houses are Hidden
            </p>
            <p className="text-sm text-foreground/40 mb-8 text-center max-w-md">
              After the preliminaries conclude on February 15th, the Six Houses
              will be revealed.
            </p>
            <CountdownTimer releaseDate={HOUSES_RELEASE_DATE} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="houses" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-card to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 text-shadow-subtle">
            <span className="text-foreground">HOUSES OF</span>
            <span className="block text-blood-red mt-2">THE REALM</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-base uppercase tracking-widest mb-4">
            Choose your allegiance wisely
          </p>
          <div className="w-32 h-px bg-linear-to-r from-transparent via-blood-red to-transparent mx-auto" />
        </div>

        {/* Houses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {houses.map((house) => {
            return (
              <article
                key={house.name}
                className={`group relative overflow-hidden border ${house.borderColor} hover:border-opacity-100 transition-all duration-300`}
              >
                {/* Banner Background */}
                <div className="absolute inset-0">
                  <Image
                    src={house.banner || "/placeholder.svg"}
                    alt={`${house.name} banner`}
                    fill
                    className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-background/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8">
                  {/* Sigil Circle */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full border-2 ${house.borderColor} bg-background/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
                    >
                      <Image
                        src={house.sigil || "/placeholder.svg"}
                        alt={`${house.name} sigil`}
                        width={80}
                        height={80}
                        className="object-contain p-2"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* House name */}
                  <h3
                    className={`text-xl md:text-2xl font-serif text-center mb-2 ${house.color}`}
                  >
                    {house.name}
                  </h3>

                  {/* Motto */}
                  <p className="text-center text-foreground/60 text-sm uppercase tracking-widest mb-4 italic">
                    {`"${house.motto}"`}
                  </p>

                  {/* Divider */}
                  <div
                    className={`w-16 h-px mx-auto mb-4 bg-linear-to-r from-transparent ${house.color.replace("text-", "via-")} to-transparent opacity-50`}
                  />

                  {/* Lore */}
                  <p className="text-foreground/70 text-sm leading-relaxed text-center">
                    {house.lore}
                  </p>
                </div>

                {/* Corner decorations */}
                <div
                  className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${house.borderColor}`}
                />
                <div
                  className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 ${house.borderColor}`}
                />
                <div
                  className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 ${house.borderColor}`}
                />
                <div
                  className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${house.borderColor}`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
