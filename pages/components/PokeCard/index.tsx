import { motion, Variants } from "framer-motion";
import PokeImage from "../PokeImage";

const BASE_IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const PokeCard = ({ imgSrc, pokemonName, type }) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <div
        className={`max-w-md p-4 m-4 w-full mx-auto ${type} h-300 rounded-xl shadow-md md:max-w-2xl`}
      >
        <div className="flex flex-col relative top-1/2 max-w-200 w-200 h-48">
          <h3 className="text-lg font-semibold">{pokemonName}</h3>
          <p className="text-sm font-normal w-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic
            quas tempore est.
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileInView="onscreen"
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="relative">
          <div className="absolute translate-x-[12%] translate-y-[-85%]">
            <PokeImage src={`${BASE_IMAGE_URL}${imgSrc}`} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PokeCard;
