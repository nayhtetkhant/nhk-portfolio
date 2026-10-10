import { profile, skills } from "@/lib/data";

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        <span className="font-mono text-indigo-500">{number}.</span> {title}
      </h2>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading number="01" title="About Me" />
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="text-zinc-300">
            Here are a few technologies I work with:
          </p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-zinc-400">
            {skills
              .flatMap((s) => s.items)
              .slice(0, 12)
              .map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-indigo-500">▸</span> {t}
                </li>
              ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-1 rounded-lg bg-indigo-600/30 blur" />
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <pre className="overflow-auto p-6 font-mono text-sm leading-relaxed text-zinc-300">
{`const developer = {
  name: "${profile.name}",
  role: "${profile.role}",
  location: "${profile.location}",
  focusesOn: ["clean UI", "solid APIs", "performance"],
  openToWork: true,
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading number="02" title="Skills" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-white/10 bg-zinc-900/50 p-6 transition-colors hover:border-indigo-500/50"
          >
            <h3 className="mb-4 font-mono text-indigo-400">{group.category}</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
