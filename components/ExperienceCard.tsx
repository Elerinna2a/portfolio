import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {/* <img src="#" alt="titleimg" /> */}
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full object-cover object-center bg-[#F7AB0A]/50"
      ></motion.div>

      <div className="px-0 md:px-10 flex flex-col items-center">
        <h4 className="text-4xl font-light">Student</h4>
        <p className="font-bold text-2xl mt-1">Aflokkat</p>
        <div className="flex space-x-2 my-2">
          <div className="w-10 h-10 rounded-full bg-[#F7AB0A]/50"></div>
          <div className="w-10 h-10 rounded-full bg-[#F7AB0A]/50"></div>
          <div className="w-10 h-10 rounded-full bg-[#F7AB0A]/50"></div>
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">Started... -End...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary points summary points summary points </li>
          <li>summary points summary points summary points </li>
          <li>summary points summary points summary points </li>
        </ul>
      </div>
    </article>
  );
}
