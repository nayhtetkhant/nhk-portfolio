import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft gradient wash */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-indigo-200/50 blur-[120px]" />
        <div className="absolute top-40 -left-24 h-[320px] w-[320px] rounded-full bg-violet-200/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-32">
        <p className="mb-4 font-mono text-sm text-indigo-600">
          Hi, my name is
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
          {profile.name}.
        </h1>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-400 sm:text-5xl lg:text-6xl">
          I build things for the web.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
          {profile.tagline}
        </p>

        <p className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm text-emerald-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          {profile.availability}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-neutral-300 px-6 py-3 font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-12 flex gap-5 text-sm">
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
                className="text-neutral-400 transition-colors hover:text-indigo-600"
              >
                {s.label}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
