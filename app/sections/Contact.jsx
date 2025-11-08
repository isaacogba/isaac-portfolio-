"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// ====== CONTACT INFO ======
const contactInfo = [
  { 
    icon: <FaPhoneAlt />, 
    title: "Phone", 
    description: "+234 813 995 8224",
    link: "tel:+2348139958224"
  },
  { 
    icon: <FaEnvelope />, 
    title: "Email", 
    description: "ogbaisaac1@gmail.com",
    link: "mailto:ogbaisaac1@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Lagos, Nigeria",
    link: null
  },
];

// ====== SOCIAL LINKS ======
const socialLinks = [
  {
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    link: "https://wa.me/2348139958224",
    color: "hover:bg-[#25D366]"
  },
  {
    icon: <FaTiktok />,
    name: "TikTok",
    link: "https://vm.tiktok.com/ZSHc769hQf6yj-OMj99/",
    color: "hover:bg-[#000000]"
  },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/isaacall.dev/",
    color: "hover:bg-[#E4405F]"
  },
  {
    icon: <FaFacebook />,
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100008487427730",
    color: "hover:bg-[#1877F2]"
  },
  {
    icon: <FaXTwitter />,
    name: "X (Twitter)",
    link: "https://x.com/IsaacO17353",
    color: "hover:bg-[#000000]"
  },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className="py-12 sm:py-16 min-h-screen scroll-mt-24 flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* CONTACT HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
            Let's Work <span className="text-accent">Together</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities,
            creative ideas, or partnerships. Reach out and let's create something amazing together!
          </p>
        </motion.div>

        {/* CONTACT CONTENT */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }}
            className="bg-[#27272c] rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl"
          >
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.5 + index * 0.1, duration: 0.5 } }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary text-accent rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-primary transition-all duration-300 border border-accent/20 group-hover:border-accent">
                    <div className="text-2xl sm:text-3xl">{item.icon}</div>
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-lg">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-white/60 hover:text-accent transition-colors text-sm sm:text-base"
                    >
                      {item.description}
                    </a>
                  ) : (
                    <p className="text-white/60 text-sm sm:text-base">{item.description}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-10 sm:mb-12"></div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } }}
              className="text-center"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Connect With Me</h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, transition: { delay: 0.9 + index * 0.1, duration: 0.4 } }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-primary border border-accent/20 rounded-full flex items-center justify-center text-accent text-2xl sm:text-3xl transition-all duration-300 ${social.color} hover:border-transparent hover:text-white`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.6 } }}
              className="mt-10 sm:mt-12 text-center"
            >
              <a
                href="https://wa.me/2348139958224"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-accent/50"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Let's Chat on WhatsApp</span>
              </a>
              <p className="mt-4 text-white/40 text-sm">Available Monday - Friday, 9AM - 6PM WAT</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
