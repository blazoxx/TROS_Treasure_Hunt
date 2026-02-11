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
    releaseDate: new Date("2026-02-01T06:30:00Z"),
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
    // CHAPTER II – FIRE AND ICE
    summary: [
      `The killing pauses, but the danger does not.`,
      `As people flee from the destroyed center, bullets begin falling again–this time from the edges of the world, slowly pushing inward.`,
      `Distance proves meaningless as the realm starts to compress.`,
      `Some run harder, driven by panic and instinct.`,
      `Others stop, watch, and accept what they cannot outrun.`,
      `Fire burns itself chasing survival.`,
      `Ice waits, counting time and loss.`,
      `At the scar where the world was erased, land begins to rise and an island takes shape.`,
      `Near the borders, strange structures appear, observing without explanation.`,
      `Both running and waiting begin to feel like mistakes.`,
    ],
    content: [
      `The killing stopped.`,
      `The sky did not.`,
      `Pink clouds stayed where they were, unmoving.`,
      `The silence afterward pressed harder than the bullets.`,

      `Bodies lay where authority once stood.`,
      `Councils were empty.`,
      `Command tents collapsed without commanders inside them.`,
      `Only the young moved through the ruins.`,

      `No one needed to say it.`,
      `The elders were gone.`,

      `At first, people ran away from the center.`,
      `As far as their legs could carry them.`,
      `Distance felt like safety.`,

      `Then the sound returned.`,
      `Not overhead.`,
      `Behind them.`,

      `Far away, bullets began falling again.`,
      `Not everywhere.`,
      `Only at the edges.`,

      `The outer lands broke first.`,
      `Villages disappeared.`,
      `Fields folded.`,
      `The world did not explode.`,
      `It compressed.`,

      `Some panicked.`,
      `They ran harder.`,
      `They ran faster.`,
      `Fire burned itself trying to outrun the sky.`,

      `At the borders, anger took over.`,
      `People charged invisible lines.`,
      `Bodies snapped back.`,
      `Fists hit air.`,
      `Weapons hit nothing.`,
      `Nothing moved except fear.`,

      `Others stopped running.`,
      `They watched instead.`,
      `They counted the dead.`,
      `Counted the living.`,
      `Counted how close the sound had come.`,

      `The bullets were not random anymore.`,
      `They were moving.`,
      `Slowly.`,
      `Inward.`,

      `At the place where the world had been erased, the ground shifted.`,
      `Stone surfaced.`,
      `Water pulled away.`,
      `Land rose from the scar.`,

      `An island began to take shape.`,
      `No paths led to it.`,
      `Nothing invited them in.`,

      `Near the inner borders, structures appeared.`,
      `Cold.`,
      `Seamless.`,
      `Watching.`,

      `A woman knelt beside one and went still.`,
      `“I’ve seen this,” she said.`,
      `Her name was Miren.`,

      `No one asked her to explain.`,

      `Far away, the sound crept closer.`,
      `Fire kept running.`,
      `Ice stayed where it was.`,

      `Neither knew which choice would last longer.`,
    ],
  },
  {
    id: "03",
    title: "Gold, Honor, and Blood",
    releaseDate: new Date("2026-02-07T06:30:00Z"),
    summary: [
      `As the unseen force continues to move inward, the world fractures in different ways.`,
      `In some lands, gold is offered and abandoned.`,
      `In others, people stand their ground and die to buy time.`,
      `Elsewhere, hunger turns into violence, and blood replaces order.`,
      `Across distant regions, survival reshapes people—some rise through fear, others fall through mercy.`,
      `Near the coast, a name is carved into the moment through violence, and defiance is aimed at the gods.`,
      `Far from the chaos, a single voice recognizes what has begun.`,
      `Balance has broken.`,
    ],
    // CHAPTER III – GOLD, HONOR, AND BLOOD
    content: [
      `The sound kept moving.`,
      `Slow.`,
      `Unstoppable.`,

      `Those who ran felt it at their backs.`,
      `Those who waited felt it in their chests.`,

      `What followed was not one story.`,

      `In the west, caravans overturned as people fled the shrinking edge of the world.`,
      `Chests split open.`,
      `Gold spilled onto the road.`,

      `“Take it,” a man cried, pressing coins into shaking hands.`,
      `“All of it.”`,
      `“Just get us out.”`,

      `No one followed him.`,
      `When the sound reached the hills,`,
      `gold was the first thing left behind.`,

      `Far to the north, a village did not run.`,

      `They formed a line instead.`,
      `Not with banners.`,
      `With bodies.`,

      `A young man stood at the front.`,
      `“Go,” he told the others.`,
      `“Don’t look back.”`,

      `They listened.`,

      `When the sound came closer,`,
      `he stayed where he was.`,

      `By the time the children reached the trees,`,
      `there was nothing left to see.`,

      `In the south, food became a reason.`,
      `Then an excuse.`,

      `Crates were dragged into the open.`,
      `Hands reached.`,
      `Someone reached twice.`,

      `A blade flashed.`,
      `Then another.`,

      `Blood hit the ground.`,
      `And did not stop.`,

      `Someone tried to step between them.`,
      `He took the strike meant for another.`,
      `Then a second.`,

      `When he fell,`,
      `no one filled the space he left behind.`,

      `Near the coast, where the ground still trembled,`,
      `a girl knelt and wiped blood from her hands.`,
      `Not hers.`,

      `A man lay on his back nearby, choking.`,
      `His fingers clawed at her boot.`,

      `He grabbed at her ankle.`,
      `“Who –”`,
      `He coughed.`,
      `“Who are you?”`,

      `She looked at him.`,

      `Her boot came down.`,

      `“D.”`,

      `It came down again.`,

      `“A.”`,

      `Again.`,

      `“M.”`,

      `Again.`,

      `“I.”`,

      `One last time.`,

      `She leaned closer.`,
      `So only the dying could hear.`,

      `“Tell the gods,” she said.`,
      `“I’m coming.”`,

      `Elsewhere, far from the noise,`,
      `a woman closed a book.`,

      `She spoke once.`,
      `Quietly.`,

      `Miren said:`,
      `“This is where balance breaks.”`,
    ],
  },
  {
    id: "04",
    title: "The Shattering of Balance",
    releaseDate: new Date("2026-02-11T06:30:00Z"),
    summary: [
      `The bullets did not just kill -- they erased hierarchy.`,
      `Titles, bloodlines, and rank vanished beneath the same sky.`,
      `With the old order shattered, a vacuum formed.`,

      `In the east, Aric steps forward not as heir, but as direction.`,
      `In the west, Kellan builds structure where fear once ruled.`,
      `Near the coast, Dami becomes inevitability rather than choice.`,

      `Power no longer belongs to birth, but to certainty.`,
      `Followers gather not out of loyalty--but need.`,

      `Only Miren sees the pattern forming across all paths.`,
      `And as the island rises higher, the new balance begins to tilt.`
    ],
    // CHAPTER IV — THE SHATTERING OF BALANCE
    content: [
      `The bullets did more than kill.`,
      `They erased rank.`,

      `Generals fell beside farmers.`,
      `Heirs died beside servants.`,
      `High tables were emptied as easily as street corners.`,

      `Titles meant nothing when the sky did not read them.`,

      `When the sound finally stopped,`,
      `the old order did not return.`,

      `It lay in pieces.`,

      `And in its absence,`,
      `people looked for something new to stand behind.`,

      `Without the sky deciding who lived,`,
      `they began deciding it themselves.`,

      `In the east, Aric did not claim rule.`,
      `He simply refused to hesitate.`,

      `When a scouting party refused to approach the rising land,`,
      `he walked first.`,

      `Not fast.`,
      `Not dramatically.`,

      `Just forward.`,

      `They followed because standing still felt worse.`,

      `Far away, in lands where smoke still lingered,`,
      `Kellan did not speak of the island.`,

      `He rebuilt structure.`,
      `Watch rotations.`,
      `Food distribution.`,
      `Order without ceremony.`,

      `“We move when it is time,” he said.`,
      `“Not when we are afraid.”`,

      `He did not know the island’s shape.`,
      `Only that movement without foundation kills faster than bullets.`,

      `Near the coast, Dami did not gather a crowd.`,
      `She gathered momentum.`,

      `Two factions clashed over territory that would not matter tomorrow.`,
      `She chose neither.`,

      `She ended it.`,

      `Afterward, no one asked what her plan was.`,
      `They only asked where she was going.`,

      `“Toward the center,” she said.`,

      `The ridge appeared at dusk.`,
      `Fractured stone rising from retreating water.`,

      `Aric reached it alone.`,

      `He stepped onto the exposed rock.`,
      `It was warm beneath his boots.`,

      `Not from the sun.`,

      `He looked up.`,

      `And saw her.`,

      `Dami stood across the fractured span.`,
      `Wind between them.`,
      `Distance small enough to cross.`,
      `Large enough to matter.`,

      `“You walk without knowing what waits,” she said.`,

      `“You walk knowing it will,” he replied.`,

      `Neither smiled.`,
      `Neither stepped back.`,

      `Behind them, their followers stopped at the edge.`,
      `No one crossed.`,

      `Far from the ridge,`,
      `Miren stood where three paths converged.`,

      `She did not move toward the island.`,
      `She did not move away.`,

      `She watched Aric step forward.`,
      `She watched Dami hold her ground.`,
      `She watched Kellan remain where structure still held.`,

      `Patterns aligned in her mind.`,
      `Not prophecy.`,
      `Memory.`,

      `The stone at the peak shifted.`,
      `Just slightly.`,

      `Miren turned a page.`,
    ],
  },
  {
    id: "05",
    title: "Love, Loyalty, and Betrayal",
    releaseDate: new Date("2026-02-14T06:30:00Z"),
    summary: [`coming soon...`],
    content: [`coming soon...`],
  },
  {
    id: "06",
    title: "The Hunt Begins",
    releaseDate: new Date("2026-02-18T06:30:00Z"),
    summary: [`coming soon...`],
    content: [`coming soon...`],
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
    <div className="mt-10 border-t border-red-800/60 pt-8 animate-pulse">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Activity className="w-3 h-3 text-red-300" />
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-red-300">
          Raven Watch
        </p>
      </div>
      <div className="flex justify-center gap-8 text-center">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="w-12">
            <div className="text-2xl font-mono font-bold text-zinc-100 tracking-tighter">
              {String(value).padStart(2, "0")}
            </div>
            <p className="text-[9px] uppercase font-mono text-red-400/90">
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
                <div className="absolute -top-16 -left-12 select-none pointer-events-none opacity-[0.03] md:opacity-[0.03] opacity-[0.12] group-hover:opacity-[0.07] transition-opacity">
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
                      <div className="text-[10px] font-mono text-red-500/90 uppercase leading-loose border-t border-red-900/50 pt-4 space-y-6">
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
                            className="text-lg md:text-xl leading-normal text-zinc-200 font-light selection:bg-red-900 selection:text-white"
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
