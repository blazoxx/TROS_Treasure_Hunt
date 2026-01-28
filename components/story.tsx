"use client";

import { useEffect, useState } from "react";
import { Lock } from "lucide-react";

interface StoryChapter {
  id: string;
  title: string;
  content: string[];
  releaseDate: Date;
  isReleased?: boolean;
}

const storyChapters: StoryChapter[] = [
  {
    id: "00",
    title: "Prologue: The Ashen Age",
    releaseDate: new Date("2026-01-28T00:00:00Z"),
    // PROLOGUE — THE ASHEN AGE
    content: [
      `The elders called it peace, but no one who lived through it used that word aloud.`,
      `Wars did not end. They simply lost urgency. Battles were fought, banners fell, kings were replaced - yet nothing truly changed. The same Houses ruled. The same borders held. The same grudges slept lightly beneath treaties.`,
      `History stopped moving forward.`,
      `To prevent another collapse, the six Houses agreed on something unspoken: a story. Each House recorded it differently, shaped it to suit their pride, their guilt, their version of truth. It spoke of a punishment that followed excess, of a battlefield at the center of the world, of a throne that appeared only when balance became unbearable.`,
      `Children were told it as myth.`,
      `Rivals were warned with it as threat.`,
      `Ambition was restrained by it as convenience.`,
      `Over time, the story became harmless.`,
      `A tool.`,
      `A lie.`,
      `No one noticed when the ash began to fall - not from fire, but from stagnation.`,
      `And no one remembered the final line of the story.`,
      `Because it was never meant to be read aloud.`,
    ],
  },
  {
    id: "01",
    title: "Rise of the Six Houses",
    releaseDate: new Date("2026-01-31T00:00:00Z"),
    content: [
      `From the ashes of the old kingdom, six Houses clawed their way to power. Each claimed divine right, each believed their blood worthier than the rest.`,
      `House Targaryen rose from the volcanic south, their banner soaked in dragonfire, their legacy written in destruction. House Stark emerged from the frozen wastes, their honor forged in ice and suffering. House Lannister hoarded gold until their vaults groaned, buying loyalty where they could not inspire it.`,
      `House Baratheon smashed their enemies with fury, their war-hammers carving paths through bone and flesh. House Tyrell played the long game, weaving webs of influence that strangled rivals in their sleep. And House Greyjoy sailed from the drowned shores, taking what they wanted through salt and iron.`,
    ],
  },
  {
    id: "02",
    title: "Fire and Ice Divide the Realm",
    releaseDate: new Date("2026-02-04T00:00:00Z"),
    content: [
      `The first great schism tore the Realm in two. In the south, House Targaryen unleashed their fury, burning cities that refused to kneel. The skies turned black with ash, and rivers ran red with the blood of the defiant.`,
      `In the north, House Stark rallied the frozen banners, their ancestral blades singing songs of vengeance in the bitter wind. The ice fields became graveyards, littered with the corpses of those who underestimated the wolf's bite.`,
      `Neither fire nor ice would yield. The conflict raged for generations, each victory pyrrhic, each defeat a wound that would never heal.`,
    ],
  },
  {
    id: "03",
    title: "Gold, Honor, and Blood",
    releaseDate: new Date("2026-02-07T00:00:00Z"),
    content: [
      `While fire and ice warred, other powers played their own brutal games. House Lannister's gold corrupted courts and bought assassins, their wealth a weapon sharper than any sword. They whispered poison into ears, turned brother against brother, and watched rivals destroy themselves.`,
      `House Stark stood alone in their honor, refusing to stoop to such depths—a nobility that cost them dearly. The Lannisters smiled as the honorable fell, one by one, their gold-plated daggers finding backs in the dark.`,
      `Yet honor has its own strength. The Stark name became a rallying cry for the oppressed, a symbol that even in darkness, some flames refuse to be extinguished.`,
    ],
  },
  {
    id: "04",
    title: "The Shattering",
    releaseDate: new Date("2026-02-11T00:00:00Z"),
    content: [
      `Then came the night that broke the world. House Baratheon, drunk on fury and ambition, launched an assault that none foresaw. Their war-hammers descended upon every House simultaneously—a storm of violence that left no corner of the Realm untouched.`,
      `House Tyrell's schemes crumbled as their estates burned. House Greyjoy's ships sank beneath waves of fire and blood. Even the mighty Targaryens felt the sting of Baratheon steel.`,
      `When dawn broke, the old order lay in ruins. Alliances shattered. Bloodlines ended. The survivors crawled from the wreckage, each knowing that the game had changed forever. There would be no peace, no treaties, no mercy. Only the strongest would claim what remained.`,
    ],
  },
  {
    id: "05",
    title: "The Love and Betrayal",
    releaseDate: new Date("2026-02-14T00:00:00Z"),
    content: [
      `Now, the remnants of the Six Houses gather once more. Not for peace—peace is a lie told to children. They gather because a new prize has emerged: the Crown of the Fallen King, hidden somewhere within the ancient grounds.`,
      `Whoever claims it shall have the power to unite the shattered Realm under their banner. The Great Hunt has been declared. Champions will be chosen. Blood will be spilled.`,
      `Through trials of wit, strength, and cunning, the Houses will clash until only one remains standing. The Realm does not forgive weakness. The throne does not tolerate failure. Six Houses enter. One House claims victory. The rest? They become ash and memory.`,
    ],
  },
  {
    id: "06",
    title: "The Hunt Begins",
    releaseDate: new Date("2026-02-19T00:00:00Z"),
    content: [
      `Now, the remnants of the Six Houses gather once more. Not for peace—peace is a lie told to children. They gather because a new prize has emerged: the Crown of the Fallen King, hidden somewhere within the ancient grounds.`,
      `Whoever claims it shall have the power to unite the shattered Realm under their banner. The Great Hunt has been declared. Champions will be chosen. Blood will be spilled.`,
      `Through trials of wit, strength, and cunning, the Houses will clash until only one remains standing. The Realm does not forgive weakness. The throne does not tolerate failure. Six Houses enter. One House claims victory. The rest? They become ash and memory.`,
    ],
  },
];

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
    <div className="mt-6 pt-6 border-t border-ember-orange/30">
      <p className="text-xs uppercase tracking-[0.2em] text-ember-orange mb-4">
        Coming Soon
      </p>
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Seconds" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div
              className="text-xl sm:text-2xl font-serif font-bold mb-1"
              style={{ color: "#e8a855" }}
            >
              {String(item.value).padStart(2, "0")}
            </div>
            <p className="text-xs uppercase tracking-wide text-amber-700/60">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Story() {
  return (
    <section id="story" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/20 to-background" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blood-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-ember-orange/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="text-sm md:text-base uppercase tracking-[0.3em] text-ember-orange mb-4 block">
            The Chronicle
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-wide"
            style={{
              background:
                "linear-gradient(180deg, #e8a855 0%, #c4723a 50%, #4a2020 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Saga of Ashes
          </h2>
        </div>

        {/* Story chapters */}
        <div className="space-y-20 md:space-y-28">
          {storyChapters.map((chapter, index) => {
            const isReleased = new Date() >= chapter.releaseDate;
            const prevChapter = index > 0 ? storyChapters[index - 1] : null;
            const isPrevReleased = prevChapter
              ? new Date() >= prevChapter.releaseDate
              : true;
            const canShowTitle = isReleased || (isPrevReleased && !isReleased);

            return (
              <article key={chapter.id} className="relative">
                {/* Large faded chapter number */}
                <div className="absolute -left-2 md:left-0 top-0 select-none pointer-events-none">
                  <span
                    className="text-[8rem] md:text-[10rem] font-serif leading-none"
                    style={{
                      color: "rgba(80, 40, 30, 0.3)",
                    }}
                  >
                    {chapter.id}
                  </span>
                </div>

                <div className="relative pt-8 md:pt-12 pl-20 md:pl-32">
                  {/* Chapter title - only show if released or if previous chapter is released */}
                  {canShowTitle && (
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl font-serif mb-8 tracking-wide ${
                        !isReleased ? "opacity-60" : ""
                      }`}
                      style={{
                        color: isReleased ? "#d4915c" : "#8b6f47",
                      }}
                    >
                      {chapter.title}
                    </h3>
                  )}

                  {isReleased ? (
                    <>
                      {/* Chapter content - paragraphs with small caps styling */}
                      <div className="space-y-4">
                        {chapter.content.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-sm sm:text-base md:text-lg leading-[1.6] tracking-wide"
                            style={{
                              color: "#c4a882",
                              fontVariant: "small-caps",
                            }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Locked chapter placeholder */}
                      <div className="py-12 text-center opacity-50">
                        <Lock className="w-12 h-12 mx-auto mb-4 text-ember-orange/40" />
                        {!canShowTitle && (
                          <p
                            className="text-sm uppercase tracking-[0.2em] mb-2"
                            style={{ color: "#8b6f47" }}
                          >
                            Mystery Chapter
                          </p>
                        )}
                        <p
                          className="text-sm uppercase tracking-[0.2em] mb-2"
                          style={{ color: "#8b6f47" }}
                        >
                          Chapter Locked
                        </p>
                        <p className="text-xs" style={{ color: "#6b5a3a" }}>
                          This chapter will be revealed on{" "}
                          {chapter.releaseDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>

                      {/* Show countdown only for next unreleased chapter whose previous chapter is released */}
                      {isPrevReleased && !isReleased && (
                        <CountdownTimer releaseDate={chapter.releaseDate} />
                      )}
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
