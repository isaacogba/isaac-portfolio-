"use client";

import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql,
  SiTypescript, SiExpress, SiVercel
} from "react-icons/si";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

/* =========================
   DATA
   ========================= */

// ——— ABOUT ———
const about = {
  title: "About me",
  description:
    "Frontend-leaning full-stack developer building fast, accessible, and scalable web apps. I turn product ideas into polished, production-ready experiences using Next.js, TypeScript, Tailwind CSS, and Node.js. Strong focus on UX, SEO, and performance.",
  info: [
    { fieldName: "Name", fieldValue: "Isaac Ogba" },
    { fieldName: "Phone", fieldValue: "‪(+234) 813-995-8224‬" },
    { fieldName: "Experience", fieldValue: "2+ years" },
    { fieldName: "Email", fieldValue: "ogbaisaac1@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English" },
    { fieldName: "Location", fieldValue: "Lagos, Nigeria" },
    { fieldName: "Social", fieldValue: "Facebook: Isaac Ogba" },
  ],
};

// ——— EXPERIENCE ———
const experience = {
  title: "My Experience",
  description:
    "Selected roles and freelance projects using modern stacks (Next.js, React, TypeScript, Tailwind CSS, Node.js).",
  items: [
    {
      company: "Tech Solution Inc",
      position: "Front-End Developer (Contract)",
      duration: "2024 – Present",
      bullets: [
        "Built responsive UI components in Next.js + Tailwind; improved CLS and reduced CSS bloat.",
        "Implemented API layer with Axios + SWR for caching and faster data fetches.",
        "Raised Lighthouse scores to 95+ across key pages (Performance/SEO/Accessibility).",
      ],
    },
    {
      company: "Web Design (Freelance)",
      position: "Front-End Developer",
      duration: "2024 – Present",
      bullets: [
        "Delivered landing pages and SMB sites with Next.js, Tailwind, and Framer Motion.",
        "Set up contact forms, email notifications, and analytics (Vercel + GA).",
        "Improved conversion by ~18% via layout, copy, and performance tweaks.",
      ],
    },
    {
      company: "E-commerce Site (Personal Project)",
      position: "Full-Stack Developer",
      duration: "2024 – Present",
      bullets: [
        "Implemented product catalog, cart, and checkout; SSR/ISR for fast loads.",
        "Integrated auth (NextAuth) and payments (Stripe test mode).",
        "Deployed on Vercel with preview environments and GitHub CI.",
      ],
    },
  ],
};

// ——— EDUCATION ———
const Education = {
  title: "My Education",
  description: "Formal education and upskilling through reputable platforms.",
  items: [
    { institution: "University of Lagos (UNILAG)", degree: "B.Sc. (Ongoing)", duration: "—" },
    { institution: "Online Course Platform", degree: "Full-Stack Web Development Bootcamp", duration: "2023" },
    { institution: "Codecademy", degree: "Front-End Development Track", duration: "2023" },
    { institution: "Various Online Courses", degree: "Programming Fundamentals & JavaScript", duration: "2023" },
  ],
};

// ——— SKILLS ———
const Skill = {
  title: "My Skills",
  description: "Technologies and tools I use to deliver robust, production-ready applications.",
  SkillList: [
    // Frontend
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript (ES6+)" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },

    // Backend
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },

    // Database
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },

    // Tools & Deployment
    { icon: <FaGitAlt />, name: "Git & GitHub" },
    { icon: <SiVercel />, name: "Vercel / Netlify" },
    { icon: <FaFigma />, name: "Figma (UI/Prototyping)" },

    // Others
    { icon: <></>, name: "Authentication (JWT / NextAuth)" },
    { icon: <></>, name: "Stripe Payments" },
  ],
};

// ——— PROJECTS ———
const projects = {
  title: "Projects",
  description: "A few representative builds with modern tooling and clean UX.",
  items: [
    {
      name: "E-Shop",
      stack: ["Next.js", "TypeScript", "Tailwind", "NextAuth", "Stripe"],
      summary: "Full e-commerce flow (catalog, cart, checkout) with auth and payments. SSR/ISR for speed.",
      image: "/projects/eshop.jpg",
      alt: "E-Shop storefront UI",
      links: [{ label: "Live", href: "#" }, { label: "GitHub", href: "#" }],
    },
    {
      name: "Portfolio v2",
      stack: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
      summary: "Animated developer portfolio with Lighthouse 95+ and SEO best practices.",
      image: "/projects/portfolio-v2.jpg",
      alt: "Portfolio hero section",
      links: [{ label: "Live", href: "#" }, { label: "GitHub", href: "#" }],
    },
    {
      name: "Admin Dashboard",
      stack: ["React", "Chart libs", "Node.js"],
      summary: "Role-based dashboard with charts, filters, and server-driven tables.",
      image: "/projects/admin-dashboard.jpg",
      alt: "Admin dashboard overview",
      links: [{ label: "Live", href: "#" }, { label: "GitHub", href: "#" }],
    },
  ],
};

/* =========================
   COMPONENT
   ========================= */
export default function Resume() {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.15, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex flex-col items-center justify-center py-12 xl:py-0 scroll-mt-24"
    >
      <div className="container mx-auto">

        {/* =========================
           RESUME HEADER
           ========================= */}
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
            My <span className="text-accent">Resume</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A snapshot of my journey so far — combining technical expertise, creative design,
            and hands-on experience to deliver real-world results. Here’s a closer look at
            my experience, education, and the tools that fuel my builds.
          </p>
        </motion.div>

        {/* =========================
           TABS SECTION
           ========================= */}
        <Tabs defaultValue="projects" className="flex flex-col xl:flex-row gap-[60px]">
          {/* LEFT: tab list */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-2 sticky top-20">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* RIGHT: content */}
          <div className="min-h-[70vh] w-full">

             {/* PROJECTS */}
            <TabsContent value="projects">
              <h3 className="text-xl font-semibold mb-2">{projects.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{projects.description}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.items.map((p, i) => (
                  <div key={i} className="group rounded-lg border overflow-hidden flex flex-col">
                    {/* Image */}
                    <div className="relative w-full h-40 md:h-44 lg:h-48">
                      <Image
                        src={p.image || "/projects/placeholder.jpg"}
                        alt={p.alt || p.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        priority={i === 0}
                      />
                    </div>

                    {/* Body */}
                    <div className="p-4 flex flex-col gap-3">
                      <div className="font-medium">{p.name}</div>

                      {/* Stack chips */}
                      <div className="flex flex-wrap gap-2">
                        {p.stack.map((t, k) => (
                          <span
                            key={k}
                            className="rounded-full border px-2 py-1 text-xs text-white/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-white/80">{p.summary}</p>

                      {/* Links */}
                      <div className="mt-auto flex gap-3">
                        {p.links.map((lnk, j) => (
                          <a
                            key={j}
                            href={lnk.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-accent hover:underline text-sm"
                          >
                            {lnk.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* EXPERIENCE */}
            <TabsContent value="experience">
              <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>
              <ScrollArea className="h-[52vh] pr-4">
                <ul className="space-y-4">
                  {experience.items.map((item, i) => (
                    <li key={i} className="rounded-lg border p-4">
                      <div className="font-medium">{item.position}</div>
                      <div className="text-sm text-muted-foreground">{item.company}</div>
                      <div className="text-xs opacity-70 mb-2">{item.duration}</div>
                      {item.bullets && (
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education">
              <h3 className="text-xl font-semibold mb-2">{Education.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{Education.description}</p>
              <ScrollArea className="h-[52vh] pr-4">
                <ul className="space-y-4">
                  {Education.items.map((item, i) => (
                    <li key={i} className="rounded-lg border p-4">
                      <div className="font-medium">{item.institution}</div>
                      <div className="text-sm text-muted-foreground">{item.degree}</div>
                      <div className="text-xs opacity-70">{item.duration}</div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills">
              <h3 className="text-xl font-semibold mb-2">{Skill.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{Skill.description}</p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {Skill.SkillList.map((s, i) => (
                  <li key={i} className="flex items-center gap-3 rounded-lg border p-3">
                    <span className="text-2xl">{s.icon}</span>
                    <span className="capitalize">{s.name}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* ABOUT */}
            <TabsContent value="about">
              <h3 className="text-xl font-semibold mb-2">{about.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{about.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {about.info.map((row, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <div className="text-xs uppercase opacity-70">{row.fieldName}</div>
                    {row.fieldName === "Phone" ? (
                      <a href="tel:+2348139958224" className="font-medium hover:underline">
                        {row.fieldValue}
                      </a>
                    ) : row.fieldName === "Email" ? (
                      <a href="mailto:ogbaisaac1@gmail.com" className="font-medium hover:underline">
                        {row.fieldValue}
                      </a>
                    ) : (
                      <div className="font-medium">{row.fieldValue}</div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

           
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
