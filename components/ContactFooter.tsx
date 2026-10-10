import { profile } from "@/lib/data";
import { SectionHeading } from "./AboutSkills";

// Computed once at build time so the page stays statically prerenderable
const year = new Date().getFullYear();

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading number="05" title="Get In Touch" />
      <div className="mx-auto max-w-2xl text-center">
        <p className="leading-relaxed text-neutral-600">
          I&apos;m currently open to new opportunities and interesting projects.
          Whether you have a question or just want to say hi, my inbox is always
          open — I&apos;ll do my best to get back to you.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-lg bg-neutral-900 px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Say Hello
        </a>
        <p className="mt-4 font-mono text-sm text-neutral-400">{profile.email}</p>
        <div className="mt-8 flex justify-center gap-6 text-sm text-neutral-500">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            LinkedIn
          </a>
          {profile.twitter && (
            <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
              Twitter
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8">
      <p className="text-center font-mono text-sm text-neutral-400">
        Designed &amp; built by {profile.name} · © {year}
      </p>
    </footer>
  );
}
