import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Antony App</title>
      </Head>

      <Header />

      {/* hero section */}
      <section id="hero">
        <Hero />
      </section>

      {/* about section */}

      {/* experience section */}

      {/* skills */}

      {/* projects */}

      {/* contact me  */}
    </div>
  );
}
