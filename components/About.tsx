import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-2 md:px-5 xl:pd-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="about_photo.jpg"
        className="-mb-32 md:-mb-6 flex-shrink-0 w-28 h-28 rounded-full object-fill md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] z-10"
      />
      <div className="space-y-10 px-0 md:px-10 z-10">
        <h4 className="text-4xl font-semibol z-10">
          Here is a{" "}
          <span className="underline decoration-[#00CAD5] z-10">little</span>{" "}
          background
        </h4>
        <div className="text-base flex flex-col">
          <p>
            I am currently undergoing training at Aflokkat to become a web and
            mobile application developer. I am learning about the profession of
            a developer every day. In the projects section, you will find all of
            my academic and personal projects.
          </p>
          <p>
            By downloading my resume, you will find all the information about me
            as well as my programming skills.
          </p>
          <a
            className="text-xl text-center pt-5 underline space-y-4 decoration-[#00CAD5] max-w-fit mx-auto md:mx-0"
            href="https://drive.google.com/u/0/uc?id=1RrmVb3WFjYyeEll3z8oDno2yE6XerBZf&amp;export=download"
          >
            Donwload my resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}
