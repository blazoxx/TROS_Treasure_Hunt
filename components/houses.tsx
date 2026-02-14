"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Lock, ShieldAlert } from "lucide-react";

interface House {
  name: string;
  motto: string;
  lore: string;
  sigil: string;
  banner: string;
  threatLevel: string;
  status: string;
}

const houses: House[] = [
  {
    name: "House Targaryen",
    motto: "Fire and Blood",
    lore: "Born from volcanic fury, House Targaryen does not conquer—they consume. The bloodline remembers the beasts of nightmare. Every Targaryen carries an ember of destruction, waiting to ignite the world once more.",
    sigil: "/sigil/targaryen.png",
    banner: "https://i.pinimg.com/736x/ab/c9/d4/abc9d45f14d88b1df3d77f7b64b85a5e.jpg",
    threatLevel: "EXTREME",
    status: "ACTIVE_THREAT",
  },
  {
    name: "House Stark",
    motto: "Winter Is Coming",
    lore: "In the frozen north, House Stark endures where lesser men perish. Their honor is colder than the ice fields they guard. Unbreakable even unto death, their ancient blades sing songs of vengeance.",
    sigil: "/sigil/starks.png",
    banner: "https://i.pinimg.com/736x/b7/df/ea/b7dfea94b12f1cab1d3fce80ca09b5c9.jpg",
    threatLevel: "HIGH",
    status: "DORMANT_WOLF",
  },
  {
    name: "House Lannister",
    motto: "A Lannister Always Pays His Debts",
    lore: "Gold flows through Casterly Rock like blood. Valor is secondary to coin. Their enemies vanish into lightless dungeons; their rivals wake with golden daggers in their backs.",
    sigil: "/sigil/lannister.png",
    banner: "https://i.pinimg.com/736x/8e/34/1c/8e341c1d90be66eb8e56be49dfe4b4e1.jpg",
    threatLevel: "HIGH",
    status: "MANIPULATION_ACTIVE",
  },
  {
    name: "House Baratheon",
    motto: "Ours Is The Fury",
    lore: "Forged in battle and tempered by rage. They do not scheme—they crush. Unrelenting fury is their primary weapon, a storm of violence that has left the realm scarred.",
    sigil: "/sigil/baratheon1.png",
    banner: "https://i.pinimg.com/736x/20/fd/8b/20fd8b8b8aff1e393524d63b92e88b81.jpg",
    threatLevel: "SEVERE",
    status: "CRUSH_SEQUENCE",
  },
  {
    name: "House Tyrell",
    motto: "Growing Strong",
    lore: "The rose blooms beautifully while its thorns draw blood. Gardens hide poison; feasts conceal daggers. They have mastered appearing harmless while strangling rivals in their sleep.",
    sigil: "/sigil/tyrell.png",
    banner: "https://i.pinimg.com/736x/74/bf/a2/74bfa2f2ea9baa0e2e6d6b8f79cdf7ab.jpg",
    threatLevel: "MODERATE",
    status: "INFILTRATED",
  },
  {
    name: "House Greyjoy",
    motto: "We Do Not Sow",
    lore: "From the drowned isles, they take without asking. They embrace chaos as divine will. Their longships have ravaged every coast, leaving nothing but salt and iron in their wake.",
    sigil: "/sigil/greyjoy.png",
    banner: "https://i.pinimg.com/736x/a8/b9/43/a8b943b1de5e2b8702f0e4bf27bfeede.jpg",
    threatLevel: "VOLATILE",
    status: "REAVING_PROTOCOL",
  },
];

const HOUSES_RELEASE_DATE = new Date("2026-02-17T06:30:00Z");

function CountdownTimer({ releaseDate }: { releaseDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const update = () => {
      const diff = releaseDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [releaseDate]);

  if (!timeLeft) return null;

  return (
    <div className="mt-8 border-t border-red-950/40 pt-8 animate-pulse">
      <div className="flex justify-center gap-6">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="text-center">
            <div className="text-2xl font-mono font-bold text-zinc-100">
              {String(value).padStart(2, "0")}
            </div>
            <p className="text-[9px] uppercase font-mono text-red-900">{label}</p>
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

  return (
    <section id="houses" className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-zinc-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="mb-32 border-l-4 border-red-950 pl-8">
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="w-4 h-4 text-red-700 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-red-900">
              High Council Clearance
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif italic text-zinc-100 tracking-tighter leading-none mb-6">
            The <span className="text-red-900 drop-shadow-[0_0_15px_rgba(153,27,27,0.4)]">Great</span> Houses
          </h2>
          <p className="max-w-md text-sm font-mono text-zinc-500 italic">
            Allegiance is a death sentence. Choose yours carefully.
          </p>
        </header>

        {!isReleased ? (
          <div className="flex flex-col items-center justify-center py-20 border border-white/5 bg-black/40 backdrop-blur-md">
            <Lock className="w-16 h-16 text-red-950 mb-6 animate-bounce" />
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-zinc-500 mb-2">
              System Locked
            </p>
            <h3 className="text-xl font-serif text-zinc-100 mb-8 italic px-4 text-center">
              The game begins when winter arrives. The worthy shall be revealed.
            </h3>
            <CountdownTimer releaseDate={HOUSES_RELEASE_DATE} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {houses.map((house) => (
              <article
                key={house.name}
                className="group relative bg-zinc-950 border border-zinc-900 hover:border-red-950/50 transition-all duration-700 overflow-hidden p-8"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-1000">
                  <Image
                    src={house.banner}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>

                {/* Metadata */}
                <div className="relative z-10 flex justify-between items-start mb-12">
                  <div className="space-y-1">
                    <p className="text-[9px] font-mono text-zinc-600 uppercase">Threat</p>
                    <p className="text-[10px] font-mono text-red-700 font-bold tracking-widest">
                      {house.threatLevel}
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-[9px] font-mono text-zinc-600 uppercase">Status</p>
                    <p className="text-[10px] font-mono text-zinc-400">{house.status}</p>
                  </div>
                </div>

                {/* Sigil */}
                <div className="relative z-10 flex justify-center mb-10">
                  <div className="relative w-24 h-24 border border-zinc-800 bg-black/60 group-hover:border-red-900 transition-colors flex items-center justify-center">
                    <Image
                      src={house.sigil}
                      alt={house.name}
                      width={64}
                      height={64}
                      className="object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all invert"
                      unoptimized
                    />
                    <div className="absolute inset-0 w-full h-[1px] bg-red-900/50 top-1/2 animate-scan pointer-events-none" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif text-zinc-100 italic group-hover:text-red-700 transition-colors">
                      {house.name}
                    </h3>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                      "{house.motto}"
                    </p>
                  </div>

                  <div className="h-px w-12 bg-red-950 mx-auto" />

                  <p className="text-xs text-zinc-400 font-light leading-relaxed text-center group-hover:text-zinc-200 transition-colors">
                    {house.lore}
                  </p>
                </div>

                {/* Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-zinc-800 group-hover:border-red-900 transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-zinc-800 group-hover:border-red-900 transition-colors" />
              </article>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-48px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(48px);
            opacity: 0;
          }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
}