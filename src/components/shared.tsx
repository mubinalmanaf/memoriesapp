import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/* Shared building blocks: scroll reveal, nav, footer, phone frame. */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Nav() {
  const links = [
    { href: "#idea", label: "The idea" },
    { href: "#how", label: "How it works" },
    { href: "#privacy", label: "Privacy" },
    { href: "#investors", label: "Investors" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="font-display text-[19px] font-semibold tracking-tight text-white mix-blend-difference"
        >
          Memories
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-white mix-blend-difference transition-opacity hover:opacity-70"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#beta"
          className="rounded-full bg-white/95 px-4 py-2 text-[14px] font-semibold text-[var(--ink)] shadow-sm backdrop-blur transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Join the beta
        </a>
      </div>
    </header>
  );
}

/** A minimal device bezel around a real screenshot of the app. */
export function Phone({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative mx-auto w-[270px] rounded-[46px] bg-[#101216] p-[10px] shadow-[0_24px_60px_-18px_rgba(23,26,32,0.45)] ${className}`}
    >
      <div className="absolute left-1/2 top-[18px] z-10 h-[18px] w-[86px] -translate-x-1/2 rounded-full bg-[#101216]" />
      <div className="overflow-hidden rounded-[36px] bg-white">
        <img
          src={src}
          alt={alt}
          width={780}
          height={1688}
          loading={priority ? "eager" : "lazy"}
          className="block w-full"
        />
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-[18px] font-semibold tracking-tight">Memories</p>
          <p className="mt-1 text-[14px] text-[var(--muted)]">
            Built with care, for the people who raised us.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-[var(--muted)]">
          <a className="hover:text-[var(--ink)]" href="#idea">
            The idea
          </a>
          <a className="hover:text-[var(--ink)]" href="#how">
            How it works
          </a>
          <a className="hover:text-[var(--ink)]" href="#privacy">
            Privacy
          </a>
          <a className="hover:text-[var(--ink)]" href="#investors">
            Investors
          </a>
          <a className="hover:text-[var(--ink)]" href="mailto:mubinalmanaf@gmail.com">
            Contact
          </a>
        </nav>
        <p className="text-[13px] text-[var(--muted)]">© 2026 Memories</p>
      </div>
    </footer>
  );
}
