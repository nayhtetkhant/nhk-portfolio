import Image from "next/image";
import { profile, skills } from "@/lib/data";

export function SectionHeading({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-500">
        <span className="text-neutral-400">{number}</span>
        {label}
      </p>
      <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/10">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <div>
          <SectionHeading number="01" label="About" title="The person behind the developer" />
          <div className="max-w-xl space-y-5 text-[15px] leading-relaxed text-neutral-400">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="text-neutral-300">Here are a few technologies I work with:</p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-[13px] text-neutral-500">
              {skills
                .flatMap((s) => s.items)
                .slice(0, 12)
                .map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-neutral-600">▸</span> {t}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Portrait panel — mirrors the reference's photo-right layout */}
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[560px]">
          <Image
            src={profile.photo}
            alt={`${profile.name} portrait`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[50%_35%] grayscale contrast-[1.05]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-300">
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
        <SectionHeading number="02" label="Skills" title="Tools I build with" />
        <div className="border-t border-white/10">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="flex items-baseline gap-4 md:col-span-4">
                <span className="font-mono text-xs text-neutral-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.25em] text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 md:col-span-8">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-neutral-300 transition-colors hover:border-white hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
