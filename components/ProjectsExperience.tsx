import { projects, experience } from "@/lib/data";
import { SectionHeading } from "./AboutSkills";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading number="03" title="Projects" />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 transition-all hover:-translate-y-1 hover:border-green-500/50"
          >
            <div className="flex h-40 items-center justify-center bg-gradient-to-br from-green-600/20 to-teal-600/20 font-mono text-sm text-green-300">
              {p.title}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-green-600/10 px-2.5 py-1 font-mono text-xs text-green-400"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                {(p.repos ?? [{ label: "GitHub", url: p.github }]).map((r) => (
                  <a
                    key={r.label}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 transition-colors hover:text-green-400"
                  >
                    {r.label} ↗
                  </a>
                ))}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 transition-colors hover:text-green-400"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading number="04" title="Journey" />
      <div className="space-y-10">
        {experience.map((job) => (
          <div
            key={job.role + job.company}
            className="grid gap-4 border-l-2 border-white/10 pl-6 md:grid-cols-4"
          >
            <div>
              <p className="font-mono text-sm text-green-400">{job.period}</p>
              <p className="mt-1 text-sm text-zinc-500">{job.company}</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-white">{job.role}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400">
                {job.points.map((pt, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-green-500">▹</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
