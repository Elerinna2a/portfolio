import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
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
        src="https://picsum.photos/60"
        className="rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duraction-300 ease-in-out group:hover:bg-white h-[60px] w-[60px] rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-md font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
