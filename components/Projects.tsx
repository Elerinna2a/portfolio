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
      <div className="relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#00CAD5]">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 xl:p-10 md:p-44 h-screen">
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
            className="h-56 w-96 md:h-[300px] md:w-[500px]"
          />
          <div className="space-y-5 px-0 mb:px-10 max-w-6xl text-center">
            <h4 className="text-4xl font-semibold text-center xl:text-6xl mb-4">
              E-Commerce Project
            </h4>
            <span className="text-lg text-center md:text-left xl:text-xl">
              Creating a first portfolio with a simplistic design to introduce
              myself, using #HTML5 #SASS #JAVASCRIPT.
            </span>{" "}
            <a target="_blank" href="https://github.com/Elerinna2a/ecommerce">
              <p className="text-center mt-5 hover:scale-125 transition duration-500 ease-in-out">
                To github: E-commerce
              </p>
            </a>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 xl:p-10 md:p-44 h-screen">
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
            <a target="_blank" href="https://antoabellan.netlify.app/">
              <p className="text-center mt-5 hover:scale-125 transition duration-500 ease-in-out">
                To github: https://antoabellan.netlify.app/
              </p>
            </a>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 xl:p-10 md:p-44 h-screen">
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
              <span className="underline decoration-[#00CAD5]">WebApp</span>{" "}
              with a complete CRUD. I used{" "}
              <span className="underline decoration-[#00CAD5]">ReactTS</span>,{" "}
              <span className="underline decoration-[#00CAD5]">Chakra-ui</span>
              <span className="underline decoration-[#00CAD5]">Typescript</span>
              with{" "}
              <span className="underline decoration-[#00CAD5]">Prisma</span> for
              database management, all using a MonoRepository mode with{" "}
              <span className="underline decoration-[#00CAD5]">Turbo</span>.{" "}
            </span>
            <a target="_blank" href="https://github.com/Elerinna2a/projetRTSX">
              <p className="text-center mt-5 hover:scale-125 transition duration-500 ease-in-out">
                To github: Projet MonoRepo ReactTSX
              </p>
            </a>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 xl:p-10 md:p-44 h-screen">
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
                <span className="underline decoration-[#00CAD5]">blog</span>{" "}
                with Symfony. With admin dashbord, $twig{" "}
              </p>
              <a target="_blank" href="https://github.com/Elerinna2a/blog">
                <p className="text-center pt-5 hover:scale-125 transition duration-500 ease-in-out">
                  To github: Symfony Project
                </p>
              </a>
            </span>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 xl:p-10 md:p-44 h-screen">
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
            src="python-django.png"
            className="h-56 w-96 md:h-[300px] md:w-[500px] xl:h-[400px] xl:w-[600px]"
          />
          <div className="space-y-10 px-0 mb:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              Django project
            </h4>
            <span className="text-lg text-center md:text-left">
              <p>
                Creating a Django project with authentication, complete CRUD
                functionality, page restrictions, etc.
              </p>

              <a
                className="decoration-none"
                target="_blank"
                href="https://github.com/Elerinna2a/Django"
              >
                <p className="text-center mt-5 hover:scale-125 transition duration-500 ease-in-out">
                  To github: Django Project
                </p>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[25%] bg-[#00CAD5] left-0 h-[450px] -skew-y-6" />
    </motion.div>
  );
}
