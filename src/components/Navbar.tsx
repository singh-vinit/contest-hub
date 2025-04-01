"use client";
import { useState, useEffect } from "react";
import { House, Calendar, CircleAlert, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "motion/react";

const navLinks = [
  { label: "Home", icon: House, href: "/" },
  { label: "Contests", icon: Calendar, href: "/contests" },
  { label: "About", icon: CircleAlert, href: "/about" },
];

function Navbar() {
  //get current route
  const pathname = usePathname();
  //keep track of scrolly value
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
      console.log(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {isScrolled ? (
        <motion.div
          className="fixed top-[2%] z-50 w-[80%] left-[10%] rounded-2xl backdrop-blur-md bg-neutral-100/50 px-8 py-4 flex justify-between items-center"
          layout
        >
          <Link href="/">
            <div className="flex items-center gap-x-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-xl">
                ContestContest <span className="text-blue-600">Hub</span>
              </span>
            </div>
          </Link>
          {/* desktop navigation */}
          <nav className="hidden md:flex items-center gap-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "flex items-center gap-x-1 text-gray-700 relative group transition-colors duration-300 ease-in-out",
                  pathname === link.href && "text-blue-600"
                )}
              >
                <link.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{link.label}</span>
                {pathname === link.href && (
                  <span className="bg-blue-600 h-[1.5px] w-full absolute -bottom-1"></span>
                )}
                <span className="bg-blue-600 h-[1.5px] absolute -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            ))}
          </nav>
        </motion.div>
      ) : (
        <motion.div
          className="fixed top-0 z-50 w-full backdrop-blur-md bg-neutral-100/50 px-8 py-4 flex justify-between items-center"
          layout
        >
          <Link href="/">
            <div className="flex items-center gap-x-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-xl">
                ContestContest <span className="text-blue-600">Hub</span>
              </span>
            </div>
          </Link>
          {/* desktop navigation */}
          <nav className="hidden md:flex items-center gap-x-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "flex items-center gap-x-1 text-gray-700 relative group transition-colors duration-300 ease-in-out",
                  pathname === link.href && "text-blue-600"
                )}
              >
                <link.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{link.label}</span>
                {pathname === link.href && (
                  <span className="bg-blue-600 h-[1.5px] w-full absolute -bottom-1"></span>
                )}
                <span className="bg-blue-600 h-[1.5px] absolute -bottom-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
