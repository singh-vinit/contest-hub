"use client";
import { useState, useEffect } from "react";
import { House, Calendar, CircleAlert, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { label: "Home", icon: House, href: "/" },
  { label: "Contests", icon: Calendar, href: "/contests" },
  { label: "About", icon: CircleAlert, href: "/about" },
];

function Navbar() {
  //keep track of mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //get current route
  const pathname = usePathname();
  //close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 z-50 w-full backdrop-blur-md bg-neutral-100/50 px-8 py-4 flex justify-between items-center">
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
      {/* mobile navigation */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-4 w-4" />
        ) : (
          <Menu className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export default Navbar;
