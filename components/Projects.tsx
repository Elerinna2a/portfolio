import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      {/* ecommerce */}
      <div className="relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            src="ecommerce.png"
            className="h-56 w-96 md:h-[300px] md:w-[500px] xl:h-[400px] xl:w-[600px]"
          />
          <div className="space-y-5 px-0 mb:px-10 max-w-6xl text-center">
            <h4 className="text-4xl font-semibold text-center xl:text-6xl mb-4">
              E-Commerce Project
            </h4>
            <span className="text-lg text-center md:text-left xl:text-xl">
              Creating a first portfolio with a simplistic design to introduce
              myself, using #HTML5 #SASS #JAVASCRIPT.
            </span>{" "}
            <p className="xl:text-xl">#HTML5 #SASS #JAVASCRIPT.</p>
            <p className="text-center mt-5 hover:underline">
              To github:{" "}
              <a target="_blank" href="https://github.com/Elerinna2a/ecommerce">
                E-commerce
              </a>
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            src="firstportfolio.png"
            className="h-56 w-96 md:h-[300px] md:w-[500px] xl:h-[400px] xl:w-[600px]"
          />
          <div className="space-y-5 px-0 mb:px-10 max-w-6xl text-center">
            <h4 className="text-4xl font-semibold text-center xl:text-6xl mb-4">
              First Portfolio
            </h4>
            <span className="text-lg text-center md:text-left xl:text-xl">
              CCreating a first portfolio with a simplistic design to introduce
              myself, using #HTML5 #SASS #JAVASCRIPT.
            </span>{" "}
            <p className="xl:text-xl">#HTML5 #SASS #JAVASCRIPT.</p>
            <p className="text-center mt-5 hover:underline">
              To github:{" "}
              <a target="_blank" href="https://antoabellan.netlify.app/">
                https://antoabellan.netlify.app/
              </a>
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            src="typescript-cover.jpg"
            className="h-56 w-96 md:h-[300px] md:w-[500px] xl:h-[400px] xl:w-[600px]"
          />
          <div className="space-y-5 px-0 mb:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center mb-2">
              WebAPP Project
            </h4>
            <span className="text-lg text-center md:text-left xl:text-center">
              Project to create a{" "}
              <span className="underline decoration-[#F7AB0A]">WebApp</span>{" "}
              with a complete CRUD. I used{" "}
              <span className="underline decoration-[#F7AB0A]">ReactTS</span>,{" "}
              <span className="underline decoration-[#F7AB0A]">Chakra-ui</span>
              <span className="underline decoration-[#F7AB0A]">Typescript</span>
              with{" "}
              <span className="underline decoration-[#F7AB0A]">Prisma</span> for
              database management, all using a MonoRepository mode with{" "}
              <span className="underline decoration-[#F7AB0A]">Turbo</span>.{" "}
            </span>
            <p className="text-center">
              <a
                target="_blank"
                href="https://github.com/Elerinna2a/projetRTSX"
              >
                Projet MonoRepo ReactTSX
              </a>
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            src="symfony.png"
            className="h-56 w-96 md:h-[300px] md:w-[500px] xl:h-[400px] xl:w-[600px]"
          />
          <div className="space-y-10 px-0 mb:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              WebAPP Project
            </h4>
            <span className="text-lg text-center md:text-left">
              <p>
                Project to create a{" "}
                <span className="underline decoration-[#F7AB0A]">WebApp</span>{" "}
                with Symfony.
              </p>
              <a target="_blank" href="https://github.com/Elerinna2a/blog">
                Symfony Project
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[25%] bg-[#F7AB0A] left-0 h-[450px] -skew-y-6" />
    </motion.div>
  );
}
