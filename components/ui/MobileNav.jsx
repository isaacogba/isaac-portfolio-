"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  { name: "home",    hash: "#home" },
  { name: "service", hash: "#service" },
  { name: "resume",  hash: "#resume" },
  { name: "work",    hash: "#work" },
  { name: "contact", hash: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const goTo = (hash) => {
    // Close the sheet first
    setOpen(false);

    // After the close animation, scroll smoothly
    // (small timeout so the drawer unmounts before scrolling)
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // reflect the hash in the URL (no page reload)
        const path = window.location.pathname;
        window.history.replaceState(null, "", `${path}${hash}`);
      } else {
        // Fallback: force navigation to root + hash
        window.location.assign(`/${hash}`);
      }
    }, 150);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex items-center justify-center"
        aria-label="Open menu"
      >
        <CiMenuFries className="text-[32px] text-accent" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>

      <SheetContent side="right" className="w-[280px] p-6 flex flex-col">
        <div className="mt-20 mb-10 text-center">
          <button
            onClick={() => goTo("#home")}
            className="text-4xl font-semibold"
          >
            Isaac <span className="text-accent">.</span>
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6">
          {links.map((l) => (
            <button
              key={l.hash}
              onClick={() => goTo(l.hash)}
              className="text-xl capitalize transition-all hover:text-accent"
            >
              {l.name}
            </button>
          ))}
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2348139958224"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg transition-all duration-300 font-medium text-lg w-full justify-center"
            onClick={() => setOpen(false)}
          >
            <FaWhatsapp className="text-2xl" />
            <span>WhatsApp Me</span>
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
