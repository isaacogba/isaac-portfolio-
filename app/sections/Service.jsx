"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in building high-performance, responsive websites and web applications using modern frameworks.",
    to: "web", // id of a details block on this page (optional)
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I create intuitive, user-centered digital experiences and visually appealing interfaces.",
    to: "uiux",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "I craft unique and memorable logos that clearly represent your brand identity.",
    to: "logo",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I optimize websites to improve search engine ranking and drive organic traffic.",
    to: "seo",
  },
];

const Service = () => {
  return (
    // Make this the scroll target for the nav
    <section id="service" className="min-h-screen w-full scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            My <span className="text-accent">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            I offer a range of services to help bring your ideas to life and boost your online presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 xl:gap-16"
        >
          {services.map((service) => (
            <div
              key={service.num}
              className="group flex flex-col gap-5 border border-white/10 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent hover:from-accent/10 hover:border-accent transition-all duration-500 shadow-lg hover:shadow-accent/20"
            >
              {/* Top Row */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-4xl font-extrabold text-white/30 group-hover:text-accent transition-all duration-500">
                  {service.num}
                </span>

                {/* Scroll to a deeper part of the Service section (or another section) */}
                <ScrollLink
                  to={service.to}      // ID to scroll to
                  smooth={true}
                  duration={500}
                  offset={-80}         // adjust for fixed header height
                  className="w-[55px] h-[55px] rounded-full bg-accent flex justify-center items-center text-primary text-2xl transition-transform duration-500 group-hover:rotate-[-45deg] shadow-md cursor-pointer"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <BsArrowDownRight />
                </ScrollLink>
              </div>

              {/* Title */}
              <h3 className="text-2xl xl:text-3xl font-bold group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Optional detail anchors so the arrow can scroll further down */}
        <div className="mt-24 space-y-24">
          <div id="web" className="scroll-mt-24">
            {/* …more details for Web Development… */}
          </div>
          <div id="uiux" className="scroll-mt-24">
            {/* …more details for UI/UX… */}
          </div>
          <div id="logo" className="scroll-mt-24">
            {/* …more details for Logo Design… */}
          </div>
          <div id="seo" className="scroll-mt-24">
            {/* …more details for SEO… */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Service