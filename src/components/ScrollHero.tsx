import { useEffect, useRef, useState } from "react";

/* Apple-style scroll-scrubbed hero. A 300vh container provides the scroll
 * distance; the video is sticky, muted and paused, and its playhead is driven
 * by scroll progress through a requestAnimationFrame loop with lerp smoothing
 * so it glides instead of snapping. The film is the site's recurring moment
 * resolving from soft and cool to sharp and warm: scrolling literally
 * "remembers" the scene. */

const LERP = 0.22;

export function ScrollHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fade in over the first 200ms so the hero doesn't pop in cold.
    const t = window.setTimeout(() => setMounted(true), 30);

    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return () => window.clearTimeout(t);

    video.pause();
    video.load(); // nudge Safari to buffer so currentTime seeks are instant

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let target = 0; // scroll progress 0..1
    let current = 0; // smoothed playhead progress
    let raf = 0;

    const onScroll = () => {
      const r = wrap.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      target = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
    };

    const tick = () => {
      const d = video.duration;
      if (Number.isFinite(d) && d > 0) {
        if (reduce) {
          // No scrubbing under reduced motion: rest on the resolved final frame.
          if (video.currentTime !== d) video.currentTime = d;
        } else {
          current += (target - current) * LERP;
          const t2 = Math.min(current * d, d - 0.04);
          if (Math.abs(video.currentTime - t2) > 0.01) video.currentTime = t2;
        }
      }
      raf = window.requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" ref={wrapRef} className="relative h-[300vh]">
      <div
        className="sticky top-0 h-[100dvh] overflow-hidden transition-opacity duration-200"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        <video
          ref={videoRef}
          src="assets/hero.mp4"
          poster="assets/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101216]/85 via-[#101216]/20 to-[#101216]/25" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1200px] flex-col justify-end px-5 pb-16 md:px-8 md:pb-24">
            <h1 className="font-display max-w-[13ch] text-[44px] font-semibold leading-[1.04] tracking-tight text-white md:text-[72px]">
              Some moments are worth keeping.
            </h1>
            <p className="mt-5 max-w-[46ch] text-[18px] leading-relaxed text-white/85 md:text-[20px]">
              A gentle app that helps older adults keep the small days, not just the big ones.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#beta"
                className="rounded-full bg-white px-6 py-3 text-[16px] font-semibold text-[var(--ink)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Join the beta
              </a>
              <a
                href="#how"
                className="text-[16px] font-medium text-white/85 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
