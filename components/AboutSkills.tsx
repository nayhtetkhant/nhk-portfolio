import { profile, skills } from "@/lib/data";

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
        <span className="mr-2 font-mono text-sm font-medium text-indigo-600">
          {number}
        </span>
        {title}
      </h2>
      <div className="h-px flex-1 bg-neutral-200" />
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading number="01" title="About Me" />
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-4 leading-relaxed text-neutral-600">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="text-neutral-800">
            Here are a few technologies I work with:
          </p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-neutral-500">
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
          <div className="mx-auto max-w-md overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-xs text-neutral-400">
                developer.ts
              </span>
            </div>
            <pre className="overflow-auto p-6 font-mono text-sm leading-relaxed text-neutral-700">
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
            className="rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
          >
            <h3 className="mb-4 font-mono text-sm font-semibold text-indigo-600">
              {group.category}
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
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
