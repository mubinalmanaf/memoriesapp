import { Phone, Reveal } from "./shared";

/* Product sections. Every screen shown here is a real render of the actual
 * SwiftUI app, not a mockup. */

export function Ritual() {
  return (
    <section id="how" className="mx-auto max-w-[1200px] px-5 py-28 md:px-8 md:py-40">
      <Reveal>
        <h2 className="font-display max-w-[18ch] text-[34px] font-semibold leading-[1.1] tracking-tight md:text-[48px]">
          A two minute ritual, every day.
        </h2>
      </Reveal>

      <div className="mt-16 grid items-center gap-12 md:mt-24 md:grid-cols-2">
        <Reveal>
          <Phone src="assets/app/home.png" alt="The Memories home screen: capture a memory, speak a memory, and a ready-to-recall card" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-[46ch]">
            <p className="text-[15px] font-semibold text-[var(--accent)]">Capture</p>
            <h3 className="font-display mt-2 text-[26px] font-semibold tracking-tight md:text-[32px]">
              A photo, or just a sentence out loud.
            </h3>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--muted)]">
              &ldquo;Oranges from the market, shared with Amara after school.&rdquo; That&rsquo;s
              enough. The app writes a warm caption with them, in their own words, and files the
              moment away for tomorrow.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid items-center gap-12 md:grid-cols-2">
        <Reveal className="md:order-2">
          <Phone src="assets/app/dashboard.png" alt="The trends screen: recall accuracy, speed, streaks, hydration and medicine adherence" />
        </Reveal>
        <Reveal delay={0.1} className="md:order-1 md:justify-self-end">
          <div className="max-w-[46ch]">
            <p className="text-[15px] font-semibold text-[var(--accent)]">Return</p>
            <h3 className="font-display mt-2 text-[26px] font-semibold tracking-tight md:text-[32px]">
              The next day, a gentle question.
            </h3>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--muted)]">
              &ldquo;What do you remember about yesterday afternoon?&rdquo; They answer in their
              own words, out loud if they like. Claude checks the meaning, not the wording, offers
              a hint when they&rsquo;re stuck, and never scolds. Each recall makes the memory
              stronger, and each one becomes a data point a family can actually read: accuracy,
              speed, streaks, quietly charted over months.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Companion() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-28 md:grid-cols-[5fr_7fr] md:px-8 md:py-36">
        <Reveal>
          <Phone src="assets/app/chat.png" alt="A conversation with Sarah, a companion who chats about the person's own memories" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-[52ch]">
            <h2 className="font-display text-[34px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
              For the days that feel quiet.
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-[var(--muted)]">
              Loneliness is memory&rsquo;s worst weather. Sarah, Daniel and Alex are companions
              who talk about the person&rsquo;s own remembered days, and only those. They never
              invent an event, never pretend to be human, and when something feels wrong they
              gently point to someone real.
            </p>
            <p className="mt-4 text-[16px] text-[var(--muted)]">
              Every reply is grounded in the person&rsquo;s saved memories and labelled with
              where it came from.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Inside() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-28 md:px-8 md:py-36">
      <Reveal>
        <h2 className="font-display text-[34px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
          The rest of a good day, kept too.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <Reveal className="md:row-span-2">
          <div className="h-full overflow-hidden rounded-[20px] bg-white shadow-[0_10px_34px_-18px_rgba(23,26,32,0.25)]">
            <img
              src="assets/app/water.png"
              alt="The water screen: glasses today, a streak, and photo proof"
              loading="lazy"
              className="h-[340px] w-full object-cover object-top"
            />
            <div className="p-6">
              <h3 className="font-display text-[20px] font-semibold tracking-tight">Water, with proof</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">
                A photo of every glass. A streak worth protecting. Hydration is memory&rsquo;s
                quiet ally.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="md:row-span-2">
          <div className="h-full overflow-hidden rounded-[20px] bg-white shadow-[0_10px_34px_-18px_rgba(23,26,32,0.25)]">
            <img
              src="assets/app/meds.png"
              alt="The medicines screen: a daily tick list grouped by time of day"
              loading="lazy"
              className="h-[340px] w-full object-cover object-top"
            />
            <div className="p-6">
              <h3 className="font-display text-[20px] font-semibold tracking-tight">Medicines, on time</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">
                Before breakfast, after dinner, at bedtime. A tick list that reads the way
                prescriptions are actually written.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="h-full rounded-[20px] bg-[#eaf2f8] p-6">
            <h3 className="font-display text-[20px] font-semibold tracking-tight">Reports a doctor can use</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">
              One tap turns months of recall into a calm PDF, and a carer can receive it on a
              schedule. A wellness summary, never a diagnosis.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="h-full rounded-[20px] bg-[#171a20] p-6 text-white">
            <h3 className="font-display text-[20px] font-semibold tracking-tight">Built for the phone they already own</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/70">
              The heavy thinking happens in the cloud, so an older iPhone behaves exactly like a
              new one. No one needs to buy anything.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Privacy() {
  const points = [
    {
      title: "Encrypted with their password, and only theirs",
      body: "Memories are sealed with a key derived from the person's own password. Not us, not another account on the same phone, not a curious grandchild.",
    },
    {
      title: "Their life is not training data",
      body: "What they save is used to help them remember it. It is never used to train anyone's models.",
    },
    {
      title: "Sharing is a decision, not a default",
      body: "A carer sees trends only if the person chooses it, and the choice can be unmade at any time.",
    },
  ];
  return (
    <section id="privacy" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-28 md:px-8 md:py-36">
        <Reveal>
          <h2 className="font-display max-w-[16ch] text-[34px] font-semibold leading-[1.1] tracking-tight md:text-[48px]">
            Private by architecture.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="border-t border-[var(--line)] pt-6">
                <h3 className="font-display text-[20px] font-semibold leading-snug tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-[var(--muted)]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-14 max-w-[52ch] text-[18px] leading-relaxed text-[var(--ink)]">
            This product is being built for someone who has earned the right not to read a
            settings page. The safe choice is always the one already made.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
