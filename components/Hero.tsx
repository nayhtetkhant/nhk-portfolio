import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <p className="mb-4 font-mono text-indigo-400">Hi, my name is</p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {profile.name}.
        </h1>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-500 sm:text-5xl lg:text-6xl">
          I build things for the web.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          {profile.tagline}
        </p>

        <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          {profile.availability}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-500"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-indigo-500 px-6 py-3 font-medium text-indigo-400 transition-colors hover:bg-indigo-500/10"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-12 flex gap-5">
          {[
            { href: profile.github, label: "GitHub" },
            { href: profile.linkedin, label: "LinkedIn" },
            { href: profile.twitter, label: "Twitter" },
          ]
            .filter((s) => s.href)
            .map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-indigo-400"
              >
                {s.label}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
