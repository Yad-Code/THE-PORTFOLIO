import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { cn } from "../../../lib/utils";
import NavButton from "./NavButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(1);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleActive = () => {
      if (window.scrollY > 1900) setActive(4);
      else if (window.scrollY > 1300) setActive(3);
      else if (window.scrollY > 580) setActive(2);
      else setActive(1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActive);
    };
  }, []);

  const navLinks = [
    { id: 1, name: "Home", href: "/home" },
    { id: 2, name: "Skills", href: "/skills" },
    { id: 3, name: "Projects", href: "/projects" },
    { id: 4, name: "Contact", href: "/contanct" },
  ];

  const handleLinkClick = (id) => {
    if (id === 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === 2) {
      window.scrollTo({ top: 590, behavior: "smooth" });
    } else if (id === 3) {
      window.scrollTo({ top: 1310, behavior: "smooth" });
    } else if (id === 4) {
      window.scrollTo({ top: 2000, behavior: "smooth" });
    }

    setMobileMenuOpen(false);
  };

  return (
    <>
      <Motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          !scrolled
            ? "bg-background/80 backdrop-blur-lg shadow-none border-transparent"
            : "bg-transparent  border-b shadow-sm",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Motion.a
              href="/"
              className="text-2xl font-bold tracking-tight bg-linear-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Portfolio
            </Motion.a>

            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavButton
                    id={link.id}
                    name={link.name}
                    active={active}
                    onClick={() => {
                      handleLinkClick(link.id);
                    }}
                  />
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-gray-400 hover:text-teal-300 hover:bg-white/5 transition-colors"
                aria-label="Toggle theme"
              >
                <Moon
                  size={20}
                  className={theme === "dark" ? "block" : "hidden"}
                  onClick={() => setTheme("light")}
                />
                <Sun
                  size={20}
                  className={theme === "dark" ? "hidden" : "block"}
                  onClick={() => setTheme("dark")}
                />
              </Motion.button>
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2 rounded-lg text-gray-400 hover:text-teal-300 hover:bg-white/5 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </Motion.button>
            </div>
          </div>
        </div>
      </Motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <Motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <Motion.div
              className="fixed top-0 right-0 h-full z-50 bg-background/95 backdrop-blur-lg shadow-xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{ width: "50%" }}
            >
              <div className="flex justify-end p-4">
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-teal-300 hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </Motion.button>
              </div>
              <ul className="flex flex-col items-center gap-6 mt-16">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <NavButton
                      id={link.id}
                      name={link.name}
                      active={active}
                      onClick={handleLinkClick}
                    />
                  </li>
                ))}
              </ul>
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
