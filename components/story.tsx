"use client";

import { useEffect, useState } from "react";
import { Lock, Skull, EyeOff, Activity, Eye, BookOpen } from "lucide-react";

interface StoryChapter {
  id: string;
  title: string;
  content: string[];
  summary: string[];
  releaseDate: Date;
}

const storyChapters: StoryChapter[] = [
  {
    id: "00",
    title: "Prologue: The Ashen Age",
    releaseDate: new Date("2026-01-28T06:30:00Z"),
    summary: [
      `The realm called it peace, but history had stopped moving forward.`,
      `Wars continued without consequence, and power shifted without change.`,
      `To prevent collapse, the six Houses upheld a shared myth–altered, weaponized, and eventually dismissed.`,
      `By the time the story was forgotten, stagnation had already taken hold.`,
      `The final warning was never meant to be remembered.`,
    ],
    content: [
      `The elders called it peace, but no one who lived through it used that word aloud.`,
      `Wars did not end. They simply lost urgency. Battles were fought, banners fell, kings were replaced – yet nothing truly changed.`,
      `History stopped moving forward.`,
      `To prevent another collapse, the six Houses agreed on something unspoken: a story.`,
      `Each House recorded it differently.`,
      `Shaped it to suit pride.`,
      `Guilt.`,
      `Their version of truth.`,
      `Children were told it as myth.`,
      `Rivals were warned with it as threat.`,
      `Ambition was restrained by it as convenience.`,
      `Over time, the story became harmless.`,
      `A tool.`,
      `A lie.`,
      `No one noticed when the ash began to fall – not from fire, but from stagnation.`,
      `And no one remembered the final line of the story.`,
      `Because it was never meant to be read aloud.`,
    ],
  },
  {
    id: "01",
    title: "When the Sky Turned Pink",
    releaseDate: new Date("2026-01-31T12:30:00Z"),
    summary: [
      `An unnatural pink sky descends as a detached voice declares the world dull.`,
      `Bullets rain from above–random across the realm, but devastatingly precise at the central junction of the six territories.`,
      `Entire cities and armies are erased in minutes.`,
      `When the killing ends, invisible borders seal the Houses apart.`,
      `A silent rule becomes clear: the elders are dead. Only the young remain.`,
      `The world has not been punished.`,
      `It has been prepared.`,
    ],
    content: [
      // CHAPTER I – WHEN THE SKY TURNED PINK

      `Pink clouds covered the sky.`,
      `The silence came first.`,
      `No birds.`,
      `No wind.`,
      `The banners above the city walls hung limp, like the world had forgotten how to breathe.`,
      `Someone near the wall tilted their head.`,
      `“This isn’t weather.”`,
      `The sun rose wrong–thin, pale.`,
      `Shadows stretched too far.`,
      `Then the voice arrived.`,
      `Calm.`,
      `Detached.`,
      `Bored.`,
      `“This world has grown dull.”`,
      `The first bullet fell straight down and split a councilor in half.`,
      `Then the sky emptied itself.`,
      `Bullets fell everywhere–streets, rooftops, markets.`,
      `A young Baratheon dragged someone behind a stone barrier as bodies collapsed around them.`,
      `Nearby, a Lannister watched a noble die and felt nothing.`,
      `Someone screamed and did not stop.`,
      `But at the center of the realm–where all six territories met–the sound changed.`,
      `There, the bullets did not scatter.`,
      `They fell in solid sheets, erasing everything.`,
      `Cities vanished.`,
      `Armies folded inward.`,
      `The ground itself broke open.`,
      `From the wall, a Stark watched the horizon glow–and then disappear.`,
      `“A battlefield must be cleared.”`,
      `When the rain stopped, the borders rose.`,
      `Invisible.`,
      `Absolute.`,
      `The dead lay everywhere.`,
      `Only the young were still breathing.`,
      `No one said it out loud.`,
      `Not yet.`,
    ],
  },
  {
    id: "02",
    title: "Fire and Ice",
    releaseDate: new Date("2026-02-04T06:30:00Z"),
    summary: [
      `coming soon...`,
    ],
    content: [
      `coming soon...`,
    ],
  },
  {
    id: "03",
    title: "Gold, Honor, and Blood",
    releaseDate: new Date("2026-02-07T06:30:00Z"),
    summary: [
      `coming soon...`,
    ],
    content: [
      `coming soon...`,
    ],
  },
  {
    id: "04",
    title: "The Shattering of Balance",
    releaseDate: new Date("2026-02-11T06:30:00Z"),
    summary: [
      `coming soon...`,
    ],
    content: [
      `coming soon...`,
    ],
  },
  {
    id: "05",
    title: "Love, Loyalty, and Betrayal",
    releaseDate: new Date("2026-02-14T06:30:00Z"),
    summary: [
      `coming soon...`,
    ],
    content: [
      `coming soon...`,
    ],
  },
  {
    id: "06",
    title: "The Hunt Begins",
    releaseDate: new Date("2026-02-18T06:30:00Z"),
    summary: [
      `coming soon...`,
    ],
    content: [
      `coming soon...`,
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
    <div className="mt-10 border-t border-red-950/50 pt-8 animate-pulse">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Activity className="w-3 h-3 text-red-600" />
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-red-700">
          Raven Watch
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
  const [viewModes, setViewModes] = useState<{
    [key: string]: "full" | "summary";
  }>({});

  const toggleViewMode = (chapterId: string) => {
    setViewModes((prev) => ({
      ...prev,
      [chapterId]: prev[chapterId] === "summary" ? "full" : "summary",
    }));
  };

  return (
    <section id="story" className="relative py-32 bg-black overflow-hidden">
      {/* Grain & vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black" />

      {/* Blood glow - enhanced horror */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blood-red/15 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-[400px] bg-blood-red-dark/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <header className="mb-40 text-left pl-0 md:pl-8 ml-4 md:ml-0">
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
            "History is written by those who endure. These are the chronicles of
            the Six Houses."
          </p>
        </header>

        {/* Chapters */}
        <div className="space-y-48">
          {storyChapters.map((chapter, index) => {
            const isReleased = now >= chapter.releaseDate;
            const isNext =
              !isReleased &&
              (index === 0 || now >= storyChapters[index - 1].releaseDate);
            const canShowMetadata = isReleased || isNext;
            const currentViewMode = viewModes[chapter.id] || "full";
            const displayContent =
              currentViewMode === "summary" ? chapter.summary : chapter.content;

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
                  {/* STATUS BAR */}
                  <div className="flex items-center justify-between gap-4 mb-8 -mt-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={`h-[1px] flex-grow transition-colors duration-700 ${
                          isReleased ? "bg-red-900/40" : "bg-zinc-800"
                        }`}
                      />
                      <span className="text-[10px] mb-12 font-mono uppercase tracking-widest text-zinc-600">
                        {isReleased ? "Verified Chronicle" : "Sealed Record"}
                      </span>
                      {isReleased ? (
                        <Skull className="w-3 h-3 text-red-900" />
                      ) : (
                        <EyeOff className="w-3 h-3 text-zinc-800" />
                      )}
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3
                    className={`pl-6 text-4xl md:text-5xl font-serif tracking-tight mb-12 ${
                      isReleased ? "text-zinc-100" : "text-zinc-700"
                    }`}
                  >
                    {canShowMetadata ? chapter.title : "REDACTED // RESTRICTED"}
                  </h3>

                  {/* CONTENT */}
                  {isReleased ? (
                    <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                      <div className="text-[10px] font-mono text-red-900/60 uppercase leading-loose border-t border-red-950/30 pt-4 space-y-6">
                        <div>
                          Subject: {chapter.id} <br />
                          Status: Unlocked <br />
                          Mode:{" "}
                          {currentViewMode === "summary" ? "Summary" : "Full"}
                        </div>

                        {/* Toggle Buttons - Only on released chapters */}
                        {isReleased && (
                          <div className="flex gap-2 pt-4 border-t border-red-950/30">
                            <button
                              onClick={() => toggleViewMode(chapter.id)}
                              className={`flex items-center gap-1.5 px-2.5 py-1 border text-[9px] transition-all duration-300 ${
                                currentViewMode === "full"
                                  ? "bg-blood-red/20 border-blood-red/60 text-blood-red font-mono uppercase tracking-wider"
                                  : "bg-transparent border-zinc-700/30 text-zinc-500 hover:border-zinc-600/50 font-mono uppercase tracking-wider"
                              }`}
                            >
                              <BookOpen className="w-2.5 h-2.5" />
                              Full
                            </button>
                            <button
                              onClick={() => toggleViewMode(chapter.id)}
                              className={`flex items-center gap-1.5 px-2.5 py-1 border text-[9px] transition-all duration-300 ${
                                currentViewMode === "summary"
                                  ? "bg-blood-red/20 border-blood-red/60 text-blood-red font-mono uppercase tracking-wider"
                                  : "bg-transparent border-zinc-700/30 text-zinc-500 hover:border-zinc-600/50 font-mono uppercase tracking-wider"
                              }`}
                            >
                              <Eye className="w-2.5 h-2.5" />
                              Summary
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="space-y-8">
                        {displayContent.map((p, i) => (
                          <p
                            key={i}
                            className="text-lg md:text-xl leading-normal text-zinc-400 font-light selection:bg-red-900 selection:text-white"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-xl mx-auto text-center py-12 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
                      <Lock className="mx-auto mb-6 w-8 h-8 text-red-900" />
                      <p className="text-xs font-mono text-zinc-300 mb-1">
                        UNSWORN EYES DETECTED
                      </p>
                      <p className="text-[10px] font-mono text-zinc-400">
                        AWAITING THE APPOINTED HOUR:{" "}
                        {chapter.releaseDate.toLocaleDateString("en-GB")}
                      </p>
                      {isNext && (
                        <CountdownTimer releaseDate={chapter.releaseDate} />
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
