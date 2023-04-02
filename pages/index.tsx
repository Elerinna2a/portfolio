import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FC9A4A]/70">
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
      {/* <section id="experience" className="snap-center">
        <WorkExperience />
      </section> */}
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

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 bg-transparent text-[#FC9A4A]/70 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
              />
            </svg>
          </div>
        </footer>
      </Link>
    </div>
  );
}
