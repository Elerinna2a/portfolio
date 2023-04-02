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
      className="relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-scale-down md:rounded-lg md:w-48 md:h-64 xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibol">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          odio repellendus, dolores laboriosam necessitatibus tenetur
          repudiandae rerum enim, illum veniam magni! Ipsum eum, dolorem fugit,
          enim natus error cum voluptatum quia magnam quasi tenetur harum facere
          culpa tempore illo beatae suscipit rerum aliquam quos non.
          Consequuntur quas laudantium ullam corporis?
        </p>
      </div>
    </motion.div>
  );
}
