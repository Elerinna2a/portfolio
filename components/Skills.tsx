import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function Skills({ directionLeft }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-6 gap-5">
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/React-Dark.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter md:h-12 md:w-12"
          alt="react"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/TypeScript.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="typescript"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/JavaScript.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="javascript"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/Symfony-Dark.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="symfony"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/TailwindCSS-Dark.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="symfony"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/CSS.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="CSS"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/Django.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="Django"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/Docker.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="Docker"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/ExpressJS-Dark.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="ExpressJS"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/Github-dark.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="Github"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/Java-Dark.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="Java"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/HTML.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="HTML"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/Kotlin-Dark.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="Kotlin"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/MySQL-Dark.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="MySQL"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/NodeJS-Dark.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="NodeJs"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/PHP-Dark.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="PHP"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/Sass.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="Sass"
        />
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          src="skills/Vite-Dark.svg"
          className="h-20 w-20 rounded-full border border-gray-500 object-cover filter hover:scale-150"
          alt="Vite-Dark"
        />
      </div>
    </motion.div>
  );
}
