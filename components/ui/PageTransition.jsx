"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        {/* Exit animation layer */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          exit={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-primary pointer-events-none"
        />
        {/* Actual page content */}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
