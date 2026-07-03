import NumberFlow from "@number-flow/react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type FormEvent } from "react";

import { Reveal } from "./shared";

const MOMENT = "assets/moment.jpg";

// The beta signups live in the Cloudflare worker's database; the static site
// posts to its CORS-enabled endpoint.
const SIGNUP_URL = "https://preview--shady-onyx-721.higgsfield.app/api/signup";

/* Investor case + the finale where the recurring moment lands, fully sharp,
 * above the beta signup form. */

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (inView) setN(value);
  }, [inView, value]);
  return (
    <div ref={ref}>
      <p className="font-display text-[44px] font-semibold tracking-tight text-white md:text-[56px]">
        <NumberFlow value={n} />
        {suffix}
      </p>
      <p className="mt-1 max-w-[24ch] text-[15px] leading-snug text-white/60">{label}</p>
    </div>
  );
}

export function Investors() {
  const blocks = [
    {
      title: "The market",
      body: "Ageing is the one demographic certainty. Families already pay for safety and peace of mind; almost nothing on the market works on the memories themselves, gently, at home, every day.",
    },
    {
      title: "The mechanism",
      body: "Spaced retrieval applied to a person's own life: an FSRS scheduler decides when a moment comes back, and Claude grades the answer by meaning, kindly. Consumer-simple on the surface, clinically literate underneath.",
    },
    {
      title: "The model",
      body: "A subscription where the buyer is rarely the user: adult children subscribe, parents use it, carers receive the reports. Trust and reporting are the product, which is why they come first.",
    },
  ];
  return (
    <section id="investors" className="bg-[#14161b]">
      <div className="mx-auto max-w-[1200px] px-5 py-28 md:px-8 md:py-36">
        <Reveal>
          <h2 className="font-display max-w-[22ch] text-[34px] font-semibold leading-[1.1] tracking-tight text-white md:text-[48px]">
            A serious answer to an enormous, quiet problem.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-8 border-t border-white/10 pt-12 md:grid-cols-3">
          <Stat value={55} suffix="M+" label="people living with dementia worldwide, per the World Health Organization" />
          <Stat value={10} suffix="M" label="new cases every year, a family at a time" />
          <Stat value={1.6} suffix="B" label="people aged 65 or over by 2050, per the United Nations" />
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div>
                <h3 className="font-display text-[20px] font-semibold tracking-tight text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-white/65">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <a
            href="mailto:mubinalmanaf@gmail.com?subject=Memories%20investor%20deck"
            className="mt-14 inline-block rounded-full border border-white/25 px-6 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-white hover:text-[var(--ink)]"
          >
            Request the deck
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Finale() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (state === "sending" || state === "done") return;
    setState("sending");
    try {
      const res = await fetch(SIGNUP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, audience: "family" }),
      });
      const data = (await res.json()) as { ok?: boolean };
      setState(data.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="beta" className="relative overflow-hidden">
      {/* Appearance four: fully sharp, fully warm. The page kept its promise. */}
      <motion.img
        src={MOMENT}
        alt="The same bowl of oranges, now perfectly sharp and warm"
        className="absolute inset-0 h-full w-full object-cover"
        initial={reduce ? false : { scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101216]/90 via-[#101216]/45 to-[#101216]/15" />
      <div className="relative mx-auto flex min-h-[92dvh] max-w-[1200px] flex-col justify-end px-5 pb-20 pt-32 md:px-8">
        <Reveal>
          <h2 className="font-display max-w-[16ch] text-[36px] font-semibold leading-[1.08] tracking-tight text-white md:text-[58px]">
            You&rsquo;ve seen this moment four times now.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-[46ch] text-[18px] leading-relaxed text-white/85 md:text-[20px]">
            By now it probably feels familiar. That&rsquo;s what returning does. That&rsquo;s the
            whole idea, and we&rsquo;d love to build the rest of it with you.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          {state === "done" ? (
            <div className="mt-9 max-w-[480px] rounded-[20px] bg-white/10 p-6 backdrop-blur-md">
              <p className="font-display text-[22px] font-semibold text-white">
                You&rsquo;re on the list.
              </p>
              <p className="mt-1 text-[15px] text-white/75">
                One email when the beta opens. Nothing else, promise.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-9 flex max-w-[520px] flex-col gap-3 sm:flex-row">
              <label htmlFor="beta-email" className="sr-only">
                Email address
              </label>
              <input
                id="beta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-[52px] flex-1 rounded-[12px] border border-white/25 bg-white/95 px-4 text-[16px] text-[var(--ink)] outline-none placeholder:text-[var(--muted)] focus:border-white focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                disabled={state === "sending"}
                className="h-[52px] whitespace-nowrap rounded-full bg-white px-6 text-[16px] font-semibold text-[var(--ink)] transition-transform hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60"
              >
                {state === "sending" ? "One moment" : "Join the beta"}
              </button>
            </form>
          )}
          {state === "error" && (
            <p className="mt-3 text-[14px] text-white/85">
              That didn&rsquo;t go through. Please check the address and try again.
            </p>
          )}
          {state !== "done" && (
            <p className="mt-3 text-[13.5px] text-white/60">
              No spam. One email when the beta opens.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
