"use client";

import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// other sections (make sure these files exist in app/sections/)
import Resume from "./sections/Resume";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Service from "./sections/Service";

/* ========== Variants ========== */
const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const photoVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      {/* ===== Home (this file IS the Home page) ===== */}
      <section id="home" className="min-h-screen w-full bg-transparent text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-0 py-12 sm:py-16 xl:py-24">
            {/* Text */}
            <motion.div
              className="text-center xl:text-left order-2 xl:order-none max-w-xl w-full"
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              <span className="text-sm sm:text-base lg:text-lg font-medium text-accent tracking-wide">
                Full-Stack Developer
              </span>
              <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Hello, I&apos;m <br />
                <span className="text-accent">Isaac Ogba</span>
              </h1>
              <p className="mb-6 sm:mb-8 text-sm sm:text-base text-white/70 leading-relaxed px-4 sm:px-0">
                I specialize in crafting elegant, performant, and scalable web
                applications using modern stacks. With expertise in Next.js,
                React, Node.js, and Tailwind CSS, I deliver solutions that merge
                functionality with outstanding user experience.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 sm:gap-6">
                <a href="/Isaac_Ogba_CV.pdf" download className="inline-block w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto uppercase flex items-center justify-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary transition-colors"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>

                <Social
                  containerStyles="flex gap-4 sm:gap-6 justify-center"
                  iconStyles="flex justify-center items-center w-9 h-9 sm:w-10 sm:h-10 border border-accent rounded-full text-accent text-base sm:text-lg transition-all duration-300 hover:bg-accent hover:text-primary"
                />
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              className="order-1 xl:order-none mb-6 sm:mb-8 xl:mb-0 flex justify-center xl:justify-end"
              initial="hidden"
              animate="visible"
              variants={photoVariant}
            >
              <Photo />
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative border-t border-white/10 mt-8 sm:mt-12 pt-8 sm:pt-12">
          <Stats />
        </div>
      </section>

      {/* ===== Other sections (single-page scroll) ===== */}
      <Service />
      <Resume />
      <Work />
      <Contact />
    </main>
  );
}
