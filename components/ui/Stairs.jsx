import { motion } from "framer-motion";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reverseIndex = (index) => {
  const totalStep = 6;
  return totalStep - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="absolute bg-white h-full"
          style={{
            left: `${(100 / 6) * index}%`, // place each stair side by side
            width: `${100 / 6}%`,          // each stair is 1/6 of the screen
          }}
        />
      ))}
    </>
  );
};

export default Stairs;
