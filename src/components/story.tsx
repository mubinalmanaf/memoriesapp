import { motion, useReducedMotion } from "motion/react";
import { useRef, type PointerEvent } from "react";

import { Reveal } from "./shared";

/* The narrative sections: the problem, the thesis, and the
 * interactive "remembering" lens. One photograph runs through all of
 * them, sharper at every return: the page itself demonstrates
 * spaced repetition. */

const MOMENT = "assets/moment.jpg";
const MOMENT_ALT = "A bowl of oranges on a wooden kitchen table in late afternoon light";

export function Problem() {
  const lines: Array<{ text: string; opacity: number }> = [
    { text: "First it’s the name of a neighbour.", opacity: 1 },
    { text: "Then where the photographs were kept.", opacity: 0.55 },
    { text: "Then the afternoon, whole.", opacity: 0.28 },
  ];
  const reduce = useReducedMotion();
  return (
    <section id="idea" className="mx-auto max-w-[1200px] px-5 py-28 md:px-8 md:py-40">
      <div className="max-w-[760px]">
        {lines.map((l, i) => (
          <motion.p
            key={i}
            className="font-display text-[32px] font-semibold leading-[1.2] tracking-tight md:text-[52px]"
            initial={reduce ? { opacity: l.opacity } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: l.opacity, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: i * 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {l.text}
          </motion.p>
        ))}
        <Reveal delay={0.5}>
          <p className="mt-10 max-w-[58ch] text-[18px] leading-relaxed text-[var(--muted)] md:text-[19px]">
            Forgetting rarely arrives as an event. It arrives as a fade. More than 55 million
            people live with dementia worldwide, and long before any diagnosis, families watch
            the small days slip first. The big days get photographed and retold. The Tuesday
            afternoons are simply gone.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Thesis() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-28 md:px-8 md:pb-40">
      <div className="grid items-center gap-12 md:grid-cols-[7fr_5fr]">
        <div>
          <Reveal>
            <h2 className="font-display max-w-[16ch] text-[34px] font-semibold leading-[1.1] tracking-tight md:text-[48px]">
              Memory isn&rsquo;t a vault. It&rsquo;s a muscle.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[56ch] text-[18px] leading-relaxed text-[var(--muted)] md:text-[19px]">
              Every time you return to a moment, the brain rebuilds it, and the rebuilding is
              what makes it stay. Cognitive science has known this for a century as the spacing
              effect. Memories turns it into a daily ritual gentle enough for someone in their
              eighties, and honest enough for the family watching over them.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="justify-self-center md:justify-self-end">
          {/* Appearance two: the same moment, a little clearer. */}
          <figure className="w-[260px] md:w-[300px]">
            <img
              src={MOMENT}
              alt={MOMENT_ALT}
              loading="lazy"
              className="rounded-[20px] object-cover shadow-[0_18px_44px_-16px_rgba(23,26,32,0.35)] [filter:blur(1.5px)_saturate(0.8)]"
            />
            <figcaption className="mt-3 text-[14px] text-[var(--muted)]">
              The same moment, one day later. Sharper now.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export function Lens() {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <section className="relative">
      <div
        ref={ref}
        onPointerMove={onMove}
        className="relative h-[72vh] min-h-[460px] overflow-hidden [touch-action:pan-y]"
      >
        {/* Sharp truth underneath; a drained, blurred cover above with a
            soft window of clarity that follows your attention. */}
        <img src={MOMENT} alt={MOMENT_ALT} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <img src={MOMENT} alt="" aria-hidden loading="lazy" className="lens-cover absolute inset-0 h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-14">
          <div className="rounded-full bg-[#101216]/55 px-5 py-2.5 text-center backdrop-blur-sm">
            <p className="text-[15px] font-medium text-white md:text-[17px]">
              This is what remembering feels like. Move across the picture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
