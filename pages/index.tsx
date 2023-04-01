import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Antony App</title>
      </Head>

      <Header />

      {/* hero section */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about section */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* experience section */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* contact me  */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
