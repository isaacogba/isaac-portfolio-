"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
      >
        {/*
          IMAGE CONTAINER:
          1. Added 'rounded-full' to crop the square image into a circle.
          2. Added 'overflow-hidden' to ensure the content (the image) is contained by the rounded border.
        */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[250px] h-[250px] sm:w-[298px] sm:h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute rounded-full overflow-hidden"
        >
          {/* The image component already fills its parent, so it will be cropped by the parent's rounded-full class */}
          <Image
            src="/profile.png"
            priority
            quality={100}
            fill
            alt="Profile photo" // Added descriptive alt text
            className="object-contain" // object-cover might be better if you want it to fill the entire circle without stretching
          />
        </motion.div>

        {/*
          CIRCLE SVG:
          It will now sit right on top of the rounded image, providing the animated stroke.
          Ensure the SVG size matches the image container size for perfect alignment.
          - Image container size: 498px (xl)
          - SVG container size: 506px (xl) -> This difference will make the circle stroke slightly larger than the image. This is usually the desired effect.
        */}
        <motion.svg
          className="w-[256px] sm:w-[300px] xl:w-[506px] h-[256px] sm:h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#A7B7D4"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;