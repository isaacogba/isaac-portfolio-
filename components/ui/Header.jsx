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

        {/* Desktop Nav & WhatsApp button (visible ≥ md) */}
        <div className="hidden md:flex items-center gap-7">
          <Nav />
          <a href="https://wa.me/2348139958224" target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp">
            <Button className="uppercase">WhatsApp</Button>
          </a>
        </div>

        {/* Mobile Nav (visible < md) */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
