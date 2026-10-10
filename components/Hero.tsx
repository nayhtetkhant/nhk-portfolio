import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Fullscreen grayscale portrait */}
      <Image
        src={profile.photo}
        alt={`${profile.name} — portrait`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_22%] grayscale contrast-[1.08]"
      />

      {/* Cinematic overlays */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-black/90"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Center-bottom content */}
      <div className="relative flex min-h-[100svh] flex-col items-center justify-end px-6 pb-24 text-center sm:pb-28">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-white sm:text-sm">
          {profile.name}
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-300 sm:text-base">
          Full Stack Developer based in Chiang Mai, Thailand
        </p>
        <h1 className="mt-6 font-display text-[24vw] leading-[0.82] tracking-tight text-white sm:text-[18vw] lg:text-[15rem]">
          Code.
        </h1>
        <p className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs text-neutral-300 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          {profile.availability}
        </p>
      </div>

      {/* Bottom-left links */}
      <div className="absolute bottom-7 left-7 hidden gap-6 text-xs text-neutral-300 sm:flex">
        {[
          { href: profile.github, label: "GitHub" },
          { href: profile.linkedin, label: "LinkedIn" },
          { href: profile.resumeUrl, label: "Resume" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("/") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* Bottom-right scroll indicator */}
      <a
        href="#about"
        className="group absolute bottom-6 right-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-neutral-300 transition-colors hover:text-white"
      >
        Scroll
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors group-hover:border-white group-hover:bg-white group-hover:text-neutral-950">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </span>
      </a>
    </section>
  );
}
