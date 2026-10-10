import { projects, journey } from "@/lib/data";
import { SectionHeading } from "./AboutSkills";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
        <SectionHeading number="03" label="Projects" title="Selected work" />
        <div className="border-t border-white/10">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="grid gap-6 border-b border-white/10 py-10 transition-colors md:grid-cols-12 md:gap-8"
            >
              <div className="font-mono text-xs text-neutral-600 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="md:col-span-5">
                <h3 className="font-display text-2xl leading-tight text-white transition-colors sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-400">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-neutral-400"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-6">
                <ul className="space-y-3 text-sm leading-relaxed text-neutral-400">
                  {p.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3">
                      <span className="text-neutral-600">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-5 text-[13px]">
                  {p.repos.map((r) => (
                    <a
                      key={r.label}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-neutral-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                    >
                      {r.label}
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  ))}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
        <SectionHeading number="04" label="Journey" title="The path so far" />
        <div className="border-t border-white/10">
          {journey.map((entry) => (
            <div
              key={entry.role + entry.period}
              className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {entry.period}
                </p>
                <p className="mt-1 text-sm text-neutral-600">{entry.place}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-lg font-semibold text-white">{entry.role}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-400">
                  {entry.points.map((pt, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-neutral-600">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
