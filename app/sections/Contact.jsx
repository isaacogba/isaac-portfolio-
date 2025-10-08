"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// ====== STATIC INFO ======
const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "‪(+234) 813 995 8224‬" },
  { icon: <FaEnvelope />, title: "Email", description: "ogbaisaac1@email.com" },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "19 Market Street, Ijeshatedo, Surulere, Lagos, Nigeria",
  },
];

const Contact = () => {
  const [service, setService] = useState("");

  // toast
  const [toastOpen, setToastOpen] = useState(false);
  const [toastDesc, setToastDesc] = useState("");

  // loading state for API call
 const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = new FormData(e.currentTarget);
  form.set("service", service);
  const data = Object.fromEntries(form.entries());

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    let payload = null;
    try { payload = await res.json(); } catch {}

    if (!res.ok) {
      const msg = payload?.error || `HTTP ${res.status}`;
      throw new Error(msg);
    }

    setToastDesc("Thanks! Your message is in my inbox. I’ll reply within 24 hours.");
    setToastOpen(true);
    e.currentTarget.reset();
    setService("");
  } catch (err) {
    console.error("Contact submit error:", err);
    setToastDesc(String(err.message || "Couldn’t send right now."));
    setToastOpen(true);
  } finally {
    setLoading(false);
  }
};


  // helpers to make contact info clickable
  const sanitizeTel = (raw) => raw.replace(/[^\d+]/g, "");
  const ContactValue = ({ title, value }) => {
    if (/email/i.test(title) || value.includes("@")) {
      return (
        <a href={`mailto:${value}`} className="hover:underline break-all">
          {value}
        </a>
      );
    }
    if (/phone/i.test(title)) {
      const tel = sanitizeTel(value);
      return (
        <a href={`tel:${tel}`} className="hover:underline">
          {value}
        </a>
      );
    }
    return <span>{value}</span>;
  };

  const InfoList = useMemo(
    () =>
      info.map((item, i) => (
        <li key={i} className="flex items-center gap-6">
          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
            <div className="text-[28px]">{item.icon}</div>
          </div>
          <div className="flex-1">
            <p className="text-white/60">{item.title}</p>
            <h3 className="text-xl">
              <ContactValue title={item.title} value={item.description} />
            </h3>
          </div>
        </li>
      )),
    []
  );

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.35, ease: "easeIn" } }}
      className="py-6 min-h-screen scroll-mt-24 relative"
    >
      {/* Toast */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: toastOpen ? 1 : 0, y: toastOpen ? 0 : -10 }}
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed left-1/2 top-6 z-50 -translate-x-1/2"
      >
        {toastOpen && (
          <div className="pointer-events-auto rounded-md bg-white/90 text-black shadow-lg backdrop-blur px-4 py-3 text-sm">
            <div className="font-medium">Message {loading ? "…" : "sent"} 🎉</div>
            <div className="opacity-80">{toastDesc}</div>
          </div>
        )}
      </motion.div>

      <div className="container mx-auto">
        {/* CONTACT HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
          className="text-center mb-12 xl:mb-16"
        >
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Have a project, idea, or collaboration in mind? Share a few details below — I typically reply within 24 hours.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* LEFT: FORM */}
          <div className="w-full xl:flex-1 order-2 xl:order-none">
            <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Tell me a bit about your project and how I can help. I usually respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* name + contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    autoComplete="given-name"
                    required
                    className="flex min-h-[48px] w-full rounded-md border border-white/10 bg-primary px-4 py-3 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    autoComplete="family-name"
                    required
                    className="flex min-h-[48px] w-full rounded-md border border-white/10 bg-primary px-4 py-3 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    autoComplete="email"
                    required
                    className="flex min-h-[48px] w-full rounded-md border border-white/10 bg-primary px-4 py-3 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    autoComplete="tel"
                    pattern="[\d\s()+-]{7,}"
                    /* basic safe pattern */
                    className="flex min-h-[48px] w-full rounded-md border border-white/10 bg-primary px-4 py-3 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* service select */}
                <div className="space-y-2">
                  <label className="text-sm text-white/70" htmlFor="service">
                    Service
                  </label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger
                      id="service"
                      className="flex min-h-[48px] w-full items-center justify-between rounded-md border border-white/10 bg-primary px-4 py-3 text-base text-white/80 focus:border-accent outline-none"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem
                          value="web-dev"
                          className="data-[highlighted]:bg-accent data-[highlighted]:text-black"
                        >
                          Web Development
                        </SelectItem>
                        <SelectItem
                          value="ui-ux"
                          className="data-[highlighted]:bg-accent data-[highlighted]:text-black"
                        >
                          UI/UX Design
                        </SelectItem>
                        <SelectItem
                          value="logo"
                          className="data-[highlighted]:bg-accent data-[highlighted]:text-black"
                        >
                          Logo Design
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* Hidden input so it posts with FormData */}
                  <input type="hidden" name="service" value={service} />
                </div>

                {/* message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-white/70">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    required
                    className="min-h-[160px] rounded-md border border-white/10 bg-primary px-4 py-3 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-fit rounded-md bg-accent px-5 py-3 text-sm font-medium text-black hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send message"}
                </Button>
              </form>
            </div>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">{InfoList}</ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
