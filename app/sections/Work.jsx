"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

// ==================== PROJECTS DATA ====================
const projects = [
  {
    num: "01",
    category: "Full-stack",
    title: "Temu Clone",
    description:
      "This is a Temu clone website — fully responsive, built with modern full-stack technologies.",
    stacks: [
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "Next.js 15" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
    ],
    image: "/work1.png",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "Full-stack",
    title: "Portfolio v2",
    description:
      "A beautiful animated portfolio using Framer Motion + Next.js.",
    stacks: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
    image: "/work2.png",
    live: "#",
    github: "#",
  },
  {
    num: "03",
    category: "Front End",
    title: "E-Commerce UI",
    description:
      "A clean, responsive ecommerce interface focused on UI and performance.",
    stacks: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Next.js 15" }],
    image: "/work1.png",
    live: "#",
    github: "#",
  },
];

// ==================== COMPONENT ====================
export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const i = typeof swiper?.activeIndex === "number" ? swiper.activeIndex : 0;
    setProject(projects[i]);
  };

  return (
    // 👇 add id="work" so the nav can scroll here
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col justify-center py-12 xl:px-0 scroll-mt-24"
    >
      <div className="container mx-auto">

        {/* ====================
            WORK HEADER
           ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.6 },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            My <span className="text-accent">Work</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Selected builds that blend performance, clean UX, and modern tooling.
            Browse the highlights, peek the code, and open the live demos.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT: TEXT DETAILS */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category} Project
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex flex-wrap gap-2">
                {project.stacks.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stacks.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20" />

              {/* BUTTONS */}
              <TooltipProvider delayDuration={100}>
                <div className="flex items-center gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.live || "#"}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open live link for ${project.title}`}
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/10"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.github || "#"}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open GitHub repo for ${project.title}`}
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/10"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Repo</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
          </div>

          {/* RIGHT: SLIDER */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="xl:h-[520px] mb-12 relative"
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => {
                const i =
                  typeof swiper?.activeIndex === "number" ? swiper.activeIndex : 0;
                setProject(projects[i]);
              }}
            >
              {projects.map((p, index) => (
                <SwiperSlide key={p.num}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-white/5 overflow-hidden rounded-lg">
                    <div className="relative w-full h-full">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover object-top"
                        sizes="(min-width:1280px) 50vw, 100vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* NAV BUTTONS */}
              <div className="swiper-button-prev !text-white !w-10 !h-10 !bg-accent/20 hover:!bg-accent rounded-full flex justify-center items-center absolute top-1/2 -left-6 z-20" />
              <div className="swiper-button-next !text-white !w-10 !h-10 !bg-accent/20 hover:!bg-accent rounded-full flex justify-center items-center absolute top-1/2 -right-6 z-20" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
