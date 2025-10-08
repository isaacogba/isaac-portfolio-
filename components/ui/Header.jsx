import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Isaac<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav & Hire Me button (visible ≥ xl) */}
        <div className="flex items-center gap-7">
          <Nav />
          <Link href="#contact" aria-label="Hire me">
            <Button className="uppercase">Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav (visible < xl) */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
