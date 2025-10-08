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
        <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-0 py-20 xl:py-24">
            {/* Text */}
            <motion.div
              className="text-center xl:text-left order-2 xl:order-none max-w-xl"
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              <span className="text-lg font-medium text-accent tracking-wide">
                Full-Stack Developer
              </span>
              <h1 className="text-4xl xl:text-6xl font-bold leading-tight mb-6">
                Hello, I&apos;m <br />
                <span className="text-accent">Isaac Ogba</span>
              </h1>
              <p className="mb-8 text-white/70 leading-relaxed">
                I specialize in crafting elegant, performant, and scalable web
                applications using modern stacks. With expertise in Next.js,
                React, Node.js, and Tailwind CSS, I deliver solutions that merge
                functionality with outstanding user experience.
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-6">
                <a href="/Isaac_Ogba_CV.pdf" download className="inline-block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary transition-colors"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>

                <Social
                  containerStyles="flex gap-6"
                  iconStyles="flex justify-center items-center w-10 h-10 border border-accent rounded-full text-accent text-lg transition-all duration-300 hover:bg-accent hover:text-primary"
                />
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              className="order-1 xl:order-none mb-8 xl:mb-0 flex justify-center xl:justify-end"
              initial="hidden"
              animate="visible"
              variants={photoVariant}
            >
              <Photo />
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative border-t border-white/10">
          <div className="border-t border-white/10">
            <Stats />
          </div>
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
