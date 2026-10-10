import { profile } from "@/lib/data";
import { SectionHeading } from "./AboutSkills";

// Computed once at build time so the page stays statically prerenderable
const year = new Date().getFullYear();

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading number="05" title="Get In Touch" />
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-zinc-400 leading-relaxed">
          I&apos;m currently open to new opportunities and interesting projects.
          Whether you have a question or just want to say hi, my inbox is always
          open — I&apos;ll do my best to get back to you.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full border border-green-500 px-8 py-3 font-medium text-green-400 transition-colors hover:bg-green-500/10"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex justify-center gap-6 text-sm text-zinc-500">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            LinkedIn
          </a>
          {profile.twitter && (
            <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
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
    <footer className="border-t border-white/10 py-8">
      <p className="text-center font-mono text-sm text-zinc-500">
        Designed &amp; built by {profile.name} · © {year}
      </p>
    </footer>
  );
}
