
"use client";

import { useEffect, useState } from "react";
import { Lock, Skull, EyeOff, Activity } from "lucide-react";

interface StoryChapter {
  id: string;
  title: string;
  content: string[];
  releaseDate: Date;
}

const storyChapters: StoryChapter[] = [
  {
    id: "00",
    title: "Prologue: The Ashen Age",
    releaseDate: new Date("2026-01-28T00:00:00Z"),
    content: [
      `The elders called it peace, but no one who lived through it used that word aloud.`,
      `Wars did not end. They simply lost urgency. Battles were fought, banners fell, kings were replaced - yet nothing truly changed.`,
      `History stopped moving forward.`,
      `To prevent another collapse, the six Houses agreed on something unspoken: a story. Each House recorded it differently, shaped it to suit their pride, their guilt, their version of truth.`,
      `Children were told it as myth. Rivals were warned with it as threat. Ambition was restrained by it as convenience.`,
      `Over time, the story became harmless. A tool. A lie.`,
      `No one noticed when the ash began to fall - not from fire, but from stagnation. And no one remembered the final line of the story.`,
      `Because it was never meant to be read aloud.`,
    ],
  },
  {
    id: "01",
    title: "Rise of the Six Houses",
    releaseDate: new Date("2026-01-31T00:00:00Z"),
    content: [
      `From the ashes of the old kingdom, six Houses clawed their way to power. Each claimed divine right, each believed their blood worthier than the rest.`,
      `House Targaryen rose from the volcanic south, their banner soaked in dragonfire, their legacy written in destruction. House Stark emerged from the frozen wastes, their honor forged in ice and suffering.`,
    ],
  },
  {
    id: "02",
    title: "Fire and Ice Divide the Realm",
    releaseDate: new Date("2026-02-04T00:00:00Z"),
    content: [
      `The first great schism tore the Realm in two. In the south, House Targaryen unleashed their fury, burning cities that refused to kneel.`,
      `In the north, House Stark rallied the frozen banners, their ancestral blades singing songs of vengeance in the bitter wind.`,
    ],
  },
];

function CountdownTimer({ releaseDate }: { releaseDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<{
    d: number;
    h: number;
    m: number;
    s: number;
  } | null>(null);

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
    <div className="mt-8 border-t border-red-950/50 pt-8 animate-pulse">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Activity className="w-3 h-3 text-red-600" />
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-red-700">
          Manifesting Sequence
        </p>
      </div>
      <div className="flex justify-center gap-8 text-center">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="w-12">
            <div className="text-2xl font-mono font-bold text-zinc-100 tracking-tighter">
              {String(value).padStart(2, "0")}
            </div>
            <p className="text-[9px] uppercase font-mono text-red-900/80">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Story() {
  const now = new Date();

  return (
    <section
      id="story"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Grain & vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black" />

      {/* Blood glow - enhanced horror */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blood-red/15 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-[400px] bg-blood-red-dark/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <header className="mb-40 text-left border-l-2 border-blood-red-dark pl-8">
          <span className="block text-xs font-mono uppercase tracking-[0.6em] text-blood-red mb-2">
            Chronicle Archive // 044
          </span>
          <h2 className="text-6xl md:text-8xl font-serif italic text-zinc-100 tracking-tighter leading-none mb-6">
            The{" "}
            <span className="text-blood-red underline decoration-blood-red-dark underline-offset-8">
              Ancient
            </span>{" "}
            Testament
          </h2>
          <p className="max-w-md text-sm font-mono text-zinc-500 italic leading-relaxed">
            "History is written by those who endure. These are the chronicles of the Six Houses."
          </p>
        </header>

        {/* Chapters */}
        <div className="space-y-48">
          {storyChapters.map((chapter, index) => {
            const isReleased = now >= chapter.releaseDate;
            const isNext =
              !isReleased &&
              (index === 0 ||
                now >= storyChapters[index - 1].releaseDate);
            const canShowMetadata = isReleased || isNext;

            return (
              <article
                key={chapter.id}
                className={`relative group transition-opacity duration-1000 ${
                  isReleased ? "opacity-100" : "opacity-40"
                }`}
              >
                {/* Giant ID */}
                <div className="absolute -top-16 -left-12 select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                  <span className="text-[14rem] font-serif font-black text-white italic">
                    {chapter.id}
                  </span>
                </div>

                <div className="relative">
                  {/* STATUS BAR — MOVED UP */}
                  <div className="flex items-center gap-4 mb-8 -mt-6">
                    {/* ▲ changed */}
                    <div
                      className={`h-[1px] flex-grow transition-colors duration-700 ${
                        isReleased ? "bg-red-900/40" : "bg-zinc-800"
                      }`}
                    />
                    <span className="text-[10px] mb-12 font-mono uppercase tracking-widest text-zinc-600">
                      {isReleased ? "Verified Record" : "Data Corrupted"}
                    </span>
                    {isReleased ? (
                      <Skull className="w-3 h-3 text-red-900" />
                    ) : (
                      <EyeOff className="w-3 h-3 text-zinc-800" />
                    )}
                  </div>

                  {/* TITLE — LEFT PADDING ADDED */}
                  <h3
                    className={`pl-6 text-4xl md:text-5xl font-serif tracking-tight mb-12 ${
                      isReleased ? "text-zinc-100" : "text-zinc-700"
                    }`}
                  >
                    {/* ▲ changed */}
                    {canShowMetadata
                      ? chapter.title
                      : "REDACTED // RESTRICTED"}
                  </h3>

                  {/* CONTENT */}
                  {isReleased ? (
                    <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                      <div className="text-[10px] font-mono text-red-900/60 uppercase leading-loose border-t border-red-950/30 pt-4">
                        Subject: {chapter.id} <br />
                        Status: Unlocked <br />
                        Location: Unknown
                      </div>
                      <div className="space-y-8">
                        {chapter.content.map((p, i) => (
                          <p
                            key={i}
                            className="text-lg md:text-xl leading-relaxed text-zinc-400 font-light selection:bg-red-900 selection:text-white"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-xl mx-auto text-center py-12 bg-black/20 border border-white/5 rounded-sm backdrop-blur-sm">
                      <Lock className="mx-auto mb-6 w-8 h-8 text-red-950" />
                      <p className="text-xs font-mono text-zinc-600 mb-1">
                        UNAUTHORIZED ACCESS DETECTED
                      </p>
                      <p className="text-[10px] font-mono text-zinc-700">
                        AWAITING TEMPORAL REALIGNMENT:{" "}
                        {chapter.releaseDate.toLocaleDateString()}
                      </p>
                      {isNext && (
                        <CountdownTimer
                          releaseDate={chapter.releaseDate}
                        />
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-60 py-20 border-t border-zinc-900 text-center">
        <div className="inline-block px-4 py-1 border border-red-900/30">
          <p className="text-[9px] font-mono tracking-[0.8em] text-red-900 uppercase">
            There is no escape from the ash.
          </p>
        </div>
      </footer>
    </section>
  );
}
