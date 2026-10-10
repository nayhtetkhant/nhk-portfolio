import { profile } from "@/lib/data";
import TerminalHero from "./TerminalHero";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center py-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-600/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* left: intro */}
          <div>
            <p className="mb-4 font-mono text-green-400 text-glow">
              &gt; hello, my name is
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name}
              <span className="text-green-400 text-glow-strong">_</span>
            </h1>
            <p className="mt-3 text-xl font-semibold text-green-500 sm:text-2xl">
              {profile.role}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">
              {profile.tagline}
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-sm border border-green-500/40 bg-green-500/10 px-4 py-1.5 text-sm text-green-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              {profile.availability}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-sm bg-green-600 px-6 py-3 font-medium text-black transition-colors hover:bg-green-500"
              >
                ./view_work
              </a>
              <a
                href="#contact"
                className="rounded-sm border border-green-500/60 px-6 py-3 font-medium text-green-400 transition-colors hover:bg-green-500/10"
              >
                ./contact_me
              </a>
            </div>

            <div className="mt-8 flex gap-5 text-sm">
              {[
                { href: profile.github, label: "[github]" },
                { href: profile.linkedin, label: "[linkedin]" },
                { href: profile.twitter, label: "[twitter]" },
              ]
                .filter((s) => s.href)
                .map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition-colors hover:text-green-400"
                  >
                    {s.label}
                  </a>
                ))}
            </div>
          </div>

          {/* right: live terminal */}
          <TerminalHero />
        </div>
      </div>
    </section>
  );
}
