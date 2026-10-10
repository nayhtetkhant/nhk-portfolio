import { profile } from "@/lib/data";
import { SectionHeading } from "./AboutSkills";

// Computed once at build time so the page stays statically prerenderable
const year = new Date().getFullYear();

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-40">
        <SectionHeading number="05" label="Contact" title="Let's talk." />
        <div className="max-w-xl">
          <p className="leading-relaxed text-neutral-400">
            I&apos;m currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, my inbox is always
            open — I&apos;ll do my best to get back to you.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-300"
          >
            {profile.email}
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
          <p className="mt-4 font-mono text-sm text-neutral-500">{profile.phone}</p>
          <div className="mt-8 flex gap-6 text-sm text-neutral-400">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              LinkedIn
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 text-xs text-neutral-500 sm:flex-row">
        <p>
          © {year} {profile.name} — {profile.location}
        </p>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            LinkedIn
          </a>
          <a href={profile.resumeUrl} target="_blank" className="transition-colors hover:text-white">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
