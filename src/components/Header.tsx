import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Laptop, Phone } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "صفحه اصلی", href: "#hero" },
  { label: "محصولات", href: "#products" },
  { label: "چرا اتحاد؟", href: "#why-us" },
  { label: "نظرات", href: "#testimonials" },
  { label: "تماس با ما", href: "#footer" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "py-3 px-4 lg:px-8" : "py-0"
      }`}
    >
      <motion.div
        layout
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`transition-all duration-500 ease-out ${
          isScrolled
            ? "glass-strong max-w-5xl mx-auto rounded-2xl shadow-2xl"
            : "glass-strong"
        }`}
      >
        <div className={`${isScrolled ? "px-6" : "container mx-auto px-4 lg:px-8"}`}>
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-14" : "h-16 lg:h-20"
          }`}>
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2">
              <motion.div 
                layout
                className={`rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center transition-all duration-500 ${
                  isScrolled ? "w-8 h-8" : "w-10 h-10"
                }`}
              >
                <Laptop className={`text-secondary-foreground transition-all duration-500 ${
                  isScrolled ? "w-4 h-4" : "w-5 h-5"
                }`} />
              </motion.div>
              <span className={`font-bold text-foreground transition-all duration-500 ${
                isScrolled ? "text-lg" : "text-xl"
              }`}>اتحاد</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <AnimatePresence>
                {!isScrolled && (
                  <motion.a
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    href="tel:+989123456789"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors overflow-hidden whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">۰۹۱۲۳۴۵۶۷۸۹</span>
                  </motion.a>
                )}
              </AnimatePresence>
              <Button variant="cta" size={isScrolled ? "sm" : "default"} className="transition-all duration-300">
                مشاوره رایگان
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10"
            >
              <nav className={`${isScrolled ? "px-6" : "container mx-auto px-4"} py-4 flex flex-col gap-4`}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="cta" size="lg" className="mt-2">
                  مشاوره رایگان
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
};

export default Header;
