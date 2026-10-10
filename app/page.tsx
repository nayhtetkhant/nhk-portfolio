import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { About, Skills } from "@/components/AboutSkills";
import { Projects, Journey } from "@/components/ProjectsExperience";
import { Contact, Footer } from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
