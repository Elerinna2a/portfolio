import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  directionRight?: boolean;
};

export default function Skills({ directionLeft, directionRight }: Props) {
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
      className="relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-32 md:top-20 xl:top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-52 md:top-40 xl:top-28 uppercase tracking-[3px] text-gray-500 text-sm">
        List of my current skills
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <div className="group relative flex cursor-pointer">
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
            className="rounded-full border border-gray-500 object-cover filter h-14 w-1h-14 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="react"
          />
        </div>
        <div className="group relative flex cursor-pointer">
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
            src="skills/NodeJS-Dark.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 
            md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="NodeJs"
          />
        </div>
        <div className="group relative flex cursor-pointer">
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
            src="skills/TailwindCSS-Dark.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="Tailwind"
          />
        </div>
        <div className="group relative flex cursor-pointer">
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
            src="skills/TypeScript.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="Typesript"
          />
        </div>
        <div className="group relative flex cursor-pointer">
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
            src="skills/JavaScript.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="javascript"
          />
        </div>
        <div className="group relative flex cursor-pointer">
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
            src="skills/HTML.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="html"
          />
        </div>
        <div className="group relative flex cursor-pointer">
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
            src="skills/CSS.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="CSS"
          />
        </div>
        <div className="group relative flex cursor-pointer">
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
            src="skills/PHP-Dark.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="PHP"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionRight ? 200 : -200,
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
            src="skills/Sass.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="Sass"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionRight ? 200 : -200,
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
            src="skills/Symfony-Dark.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="Symfony"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionRight ? 200 : -200,
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
            src="skills/MySQL-Dark.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="MySQL"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionRight ? 200 : -200,
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
            src="skills/Django.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="Django"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionRight ? 200 : -200,
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
            src="skills/ExpressJS-Dark.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="ExpressJS"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionRight ? 200 : -200,
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
            src="skills/Github-Dark.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="Github"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionRight ? 200 : -200,
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
            src="skills/Kotlin-Dark.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="Kotlin"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionRight ? 200 : -200,
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
            src="skills/Java-Dark.svg"
            className="rounded-full border border-gray-500 object-cover filter h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 group-hover:grayscale transition duration-300 ease-in-out"
            alt="Java"
          />
        </div>
      </div>
    </motion.div>
  );
}

{
  /*
  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full z-0">
   <div className="flex items-center justify-center h-full">
  <p="text-3xl font-bold text-black opacity-100">100%</p>
</div> 
</div>
*/
}
