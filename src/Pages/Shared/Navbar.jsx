import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import logo from "../../assets/mmlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (path) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#010231]  border-gray-200 px-3  dark:bg-black/60 dark:border-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] text-transparent bg-clip-text dark:text-white"
            >
              <img src={logo} className="w-[60px]" alt="Mint mini logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navItems.map((item) => {
                const active = isActive(item.to);
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={cn(
                      "relative text-lg font-medium transition-colors duration-300",
                      active
                        ? "text-cyan-600 font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-600 after:rounded-full after:transition-all after:duration-500 after:scale-x-100"
                        : "text-[#010231] hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-400 after:scale-x-0 after:transition-transform"
                    )}
                  >
                    <AnimatedShinyText className="text-[18px] font-medium">
                      {item.label}
                    </AnimatedShinyText>
                  </Link>
                );
              })}

              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] dark:bg-white text-[#010231] dark:text-black py-5 text-[16px] font-semibold rounded-md shadow-lg hover:shadow-gray-500/50 transition-all duration-500 group"
              >
                <a
                  href="https://www.fiverr.com/mint_mini"
                  target="_blank"
                  className="relative z-10 flex items-center"
                >
                  Profile
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
                <span className="absolute inset-0 bg-white/10 dark:bg-black/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <BorderBeam duration={8} size={150} />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center md:p-2 rounded-md text-gray-600 hover:text-cyan-500 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
          <div className="md:px-4 pt-4 pb-4 md:space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "relative block px-3 py-2 rounded-md text-[18px] font-medium transition-colors",
                    active
                      ? "text-cyan-600 font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-cyan-600 after:rounded-full after:transition-all after:duration-500 after:scale-x-100"
                      : "text-gray-600 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-400 after:scale-x-0"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Button
              size="lg"
              className="relative overflow-hidden w-full bg-black dark:bg-white text-white dark:text-black py-5 text-[16px] font-semibold rounded-md shadow-lg hover:shadow-gray-500/80 transition-all duration-500 group"
            >
              <span className="relative z-10 flex items-center justify-center">
                View Profile
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
              <span className="absolute inset-0 bg-white/10 dark:bg-black/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <BorderBeam duration={8} size={150} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
